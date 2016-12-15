/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([6],{

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(178);
	
	var _reactRedux = __webpack_require__(267);
	
	var _reactCssModulesSimply = __webpack_require__(284);
	
	var _reactCssModulesSimply2 = _interopRequireDefault(_reactCssModulesSimply);
	
	var _index = __webpack_require__(531);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _posting = __webpack_require__(533);
	
	var _posting2 = _interopRequireDefault(_posting);
	
	var _common = __webpack_require__(442);
	
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
	      this.props.switNavItem('community');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var postingList = _posting2.default.map(function (posting) {
	        return _react2.default.createElement(
	          'div',
	          { key: posting._id, style: 'row' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { style: 'post-title', to: { pathname: "/community/posting/" + posting._id } },
	            posting.title
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'post-buttom' },
	            _react2.default.createElement(
	              'span',
	              { style: 'solve' },
	              'solve'
	            ),
	            _react2.default.createElement(
	              'span',
	              { style: 'help' },
	              'help'
	            ),
	            _react2.default.createElement(
	              'span',
	              { style: 'answers-views' },
	              posting.answers,
	              '/',
	              posting.views
	            ),
	            _react2.default.createElement(
	              'span',
	              { style: 'author' },
	              posting.author
	            )
	          )
	        );
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { style: 'community' },
	        _react2.default.createElement(
	          'div',
	          { style: 'postList' },
	          postingList
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: 'postContent', ref: 'postContent' },
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
	  switNavItem: function switNavItem(item) {
	    return _common2.default.switNavItem(item);
	  }
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactCssModulesSimply2.default)(Community, _index2.default));

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(532);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(438)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(532, function() {
				var newContent = __webpack_require__(532);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(437)();
	// imports
	exports.i(__webpack_require__(441), undefined);
	
	// module
	exports.push([module.id, ".index__community___1jexh {\r\n    width: 100%;\r\n    height: 600px;\r\n}\r\n\r\n.index__postList___3EBHY {\r\n    width: 40%;\r\n    height: 100%;\r\n    float: left;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .15);\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["phone"] + " {\r\n    .index__postList___3EBHY {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.index__postContent___Lzkue {\r\n    overflow: hidden;\r\n    width: 58%;\r\n    height: 100%;\r\n    float: right;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .15);\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["phone"] + " {\r\n    .index__postContent___Lzkue {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.index__row___-Ms59:first-child {\r\n    padding-top: 5px;\r\n    padding-bottom: 15px;\r\n    margin-bottom: 15px;\r\n    border-bottom: 1px solid #F0F0F0;\r\n}\r\n\r\n.index__row___-Ms59 {\r\n    padding-bottom: 15px;\r\n    margin: 10px 15px 5px;\r\n    border-bottom: 1px solid #F0F0F0;\r\n}\r\n\r\n.index__post-title___3p6-X {\r\n    font-size: 0.95rem;\r\n    display: block;\r\n    margin-left: 5px;\r\n}\r\n\r\n.index__post-title___3p6-X:hover{\r\n    color:gray;\r\n}\r\n\r\n.index__post-buttom___1CVdt {\r\n    margin-top: 2px;\r\n}\r\n\r\n.index__help___21VK2 {\r\n    margin-left: 5px;\r\n    color: orange;\r\n    font-size: 0.7rem;\r\n    padding: 1px;\r\n    border-radius: 4px;\r\n    border:1px solid orange;\r\n}\r\n\r\n.index__solve___-6xgn {\r\n    margin-left: 5px;\r\n    color: limegreen;\r\n    font-size: 0.7rem;\r\n    padding: 1px;\r\n    border-radius: 4px;\r\n    border:1px solid limegreen;\r\n}\r\n\r\n.index__author___2fyOK {\r\n    margin-top: 5px;\r\n    margin-right: 5px;\r\n    color: grey;\r\n    float: right;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.index__answers-views___Wtb54 {\r\n    margin-left: 5px;\r\n    margin-top: 6px;\r\n    font-size: 0.8rem;\r\n    float: right;\r\n    color: deepskyblue;\r\n}\r\n", ""]);
	
	// exports
	exports.locals = {
		"phone": "" + __webpack_require__(441).locals["phone"] + "",
		"tablet-portrait": "" + __webpack_require__(441).locals["tablet-portrait"] + "",
		"tablet-landscape": "" + __webpack_require__(441).locals["tablet-landscape"] + "",
		"desktop": "" + __webpack_require__(441).locals["desktop"] + "",
		"big-desktop": "" + __webpack_require__(441).locals["big-desktop"] + "",
		"community": "index__community___1jexh",
		"postList": "index__postList___3EBHY",
		"postContent": "index__postContent___Lzkue",
		"row": "index__row___-Ms59",
		"post-title": "index__post-title___3p6-X",
		"post-buttom": "index__post-buttom___1CVdt",
		"help": "index__help___21VK2",
		"solve": "index__solve___-6xgn",
		"author": "index__author___2fyOK",
		"answers-views": "index__answers-views___Wtb54"
	};

/***/ },

/***/ 533:
/***/ function(module, exports) {

	module.exports = [
		{
			"_id": "b1c98675-8b29-481e-8b94-a86ef15ed8cc",
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
			"_id": "df2775b1-3b40-4481-8ed0-a410bd704cb3",
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
			"_id": "342439c6-ed71-4a70-99bd-dc580f2c0aaa",
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
//# sourceMappingURL=6.bundle.js.map