/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([14],{

/***/ 842:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(172);
	
	var _profileInfor = __webpack_require__(843);
	
	var _profileInfor2 = _interopRequireDefault(_profileInfor);
	
	var _profileInfor3 = __webpack_require__(844);
	
	var _profileInfor4 = _interopRequireDefault(_profileInfor3);
	
	var _reactRedux = __webpack_require__(261);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProfileInfor = function (_Component) {
	  _inherits(ProfileInfor, _Component);
	
	  function ProfileInfor() {
	    _classCallCheck(this, ProfileInfor);
	
	    return _possibleConstructorReturn(this, (ProfileInfor.__proto__ || Object.getPrototypeOf(ProfileInfor)).apply(this, arguments));
	  }
	
	  _createClass(ProfileInfor, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'profileInfor', style: _profileInfor2.default.body },
	        _react2.default.createElement(
	          'div',
	          { style: _profileInfor2.default.row },
	          _react2.default.createElement(
	            'span',
	            { style: _profileInfor2.default.lbl },
	            'Username'
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: _profileInfor2.default.text },
	            'jettang'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: _profileInfor2.default.row },
	          _react2.default.createElement(
	            'span',
	            { style: _profileInfor2.default.lbl },
	            'Password'
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: _profileInfor2.default.link },
	            'Change'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: _profileInfor2.default.row },
	          _react2.default.createElement(
	            'span',
	            { style: _profileInfor2.default.lbl },
	            'Email'
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: _profileInfor2.default.text },
	            '625436194@163.com'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: _profileInfor2.default.row },
	          _react2.default.createElement(
	            'span',
	            { style: _profileInfor2.default.lbl },
	            'Circles'
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: _profileInfor2.default.text },
	            _react2.default.createElement(
	              'ul',
	              { style: _profileInfor2.default.ul },
	              _react2.default.createElement(
	                'li',
	                { style: _profileInfor2.default.li },
	                'weibo'
	              ),
	              _react2.default.createElement(
	                'li',
	                { style: _profileInfor2.default.li },
	                'github'
	              ),
	              _react2.default.createElement(
	                'li',
	                { style: _profileInfor2.default.li },
	                'zhihu'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: _profileInfor2.default.row },
	          _react2.default.createElement(
	            'span',
	            { style: _profileInfor2.default.lbl },
	            'Blog'
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: _profileInfor2.default.link },
	            'Add'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: _profileInfor2.default.row },
	          _react2.default.createElement(
	            'span',
	            { style: _profileInfor2.default.lbl },
	            'Publicity'
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: _profileInfor2.default.pub },
	            _react2.default.createElement(
	              'div',
	              { style: _profileInfor2.default.pubLeft },
	              _react2.default.createElement(
	                'div',
	                { style: _profileInfor2.default.fstRowPubIt },
	                _react2.default.createElement(
	                  'label',
	                  null,
	                  _react2.default.createElement('input', { type: 'checkbox', name: 'Location' }),
	                  _react2.default.createElement('span', { style: _profileInfor2.default.span }),
	                  'Location'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: _profileInfor2.default.secRowPubIt },
	                _react2.default.createElement(
	                  'label',
	                  null,
	                  _react2.default.createElement('input', { type: 'checkbox', name: 'Dynamics' }),
	                  _react2.default.createElement('span', { style: _profileInfor2.default.span }),
	                  'Dynamics'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: _profileInfor2.default.pubRight },
	              _react2.default.createElement(
	                'div',
	                { style: _profileInfor2.default.fstRowPubIt },
	                _react2.default.createElement(
	                  'label',
	                  null,
	                  _react2.default.createElement('input', { type: 'checkbox', name: 'Teams' }),
	                  _react2.default.createElement('span', { style: _profileInfor2.default.span }),
	                  'Teams'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: _profileInfor2.default.secRowPubIt },
	                _react2.default.createElement(
	                  'label',
	                  null,
	                  _react2.default.createElement('input', { type: 'checkbox', name: 'Blog' }),
	                  _react2.default.createElement('span', { style: _profileInfor2.default.span }),
	                  'Blog'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return ProfileInfor;
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
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProfileInfor);

/***/ },

/***/ 843:
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
	            paddingTop: '10px',
	            userSelect: 'none',
	            fontSize: '0.85rem'
	        },
	        row: {
	            marginTop: '50px'
	        },
	        lbl: {
	            paddingLeft: '100px'
	        },
	        ul: {
	            float: 'right'
	        },
	        li: {
	            display: 'inline-block',
	            margin: '0 5px'
	        },
	        text: {
	            textAlign: 'center',
	            width: '180px',
	            overflow: 'visible',
	            float: 'right',
	            marginRight: '80px',
	            color: 'grey'
	        },
	        input: {
	            // display: 'none'
	        },
	        pub: {
	            float: 'right',
	            marginRight: '80px'
	        },
	        pubLeft: {
	            marginLeft: '20px',
	            height: '103px',
	            float: 'left'
	        },
	        pubRight: {
	            float: 'left'
	        },
	        fstRowPubIt: {
	            marginLeft: '10px'
	        },
	        secRowPubIt: {
	            marginTop: '40px',
	            marginLeft: '10px'
	        },
	        link: {
	            textAlign: 'center',
	            width: '180px',
	            overflow: 'visible',
	            float: 'right',
	            marginRight: '80px',
	            cursor: 'pointer',
	            color: '#1E90FF'
	        }
	    }
	});

/***/ },

/***/ 844:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(845);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(287)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(845, function() {
				var newContent = __webpack_require__(845);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 845:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(286)();
	// imports
	
	
	// module
	exports.push([module.id, ".profileInfor label {\r\n    height: 22px;\r\n    width:100%;\r\n    margin-top: 10px;\r\n}\r\n\r\n.profileInfor label input{\r\n    display: none;\r\n}\r\n\r\n.profileInfor label span{\r\n    background-color:#fff;\r\n    border:1px solid rgba(0,0,0,0.15);\r\n    border-radius:0;\r\n    display:inline-block;\r\n    height:18px;\r\n    margin-right:10px;\r\n    margin-top:-1px;\r\n    vertical-align:middle;\r\n    width:18px;\r\n    line-height:1\r\n}\r\n\r\n.profileInfor label input:checked + span:after{\r\n    background-color:#57ad68;\r\n    border-radius:0;\r\n    content:\"\";\r\n    display:inline-block;\r\n    height:12px;\r\n    margin:2px;\r\n    width:12px\r\n}", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=14.bundle.js.map