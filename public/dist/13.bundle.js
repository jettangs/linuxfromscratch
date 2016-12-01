/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([13],{

/***/ 814:
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
	
	var _community = __webpack_require__(815);
	
	var _community2 = _interopRequireDefault(_community);
	
	var _posting = __webpack_require__(817);
	
	var _posting2 = _interopRequireDefault(_posting);
	
	var _common = __webpack_require__(290);
	
	var _common2 = _interopRequireDefault(_common);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Community = function (_Component) {
	  _inherits(Community, _Component);
	
	  function Community() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Community);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Community.__proto__ || Object.getPrototypeOf(Community)).call.apply(_ref, [this].concat(args))), _this), _this.state = { usrIsSgi: false }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Community, [{
	    key: 'sidBarItClk',
	    value: function sidBarItClk(it) {}
	  }, {
	    key: 'getSidBarSty',
	    value: function getSidBarSty() {
	      return this.props.usrIsSgi == true ? "sideBar-disp" : "sideBar-hide";
	    }
	  }, {
	    key: 'getPostListSty',
	    value: function getPostListSty() {
	      return this.props.usrIsSgi == true ? "postList-part-left" : "postList-all-left";
	    }
	  }, {
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
	      var _this3 = this;
	
	      var labels = ['userInfo', 'newPost', 'message', 'logout'];
	      // let links = ['user','posting','message','session']
	      var items = labels.map(function (item, index) {
	        return _react2.default.createElement(
	          'li',
	          { key: item, onClick: _this3.sidBarItClk.bind(_this3, item) },
	          _react2.default.createElement('i', { className: item })
	        );
	      });
	
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
	          { className: this.getSidBarSty() },
	          _react2.default.createElement(
	            'ul',
	            null,
	            items
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: this.getPostListSty() },
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

/***/ 815:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(816);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(282)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(816, function() {
				var newContent = __webpack_require__(816);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 816:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(281)();
	// imports
	
	
	// module
	exports.push([module.id, ".sideBar-hide {\r\n    display: none;\r\n}\r\n\r\n.sideBar-disp {\r\n    top: 60px;\r\n    bottom: 0;\r\n    width: 50px;\r\n    position: absolute;\r\n}\r\n\r\n.postList-part-left {\r\n    top: 60px;\r\n    bottom: 0;\r\n    width: 450px;\r\n    position: absolute;\r\n    left:50px;\r\n    border-left: 5px solid #F0F0F0;\r\n    background-color: white;\r\n}\r\n\r\n.postList-all-left {\r\n    top: 60px;\r\n    bottom: 0;\r\n    width: 505px;\r\n    position: absolute;\r\n    background-color: white;\r\n}\r\n\r\n.postContent {\r\n    top: 60px;\r\n    bottom: 0;\r\n    left:505px;\r\n    position: absolute;\r\n    border-left: 5px solid #F0F0F0;\r\n}\r\n\r\n.community ul li {\r\n    width: 100%;\r\n    height: 50px;\r\n    /*border-bottom: 2px solid #F0F0F0;*/\r\n}\r\n\r\n\r\n\r\n.community .row:first-child {\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 5px;\r\n    border-bottom: 1px solid #F0F0F0;\r\n}\r\n\r\n.community .row {\r\n    padding-bottom: 5px;\r\n    margin: 0 5px 5px;\r\n    border-bottom: 1px solid #F0F0F0;\r\n}\r\n\r\n.community .post-title {\r\n    margin-left: 5px;\r\n}\r\n\r\n.community .post-title a:hover{\r\n    color:gray;\r\n}\r\n\r\n.community .post-buttom {\r\n    margin-top: 2px;\r\n}\r\n\r\n.community .post-buttom .help {\r\n    margin-left: 5px;\r\n    color: orange;\r\n    font-size: 0.8rem;\r\n    padding: 1px;\r\n    border-radius: 4px;\r\n    border:1px solid orange;\r\n}\r\n\r\n.community .post-buttom .solve {\r\n    margin-left: 5px;\r\n    color: limegreen;\r\n    font-size: 0.8rem;\r\n    padding: 1px;\r\n    border-radius: 4px;\r\n    border:1px solid limegreen;\r\n}\r\n\r\n.community .post-buttom .author {\r\n    margin-top: 5px;\r\n    margin-right: 5px;\r\n    color: grey;\r\n    float: right;\r\n    font-weight: bold;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.community .post-buttom .answers-views {\r\n    margin-left: 5px;\r\n    margin-top: 6px;\r\n    font-size: 0.8rem;\r\n    float: right;\r\n    color: deepskyblue;\r\n}\r\n\r\ni.userInfo {\r\n    width: 28px;\r\n    height: 28px;\r\n    line-height: 40px;\r\n    background-position: center center;\r\n    margin: 11px 10px;\r\n    float: left;\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n    background-repeat: no-repeat;\r\n    background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1024 1024' enable-background='new 0 0 1024 1024' xml:space='preserve'><path fill='#808080' d='M512 614.4C342.6304 614.4 204.8 476.637867 204.8 307.268267s137.8304-307.2 307.2-307.2S819.2 137.898667 819.2 307.268267 681.3696 614.4 512 614.4zM512 68.334933c-131.754667 0-238.933333 107.178667-238.933333 238.933333s107.178667 238.933333 238.933333 238.933333 238.933333-107.178667 238.933333-238.933333S643.754667 68.334933 512 68.334933zM921.6 1024c-18.8416 0-34.133333-15.223467-34.133333-34.133333C887.466667 744.2432 757.623467 614.4 512 614.4 266.376533 614.4 136.533333 744.2432 136.533333 989.866667 136.533333 1008.776533 121.2416 1024 102.4 1024S68.266667 1008.776533 68.266667 989.866667c0-282.0096 161.723733-443.665067 443.733333-443.665067S955.733333 707.857067 955.733333 989.866667C955.733333 1008.776533 940.4416 1024 921.6 1024z'/></svg>\");\r\n}\r\n\r\ni.newPost {\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    background-position: center center;\r\n    margin: 10px;\r\n    float: left;\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n    background-repeat: no-repeat;\r\n    background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1024 1024' enable-background='new 0 0 1024 1024' xml:space='preserve'><path fill='#808080' d='M800 960 224 960c-52.928 0-96-43.072-96-96L128 224c0-52.928 43.072-96 96-96l448 0c17.696 0 32 14.336 32 32s-14.304 32-32 32L224 192C206.368 192 192 206.368 192 224l0 640c0 17.664 14.368 32 32 32l576 0c17.664 0 32-14.336 32-32L832 352c0-17.664 14.304-32 32-32s32 14.336 32 32l0 512C896 916.928 852.928 960 800 960zM511.68 542.72c-8.256 0-16.512-3.168-22.752-9.504-12.416-12.576-12.32-32.832 0.256-45.248L907.488 74.24c12.608-12.448 32.832-12.288 45.248 0.256 12.448 12.576 12.32 32.832-0.256 45.248L534.176 533.472C527.936 539.648 519.808 542.72 511.68 542.72z'/></svg>\");\r\n}\r\n\r\ni.message {\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    background-position: center center;\r\n    margin: 10px;\r\n    float: left;\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n    background-repeat: no-repeat;\r\n    background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1024 1024' enable-background='new 0 0 1024 1024' xml:space='preserve'><path fill='#808080' d='M520 924q0-8-8-8-29.5 0-50.75-21.25t-21.25-50.75q0-8-8-8t-8 8q0 36.5 25.75 62.25t62.25 25.75q8 0 8-8zM187 780l650 0q-133-150-133-416 0-25.5-12-52.5t-34.5-51.5-60.75-40.25-84.75-15.75-84.75 15.75-60.75 40.25-34.5 51.5-12 52.5q0 266-133 416zM928 780q0 26-19 45t-45 19l-224 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5l-224 0q-26 0-45-19t-19-45q25-21 45.5-44t42.5-59.75 37.25-79.25 25-103 9.75-130q0-76 58.5-141.25t153.5-79.25q-4-9.5-4-19.5 0-20 14-34t34-14 34 14 14 34q0 10-4 19.5 95 14 153.5 79.25t58.5 141.25q0 69.5 9.75 130t25 103 37.25 79.25 42.5 59.75 45.5 44z'/></svg>\");\r\n}\r\n\r\ni.logout {\r\n    width: 28px;\r\n    height: 28px;\r\n    line-height: 28px;\r\n    background-position: center center;\r\n    margin: 11px 10px;\r\n    float: left;\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n    background-repeat: no-repeat;\r\n    background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1024 1024' enable-background='new 0 0 1024 1024' xml:space='preserve'><path fill='#808080' d='M949.184 1009.568 417.28 1009.568C382.688 1009.568 354.688 981.568 354.688 947.008L354.688 664.448 417.696 664.352 417.696 909.184C417.696 930.08 434.624 947.008 455.552 947.008L910.912 947.008C931.808 947.008 948.768 930.08 948.768 909.184L947.776 109.056C947.776 88.16 930.848 71.2 909.92 71.2L455.552 71.2C434.624 71.2 417.696 88.16 417.696 109.056L417.696 352.48 354.688 352.48 354.688 70.88C354.688 36.32 382.688 8.32 417.28 8.32L949.184 8.32C983.744 8.32 1011.776 36.32 1011.776 70.88L1011.776 947.008C1011.776 981.568 983.744 1009.568 949.184 1009.568ZM127.04 477.312 667.2 477.312C684.512 477.312 698.496 491.328 698.496 508.608 698.496 525.888 684.512 539.904 667.2 539.904L125.088 539.904 240.224 655.04C252.448 667.264 252.448 687.072 240.224 699.264 234.112 705.376 226.112 708.448 218.112 708.448 210.08 708.448 202.08 705.376 195.968 699.264L11.168 509.6 195.968 319.872C208.192 307.648 228 307.648 240.224 319.872 252.448 332.096 252.448 351.904 240.224 364.128L127.04 477.312Z'/></svg>\");\r\n}", ""]);
	
	// exports


/***/ },

/***/ 817:
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