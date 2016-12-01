/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([1],{

/***/ 300:
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
	
	var _home = __webpack_require__(301);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _content = __webpack_require__(291);
	
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
	      var cont = _content2.default[this.props.language].home;
	      return _react2.default.createElement(
	        'div',
	        { className: 'home' },
	        _react2.default.createElement(
	          'p',
	          { className: 'home-title' },
	          cont.title
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'homt-content' },
	          '\u2003\u2003',
	          cont.p1,
	          ' ',
	          _react2.default.createElement('br', null),
	          '\u2003\u2003',
	          cont.p2,
	          '\xA0',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/projects' },
	            cont.p3
	          ),
	          '\xA0',
	          cont.p4
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

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(302);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(282)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(302, function() {
				var newContent = __webpack_require__(302);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(281)();
	// imports
	
	
	// module
	exports.push([module.id, ".home {\r\n    position: absolute;\r\n    width: 100%;\r\n    top:0px;\r\n    bottom: 0px;\r\n    background: white;\r\n    padding: 20px 100px;\r\n}\r\n\r\n.home-title{\r\n    margin:40px auto 20px;\r\n    text-align: center;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.homt-content {\r\n    line-height: 25px;\r\n}\r\n\r\n.homt-content a{\r\n    cursor: pointer;\r\n    color: grey;\r\n}", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=1.bundle.js.map