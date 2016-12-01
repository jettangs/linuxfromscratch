/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([2],{

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(172);
	
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
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('h3', null),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Linux From Scratch (LFS) is a project that provides you with step-by-step instructions for building your own custom Linux system, entirely from source code. Currently, the Linux From Scratch organization consists of the following subprojects:',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/lfs' },
	            'LFS'
	          ),
	          ' :: Linux From Scratch is the main book, the base from which all other projects are derived.',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/blfs' },
	            'BLFS'
	          ),
	          ' :: Beyond Linux From Scratch helps you extend your finished LFS installation into a more customized and usable system.',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/alfs' },
	            'ALFS'
	          ),
	          ' :: Automated Linux From Scratch provides tools for automating and managing LFS and BLFS builds.',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/clfs' },
	            'CLFS'
	          ),
	          ' :: Cross Linux From Scratch provides the means to cross-compile an LFS system on many types of systems.',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/hlfs' },
	            'HLFS'
	          ),
	          ' :: Hardened Linux From Scratch focuses on building an LFS system with heightened security.',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/hints' },
	            'Hints'
	          ),
	          ' :: The Hints project is a collection of documents that explain how to enhance your LFS system in ways that are not included in the LFS or BLFS books.',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/livecd' },
	            'LiveCD'
	          ),
	          ' :: The LiveCD project provides a CD that is useful as an LFS build host or as a general rescue CD.',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/patches' },
	            'Patches'
	          ),
	          ' :: The Patches project serves as a central repository for all patches useful to an LFS user.',
	          _react2.default.createElement('br', null)
	        )
	      );
	    }
	  }]);
	
	  return Projects;
	}(_react.Component);
	
	exports.default = Projects;

/***/ }

});
//# sourceMappingURL=2.bundle.js.map