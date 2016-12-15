var express = require('express');
var User = require('../models/user');

var router = express.Router();

//获取cookies
router.get('/',function(req,res) {
  var user = req.session.user
  console.log(user)
})

router.get('/:any',function (req, res, next){
  if(req.session.user){
		res.json({code:10002,message:"Fail: user haven't log in yet"});
    return
  }
  next()
})

//用户登录
router.post('/session', function(req, res) {
  var findCondition;
  var username = req.body.username
  var email = req.body.email
  
  if(username) {
    findCondition = {username:username}
  }else if (email) {
    findCondition = {email:email}
  }
  User.findOne(findCondition,function(err, user) {
    if (err) {
      res.json({code:10006,message:'Fail: '+ err});
      return 
    }
    if(!user) {
      res.json({code:10012,message:'Fail: user not existed'});
      return 
    }
    if(user.password == req.body.password) {
      req.session.user=user
      res.json({code:10000,message:'Success: user login',user:user});
    }else {
      res.json({code:10005,message:'Fail: password incorrect'});
    }
  });
});

//用户是否登录
router.get('/session',function (req, res){
  var user = req.session.user
  return res.json({code:10000,messgage:"Success: user log in",_id:user._id})
})

//用户退出
router.delete('/session',function (req, res){
  req.session.user = null;
  return res.json({code:10000,messgage:"Success: user logout success"})
})


//用户注册
router.post('/user', function(req, res) {
  var user = new User(req.body);
    user.save(function(err) {
      if (err) {
        var errMsg
        if(err.errmsg && err.errmsg.indexOf("duplicate key") >= 0){
          if( err.errmsg.indexOf("email") >= 0) {
            res.json({code:10008 ,message:"Fail: email already existed"})
          }else if(err.errmsg.indexOf("username") >= 0) {
            res.json({code:10007 ,message:"Fail: username already existed"})
          }
        }else {
          var code
          var e = err.errors
          if(e.email && e.email.name == "ValidatorError") {
              code = 10009
          }else if(e.password && e.password.name == "ValidatorError") {
              code = 10011
          }else if(e.username && e.username.name == "ValidatorError") {
              code = 10010
          }
          errMsg = getErrMsg(err.errors)
          res.json({code:code ,message:'Fail: invaild parameter,' + errMsg})
        }
      } else {
        res.json({code:10000 ,message:'Success: add user',user:user})
      }
    });
});

//获取全部用户信息
router.get('/user',function (req, res){
	User.find(function(err, user) {
    if( err) {
      res.json({code:10006,message:'Fail: '+ err});
      return 
    }
		res.json({code:10000,message:'Success: get user informations',user:user});
	});
})

//获取用户信息
router.get('/user/:id',function (req, res){
	User.findOne({ _id: req.params.id },function(err, user) {
		if (err) {
      res.json({code:10006,message:'Fail: '+ err});
      return 
		}
    user.password = undefined
		res.json({code:10000,message:'Success: get user informations',user:user});
	});
})

//获取用户密码
router.get('/user/:id/password',function (req, res){
	User.findOne({ _id: req.params.id },function(err, user) {
		if (err) {
      res.json({code:10006,message:'Fail: '+ err});
      return 
		}
		res.json({code:10000,message:'Success: get user informations',password:user.password});
	});
})

//更新用户信息
router.put('/user/:id',function (req, res){
  User.findOne({ _id: req.params.id }, function(err, user) {
      if(err) {
        res.json({code:10006,message:'Fail: '+ err});
        return 
      }
      for (prop in req.body) {
        user[prop] = req.body[prop];
      }
      user.save(function(err) {
        if (err) {
          var errMsg
          if(err.errmsg && err.errmsg.indexOf("duplicate key") >= 0){
            if( err.errmsg.indexOf("email") >= 0) {
              errMsg = "Email already existed"
            }else if(err.errmsg.indexOf("username") >= 0) {
              errMsg = "Username already existed"
            }
          }else {
            errMsg = getErrMsg(err.errors)
          }
          res.json({code:10001 ,message:'Fail: invaild parameter,' + errMsg})
        }else {
          res.json({code:10000,message: 'Success: update user informations',user:user});
        }
      });
	});
})

//更新用户密码
router.put('/user/:id/password',function (req, res){
  User.findOne({ _id: req.params.id }, function(err, user) {
      if(err) {
        res.json({code:10006,message:'Fail: '+ err});
        return 
      }
      user.password = req.body.password;
      user.save(function(err) {
        if(err) {
          res.json({code:10006,message:'Fail: '+ err});
          return 
        }
        res.json({code:10000,message: 'Success: reset user password'});
      });
	});
})

function getErrMsg(errs) {
	var PropertyList='';
	for(i in errs) {
		PropertyList=PropertyList+errs[i].message+'\r';
	}
	return PropertyList
}

module.exports = router;
