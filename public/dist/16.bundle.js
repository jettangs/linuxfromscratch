/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([16],{

/***/ 1031:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(178);
	
	var _profile = __webpack_require__(1032);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _reactRedux = __webpack_require__(267);
	
	var _common = __webpack_require__(444);
	
	var _common2 = _interopRequireDefault(_common);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Profile = function (_Component) {
	  _inherits(Profile, _Component);
	
	  function Profile() {
	    _classCallCheck(this, Profile);
	
	    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	  }
	
	  _createClass(Profile, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'profile' },
	        _react2.default.createElement(
	          'div',
	          { className: 'left-panel' },
	          _react2.default.createElement('div', { className: 'grey' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'headImg' },
	            _react2.default.createElement('img', { src: '../../assets/profileHeadImg.png' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'username' },
	            'jettang'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'lv' },
	            'Lv.17'
	          ),
	          _react2.default.createElement('div', { className: 'location-icon' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'location-name' },
	            '\u5E7F\u5DDE'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'normal-position' },
	            _react2.default.createElement(
	              'div',
	              { className: 'signature' },
	              _react2.default.createElement(
	                'div',
	                { className: 'signature-lbl' },
	                '\u6700\u6015\u8111\u5B50\u4E0D\u597D\u4F7F'
	              ),
	              _react2.default.createElement('div', { className: 'signature-icon' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'gold-fav' },
	              _react2.default.createElement(
	                'ul',
	                null,
	                _react2.default.createElement('li', { className: 'gold-icon' }),
	                _react2.default.createElement(
	                  'li',
	                  { className: 'gold-num' },
	                  '63'
	                ),
	                _react2.default.createElement('li', { className: 'vertical-line' }),
	                _react2.default.createElement('li', { className: 'fav-icon' }),
	                _react2.default.createElement(
	                  'li',
	                  { className: 'fav-num' },
	                  '238'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'circles' },
	              _react2.default.createElement(
	                'ul',
	                null,
	                _react2.default.createElement('li', { className: 'weibo' }),
	                _react2.default.createElement('li', { className: 'github' }),
	                _react2.default.createElement('li', { className: 'zhihu' }),
	                _react2.default.createElement('li', { className: 'twitter' })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'blog' },
	              'www.jettangs.com'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'follow' },
	              _react2.default.createElement(
	                'ul',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'li',
	                  { className: 'followers' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'num' },
	                    '14'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'lbl' },
	                    'Followers'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { className: 'following' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'num' },
	                    '8'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'lbl' },
	                    'Following'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { className: 'postings' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'num' },
	                    '26'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'lbl' },
	                    'Postings'
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'right-panel' },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return Profile;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, prop) {
	  return {
	    usrIsSgi: state.common.usrIsSgi
	  };
	};
	
	var mapDispatchToProps = {
	  setUsrIsSgi: function setUsrIsSgi(val) {
	    return _common2.default.setUsrIsSgi(val);
	  },
	  dispSignBox: function dispSignBox(bool) {
	    return _common2.default.dispSignBox(bool);
	  }
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Profile);

/***/ },

/***/ 1032:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(1033);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(439)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(1033, function() {
				var newContent = __webpack_require__(1033);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 1033:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(438)();
	// imports
	
	
	// module
	exports.push([module.id, ".profile__profile___2Qjv3 {\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 0px;\r\n    bottom: 60px;\r\n    background: #F0F0F0;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__left-panel___2w5ex {\r\n    top: 0;\r\n    bottom: 0px;\r\n    position: absolute;\r\n    width: 35%;\r\n    margin-left: 5%;\r\n    background: white;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__right-panel___1cukM {\r\n    top: 0px;\r\n    right: 5%;\r\n    bottom: 0px;\r\n    position: absolute;\r\n    border-left: 10px solid #F0F0F0;\r\n    left: 40%;\r\n    background: white;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__grey___nEv60 {\r\n    top: 0px;\r\n    height: 140px;\r\n    position: absolute;\r\n    background: #F0F0F0;\r\n    width: 100%;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__headImg___2dv8u{\r\n    top:95px;\r\n    left: 45px;\r\n    width: 90px;\r\n    height:90px;\r\n    border: 5px solid white;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n}\r\n\r\n\r\n.profile__profile___2Qjv3 .profile__headImg___2dv8u img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__username___2NDnc {\r\n    left: 160px;\r\n    top:105px;\r\n    font-size: 1.2rem;\r\n    position: absolute;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__lv___2dfnh {\r\n    top:110px;\r\n    right:30px;\r\n    background: white;\r\n    color:grey;\r\n    border-radius: 5px;\r\n    font-size: 0.8rem;\r\n    padding: 3px;\r\n    position: absolute;\r\n}\r\n\r\n\r\n.profile__profile___2Qjv3 .profile__location-icon___2pJBg{\r\n  position: absolute;\r\n  vertical-align: middle;\r\n  top: 150px;\r\n  left:150px;\r\n  width: 20px;\r\n  height:20px;\r\n  background-repeat:no-repeat;\r\n  display:inline-block;\r\n  background-position: center center;\r\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1024 1024' enable-background='new 0 0 1024 1024' xml:space='preserve'><path fill='#C0C0C0' d='M512.095172 63.72331c-180.042989 0-326.01848 145.976515-326.01848 326.019504 0 264.890399 326.01848 570.533876 326.01848 570.533876s326.019504-305.642453 326.019504-570.533876C838.114676 209.699825 692.139184 63.72331 512.095172 63.72331zM512.095172 552.752054c-90.061405 0-163.00924-72.987746-163.00924-163.00924 0-90.021494 72.947835-163.010264 163.00924-163.010264 90.022518 0 163.010264 72.988769 163.010264 163.010264C675.105436 479.764308 602.11769 552.752054 512.095172 552.752054z'/></svg>\");\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__location-name___2f-55 {\r\n    position: absolute;\r\n    top: 148px;\r\n    left:175px;\r\n    color: grey;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__normal-position___2aJsK {\r\n    top: 200px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    position: absolute;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__signature___1FH-j {\r\n    margin-top: 20px;\r\n    padding-left: 100px;\r\n    height: 40px;\r\n    width: 100%;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__signature___1FH-j .profile__signature-lbl___o4gg1{\r\n    float: left;\r\n    text-align: center;\r\n    height:40px;\r\n    line-height: 40px;\r\n    color: grey;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__signature___1FH-j .profile__signature-icon___3gpcq{\r\n    vertical-align: middle;\r\n    margin-top:13px;\r\n    width: 15px;\r\n    height: 15px;\r\n    margin-left: 8px;\r\n    float: left;\r\n    background-repeat:no-repeat;\r\n    background-position: center center;\r\n    background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1024 1024' enable-background='new 0 0 1024 1024' xml:space='preserve'><path fill='#C0C0C0' d='M8.533333 1011.2v-213.333333l213.333334 213.333333h-213.333334z m285.866667-72.533333l-213.333333-213.333334 537.6-550.4 234.666666 204.8-558.933333 558.933334z m622.933333-618.666667l-226.133333-217.6 98.133333-93.866667 226.133334 217.6-98.133334 93.866667z'/></svg>\");\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__gold-fav___O_xcJ {\r\n    margin-top:25px;\r\n    text-align: center;\r\n    height: 40px;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__gold-fav___O_xcJ img{\r\n    margin-top: 8px;\r\n    height: 24px;\r\n    width: 24px;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__gold-fav___O_xcJ ul {\r\n    width:100%;\r\n    margin-top: 5px;\r\n    height: 30px;\r\n    color: grey;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__gold-fav___O_xcJ ul li {\r\n    margin: 0 5px;\r\n    height: 30px;\r\n    width: 30px;\r\n    line-height: 30px;\r\n    display:inline-block;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__gold-fav___O_xcJ ul li.profile__vertical-line___1vg2x {\r\n    width: 2px;\r\n    margin: 0 15px 0 10px;\r\n    background: #F0F0F0;\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__gold-fav___O_xcJ ul li.profile__gold-icon___3UOYt{\r\n    background-repeat: no-repeat;\r\n    background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1024 1024' enable-background='new 0 0 1024 1024' xml:space='preserve'><path fill='gold' d='M512 925.357798c-228.290936 0-413.357798-185.066862-413.357798-413.357798s185.066862-413.357798 413.357798-413.357798 413.357798 185.066862 413.357798 413.357798-185.066862 413.357798-413.357798 413.357798z m66.249982-502.939009h80.177321c-3.969174-71.416954-43.397872-111.108697-118.243817-119.103413V284.183486a30.53211 30.53211 0 1 0-61.06422 0v23.608367c-73.845431 14.79633-112.536661 55.803303-116.078385 123.06789 0 49.419743 38.738202 84.216954 116.078385 104.462092v108.717798c-28.136514-8.920073-42.228257-31.424587-42.228257-67.598092H352.49556c-1.305835 78.979523 40.936514 121.569468 126.623706 127.854386v35.520587a30.53211 30.53211 0 1 0 61.06422 0v-37.498129c84.61622-10.944587 127.549064-52.177028 128.793835-123.767779 1.34811-52.181725-41.655193-87.561394-128.793835-106.237652V366.592c24.261284 7.036477 36.981431 25.628183 38.066496 55.826789z m-126.590826-8.440954c0.892477-19.991486 10.080294-34.078532 27.46011-42.326899v85.184587c-20.076037-9.690422-29.273248-23.960661-27.46011-42.857688z m128.69989 183.563743c-1.005211 22.950752-14.434642 38.071193-40.17556 45.450569v-90.769615c26.750826 10.531229 40.17556 25.632881 40.17556 45.319046z'/></svg>\");\r\n}\r\n\r\n.profile__profile___2Qjv3 .profile__gold-fav___O_xcJ ul li.profile__fav-icon___3Tytm{\r\n    background-position: center center;\r\n    background-size: 23px;\r\n    background-repeat: no-repeat;\r\n    background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1024 1024' enable-background='new 0 0 1024 1024' xml:space='preserve'><path fill='dodgerblue' d='M0.268659 965.467729l210.05672 0 0-453.141101L0.268659 512.326629 0.268659 965.467729zM1001.748882 710.444617c13.251043-17.407861 20.987981-42.077909 20.987981-71.177632 0-29.279628-7.839884-54.117588-21.208865-71.501462 9.824842-13.77077 15.534844-31.955224 15.534844-52.618375 0-28.656955-11.265086-57.092027-30.855801-77.935084-16.650259-17.698708-47.293171-38.753654-98.880088-38.753654l-151.712351 0c-76.40089 0-107.98031-5.870918-120.370805-9.671922 0.366807-0.963494 0.81857-2.044926 1.21836-3.357237 9.459034-24.915919 26.943854-71.280578 26.943854-244.234777 0-48.835361-31.443492-141.196872-150.55196-141.196872-31.672372 0-66.8569 2.999425-87.708953 25.265735-23.202819 24.677045-18.516279 59.418805-11.938732 107.537543 4.379701 32.124135 9.782864 72.106144 9.782864 122.253817C402.937258 410.132281 263.513455 517.304015 262.124185 518.34347l-10.907274 8.248669 0 419.260888 4.328727 6.62952c10.770346 16.386397 72.480948 69.916294 412.938207 69.916294l218.842108 0c51.586917 0 82.229829-21.055946 98.880088-38.737663 19.589715-20.912021 30.855801-49.278129 30.855801-77.960071 0-20.663152-5.710002-38.823618-15.534844-52.626371 13.369981-17.399865 21.208865-42.205842 21.208865-71.519452C1022.735864 752.497539 1014.998926 727.82849 1001.748882 710.444617z'/></svg>\");\r\n}\r\n\r\n.profile__circles___2iq6g {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n    padding: 0 60px;\r\n    width: 100%;\r\n    height: 40px; \r\n    color: gray;\r\n}\r\n\r\n.profile__circles___2iq6g .profile__circles-lbl___1LvPL{\r\n    height:30px;\r\n    line-height:30px;\r\n    margin: 5px auto;\r\n    float: left;\r\n}\r\n\r\n\r\n.profile__circles___2iq6g ul {\r\n    display: inline-block;\r\n    height:30px;\r\n    margin: 5px auto;\r\n}\r\n\r\n.profile__circles___2iq6g ul li {\r\n    height: 30px;\r\n    width: 30px;\r\n    margin: 0 5px;\r\n    line-height: 30px;\r\n    background-repeat:no-repeat;\r\n    display:inline-block;\r\n    background-position: center center;\r\n}\r\n\r\n.profile__circles___2iq6g ul li.profile__weibo___1NjR_ {\r\n    background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1024 1024' enable-background='new 0 0 1024 1024' xml:space='preserve'><path fill='#C0C0C0' d='M-56.57-52.89v0 0zM743.314 475.6q-16.558-3.318-21.501-9.921t-1.659-12.145l3.318-5.508q1.094-1.094 2.224-3.318t4.414-9.391 4.978-14.334 2.753-17.652-0.564-19.877-6.638-20.407-13.805-19.877q-15.463-15.463-40.284-19.877t-49.641-0.564-46.885 9.921-36.4 11.581l-14.334 6.638q-11.050 3.318-18.218 4.414t-11.050-0.564-6.073-3.318-1.659-7.732 1.094-10.485 2.753-13.805 3.318-14.899q0-13.239-1.659-24.819t-7.167-25.914-15.994-23.161-26.48-14.334-41.379-3.318-57.372 13.239q-38.624 13.239-78.342 39.154t-68.951 54.052-53.523 54.618-37.53 43.038l-12.145 17.652q-36.4 47.451-54.052 94.901t-16.558 71.707v23.161q6.638 52.958 32.551 94.901t61.785 67.857 84.415 44.132 93.242 26.48 94.337 11.581q81.662 6.638 169.36-12.675t163.289-66.763 106.481-113.649q18.747-38.624 19.313-72.836t-11.581-55.712-31.457-38.060-36.4-24.29-30.327-9.921zM406.816 818.735q-119.156 5.508-202.443-46.356t-83.285-131.301q0-78.342 82.756-135.15t203.007-62.35 203.007 39.718 82.756 123.569q0 79.438-84.415 142.882t-201.348 68.951zM374.83 513.094q-31.986 3.318-57.372 14.899t-39.718 26.48-24.29 31.986-13.805 33.646-4.978 30.327-1.094 21.501l1.094 8.827v4.414q0 3.318 2.224 13.239t6.073 18.218 12.675 18.218 20.972 16.558q72.836 35.306 135.714 21.501t101.503-63.443q15.463-18.747 20.407-46.356t-2.224-55.712-24.819-51.299-52.394-35.871-80.003-7.167zM335.11 721.645q-6.638 1.094-12.675 0.564t-11.050-2.224-9.921-3.847-8.261-6.073-6.073-7.732-4.414-8.827-1.659-10.485q0-12.145 6.638-23.725t18.218-19.877 25.914-9.391q9.921-1.094 19.313 0.564t15.994 5.508 11.581 8.827 7.167 11.581 2.224 14.334q0 12.145-7.167 23.161t-19.313 18.747-26.48 8.827zM428.882 642.207q-7.732 5.508-15.994 4.978t-11.581-7.167l-2.224-4.414q-1.094-2.224-1.094-4.414v-4.414q0-3.318 1.094-5.508l2.224-4.414q1.094-2.224 3.318-3.318l3.318-4.414q8.827-6.638 17.088-5.508t11.581 8.827q3.318 4.414 2.753 9.921t-3.318 10.485-7.167 9.391zM820.562 411.591q6.638 0 12.145-3.318t8.827-8.261 4.414-10.485q1.094-1.094 1.094-3.318 13.239-125.794-88.265-143.446-29.798-5.508-55.182-1.094-7.732 0-13.239 3.847t-9.391 9.921-3.847 12.675q0 11.050 7.732 18.747t18.747 7.732q86.075-19.877 92.677 55.182 2.224 18.747-2.224 35.306 0 11.050 7.732 18.747t18.747 7.732zM801.815 100.478q-48.545-11.050-130.207 4.414-1.094 0-2.224 1.094l-1.094 2.224-1.094 1.094q-12.145 3.318-19.877 13.805t-7.732 22.63q0 16.558 11.050 27.574t26.48 11.050h3.318q1.094 0 4.978-1.094t8.261-1.659 9.391-2.224 8.827-3.318 14.899-1.659 27.044 1.659 35.306 8.261 38.624 16.558 38.624 27.574 33.646 40.813q28.704 65.104 11.050 125.794 0 1.094-0.564 2.224t-1.659 5.508-2.224 8.261-2.224 9.921-1.094 10.485q0 9.921 5.508 16.558t13.805 9.391 19.313 2.753q30.893 0 36.4-37.53 13.239-43.038 14.899-82.192t-5.508-68.951-21.501-55.712-33.116-44.132-41.943-33.116-44.697-23.725-44.697-14.334z'/></svg>\");\r\n}\r\n.profile__circles___2iq6g ul li.profile__github___jJH9G {\r\n    background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1024 1024' enable-background='new 0 0 1024 1024' xml:space='preserve'><path fill='#C0C0C0' d='M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z'/></svg>\");\r\n}\r\n\r\n.profile__circles___2iq6g ul li.profile__zhihu___21Qr3 {\r\n\r\n    background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1024 1024' enable-background='new 0 0 1024 1024' xml:space='preserve'><path fill='#C0C0C0' d='M510.163 30.98c268.172 0 485.569 217.397 485.569 485.569s-217.397 485.569-485.569 485.569-485.569-217.397-485.569-485.569 217.397-485.569 485.569-485.569zM765.727 716.017v-408.062h-229.319v408.062h40.982l14.892 51.217 72.093-51.217h101.353zM401.104 538.857h111.504c0 0 0-43.626-21.808-46.048-21.83-2.421-89.698 0-89.698 0v-135.733h100.583c0 0-1.199-44.837-20.609-44.837-19.374 0-163.596 0-163.596 0l25.44-73.933c0 0-41.194 2.434-55.735 27.873-14.554 25.451-61.801 156.342-61.801 156.342s15.741 7.265 42.415-12.121c26.662-19.386 35.138-53.324 35.138-53.324l48.469-2.421 1.222 138.156c0 0-83.62-1.211-100.583 0-16.976 1.211-26.662 46.048-26.662 46.048h127.246c0 0-10.909 76.354-43.638 132.1-32.705 55.746-94.529 99.373-94.529 99.373s44.849 18.175 88.475-7.277c43.638-25.44 75.807-137.375 75.807-137.375l102.33 125.267c0 0 9.349-59.612-1.642-76.46-11.003-16.835-70.8-84.539-70.8-84.539l-26.127 23.029 18.593-74.119zM719.108 353.372v316.292h-47.644l-60.753 45.804-13.249-45.804h-12.505v-316.292z'/></svg>\");\r\n}\r\n\r\n\r\n\r\n.profile__circles___2iq6g ul li.profile__twitter___2UyYK {\r\n\r\n    background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1024 1024' enable-background='new 0 0 1024 1024' xml:space='preserve'><path fill='#C0C0C0' d='M962.285714 233.142857q-38.285714 56-92.571429 95.428571 0.571429 8 0.571429 24 0 74.285714-21.714286 148.285714t-66 142-105.428571 120.285714-147.428571 83.428571-184.571429 31.142857q-154.857143 0-283.428571-82.857143 20 2.285714 44.571429 2.285714 128.571429 0 229.142857-78.857143-60-1.142857-107.428571-36.857143t-65.142857-91.142857q18.857143 2.857143 34.857143 2.857143 24.571429 0 48.571429-6.285714-64-13.142857-106-63.714286t-42-117.428571l0-2.285714q38.857143 21.714286 83.428571 23.428571-37.714286-25.142857-60-65.714286t-22.285714-88q0-50.285714 25.142857-93.142857 69.142857 85.142857 168.285714 136.285714t212.285714 56.857143q-4.571429-21.714286-4.571429-42.285714 0-76.571429 54-130.571429t130.571429-54q80 0 134.857143 58.285714 62.285714-12 117.142857-44.571429-21.142857 65.714286-81.142857 101.714286 53.142857-5.714286 106.285714-28.571429z'/></svg>\");\r\n}\r\n\r\n.profile__blog___ermlh {\r\n    margin-top: 25px;\r\n    padding: 0 60px;\r\n    width: 100%;\r\n    height: 40px; \r\n    color: gray;\r\n    line-height: 40px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.profile__follow___2GqQR {\r\n    text-align: center;\r\n    margin-top: 25px;\r\n    width: 100%;\r\n    height: 60px; \r\n    color: gray;\r\n}\r\n\r\n.profile__follow___2GqQR .profile__content___2c3bL{\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    height:60px;\r\n    display: inline-block;\r\n}\r\n\r\n.profile__follow___2GqQR .profile__content___2c3bL .profile__num___2Ux3g {\r\n    font-size: 1.1rem;\r\n    color:black;\r\n  \r\n}\r\n\r\n.profile__follow___2GqQR .profile__content___2c3bL .profile__lbl___10vXL {\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.profile__follow___2GqQR .profile__content___2c3bL .profile__followers___2Tnsm {\r\n    float: left;\r\n    width: 80px;\r\n     height: 50px;\r\n     margin-top:5px;\r\n}\r\n\r\n.profile__follow___2GqQR .profile__content___2c3bL .profile__following___1_bOB {\r\n     float: left;\r\n     height: 50px;\r\n     width: 80px;\r\n     margin-top:5px;\r\n     border-left: 2px solid #F0F0F0;\r\n     border-right: 2px solid #F0F0F0;\r\n}\r\n\r\n.profile__follow___2GqQR .profile__content___2c3bL .profile__postings___pPExw {\r\n     float: left;\r\n     width: 80px;\r\n     height: 50px;\r\n     margin-top:5px;\r\n}\r\n", ""]);
	
	// exports
	exports.locals = {
		"profile": "profile__profile___2Qjv3",
		"left-panel": "profile__left-panel___2w5ex",
		"right-panel": "profile__right-panel___1cukM",
		"grey": "profile__grey___nEv60",
		"headImg": "profile__headImg___2dv8u",
		"username": "profile__username___2NDnc",
		"lv": "profile__lv___2dfnh",
		"location-icon": "profile__location-icon___2pJBg",
		"location-name": "profile__location-name___2f-55",
		"normal-position": "profile__normal-position___2aJsK",
		"signature": "profile__signature___1FH-j",
		"signature-lbl": "profile__signature-lbl___o4gg1",
		"signature-icon": "profile__signature-icon___3gpcq",
		"gold-fav": "profile__gold-fav___O_xcJ",
		"vertical-line": "profile__vertical-line___1vg2x",
		"gold-icon": "profile__gold-icon___3UOYt",
		"fav-icon": "profile__fav-icon___3Tytm",
		"circles": "profile__circles___2iq6g",
		"circles-lbl": "profile__circles-lbl___1LvPL",
		"weibo": "profile__weibo___1NjR_",
		"github": "profile__github___jJH9G",
		"zhihu": "profile__zhihu___21Qr3",
		"twitter": "profile__twitter___2UyYK",
		"blog": "profile__blog___ermlh",
		"follow": "profile__follow___2GqQR",
		"content": "profile__content___2c3bL",
		"num": "profile__num___2Ux3g",
		"lbl": "profile__lbl___10vXL",
		"followers": "profile__followers___2Tnsm",
		"following": "profile__following___1_bOB",
		"postings": "profile__postings___pPExw"
	};

/***/ }

});
//# sourceMappingURL=16.bundle.js.map