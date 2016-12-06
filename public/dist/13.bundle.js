/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([13],{

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(172);
	
	var _reactRedux = __webpack_require__(261);
	
	var _community = __webpack_require__(839);
	
	var _community2 = _interopRequireDefault(_community);
	
	var _posting = __webpack_require__(841);
	
	var _posting2 = _interopRequireDefault(_posting);
	
	var _common = __webpack_require__(457);
	
	var _common2 = _interopRequireDefault(_common);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Community = function (_Component) {
	  _inherits(Community, _Component);
	
	  function Community() {
	    _classCallCheck(this, Community);
	
	    return _possibleConstructorReturn(this, (Community.__proto__ || Object.getPrototypeOf(Community)).apply(this, arguments));
	  }
	
	  _createClass(Community, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      this.props.getUsrInf(function (data) {
	        _this2.props.setUsrIsSgi(data.code == 10000 ? true : false);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var postingList = _posting2.default.map(function (posting) {
	        return _react2.default.createElement(
	          'div',
	          { className: "row", key: posting.id },
	          _react2.default.createElement(
	            'div',
	            { className: 'post-title' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: { pathname: "/community/posting/" + posting.id } },
	              posting.title
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'post-buttom' },
	            _react2.default.createElement(
	              'span',
	              { className: 'solve' },
	              'solve'
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'help' },
	              'help'
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'answers-views' },
	              posting.answers,
	              '/',
	              posting.views
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'author' },
	              posting.author
	            )
	          )
	        );
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'community' },
	        _react2.default.createElement(
	          'div',
	          { className: 'postList' },
	          postingList
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'postContent', ref: 'postContent' },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return Community;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    usrIsSgi: state.common.usrIsSgi
	  };
	};
	
	var mapDispatchToProps = {
	  dispSignBox: function dispSignBox(dat) {
	    return _common2.default.dispSignBox(dat);
	  },
	  getUsrInf: function getUsrInf(cb) {
	    return _common2.default.getUsrInf(cb);
	  },
	  setUsrIsSgi: function setUsrIsSgi(val) {
	    return _common2.default.setUsrIsSgi(val);
	  },
	  setUsrInf: function setUsrInf(dat) {
	    return _common2.default.setUsrInf(dat);
	  }
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Community);

/***/ },

/***/ 839:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(840);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(287)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(840, function() {
				var newContent = __webpack_require__(840);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 840:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(286)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n.community {\r\n    width: 100%;\r\n    top:0px;\r\n    bottom: 0px;\r\n    background: white;\r\n    position: absolute;\r\n}\r\n\r\n.postList {\r\n    width: 40%;\r\n    position: absolute;\r\n    background-color: white;\r\n}\r\n\r\n\r\n.postContent {\r\n    top: 0;\r\n    overflow: hidden;\r\n    right: 0px;\r\n    left: 40%;\r\n    bottom: 0;\r\n    position: absolute;\r\n    border-left: 10px solid #F0F0F0;\r\n}\r\n\r\n\r\n\r\n.community .row:first-child {\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 5px;\r\n    border-bottom: 1px solid #F0F0F0;\r\n}\r\n\r\n.community .row {\r\n    padding-bottom: 5px;\r\n    margin: 0 5px 5px;\r\n    border-bottom: 1px solid #F0F0F0;\r\n}\r\n\r\n.community .post-title {\r\n    margin-left: 5px;\r\n}\r\n\r\n.community .post-title a:hover{\r\n    color:gray;\r\n}\r\n\r\n.community .post-buttom {\r\n    margin-top: 2px;\r\n}\r\n\r\n.community .post-buttom .help {\r\n    margin-left: 5px;\r\n    color: orange;\r\n    font-size: 0.8rem;\r\n    padding: 1px;\r\n    border-radius: 4px;\r\n    border:1px solid orange;\r\n}\r\n\r\n.community .post-buttom .solve {\r\n    margin-left: 5px;\r\n    color: limegreen;\r\n    font-size: 0.8rem;\r\n    padding: 1px;\r\n    border-radius: 4px;\r\n    border:1px solid limegreen;\r\n}\r\n\r\n.community .post-buttom .author {\r\n    margin-top: 5px;\r\n    margin-right: 5px;\r\n    color: grey;\r\n    float: right;\r\n    font-weight: bold;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.community .post-buttom .answers-views {\r\n    margin-left: 5px;\r\n    margin-top: 6px;\r\n    font-size: 0.8rem;\r\n    float: right;\r\n    color: deepskyblue;\r\n}\r\n", ""]);
	
	// exports


/***/ },

/***/ 841:
/***/ function(module, exports) {

	module.exports = [
		{
			"id": "b1c98675-8b29-481e-8b94-a86ef15ed8cc",
			"title": "Speed up the process for creating the performance report",
			"author": "AndroidEnthusiastic",
			"reward": "50",
			"solved": "true",
			"views": "8",
			"answers": "1",
			"type": "help",
			"create": "2016-01-01 10:11:11.000",
			"lastModified": "2016-01-02 12:16:41.000",
			"lastReply": "2016-05-03 15:36:13.000"
		},
		{
			"id": "df2775b1-3b40-4481-8ed0-a410bd704cb3",
			"title": "Mule components to check the status of the resources and integrations of the Applications",
			"author": "sky.high",
			"reward": "0",
			"solved": "false",
			"views": "6",
			"answers": "2",
			"type": "share",
			"create": "2016-02-03 11:05:12.000",
			"lastModified": "2016-03-12 12:16:41.000",
			"lastReply": "2016-07-03 10:36:13.000"
		},
		{
			"id": "342439c6-ed71-4a70-99bd-dc580f2c0aaa",
			"title": "How to index the document with three letter month format?",
			"author": "Arun Mohan",
			"head_img": "http://as.named.cn/f/bdb4c1ca6d0e2bcc67968cfd8f46d140.c0x0x298x180.t40x40.fc.s0x-1xdddddd.png",
			"reward": "10",
			"solved": "true",
			"views": "18",
			"answers": "4",
			"type": "help",
			"create": "2016-04-05 08:11:11.000",
			"lastModified": "2016-04-06 10:16:41.000",
			"lastReply": "2016-05-10 15:36:12.000"
		}
	];

/***/ }

});
//# sourceMappingURL=13.bundle.js.map