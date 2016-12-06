/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([1],{

/***/ 470:
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
	
	var _reactBounds = __webpack_require__(279);
	
	var _reactcss = __webpack_require__(291);
	
	var _reactcss2 = _interopRequireDefault(_reactcss);
	
	var _home = __webpack_require__(471);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _bounds = __webpack_require__(458);
	
	var _content = __webpack_require__(462);
	
	var _content2 = _interopRequireDefault(_content);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);
	
	  function Home() {
	    _classCallCheck(this, Home);
	
	    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	  }
	
	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      var cont = _content2.default[this.props.language].home;
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          body: {
	            background: 'white'
	          }
	        },
	        'middleScreen': {
	          body: {
	            background: 'green'
	          }
	        },
	        'mobile': {
	          body: {
	            background: 'red'
	          }
	        }
	      });
	      return _react2.default.createElement(
	        'div',
	        { style: styles.body },
	        _react2.default.createElement(
	          'p',
	          { style: _home2.default.title },
	          cont.title
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: _home2.default.content },
	          '\u2003\u2003',
	          cont.p1,
	          ' ',
	          _react2.default.createElement('br', null),
	          '\u2003\u2003',
	          cont.p2,
	          '\xA0',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { style: _home2.default.link, to: '/projects' },
	            cont.p3
	          ),
	          '\xA0',
	          cont.p4
	        )
	      );
	    }
	  }], [{
	    key: 'bounds',
	    value: function bounds() {
	      return {
	        'largeScreen': {
	          minWidth: 1201
	        },
	        'middleScreen': {
	          minWidth: 901,
	          maxwidth: 1200
	        },
	        'smallScreen': {
	          minWidth: 601,
	          maxWidth: 900
	        },
	        'mobile': {
	          minWidth: 301,
	          maxWidth: 600
	        }
	      };
	    }
	  }]);
	
	  return Home;
	}(_react2.default.Component);
	
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
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactBounds.wrap)(Home));
	
	// export default wrap(Home)

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactcss = __webpack_require__(291);
	
	var _reactcss2 = _interopRequireDefault(_reactcss);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactcss2.default)({
	    'default': {
	        body: {
	            position: 'absolute',
	            width: '100%',
	            top: '0px',
	            bottom: '0px',
	            background: 'white',
	            padding: '20px 100px'
	        },
	        title: {
	            margin: '40px auto 20px',
	            textAlign: 'center',
	            fontSize: '1.3rem'
	        },
	        content: {
	            textAlign: 'center',
	            lineHeight: '25px'
	        },
	        link: {
	            cursor: 'pointer',
	            color: 'grey'
	        }
	    },
	    'mobile': {
	        body: {
	            position: 'absolute',
	            width: '100%',
	            top: '0px',
	            bottom: '0px',
	            background: 'red',
	            padding: '20px 30px'
	        }
	    }
	});

/***/ }

});
//# sourceMappingURL=1.bundle.js.map