/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([1],{

/***/ 301:
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
	
	var _content = __webpack_require__(289);
	
	var _content2 = _interopRequireDefault(_content);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_Component) {
	  _inherits(Home, _Component);
	
	  function Home() {
	    _classCallCheck(this, Home);
	
	    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	  }
	
	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      var pageContent = _content2.default[this.props.language].homePage;
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          pageContent.title
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          pageContent.p1,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/projects' },
	            pageContent.p2
	          ),
	          pageContent.p3
	        )
	      );
	    }
	  }]);
	
	  return Home;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, prop) {
	  return {
	    language: state.common.language
	  };
	};
	
	var mapDispatchToProps = {
	  //switLan : (lan) => navAction.switLan(lan),
	  //switNavItem: (item) => navAction.switNavItem(item)
	  //getUsrInf : comAction.getUsrInf()
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }

});
//# sourceMappingURL=1.bundle.js.map