/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([10],{

/***/ 528:
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
	
	var _reactCssModulesSimply = __webpack_require__(285);
	
	var _reactCssModulesSimply2 = _interopRequireDefault(_reactCssModulesSimply);
	
	var _sign = __webpack_require__(451);
	
	var _sign2 = _interopRequireDefault(_sign);
	
	var _index = __webpack_require__(529);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Dashboard = function (_Component) {
	  _inherits(Dashboard, _Component);
	
	  function Dashboard() {
	    _classCallCheck(this, Dashboard);
	
	    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
	  }
	
	  _createClass(Dashboard, [{
	    key: 'submit',
	    value: function submit() {
	      var username = this.refs.usernameInput.value;
	      var password = this.refs.passwordInput.value;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: 'dashboard' },
	        'Username: ',
	        _react2.default.createElement('input', { ref: 'usernameInput', type: 'text' }),
	        'Password: ',
	        _react2.default.createElement('input', { type: 'password' }),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.submit.bind(this) },
	          'Login'
	        )
	      );
	    }
	  }]);
	
	  return Dashboard;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, prop) {
	  return {
	    language: state.common.language
	  };
	};
	
	var mapDispatchToProps = {
	  signin: function signin(data, cb) {
	    return _sign2.default.signin(data, cb);
	  }
	
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactCssModulesSimply2.default)(Dashboard, _index2.default));

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(530);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(439)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(530, function() {
				var newContent = __webpack_require__(530);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(438)();
	// imports
	
	
	// module
	exports.push([module.id, ".index__dashboard___BYIPa {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background: white;\r\n}", ""]);
	
	// exports
	exports.locals = {
		"dashboard": "index__dashboard___BYIPa"
	};

/***/ }

});
//# sourceMappingURL=10.bundle.js.map