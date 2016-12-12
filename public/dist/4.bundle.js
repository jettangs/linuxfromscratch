/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([4],{

/***/ 508:
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
	
	var _index = __webpack_require__(509);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _global = __webpack_require__(447);
	
	var _global2 = _interopRequireDefault(_global);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Projects = function (_Component) {
	  _inherits(Projects, _Component);
	
	  function Projects() {
	    _classCallCheck(this, Projects);
	
	    return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));
	  }
	
	  _createClass(Projects, [{
	    key: 'render',
	    value: function render() {
	      var cont = _global2.default[this.props.language].projects;
	      return _react2.default.createElement(
	        'div',
	        { style: 'projects' },
	        _react2.default.createElement(
	          'p',
	          null,
	          '\u2003\u2003',
	          cont.p1,
	          _react2.default.createElement('br', null),
	          '\u2003\u2003',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/lfs' },
	            'LFS'
	          ),
	          ' : ',
	          cont.p2,
	          _react2.default.createElement('br', null),
	          '\u2003\u2003',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/blfs' },
	            'BLFS'
	          ),
	          ' : ',
	          cont.p3,
	          _react2.default.createElement('br', null),
	          '\u2003\u2003',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/alfs' },
	            'ALFS'
	          ),
	          ' : ',
	          cont.p4,
	          _react2.default.createElement('br', null),
	          '\u2003\u2003',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/clfs' },
	            'CLFS'
	          ),
	          ' : ',
	          cont.p5,
	          _react2.default.createElement('br', null),
	          '\u2003\u2003',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/hlfs' },
	            'HLFS'
	          ),
	          ' : ',
	          cont.p6,
	          _react2.default.createElement('br', null),
	          '\u2003\u2003',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/hints' },
	            'Hints'
	          ),
	          ' : ',
	          cont.p7,
	          _react2.default.createElement('br', null),
	          '\u2003\u2003',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/livecd' },
	            'LiveCD'
	          ),
	          ' : ',
	          cont.p8,
	          _react2.default.createElement('br', null),
	          '\u2003\u2003',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/patches' },
	            'Patches'
	          ),
	          ' : ',
	          cont.p9,
	          _react2.default.createElement('br', null)
	        )
	      );
	    }
	  }]);
	
	  return Projects;
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
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactCssModulesSimply2.default)(Projects, _index2.default));

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(510);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(439)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(510, function() {
				var newContent = __webpack_require__(510);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(438)();
	// imports
	
	
	// module
	exports.push([module.id, ".index__projects___20QkZ {\r\n    position: absolute;\r\n    width: 100%;\r\n    top:0px;\r\n    bottom: 0px;\r\n    background: white;\r\n    padding: 50px 100px;\r\n}\r\n\r\n\r\n.index__projects___20QkZ a{\r\n    cursor: pointer;\r\n    color: grey;\r\n    \r\n}", ""]);
	
	// exports
	exports.locals = {
		"path": "'../../global/styles/'",
		"phone": "from '../../global/styles/'+'breakpoints.css'",
		"tablet-portrait": "from '../../global/styles/'+'breakpoints.css'",
		"tablet-landscape": "from '../../global/styles/'+'breakpoints.css'",
		"desktop": "from '../../global/styles/'+'breakpoints.css'",
		"big-desktop": "from '../../global/styles/'+'breakpoints.css'",
		"projects": "index__projects___20QkZ"
	};

/***/ }

});
//# sourceMappingURL=4.bundle.js.map