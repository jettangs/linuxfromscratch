/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([5],{

/***/ 524:
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
	
	var _reactRedux = __webpack_require__(267);
	
	var _reactCssModulesSimply = __webpack_require__(284);
	
	var _reactCssModulesSimply2 = _interopRequireDefault(_reactCssModulesSimply);
	
	var _b1c986758b29481e8b94A86ef15ed8cc = __webpack_require__(525);
	
	var _b1c986758b29481e8b94A86ef15ed8cc2 = _interopRequireDefault(_b1c986758b29481e8b94A86ef15ed8cc);
	
	var _reply = __webpack_require__(526);
	
	var _reply2 = _interopRequireDefault(_reply);
	
	var _index = __webpack_require__(527);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _common = __webpack_require__(442);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _dom = __webpack_require__(529);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Posting = function (_Component) {
	  _inherits(Posting, _Component);
	
	  function Posting() {
	    _classCallCheck(this, Posting);
	
	    return _possibleConstructorReturn(this, (Posting.__proto__ || Object.getPrototypeOf(Posting)).apply(this, arguments));
	  }
	
	  _createClass(Posting, [{
	    key: 'getUsrnamRe',
	    value: function getUsrnamRe(id) {
	      var author = void 0;
	      _reply2.default.map(function (item) {
	        if (item._id == id) author = item.author;
	      });
	      return author;
	    }
	  }, {
	    key: 'favIcoClk',
	    value: function favIcoClk(cmtUid) {
	      var _this2 = this;
	
	      //this.props.setUsrIsSgi(true)
	      this.props.chkUsrSgi(function (data) {
	        if (data.code == 10000) {
	          console.log(cmtUid);
	        } else {
	          _this2.props.dispSignBox(true);
	        }
	      });
	    }
	  }, {
	    key: 'reIcoClk',
	    value: function reIcoClk(cmtUid) {
	      var _this3 = this;
	
	      //this.props.setUsrIsSgi(true)
	      this.props.chkUsrSgi(function (data) {
	        if (data.code == 10000) {
	          console.log(cmtUid);
	        } else {
	          _this3.props.dispSignBox(true);
	        }
	      });
	    }
	  }, {
	    key: 'pstSco',
	    value: function pstSco() {}
	  }, {
	    key: 'wheel',
	    value: function wheel() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var replyList = _reply2.default.map(function (item, index) {
	        var replyPrefix = "";
	        if (item.ref != _b1c986758b29481e8b94A86ef15ed8cc2.default.id) {
	          replyPrefix = "@" + _this4.getUsrnamRe(item.ref) + " ";
	        }
	        return _react2.default.createElement(
	          'div',
	          { style: "item", key: item._id },
	          _react2.default.createElement(
	            'div',
	            { style: 'head-img' },
	            _react2.default.createElement('img', { src: item.head_img })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'right' },
	            _react2.default.createElement(
	              'div',
	              { style: 'top' },
	              _react2.default.createElement(
	                'span',
	                { style: 'author' },
	                item.author
	              ),
	              _react2.default.createElement(
	                'span',
	                { style: 'date' },
	                'replied ',
	                item.date.substr(0, item.date.indexOf(' '))
	              ),
	              _react2.default.createElement(
	                'span',
	                { style: 'right-items' },
	                _react2.default.createElement('div', { onClick: _this4.reIcoClk.bind(_this4, item._id), style: 'reply' }),
	                _react2.default.createElement('div', { onClick: _this4.favIcoClk.bind(_this4, item._id), style: 'like' }),
	                _react2.default.createElement(
	                  'div',
	                  { style: 'floor' },
	                  '#',
	                  index + 2
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: 'content' },
	              _react2.default.createElement(
	                'span',
	                { style: 'replyPrefix' },
	                replyPrefix
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                item.content
	              )
	            )
	          )
	        );
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { style: 'post-frame', onWheel: this.pstSco.bind(this) },
	        _react2.default.createElement(
	          'div',
	          { style: 'post-body' },
	          _react2.default.createElement(
	            'div',
	            { style: 'post-info' },
	            _react2.default.createElement(
	              'div',
	              { style: 'head-img' },
	              _react2.default.createElement('img', { src: _b1c986758b29481e8b94A86ef15ed8cc2.default.head_img })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: 'right' },
	              _react2.default.createElement(
	                'div',
	                { style: 'title' },
	                _b1c986758b29481e8b94A86ef15ed8cc2.default.title
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: 'buttom' },
	                _react2.default.createElement(
	                  'span',
	                  { style: 'author' },
	                  _b1c986758b29481e8b94A86ef15ed8cc2.default.author
	                ),
	                _react2.default.createElement(
	                  'span',
	                  { style: 'date' },
	                  'asked ',
	                  _b1c986758b29481e8b94A86ef15ed8cc2.default.date.substr(0, _b1c986758b29481e8b94A86ef15ed8cc2.default.date.indexOf(' '))
	                ),
	                _react2.default.createElement(
	                  'span',
	                  { style: 'views' },
	                  'views : ',
	                  _b1c986758b29481e8b94A86ef15ed8cc2.default.views
	                ),
	                _react2.default.createElement(
	                  'span',
	                  { style: 'right-items' },
	                  _react2.default.createElement('div', { style: 'reply' }),
	                  _react2.default.createElement(
	                    'div',
	                    { style: 'floor' },
	                    "#1"
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'post-content' },
	            _b1c986758b29481e8b94A86ef15ed8cc2.default.content
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'reply-list' },
	            replyList
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'reply-box' },
	            _react2.default.createElement('textarea', null)
	          )
	        )
	      );
	    }
	  }]);
	
	  return Posting;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {};
	};
	
	var mapDispatchToProps = {
	  dispSignBox: function dispSignBox(data) {
	    return _common2.default.dispSignBox(data);
	  },
	  chkUsrSgi: function chkUsrSgi(cb) {
	    return _common2.default.chkUsrSgi(cb);
	  },
	  getDomValue: function getDomValue(name, param) {
	    return _common2.default.getDomValue(name, param);
	  },
	  setDomValue: function setDomValue(name, param, value) {
	    return _common2.default.setDomValue(name, param, value);
	  },
	  setUsrIsSgi: function setUsrIsSgi(bool) {
	    return _common2.default.setUsrIsSgi(bool);
	  }
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactCssModulesSimply2.default)(Posting, _index2.default));

/***/ },

/***/ 525:
/***/ function(module, exports) {

	module.exports = {
		"id": "b1c98675-8b29-481e-8b94-a86ef15ed8cc",
		"title": "Speed up the process for creating the performance report",
		"author": "AndroidEnthusiastic",
		"head_img": "https://cdn.v2ex.co/avatar/f9dc/e56d/63937_normal.png?m=1428140854",
		"reward": "50",
		"solved": "true",
		"views": "8",
		"answer_count": "1",
		"content": "Using ADB top command i fetch cpu logs in command prompt mode. txt file automatically saved in SD card path.i get that logs and split the values Using Excel i split those values using text to columns options. Is there any automation script (or) macro to speed up the process",
		"type": "help",
		"date": "2016-01-01 10:11:11.000",
		"lastModified": "2016-01-02 12:16:41.000",
		"lastReply": "2016-05-03 15:36:13.000"
	};

/***/ },

/***/ 526:
/***/ function(module, exports) {

	module.exports = [
		{
			"_id": "71bd3a4f-0db4-42d4-aadf-c56e34fdb0dd",
			"ref": "b1c98675-8b29-481e-8b94-a86ef15ed8cc",
			"content": "Yes. Use the script adb shell top -n 1 > top-results.txt to dump the top output directly to a file on your computer without having to get the file from the SD card on the phone.",
			"author": "Chip Thien",
			"date": "2016-01-02 12:16:42.000",
			"head_img": "https://cdn.v2ex.co/gravatar/4e0888f96a9339fdff0d645c1fee3117?s=48&d=retro"
		},
		{
			"_id": "398fc90a-6c74-416a-88f8-ad95e25512f2",
			"ref": "b1c98675-8b29-481e-8b94-a86ef15ed8cc",
			"content": "Sorry, I don't know.",
			"author": "Jackson",
			"date": "2016-01-03 08:17:03.000",
			"head_img": "https://cdn.v2ex.co/gravatar/a89ccfec15be04bf8da22381fba994f6?s=48&d=retro"
		},
		{
			"_id": "ddd30a6d-c3a0-4dc3-8038-292ea6503ed4",
			"ref": "71bd3a4f-0db4-42d4-aadf-c56e34fdb0dd",
			"content": "Good Answer.",
			"author": "daolin998",
			"date": "2016-01-03 18:02:16.000",
			"head_img": "https://cdn.v2ex.co/avatar/e76a/6064/199575_normal.png?m=1478161328"
		},
		{
			"_id": "01bd4d6f-7142-4978-9c56-63d07cf0e5fa",
			"ref": "ddd30a6d-c3a0-4dc3-8038-292ea6503ed4",
			"content": "Yes, it is.",
			"author": "ichubei",
			"date": "2016-01-03 21:52:20.000",
			"head_img": "https://cdn.v2ex.co/gravatar/2731ae941b162c0d03447435e0e45c7f?s=48&d=retro"
		},
		{
			"_id": "56f04689-c00c-4e65-86da-1b707dfd4a38",
			"ref": "398fc90a-6c74-416a-88f8-ad95e25512f2",
			"content": "Nuthin",
			"author": "Vicer",
			"date": "2016-02-01 03:42:20.000",
			"head_img": "https://cdn.v2ex.co/avatar/6b19/ab00/93359_normal.png?m=1422625564"
		}
	];

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(528);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(438)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(528, function() {
				var newContent = __webpack_require__(528);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(437)();
	// imports
	exports.i(__webpack_require__(441), undefined);
	exports.i(__webpack_require__(446), undefined);
	
	// module
	exports.push([module.id, ".index__post-frame___Kh6B5{\r\n    font-size:0.9rem;\r\n    overflow: auto !important;\r\n    padding: 15px;\r\n}\r\n.index__scrollBarContainer___2yaf0 {\r\n    right: 0;\r\n    left: auto;\r\n    width: 4px;\r\n    position: absolute;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    padding-right: 0px;\r\n    background-color: transparent;\r\n}\r\n\r\n.index__scrollBarContainer___2yaf0.index__animated___3Edso .index__scrollBar___2ph43{\r\n    transition: 2s opacity ease;\r\n    opacity: 0;\r\n}\r\n\r\n.index__scrollBarContainer___2yaf0:hover .index__scrollBar___2ph43{\r\n    opacity: 0.5;\r\n    transition: none;\r\n}\r\n\r\n.index__scrollBar___2ph43 {\r\n    height: 1px;\r\n    top: 5px;\r\n    border-radius: 5px;\r\n    opacity: 0.5;\r\n    background-color: gray;\r\n    left: 0px;\r\n    right: 0px;\r\n    user-select: none;\r\n    position: absolute;\r\n}\r\n\r\n.index__post-info___3B9VY{\r\n    height: 48px;\r\n}\r\n\r\n.index__post-author___NiPjM {\r\n    float: left;\r\n    clear: left;\r\n}\r\n\r\n.index__head-img___3aAUc{\r\n    width: 48px;\r\n    height: 48px;\r\n    margin-right:5px;\r\n    float:left;\r\n}\r\n\r\n.index__head-img___3aAUc img{\r\n    width: 100%;\r\n    border-radius: 5px;\r\n}\r\n\r\n.index__right___3BCnU{\r\n    margin-left: 48px;\r\n}\r\n\r\n.index__title___1gvwo{\r\n    overflow: hidden;\r\n    margin-left:10px;\r\n    height: 26px;\r\n    line-height: 26px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.index__buttom___3Jgeg {\r\n    height:22px;\r\n    line-height: 22px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.index__author___1aOyX{\r\n    color: grey;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.index__date___aKTI6{\r\n    margin-left: 10px;\r\n    color: #CFCFDA;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.index__views___1xh7H{\r\n    margin-left: 10px;\r\n    color: #CFCFDA;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.index__post-body___N6aXt {\r\n    \r\n}\r\n\r\n.index__post-content___2cSph {\r\n    font-size: 0.9rem;\r\n    margin-top: 15px;\r\n    clear: both;\r\n    padding-bottom: 15px;\r\n    border-bottom: 1px solid #F0F0F0;\r\n}\r\n\r\n.index__reply-list___1BiVf{\r\n    margin-top:5px;\r\n}\r\n\r\n.index__item___2gGgR{\r\n    margin-top: 20px;\r\n    padding-bottom: 20px;\r\n    border-bottom: 1px solid #F0F0F0;\r\n}\r\n\r\n.index__item___2gGgR:first-child{\r\n    margin-top: 20px;\r\n    padding-bottom: 15px;\r\n    border-bottom: 1px solid #F0F0F0;\r\n}\r\n\r\n.index__reply-list___1BiVf .index__item___2gGgR .index__hend-img___2gxr0{\r\n    float:left;\r\n    width: 48px;\r\n}\r\n\r\n.index__reply-list___1BiVf .index__right___3BCnU{\r\n    margin-left:53px;\r\n}\r\n\r\n.index__item___2gGgR .index__author___1aOyX{\r\n    margin-left: 5px;\r\n    color: grey;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.index__item___2gGgR .index__content___1EXX6{\r\n    font-size: 0.9rem;\r\n    margin-left: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.index__item___2gGgR .index__date___aKTI6{\r\n    margin-left: 10px;\r\n    color: #CFCFDA;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.index__right-items___13x_B{\r\n    float:right;\r\n    height: 17px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.index__top___3GMUB {\r\n    height:22px;\r\n    line-height: 22px;\r\n}\r\n\r\n.index__like___31CJ3{\r\n    float:left;\r\n    cursor: pointer;\r\n    height: 13px;\r\n    width:14px;\r\n    line-height: 13px;\r\n    margin: 3px 5px;\r\n    color: #CFCFDA;\r\n    font-size: 0.8rem;\r\n    vertical-align: middle;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-image: " + __webpack_require__(446).locals["agree"] + ";\r\n}\r\n\r\n.index__reply___dumT7{\r\n    float:left;\r\n    cursor: pointer;\r\n    width:16px;\r\n    height: 16px;\r\n    margin: 2px 5px;\r\n    line-height: 16px;\r\n    color: #CFCFDA;\r\n    font-size: 0.8rem;\r\n    vertical-align: middle;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-image: " + __webpack_require__(446).locals["reply"] + ";\r\n}\r\n\r\n.index__floor___2zCVL{\r\n    float:left;\r\n    cursor: pointer;\r\n    width:10px;\r\n    margin-left: 10px;\r\n    color: #CFCFDA;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.index__reply-box___2IoDT {\r\n    padding:10px;\r\n    background-color: #fff;\r\n    border-radius: 3px;\r\n}\r\n\r\n.index__reply-box___2IoDT textarea {\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    border-radius: 3px;\r\n    font-size: 14px;\r\n    border: 1px solid #ccc;\r\n    display: block;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    word-wrap: break-word;\r\n    resize: none;\r\n    height: 112px;\r\n    outline: none;\r\n}\r\n\r\n.index__replyPrefix___1QvQY {\r\n    color:deepskyblue;\r\n}\r\n", ""]);
	
	// exports
	exports.locals = {
		"phone": "" + __webpack_require__(441).locals["phone"] + "",
		"tablet-portrait": "" + __webpack_require__(441).locals["tablet-portrait"] + "",
		"tablet-landscape": "" + __webpack_require__(441).locals["tablet-landscape"] + "",
		"desktop": "" + __webpack_require__(441).locals["desktop"] + "",
		"big-desktop": "" + __webpack_require__(441).locals["big-desktop"] + "",
		"agree": "" + __webpack_require__(446).locals["agree"] + "",
		"reply": "index__reply___dumT7",
		"post-frame": "index__post-frame___Kh6B5",
		"scrollBarContainer": "index__scrollBarContainer___2yaf0",
		"animated": "index__animated___3Edso",
		"scrollBar": "index__scrollBar___2ph43",
		"post-info": "index__post-info___3B9VY",
		"post-author": "index__post-author___NiPjM",
		"head-img": "index__head-img___3aAUc",
		"right": "index__right___3BCnU",
		"title": "index__title___1gvwo",
		"buttom": "index__buttom___3Jgeg",
		"author": "index__author___1aOyX",
		"date": "index__date___aKTI6",
		"views": "index__views___1xh7H",
		"post-body": "index__post-body___N6aXt",
		"post-content": "index__post-content___2cSph",
		"reply-list": "index__reply-list___1BiVf",
		"item": "index__item___2gGgR",
		"hend-img": "index__hend-img___2gxr0",
		"content": "index__content___1EXX6",
		"right-items": "index__right-items___13x_B",
		"top": "index__top___3GMUB",
		"like": "index__like___31CJ3",
		"floor": "index__floor___2zCVL",
		"reply-box": "index__reply-box___2IoDT",
		"replyPrefix": "index__replyPrefix___1QvQY"
	};

/***/ },

/***/ 529:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 此方法消耗性能 建议获取dom后 保存引用 再设值 不建议使用此方法
	// const setDomValue = (name, param, value) => {
	//   for(let d = 0; d < document.styleSheets.length; d++) {
	//     let sty, ruls = document.styleSheets[d].cssRules
	//     for(let i = 0; i < ruls.length; i++) {
	//       sty = ruls[i]
	//       //if(sty.selectorText) console.log(sty.selectorText.toLowerCase())
	//       if(sty.selectorText && (sty.selectorText.toLowerCase() == name.toLowerCase())) {
	//         sty.style[param] = value
	//       }
	//     }
	//   }
	// }
	
	var getNode = function getNode(name) {
	  return document.querySelectorAll(name);
	};
	
	var getNodeValue = function getNodeValue(name, param) {
	  return document.querySelectorAll(name)[0][param];
	};
	
	var getDom = function getDom(name) {
	  return document.getElementsByClassName(name);
	};
	
	var getDomValue = function getDomValue(name, param) {
	  var value = void 0;
	  for (var d = 0; d < document.styleSheets.length; d++) {
	    var sty = void 0,
	        ruls = document.styleSheets[d].cssRules;
	    for (var i = 0; i < ruls.length; i++) {
	      sty = ruls[i];
	      if (sty.selectorText && sty.selectorText.toLowerCase() == name.toLowerCase()) {
	        value = sty.style[param];
	      }
	    }
	  }
	  return value;
	};
	
	exports.default = { getNode: getNode, getNodeValue: getNodeValue, getDom: getDom, getDomValue: getDomValue };

/***/ }

});
//# sourceMappingURL=5.bundle.js.map