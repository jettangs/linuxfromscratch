/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([7],{

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(178);
	
	var _reactRedux = __webpack_require__(267);
	
	var _reactCssModulesSimply = __webpack_require__(284);
	
	var _reactCssModulesSimply2 = _interopRequireDefault(_reactCssModulesSimply);
	
	var _index = __webpack_require__(535);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _common = __webpack_require__(442);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _validator = __webpack_require__(538);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Profile = function (_Component) {
	  _inherits(Profile, _Component);
	
	  function Profile() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Profile);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Profile.__proto__ || Object.getPrototypeOf(Profile)).call.apply(_ref, [this].concat(args))), _this), _this.state = { sig: 'Happy', sigInpIsDisp: false, em: '625436194@163.com', emDispStr: '625436194@163.com', emInpIsDisp: false, pwdInpIsDisp: false, pwdBtnIsClk: false,
	      ogPwdIsInp: false, cir: '', cirInpIsDisp: false, cirWeiboDelBtnIsDisp: false, cirGithubDelBtnIsDisp: false }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Profile, [{
	    key: 'bgChg',
	    value: function bgChg() {
	      console.log("bgChg");
	    }
	  }, {
	    key: 'setInpFoc',
	    value: function setInpFoc(inp, val, text) {
	      var _this2 = this;
	
	      setTimeout(function () {
	        inp = _this2.refs[inp];
	        inp.value = val;
	        inp.placeholder = text;
	        _reactDom2.default.findDOMNode(inp).focus();
	      });
	    }
	  }, {
	    key: 'setInpDisp',
	    value: function setInpDisp(inp, val, text) {
	      var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;
	
	      if (text) {
	        inp.placeholder = text;
	        inp.value = "";
	      }
	      setTimeout(function () {
	        inp.value = val;
	        inp.placeholder = "";
	        _reactDom2.default.findDOMNode(inp).focus();
	      }, time);
	    }
	  }, {
	    key: 'hideAllInp',
	    value: function hideAllInp() {
	      this.setState({ pwdInpIsDisp: false, sigInpIsDisp: false, emInpIsDisp: false, cirInpIsDisp: false });
	    }
	
	    /*---------------------------Signature------------------------*/
	
	  }, {
	    key: 'sigWillChg',
	    value: function sigWillChg() {
	      this.hideAllInp();
	      this.setState({ sigInpIsDisp: true });
	      //需要等到DOM操作完成后，所以这里需要适当的延时才能获得焦点 该时间是浏览器最短执行时间
	      this.setInpFoc("sigInp", this.state.sig);
	    }
	  }, {
	    key: 'sigDidChg',
	    value: function sigDidChg() {
	      var sigInp = this.refs.sigInp;
	      var val = sigInp.value;
	      if (val.length > 10) {
	        this.setInpDisp(sigInp, val, "too long");
	        return;
	      }
	      this.setState({ sig: val, sigInpIsDisp: false });
	    }
	
	    /*---------------------------Email------------------------*/
	
	  }, {
	    key: 'emWillChg',
	    value: function emWillChg() {
	      this.hideAllInp();
	      this.setState({ emInpIsDisp: true });
	      this.setInpFoc("emInp", this.state.em);
	    }
	  }, {
	    key: 'emDidChg',
	    value: function emDidChg() {
	      var emInp = this.refs.emInp;
	      var val = emInp.value;
	      var emDispStr = val;
	      if (!(0, _validator.vldEm)(val)) {
	        this.setInpDisp(emInp, val, "not satisfiable");
	        return;
	      }
	      if (val.length > 20) {
	        emDispStr = val.substr(0, 18);
	        emDispStr += "...";
	      }
	      this.setState({ em: val, emDispStr: emDispStr, emInpIsDisp: false });
	    }
	
	    /*---------------------------Password------------------------*/
	
	  }, {
	    key: 'pwdWillChg',
	    value: function pwdWillChg() {
	      this.hideAllInp();
	      this.setState({ pwdInpIsDisp: true });
	      this.setInpFoc("pwdInp", this.state.em, "your original password");
	    }
	
	    //此时会调用两次 原来密码 和 新密码
	
	  }, {
	    key: 'pwdCfmBtnClk',
	    value: function pwdCfmBtnClk() {
	      var _this3 = this;
	
	      this.setState({ pwdBtnIsClk: true });
	      var pwdInp = this.refs.pwdInp;
	      var val = pwdInp.value;
	      if (!this.state.ogPwdIsInp) {
	        this.props.getUsrInf(data._id, function (data) {
	          if (data.code == 10000) {
	            _this3.props.setUsrInf({ _id: data._id });
	            if (data.user.password == val) {
	              pwdInp.value = "";
	              pwdInp.placeholder = "your new password";
	              _this3.setState({ ogPwdIsInp: true });
	            } else {
	              _this3.setInpDisp(pwdInp, val, "password is wrong");
	            }
	          } else {
	            _this3.setInpDisp(pwdInp, val, "network error");
	          }
	        });
	      } else {
	        if (!(0, _validator.vldPwd)(val)) {
	          this.setInpDisp(pwdInp, val, "not satisfiable");
	        } else {
	          this.props.updUsrInf(this.props.usrInf._id, function (data) {
	            if (data.code == 10000) {
	              _this3.setState({ usrInf: data, pwdInpIsDisp: false, ogPwdIsInp: false, pwdBtnIsClk: false });
	            } else {
	              _this3.setInpDisp(pwdInp, val, "network error");
	            }
	          });
	        }
	      }
	    }
	  }, {
	    key: 'pwdDidChg',
	    value: function pwdDidChg() {
	      var _this4 = this;
	
	      setTimeout(function () {
	        !_this4.state.pwdBtnIsClk && _this4.setState({ pwdInpIsDisp: false });
	      }, 130);
	    }
	
	    /*---------------------------Circles------------------------*/
	
	  }, {
	    key: 'cirWillAdd',
	    value: function cirWillAdd() {
	      this.hideAllInp();
	      this.setState({ cirInpIsDisp: true });
	      this.setInpFoc("cirInp", this.state.cir);
	    }
	  }, {
	    key: 'cirDidAdd',
	    value: function cirDidAdd() {
	      var value = this.refs.cirInp.value;
	      this.setState({ cir: value, cirInpIsDisp: false });
	    }
	  }, {
	    key: 'cirDel',
	    value: function cirDel(val) {
	      console.log(val);
	    }
	  }, {
	    key: 'dispDelBtn',
	    value: function dispDelBtn(val) {
	      val == "weibo" && this.setState({ cirWeiboDelBtnIsDisp: true });
	      val == "github" && this.setState({ cirGithubDelBtnIsDisp: true });
	    }
	  }, {
	    key: 'hideDelBtn',
	    value: function hideDelBtn(val) {
	      val == "weibo" && this.setState({ cirWeiboDelBtnIsDisp: false });
	      val == "github" && this.setState({ cirGithubDelBtnIsDisp: false });
	    }
	
	    // componentDidMount() {
	    //   this.props.chkUsrSgi((data)=>{
	    //     data.code == 10002 && this.props.dispSignBox(true)
	    //   })
	    // }
	
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: 'profile' },
	        _react2.default.createElement(
	          'div',
	          { style: 'header' },
	          _react2.default.createElement('div', { style: 'bg-chg-icon', onClick: this.bgChg.bind(this) }),
	          _react2.default.createElement(
	            'div',
	            { style: 'head-img-frm' },
	            _react2.default.createElement('img', { style: 'head-img', src: './assets/profile-head.png' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'lv' },
	            '18'
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'infor' },
	            _react2.default.createElement(
	              'div',
	              { style: 'name' },
	              'Jettangs'
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: 'circles' },
	              _react2.default.createElement('i', { style: 'weibo-icon' }),
	              _react2.default.createElement('i', { style: 'github-icon' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: 'sig' },
	              !this.state.sigInpIsDisp && _react2.default.createElement(
	                'span',
	                { ref: 'sig', style: 'sig-val' },
	                this.state.sig
	              ),
	              this.state.sigInpIsDisp && _react2.default.createElement('input', { ref: 'sigInp', onBlur: this.sigDidChg.bind(this), style: 'sig-inp', type: 'text' }),
	              !this.state.sigInpIsDisp && _react2.default.createElement('i', { ref: 'sigBtn', style: 'sig-chg-btn', onClick: this.sigWillChg.bind(this) })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: 'bot' },
	          _react2.default.createElement(
	            'div',
	            { style: 'bot-inf' },
	            _react2.default.createElement(
	              'div',
	              { style: 'stuff' },
	              _react2.default.createElement('i', { style: 'arg-icon' }),
	              _react2.default.createElement(
	                'span',
	                { style: 'label' },
	                '26'
	              ),
	              _react2.default.createElement('i', { style: 'gold-icon' }),
	              _react2.default.createElement(
	                'span',
	                { style: 'label' },
	                '153'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: 'vitality' },
	              _react2.default.createElement(
	                'div',
	                { style: 'following' },
	                _react2.default.createElement(
	                  'div',
	                  { style: 'vital-num' },
	                  '163'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { style: 'vital-lbl' },
	                  'Following'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: 'followers' },
	                _react2.default.createElement(
	                  'div',
	                  { style: 'vital-num' },
	                  '121'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { style: 'vital-lbl' },
	                  'Followers'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: 'postings' },
	                _react2.default.createElement(
	                  'div',
	                  { style: 'vital-num' },
	                  '103'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { style: 'vital-lbl' },
	                  'Postings'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'bot-set' },
	            _react2.default.createElement(
	              'div',
	              { style: 'set-exp' },
	              _react2.default.createElement(
	                'div',
	                { style: 'exp-lbl' },
	                'Experience'
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: 'exp-lv-start' },
	                'Lv.18'
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: 'exp-lv-end' },
	                'Lv.19'
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: 'exp-bar' },
	                _react2.default.createElement('div', { style: 'exp-val' })
	              ),
	              _react2.default.createElement('div', { style: 'cln' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: 'set-em' },
	              _react2.default.createElement(
	                'div',
	                { style: 'em-lbl' },
	                'Email'
	              ),
	              !this.state.emInpIsDisp && _react2.default.createElement(
	                'div',
	                { style: 'em-val' },
	                this.state.emDispStr
	              ),
	              this.state.emInpIsDisp && _react2.default.createElement('input', { ref: 'emInp', onBlur: this.emDidChg.bind(this), style: 'em-inp', type: 'text' }),
	              !this.state.emInpIsDisp && _react2.default.createElement('div', { style: 'em-chg-btn', onClick: this.emWillChg.bind(this) }),
	              _react2.default.createElement('div', { style: 'cln' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: 'set-pwd' },
	              _react2.default.createElement(
	                'div',
	                { style: 'pwd-lbl' },
	                'Password'
	              ),
	              this.state.pwdInpIsDisp && _react2.default.createElement('input', { ref: 'pwdInp', onBlur: this.pwdDidChg.bind(this), style: 'pwd-inp', type: 'password' }),
	              this.state.pwdInpIsDisp && _react2.default.createElement('div', { style: 'pwd-ok-btn', onClick: this.pwdCfmBtnClk.bind(this) }),
	              !this.state.pwdInpIsDisp && _react2.default.createElement('div', { style: 'pwd-chg-btn', onClick: this.pwdWillChg.bind(this) }),
	              _react2.default.createElement('div', { style: 'cln' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: 'set-cir' },
	              _react2.default.createElement(
	                'div',
	                { style: 'cir-lbl' },
	                'Circles'
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: 'cir-val' },
	                _react2.default.createElement('div', { style: 'cir-weibo', onMouseOver: this.dispDelBtn.bind(this, "weibo"), onMouseOut: this.hideDelBtn.bind(this, "weibo") }),
	                this.state.cirWeiboDelBtnIsDisp && _react2.default.createElement('div', { style: 'cir-weibo-del-btn-shim' }),
	                this.state.cirWeiboDelBtnIsDisp && _react2.default.createElement('div', { style: 'cir-weibo-del-btn', onMouseOver: this.dispDelBtn.bind(this, "weibo"), onClick: this.cirDel.bind(this, "weibo") }),
	                _react2.default.createElement('div', { style: 'cir-github', onMouseOver: this.dispDelBtn.bind(this, "github"), onMouseOut: this.hideDelBtn.bind(this, "github") }),
	                this.state.cirGithubDelBtnIsDisp && _react2.default.createElement('div', { style: 'cir-github-del-btn-shim' }),
	                this.state.cirGithubDelBtnIsDisp && _react2.default.createElement('div', { style: 'cir-github-del-btn', onMouseOver: this.dispDelBtn.bind(this, "github"), onClick: this.cirDel.bind(this, "weibo") })
	              ),
	              _react2.default.createElement('div', { style: 'cir-add', onClick: this.cirWillAdd.bind(this) }),
	              this.state.cirInpIsDisp && _react2.default.createElement('input', { ref: 'cirInp', onBlur: this.cirDidAdd.bind(this), style: 'cir-inp', type: 'text' }),
	              _react2.default.createElement('div', { style: 'cln' })
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Profile;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, prop) {
	  return {
	    usrInf: state.common.usrInf
	  };
	};
	
	var mapDispatchToProps = {
	  setUsrInf: function setUsrInf(val) {
	    return _common2.default.setUsrInf(val);
	  },
	  setUsrIsSgi: function setUsrIsSgi(val) {
	    return _common2.default.setUsrIsSgi(val);
	  },
	  chkUsrSgi: function chkUsrSgi(cb) {
	    return _common2.default.chkUsrSgi(cb);
	  },
	  dispSignBox: function dispSignBox(bool) {
	    return _common2.default.dispSignBox(bool);
	  },
	  updUsrInf: function updUsrInf(dat, cb) {
	    return _common2.default.updUsrInf(dat, cb);
	  },
	  getUsrInf: function getUsrInf(id, cb) {
	    return _common2.default.getUsrInf(id, cb);
	  }
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactCssModulesSimply2.default)(Profile, _index2.default));

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(536);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(438)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(536, function() {
				var newContent = __webpack_require__(536);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(437)();
	// imports
	exports.i(__webpack_require__(441), undefined);
	exports.i(__webpack_require__(446), undefined);
	
	// module
	exports.push([module.id, ".index__icon___fZTtl {\r\n    background-repeat: no-repeat;\r\n    display: inline-block;\r\n    background-position: center center;\r\n}\r\n\r\n.index__profile___B9oKV {\r\n    width: 430px;\r\n    height: 640px;\r\n    margin: 0 auto;\r\n    background: white;\r\n    border-radius: 5px;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .15);\r\n}\r\n\r\n.index__header___2Rmbv {\r\n    height: 190px;\r\n    border-radius: 5px 5px 0 0;\r\n    background-image: url(" + __webpack_require__(537) + ");\r\n}\r\n\r\n.index__bg-chg-icon___ne3sg {\r\n    float: right;\r\n    background-size: 18px;\r\n    cursor: pointer;\r\n    width: 30px;\r\n    height: 30px;\r\n    vertical-align: middle;\r\n    background-image: " + __webpack_require__(446).locals["change"] + ";\r\n}\r\n\r\n.index__head-img___3W-Zv {\r\n    width: 87px;\r\n    height: 87px;\r\n    display: block;\r\n    border-radius: 50%;\r\n    border: 4px solid white;\r\n    background-color: white;\r\n}\r\n\r\n.index__head-img-frm___2xy_S {\r\n    border-radius: 50% 50% 13% 50%;\r\n    width: 87px;\r\n    height: 87px;\r\n    margin-top: 70px;\r\n    margin-left: 70px;\r\n    float: left;\r\n    background: white;\r\n    user-select: none;\r\n}\r\n\r\n.index__infor___3DUaE {\r\n    margin-top: 85px;\r\n    margin-left: 20px;\r\n    float: left;\r\n}\r\n\r\n.index__name___2Pc2r {\r\n    float: left;\r\n    font-family: 'Source Sans Pro','Lucida Grande',sans-serif;\r\n    color: white;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.index__lv___yHInV {\r\n    margin-top: 135px;\r\n    float: left;\r\n    background: white;\r\n    margin-left: -21px;\r\n    color: orange;\r\n    border-radius: 50%;\r\n    font-weight: 600;\r\n    font-size: 0.8rem;\r\n    padding: 2px;\r\n}\r\n\r\n\r\n.index__inp___2JHmZ {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    outline: none;\r\n    font-size: 0.9rem;\r\n    color: #444;\r\n    border-image: initial;\r\n    border-radius: 5px;\r\n}\r\n\r\n.index__sig___ZCa1B {\r\n    height: 30px;\r\n    line-height: 30px;\r\n    clear: both;\r\n    color: white;\r\n    margin-top: 40px;\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n\r\n.index__sig-inp___1s7-3 {\r\n    float: left;\r\n    color: #444;\r\n    border: 1px solid white;\r\n    margin-top: 3px;\r\n    width: 160px;\r\n    height: 25px;\r\n}\r\n\r\n.index__circles___3BxMR {\r\n    margin-left: 15px;\r\n    float:left;\r\n}\r\n\r\n\r\n.index__bot___2Sr-s {\r\n\r\n}\r\n\r\n.index__label___3YjQd {\r\n    font-size: 1rem;\r\n    float: left;\r\n    vertical-align: middle;\r\n    color: #444;\r\n    display: inline-block;\r\n    margin-left: 2px;\r\n}\r\n\r\n.index__sig-chg-btn___3DtoO {\r\n    float: left;\r\n    background-size: 15px;\r\n    cursor: pointer;\r\n    width: 30px;\r\n    height: 30px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n    background-image: " + __webpack_require__(446).locals["signature"] + ";\r\n}\r\n\r\n.index__sig-val___1yHii {\r\n    letter-spacing: 1px;\r\n    max-width: 188px;\r\n    height: 30px;\r\n    font-size: 1rem;\r\n    float: left;\r\n}\r\n\r\n.index__stuff___1nCPt {\r\n    float: left;\r\n    margin-left: 15px;\r\n    margin-top: 10px;\r\n    height: 25px;\r\n    line-height: 25px;\r\n}\r\n\r\n.index__arg-icon___3Yhv_ {\r\n    margin-left: 15px;\r\n    float: left;\r\n    width: 25px;\r\n    height: 25px;\r\n    background-size: 25px;\r\n    background-image: " + __webpack_require__(446).locals["agrees"] + ";\r\n}\r\n\r\n.index__gold-icon___2VYzH {\r\n    margin-left: 20px;\r\n    background-size: 25px;\r\n    float: left;\r\n    width: 25px;\r\n    height: 25px;\r\n    background-image: " + __webpack_require__(446).locals["golds"] + ";\r\n}\r\n\r\n.index__weibo-icon___Vry33 {\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    border: 2px solid white;\r\n    margin-left: 10px;\r\n    width: 22px;\r\n    height: 22px;\r\n    background-size: 20px;\r\n    background-image: " + __webpack_require__(446).locals["weibo"] + ";\r\n}\r\n\r\n.index__github-icon___HeSdG {\r\n    cursor: pointer;\r\n    margin-left: 10px;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    border: 2px solid white;\r\n    width: 22px;\r\n    height: 22px;\r\n    background-size: 20px;\r\n    background-image: " + __webpack_require__(446).locals["github"] + ";\r\n}\r\n\r\n.index__bot-inf___9NBeI {\r\n    width: 100%;\r\n    float: left;\r\n    border-bottom: 1px solid #F0F0F0;\r\n}\r\n\r\n.index__vitality___1O6gN {\r\n    margin-top: -25px;\r\n    background: white;\r\n    border-radius: 5px;\r\n    padding: 10px 5px;\r\n    float: left;\r\n    height: 70px;\r\n    margin-left: 25px;\r\n}\r\n\r\n.index__following___2hg3- {\r\n    float: left;\r\n    border-right: 1px solid #F0F0F0;\r\n    height: 50px;\r\n    width: 75px;\r\n}\r\n\r\n.index__followers___mhTld {\r\n    float: left;\r\n    border-right: 1px solid #F0F0F0;\r\n    height: 50px;\r\n    width: 75px;\r\n}\r\n\r\n.index__postings___2zi4f {\r\n    float: left;\r\n    height: 50px;\r\n    width: 75px;\r\n}\r\n\r\n.index__vital-num___DK3Sn {\r\n    margin-top: 2px;\r\n    color: #444;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.index__vital-num___DK3Sn:hover {\r\n    color: #6C78B6;\r\n}\r\n\r\n.index__vital-lbl___-lOZ2 {\r\n    margin-top: 4px;\r\n    font-size: 0.8rem;\r\n    color: #919191;\r\n    text-align: center;\r\n}\r\n\r\n.index__bot-set___1dEG0 {\r\n    padding: 0 30px;\r\n    clear: both;\r\n    overflow: hidden;\r\n}\r\n\r\n.index__cln___2H5kz {\r\n    clear: both;\r\n}\r\n\r\n/*---------------exp--------------*/\r\n\r\n.index__set-exp___3umt_ {\r\n    padding-bottom: 20px;\r\n    margin-top: 20px;\r\n    border-bottom: 1px solid #F0F0F0;\r\n    line-height: 50px;\r\n}\r\n\r\n.index__exp-lbl___1SI_t {\r\n    margin-left: 30px;\r\n    font-weight: bold;\r\n    float: left;\r\n}\r\n\r\n.index__exp-bar___22tt2 {\r\n    margin-left: 40px;\r\n    float: left;\r\n    width: 180px;\r\n    height: 6px;\r\n    background-color: #F0F0F0;\r\n}\r\n\r\n.index__exp-val___kVrwl {\r\n    z-index: 1;\r\n    position: relative;\r\n    background-color: #619fe8;\r\n    height: 100%;\r\n    width: 20px;\r\n    float: left;\r\n    display: inline;\r\n    font-size: 0.9rem;\r\n    color: #444;\r\n}\r\n\r\n.index__exp-lv-start___1SMbQ {\r\n    font-size: 0.9rem;\r\n    margin-left: 40px;\r\n    line-height: 30px;\r\n    float: left;\r\n}\r\n\r\n.index__exp-lv-end___hk_TP {\r\n    margin-left: 110px;\r\n    line-height: 30px;\r\n    float: left;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n/*--------------email--------------*/\r\n\r\n.index__set-em___2neEW {\r\n    padding-bottom: 20px;\r\n    margin-top: 20px;\r\n    line-height: 50px;\r\n    border-bottom: 1px solid #F0F0F0;\r\n}\r\n\r\n.index__em-lbl___2VFgr {\r\n    margin-left: 30px;\r\n    font-weight: bold;\r\n    float: left;\r\n}\r\n\r\n.index__em-val___3HzbH {\r\n    font-size: 0.9rem;\r\n    color: #444;\r\n    margin-left: 80px;\r\n    max-width: 170px;\r\n    height: 50px;\r\n    float: left;\r\n}\r\n\r\n.index__em-chg-btn___1CEfd {\r\n    float: left;\r\n    background-size: 15px;\r\n    cursor: pointer;\r\n    width: 30px;\r\n    height: 51px;\r\n    margin-left: 5px;\r\n    background-image: " + __webpack_require__(446).locals["setting-change"] + ";\r\n}\r\n\r\n.index__em-inp___TMs5v {\r\n    float: left;\r\n    color: #444;\r\n    border: none;\r\n    background: #F0F0F0;\r\n    margin-top: 10px;\r\n    margin-left: 80px;\r\n    width: 170px;\r\n    height: 30px;\r\n}\r\n\r\n/*--------------password--------------*/\r\n\r\n.index__set-pwd___qmHEB {\r\n    margin-top: 20px;\r\n    line-height: 50px;\r\n    border-bottom: 1px solid #F0F0F0;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.index__pwd-lbl___F4zJ0 {\r\n    margin-left: 30px;\r\n    margin-right: 45px;\r\n    font-weight: bold;\r\n    float: left;\r\n}\r\n\r\n.index__pwd-val___-Ckzd {\r\n    font-size: 0.9rem;\r\n    color: #444;\r\n    margin-left: 45px;\r\n    max-width: 170px;\r\n    height: 50px;\r\n    float: left;\r\n}\r\n\r\n.index__pwd-val-hide___8zIVx {\r\n    display: none;\r\n}\r\n\r\n.index__pwd-chg-btn___2ov88 {\r\n    float: left;\r\n    background-size: 15px;\r\n    cursor: pointer;\r\n    width: 30px;\r\n    height: 51px;\r\n    background-image: " + __webpack_require__(446).locals["setting-change"] + ";\r\n}\r\n\r\n.index__pwd-ok-btn___1bott {\r\n    float: left;\r\n    background-size: 20px;\r\n    cursor: pointer;\r\n    width: 30px;\r\n    height: 51px;\r\n    background-image: " + __webpack_require__(446).locals["ok"] + ";\r\n}\r\n\r\n.index__pwd-inp___z5lMT {\r\n    float: left;\r\n    color: #444;\r\n    border: none;\r\n    background: #F0F0F0;\r\n    margin-top: 10px;\r\n    margin-right: 5px;\r\n    width: 170px;\r\n    height: 30px;\r\n}\r\n\r\n.index__pwd-inp-hide___1G_HS {\r\n    display: none;\r\n}\r\n\r\n/*--------------circles--------------*/\r\n\r\n.index__set-cir___1IgLI {\r\n    clear: both;\r\n    margin-top: 20px;\r\n    vertical-align: middle;\r\n    line-height: 51px;\r\n}\r\n\r\n.index__cir-lbl___3zDn0 {\r\n    margin-left: 30px;\r\n    font-weight: bold;\r\n    float: left;\r\n}\r\n\r\n.index__cir-val___bduqe {\r\n    font-size: 0.9rem;\r\n    display: table-cell;\r\n    max-width: 188px;\r\n    height: 50px;\r\n    float: left;\r\n    margin-left: 55px;\r\n}\r\n\r\n.index__cir-weibo___3-Ezm {\r\n    float: left;\r\n    border-radius: 50%;\r\n    width: 51px;\r\n    height: 51px;\r\n    background-size: 25px;\r\n    background-image: " + __webpack_require__(446).locals["weibo"] + ";\r\n}\r\n\r\n.index__cir-github___3G1i2 {\r\n    float: left;\r\n    border-radius: 50%;\r\n    width: 51px;\r\n    height: 51px;\r\n    background-size: 25px;\r\n    background-image: " + __webpack_require__(446).locals["github"] + ";\r\n}\r\n\r\n.index__cir-del-btn___HF2ev {\r\n    margin-top: 8px;\r\n    margin-left: -22px;\r\n    float: left;\r\n    border-radius: 50%;\r\n    background-size: 15px;\r\n    cursor: pointer;\r\n    width: 15px;\r\n    height: 15px;\r\n    vertical-align: middle;\r\n    background-image: " + __webpack_require__(446).locals["close-bold"] + ";\r\n    display: inline-block;\r\n}\r\n\r\n.index__cir-del-btn-shim___29Tzd {\r\n    margin-top: 8px;\r\n    margin-left: -22px;\r\n    float: left;\r\n    border-radius: 50%;\r\n    background-size: 15px;\r\n    cursor: pointer;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: white;\r\n    vertical-align: middle;\r\n}\r\n\r\n.index__cir-weibo-del-btn___3JsEn {\r\n}\r\n\r\n.index__cir-weibo-del-btn-shim___2WBMX {\r\n}\r\n\r\n.index__cir-github-del-btn___2v-jK {\r\n}\r\n\r\n.index__cir-github-del-btn-shim___3NwkF {\r\n}\r\n\r\n.index__cir-add___y6ZSb {\r\n    float: left;\r\n    background-size: 15px;\r\n    cursor: pointer;\r\n    width: 30px;\r\n    height: 51px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n    background-image: " + __webpack_require__(446).locals["add"] + ";\r\n}\r\n\r\n.index__cir-inp___JYobb {\r\n    display: block;\r\n    clear: both;\r\n    color: #444;\r\n    border: none;\r\n    background: #F0F0F0;\r\n    margin-left: 150px;\r\n    width: 170px;\r\n    height: 30px;\r\n}\r\n\r\n", ""]);
	
	// exports
	exports.locals = {
		"phone": "" + __webpack_require__(441).locals["phone"] + "",
		"tablet-portrait": "" + __webpack_require__(441).locals["tablet-portrait"] + "",
		"tablet-landscape": "" + __webpack_require__(441).locals["tablet-landscape"] + "",
		"desktop": "" + __webpack_require__(441).locals["desktop"] + "",
		"big-desktop": "" + __webpack_require__(441).locals["big-desktop"] + "",
		"weibo": "" + __webpack_require__(446).locals["weibo"] + "",
		"github": "" + __webpack_require__(446).locals["github"] + "",
		"zhihu": "" + __webpack_require__(446).locals["zhihu"] + "",
		"twitter": "" + __webpack_require__(446).locals["twitter"] + "",
		"location": "" + __webpack_require__(446).locals["location"] + "",
		"signature": "" + __webpack_require__(446).locals["signature"] + "",
		"agrees": "" + __webpack_require__(446).locals["agrees"] + "",
		"golds": "" + __webpack_require__(446).locals["golds"] + "",
		"setting-change": "" + __webpack_require__(446).locals["setting-change"] + "",
		"add": "" + __webpack_require__(446).locals["add"] + "",
		"change": "" + __webpack_require__(446).locals["change"] + "",
		"close-bold": "" + __webpack_require__(446).locals["close-bold"] + "",
		"ok": "" + __webpack_require__(446).locals["ok"] + "",
		"icon": "index__icon___fZTtl",
		"profile": "index__profile___B9oKV",
		"header": "index__header___2Rmbv",
		"bg-chg-icon": "index__bg-chg-icon___ne3sg index__icon___fZTtl",
		"head-img": "index__head-img___3W-Zv",
		"head-img-frm": "index__head-img-frm___2xy_S",
		"infor": "index__infor___3DUaE",
		"name": "index__name___2Pc2r",
		"lv": "index__lv___yHInV",
		"inp": "index__inp___2JHmZ",
		"sig": "index__sig___ZCa1B",
		"sig-inp": "index__sig-inp___1s7-3 index__inp___2JHmZ",
		"circles": "index__circles___3BxMR",
		"bot": "index__bot___2Sr-s",
		"label": "index__label___3YjQd",
		"sig-chg-btn": "index__sig-chg-btn___3DtoO index__icon___fZTtl",
		"sig-val": "index__sig-val___1yHii",
		"stuff": "index__stuff___1nCPt",
		"arg-icon": "index__arg-icon___3Yhv_ index__icon___fZTtl",
		"gold-icon": "index__gold-icon___2VYzH index__icon___fZTtl",
		"weibo-icon": "index__weibo-icon___Vry33 index__icon___fZTtl",
		"github-icon": "index__github-icon___HeSdG index__icon___fZTtl",
		"bot-inf": "index__bot-inf___9NBeI",
		"vitality": "index__vitality___1O6gN",
		"following": "index__following___2hg3-",
		"followers": "index__followers___mhTld",
		"postings": "index__postings___2zi4f",
		"vital-num": "index__vital-num___DK3Sn",
		"vital-lbl": "index__vital-lbl___-lOZ2",
		"bot-set": "index__bot-set___1dEG0",
		"cln": "index__cln___2H5kz",
		"set-exp": "index__set-exp___3umt_",
		"exp-lbl": "index__exp-lbl___1SI_t",
		"exp-bar": "index__exp-bar___22tt2",
		"exp-val": "index__exp-val___kVrwl",
		"exp-lv-start": "index__exp-lv-start___1SMbQ",
		"exp-lv-end": "index__exp-lv-end___hk_TP",
		"set-em": "index__set-em___2neEW",
		"em-lbl": "index__em-lbl___2VFgr",
		"em-val": "index__em-val___3HzbH",
		"em-chg-btn": "index__em-chg-btn___1CEfd index__icon___fZTtl",
		"em-inp": "index__em-inp___TMs5v index__inp___2JHmZ",
		"set-pwd": "index__set-pwd___qmHEB",
		"pwd-lbl": "index__pwd-lbl___F4zJ0",
		"pwd-val": "index__pwd-val___-Ckzd",
		"pwd-val-hide": "index__pwd-val-hide___8zIVx",
		"pwd-chg-btn": "index__pwd-chg-btn___2ov88 index__icon___fZTtl",
		"pwd-ok-btn": "index__pwd-ok-btn___1bott index__icon___fZTtl",
		"pwd-inp": "index__pwd-inp___z5lMT index__inp___2JHmZ",
		"pwd-inp-hide": "index__pwd-inp-hide___1G_HS",
		"set-cir": "index__set-cir___1IgLI",
		"cir-lbl": "index__cir-lbl___3zDn0",
		"cir-val": "index__cir-val___bduqe",
		"cir-weibo": "index__cir-weibo___3-Ezm index__icon___fZTtl",
		"cir-github": "index__cir-github___3G1i2 index__icon___fZTtl",
		"cir-del-btn": "index__cir-del-btn___HF2ev index__icon___fZTtl",
		"cir-del-btn-shim": "index__cir-del-btn-shim___29Tzd",
		"cir-weibo-del-btn": "index__cir-weibo-del-btn___3JsEn index__cir-del-btn___HF2ev index__icon___fZTtl",
		"cir-weibo-del-btn-shim": "index__cir-weibo-del-btn-shim___2WBMX index__cir-del-btn-shim___29Tzd",
		"cir-github-del-btn": "index__cir-github-del-btn___2v-jK index__cir-del-btn___HF2ev index__icon___fZTtl",
		"cir-github-del-btn-shim": "index__cir-github-del-btn-shim___3NwkF index__cir-del-btn-shim___29Tzd",
		"cir-add": "index__cir-add___y6ZSb index__icon___fZTtl",
		"cir-inp": "index__cir-inp___JYobb index__inp___2JHmZ"
	};

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/profile-context.png";

/***/ },

/***/ 538:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//Username, Password length: 2-10, can only be Number,Chinese or English character
	
	var usnaReg = /^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z0-9]{2,16}$/;
	var pwdReg = /^[a-zA-Z0-9]{6,10}$/;
	var emReg = /^(?=\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$).{8,28}$/;
	
	var vldUsna = exports.vldUsna = function vldUsna(val) {
	    return usnaReg.test(val);
	};
	
	var vldPwd = exports.vldPwd = function vldPwd(val) {
	    return pwdReg.test(val);
	};
	
	var vldEm = exports.vldEm = function vldEm(val) {
	    return emReg.test(val);
	};

/***/ }

});
//# sourceMappingURL=7.bundle.js.map