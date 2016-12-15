/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([1],{

/***/ 456:
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
	
	var _index = __webpack_require__(457);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _global = __webpack_require__(447);
	
	var _global2 = _interopRequireDefault(_global);
	
	var _news = __webpack_require__(459);
	
	var _news2 = _interopRequireDefault(_news);
	
	var _tutorials = __webpack_require__(460);
	
	var _tutorials2 = _interopRequireDefault(_tutorials);
	
	var _solutions = __webpack_require__(461);
	
	var _solutions2 = _interopRequireDefault(_solutions);
	
	var _common = __webpack_require__(442);
	
	var _common2 = _interopRequireDefault(_common);
	
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
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.switNavItem('home');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var cont = _global2.default[this.props.language].home;
	
	      var newsList = _news2.default.map(function (item, index) {
	        return _react2.default.createElement(
	          'li',
	          { key: item._id, style: 'item' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { style: 'item-title', to: { pathname: "/home/news/" + item._id } },
	            item[_this2.props.language].title
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'item-author' },
	            item.author
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'item-date' },
	            item.date.substr(0, 10)
	          )
	        );
	      });
	
	      var tutorialList = _tutorials2.default.map(function (item, index) {
	        return _react2.default.createElement(
	          'li',
	          { key: item._id, style: 'item' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { style: 'item-title', to: { pathname: "/home/news/" + item._id } },
	            item[_this2.props.language].title
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'item-author' },
	            item.author
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'item-date' },
	            item.date.substr(0, 10)
	          )
	        );
	      });
	
	      var solutionList = _solutions2.default.map(function (item, index) {
	        return _react2.default.createElement(
	          'li',
	          { key: item._id, style: 'item' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { style: 'item-title', to: { pathname: "/home/news/" + item._id } },
	            item[_this2.props.language].title
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'item-author' },
	            item.author
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'item-date' },
	            item.date.substr(0, 10)
	          )
	        );
	      });
	      return _react2.default.createElement(
	        'div',
	        { style: 'home' },
	        _react2.default.createElement(
	          'div',
	          { style: 'top' },
	          _react2.default.createElement(
	            'div',
	            { style: 'title' },
	            cont.title
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'content' },
	            _react2.default.createElement(
	              'span',
	              { style: 'part' },
	              ' ',
	              cont.p1,
	              ' '
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'span',
	              { style: 'part' },
	              ' ',
	              cont.p2,
	              ' '
	            ),
	            _react2.default.createElement(
	              'span',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { style: 'link', to: '/projects' },
	                cont.p3
	              )
	            ),
	            _react2.default.createElement(
	              'span',
	              null,
	              ' ',
	              cont.p4,
	              ' '
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: 'buttom' },
	          _react2.default.createElement(
	            'div',
	            { style: 'news' },
	            _react2.default.createElement(
	              'div',
	              { style: 'news-title' },
	              'News'
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: 'table' },
	              _react2.default.createElement(
	                'ul',
	                { style: 'ul' },
	                newsList
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'tutorials' },
	            _react2.default.createElement(
	              'div',
	              { style: 'tutorials-title' },
	              'Tutorials'
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: 'table' },
	              _react2.default.createElement(
	                'ul',
	                { style: 'ul' },
	                tutorialList
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: 'solutions' },
	            _react2.default.createElement(
	              'div',
	              { style: 'solutions-title' },
	              'Solutions'
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: 'table' },
	              _react2.default.createElement(
	                'ul',
	                { style: 'ul' },
	                solutionList
	              )
	            )
	          )
	        )
	      );
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
	  switNavItem: function switNavItem(item) {
	    return _common2.default.switNavItem(item);
	  }
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactCssModulesSimply2.default)(Home, _index2.default));

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(458);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(438)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(458, function() {
				var newContent = __webpack_require__(458);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(437)();
	// imports
	exports.i(__webpack_require__(441), undefined);
	
	// module
	exports.push([module.id, "/*'Source Sans Pro','Lucida Grande',sans-serif;*/\r\n\r\n.index__home___2ubWi {\r\n    top: 0px;\r\n    width: 100%;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__home___2ubWi {\r\n        height: 1680px;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-landscape"] + " {\r\n    .index__home___2ubWi {\r\n        height: 730px;\r\n    }\r\n}\r\n\r\n\r\n\r\n/*------------------------top-------------------------*/\r\n\r\n.index__top___3raDN {\r\n    width: 100%;\r\n    height: 240px;\r\n    background: white;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .15);\r\n    border-radius: 5px;\r\n    text-align: center;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["phone"] + " {\r\n    .index__top___3raDN {\r\n        height: 330px;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__top___3raDN {\r\n        height: 330px;\r\n    }\r\n}\r\n\r\n/*------------------------title-------------------------*/\r\n\r\n.index__title___3e6oa {\r\n    color: #1B1C1D;\r\n    display: inline-block;\r\n    margin: 50px auto 30px;\r\n    opacity: .8;\r\n    text-align: center;\r\n    font-size: 1.6rem;\r\n    font-weight: 600;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["phone"] + " {\r\n    .index__title___3e6oa {\r\n        padding: 0 10px;\r\n        margin: 30px auto 20px;\r\n        font-size: 1.3rem;\r\n    }\r\n}\r\n\r\n/*------------------------content-------------------------*/\r\n\r\n.index__content___1hVzo {\r\n    display: inline-block;\r\n    text-align: left;\r\n    color: grey;\r\n    line-height: 3rem;\r\n    font-size: 1rem;\r\n    margin: 0 auto;\r\n    border-radius: 5px;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["phone"] + " {\r\n    .index__content___1hVzo {\r\n        margin: 0 20px;\r\n        font-size: 0.9rem;\r\n        line-height: 2rem;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__content___1hVzo {\r\n        font-size: 0.95rem;\r\n        margin: 0 30px;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__content___1hVzo {\r\n        font-size: 0.95rem;\r\n        margin: 0 30px;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["desktop"] + " {\r\n    .index__content___1hVzo {\r\n        width: 830px\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["big-desktop"] + " {\r\n    .index__content___1hVzo {\r\n        width: 1330px\r\n    }\r\n}\r\n\r\n\r\n/*------------------------ul-------------------------*/\r\n\r\n.index__ul___oNLAf {\r\n    margin-top: 10px;\r\n    padding-left: 0;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__ul___oNLAf {\r\n        margin-top: 0;\r\n    }\r\n}\r\n\r\n/*------------------------part-------------------------*/\r\n\r\n.index__part___2Trbe {\r\n    margin-left: 2rem;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["phone"] + " {\r\n    .index__part___2Trbe {\r\n        margin-left: 1.2rem;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["big-desktop"] + " {\r\n    .index__part___2Trbe {\r\n        margin-left: 330px;\r\n    }\r\n}\r\n\r\n.index__link___3Vpuh {\r\n    cursor: pointer;\r\n    color: deepskyblue;\r\n}\r\n\r\n/*------------------------buttom-------------------------*/\r\n\r\n.index__buttom___15k-i {\r\n    margin-top: 30px;\r\n    width: 100%;\r\n    height: 460px;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .15);\r\n    border-radius: 5px;\r\n    background: white;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["phone"] + " {\r\n    .index__buttom___15k-i {\r\n        box-shadow:none;\r\n        border-radius:none;\r\n        height: 1370px;\r\n        top: 350px;\r\n        background: transparent;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__buttom___15k-i {\r\n        box-shadow:none;\r\n        border-radius:none;\r\n        height: 1290px;\r\n        background: transparent;\r\n        top: 360px;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["big-desktop"] + " {\r\n    .index__buttom___15k-i {\r\n        height: 480px;\r\n    }\r\n}\r\n\r\n/*------------------------news-------------------------*/\r\n\r\n.index__news___2vuCP {\r\n    border-right: 1px solid #e6e6e6;\r\n    margin-left:0.5%;\r\n    margin-top: 20px;\r\n    height: 420px;\r\n    width: 33%;\r\n    float: left;\r\n    overflow: hidden;\r\n    background: white;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["phone"] + " {\r\n    .index__news___2vuCP {\r\n        box-shadow: 0 1px 4px rgba(0, 0, 0, .15);\r\n        border-radius: 5px;\r\n        width:100%;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__news___2vuCP {\r\n        box-shadow: 0 1px 4px rgba(0, 0, 0, .15);\r\n        border-radius: 5px;\r\n        margin-top: 0;\r\n        border-right: none;\r\n        position:static;\r\n        width: 100%;\r\n        height: 420px;\r\n        padding-top: 20px;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["big-desktop"] + " {\r\n    .index__news___2vuCP {\r\n        height: 440px;\r\n    }\r\n}\r\n\r\n/*-----------------------tutorials---------------------*/\r\n\r\n.index__tutorials___1zHQz {\r\n    margin-top: 20px;\r\n    border-right: 1px solid #e6e6e6;\r\n    height: 420px;\r\n    float:left;\r\n    width: 33%;\r\n    background: white;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["phone"] + " {\r\n    .index__tutorials___1zHQz {\r\n        top: 450px;\r\n        left: 0;\r\n        box-shadow: 0 1px 4px rgba(0, 0, 0, .15);\r\n        border-radius: 5px;\r\n        width:100%;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__tutorials___1zHQz {\r\n        box-shadow: 0 1px 4px rgba(0, 0, 0, .15);\r\n        border-radius: 5px;\r\n        margin-top: 30px;\r\n        border-right: none;\r\n        position:static;\r\n        width: 100%;\r\n        height: 420px;\r\n        padding-top: 20px;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["big-desktop"] + " {\r\n    .index__tutorials___1zHQz {\r\n        height: 440px;\r\n    }\r\n}\r\n\r\n/*-----------------------solutions---------------------*/\r\n\r\n.index__solutions___28B1r {\r\n    margin-top: 20px;\r\n    float: left;\r\n    width: 33%;\r\n    height: 420px;\r\n    background: white;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["phone"] + " {\r\n    .index__solutions___28B1r {\r\n        top: 900px;\r\n        left: 0;\r\n        box-shadow: 0 1px 4px rgba(0, 0, 0, .15);\r\n        border-radius: 5px;\r\n        width:100%;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__solutions___28B1r {\r\n        box-shadow: 0 1px 4px rgba(0, 0, 0, .15);\r\n        border-radius: 5px;\r\n        margin-top: 30px;\r\n        border-right: none;\r\n        position:static;\r\n        width: 100%;\r\n        height: 420px;\r\n        padding-top: 20px;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["big-desktop"] + " {\r\n    .index__solutions___28B1r {\r\n        height: 440px;\r\n    }\r\n}\r\n\r\n/*-----------------------news-title---------------------*/\r\n\r\n.index__news-title___2E79N {\r\n    font-size: 1.2rem;\r\n    \r\n    margin-top: 10px;\r\n    margin-left: 25px;\r\n    opacity: .8;\r\n    color: orange;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__news-title___2E79N {\r\n        float: left;\r\n        margin-left: 30px;\r\n    }\r\n}\r\n\r\n/*----------------------tutorials-title--------------------*/\r\n\r\n.index__tutorials-title___2Y3on {\r\n    opacity: .8;\r\n    font-size: 1.2rem;\r\n    margin-top: 10px;\r\n    margin-left: 25px;\r\n    color: deepskyblue;\r\n}\r\n\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__tutorials-title___2Y3on {\r\n        float: left;\r\n        margin-left: 30px;\r\n    }\r\n}\r\n\r\n/*----------------------solutions-title--------------------*/\r\n\r\n.index__solutions-title___3sPXj {\r\n    opacity: .8;\r\n    font-size: 1.2rem;\r\n    margin-top: 10px;\r\n    margin-left: 25px;\r\n    color: limegreen;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__solutions-title___3sPXj {\r\n        float: left;\r\n        margin-left: 30px;\r\n    }\r\n}\r\n\r\n/*--------------------------table-----------------------*/\r\n\r\n.index__table___2I6LI {\r\n    height: 400px;\r\n    font-size: 0.9rem;\r\n    padding: 0 20px 10px;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__table___2I6LI {\r\n        float:right;\r\n        width: 420px;\r\n    }\r\n}\r\n\r\n/*--------------------------item-----------------------*/\r\n\r\n.index__item___bZPNb {\r\n    margin-top: 10px;\r\n    width: 100%;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px solid #e6e6e6;\r\n    display: inline-block;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__item___bZPNb {\r\n        margin-top: 15px;\r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["desktop"] + " {\r\n    .index__item___bZPNb {\r\n        margin-top: 10px; \r\n    }\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["big-desktop"] + " {\r\n    .index__item___bZPNb {\r\n        padding-bottom: 20px;\r\n        margin-top: 20px;\r\n    }\r\n}\r\n\r\n.index__item___bZPNb:last-child{\r\n    border-bottom: none;\r\n}\r\n\r\n\r\n/*------------------------item-title-----------------------*/\r\n\r\n.index__item-title___1u4yN {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    margin-left: 5px;\r\n    word-break:break-all;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n@media " + __webpack_require__(441).locals["tablet-portrait"] + " {\r\n    .index__item-title___1u4yN {\r\n        word-break:normal;\r\n    }\r\n}\r\n\r\n.index__item-author___3ZZXu{\r\n    color: grey;\r\n    float:left;\r\n    font-size: 0.75rem;\r\n    margin-left: 5px;\r\n}\r\n\r\n.index__item-date___3Jyvq {\r\n    font-size: 0.75rem;\r\n    color: grey;\r\n    float: right;\r\n    margin-right: 5px;\r\n}\r\n\r\n", ""]);
	
	// exports
	exports.locals = {
		"phone": "" + __webpack_require__(441).locals["phone"] + "",
		"tablet-portrait": "" + __webpack_require__(441).locals["tablet-portrait"] + "",
		"tablet-landscape": "" + __webpack_require__(441).locals["tablet-landscape"] + "",
		"desktop": "" + __webpack_require__(441).locals["desktop"] + "",
		"big-desktop": "" + __webpack_require__(441).locals["big-desktop"] + "",
		"home": "index__home___2ubWi",
		"top": "index__top___3raDN",
		"title": "index__title___3e6oa",
		"content": "index__content___1hVzo",
		"ul": "index__ul___oNLAf",
		"part": "index__part___2Trbe",
		"link": "index__link___3Vpuh",
		"buttom": "index__buttom___15k-i",
		"news": "index__news___2vuCP",
		"tutorials": "index__tutorials___1zHQz",
		"solutions": "index__solutions___28B1r",
		"news-title": "index__news-title___2E79N",
		"tutorials-title": "index__tutorials-title___2Y3on",
		"solutions-title": "index__solutions-title___3sPXj",
		"table": "index__table___2I6LI",
		"item": "index__item___bZPNb",
		"item-title": "index__item-title___1u4yN",
		"item-author": "index__item-author___3ZZXu",
		"item-date": "index__item-date___3Jyvq"
	};

/***/ },

/***/ 459:
/***/ function(module, exports) {

	module.exports = [
		{
			"_id": "9a1df524-80a3-4a71-9a27-b4f360b8cb26",
			"cn": {
				"title": "Linux Kernel 4.8.13正式版发布",
				"content": "Greg Kroah-Hartman说道：“Linux Kernel 4.8.13正式发布。所有4.8分支用户必须尽快升级。已经升级的4.8.y git tree可以在git://git.kernel.org/pub/scm/linux/kernel/git/stable/linux-stable.git linux-4.8.y中找到，或者通过网页浏览器访问kernel.org网站：http://git.kernel.org/?p=linux/kernel/git/stable/linux-stable.git;a=summary” Linux Kernel 4.8.13主要升级了ADMGPU和Radeon显卡驱动，大量的ARM64（AArch64）架构调整，此外针对x86和ARC架构进行了少量优化。升级ATA (libata-scsi), CLK (sunxi), Intel i915, MediaTek, wireless (Marvell mwifiex), PCI-E, PWM和SCSI驱动，此外还修复了OverlayFS文件系统。"
			},
			"en": {
				"title": "Linux kernel 4.8.13 released",
				"content": "Kroah-Hartman Greg said: 'Kernel 4.8.13 Linux officially released. All 4.8 branch users must upgrade as soon as possible. 4.8.y git has upgraded the tree can be found in the git://git.kernel.org/pub/scm/linux/kernel/git/stable/linux-stable.git linux-4.8.y, or through a web browser to visit the kernel.org site: http://git.kernel.org/p=linux/kernel/git/stable/linux-stable.git; a= summary?'Kernel 4.8.13 Linux mainly to upgrade the ADMGPU and Radeon graphics driver, a large number of ARM64 (AArch64) architecture adjustment, in addition to the x86 and ARC architecture for a small number of optimization. Upgrade ATA (libata-scsi), CLK (Sunxi), i915 Intel, MediaTek, wireless (mwifiex Marvell), PCI-E, PWM and SCSI drivers, in addition to the OverlayFS file system also repaired."
			},
			"author": "LFS-CN",
			"refName": "",
			"refURL": "",
			"date": "2016-04-02 08:11:11.000"
		},
		{
			"_id": "450d69ef-8f74-46f7-bb18-c56ab13a6e7d",
			"cn": {
				"title": "Linux kernel 权限提升漏洞(CVE-2015-8967)",
				"content": "受影响系统：Linux kernel 4.0 描述：CVE(CAN) ID: CVE-2015-8967。Linux Kernel是Linux操作系统的内核。Linux kernel < 4.0版本arch/arm64/kernel/sys.c存在安全漏洞，可使本地用户绕过'strict page permissions'保护机制，修改系统调用表，获取提升的权限。来源：vendor。厂商补丁：Linux，目前厂商已经发布了升级补丁以修复这个安全问题，请到厂商的主页下载。"
			},
			"en": {
				"title": "Linux kernel Privilege escalation vulnerability (CVE-2015-8967)",
				"content": "Affected system: kernel Linux 4 Description: CVE (CAN) CVE-2015-8967 ID. Kernel Linux is the kernel of the Linux operating system. Kernel Linux < 4 version of the arch/arm64/kernel/sys.c security vulnerabilities, local users can bypass the page permissions''strict protection mechanism, modify the system call table, access to enhance the rights. Source: vendor. Vendor patch: Linux, the current vendor has released an upgrade patch to fix this security problem, please go to the vendor's home page to download."
			},
			"author": "Linux公社",
			"refName": "Linux公社",
			"refURL": "http://www.linuxidc.com/Linux/2016-12/138092.htm",
			"date": "2016-04-05 07:21:11.000"
		},
		{
			"_id": "191c67c8-30a9-49ba-97da-1103c6ab3be5",
			"cn": {
				"title": "2017年关于Linux发展的七大预测",
				"content": "您的2016年余额已不足，请及时充值。”2017年的脚步已经渐渐逼近了，Linux在2016年一年中发生了哪些变化，2017年又会有哪些新的趋势呢? 2017年关于Linux发展的七大预测2016年年初，外媒对Linux今年的发展做了八大预测，现在我们来回顾一下这八大预测是不是个个都中呢?1.Wayland仍将受冷遇Wayland作为Xorg的替代方案，在2016年可能有多种的Linux 发行版内置，但是主流的Linux发行版将Wayland置为默认选项是不可能发生的事情。实际情况：2016年11月22日发布的Fedora 25选择了Wayland作为默认显示服务器，显而易见这一预测并没有成为现实。2Systemd的适用范围将进一步扩大systemd 的适用范围将持续扩大，并在新的一年中迎来更多新功能。实际情况：其实这一类的预测几乎无一例外的都会成功，无论大家是否愿意，systemd都将继续在“init system”之外拓展其涵盖范畴。换言之，systemd本身已经不再单纯属于init system。3.Canonical 将撤出手机市场2016年，Canonical 将放缓开发Ubuntu手机版的的扩张速度，甚至有可能完全停止，并将注意力集中在 Ubuntu 的桌面与服务器版本身上。实际情况：Canonical公司最后一次召开与手机相关的发布会已经是今年的4月份了，其最近发布的几份公告都与手机无关，并且公司新闻主页中也没有在显示和手机相关的内容，所以我们基本可以认定Canonical 放弃了手机市场。4.Android将迎来更多以桌面为核心的新增功能2016年推出的Android新版本将增添新功能，旨在使Android 设备在使用感受上更接近于现代桌面操作系统，值得注意的是应用程序将获得可移动且可堆叠的运行窗口。实际情况：谷歌公司已经于今年8月公布的Android N新版本中加入了多容器视图模式，相信其未来还将引入更多桌面系统中的特性。5.ChromeOS将全面接入Google Play商店2016年 ChromeOS 将获得直接通过 Google Play 应用商店安装并运行 Android 应用程序的能力。实际情况：2016年，谷歌首款Chromebook产品本身就自带Google Play商店，这意味着ChromeOS(至少在部分设备上)能够访问大部分Android应用。6.新的基于Linux的手机操作系统即将出现截至2015年年底，除 Android 之外的其它 Linux 手机系统基本上全军覆没，所以2016年极其有希望会出现一款新的手机Linux系统。实际情况：虽然我们很希望能够在2016年看到新的手机Linux系统的出现，但是令人遗憾的是，它并没有出现。7.elementary、openSUSE与Fedora将占据更多的市场份额Linux世界一向是风云变化，今天你还在称霸，也许明天江山就易主了。所以我们希望并相信elementary、openSUSE与Fedora在2016年中能够突破重围，占据更多的市场份额。实际情况：这三套发行版在2016年的市场份额变化不大，但是基本可以确定是有所增长，增长的幅度还有待更准确的数据支撑。8.微软将进一步拥抱开源微软以前的形象一直是故步自封的，近几年微软一直在积极拥抱开源、推进其开源进程，所以2016年微软拥抱开源值得期待。实际情况：2016年年末，微软正式加入Linux基金会。看完了2016年Linux的发展情况，那么Linux在2017年又会有哪些亮眼的表现呢?1.桌面Linux市场份额将增至3%2017年关于Linux发展的七大预测2016年即将结束，桌面Linux的市场份额一直徘徊在2%左右，但是到2017年底，预计市场份额将会上升至3%。2.Canonical会再次转移焦点2017年关于Linux发展的七大预测2016年，我们预测Canonical将会渐渐把注意力从手机中移开，事实证明，这是对的，2016年Canonical更关注企业功能。但是，2017年，Canonical有可能会再次转移焦点，重点关注其它领域。3.Ubuntu将会要求登录帐户来安装软件Canonical在手机或平板电脑上安装或更新软件已经要求要创建或使用账户，所以在桌面和服务器上通过账户来安装软件指日可待，预计它在2017年底将与Ubuntu 17.10一起出现，如果2017年没有实现的话，那么2018年也有可能会实现。4.新的基于手机的Linux操作系统将出现2016年年初，也预测了新的基于手机的Linux操作系统的出现，但是很可惜并没有实现，所以希望能够在2017年实现这个愿望。5.Steam Machines可能会与市场脱节Valve去年正式发布搭载Steam OS操作系统的Steam Machine游戏主机，企图迎来Linux游戏的黄金时代。但是很遗憾，这一切并没有真的发生，2017年他们可能会完全脱离市场。6.Google可能会推出新的通讯平台Google旗下有很多即时通讯平台，如 Google Talk、环聊，Allo，2017年谷歌很有可能会推出一款新的通讯平台。7.Linux与微软的关系将会更微妙微软与Linux的关系是一向是很微妙的，一方面，微软历来对自由软件(尤其是Linux)存在敌意，即使他们从Linux公司中收取了不菲的专利费。另一方面，微软也与各种Linux公司合作，在云中支持Linux，甚至斥资50万美元加入了Linux基金会。2017年，微软与Linux这种复杂的关系会继续下去，也有可能会迸发出新的火花。"
			},
			"en": {
				"title": "Seven predictions of the development of Linux in 2017",
				"content": "Your 2016 balance is insufficient, please recharge in time. In 2017 the pace has been gradually approaching, Linux what changes happened in the year of 2016 in 2017, and what new trends? Seven 2016 forecast about the development of the Linux at the beginning of 2017, foreign media made eight forecast for this year's Linux development, we now review this prediction is not all in eight? 1.Wayland will still be affected by cold Wayland as alternatives for the Xorg release in 2016 may have a variety of built-in Linux, but the mainstream release of Linux Wayland is set to the default option is not going to happen. Actual situation: in November 22, 2016 released the Fedora 25 chose Wayland as the default display server, it is obvious that this prediction has not become a reality. The scope of application of 2Systemd will further expand the scope of application of SYSTEMd will continue to expand, and usher in more new features in the new year. Actual situation: in fact, this kind of prediction almost without exception, will succeed, whether or not we are willing, SYSTEMd will continue to expand its scope of coverage in addition to the system init. In other words, SYSTEMd itself is no longer simply belong to system init. 3.Canonical will withdraw from the mobile phone market in 2016, Canonical will speed the development of Ubuntu mobile phone version of the slowdown in the expansion, and may even be completely stopped, and will focus on the desktop and server versions of Ubuntu. The actual situation of Canonical company: the last time and mobile phone related conference has been held in April this year, the announcement of several recently released mobile phone with independent and company news page is not in the display and mobile phone related content, so we basically can be identified Canonical over mobile phone market. 4.Android will usher in the new 2016 more desktop is the core in the launch of the new version of the Android will add new features to make Android more close to the modern desktop operating system in use, it is worth noting that the application will get mobile and stackable operation window. The actual situation: Google Corporation has added a multi container view model in the new version of the N Android announced in August this year, and believe that the future will introduce more features in the desktop system. 5.ChromeOS will be fully access to the Play Google store in 2016 ChromeOS will get the ability to install and run Android applications directly through the Play Google application store. Actual situation: in 2016, Google's first Chromebook product itself comes Play Google store, which means ChromeOS (at least in part of the device) to access most of the Android application. 6 Linux mobile phone operating system will appear at the end of 2015 based on the new Linux mobile phone system, in addition to other Android, basically in 2016 promising The whole army was wiped out., so there will be a new mobile phone Linux system. Actual situation: Although we very much hope to be able to see the emergence of the new mobile phone Linux system in 2016, but it is regrettable that it does not appear. 7.elementary, openSUSE and Fedora will occupy more market share in the Linux world is always changing, today you still dominate, maybe tomorrow Jiangshan easy to master. So we hope and believe that elementary, openSUSE and Fedora can break the siege in 2016, to occupy more market share. Actual situation: the three sets of distribution in 2016, the market share change is not big, but the basic can be determined to have increased, the magnitude of growth remains to be more accurate data support. 8 Microsoft will further embrace open source Microsoft previous image has been in recent years, the content with staying where one is, Microsoft has been actively promoting the process of open source, embrace open source, so in 2016 Microsoft is worth looking forward to embrace open source. The actual situation: at the end of 2016, Microsoft officially joined the Linux foundation. After the 2016 development of the Linux Linux in 2017, then what would be a dazzling performance? 1 desktop Linux market share will increase to 3%2017 year seven 2016 forecast about the development of the Linux is coming to an end, the desktop Linux market share has been hovering around 2%, but by the end of 2017, is expected to market share will rise to 3%. 2.Canonical seven will shift the focus again in 2017 about the development of the Linux forecast in 2016, we predict that Canonical will gradually get away from the mobile phone, in fact, this is right, the 2016 Canonical pay more attention to the function of enterprise. However, in 2017, Canonical is likely to shift the focus again, focusing on other areas of focus.  3.Ubuntu will require a login account to install or update software is required to create or use the account in a mobile phone or tablet computer to install the software on the Canonical, so in the desktop and server through an account to install the software at the end of 2017 is expected to point the day and await for it, it will appear together with Ubuntu 17.10, if 2017 does not come true, then 2018 is also possible will achieve. 4 new Linux operating system based on mobile phone will appear at the beginning of 2016, we predicted the new Linux operating system based on the mobile phone, but unfortunately did not realize, so I hope to achieve this desire in 2017. Machines 5.Steam may be out of touch with the market last year, the official release of Valve OS Steam operating system Machine Steam game console, in an attempt to usher in the golden age of Linux games. But it's a pity that it didn't really happen, and in 2017 they might be totally out of the market. 6.Google may launch a new communications platform Google has a lot of instant messaging platform, such as Talk Google, ring chat, Allo, 2017 Google is likely to launch a new communication platform. The relationship between 7.Linux and Microsoft will be more subtle."
			},
			"author": "田晓旭",
			"refName": "it168网站",
			"refURL": "http://tech.it168.com/a2016/1207/3057/000003057918.shtml",
			"date": "2016-12-07 08:11:11.000"
		},
		{
			"_id": "636c0ce0-facf-42bb-9c8e-49393a547a07",
			"cn": {
				"title": "Linux、微软、SUN将共议操作系统的未来",
				"content": "据国外媒体消息，2016年12月8日至10日，各大OS厂商将聚集旧金山Kabuki酒店，就OS的未来进行探讨。该会议由Intel赞助发起，将汇聚来自Linux基金会、Sun和微软的代表。这三路的代表将坐下来对OS的未来进行探讨，这在有史以来也是第一次。他们不仅仅是代表着自己的OS，而是面向整个业界的OS。Linux基金会的执行主管Jim Zemlim，微软的平台战略主管Sam Ramji，Sun开发者和社区市场部主管Ian Murdock都将在会上就OS的发展发表自己的看法。但是Apple在哪里?Apple现在拥有着10%左右的OS市场份额，很明显他们缺席了本次会谈。"
			},
			"en": {
				"title": "Linux, Microsoft, SUN will be the future of the operating system",
				"content": "According to foreign media news, December 8, 2016 to 10, the major OS manufacturers will gather in San Francisco Kabuki Hotel, on the future of OS. The conference sponsored by the Intel, will come together from the Linux foundation, Sun and Microsoft representatives. The three delegates will sit down and discuss the future of OS, which is also the first time in history. They not only represent their own OS, but for the entire industry OS. Executive director of the Linux foundation Jim Zemlim"
			},
			"author": "zengdongjun",
			"refName": "doit",
			"refURL": "http://www.doit.com.cn/?p=45156?_k=fb2k8r",
			"date": "2016-12-13 12:13:11.000"
		},
		{
			"_id": "fe1505d2-1689-46c8-85f9-dff1186e7e61",
			"cn": {
				"title": "Linux内核缺陷 黑客获服务器控制权限",
				"content": "安全研究人员称，普通用户可以使用三个安全缺陷获得对Linux服务器或工作站的完全控制。 二个缺陷存在于Linux内核管理内存的模块中。据波兰的安全厂商iSEC安全资讯公司于当地时间本周三发布的安全公告称，它们影响目前所有的Linux版本。第三个缺陷影响内核中支持ATI公司Rage 128显卡的模块。 由于Linux通常被使用在共享服务器上，能够使用户提高访问权限的缺陷是非常严重的。但是，它们没有使外界黑客能够入侵系统的缺陷更危险，因为黑客必须首先具有对系统的访问权限，然后才能够提高其访问权限。 “Linux内核计划”组织发布了一个新的2.4版内核━━2.4.25，修正了这一问题。这已经是今年第二次为修正缺陷而发布升级版内核，1月份，该组织发布2.4.24版内核修正了另一个缺陷。 Linux都纷纷发布补丁软件修正产品中的缺陷。在当地时间本周四上午，Red Hat、SuSE、Debian以及其它Linux厂商都发布了补丁软件。 新发现的缺陷表明了这样一个事实，即Linux中还存在缺陷。这对“许多眼睛”理论提出了质疑，这种理论认为，由于开放源代码软件的代码能够被自由查看，其中的安全缺陷更容易被发现、修正，因而也更安全。阿尔弗雷德指出，事实上，大多数开发人员都不愿意对老代码进行检查。尽管这一理论非常好，但它与人们的行为有偏差。"
			},
			"en": {
				"title": "Linux kernel flaw hackers access to server control",
				"content": "Security researchers say the average user can access the full control of the Linux server or workstation with three security flaws. Two defects exist in the Linux kernel managed memory modules. According to Poland's security firm iSEC security information company in the local time on Wednesday issued a security announcement that they affect all of the current Linux version. Third defects affect the kernel in support of Rage ATI 128 graphics module. Because Linux is usually used on a shared server, it is very serious that the user can increase the access to the user. However, they do not make the external hackers can invade the system's defects more dangerous, because the hacker must first have access to the system, and then to improve their access. 'Linux kernel plan' organization has released a new version 2.4 kernel - 2.4.25, fixed this problem. This is the second time this year to fix the defect and released an upgraded version of the kernel, in January, the organization released the 2.4.24 version of the kernel to fix another flaw. Linux have issued a patch to fix defects in the product. At the local time this Thursday morning, Hat SuSE, Red, Debian and other Linux vendors have released a patch software. The newly discovered flaw indicates the fact that there are still defects in Linux. The question of 'many eyes' theory, this theory is that, due to the open source software code can be free to check, the security flaws are more likely to be found and corrected, and thus more security. Alfred pointed out that in fact, most developers do not want to check the old code. Although this theory is very good, it is a deviation from the behavior of people."
			},
			"author": "LFS-CN",
			"refName": "",
			"refURL": "",
			"date": "2016-12-05 15:23:56.000"
		}
	];

/***/ },

/***/ 460:
/***/ function(module, exports) {

	module.exports = [
		{
			"_id": "9a1df524-80a3-4a71-9a27-b4f360b8cb26",
			"cn": {
				"title": "Linux Kernel 4.8.13正式版发布",
				"content": "Greg Kroah-Hartman说道：“Linux Kernel 4.8.13正式发布。所有4.8分支用户必须尽快升级。已经升级的4.8.y git tree可以在git://git.kernel.org/pub/scm/linux/kernel/git/stable/linux-stable.git linux-4.8.y中找到，或者通过网页浏览器访问kernel.org网站：http://git.kernel.org/?p=linux/kernel/git/stable/linux-stable.git;a=summary” Linux Kernel 4.8.13主要升级了ADMGPU和Radeon显卡驱动，大量的ARM64（AArch64）架构调整，此外针对x86和ARC架构进行了少量优化。升级ATA (libata-scsi), CLK (sunxi), Intel i915, MediaTek, wireless (Marvell mwifiex), PCI-E, PWM和SCSI驱动，此外还修复了OverlayFS文件系统。"
			},
			"en": {
				"title": "Linux kernel 4.8.13 released",
				"content": "Kroah-Hartman Greg said: 'Kernel 4.8.13 Linux officially released. All 4.8 branch users must upgrade as soon as possible. 4.8.y git has upgraded the tree can be found in the git://git.kernel.org/pub/scm/linux/kernel/git/stable/linux-stable.git linux-4.8.y, or through a web browser to visit the kernel.org site: http://git.kernel.org/p=linux/kernel/git/stable/linux-stable.git; a= summary?'Kernel 4.8.13 Linux mainly to upgrade the ADMGPU and Radeon graphics driver, a large number of ARM64 (AArch64) architecture adjustment, in addition to the x86 and ARC architecture for a small number of optimization. Upgrade ATA (libata-scsi), CLK (Sunxi), i915 Intel, MediaTek, wireless (mwifiex Marvell), PCI-E, PWM and SCSI drivers, in addition to the OverlayFS file system also repaired."
			},
			"author": "LFS-CN",
			"refName": "",
			"refURL": "",
			"date": "2016-04-02 08:11:11.000"
		},
		{
			"_id": "450d69ef-8f74-46f7-bb18-c56ab13a6e7d",
			"cn": {
				"title": "Linux kernel 权限提升漏洞(CVE-2015-8967)",
				"content": "受影响系统：Linux kernel 4.0 描述：CVE(CAN) ID: CVE-2015-8967。Linux Kernel是Linux操作系统的内核。Linux kernel < 4.0版本arch/arm64/kernel/sys.c存在安全漏洞，可使本地用户绕过'strict page permissions'保护机制，修改系统调用表，获取提升的权限。来源：vendor。厂商补丁：Linux，目前厂商已经发布了升级补丁以修复这个安全问题，请到厂商的主页下载。"
			},
			"en": {
				"title": "Linux kernel Privilege escalation vulnerability (CVE-2015-8967)",
				"content": "Affected system: kernel Linux 4 Description: CVE (CAN) CVE-2015-8967 ID. Kernel Linux is the kernel of the Linux operating system. Kernel Linux < 4 version of the arch/arm64/kernel/sys.c security vulnerabilities, local users can bypass the page permissions''strict protection mechanism, modify the system call table, access to enhance the rights. Source: vendor. Vendor patch: Linux, the current vendor has released an upgrade patch to fix this security problem, please go to the vendor's home page to download."
			},
			"author": "Linux公社",
			"refName": "Linux公社",
			"refURL": "http://www.linuxidc.com/Linux/2016-12/138092.htm",
			"date": "2016-04-05 07:21:11.000"
		},
		{
			"_id": "191c67c8-30a9-49ba-97da-1103c6ab3be5",
			"cn": {
				"title": "2017年关于Linux发展的七大预测",
				"content": "您的2016年余额已不足，请及时充值。”2017年的脚步已经渐渐逼近了，Linux在2016年一年中发生了哪些变化，2017年又会有哪些新的趋势呢? 2017年关于Linux发展的七大预测2016年年初，外媒对Linux今年的发展做了八大预测，现在我们来回顾一下这八大预测是不是个个都中呢?1.Wayland仍将受冷遇Wayland作为Xorg的替代方案，在2016年可能有多种的Linux 发行版内置，但是主流的Linux发行版将Wayland置为默认选项是不可能发生的事情。实际情况：2016年11月22日发布的Fedora 25选择了Wayland作为默认显示服务器，显而易见这一预测并没有成为现实。2Systemd的适用范围将进一步扩大systemd 的适用范围将持续扩大，并在新的一年中迎来更多新功能。实际情况：其实这一类的预测几乎无一例外的都会成功，无论大家是否愿意，systemd都将继续在“init system”之外拓展其涵盖范畴。换言之，systemd本身已经不再单纯属于init system。3.Canonical 将撤出手机市场2016年，Canonical 将放缓开发Ubuntu手机版的的扩张速度，甚至有可能完全停止，并将注意力集中在 Ubuntu 的桌面与服务器版本身上。实际情况：Canonical公司最后一次召开与手机相关的发布会已经是今年的4月份了，其最近发布的几份公告都与手机无关，并且公司新闻主页中也没有在显示和手机相关的内容，所以我们基本可以认定Canonical 放弃了手机市场。4.Android将迎来更多以桌面为核心的新增功能2016年推出的Android新版本将增添新功能，旨在使Android 设备在使用感受上更接近于现代桌面操作系统，值得注意的是应用程序将获得可移动且可堆叠的运行窗口。实际情况：谷歌公司已经于今年8月公布的Android N新版本中加入了多容器视图模式，相信其未来还将引入更多桌面系统中的特性。5.ChromeOS将全面接入Google Play商店2016年 ChromeOS 将获得直接通过 Google Play 应用商店安装并运行 Android 应用程序的能力。实际情况：2016年，谷歌首款Chromebook产品本身就自带Google Play商店，这意味着ChromeOS(至少在部分设备上)能够访问大部分Android应用。6.新的基于Linux的手机操作系统即将出现截至2015年年底，除 Android 之外的其它 Linux 手机系统基本上全军覆没，所以2016年极其有希望会出现一款新的手机Linux系统。实际情况：虽然我们很希望能够在2016年看到新的手机Linux系统的出现，但是令人遗憾的是，它并没有出现。7.elementary、openSUSE与Fedora将占据更多的市场份额Linux世界一向是风云变化，今天你还在称霸，也许明天江山就易主了。所以我们希望并相信elementary、openSUSE与Fedora在2016年中能够突破重围，占据更多的市场份额。实际情况：这三套发行版在2016年的市场份额变化不大，但是基本可以确定是有所增长，增长的幅度还有待更准确的数据支撑。8.微软将进一步拥抱开源微软以前的形象一直是故步自封的，近几年微软一直在积极拥抱开源、推进其开源进程，所以2016年微软拥抱开源值得期待。实际情况：2016年年末，微软正式加入Linux基金会。看完了2016年Linux的发展情况，那么Linux在2017年又会有哪些亮眼的表现呢?1.桌面Linux市场份额将增至3%2017年关于Linux发展的七大预测2016年即将结束，桌面Linux的市场份额一直徘徊在2%左右，但是到2017年底，预计市场份额将会上升至3%。2.Canonical会再次转移焦点2017年关于Linux发展的七大预测2016年，我们预测Canonical将会渐渐把注意力从手机中移开，事实证明，这是对的，2016年Canonical更关注企业功能。但是，2017年，Canonical有可能会再次转移焦点，重点关注其它领域。3.Ubuntu将会要求登录帐户来安装软件Canonical在手机或平板电脑上安装或更新软件已经要求要创建或使用账户，所以在桌面和服务器上通过账户来安装软件指日可待，预计它在2017年底将与Ubuntu 17.10一起出现，如果2017年没有实现的话，那么2018年也有可能会实现。4.新的基于手机的Linux操作系统将出现2016年年初，也预测了新的基于手机的Linux操作系统的出现，但是很可惜并没有实现，所以希望能够在2017年实现这个愿望。5.Steam Machines可能会与市场脱节Valve去年正式发布搭载Steam OS操作系统的Steam Machine游戏主机，企图迎来Linux游戏的黄金时代。但是很遗憾，这一切并没有真的发生，2017年他们可能会完全脱离市场。6.Google可能会推出新的通讯平台Google旗下有很多即时通讯平台，如 Google Talk、环聊，Allo，2017年谷歌很有可能会推出一款新的通讯平台。7.Linux与微软的关系将会更微妙微软与Linux的关系是一向是很微妙的，一方面，微软历来对自由软件(尤其是Linux)存在敌意，即使他们从Linux公司中收取了不菲的专利费。另一方面，微软也与各种Linux公司合作，在云中支持Linux，甚至斥资50万美元加入了Linux基金会。2017年，微软与Linux这种复杂的关系会继续下去，也有可能会迸发出新的火花。"
			},
			"en": {
				"title": "Seven predictions of the development of Linux in 2017",
				"content": "Your 2016 balance is insufficient, please recharge in time. In 2017 the pace has been gradually approaching, Linux what changes happened in the year of 2016 in 2017, and what new trends? Seven 2016 forecast about the development of the Linux at the beginning of 2017, foreign media made eight forecast for this year's Linux development, we now review this prediction is not all in eight? 1.Wayland will still be affected by cold Wayland as alternatives for the Xorg release in 2016 may have a variety of built-in Linux, but the mainstream release of Linux Wayland is set to the default option is not going to happen. Actual situation: in November 22, 2016 released the Fedora 25 chose Wayland as the default display server, it is obvious that this prediction has not become a reality. The scope of application of 2Systemd will further expand the scope of application of SYSTEMd will continue to expand, and usher in more new features in the new year. Actual situation: in fact, this kind of prediction almost without exception, will succeed, whether or not we are willing, SYSTEMd will continue to expand its scope of coverage in addition to the system init. In other words, SYSTEMd itself is no longer simply belong to system init. 3.Canonical will withdraw from the mobile phone market in 2016, Canonical will speed the development of Ubuntu mobile phone version of the slowdown in the expansion, and may even be completely stopped, and will focus on the desktop and server versions of Ubuntu. The actual situation of Canonical company: the last time and mobile phone related conference has been held in April this year, the announcement of several recently released mobile phone with independent and company news page is not in the display and mobile phone related content, so we basically can be identified Canonical over mobile phone market. 4.Android will usher in the new 2016 more desktop is the core in the launch of the new version of the Android will add new features to make Android more close to the modern desktop operating system in use, it is worth noting that the application will get mobile and stackable operation window. The actual situation: Google Corporation has added a multi container view model in the new version of the N Android announced in August this year, and believe that the future will introduce more features in the desktop system. 5.ChromeOS will be fully access to the Play Google store in 2016 ChromeOS will get the ability to install and run Android applications directly through the Play Google application store. Actual situation: in 2016, Google's first Chromebook product itself comes Play Google store, which means ChromeOS (at least in part of the device) to access most of the Android application. 6 Linux mobile phone operating system will appear at the end of 2015 based on the new Linux mobile phone system, in addition to other Android, basically in 2016 promising The whole army was wiped out., so there will be a new mobile phone Linux system. Actual situation: Although we very much hope to be able to see the emergence of the new mobile phone Linux system in 2016, but it is regrettable that it does not appear. 7.elementary, openSUSE and Fedora will occupy more market share in the Linux world is always changing, today you still dominate, maybe tomorrow Jiangshan easy to master. So we hope and believe that elementary, openSUSE and Fedora can break the siege in 2016, to occupy more market share. Actual situation: the three sets of distribution in 2016, the market share change is not big, but the basic can be determined to have increased, the magnitude of growth remains to be more accurate data support. 8 Microsoft will further embrace open source Microsoft previous image has been in recent years, the content with staying where one is, Microsoft has been actively promoting the process of open source, embrace open source, so in 2016 Microsoft is worth looking forward to embrace open source. The actual situation: at the end of 2016, Microsoft officially joined the Linux foundation. After the 2016 development of the Linux Linux in 2017, then what would be a dazzling performance? 1 desktop Linux market share will increase to 3%2017 year seven 2016 forecast about the development of the Linux is coming to an end, the desktop Linux market share has been hovering around 2%, but by the end of 2017, is expected to market share will rise to 3%. 2.Canonical seven will shift the focus again in 2017 about the development of the Linux forecast in 2016, we predict that Canonical will gradually get away from the mobile phone, in fact, this is right, the 2016 Canonical pay more attention to the function of enterprise. However, in 2017, Canonical is likely to shift the focus again, focusing on other areas of focus.  3.Ubuntu will require a login account to install or update software is required to create or use the account in a mobile phone or tablet computer to install the software on the Canonical, so in the desktop and server through an account to install the software at the end of 2017 is expected to point the day and await for it, it will appear together with Ubuntu 17.10, if 2017 does not come true, then 2018 is also possible will achieve. 4 new Linux operating system based on mobile phone will appear at the beginning of 2016, we predicted the new Linux operating system based on the mobile phone, but unfortunately did not realize, so I hope to achieve this desire in 2017. Machines 5.Steam may be out of touch with the market last year, the official release of Valve OS Steam operating system Machine Steam game console, in an attempt to usher in the golden age of Linux games. But it's a pity that it didn't really happen, and in 2017 they might be totally out of the market. 6.Google may launch a new communications platform Google has a lot of instant messaging platform, such as Talk Google, ring chat, Allo, 2017 Google is likely to launch a new communication platform. The relationship between 7.Linux and Microsoft will be more subtle."
			},
			"author": "田晓旭",
			"refName": "it168网站",
			"refURL": "http://tech.it168.com/a2016/1207/3057/000003057918.shtml",
			"date": "2016-12-07 08:11:11.000"
		},
		{
			"_id": "636c0ce0-facf-42bb-9c8e-49393a547a07",
			"cn": {
				"title": "Linux、微软、SUN将共议操作系统的未来",
				"content": "据国外媒体消息，2016年12月8日至10日，各大OS厂商将聚集旧金山Kabuki酒店，就OS的未来进行探讨。该会议由Intel赞助发起，将汇聚来自Linux基金会、Sun和微软的代表。这三路的代表将坐下来对OS的未来进行探讨，这在有史以来也是第一次。他们不仅仅是代表着自己的OS，而是面向整个业界的OS。Linux基金会的执行主管Jim Zemlim，微软的平台战略主管Sam Ramji，Sun开发者和社区市场部主管Ian Murdock都将在会上就OS的发展发表自己的看法。但是Apple在哪里?Apple现在拥有着10%左右的OS市场份额，很明显他们缺席了本次会谈。"
			},
			"en": {
				"title": "Linux, Microsoft, SUN will be the future of the operating system",
				"content": "According to foreign media news, December 8, 2016 to 10, the major OS manufacturers will gather in San Francisco Kabuki Hotel, on the future of OS. The conference sponsored by the Intel, will come together from the Linux foundation, Sun and Microsoft representatives. The three delegates will sit down and discuss the future of OS, which is also the first time in history. They not only represent their own OS, but for the entire industry OS. Executive director of the Linux foundation Jim Zemlim"
			},
			"author": "zengdongjun",
			"refName": "doit",
			"refURL": "http://www.doit.com.cn/?p=45156?_k=fb2k8r",
			"date": "2016-12-13 12:13:11.000"
		},
		{
			"_id": "fe1505d2-1689-46c8-85f9-dff1186e7e61",
			"cn": {
				"title": "Linux内核缺陷 黑客获服务器控制权限",
				"content": "安全研究人员称，普通用户可以使用三个安全缺陷获得对Linux服务器或工作站的完全控制。 二个缺陷存在于Linux内核管理内存的模块中。据波兰的安全厂商iSEC安全资讯公司于当地时间本周三发布的安全公告称，它们影响目前所有的Linux版本。第三个缺陷影响内核中支持ATI公司Rage 128显卡的模块。 由于Linux通常被使用在共享服务器上，能够使用户提高访问权限的缺陷是非常严重的。但是，它们没有使外界黑客能够入侵系统的缺陷更危险，因为黑客必须首先具有对系统的访问权限，然后才能够提高其访问权限。 “Linux内核计划”组织发布了一个新的2.4版内核━━2.4.25，修正了这一问题。这已经是今年第二次为修正缺陷而发布升级版内核，1月份，该组织发布2.4.24版内核修正了另一个缺陷。 Linux都纷纷发布补丁软件修正产品中的缺陷。在当地时间本周四上午，Red Hat、SuSE、Debian以及其它Linux厂商都发布了补丁软件。 新发现的缺陷表明了这样一个事实，即Linux中还存在缺陷。这对“许多眼睛”理论提出了质疑，这种理论认为，由于开放源代码软件的代码能够被自由查看，其中的安全缺陷更容易被发现、修正，因而也更安全。阿尔弗雷德指出，事实上，大多数开发人员都不愿意对老代码进行检查。尽管这一理论非常好，但它与人们的行为有偏差。"
			},
			"en": {
				"title": "Linux kernel flaw hackers access to server control",
				"content": "Security researchers say the average user can access the full control of the Linux server or workstation with three security flaws. Two defects exist in the Linux kernel managed memory modules. According to Poland's security firm iSEC security information company in the local time on Wednesday issued a security announcement that they affect all of the current Linux version. Third defects affect the kernel in support of Rage ATI 128 graphics module. Because Linux is usually used on a shared server, it is very serious that the user can increase the access to the user. However, they do not make the external hackers can invade the system's defects more dangerous, because the hacker must first have access to the system, and then to improve their access. 'Linux kernel plan' organization has released a new version 2.4 kernel - 2.4.25, fixed this problem. This is the second time this year to fix the defect and released an upgraded version of the kernel, in January, the organization released the 2.4.24 version of the kernel to fix another flaw. Linux have issued a patch to fix defects in the product. At the local time this Thursday morning, Hat SuSE, Red, Debian and other Linux vendors have released a patch software. The newly discovered flaw indicates the fact that there are still defects in Linux. The question of 'many eyes' theory, this theory is that, due to the open source software code can be free to check, the security flaws are more likely to be found and corrected, and thus more security. Alfred pointed out that in fact, most developers do not want to check the old code. Although this theory is very good, it is a deviation from the behavior of people."
			},
			"author": "LFS-CN",
			"refName": "",
			"refURL": "",
			"date": "2016-12-05 15:23:56.000"
		}
	];

/***/ },

/***/ 461:
/***/ function(module, exports) {

	module.exports = [
		{
			"_id": "9a1df524-80a3-4a71-9a27-b4f360b8cb26",
			"cn": {
				"title": "Linux Kernel 4.8.13正式版发布",
				"content": "Greg Kroah-Hartman说道：“Linux Kernel 4.8.13正式发布。所有4.8分支用户必须尽快升级。已经升级的4.8.y git tree可以在git://git.kernel.org/pub/scm/linux/kernel/git/stable/linux-stable.git linux-4.8.y中找到，或者通过网页浏览器访问kernel.org网站：http://git.kernel.org/?p=linux/kernel/git/stable/linux-stable.git;a=summary” Linux Kernel 4.8.13主要升级了ADMGPU和Radeon显卡驱动，大量的ARM64（AArch64）架构调整，此外针对x86和ARC架构进行了少量优化。升级ATA (libata-scsi), CLK (sunxi), Intel i915, MediaTek, wireless (Marvell mwifiex), PCI-E, PWM和SCSI驱动，此外还修复了OverlayFS文件系统。"
			},
			"en": {
				"title": "Linux kernel 4.8.13 released",
				"content": "Kroah-Hartman Greg said: 'Kernel 4.8.13 Linux officially released. All 4.8 branch users must upgrade as soon as possible. 4.8.y git has upgraded the tree can be found in the git://git.kernel.org/pub/scm/linux/kernel/git/stable/linux-stable.git linux-4.8.y, or through a web browser to visit the kernel.org site: http://git.kernel.org/p=linux/kernel/git/stable/linux-stable.git; a= summary?'Kernel 4.8.13 Linux mainly to upgrade the ADMGPU and Radeon graphics driver, a large number of ARM64 (AArch64) architecture adjustment, in addition to the x86 and ARC architecture for a small number of optimization. Upgrade ATA (libata-scsi), CLK (Sunxi), i915 Intel, MediaTek, wireless (mwifiex Marvell), PCI-E, PWM and SCSI drivers, in addition to the OverlayFS file system also repaired."
			},
			"author": "LFS-CN",
			"refName": "",
			"refURL": "",
			"date": "2016-04-02 08:11:11.000"
		},
		{
			"_id": "450d69ef-8f74-46f7-bb18-c56ab13a6e7d",
			"cn": {
				"title": "Linux kernel 权限提升漏洞(CVE-2015-8967)",
				"content": "受影响系统：Linux kernel 4.0 描述：CVE(CAN) ID: CVE-2015-8967。Linux Kernel是Linux操作系统的内核。Linux kernel < 4.0版本arch/arm64/kernel/sys.c存在安全漏洞，可使本地用户绕过'strict page permissions'保护机制，修改系统调用表，获取提升的权限。来源：vendor。厂商补丁：Linux，目前厂商已经发布了升级补丁以修复这个安全问题，请到厂商的主页下载。"
			},
			"en": {
				"title": "Linux kernel Privilege escalation vulnerability (CVE-2015-8967)",
				"content": "Affected system: kernel Linux 4 Description: CVE (CAN) CVE-2015-8967 ID. Kernel Linux is the kernel of the Linux operating system. Kernel Linux < 4 version of the arch/arm64/kernel/sys.c security vulnerabilities, local users can bypass the page permissions''strict protection mechanism, modify the system call table, access to enhance the rights. Source: vendor. Vendor patch: Linux, the current vendor has released an upgrade patch to fix this security problem, please go to the vendor's home page to download."
			},
			"author": "Linux公社",
			"refName": "Linux公社",
			"refURL": "http://www.linuxidc.com/Linux/2016-12/138092.htm",
			"date": "2016-04-05 07:21:11.000"
		},
		{
			"_id": "191c67c8-30a9-49ba-97da-1103c6ab3be5",
			"cn": {
				"title": "2017年关于Linux发展的七大预测",
				"content": "您的2016年余额已不足，请及时充值。”2017年的脚步已经渐渐逼近了，Linux在2016年一年中发生了哪些变化，2017年又会有哪些新的趋势呢? 2017年关于Linux发展的七大预测2016年年初，外媒对Linux今年的发展做了八大预测，现在我们来回顾一下这八大预测是不是个个都中呢?1.Wayland仍将受冷遇Wayland作为Xorg的替代方案，在2016年可能有多种的Linux 发行版内置，但是主流的Linux发行版将Wayland置为默认选项是不可能发生的事情。实际情况：2016年11月22日发布的Fedora 25选择了Wayland作为默认显示服务器，显而易见这一预测并没有成为现实。2Systemd的适用范围将进一步扩大systemd 的适用范围将持续扩大，并在新的一年中迎来更多新功能。实际情况：其实这一类的预测几乎无一例外的都会成功，无论大家是否愿意，systemd都将继续在“init system”之外拓展其涵盖范畴。换言之，systemd本身已经不再单纯属于init system。3.Canonical 将撤出手机市场2016年，Canonical 将放缓开发Ubuntu手机版的的扩张速度，甚至有可能完全停止，并将注意力集中在 Ubuntu 的桌面与服务器版本身上。实际情况：Canonical公司最后一次召开与手机相关的发布会已经是今年的4月份了，其最近发布的几份公告都与手机无关，并且公司新闻主页中也没有在显示和手机相关的内容，所以我们基本可以认定Canonical 放弃了手机市场。4.Android将迎来更多以桌面为核心的新增功能2016年推出的Android新版本将增添新功能，旨在使Android 设备在使用感受上更接近于现代桌面操作系统，值得注意的是应用程序将获得可移动且可堆叠的运行窗口。实际情况：谷歌公司已经于今年8月公布的Android N新版本中加入了多容器视图模式，相信其未来还将引入更多桌面系统中的特性。5.ChromeOS将全面接入Google Play商店2016年 ChromeOS 将获得直接通过 Google Play 应用商店安装并运行 Android 应用程序的能力。实际情况：2016年，谷歌首款Chromebook产品本身就自带Google Play商店，这意味着ChromeOS(至少在部分设备上)能够访问大部分Android应用。6.新的基于Linux的手机操作系统即将出现截至2015年年底，除 Android 之外的其它 Linux 手机系统基本上全军覆没，所以2016年极其有希望会出现一款新的手机Linux系统。实际情况：虽然我们很希望能够在2016年看到新的手机Linux系统的出现，但是令人遗憾的是，它并没有出现。7.elementary、openSUSE与Fedora将占据更多的市场份额Linux世界一向是风云变化，今天你还在称霸，也许明天江山就易主了。所以我们希望并相信elementary、openSUSE与Fedora在2016年中能够突破重围，占据更多的市场份额。实际情况：这三套发行版在2016年的市场份额变化不大，但是基本可以确定是有所增长，增长的幅度还有待更准确的数据支撑。8.微软将进一步拥抱开源微软以前的形象一直是故步自封的，近几年微软一直在积极拥抱开源、推进其开源进程，所以2016年微软拥抱开源值得期待。实际情况：2016年年末，微软正式加入Linux基金会。看完了2016年Linux的发展情况，那么Linux在2017年又会有哪些亮眼的表现呢?1.桌面Linux市场份额将增至3%2017年关于Linux发展的七大预测2016年即将结束，桌面Linux的市场份额一直徘徊在2%左右，但是到2017年底，预计市场份额将会上升至3%。2.Canonical会再次转移焦点2017年关于Linux发展的七大预测2016年，我们预测Canonical将会渐渐把注意力从手机中移开，事实证明，这是对的，2016年Canonical更关注企业功能。但是，2017年，Canonical有可能会再次转移焦点，重点关注其它领域。3.Ubuntu将会要求登录帐户来安装软件Canonical在手机或平板电脑上安装或更新软件已经要求要创建或使用账户，所以在桌面和服务器上通过账户来安装软件指日可待，预计它在2017年底将与Ubuntu 17.10一起出现，如果2017年没有实现的话，那么2018年也有可能会实现。4.新的基于手机的Linux操作系统将出现2016年年初，也预测了新的基于手机的Linux操作系统的出现，但是很可惜并没有实现，所以希望能够在2017年实现这个愿望。5.Steam Machines可能会与市场脱节Valve去年正式发布搭载Steam OS操作系统的Steam Machine游戏主机，企图迎来Linux游戏的黄金时代。但是很遗憾，这一切并没有真的发生，2017年他们可能会完全脱离市场。6.Google可能会推出新的通讯平台Google旗下有很多即时通讯平台，如 Google Talk、环聊，Allo，2017年谷歌很有可能会推出一款新的通讯平台。7.Linux与微软的关系将会更微妙微软与Linux的关系是一向是很微妙的，一方面，微软历来对自由软件(尤其是Linux)存在敌意，即使他们从Linux公司中收取了不菲的专利费。另一方面，微软也与各种Linux公司合作，在云中支持Linux，甚至斥资50万美元加入了Linux基金会。2017年，微软与Linux这种复杂的关系会继续下去，也有可能会迸发出新的火花。"
			},
			"en": {
				"title": "Seven predictions of the development of Linux in 2017",
				"content": "Your 2016 balance is insufficient, please recharge in time. In 2017 the pace has been gradually approaching, Linux what changes happened in the year of 2016 in 2017, and what new trends? Seven 2016 forecast about the development of the Linux at the beginning of 2017, foreign media made eight forecast for this year's Linux development, we now review this prediction is not all in eight? 1.Wayland will still be affected by cold Wayland as alternatives for the Xorg release in 2016 may have a variety of built-in Linux, but the mainstream release of Linux Wayland is set to the default option is not going to happen. Actual situation: in November 22, 2016 released the Fedora 25 chose Wayland as the default display server, it is obvious that this prediction has not become a reality. The scope of application of 2Systemd will further expand the scope of application of SYSTEMd will continue to expand, and usher in more new features in the new year. Actual situation: in fact, this kind of prediction almost without exception, will succeed, whether or not we are willing, SYSTEMd will continue to expand its scope of coverage in addition to the system init. In other words, SYSTEMd itself is no longer simply belong to system init. 3.Canonical will withdraw from the mobile phone market in 2016, Canonical will speed the development of Ubuntu mobile phone version of the slowdown in the expansion, and may even be completely stopped, and will focus on the desktop and server versions of Ubuntu. The actual situation of Canonical company: the last time and mobile phone related conference has been held in April this year, the announcement of several recently released mobile phone with independent and company news page is not in the display and mobile phone related content, so we basically can be identified Canonical over mobile phone market. 4.Android will usher in the new 2016 more desktop is the core in the launch of the new version of the Android will add new features to make Android more close to the modern desktop operating system in use, it is worth noting that the application will get mobile and stackable operation window. The actual situation: Google Corporation has added a multi container view model in the new version of the N Android announced in August this year, and believe that the future will introduce more features in the desktop system. 5.ChromeOS will be fully access to the Play Google store in 2016 ChromeOS will get the ability to install and run Android applications directly through the Play Google application store. Actual situation: in 2016, Google's first Chromebook product itself comes Play Google store, which means ChromeOS (at least in part of the device) to access most of the Android application. 6 Linux mobile phone operating system will appear at the end of 2015 based on the new Linux mobile phone system, in addition to other Android, basically in 2016 promising The whole army was wiped out., so there will be a new mobile phone Linux system. Actual situation: Although we very much hope to be able to see the emergence of the new mobile phone Linux system in 2016, but it is regrettable that it does not appear. 7.elementary, openSUSE and Fedora will occupy more market share in the Linux world is always changing, today you still dominate, maybe tomorrow Jiangshan easy to master. So we hope and believe that elementary, openSUSE and Fedora can break the siege in 2016, to occupy more market share. Actual situation: the three sets of distribution in 2016, the market share change is not big, but the basic can be determined to have increased, the magnitude of growth remains to be more accurate data support. 8 Microsoft will further embrace open source Microsoft previous image has been in recent years, the content with staying where one is, Microsoft has been actively promoting the process of open source, embrace open source, so in 2016 Microsoft is worth looking forward to embrace open source. The actual situation: at the end of 2016, Microsoft officially joined the Linux foundation. After the 2016 development of the Linux Linux in 2017, then what would be a dazzling performance? 1 desktop Linux market share will increase to 3%2017 year seven 2016 forecast about the development of the Linux is coming to an end, the desktop Linux market share has been hovering around 2%, but by the end of 2017, is expected to market share will rise to 3%. 2.Canonical seven will shift the focus again in 2017 about the development of the Linux forecast in 2016, we predict that Canonical will gradually get away from the mobile phone, in fact, this is right, the 2016 Canonical pay more attention to the function of enterprise. However, in 2017, Canonical is likely to shift the focus again, focusing on other areas of focus.  3.Ubuntu will require a login account to install or update software is required to create or use the account in a mobile phone or tablet computer to install the software on the Canonical, so in the desktop and server through an account to install the software at the end of 2017 is expected to point the day and await for it, it will appear together with Ubuntu 17.10, if 2017 does not come true, then 2018 is also possible will achieve. 4 new Linux operating system based on mobile phone will appear at the beginning of 2016, we predicted the new Linux operating system based on the mobile phone, but unfortunately did not realize, so I hope to achieve this desire in 2017. Machines 5.Steam may be out of touch with the market last year, the official release of Valve OS Steam operating system Machine Steam game console, in an attempt to usher in the golden age of Linux games. But it's a pity that it didn't really happen, and in 2017 they might be totally out of the market. 6.Google may launch a new communications platform Google has a lot of instant messaging platform, such as Talk Google, ring chat, Allo, 2017 Google is likely to launch a new communication platform. The relationship between 7.Linux and Microsoft will be more subtle."
			},
			"author": "田晓旭",
			"refName": "it168网站",
			"refURL": "http://tech.it168.com/a2016/1207/3057/000003057918.shtml",
			"date": "2016-12-07 08:11:11.000"
		},
		{
			"_id": "636c0ce0-facf-42bb-9c8e-49393a547a07",
			"cn": {
				"title": "Linux、微软、SUN将共议操作系统的未来",
				"content": "据国外媒体消息，2016年12月8日至10日，各大OS厂商将聚集旧金山Kabuki酒店，就OS的未来进行探讨。该会议由Intel赞助发起，将汇聚来自Linux基金会、Sun和微软的代表。这三路的代表将坐下来对OS的未来进行探讨，这在有史以来也是第一次。他们不仅仅是代表着自己的OS，而是面向整个业界的OS。Linux基金会的执行主管Jim Zemlim，微软的平台战略主管Sam Ramji，Sun开发者和社区市场部主管Ian Murdock都将在会上就OS的发展发表自己的看法。但是Apple在哪里?Apple现在拥有着10%左右的OS市场份额，很明显他们缺席了本次会谈。"
			},
			"en": {
				"title": "Linux, Microsoft, SUN will be the future of the operating system",
				"content": "According to foreign media news, December 8, 2016 to 10, the major OS manufacturers will gather in San Francisco Kabuki Hotel, on the future of OS. The conference sponsored by the Intel, will come together from the Linux foundation, Sun and Microsoft representatives. The three delegates will sit down and discuss the future of OS, which is also the first time in history. They not only represent their own OS, but for the entire industry OS. Executive director of the Linux foundation Jim Zemlim"
			},
			"author": "zengdongjun",
			"refName": "doit",
			"refURL": "http://www.doit.com.cn/?p=45156?_k=fb2k8r",
			"date": "2016-12-13 12:13:11.000"
		},
		{
			"_id": "fe1505d2-1689-46c8-85f9-dff1186e7e61",
			"cn": {
				"title": "Linux内核缺陷 黑客获服务器控制权限",
				"content": "安全研究人员称，普通用户可以使用三个安全缺陷获得对Linux服务器或工作站的完全控制。 二个缺陷存在于Linux内核管理内存的模块中。据波兰的安全厂商iSEC安全资讯公司于当地时间本周三发布的安全公告称，它们影响目前所有的Linux版本。第三个缺陷影响内核中支持ATI公司Rage 128显卡的模块。 由于Linux通常被使用在共享服务器上，能够使用户提高访问权限的缺陷是非常严重的。但是，它们没有使外界黑客能够入侵系统的缺陷更危险，因为黑客必须首先具有对系统的访问权限，然后才能够提高其访问权限。 “Linux内核计划”组织发布了一个新的2.4版内核━━2.4.25，修正了这一问题。这已经是今年第二次为修正缺陷而发布升级版内核，1月份，该组织发布2.4.24版内核修正了另一个缺陷。 Linux都纷纷发布补丁软件修正产品中的缺陷。在当地时间本周四上午，Red Hat、SuSE、Debian以及其它Linux厂商都发布了补丁软件。 新发现的缺陷表明了这样一个事实，即Linux中还存在缺陷。这对“许多眼睛”理论提出了质疑，这种理论认为，由于开放源代码软件的代码能够被自由查看，其中的安全缺陷更容易被发现、修正，因而也更安全。阿尔弗雷德指出，事实上，大多数开发人员都不愿意对老代码进行检查。尽管这一理论非常好，但它与人们的行为有偏差。"
			},
			"en": {
				"title": "Linux kernel flaw hackers access to server control",
				"content": "Security researchers say the average user can access the full control of the Linux server or workstation with three security flaws. Two defects exist in the Linux kernel managed memory modules. According to Poland's security firm iSEC security information company in the local time on Wednesday issued a security announcement that they affect all of the current Linux version. Third defects affect the kernel in support of Rage ATI 128 graphics module. Because Linux is usually used on a shared server, it is very serious that the user can increase the access to the user. However, they do not make the external hackers can invade the system's defects more dangerous, because the hacker must first have access to the system, and then to improve their access. 'Linux kernel plan' organization has released a new version 2.4 kernel - 2.4.25, fixed this problem. This is the second time this year to fix the defect and released an upgraded version of the kernel, in January, the organization released the 2.4.24 version of the kernel to fix another flaw. Linux have issued a patch to fix defects in the product. At the local time this Thursday morning, Hat SuSE, Red, Debian and other Linux vendors have released a patch software. The newly discovered flaw indicates the fact that there are still defects in Linux. The question of 'many eyes' theory, this theory is that, due to the open source software code can be free to check, the security flaws are more likely to be found and corrected, and thus more security. Alfred pointed out that in fact, most developers do not want to check the old code. Although this theory is very good, it is a deviation from the behavior of people."
			},
			"author": "LFS-CN",
			"refName": "",
			"refURL": "",
			"date": "2016-12-05 15:23:56.000"
		}
	];

/***/ }

});
//# sourceMappingURL=1.bundle.js.map