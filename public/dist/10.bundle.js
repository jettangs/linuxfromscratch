/*! Copyright @linux from scratch. contact:jettangs@gmail.com */
webpackJsonp([10],Array(516).concat([
/* 516 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(178);
	
	var _semanticUiReact = __webpack_require__(517);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LiveCD = function (_Component) {
	  _inherits(LiveCD, _Component);
	
	  function LiveCD() {
	    _classCallCheck(this, LiveCD);
	
	    return _possibleConstructorReturn(this, (LiveCD.__proto__ || Object.getPrototypeOf(LiveCD)).apply(this, arguments));
	  }
	
	  _createClass(LiveCD, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('h3', null),
	        _react2.default.createElement(
	          'h3',
	          null,
	          'LiveCD'
	        )
	      );
	    }
	  }]);
	
	  return LiveCD;
	}(_react.Component);
	
	exports.default = LiveCD;

/***/ },
/* 517 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Confirm = __webpack_require__(518);
	
	Object.defineProperty(exports, 'Confirm', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Confirm).default;
	  }
	});
	
	var _Portal = __webpack_require__(829);
	
	Object.defineProperty(exports, 'Portal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Portal).default;
	  }
	});
	
	var _Radio = __webpack_require__(835);
	
	Object.defineProperty(exports, 'Radio', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Radio).default;
	  }
	});
	
	var _Select = __webpack_require__(839);
	
	Object.defineProperty(exports, 'Select', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Select).default;
	  }
	});
	
	var _TextArea = __webpack_require__(860);
	
	Object.defineProperty(exports, 'TextArea', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TextArea).default;
	  }
	});
	
	var _Breadcrumb = __webpack_require__(862);
	
	Object.defineProperty(exports, 'Breadcrumb', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Breadcrumb).default;
	  }
	});
	
	var _BreadcrumbDivider = __webpack_require__(864);
	
	Object.defineProperty(exports, 'BreadcrumbDivider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_BreadcrumbDivider).default;
	  }
	});
	
	var _BreadcrumbSection = __webpack_require__(865);
	
	Object.defineProperty(exports, 'BreadcrumbSection', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_BreadcrumbSection).default;
	  }
	});
	
	var _Form = __webpack_require__(866);
	
	Object.defineProperty(exports, 'Form', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Form).default;
	  }
	});
	
	var _FormButton = __webpack_require__(868);
	
	Object.defineProperty(exports, 'FormButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FormButton).default;
	  }
	});
	
	var _FormCheckbox = __webpack_require__(870);
	
	Object.defineProperty(exports, 'FormCheckbox', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FormCheckbox).default;
	  }
	});
	
	var _FormDropdown = __webpack_require__(871);
	
	Object.defineProperty(exports, 'FormDropdown', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FormDropdown).default;
	  }
	});
	
	var _FormField = __webpack_require__(869);
	
	Object.defineProperty(exports, 'FormField', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FormField).default;
	  }
	});
	
	var _FormGroup = __webpack_require__(872);
	
	Object.defineProperty(exports, 'FormGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FormGroup).default;
	  }
	});
	
	var _FormInput = __webpack_require__(873);
	
	Object.defineProperty(exports, 'FormInput', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FormInput).default;
	  }
	});
	
	var _FormRadio = __webpack_require__(876);
	
	Object.defineProperty(exports, 'FormRadio', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FormRadio).default;
	  }
	});
	
	var _FormSelect = __webpack_require__(877);
	
	Object.defineProperty(exports, 'FormSelect', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FormSelect).default;
	  }
	});
	
	var _FormTextArea = __webpack_require__(878);
	
	Object.defineProperty(exports, 'FormTextArea', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FormTextArea).default;
	  }
	});
	
	var _Grid = __webpack_require__(879);
	
	Object.defineProperty(exports, 'Grid', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Grid).default;
	  }
	});
	
	var _GridColumn = __webpack_require__(881);
	
	Object.defineProperty(exports, 'GridColumn', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GridColumn).default;
	  }
	});
	
	var _GridRow = __webpack_require__(882);
	
	Object.defineProperty(exports, 'GridRow', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GridRow).default;
	  }
	});
	
	var _Menu = __webpack_require__(883);
	
	Object.defineProperty(exports, 'Menu', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Menu).default;
	  }
	});
	
	var _MenuHeader = __webpack_require__(885);
	
	Object.defineProperty(exports, 'MenuHeader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MenuHeader).default;
	  }
	});
	
	var _MenuItem = __webpack_require__(886);
	
	Object.defineProperty(exports, 'MenuItem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MenuItem).default;
	  }
	});
	
	var _MenuMenu = __webpack_require__(902);
	
	Object.defineProperty(exports, 'MenuMenu', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MenuMenu).default;
	  }
	});
	
	var _Message = __webpack_require__(903);
	
	Object.defineProperty(exports, 'Message', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Message).default;
	  }
	});
	
	var _MessageContent = __webpack_require__(905);
	
	Object.defineProperty(exports, 'MessageContent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MessageContent).default;
	  }
	});
	
	var _MessageHeader = __webpack_require__(906);
	
	Object.defineProperty(exports, 'MessageHeader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MessageHeader).default;
	  }
	});
	
	var _MessageItem = __webpack_require__(908);
	
	Object.defineProperty(exports, 'MessageItem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MessageItem).default;
	  }
	});
	
	var _MessageList = __webpack_require__(907);
	
	Object.defineProperty(exports, 'MessageList', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MessageList).default;
	  }
	});
	
	var _Table = __webpack_require__(909);
	
	Object.defineProperty(exports, 'Table', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Table).default;
	  }
	});
	
	var _TableBody = __webpack_require__(911);
	
	Object.defineProperty(exports, 'TableBody', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TableBody).default;
	  }
	});
	
	var _TableCell = __webpack_require__(912);
	
	Object.defineProperty(exports, 'TableCell', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TableCell).default;
	  }
	});
	
	var _TableFooter = __webpack_require__(913);
	
	Object.defineProperty(exports, 'TableFooter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TableFooter).default;
	  }
	});
	
	var _TableHeader = __webpack_require__(914);
	
	Object.defineProperty(exports, 'TableHeader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TableHeader).default;
	  }
	});
	
	var _TableHeaderCell = __webpack_require__(915);
	
	Object.defineProperty(exports, 'TableHeaderCell', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TableHeaderCell).default;
	  }
	});
	
	var _TableRow = __webpack_require__(916);
	
	Object.defineProperty(exports, 'TableRow', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TableRow).default;
	  }
	});
	
	var _Button = __webpack_require__(812);
	
	Object.defineProperty(exports, 'Button', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Button).default;
	  }
	});
	
	var _ButtonContent = __webpack_require__(820);
	
	Object.defineProperty(exports, 'ButtonContent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ButtonContent).default;
	  }
	});
	
	var _ButtonGroup = __webpack_require__(821);
	
	Object.defineProperty(exports, 'ButtonGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ButtonGroup).default;
	  }
	});
	
	var _ButtonOr = __webpack_require__(822);
	
	Object.defineProperty(exports, 'ButtonOr', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ButtonOr).default;
	  }
	});
	
	var _Container = __webpack_require__(917);
	
	Object.defineProperty(exports, 'Container', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Container).default;
	  }
	});
	
	var _Divider = __webpack_require__(919);
	
	Object.defineProperty(exports, 'Divider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Divider).default;
	  }
	});
	
	var _Flag = __webpack_require__(855);
	
	Object.defineProperty(exports, 'Flag', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Flag).default;
	  }
	});
	
	var _Header = __webpack_require__(921);
	
	Object.defineProperty(exports, 'Header', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Header).default;
	  }
	});
	
	var _HeaderContent = __webpack_require__(924);
	
	Object.defineProperty(exports, 'HeaderContent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_HeaderContent).default;
	  }
	});
	
	var _HeaderSubheader = __webpack_require__(923);
	
	Object.defineProperty(exports, 'HeaderSubheader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_HeaderSubheader).default;
	  }
	});
	
	var _Icon = __webpack_require__(851);
	
	Object.defineProperty(exports, 'Icon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Icon).default;
	  }
	});
	
	var _IconGroup = __webpack_require__(814);
	
	Object.defineProperty(exports, 'IconGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_IconGroup).default;
	  }
	});
	
	var _Image = __webpack_require__(857);
	
	Object.defineProperty(exports, 'Image', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Image).default;
	  }
	});
	
	var _ImageGroup = __webpack_require__(817);
	
	Object.defineProperty(exports, 'ImageGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ImageGroup).default;
	  }
	});
	
	var _Input = __webpack_require__(874);
	
	Object.defineProperty(exports, 'Input', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Input).default;
	  }
	});
	
	var _Label = __webpack_require__(852);
	
	Object.defineProperty(exports, 'Label', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Label).default;
	  }
	});
	
	var _LabelDetail = __webpack_require__(818);
	
	Object.defineProperty(exports, 'LabelDetail', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_LabelDetail).default;
	  }
	});
	
	var _LabelGroup = __webpack_require__(819);
	
	Object.defineProperty(exports, 'LabelGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_LabelGroup).default;
	  }
	});
	
	var _List = __webpack_require__(925);
	
	Object.defineProperty(exports, 'List', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_List).default;
	  }
	});
	
	var _ListContent = __webpack_require__(927);
	
	Object.defineProperty(exports, 'ListContent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ListContent).default;
	  }
	});
	
	var _ListDescription = __webpack_require__(928);
	
	Object.defineProperty(exports, 'ListDescription', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ListDescription).default;
	  }
	});
	
	var _ListHeader = __webpack_require__(929);
	
	Object.defineProperty(exports, 'ListHeader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ListHeader).default;
	  }
	});
	
	var _ListIcon = __webpack_require__(930);
	
	Object.defineProperty(exports, 'ListIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ListIcon).default;
	  }
	});
	
	var _ListItem = __webpack_require__(931);
	
	Object.defineProperty(exports, 'ListItem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ListItem).default;
	  }
	});
	
	var _ListList = __webpack_require__(932);
	
	Object.defineProperty(exports, 'ListList', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ListList).default;
	  }
	});
	
	var _Loader = __webpack_require__(933);
	
	Object.defineProperty(exports, 'Loader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Loader).default;
	  }
	});
	
	var _Rail = __webpack_require__(935);
	
	Object.defineProperty(exports, 'Rail', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Rail).default;
	  }
	});
	
	var _Segment = __webpack_require__(937);
	
	Object.defineProperty(exports, 'Segment', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Segment).default;
	  }
	});
	
	var _SegmentGroup = __webpack_require__(939);
	
	Object.defineProperty(exports, 'SegmentGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_SegmentGroup).default;
	  }
	});
	
	var _Step = __webpack_require__(940);
	
	Object.defineProperty(exports, 'Step', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Step).default;
	  }
	});
	
	var _StepContent = __webpack_require__(942);
	
	Object.defineProperty(exports, 'StepContent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StepContent).default;
	  }
	});
	
	var _StepDescription = __webpack_require__(943);
	
	Object.defineProperty(exports, 'StepDescription', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StepDescription).default;
	  }
	});
	
	var _StepGroup = __webpack_require__(945);
	
	Object.defineProperty(exports, 'StepGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StepGroup).default;
	  }
	});
	
	var _StepTitle = __webpack_require__(944);
	
	Object.defineProperty(exports, 'StepTitle', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StepTitle).default;
	  }
	});
	
	var _Accordion = __webpack_require__(946);
	
	Object.defineProperty(exports, 'Accordion', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Accordion).default;
	  }
	});
	
	var _AccordionContent = __webpack_require__(947);
	
	Object.defineProperty(exports, 'AccordionContent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_AccordionContent).default;
	  }
	});
	
	var _AccordionTitle = __webpack_require__(948);
	
	Object.defineProperty(exports, 'AccordionTitle', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_AccordionTitle).default;
	  }
	});
	
	var _Checkbox = __webpack_require__(837);
	
	Object.defineProperty(exports, 'Checkbox', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Checkbox).default;
	  }
	});
	
	var _Dropdown = __webpack_require__(841);
	
	Object.defineProperty(exports, 'Dropdown', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Dropdown).default;
	  }
	});
	
	var _DropdownDivider = __webpack_require__(853);
	
	Object.defineProperty(exports, 'DropdownDivider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DropdownDivider).default;
	  }
	});
	
	var _DropdownHeader = __webpack_require__(858);
	
	Object.defineProperty(exports, 'DropdownHeader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DropdownHeader).default;
	  }
	});
	
	var _DropdownItem = __webpack_require__(854);
	
	Object.defineProperty(exports, 'DropdownItem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DropdownItem).default;
	  }
	});
	
	var _DropdownMenu = __webpack_require__(859);
	
	Object.defineProperty(exports, 'DropdownMenu', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DropdownMenu).default;
	  }
	});
	
	var _Modal = __webpack_require__(823);
	
	Object.defineProperty(exports, 'Modal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Modal).default;
	  }
	});
	
	var _ModalActions = __webpack_require__(827);
	
	Object.defineProperty(exports, 'ModalActions', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ModalActions).default;
	  }
	});
	
	var _ModalContent = __webpack_require__(826);
	
	Object.defineProperty(exports, 'ModalContent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ModalContent).default;
	  }
	});
	
	var _ModalDescription = __webpack_require__(828);
	
	Object.defineProperty(exports, 'ModalDescription', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ModalDescription).default;
	  }
	});
	
	var _ModalHeader = __webpack_require__(825);
	
	Object.defineProperty(exports, 'ModalHeader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ModalHeader).default;
	  }
	});
	
	var _Popup = __webpack_require__(949);
	
	Object.defineProperty(exports, 'Popup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Popup).default;
	  }
	});
	
	var _PopupContent = __webpack_require__(954);
	
	Object.defineProperty(exports, 'PopupContent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_PopupContent).default;
	  }
	});
	
	var _PopupHeader = __webpack_require__(955);
	
	Object.defineProperty(exports, 'PopupHeader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_PopupHeader).default;
	  }
	});
	
	var _Progress = __webpack_require__(956);
	
	Object.defineProperty(exports, 'Progress', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Progress).default;
	  }
	});
	
	var _Rating = __webpack_require__(962);
	
	Object.defineProperty(exports, 'Rating', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Rating).default;
	  }
	});
	
	var _Search = __webpack_require__(965);
	
	Object.defineProperty(exports, 'Search', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Search).default;
	  }
	});
	
	var _SearchCategory = __webpack_require__(970);
	
	Object.defineProperty(exports, 'SearchCategory', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_SearchCategory).default;
	  }
	});
	
	var _SearchResult = __webpack_require__(971);
	
	Object.defineProperty(exports, 'SearchResult', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_SearchResult).default;
	  }
	});
	
	var _SearchResults = __webpack_require__(972);
	
	Object.defineProperty(exports, 'SearchResults', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_SearchResults).default;
	  }
	});
	
	var _Card = __webpack_require__(973);
	
	Object.defineProperty(exports, 'Card', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Card).default;
	  }
	});
	
	var _CardContent = __webpack_require__(974);
	
	Object.defineProperty(exports, 'CardContent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CardContent).default;
	  }
	});
	
	var _CardDescription = __webpack_require__(975);
	
	Object.defineProperty(exports, 'CardDescription', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CardDescription).default;
	  }
	});
	
	var _CardGroup = __webpack_require__(978);
	
	Object.defineProperty(exports, 'CardGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CardGroup).default;
	  }
	});
	
	var _CardHeader = __webpack_require__(976);
	
	Object.defineProperty(exports, 'CardHeader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CardHeader).default;
	  }
	});
	
	var _CardMeta = __webpack_require__(977);
	
	Object.defineProperty(exports, 'CardMeta', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CardMeta).default;
	  }
	});
	
	var _Comment = __webpack_require__(979);
	
	Object.defineProperty(exports, 'Comment', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Comment).default;
	  }
	});
	
	var _CommentAction = __webpack_require__(981);
	
	Object.defineProperty(exports, 'CommentAction', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CommentAction).default;
	  }
	});
	
	var _CommentActions = __webpack_require__(982);
	
	Object.defineProperty(exports, 'CommentActions', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CommentActions).default;
	  }
	});
	
	var _CommentAuthor = __webpack_require__(983);
	
	Object.defineProperty(exports, 'CommentAuthor', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CommentAuthor).default;
	  }
	});
	
	var _CommentAvatar = __webpack_require__(984);
	
	Object.defineProperty(exports, 'CommentAvatar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CommentAvatar).default;
	  }
	});
	
	var _CommentContent = __webpack_require__(985);
	
	Object.defineProperty(exports, 'CommentContent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CommentContent).default;
	  }
	});
	
	var _CommentGroup = __webpack_require__(986);
	
	Object.defineProperty(exports, 'CommentGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CommentGroup).default;
	  }
	});
	
	var _CommentMetadata = __webpack_require__(987);
	
	Object.defineProperty(exports, 'CommentMetadata', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CommentMetadata).default;
	  }
	});
	
	var _CommentText = __webpack_require__(988);
	
	Object.defineProperty(exports, 'CommentText', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CommentText).default;
	  }
	});
	
	var _Feed = __webpack_require__(989);
	
	Object.defineProperty(exports, 'Feed', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Feed).default;
	  }
	});
	
	var _FeedContent = __webpack_require__(991);
	
	Object.defineProperty(exports, 'FeedContent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FeedContent).default;
	  }
	});
	
	var _FeedDate = __webpack_require__(992);
	
	Object.defineProperty(exports, 'FeedDate', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FeedDate).default;
	  }
	});
	
	var _FeedEvent = __webpack_require__(998);
	
	Object.defineProperty(exports, 'FeedEvent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FeedEvent).default;
	  }
	});
	
	var _FeedExtra = __webpack_require__(993);
	
	Object.defineProperty(exports, 'FeedExtra', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FeedExtra).default;
	  }
	});
	
	var _FeedLabel = __webpack_require__(999);
	
	Object.defineProperty(exports, 'FeedLabel', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FeedLabel).default;
	  }
	});
	
	var _FeedLike = __webpack_require__(995);
	
	Object.defineProperty(exports, 'FeedLike', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FeedLike).default;
	  }
	});
	
	var _FeedMeta = __webpack_require__(994);
	
	Object.defineProperty(exports, 'FeedMeta', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FeedMeta).default;
	  }
	});
	
	var _FeedSummary = __webpack_require__(996);
	
	Object.defineProperty(exports, 'FeedSummary', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FeedSummary).default;
	  }
	});
	
	var _FeedUser = __webpack_require__(997);
	
	Object.defineProperty(exports, 'FeedUser', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FeedUser).default;
	  }
	});
	
	var _Item = __webpack_require__(1000);
	
	Object.defineProperty(exports, 'Item', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Item).default;
	  }
	});
	
	var _ItemContent = __webpack_require__(1002);
	
	Object.defineProperty(exports, 'ItemContent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ItemContent).default;
	  }
	});
	
	var _ItemDescription = __webpack_require__(1004);
	
	Object.defineProperty(exports, 'ItemDescription', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ItemDescription).default;
	  }
	});
	
	var _ItemExtra = __webpack_require__(1005);
	
	Object.defineProperty(exports, 'ItemExtra', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ItemExtra).default;
	  }
	});
	
	var _ItemGroup = __webpack_require__(1007);
	
	Object.defineProperty(exports, 'ItemGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ItemGroup).default;
	  }
	});
	
	var _ItemHeader = __webpack_require__(1003);
	
	Object.defineProperty(exports, 'ItemHeader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ItemHeader).default;
	  }
	});
	
	var _ItemImage = __webpack_require__(1008);
	
	Object.defineProperty(exports, 'ItemImage', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ItemImage).default;
	  }
	});
	
	var _ItemMeta = __webpack_require__(1006);
	
	Object.defineProperty(exports, 'ItemMeta', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ItemMeta).default;
	  }
	});
	
	var _Statistic = __webpack_require__(1009);
	
	Object.defineProperty(exports, 'Statistic', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Statistic).default;
	  }
	});
	
	var _StatisticGroup = __webpack_require__(1011);
	
	Object.defineProperty(exports, 'StatisticGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StatisticGroup).default;
	  }
	});
	
	var _StatisticLabel = __webpack_require__(1012);
	
	Object.defineProperty(exports, 'StatisticLabel', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StatisticLabel).default;
	  }
	});
	
	var _StatisticValue = __webpack_require__(1013);
	
	Object.defineProperty(exports, 'StatisticValue', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StatisticValue).default;
	  }
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 518 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Confirm = __webpack_require__(519);
	
	var _Confirm2 = _interopRequireDefault(_Confirm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Confirm2.default;

/***/ },
/* 519 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _has2 = __webpack_require__(520);
	
	var _has3 = _interopRequireDefault(_has2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Button = __webpack_require__(811);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Modal = __webpack_require__(823);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A Confirm modal gives the user a choice to confirm or cancel an action
	 * @see Modal
	 */
	function Confirm(props) {
	  var open = props.open;
	  var cancelButton = props.cancelButton;
	  var confirmButton = props.confirmButton;
	  var header = props.header;
	  var content = props.content;
	  var onConfirm = props.onConfirm;
	  var onCancel = props.onCancel;
	
	  var rest = (0, _lib.getUnhandledProps)(Confirm, props);
	
	  // `open` is auto controlled by the Modal
	  // It cannot be present (even undefined) with `defaultOpen`
	  // only apply it if the user provided an open prop
	  var openProp = {};
	  if ((0, _has3.default)(props, 'open')) openProp.open = open;
	
	  return _react2.default.createElement(
	    _Modal2.default,
	    _extends({}, openProp, { size: 'small', onClose: onCancel }, rest),
	    header && _react2.default.createElement(
	      _Modal2.default.Header,
	      null,
	      header
	    ),
	    content && _react2.default.createElement(
	      _Modal2.default.Content,
	      null,
	      content
	    ),
	    _react2.default.createElement(
	      _Modal2.default.Actions,
	      null,
	      _react2.default.createElement(
	        _Button2.default,
	        { onClick: onCancel },
	        cancelButton
	      ),
	      _react2.default.createElement(
	        _Button2.default,
	        { primary: true, onClick: onConfirm },
	        confirmButton
	      )
	    )
	  );
	}
	
	Confirm._meta = {
	  name: 'Confirm',
	  type: _lib.META.TYPES.ADDON
	};
	
	Confirm.propTypes = {
	  /** Whether or not the modal is visible */
	  open: _react.PropTypes.bool,
	
	  /** The cancel button text */
	  cancelButton: _react.PropTypes.string,
	
	  /** The OK button text */
	  confirmButton: _react.PropTypes.string,
	
	  /** The ModalHeader text */
	  header: _react.PropTypes.string,
	
	  /** The ModalContent text. */
	  content: _react.PropTypes.string,
	
	  /** Called when the OK button is clicked */
	  onConfirm: _react.PropTypes.func,
	
	  /** Called when the Cancel button is clicked */
	  onCancel: _react.PropTypes.func
	};
	
	Confirm.defaultProps = {
	  cancelButton: 'Cancel',
	  confirmButton: 'OK',
	  content: 'Are you sure?'
	};
	
	exports.default = Confirm;

/***/ },
/* 520 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(521),
	    hasPath = __webpack_require__(522);
	
	/**
	 * Checks if `path` is a direct property of `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = { 'a': { 'b': 2 } };
	 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.has(object, 'a');
	 * // => true
	 *
	 * _.has(object, 'a.b');
	 * // => true
	 *
	 * _.has(object, ['a', 'b']);
	 * // => true
	 *
	 * _.has(other, 'a');
	 * // => false
	 */
	function has(object, path) {
	  return object != null && hasPath(object, path, baseHas);
	}
	
	module.exports = has;


/***/ },
/* 521 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  return object != null && hasOwnProperty.call(object, key);
	}
	
	module.exports = baseHas;


/***/ },
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(523),
	    isArguments = __webpack_require__(568),
	    isArray = __webpack_require__(524),
	    isIndex = __webpack_require__(570),
	    isKey = __webpack_require__(571),
	    isLength = __webpack_require__(572),
	    toKey = __webpack_require__(573);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = -1,
	      length = path.length,
	      result = false;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ },
/* 523 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(524),
	    stringToPath = __webpack_require__(525);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	module.exports = castPath;


/***/ },
/* 524 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 525 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(526),
	    toString = __webpack_require__(562);
	
	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  string = toString(string);
	
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ },
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(527);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ },
/* 527 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(528);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ },
/* 528 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(529),
	    mapCacheDelete = __webpack_require__(556),
	    mapCacheGet = __webpack_require__(559),
	    mapCacheHas = __webpack_require__(560),
	    mapCacheSet = __webpack_require__(561);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ },
/* 529 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(530),
	    ListCache = __webpack_require__(547),
	    Map = __webpack_require__(555);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ },
/* 530 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(531),
	    hashDelete = __webpack_require__(543),
	    hashGet = __webpack_require__(544),
	    hashHas = __webpack_require__(545),
	    hashSet = __webpack_require__(546);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ },
/* 531 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(532);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ },
/* 532 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(533);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 533 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(534),
	    getValue = __webpack_require__(542);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 534 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(535),
	    isMasked = __webpack_require__(537),
	    isObject = __webpack_require__(536),
	    toSource = __webpack_require__(541);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ },
/* 535 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(536);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 536 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 537 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(538);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ },
/* 538 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(539);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ },
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(540);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 540 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 541 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 542 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ },
/* 543 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ },
/* 544 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(532);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ },
/* 545 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(532);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ },
/* 546 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(532);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ },
/* 547 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(548),
	    listCacheDelete = __webpack_require__(549),
	    listCacheGet = __webpack_require__(552),
	    listCacheHas = __webpack_require__(553),
	    listCacheSet = __webpack_require__(554);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 548 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ },
/* 549 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(550);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ },
/* 550 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(551);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 551 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 552 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(550);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ },
/* 553 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(550);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ },
/* 554 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(550);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ },
/* 555 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(533),
	    root = __webpack_require__(539);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 556 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(557);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ },
/* 557 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(558);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ },
/* 558 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ },
/* 559 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(557);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ },
/* 560 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(557);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ },
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(557);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ },
/* 562 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(563);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ },
/* 563 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(564),
	    arrayMap = __webpack_require__(565),
	    isArray = __webpack_require__(524),
	    isSymbol = __webpack_require__(566);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ },
/* 564 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(539);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 565 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 566 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(567);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 567 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 568 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(569),
	    isObjectLike = __webpack_require__(567);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ },
/* 569 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(567);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && objectToString.call(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ },
/* 570 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 571 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(524),
	    isSymbol = __webpack_require__(566);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ },
/* 572 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 573 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(566);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ },
/* 574 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.objectDiff = exports.numberToWord = exports.numberToWordMap = exports.keyboardKey = exports.SUI = exports.META = exports.getElementType = exports.getUnhandledProps = exports.makeDebugger = exports.debug = exports.customPropTypes = exports.useVerticalAlignProp = exports.useTextAlignProp = exports.useWidthProp = exports.useKeyOrValueAndKey = exports.useValueAndKey = exports.useKeyOnly = exports.childrenUtils = exports.AutoControlledComponent = undefined;
	
	var _AutoControlledComponent = __webpack_require__(575);
	
	Object.defineProperty(exports, 'AutoControlledComponent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_AutoControlledComponent).default;
	  }
	});
	
	var _classNameBuilders = __webpack_require__(683);
	
	Object.defineProperty(exports, 'useKeyOnly', {
	  enumerable: true,
	  get: function get() {
	    return _classNameBuilders.useKeyOnly;
	  }
	});
	Object.defineProperty(exports, 'useValueAndKey', {
	  enumerable: true,
	  get: function get() {
	    return _classNameBuilders.useValueAndKey;
	  }
	});
	Object.defineProperty(exports, 'useKeyOrValueAndKey', {
	  enumerable: true,
	  get: function get() {
	    return _classNameBuilders.useKeyOrValueAndKey;
	  }
	});
	Object.defineProperty(exports, 'useWidthProp', {
	  enumerable: true,
	  get: function get() {
	    return _classNameBuilders.useWidthProp;
	  }
	});
	Object.defineProperty(exports, 'useTextAlignProp', {
	  enumerable: true,
	  get: function get() {
	    return _classNameBuilders.useTextAlignProp;
	  }
	});
	Object.defineProperty(exports, 'useVerticalAlignProp', {
	  enumerable: true,
	  get: function get() {
	    return _classNameBuilders.useVerticalAlignProp;
	  }
	});
	
	var _debug = __webpack_require__(685);
	
	Object.defineProperty(exports, 'debug', {
	  enumerable: true,
	  get: function get() {
	    return _debug.debug;
	  }
	});
	Object.defineProperty(exports, 'makeDebugger', {
	  enumerable: true,
	  get: function get() {
	    return _debug.makeDebugger;
	  }
	});
	
	var _factories = __webpack_require__(689);
	
	Object.keys(_factories).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _factories[key];
	    }
	  });
	});
	
	var _getUnhandledProps = __webpack_require__(730);
	
	Object.defineProperty(exports, 'getUnhandledProps', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_getUnhandledProps).default;
	  }
	});
	
	var _getElementType = __webpack_require__(734);
	
	Object.defineProperty(exports, 'getElementType', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_getElementType).default;
	  }
	});
	
	var _keyboardKey = __webpack_require__(735);
	
	Object.defineProperty(exports, 'keyboardKey', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_keyboardKey).default;
	  }
	});
	
	var _numberToWord = __webpack_require__(684);
	
	Object.defineProperty(exports, 'numberToWordMap', {
	  enumerable: true,
	  get: function get() {
	    return _numberToWord.numberToWordMap;
	  }
	});
	Object.defineProperty(exports, 'numberToWord', {
	  enumerable: true,
	  get: function get() {
	    return _numberToWord.numberToWord;
	  }
	});
	
	var _objectDiff = __webpack_require__(737);
	
	Object.defineProperty(exports, 'objectDiff', {
	  enumerable: true,
	  get: function get() {
	    return _objectDiff.objectDiff;
	  }
	});
	
	var _childrenUtils2 = __webpack_require__(739);
	
	var _childrenUtils = _interopRequireWildcard(_childrenUtils2);
	
	var _customPropTypes2 = __webpack_require__(746);
	
	var _customPropTypes = _interopRequireWildcard(_customPropTypes2);
	
	var _META2 = __webpack_require__(797);
	
	var _META = _interopRequireWildcard(_META2);
	
	var _SUI2 = __webpack_require__(810);
	
	var _SUI = _interopRequireWildcard(_SUI2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.childrenUtils = _childrenUtils;
	exports.customPropTypes = _customPropTypes;
	exports.META = _META;
	exports.SUI = _SUI;

/***/ },
/* 575 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _omit2 = __webpack_require__(576);
	
	var _omit3 = _interopRequireDefault(_omit2);
	
	var _difference2 = __webpack_require__(624);
	
	var _difference3 = _interopRequireDefault(_difference2);
	
	var _pick2 = __webpack_require__(627);
	
	var _pick3 = _interopRequireDefault(_pick2);
	
	var _filter2 = __webpack_require__(628);
	
	var _filter3 = _interopRequireDefault(_filter2);
	
	var _isEmpty2 = __webpack_require__(674);
	
	var _isEmpty3 = _interopRequireDefault(_isEmpty2);
	
	var _keys2 = __webpack_require__(635);
	
	var _keys3 = _interopRequireDefault(_keys2);
	
	var _intersection2 = __webpack_require__(675);
	
	var _intersection3 = _interopRequireDefault(_intersection2);
	
	var _each2 = __webpack_require__(678);
	
	var _each3 = _interopRequireDefault(_each2);
	
	var _has2 = __webpack_require__(520);
	
	var _has3 = _interopRequireDefault(_has2);
	
	var _transform2 = __webpack_require__(681);
	
	var _transform3 = _interopRequireDefault(_transform2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _react = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console */
	/**
	 * Why choose inheritance over a HOC?  Multiple advantages for this particular use case.
	 * In short, we need identical functionality to setState(), unless there is a prop defined
	 * for the state key.  Also:
	 *
	 * 1. Single Renders
	 *    Calling trySetState() in constructor(), componentWillMount(), or componentWillReceiveProps()
	 *    does not cause two renders. Consumers and tests do not have to wait two renders to get state.
	 *    See www.react.run/4kJFdKoxb/27 for an example of this issue.
	 *
	 * 2. Simple Testing
	 *    Using a HOC means you must either test the undecorated component or test through the decorator.
	 *    Testing the undecorated component means you must mock the decorator functionality.
	 *    Testing through the HOC means you can not simply shallow render your component.
	 *
	 * 3. Statics
	 *    HOC wrap instances, so statics are no longer accessible.  They can be hoisted, but this is more
	 *    looping over properties and storing references.  We rely heavily on statics for testing and sub
	 *    components.
	 *
	 * 4. Instance Methods
	 *    Some instance methods may be exposed to users via refs.  Again, these are lost with HOC unless
	 *    hoisted and exposed by the HOC.
	 */
	
	
	var getDefaultPropName = function getDefaultPropName(prop) {
	  return 'default' + (prop[0].toUpperCase() + prop.slice(1));
	};
	
	var AutoControlledComponent = function (_Component) {
	  _inherits(AutoControlledComponent, _Component);
	
	  function AutoControlledComponent() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, AutoControlledComponent);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutoControlledComponent.__proto__ || Object.getPrototypeOf(AutoControlledComponent)).call.apply(_ref, [this].concat(args))), _this), _this.trySetState = function (maybeState, state) {
	      var autoControlledProps = _this.constructor.autoControlledProps;
	
	      if (process.env.NODE_ENV !== 'production') {
	        var name = _this.constructor.name;
	        // warn about failed attempts to setState for keys not listed in autoControlledProps
	
	        var illegalKeys = (0, _difference3.default)((0, _keys3.default)(maybeState), autoControlledProps);
	        if (!(0, _isEmpty3.default)(illegalKeys)) {
	          console.error([name + ' called trySetState() with controlled props: "' + illegalKeys + '".', 'State will not be set.', 'Only props in static autoControlledProps will be set on state.'].join(' '));
	        }
	      }
	
	      // pick auto controlled props
	      // omit props from parent
	      var newState = (0, _omit3.default)((0, _pick3.default)(maybeState, autoControlledProps), (0, _keys3.default)(_this.props));
	
	      if (state) newState = _extends({}, newState, state);
	
	      if (!(0, _isEmpty3.default)(newState)) _this.setState(newState);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(AutoControlledComponent, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      if (_get(AutoControlledComponent.prototype.__proto__ || Object.getPrototypeOf(AutoControlledComponent.prototype), 'componentWillMount', this)) _get(AutoControlledComponent.prototype.__proto__ || Object.getPrototypeOf(AutoControlledComponent.prototype), 'componentWillMount', this).call(this);
	      var autoControlledProps = this.constructor.autoControlledProps;
	
	      // Auto controlled props are copied to state.
	      // Set initial state by copying auto controlled props to state.
	      // Also look for the default prop for any auto controlled props (foo => defaultFoo)
	      // so we can set initial values from defaults.
	
	      this.state = (0, _transform3.default)(autoControlledProps, function (res, prop) {
	        var defaultPropName = getDefaultPropName(prop);
	
	        // try to set initial state in this order:
	        //  - default props
	        //  - then, regular props
	        //  - then, `checked` defaults to false
	        //  - then, `value` defaults to null
	        // React doesn't allow changing from uncontrolled to controlled components
	        // this is why we default checked/value if they are not present.
	        if ((0, _has3.default)(_this2.props, defaultPropName)) {
	          res[prop] = _this2.props[defaultPropName];
	        } else if ((0, _has3.default)(_this2.props, prop)) {
	          res[prop] = _this2.props[prop];
	        } else if (prop === 'checked') {
	          res[prop] = false;
	        } else if (prop === 'value') {
	          res[prop] = _this2.props.multiple ? [] : ''; // eslint-disable-line react/prop-types
	        }
	
	        if (process.env.NODE_ENV !== 'production') {
	          var name = _this2.constructor.name;
	          // prevent defaultFoo={} along side foo={}
	
	          if (defaultPropName in _this2.props && prop in _this2.props) {
	            console.error(name + ' prop "' + prop + '" is auto controlled. Specify either ' + defaultPropName + ' or ' + prop + ', but not both.');
	          }
	        }
	      }, {});
	
	      if (process.env.NODE_ENV !== 'production') {
	        (function () {
	          var _constructor = _this2.constructor;
	          var defaultProps = _constructor.defaultProps;
	          var name = _constructor.name;
	          var propTypes = _constructor.propTypes;
	          // require static autoControlledProps
	
	          if (!autoControlledProps) {
	            console.error('Auto controlled ' + name + ' must specify a static autoControlledProps array.');
	          }
	
	          // require propTypes
	          (0, _each3.default)(autoControlledProps, function (prop) {
	            var defaultProp = getDefaultPropName(prop);
	            // regular prop
	            if (!(0, _has3.default)(propTypes, defaultProp)) {
	              console.error(name + ' is missing "' + defaultProp + '" propTypes validation for auto controlled prop "' + prop + '".');
	            }
	            // its default prop
	            if (!(0, _has3.default)(propTypes, prop)) {
	              console.error(name + ' is missing propTypes validation for auto controlled prop "' + prop + '".');
	            }
	          });
	
	          // prevent autoControlledProps in defaultProps
	          //
	          // When setting state, auto controlled props values always win (so the parent can manage them).
	          // It is not reasonable to decipher the difference between props from the parent and defaultProps.
	          // Allowing defaultProps results in trySetState always deferring to the defaultProp value.
	          // Auto controlled props also listed in defaultProps can never be updated.
	          var illegalDefaults = (0, _intersection3.default)(autoControlledProps, (0, _keys3.default)(defaultProps));
	          if (!(0, _isEmpty3.default)(illegalDefaults)) {
	            console.error(['Do not set defaultProps for autoControlledProps,', 'use trySetState() in constructor() or componentWillMount() instead.', 'See ' + name + ' props: "' + illegalDefaults + '".'].join(' '));
	          }
	
	          // prevent listing defaultProps in autoControlledProps
	          //
	          // Default props are automatically handled.
	          // Listing defaults in autoControlledProps would result in allowing defaultDefaultValue props.
	          var illegalAutoControlled = (0, _filter3.default)(autoControlledProps, function (prop) {
	            return prop.startsWith('default');
	          });
	          if (!(0, _isEmpty3.default)(illegalAutoControlled)) {
	            console.error(['Do not add default props to autoControlledProps.', 'Default props are automatically handled.', 'See ' + name + ' autoControlledProps: "' + illegalAutoControlled + '".'].join(' '));
	          }
	        })();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (_get(AutoControlledComponent.prototype.__proto__ || Object.getPrototypeOf(AutoControlledComponent.prototype), 'componentWillReceiveProps', this)) _get(AutoControlledComponent.prototype.__proto__ || Object.getPrototypeOf(AutoControlledComponent.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
	
	      // props always win, update state with all auto controlled prop
	      var newState = (0, _pick3.default)(nextProps, this.constructor.autoControlledProps);
	      if (!(0, _isEmpty3.default)(newState)) this.setState(newState);
	    }
	
	    /**
	     * Safely attempt to set state for props that might be controlled by the user.
	     * Second argument is a state object that is always passed to setState.
	     * @param {object} maybeState State that corresponds to controlled props.
	     * @param {object} [state] Actual state, useful when you also need to setState.
	     */
	
	  }]);
	
	  return AutoControlledComponent;
	}(_react.Component);
	
	exports.default = AutoControlledComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 576 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(565),
	    baseDifference = __webpack_require__(577),
	    basePick = __webpack_require__(589),
	    flatRest = __webpack_require__(593),
	    getAllKeysIn = __webpack_require__(605),
	    toKey = __webpack_require__(573);
	
	/**
	 * The opposite of `_.pick`; this method creates an object composed of the
	 * own and inherited enumerable string keyed properties of `object` that are
	 * not omitted.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property identifiers to omit.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.omit(object, ['a', 'c']);
	 * // => { 'b': '2' }
	 */
	var omit = flatRest(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  props = arrayMap(props, toKey);
	  return basePick(object, baseDifference(getAllKeysIn(object), props));
	});
	
	module.exports = omit;


/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(578),
	    arrayIncludes = __webpack_require__(581),
	    arrayIncludesWith = __webpack_require__(586),
	    arrayMap = __webpack_require__(565),
	    baseUnary = __webpack_require__(587),
	    cacheHas = __webpack_require__(588);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;
	
	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;
	
	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },
/* 578 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(528),
	    setCacheAdd = __webpack_require__(579),
	    setCacheHas = __webpack_require__(580);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ },
/* 579 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ },
/* 580 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(582);
	
	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}
	
	module.exports = arrayIncludes;


/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(583),
	    baseIsNaN = __webpack_require__(584),
	    strictIndexOf = __webpack_require__(585);
	
	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 583 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseFindIndex;


/***/ },
/* 584 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}
	
	module.exports = baseIsNaN;


/***/ },
/* 585 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = strictIndexOf;


/***/ },
/* 586 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arrayIncludesWith;


/***/ },
/* 587 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 588 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	var basePickBy = __webpack_require__(590);
	
	/**
	 * The base implementation of `_.pick` without support for individual
	 * property identifiers.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 */
	function basePick(object, props) {
	  object = Object(object);
	  return basePickBy(object, props, function(value, key) {
	    return key in object;
	  });
	}
	
	module.exports = basePick;


/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(591);
	
	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick from.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, props, predicate) {
	  var index = -1,
	      length = props.length,
	      result = {};
	
	  while (++index < length) {
	    var key = props[index],
	        value = object[key];
	
	    if (predicate(value, key)) {
	      baseAssignValue(result, key, value);
	    }
	  }
	  return result;
	}
	
	module.exports = basePickBy;


/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(592);
	
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	
	module.exports = baseAssignValue;


/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(533);
	
	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	
	module.exports = defineProperty;


/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	var flatten = __webpack_require__(594),
	    overRest = __webpack_require__(598),
	    setToString = __webpack_require__(600);
	
	/**
	 * A specialized version of `baseRest` which flattens the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @returns {Function} Returns the new function.
	 */
	function flatRest(func) {
	  return setToString(overRest(func, undefined, flatten), func + '');
	}
	
	module.exports = flatRest;


/***/ },
/* 594 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(595);
	
	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array ? array.length : 0;
	  return length ? baseFlatten(array, 1) : [];
	}
	
	module.exports = flatten;


/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(596),
	    isFlattenable = __webpack_require__(597);
	
	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;
	
	  predicate || (predicate = isFlattenable);
	  result || (result = []);
	
	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 596 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(564),
	    isArguments = __webpack_require__(568),
	    isArray = __webpack_require__(524);
	
	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
	
	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}
	
	module.exports = isFlattenable;


/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(599);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = overRest;


/***/ },
/* 599 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(601),
	    shortOut = __webpack_require__(604);
	
	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);
	
	module.exports = setToString;


/***/ },
/* 601 */
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(602),
	    defineProperty = __webpack_require__(592),
	    identity = __webpack_require__(603);
	
	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};
	
	module.exports = baseSetToString;


/***/ },
/* 602 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}
	
	module.exports = constant;


/***/ },
/* 603 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 604 */
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 500,
	    HOT_SPAN = 16;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;
	
	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;
	
	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);
	
	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}
	
	module.exports = shortOut;


/***/ },
/* 605 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(606),
	    getSymbolsIn = __webpack_require__(607),
	    keysIn = __webpack_require__(612);
	
	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}
	
	module.exports = getAllKeysIn;


/***/ },
/* 606 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(596),
	    isArray = __webpack_require__(524);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ },
/* 607 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(596),
	    getPrototype = __webpack_require__(608),
	    getSymbols = __webpack_require__(610),
	    stubArray = __webpack_require__(611);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own and inherited enumerable symbol properties
	 * of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};
	
	module.exports = getSymbolsIn;


/***/ },
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(609);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 609 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 610 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(609),
	    stubArray = __webpack_require__(611);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
	
	module.exports = getSymbols;


/***/ },
/* 611 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ },
/* 612 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(613),
	    baseKeysIn = __webpack_require__(620),
	    isArrayLike = __webpack_require__(623);
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	
	module.exports = keysIn;


/***/ },
/* 613 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(614),
	    isArguments = __webpack_require__(568),
	    isArray = __webpack_require__(524),
	    isBuffer = __webpack_require__(615),
	    isIndex = __webpack_require__(570),
	    isTypedArray = __webpack_require__(617);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 614 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 615 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(539),
	    stubFalse = __webpack_require__(616);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(260)(module)))

/***/ },
/* 616 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 617 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(618),
	    baseUnary = __webpack_require__(587),
	    nodeUtil = __webpack_require__(619);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ },
/* 618 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(572),
	    isObjectLike = __webpack_require__(567);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 619 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(540);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(260)(module)))

/***/ },
/* 620 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(536),
	    isPrototype = __webpack_require__(621),
	    nativeKeysIn = __webpack_require__(622);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];
	
	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeysIn;


/***/ },
/* 621 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 622 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = nativeKeysIn;


/***/ },
/* 623 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(535),
	    isLength = __webpack_require__(572);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 624 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(577),
	    baseFlatten = __webpack_require__(595),
	    baseRest = __webpack_require__(625),
	    isArrayLikeObject = __webpack_require__(626);
	
	/**
	 * Creates an array of `array` values not included in the other given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * **Note:** Unlike `_.pullAll`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.without, _.xor
	 * @example
	 *
	 * _.difference([2, 1], [2, 3]);
	 * // => [1]
	 */
	var difference = baseRest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
	    : [];
	});
	
	module.exports = difference;


/***/ },
/* 625 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(603),
	    overRest = __webpack_require__(598),
	    setToString = __webpack_require__(600);
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}
	
	module.exports = baseRest;


/***/ },
/* 626 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(623),
	    isObjectLike = __webpack_require__(567);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(565),
	    basePick = __webpack_require__(589),
	    flatRest = __webpack_require__(593),
	    toKey = __webpack_require__(573);
	
	/**
	 * Creates an object composed of the picked `object` properties.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pick(object, ['a', 'c']);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var pick = flatRest(function(object, props) {
	  return object == null ? {} : basePick(object, arrayMap(props, toKey));
	});
	
	module.exports = pick;


/***/ },
/* 628 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(629),
	    baseFilter = __webpack_require__(630),
	    baseIteratee = __webpack_require__(639),
	    isArray = __webpack_require__(524);
	
	/**
	 * Iterates over elements of `collection`, returning an array of all elements
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * **Note:** Unlike `_.remove`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 * @see _.reject
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': true },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * _.filter(users, function(o) { return !o.active; });
	 * // => objects for ['fred']
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.filter(users, { 'age': 36, 'active': true });
	 * // => objects for ['barney']
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.filter(users, ['active', false]);
	 * // => objects for ['fred']
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.filter(users, 'active');
	 * // => objects for ['barney']
	 */
	function filter(collection, predicate) {
	  var func = isArray(collection) ? arrayFilter : baseFilter;
	  return func(collection, baseIteratee(predicate, 3));
	}
	
	module.exports = filter;


/***/ },
/* 629 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ },
/* 630 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(631);
	
	/**
	 * The base implementation of `_.filter` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function baseFilter(collection, predicate) {
	  var result = [];
	  baseEach(collection, function(value, index, collection) {
	    if (predicate(value, index, collection)) {
	      result.push(value);
	    }
	  });
	  return result;
	}
	
	module.exports = baseFilter;


/***/ },
/* 631 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(632),
	    createBaseEach = __webpack_require__(638);
	
	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ },
/* 632 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(633),
	    keys = __webpack_require__(635);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 633 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(634);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 634 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 635 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(613),
	    baseKeys = __webpack_require__(636),
	    isArrayLike = __webpack_require__(623);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 636 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(621),
	    nativeKeys = __webpack_require__(637);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 637 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(609);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 638 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(623);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ },
/* 639 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(640),
	    baseMatchesProperty = __webpack_require__(666),
	    identity = __webpack_require__(603),
	    isArray = __webpack_require__(524),
	    property = __webpack_require__(671);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;


/***/ },
/* 640 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(641),
	    getMatchData = __webpack_require__(663),
	    matchesStrictComparable = __webpack_require__(665);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 641 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(642),
	    baseIsEqual = __webpack_require__(648);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 642 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(547),
	    stackClear = __webpack_require__(643),
	    stackDelete = __webpack_require__(644),
	    stackGet = __webpack_require__(645),
	    stackHas = __webpack_require__(646),
	    stackSet = __webpack_require__(647);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ },
/* 643 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(547);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ },
/* 644 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ },
/* 645 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ },
/* 646 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ },
/* 647 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(547),
	    Map = __webpack_require__(555),
	    MapCache = __webpack_require__(528);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ },
/* 648 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(649),
	    isObject = __webpack_require__(536),
	    isObjectLike = __webpack_require__(567);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 649 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(642),
	    equalArrays = __webpack_require__(650),
	    equalByTag = __webpack_require__(652),
	    equalObjects = __webpack_require__(656),
	    getTag = __webpack_require__(657),
	    isArray = __webpack_require__(524),
	    isBuffer = __webpack_require__(615),
	    isTypedArray = __webpack_require__(617);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 650 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(578),
	    arraySome = __webpack_require__(651),
	    cacheHas = __webpack_require__(588);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ },
/* 651 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 652 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(564),
	    Uint8Array = __webpack_require__(653),
	    eq = __webpack_require__(551),
	    equalArrays = __webpack_require__(650),
	    mapToArray = __webpack_require__(654),
	    setToArray = __webpack_require__(655);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 653 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(539);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ },
/* 654 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 655 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 656 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(635);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ },
/* 657 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(658),
	    Map = __webpack_require__(555),
	    Promise = __webpack_require__(659),
	    Set = __webpack_require__(660),
	    WeakMap = __webpack_require__(661),
	    baseGetTag = __webpack_require__(662),
	    toSource = __webpack_require__(541);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 658 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(533),
	    root = __webpack_require__(539);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ },
/* 659 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(533),
	    root = __webpack_require__(539);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ },
/* 660 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(533),
	    root = __webpack_require__(539);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 661 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(533),
	    root = __webpack_require__(539);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 662 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 663 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(664),
	    keys = __webpack_require__(635);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 664 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(536);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 665 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	module.exports = matchesStrictComparable;


/***/ },
/* 666 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(648),
	    get = __webpack_require__(667),
	    hasIn = __webpack_require__(669),
	    isKey = __webpack_require__(571),
	    isStrictComparable = __webpack_require__(664),
	    matchesStrictComparable = __webpack_require__(665),
	    toKey = __webpack_require__(573);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 667 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(668);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ },
/* 668 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(523),
	    isKey = __webpack_require__(571),
	    toKey = __webpack_require__(573);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 669 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(670),
	    hasPath = __webpack_require__(522);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ },
/* 670 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ },
/* 671 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(672),
	    basePropertyDeep = __webpack_require__(673),
	    isKey = __webpack_require__(571),
	    toKey = __webpack_require__(573);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 672 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 673 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(668);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 674 */
/***/ function(module, exports, __webpack_require__) {

	var baseKeys = __webpack_require__(636),
	    getTag = __webpack_require__(657),
	    isArguments = __webpack_require__(568),
	    isArray = __webpack_require__(524),
	    isArrayLike = __webpack_require__(623),
	    isBuffer = __webpack_require__(615),
	    isPrototype = __webpack_require__(621),
	    isTypedArray = __webpack_require__(617);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (isArrayLike(value) &&
	      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
	    return !value.length;
	  }
	  var tag = getTag(value);
	  if (tag == mapTag || tag == setTag) {
	    return !value.size;
	  }
	  if (isPrototype(value)) {
	    return !baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = isEmpty;


/***/ },
/* 675 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(565),
	    baseIntersection = __webpack_require__(676),
	    baseRest = __webpack_require__(625),
	    castArrayLikeObject = __webpack_require__(677);
	
	/**
	 * Creates an array of unique values that are included in all given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of intersecting values.
	 * @example
	 *
	 * _.intersection([2, 1], [2, 3]);
	 * // => [2]
	 */
	var intersection = baseRest(function(arrays) {
	  var mapped = arrayMap(arrays, castArrayLikeObject);
	  return (mapped.length && mapped[0] === arrays[0])
	    ? baseIntersection(mapped)
	    : [];
	});
	
	module.exports = intersection;


/***/ },
/* 676 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(578),
	    arrayIncludes = __webpack_require__(581),
	    arrayIncludesWith = __webpack_require__(586),
	    arrayMap = __webpack_require__(565),
	    baseUnary = __webpack_require__(587),
	    cacheHas = __webpack_require__(588);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;
	
	/**
	 * The base implementation of methods like `_.intersection`, without support
	 * for iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of shared values.
	 */
	function baseIntersection(arrays, iteratee, comparator) {
	  var includes = comparator ? arrayIncludesWith : arrayIncludes,
	      length = arrays[0].length,
	      othLength = arrays.length,
	      othIndex = othLength,
	      caches = Array(othLength),
	      maxLength = Infinity,
	      result = [];
	
	  while (othIndex--) {
	    var array = arrays[othIndex];
	    if (othIndex && iteratee) {
	      array = arrayMap(array, baseUnary(iteratee));
	    }
	    maxLength = nativeMin(array.length, maxLength);
	    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	      ? new SetCache(othIndex && array)
	      : undefined;
	  }
	  array = arrays[0];
	
	  var index = -1,
	      seen = caches[0];
	
	  outer:
	  while (++index < length && result.length < maxLength) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;
	
	    value = (comparator || value !== 0) ? value : 0;
	    if (!(seen
	          ? cacheHas(seen, computed)
	          : includes(result, computed, comparator)
	        )) {
	      othIndex = othLength;
	      while (--othIndex) {
	        var cache = caches[othIndex];
	        if (!(cache
	              ? cacheHas(cache, computed)
	              : includes(arrays[othIndex], computed, comparator))
	            ) {
	          continue outer;
	        }
	      }
	      if (seen) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseIntersection;


/***/ },
/* 677 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(626);
	
	/**
	 * Casts `value` to an empty array if it's not an array like object.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array|Object} Returns the cast array-like object.
	 */
	function castArrayLikeObject(value) {
	  return isArrayLikeObject(value) ? value : [];
	}
	
	module.exports = castArrayLikeObject;


/***/ },
/* 678 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(679);


/***/ },
/* 679 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(680),
	    baseEach = __webpack_require__(631),
	    baseIteratee = __webpack_require__(639),
	    isArray = __webpack_require__(524);
	
	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _.forEach([1, 2], function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, baseIteratee(iteratee, 3));
	}
	
	module.exports = forEach;


/***/ },
/* 680 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 681 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(680),
	    baseCreate = __webpack_require__(682),
	    baseForOwn = __webpack_require__(632),
	    baseIteratee = __webpack_require__(639),
	    getPrototype = __webpack_require__(608),
	    isArray = __webpack_require__(524),
	    isBuffer = __webpack_require__(615),
	    isFunction = __webpack_require__(535),
	    isObject = __webpack_require__(536),
	    isTypedArray = __webpack_require__(617);
	
	/**
	 * An alternative to `_.reduce`; this method transforms `object` to a new
	 * `accumulator` object which is the result of running each of its own
	 * enumerable string keyed properties thru `iteratee`, with each invocation
	 * potentially mutating the `accumulator` object. If `accumulator` is not
	 * provided, a new object with the same `[[Prototype]]` will be used. The
	 * iteratee is invoked with four arguments: (accumulator, value, key, object).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.3.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [accumulator] The custom accumulator value.
	 * @returns {*} Returns the accumulated value.
	 * @example
	 *
	 * _.transform([2, 3, 4], function(result, n) {
	 *   result.push(n *= n);
	 *   return n % 2 == 0;
	 * }, []);
	 * // => [4, 9]
	 *
	 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	 *   (result[value] || (result[value] = [])).push(key);
	 * }, {});
	 * // => { '1': ['a', 'c'], '2': ['b'] }
	 */
	function transform(object, iteratee, accumulator) {
	  var isArr = isArray(object),
	      isArrLike = isArr || isBuffer(object) || isTypedArray(object);
	
	  iteratee = baseIteratee(iteratee, 4);
	  if (accumulator == null) {
	    var Ctor = object && object.constructor;
	    if (isArrLike) {
	      accumulator = isArr ? new Ctor : [];
	    }
	    else if (isObject(object)) {
	      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
	    }
	    else {
	      accumulator = {};
	    }
	  }
	  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
	    return iteratee(accumulator, value, index, object);
	  });
	  return accumulator;
	}
	
	module.exports = transform;


/***/ },
/* 682 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(536);
	
	/** Built-in value references. */
	var objectCreate = Object.create;
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());
	
	module.exports = baseCreate;


/***/ },
/* 683 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.useVerticalAlignProp = exports.useTextAlignProp = exports.useWidthProp = exports.useKeyOrValueAndKey = exports.useValueAndKey = exports.useKeyOnly = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
	                                                                                                                                                                                                                                                                               * There are 4 prop patterns used to build up the className for a component.
	                                                                                                                                                                                                                                                                               * Each utility here is meant for use in a classnames() argument.
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * There is no util for valueOnly() because it would simply return val.
	                                                                                                                                                                                                                                                                               * Use the prop value inline instead.
	                                                                                                                                                                                                                                                                               *   <Label size='big' />
	                                                                                                                                                                                                                                                                               *   <div class="ui big label"></div>
	                                                                                                                                                                                                                                                                               */
	
	
	var _numberToWord = __webpack_require__(684);
	
	/**
	 * Props where only the prop key is used in the className.
	 * @param {*} val A props value
	 * @param {string} key A props key
	 *
	 * @example
	 * <Label tag />
	 * <div class="ui tag label"></div>
	 */
	var useKeyOnly = exports.useKeyOnly = function useKeyOnly(val, key) {
	  return val && key;
	};
	
	/**
	 * Props that require both a key and value to create a className.
	 * @param {*} val A props value
	 * @param {string} key A props key
	 *
	 * @example
	 * <Label corner='left' />
	 * <div class="ui left corner label"></div>
	 */
	var useValueAndKey = exports.useValueAndKey = function useValueAndKey(val, key) {
	  return val && val !== true && val + ' ' + key;
	};
	
	/**
	 * Props whose key will be used in className, or value and key.
	 * @param {*} val A props value
	 * @param {string} key A props key
	 *
	 * @example Key Only
	 * <Label pointing />
	 * <div class="ui pointing label"></div>
	 *
	 * @example Key and Value
	 * <Label pointing='left' />
	 * <div class="ui left pointing label"></div>
	 */
	var useKeyOrValueAndKey = exports.useKeyOrValueAndKey = function useKeyOrValueAndKey(val, key) {
	  return val && (val === true ? key : val + ' ' + key);
	};
	
	//
	// Prop to className exceptions
	//
	
	/**
	 * Create "X", "X wide" and "equal width" classNames.
	 * "X" is a numberToWord value and "wide" is configurable.
	 * @param {*} val The prop value
	 * @param {string} [widthClass=''] The class
	 * @param {boolean} [canEqual=false] Flag that indicates possibility of "equal" value
	 *
	 * @example
	 * <Grid columns='equal' />
	 * <div class="ui equal width grid"></div>
	 *
	 * <Form widths='equal' />
	 * <div class="ui equal width form"></div>
	 *
	 * <FieldGroup widths='equal' />
	 * <div class="equal width fields"></div>
	 *
	 * @example
	 * <Grid columns={4} />
	 * <div class="ui four column grid"></div>
	 */
	var useWidthProp = exports.useWidthProp = function useWidthProp(val) {
	  var widthClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var canEqual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	  if (canEqual && val === 'equal') {
	    return 'equal width';
	  }
	  var valType = typeof val === 'undefined' ? 'undefined' : _typeof(val);
	  if ((valType === 'string' || valType === 'number') && widthClass) {
	    return (0, _numberToWord.numberToWord)(val) + ' ' + widthClass;
	  }
	  return (0, _numberToWord.numberToWord)(val);
	};
	/**
	 * The "textAlign" prop follows the useValueAndKey except when the value is "justified'.
	 * In this case, only the class "justified" is used, ignoring the "aligned" class.
	 * @param {*} val The value of the "textAlign" prop
	 *
	 * @example
	 * <Container textAlign='justified' />
	 * <div class="ui justified container"></div>
	 *
	 * @example
	 * <Container textAlign='left' />
	 * <div class="ui left aligned container"></div>
	 */
	var useTextAlignProp = exports.useTextAlignProp = function useTextAlignProp(val) {
	  return val === 'justified' ? 'justified' : useValueAndKey(val, 'aligned');
	};
	
	/**
	 * The "verticalAlign" prop follows the useValueAndKey.
	 *
	 * @param {*} val The value of the "verticalAlign" prop
	 *
	 * @example
	 * <Grid verticalAlign='middle' />
	 * <div class="ui middle aligned grid"></div>
	 */
	var useVerticalAlignProp = exports.useVerticalAlignProp = function useVerticalAlignProp(val) {
	  return useValueAndKey(val, 'aligned');
	};

/***/ },
/* 684 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.numberToWord = numberToWord;
	var numberToWordMap = exports.numberToWordMap = {
	  1: 'one',
	  2: 'two',
	  3: 'three',
	  4: 'four',
	  5: 'five',
	  6: 'six',
	  7: 'seven',
	  8: 'eight',
	  9: 'nine',
	  10: 'ten',
	  11: 'eleven',
	  12: 'twelve',
	  13: 'thirteen',
	  14: 'fourteen',
	  15: 'fifteen',
	  16: 'sixteen'
	};
	
	/**
	 * Return the number word for numbers 1-16.
	 * Returns strings or numbers as is if there is no corresponding word.
	 * Returns an empty string if value is not a string or number.
	 * @param {string|number} value The value to convert to a word.
	 * @returns {string}
	 */
	function numberToWord(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  if (type === 'string' || type === 'number') {
	    return numberToWordMap[value] || value;
	  }
	
	  return '';
	}

/***/ },
/* 685 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _debug = void 0;
	var noop = function noop() {
	  return undefined;
	};
	
	if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
	  _debug = __webpack_require__(686);
	} else {
	  _debug = function _debug() {
	    return noop;
	  };
	}
	
	/**
	 * Create a namespaced debug function.
	 * @param {String} namespace Usually a component name.
	 * @example
	 * import { makeDebugger } from 'src/lib'
	 * const debug = makeDebugger('namespace')
	 *
	 * debug('Some message')
	 * @returns {Function}
	 */
	var makeDebugger = exports.makeDebugger = function makeDebugger(namespace) {
	  return _debug('semanticUIReact:' + namespace);
	};
	
	/**
	 * Default debugger, simple log.
	 * @example
	 * import { debug } from 'src/lib'
	 * debug('Some message')
	 */
	var debug = exports.debug = makeDebugger('log');
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 686 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(687);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return args;
	
	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	  return args;
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 687 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(688);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 688 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 689 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createHTMLInput = exports.createHTMLImage = undefined;
	
	var _partial2 = __webpack_require__(690);
	
	var _partial3 = _interopRequireDefault(_partial2);
	
	var _isArray2 = __webpack_require__(524);
	
	var _isArray3 = _interopRequireDefault(_isArray2);
	
	var _isNumber2 = __webpack_require__(726);
	
	var _isNumber3 = _interopRequireDefault(_isNumber2);
	
	var _isString2 = __webpack_require__(727);
	
	var _isString3 = _interopRequireDefault(_isString2);
	
	var _isPlainObject2 = __webpack_require__(728);
	
	var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);
	
	var _isFunction2 = __webpack_require__(535);
	
	var _isFunction3 = _interopRequireDefault(_isFunction2);
	
	var _has2 = __webpack_require__(520);
	
	var _has3 = _interopRequireDefault(_has2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createShorthand = createShorthand;
	exports.createShorthandFactory = createShorthandFactory;
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Merges props and classNames.
	 *
	 * @param {object} defaultProps A props object
	 * @param {object} props A props object
	 * @returns {object} A new props object
	 */
	var mergePropsAndClassName = function mergePropsAndClassName(defaultProps, props) {
	  var _defaultProps$props = _extends({}, defaultProps, props);
	
	  var childKey = _defaultProps$props.childKey;
	
	  var newProps = _objectWithoutProperties(_defaultProps$props, ['childKey']);
	
	  if ((0, _has3.default)(props, 'className') || (0, _has3.default)(defaultProps.className)) {
	    newProps.className = (0, _classnames2.default)(defaultProps.className, props.className); // eslint-disable-line react/prop-types
	  }
	
	  if (!newProps.key && childKey) {
	    newProps.key = (0, _isFunction3.default)(childKey) ? childKey(newProps) : childKey;
	  }
	
	  return newProps;
	};
	
	/**
	 * A more robust React.createElement.
	 * It can create elements from primitive values.
	 *
	 * @param {function|string} Component A ReactClass or string
	 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
	 * @param {string|object|function} val The value to create a ReactElement from
	 * @param {object|function} [defaultProps={}] Default props object or function (called with regular props).
	 * @returns {function|null}
	 */
	function createShorthand(Component, mapValueToProps, val) {
	  var defaultProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  if (typeof Component !== 'function' && typeof Component !== 'string') {
	    throw new Error('createShorthandFactory() Component must be a string or function.');
	  }
	  // short circuit for disabling shorthand
	  if (val === null) return null;
	
	  var type = void 0;
	  var usersProps = {};
	
	  if ((0, _react.isValidElement)(val)) {
	    type = 'element';
	    usersProps = val.props;
	  } else if ((0, _isPlainObject3.default)(val)) {
	    type = 'props';
	    usersProps = val;
	  } else if ((0, _isString3.default)(val) || (0, _isNumber3.default)(val) || (0, _isArray3.default)(val)) {
	    type = 'literal';
	    usersProps = mapValueToProps(val);
	  }
	
	  defaultProps = (0, _isFunction3.default)(defaultProps) ? defaultProps(usersProps) : defaultProps;
	  var props = mergePropsAndClassName(defaultProps, usersProps);
	
	  // Clone ReactElements
	  if (type === 'element') {
	    return (0, _react.cloneElement)(val, props);
	  }
	
	  // Create ReactElements from props objects
	  // Map values to props and create a ReactElement
	  if (type === 'props' || type === 'literal') {
	    return _react2.default.createElement(Component, props);
	  }
	
	  // Otherwise null
	  return null;
	}
	
	function createShorthandFactory(Component, mapValueToProps) {
	  if (typeof Component !== 'function' && typeof Component !== 'string') {
	    throw new Error('createShorthandFactory() Component must be a string or function.');
	  }
	  return (0, _partial3.default)(createShorthand, Component, mapValueToProps);
	}
	
	// ----------------------------------------
	// HTML Factories
	// ----------------------------------------
	var createHTMLImage = exports.createHTMLImage = createShorthandFactory('img', function (value) {
	  return { src: value };
	});
	var createHTMLInput = exports.createHTMLInput = createShorthandFactory('input', function (value) {
	  return { type: value };
	});

/***/ },
/* 690 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(625),
	    createWrap = __webpack_require__(691),
	    getHolder = __webpack_require__(718),
	    replaceHolders = __webpack_require__(720);
	
	/** Used to compose bitmasks for function metadata. */
	var PARTIAL_FLAG = 32;
	
	/**
	 * Creates a function that invokes `func` with `partials` prepended to the
	 * arguments it receives. This method is like `_.bind` except it does **not**
	 * alter the `this` binding.
	 *
	 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	 * builds, may be used as a placeholder for partially applied arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of partially
	 * applied functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.2.0
	 * @category Function
	 * @param {Function} func The function to partially apply arguments to.
	 * @param {...*} [partials] The arguments to be partially applied.
	 * @returns {Function} Returns the new partially applied function.
	 * @example
	 *
	 * function greet(greeting, name) {
	 *   return greeting + ' ' + name;
	 * }
	 *
	 * var sayHelloTo = _.partial(greet, 'hello');
	 * sayHelloTo('fred');
	 * // => 'hello fred'
	 *
	 * // Partially applied with placeholders.
	 * var greetFred = _.partial(greet, _, 'fred');
	 * greetFred('hi');
	 * // => 'hi fred'
	 */
	var partial = baseRest(function(func, partials) {
	  var holders = replaceHolders(partials, getHolder(partial));
	  return createWrap(func, PARTIAL_FLAG, undefined, partials, holders);
	});
	
	// Assign default placeholders.
	partial.placeholder = {};
	
	module.exports = partial;


/***/ },
/* 691 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(692),
	    createBind = __webpack_require__(694),
	    createCurry = __webpack_require__(696),
	    createHybrid = __webpack_require__(697),
	    createPartial = __webpack_require__(721),
	    getData = __webpack_require__(705),
	    mergeData = __webpack_require__(722),
	    setData = __webpack_require__(713),
	    setWrapToString = __webpack_require__(714),
	    toInteger = __webpack_require__(723);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_FLAG = 8,
	    CURRY_RIGHT_FLAG = 16,
	    PARTIAL_FLAG = 32,
	    PARTIAL_RIGHT_FLAG = 64;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that either curries or invokes `func` with optional
	 * `this` binding and partially applied arguments.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - `_.bind`
	 *     2 - `_.bindKey`
	 *     4 - `_.curry` or `_.curryRight` of a bound function
	 *     8 - `_.curry`
	 *    16 - `_.curryRight`
	 *    32 - `_.partial`
	 *    64 - `_.partialRight`
	 *   128 - `_.rearg`
	 *   256 - `_.ary`
	 *   512 - `_.flip`
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to be partially applied.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	  var isBindKey = bitmask & BIND_KEY_FLAG;
	  if (!isBindKey && typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var length = partials ? partials.length : 0;
	  if (!length) {
	    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	    partials = holders = undefined;
	  }
	  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
	  arity = arity === undefined ? arity : toInteger(arity);
	  length -= holders ? holders.length : 0;
	
	  if (bitmask & PARTIAL_RIGHT_FLAG) {
	    var partialsRight = partials,
	        holdersRight = holders;
	
	    partials = holders = undefined;
	  }
	  var data = isBindKey ? undefined : getData(func);
	
	  var newData = [
	    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
	    argPos, ary, arity
	  ];
	
	  if (data) {
	    mergeData(newData, data);
	  }
	  func = newData[0];
	  bitmask = newData[1];
	  thisArg = newData[2];
	  partials = newData[3];
	  holders = newData[4];
	  arity = newData[9] = newData[9] == null
	    ? (isBindKey ? 0 : func.length)
	    : nativeMax(newData[9] - length, 0);
	
	  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
	    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
	  }
	  if (!bitmask || bitmask == BIND_FLAG) {
	    var result = createBind(func, bitmask, thisArg);
	  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
	    result = createCurry(func, bitmask, arity);
	  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
	    result = createPartial(func, bitmask, thisArg, partials);
	  } else {
	    result = createHybrid.apply(undefined, newData);
	  }
	  var setter = data ? baseSetData : setData;
	  return setWrapToString(setter(result, newData), func, bitmask);
	}
	
	module.exports = createWrap;


/***/ },
/* 692 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(603),
	    metaMap = __webpack_require__(693);
	
	/**
	 * The base implementation of `setData` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetData = !metaMap ? identity : function(func, data) {
	  metaMap.set(func, data);
	  return func;
	};
	
	module.exports = baseSetData;


/***/ },
/* 693 */
/***/ function(module, exports, __webpack_require__) {

	var WeakMap = __webpack_require__(661);
	
	/** Used to store function metadata. */
	var metaMap = WeakMap && new WeakMap;
	
	module.exports = metaMap;


/***/ },
/* 694 */
/***/ function(module, exports, __webpack_require__) {

	var createCtor = __webpack_require__(695),
	    root = __webpack_require__(539);
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1;
	
	/**
	 * Creates a function that wraps `func` to invoke it with the optional `this`
	 * binding of `thisArg`.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createBind(func, bitmask, thisArg) {
	  var isBind = bitmask & BIND_FLAG,
	      Ctor = createCtor(func);
	
	  function wrapper() {
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return fn.apply(isBind ? thisArg : this, arguments);
	  }
	  return wrapper;
	}
	
	module.exports = createBind;


/***/ },
/* 695 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(682),
	    isObject = __webpack_require__(536);
	
	/**
	 * Creates a function that produces an instance of `Ctor` regardless of
	 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	 *
	 * @private
	 * @param {Function} Ctor The constructor to wrap.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCtor(Ctor) {
	  return function() {
	    // Use a `switch` statement to work with class constructors. See
	    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	    // for more details.
	    var args = arguments;
	    switch (args.length) {
	      case 0: return new Ctor;
	      case 1: return new Ctor(args[0]);
	      case 2: return new Ctor(args[0], args[1]);
	      case 3: return new Ctor(args[0], args[1], args[2]);
	      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	    }
	    var thisBinding = baseCreate(Ctor.prototype),
	        result = Ctor.apply(thisBinding, args);
	
	    // Mimic the constructor's `return` behavior.
	    // See https://es5.github.io/#x13.2.2 for more details.
	    return isObject(result) ? result : thisBinding;
	  };
	}
	
	module.exports = createCtor;


/***/ },
/* 696 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(599),
	    createCtor = __webpack_require__(695),
	    createHybrid = __webpack_require__(697),
	    createRecurry = __webpack_require__(701),
	    getHolder = __webpack_require__(718),
	    replaceHolders = __webpack_require__(720),
	    root = __webpack_require__(539);
	
	/**
	 * Creates a function that wraps `func` to enable currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {number} arity The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCurry(func, bitmask, arity) {
	  var Ctor = createCtor(func);
	
	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length,
	        placeholder = getHolder(wrapper);
	
	    while (index--) {
	      args[index] = arguments[index];
	    }
	    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
	      ? []
	      : replaceHolders(args, placeholder);
	
	    length -= holders.length;
	    if (length < arity) {
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, undefined,
	        args, holders, undefined, undefined, arity - length);
	    }
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return apply(fn, this, args);
	  }
	  return wrapper;
	}
	
	module.exports = createCurry;


/***/ },
/* 697 */
/***/ function(module, exports, __webpack_require__) {

	var composeArgs = __webpack_require__(698),
	    composeArgsRight = __webpack_require__(699),
	    countHolders = __webpack_require__(700),
	    createCtor = __webpack_require__(695),
	    createRecurry = __webpack_require__(701),
	    getHolder = __webpack_require__(718),
	    reorder = __webpack_require__(719),
	    replaceHolders = __webpack_require__(720),
	    root = __webpack_require__(539);
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_FLAG = 8,
	    CURRY_RIGHT_FLAG = 16,
	    ARY_FLAG = 128,
	    FLIP_FLAG = 512;
	
	/**
	 * Creates a function that wraps `func` to invoke it with optional `this`
	 * binding of `thisArg`, partial application, and currying.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [partialsRight] The arguments to append to those provided
	 *  to the new function.
	 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	  var isAry = bitmask & ARY_FLAG,
	      isBind = bitmask & BIND_FLAG,
	      isBindKey = bitmask & BIND_KEY_FLAG,
	      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
	      isFlip = bitmask & FLIP_FLAG,
	      Ctor = isBindKey ? undefined : createCtor(func);
	
	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length;
	
	    while (index--) {
	      args[index] = arguments[index];
	    }
	    if (isCurried) {
	      var placeholder = getHolder(wrapper),
	          holdersCount = countHolders(args, placeholder);
	    }
	    if (partials) {
	      args = composeArgs(args, partials, holders, isCurried);
	    }
	    if (partialsRight) {
	      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
	    }
	    length -= holdersCount;
	    if (isCurried && length < arity) {
	      var newHolders = replaceHolders(args, placeholder);
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
	        args, newHolders, argPos, ary, arity - length
	      );
	    }
	    var thisBinding = isBind ? thisArg : this,
	        fn = isBindKey ? thisBinding[func] : func;
	
	    length = args.length;
	    if (argPos) {
	      args = reorder(args, argPos);
	    } else if (isFlip && length > 1) {
	      args.reverse();
	    }
	    if (isAry && ary < length) {
	      args.length = ary;
	    }
	    if (this && this !== root && this instanceof wrapper) {
	      fn = Ctor || createCtor(fn);
	    }
	    return fn.apply(thisBinding, args);
	  }
	  return wrapper;
	}
	
	module.exports = createHybrid;


/***/ },
/* 698 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates an array that is the composition of partially applied arguments,
	 * placeholders, and provided arguments into a single array of arguments.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to prepend to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgs(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersLength = holders.length,
	      leftIndex = -1,
	      leftLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(leftLength + rangeLength),
	      isUncurried = !isCurried;
	
	  while (++leftIndex < leftLength) {
	    result[leftIndex] = partials[leftIndex];
	  }
	  while (++argsIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[holders[argsIndex]] = args[argsIndex];
	    }
	  }
	  while (rangeLength--) {
	    result[leftIndex++] = args[argsIndex++];
	  }
	  return result;
	}
	
	module.exports = composeArgs;


/***/ },
/* 699 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * This function is like `composeArgs` except that the arguments composition
	 * is tailored for `_.partialRight`.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to append to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgsRight(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersIndex = -1,
	      holdersLength = holders.length,
	      rightIndex = -1,
	      rightLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(rangeLength + rightLength),
	      isUncurried = !isCurried;
	
	  while (++argsIndex < rangeLength) {
	    result[argsIndex] = args[argsIndex];
	  }
	  var offset = argsIndex;
	  while (++rightIndex < rightLength) {
	    result[offset + rightIndex] = partials[rightIndex];
	  }
	  while (++holdersIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[offset + holders[holdersIndex]] = args[argsIndex++];
	    }
	  }
	  return result;
	}
	
	module.exports = composeArgsRight;


/***/ },
/* 700 */
/***/ function(module, exports) {

	/**
	 * Gets the number of `placeholder` occurrences in `array`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} placeholder The placeholder to search for.
	 * @returns {number} Returns the placeholder count.
	 */
	function countHolders(array, placeholder) {
	  var length = array.length,
	      result = 0;
	
	  while (length--) {
	    if (array[length] === placeholder) {
	      ++result;
	    }
	  }
	  return result;
	}
	
	module.exports = countHolders;


/***/ },
/* 701 */
/***/ function(module, exports, __webpack_require__) {

	var isLaziable = __webpack_require__(702),
	    setData = __webpack_require__(713),
	    setWrapToString = __webpack_require__(714);
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_BOUND_FLAG = 4,
	    CURRY_FLAG = 8,
	    PARTIAL_FLAG = 32,
	    PARTIAL_RIGHT_FLAG = 64;
	
	/**
	 * Creates a function that wraps `func` to continue currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {Function} wrapFunc The function to create the `func` wrapper.
	 * @param {*} placeholder The placeholder value.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	  var isCurry = bitmask & CURRY_FLAG,
	      newHolders = isCurry ? holders : undefined,
	      newHoldersRight = isCurry ? undefined : holders,
	      newPartials = isCurry ? partials : undefined,
	      newPartialsRight = isCurry ? undefined : partials;
	
	  bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
	
	  if (!(bitmask & CURRY_BOUND_FLAG)) {
	    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	  }
	  var newData = [
	    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
	    newHoldersRight, argPos, ary, arity
	  ];
	
	  var result = wrapFunc.apply(undefined, newData);
	  if (isLaziable(func)) {
	    setData(result, newData);
	  }
	  result.placeholder = placeholder;
	  return setWrapToString(result, func, bitmask);
	}
	
	module.exports = createRecurry;


/***/ },
/* 702 */
/***/ function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(703),
	    getData = __webpack_require__(705),
	    getFuncName = __webpack_require__(707),
	    lodash = __webpack_require__(709);
	
	/**
	 * Checks if `func` has a lazy counterpart.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	 *  else `false`.
	 */
	function isLaziable(func) {
	  var funcName = getFuncName(func),
	      other = lodash[funcName];
	
	  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	    return false;
	  }
	  if (func === other) {
	    return true;
	  }
	  var data = getData(other);
	  return !!data && func === data[0];
	}
	
	module.exports = isLaziable;


/***/ },
/* 703 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(682),
	    baseLodash = __webpack_require__(704);
	
	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;
	
	/**
	 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	 *
	 * @private
	 * @constructor
	 * @param {*} value The value to wrap.
	 */
	function LazyWrapper(value) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__dir__ = 1;
	  this.__filtered__ = false;
	  this.__iteratees__ = [];
	  this.__takeCount__ = MAX_ARRAY_LENGTH;
	  this.__views__ = [];
	}
	
	// Ensure `LazyWrapper` is an instance of `baseLodash`.
	LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	LazyWrapper.prototype.constructor = LazyWrapper;
	
	module.exports = LazyWrapper;


/***/ },
/* 704 */
/***/ function(module, exports) {

	/**
	 * The function whose prototype chain sequence wrappers inherit from.
	 *
	 * @private
	 */
	function baseLodash() {
	  // No operation performed.
	}
	
	module.exports = baseLodash;


/***/ },
/* 705 */
/***/ function(module, exports, __webpack_require__) {

	var metaMap = __webpack_require__(693),
	    noop = __webpack_require__(706);
	
	/**
	 * Gets metadata for `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {*} Returns the metadata for `func`.
	 */
	var getData = !metaMap ? noop : function(func) {
	  return metaMap.get(func);
	};
	
	module.exports = getData;


/***/ },
/* 706 */
/***/ function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}
	
	module.exports = noop;


/***/ },
/* 707 */
/***/ function(module, exports, __webpack_require__) {

	var realNames = __webpack_require__(708);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the name of `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {string} Returns the function name.
	 */
	function getFuncName(func) {
	  var result = (func.name + ''),
	      array = realNames[result],
	      length = hasOwnProperty.call(realNames, result) ? array.length : 0;
	
	  while (length--) {
	    var data = array[length],
	        otherFunc = data.func;
	    if (otherFunc == null || otherFunc == func) {
	      return data.name;
	    }
	  }
	  return result;
	}
	
	module.exports = getFuncName;


/***/ },
/* 708 */
/***/ function(module, exports) {

	/** Used to lookup unminified function names. */
	var realNames = {};
	
	module.exports = realNames;


/***/ },
/* 709 */
/***/ function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(703),
	    LodashWrapper = __webpack_require__(710),
	    baseLodash = __webpack_require__(704),
	    isArray = __webpack_require__(524),
	    isObjectLike = __webpack_require__(567),
	    wrapperClone = __webpack_require__(711);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates a `lodash` object which wraps `value` to enable implicit method
	 * chain sequences. Methods that operate on and return arrays, collections,
	 * and functions can be chained together. Methods that retrieve a single value
	 * or may return a primitive value will automatically end the chain sequence
	 * and return the unwrapped value. Otherwise, the value must be unwrapped
	 * with `_#value`.
	 *
	 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	 * enabled using `_.chain`.
	 *
	 * The execution of chained methods is lazy, that is, it's deferred until
	 * `_#value` is implicitly or explicitly called.
	 *
	 * Lazy evaluation allows several methods to support shortcut fusion.
	 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	 * the creation of intermediate arrays and can greatly reduce the number of
	 * iteratee executions. Sections of a chain sequence qualify for shortcut
	 * fusion if the section is applied to an array of at least `200` elements
	 * and any iteratees accept only one argument. The heuristic for whether a
	 * section qualifies for shortcut fusion is subject to change.
	 *
	 * Chaining is supported in custom builds as long as the `_#value` method is
	 * directly or indirectly included in the build.
	 *
	 * In addition to lodash methods, wrappers have `Array` and `String` methods.
	 *
	 * The wrapper `Array` methods are:
	 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	 *
	 * The wrapper `String` methods are:
	 * `replace` and `split`
	 *
	 * The wrapper methods that support shortcut fusion are:
	 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	 *
	 * The chainable wrapper methods are:
	 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	 * `zipObject`, `zipObjectDeep`, and `zipWith`
	 *
	 * The wrapper methods that are **not** chainable by default are:
	 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	 * `upperFirst`, `value`, and `words`
	 *
	 * @name _
	 * @constructor
	 * @category Seq
	 * @param {*} value The value to wrap in a `lodash` instance.
	 * @returns {Object} Returns the new `lodash` wrapper instance.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var wrapped = _([1, 2, 3]);
	 *
	 * // Returns an unwrapped value.
	 * wrapped.reduce(_.add);
	 * // => 6
	 *
	 * // Returns a wrapped value.
	 * var squares = wrapped.map(square);
	 *
	 * _.isArray(squares);
	 * // => false
	 *
	 * _.isArray(squares.value());
	 * // => true
	 */
	function lodash(value) {
	  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	    if (value instanceof LodashWrapper) {
	      return value;
	    }
	    if (hasOwnProperty.call(value, '__wrapped__')) {
	      return wrapperClone(value);
	    }
	  }
	  return new LodashWrapper(value);
	}
	
	// Ensure wrappers are instances of `baseLodash`.
	lodash.prototype = baseLodash.prototype;
	lodash.prototype.constructor = lodash;
	
	module.exports = lodash;


/***/ },
/* 710 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(682),
	    baseLodash = __webpack_require__(704);
	
	/**
	 * The base constructor for creating `lodash` wrapper objects.
	 *
	 * @private
	 * @param {*} value The value to wrap.
	 * @param {boolean} [chainAll] Enable explicit method chain sequences.
	 */
	function LodashWrapper(value, chainAll) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__chain__ = !!chainAll;
	  this.__index__ = 0;
	  this.__values__ = undefined;
	}
	
	LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	LodashWrapper.prototype.constructor = LodashWrapper;
	
	module.exports = LodashWrapper;


/***/ },
/* 711 */
/***/ function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(703),
	    LodashWrapper = __webpack_require__(710),
	    copyArray = __webpack_require__(712);
	
	/**
	 * Creates a clone of `wrapper`.
	 *
	 * @private
	 * @param {Object} wrapper The wrapper to clone.
	 * @returns {Object} Returns the cloned wrapper.
	 */
	function wrapperClone(wrapper) {
	  if (wrapper instanceof LazyWrapper) {
	    return wrapper.clone();
	  }
	  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
	  result.__actions__ = copyArray(wrapper.__actions__);
	  result.__index__  = wrapper.__index__;
	  result.__values__ = wrapper.__values__;
	  return result;
	}
	
	module.exports = wrapperClone;


/***/ },
/* 712 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = copyArray;


/***/ },
/* 713 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(692),
	    shortOut = __webpack_require__(604);
	
	/**
	 * Sets metadata for `func`.
	 *
	 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	 * period of time, it will trip its breaker and transition to an identity
	 * function to avoid garbage collection pauses in V8. See
	 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	 * for more details.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var setData = shortOut(baseSetData);
	
	module.exports = setData;


/***/ },
/* 714 */
/***/ function(module, exports, __webpack_require__) {

	var getWrapDetails = __webpack_require__(715),
	    insertWrapDetails = __webpack_require__(716),
	    setToString = __webpack_require__(600),
	    updateWrapDetails = __webpack_require__(717);
	
	/**
	 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	 * with wrapper details in a comment at the top of the source body.
	 *
	 * @private
	 * @param {Function} wrapper The function to modify.
	 * @param {Function} reference The reference function.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Function} Returns `wrapper`.
	 */
	function setWrapToString(wrapper, reference, bitmask) {
	  var source = (reference + '');
	  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
	}
	
	module.exports = setWrapToString;


/***/ },
/* 715 */
/***/ function(module, exports) {

	/** Used to match wrap detail comments. */
	var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
	    reSplitDetails = /,? & /;
	
	/**
	 * Extracts wrapper details from the `source` body comment.
	 *
	 * @private
	 * @param {string} source The source to inspect.
	 * @returns {Array} Returns the wrapper details.
	 */
	function getWrapDetails(source) {
	  var match = source.match(reWrapDetails);
	  return match ? match[1].split(reSplitDetails) : [];
	}
	
	module.exports = getWrapDetails;


/***/ },
/* 716 */
/***/ function(module, exports) {

	/** Used to match wrap detail comments. */
	var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
	
	/**
	 * Inserts wrapper `details` in a comment at the top of the `source` body.
	 *
	 * @private
	 * @param {string} source The source to modify.
	 * @returns {Array} details The details to insert.
	 * @returns {string} Returns the modified source.
	 */
	function insertWrapDetails(source, details) {
	  var length = details.length;
	  if (!length) {
	    return source;
	  }
	  var lastIndex = length - 1;
	  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
	  details = details.join(length > 2 ? ', ' : ' ');
	  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
	}
	
	module.exports = insertWrapDetails;


/***/ },
/* 717 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(680),
	    arrayIncludes = __webpack_require__(581);
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_FLAG = 8,
	    CURRY_RIGHT_FLAG = 16,
	    PARTIAL_FLAG = 32,
	    PARTIAL_RIGHT_FLAG = 64,
	    ARY_FLAG = 128,
	    REARG_FLAG = 256,
	    FLIP_FLAG = 512;
	
	/** Used to associate wrap methods with their bit flags. */
	var wrapFlags = [
	  ['ary', ARY_FLAG],
	  ['bind', BIND_FLAG],
	  ['bindKey', BIND_KEY_FLAG],
	  ['curry', CURRY_FLAG],
	  ['curryRight', CURRY_RIGHT_FLAG],
	  ['flip', FLIP_FLAG],
	  ['partial', PARTIAL_FLAG],
	  ['partialRight', PARTIAL_RIGHT_FLAG],
	  ['rearg', REARG_FLAG]
	];
	
	/**
	 * Updates wrapper `details` based on `bitmask` flags.
	 *
	 * @private
	 * @returns {Array} details The details to modify.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Array} Returns `details`.
	 */
	function updateWrapDetails(details, bitmask) {
	  arrayEach(wrapFlags, function(pair) {
	    var value = '_.' + pair[0];
	    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
	      details.push(value);
	    }
	  });
	  return details.sort();
	}
	
	module.exports = updateWrapDetails;


/***/ },
/* 718 */
/***/ function(module, exports) {

	/**
	 * Gets the argument placeholder value for `func`.
	 *
	 * @private
	 * @param {Function} func The function to inspect.
	 * @returns {*} Returns the placeholder value.
	 */
	function getHolder(func) {
	  var object = func;
	  return object.placeholder;
	}
	
	module.exports = getHolder;


/***/ },
/* 719 */
/***/ function(module, exports, __webpack_require__) {

	var copyArray = __webpack_require__(712),
	    isIndex = __webpack_require__(570);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;
	
	/**
	 * Reorder `array` according to the specified indexes where the element at
	 * the first index is assigned as the first element, the element at
	 * the second index is assigned as the second element, and so on.
	 *
	 * @private
	 * @param {Array} array The array to reorder.
	 * @param {Array} indexes The arranged array indexes.
	 * @returns {Array} Returns `array`.
	 */
	function reorder(array, indexes) {
	  var arrLength = array.length,
	      length = nativeMin(indexes.length, arrLength),
	      oldArray = copyArray(array);
	
	  while (length--) {
	    var index = indexes[length];
	    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	  }
	  return array;
	}
	
	module.exports = reorder;


/***/ },
/* 720 */
/***/ function(module, exports) {

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';
	
	/**
	 * Replaces all `placeholder` elements in `array` with an internal placeholder
	 * and returns an array of their indexes.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {*} placeholder The placeholder to replace.
	 * @returns {Array} Returns the new array of placeholder indexes.
	 */
	function replaceHolders(array, placeholder) {
	  var index = -1,
	      length = array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (value === placeholder || value === PLACEHOLDER) {
	      array[index] = PLACEHOLDER;
	      result[resIndex++] = index;
	    }
	  }
	  return result;
	}
	
	module.exports = replaceHolders;


/***/ },
/* 721 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(599),
	    createCtor = __webpack_require__(695),
	    root = __webpack_require__(539);
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1;
	
	/**
	 * Creates a function that wraps `func` to invoke it with the `this` binding
	 * of `thisArg` and `partials` prepended to the arguments it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} partials The arguments to prepend to those provided to
	 *  the new function.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createPartial(func, bitmask, thisArg, partials) {
	  var isBind = bitmask & BIND_FLAG,
	      Ctor = createCtor(func);
	
	  function wrapper() {
	    var argsIndex = -1,
	        argsLength = arguments.length,
	        leftIndex = -1,
	        leftLength = partials.length,
	        args = Array(leftLength + argsLength),
	        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	
	    while (++leftIndex < leftLength) {
	      args[leftIndex] = partials[leftIndex];
	    }
	    while (argsLength--) {
	      args[leftIndex++] = arguments[++argsIndex];
	    }
	    return apply(fn, isBind ? thisArg : this, args);
	  }
	  return wrapper;
	}
	
	module.exports = createPartial;


/***/ },
/* 722 */
/***/ function(module, exports, __webpack_require__) {

	var composeArgs = __webpack_require__(698),
	    composeArgsRight = __webpack_require__(699),
	    replaceHolders = __webpack_require__(720);
	
	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_BOUND_FLAG = 4,
	    CURRY_FLAG = 8,
	    ARY_FLAG = 128,
	    REARG_FLAG = 256;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;
	
	/**
	 * Merges the function metadata of `source` into `data`.
	 *
	 * Merging metadata reduces the number of wrappers used to invoke a function.
	 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	 * may be applied regardless of execution order. Methods like `_.ary` and
	 * `_.rearg` modify function arguments, making the order in which they are
	 * executed important, preventing the merging of metadata. However, we make
	 * an exception for a safe combined case where curried functions have `_.ary`
	 * and or `_.rearg` applied.
	 *
	 * @private
	 * @param {Array} data The destination metadata.
	 * @param {Array} source The source metadata.
	 * @returns {Array} Returns `data`.
	 */
	function mergeData(data, source) {
	  var bitmask = data[1],
	      srcBitmask = source[1],
	      newBitmask = bitmask | srcBitmask,
	      isCommon = newBitmask < (BIND_FLAG | BIND_KEY_FLAG | ARY_FLAG);
	
	  var isCombo =
	    ((srcBitmask == ARY_FLAG) && (bitmask == CURRY_FLAG)) ||
	    ((srcBitmask == ARY_FLAG) && (bitmask == REARG_FLAG) && (data[7].length <= source[8])) ||
	    ((srcBitmask == (ARY_FLAG | REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == CURRY_FLAG));
	
	  // Exit early if metadata can't be merged.
	  if (!(isCommon || isCombo)) {
	    return data;
	  }
	  // Use source `thisArg` if available.
	  if (srcBitmask & BIND_FLAG) {
	    data[2] = source[2];
	    // Set when currying a bound function.
	    newBitmask |= bitmask & BIND_FLAG ? 0 : CURRY_BOUND_FLAG;
	  }
	  // Compose partial arguments.
	  var value = source[3];
	  if (value) {
	    var partials = data[3];
	    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
	    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
	  }
	  // Compose partial right arguments.
	  value = source[5];
	  if (value) {
	    partials = data[5];
	    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
	    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
	  }
	  // Use source `argPos` if available.
	  value = source[7];
	  if (value) {
	    data[7] = value;
	  }
	  // Use source `ary` if it's smaller.
	  if (srcBitmask & ARY_FLAG) {
	    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	  }
	  // Use source `arity` if one is not provided.
	  if (data[9] == null) {
	    data[9] = source[9];
	  }
	  // Use source `func` and merge bitmasks.
	  data[0] = source[0];
	  data[1] = newBitmask;
	
	  return data;
	}
	
	module.exports = mergeData;


/***/ },
/* 723 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(724);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	module.exports = toInteger;


/***/ },
/* 724 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(725);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	module.exports = toFinite;


/***/ },
/* 725 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(536),
	    isSymbol = __webpack_require__(566);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ },
/* 726 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(567);
	
	/** `Object#toString` result references. */
	var numberTag = '[object Number]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	 * classified as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike(value) && objectToString.call(value) == numberTag);
	}
	
	module.exports = isNumber;


/***/ },
/* 727 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(524),
	    isObjectLike = __webpack_require__(567);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 728 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(608),
	    isObjectLike = __webpack_require__(567);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 729 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 730 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _omit2 = __webpack_require__(576);
	
	var _omit3 = _interopRequireDefault(_omit2);
	
	var _keys2 = __webpack_require__(635);
	
	var _keys3 = _interopRequireDefault(_keys2);
	
	var _union2 = __webpack_require__(731);
	
	var _union3 = _interopRequireDefault(_union2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Returns an object consisting of props beyond the scope of the Component.
	 * Useful for getting and spreading unknown props from the user.
	 * @param {function} Component A function or ReactClass.
	 * @param {object} props A ReactElement props object
	 * @returns {{}} A shallow copy of the prop object
	 */
	var getUnhandledProps = function getUnhandledProps(Component, props) {
	  var handledProps = (0, _union3.default)(Component.autoControlledProps, (0, _keys3.default)(Component.defaultProps), (0, _keys3.default)(Component.propTypes));
	
	  return (0, _omit3.default)(props, handledProps);
	};
	
	exports.default = getUnhandledProps;

/***/ },
/* 731 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(595),
	    baseRest = __webpack_require__(625),
	    baseUniq = __webpack_require__(732),
	    isArrayLikeObject = __webpack_require__(626);
	
	/**
	 * Creates an array of unique values, in order, from all given arrays using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of combined values.
	 * @example
	 *
	 * _.union([2], [1, 2]);
	 * // => [2, 1]
	 */
	var union = baseRest(function(arrays) {
	  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	});
	
	module.exports = union;


/***/ },
/* 732 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(578),
	    arrayIncludes = __webpack_require__(581),
	    arrayIncludesWith = __webpack_require__(586),
	    cacheHas = __webpack_require__(588),
	    createSet = __webpack_require__(733),
	    setToArray = __webpack_require__(655);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;
	
	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;
	
	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseUniq;


/***/ },
/* 733 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(660),
	    noop = __webpack_require__(706),
	    setToArray = __webpack_require__(655);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	  return new Set(values);
	};
	
	module.exports = createSet;


/***/ },
/* 734 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Returns a createElement() type based on the props of the Component.
	 * Useful for calculating what type a component should render as.
	 *
	 * @param {function} Component A function or ReactClass.
	 * @param {object} props A ReactElement props object
	 * @param {function} [getDefault] A function that returns a default element type.
	 * @returns {string|function} A ReactElement type
	 */
	function getElementType(Component, props, getDefault) {
	  var _Component$defaultPro = Component.defaultProps;
	  var defaultProps = _Component$defaultPro === undefined ? {} : _Component$defaultPro;
	
	  // ----------------------------------------
	  // user defined "as" element type
	
	  if (props.as && props.as !== defaultProps.as) return props.as;
	
	  // ----------------------------------------
	  // computed default element type
	
	  if (getDefault) {
	    var computedDefault = getDefault();
	    if (computedDefault) return computedDefault;
	  }
	
	  // ----------------------------------------
	  // infer anchor links
	
	  if (props.href) return 'a';
	
	  // ----------------------------------------
	  // use defaultProp or 'div'
	
	  return defaultProps.as || 'div';
	}
	
	exports.default = getElementType;

/***/ },
/* 735 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isObject2 = __webpack_require__(536);
	
	var _isObject3 = _interopRequireDefault(_isObject2);
	
	var _times2 = __webpack_require__(736);
	
	var _times3 = _interopRequireDefault(_times2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * All previous KeyboardEvent key identifying properties are deprecated in favor of `key`.
	 * Unfortunately, `key` is not yet fully supported.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
	 */
	var codes = {
	  // ----------------------------------------
	  // By Code
	  // ----------------------------------------
	  3: 'Cancel',
	  6: 'Help',
	  8: 'Backspace',
	  9: 'Tab',
	  12: 'Clear',
	  13: 'Enter',
	  16: 'Shift',
	  17: 'Control',
	  18: 'Alt',
	  19: 'Pause',
	  20: 'CapsLock',
	  27: 'Escape',
	  28: 'Convert',
	  29: 'NonConvert',
	  30: 'Accept',
	  31: 'ModeChange',
	  32: ' ',
	  33: 'PageUp',
	  34: 'PageDown',
	  35: 'End',
	  36: 'Home',
	  37: 'ArrowLeft',
	  38: 'ArrowUp',
	  39: 'ArrowRight',
	  40: 'ArrowDown',
	  41: 'Select',
	  42: 'Print',
	  43: 'Execute',
	  44: 'PrintScreen',
	  45: 'Insert',
	  46: 'Delete',
	  48: ['0', ')'],
	  49: ['1', '!'],
	  50: ['2', '@'],
	  51: ['3', '#'],
	  52: ['4', '$'],
	  53: ['5', '%'],
	  54: ['6', '^'],
	  55: ['7', '&'],
	  56: ['8', '*'],
	  57: ['9', '('],
	  91: 'OS',
	  93: 'ContextMenu',
	  144: 'NumLock',
	  145: 'ScrollLock',
	  181: 'VolumeMute',
	  182: 'VolumeDown',
	  183: 'VolumeUp',
	  186: [';', ':'],
	  187: ['=', '+'],
	  188: [',', '<'],
	  189: ['-', '_'],
	  190: ['.', '>'],
	  191: ['/', '?'],
	  192: ['`', '~'],
	  219: ['[', '{'],
	  220: ['\\', '|'],
	  221: [']', '}'],
	  222: ["'", '"'],
	  224: 'Meta',
	  225: 'AltGraph',
	  246: 'Attn',
	  247: 'CrSel',
	  248: 'ExSel',
	  249: 'EraseEof',
	  250: 'Play',
	  251: 'ZoomOut'
	};
	
	// Function Keys (F1-24)
	(0, _times3.default)(24, function (i) {
	  return codes[112 + i] = 'F' + (i + 1);
	});
	
	// Alphabet (a-Z)
	(0, _times3.default)(26, function (i) {
	  var n = i + 65;
	  codes[n] = [String.fromCharCode(n + 32), String.fromCharCode(n)];
	});
	
	var keyboardKey = {
	  codes: codes,
	
	  /**
	   * Get the `keyCode` or `which` value from a keyboard event or `key` name.
	   * @param {string|object} name A keyboard event like object or `key` name.
	   * @param {string} [name.key] If object, it must have one of these keys.
	   * @param {string} [name.keyCode] If object, it must have one of these keys.
	   * @param {string} [name.which] If object, it must have one of these keys.
	   * @returns {*}
	   */
	  getCode: function getCode(name) {
	    if ((0, _isObject3.default)(name)) {
	      return name.keyCode || name.which || this[name.key];
	    }
	    return this[name];
	  },
	
	
	  /**
	   * Get the key name from a keyboard event, `keyCode`, or `which` value.
	   * @param {number|object} code A keyboard event like object or key name.
	   * @param {number} [code.keyCode] If object, it must have one of these keys.
	   * @param {number} [code.which] If object, it must have one of these keys.
	   * @param {number} [code.shiftKey] If object, it must have one of these keys.
	   * @returns {*}
	   */
	  getName: function getName(code) {
	    var isEvent = (0, _isObject3.default)(code);
	    var name = codes[isEvent ? code.keyCode || code.which : code];
	
	    if (Array.isArray(name)) {
	      if (isEvent) {
	        name = name[code.shiftKey ? 1 : 0];
	      } else {
	        name = name[0];
	      }
	    }
	
	    return name;
	  },
	
	
	  // ----------------------------------------
	  // By Name
	  // ----------------------------------------
	  // declare these manually for static analysis
	  Cancel: 3,
	  Help: 6,
	  Backspace: 8,
	  Tab: 9,
	  Clear: 12,
	  Enter: 13,
	  Shift: 16,
	  Control: 17,
	  Alt: 18,
	  Pause: 19,
	  CapsLock: 20,
	  Escape: 27,
	  Convert: 28,
	  NonConvert: 29,
	  Accept: 30,
	  ModeChange: 31,
	  ' ': 32,
	  PageUp: 33,
	  PageDown: 34,
	  End: 35,
	  Home: 36,
	  ArrowLeft: 37,
	  ArrowUp: 38,
	  ArrowRight: 39,
	  ArrowDown: 40,
	  Select: 41,
	  Print: 42,
	  Execute: 43,
	  PrintScreen: 44,
	  Insert: 45,
	  Delete: 46,
	  0: 48, ')': 48,
	  1: 49, '!': 49,
	  2: 50, '@': 50,
	  3: 51, '#': 51,
	  4: 52, $: 52,
	  5: 53, '%': 53,
	  6: 54, '^': 54,
	  7: 55, '&': 55,
	  8: 56, '*': 56,
	  9: 57, '(': 57,
	  a: 65, A: 65,
	  b: 66, B: 66,
	  c: 67, C: 67,
	  d: 68, D: 68,
	  e: 69, E: 69,
	  f: 70, F: 70,
	  g: 71, G: 71,
	  h: 72, H: 72,
	  i: 73, I: 73,
	  j: 74, J: 74,
	  k: 75, K: 75,
	  l: 76, L: 76,
	  m: 77, M: 77,
	  n: 78, N: 78,
	  o: 79, O: 79,
	  p: 80, P: 80,
	  q: 81, Q: 81,
	  r: 82, R: 82,
	  s: 83, S: 83,
	  t: 84, T: 84,
	  u: 85, U: 85,
	  v: 86, V: 86,
	  w: 87, W: 87,
	  x: 88, X: 88,
	  y: 89, Y: 89,
	  z: 90, Z: 90,
	  OS: 91,
	  ContextMenu: 93,
	  F1: 112,
	  F2: 113,
	  F3: 114,
	  F4: 115,
	  F5: 116,
	  F6: 117,
	  F7: 118,
	  F8: 119,
	  F9: 120,
	  F10: 121,
	  F11: 122,
	  F12: 123,
	  F13: 124,
	  F14: 125,
	  F15: 126,
	  F16: 127,
	  F17: 128,
	  F18: 129,
	  F19: 130,
	  F20: 131,
	  F21: 132,
	  F22: 133,
	  F23: 134,
	  F24: 135,
	  NumLock: 144,
	  ScrollLock: 145,
	  VolumeMute: 181,
	  VolumeDown: 182,
	  VolumeUp: 183,
	  ';': 186, ':': 186,
	  '=': 187, '+': 187,
	  ',': 188, '<': 188,
	  '-': 189, _: 189,
	  '.': 190, '>': 190,
	  '/': 191, '?': 191,
	  '`': 192, '~': 192,
	  '[': 219, '{': 219,
	  '\\': 220, '\|': 220,
	  ']': 221, '}': 221,
	  "'": 222, '"': 222,
	  Meta: 224,
	  AltGraph: 225,
	  Attn: 246,
	  CrSel: 247,
	  ExSel: 248,
	  EraseEof: 249,
	  Play: 250,
	  ZoomOut: 251
	};
	
	// ----------------------------------------
	// By Alias
	// ----------------------------------------
	// provide dot-notation accessible keys for all key names
	keyboardKey.Spacebar = keyboardKey[' '];
	keyboardKey.Digit0 = keyboardKey['0'];
	keyboardKey.Digit1 = keyboardKey['1'];
	keyboardKey.Digit2 = keyboardKey['2'];
	keyboardKey.Digit3 = keyboardKey['3'];
	keyboardKey.Digit4 = keyboardKey['4'];
	keyboardKey.Digit5 = keyboardKey['5'];
	keyboardKey.Digit6 = keyboardKey['6'];
	keyboardKey.Digit7 = keyboardKey['7'];
	keyboardKey.Digit8 = keyboardKey['8'];
	keyboardKey.Digit9 = keyboardKey['9'];
	keyboardKey.Tilde = keyboardKey['~'];
	keyboardKey.GraveAccent = keyboardKey['`'];
	keyboardKey.ExclamationPoint = keyboardKey['!'];
	keyboardKey.AtSign = keyboardKey['@'];
	keyboardKey.PoundSign = keyboardKey['#'];
	keyboardKey.PercentSign = keyboardKey['%'];
	keyboardKey.Caret = keyboardKey['^'];
	keyboardKey.Ampersand = keyboardKey['&'];
	keyboardKey.PlusSign = keyboardKey['+'];
	keyboardKey.MinusSign = keyboardKey['-'];
	keyboardKey.EqualsSign = keyboardKey['='];
	keyboardKey.DivisionSign = keyboardKey['/'];
	keyboardKey.MultiplicationSign = keyboardKey['*'];
	keyboardKey.Comma = keyboardKey[','];
	keyboardKey.Decimal = keyboardKey['.'];
	keyboardKey.Colon = keyboardKey[':'];
	keyboardKey.Semicolon = keyboardKey[';'];
	keyboardKey.Pipe = keyboardKey['|'];
	keyboardKey.BackSlash = keyboardKey['\\'];
	keyboardKey.QuestionMark = keyboardKey['?'];
	keyboardKey.SingleQuote = keyboardKey['"'];
	keyboardKey.DoubleQuote = keyboardKey['"'];
	keyboardKey.LeftCurlyBrace = keyboardKey['{'];
	keyboardKey.RightCurlyBrace = keyboardKey['}'];
	keyboardKey.LeftParenthesis = keyboardKey['('];
	keyboardKey.RightParenthesis = keyboardKey[')'];
	keyboardKey.LeftAngleBracket = keyboardKey['<'];
	keyboardKey.RightAngleBracket = keyboardKey['>'];
	keyboardKey.LeftSquareBracket = keyboardKey['['];
	keyboardKey.RightSquareBracket = keyboardKey[']'];
	
	exports.default = keyboardKey;

/***/ },
/* 736 */
/***/ function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(639),
	    baseTimes = __webpack_require__(614),
	    toInteger = __webpack_require__(723);
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;
	
	/**
	 * Invokes the iteratee `n` times, returning an array of the results of
	 * each invocation. The iteratee is invoked with one argument; (index).
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 * @example
	 *
	 * _.times(3, String);
	 * // => ['0', '1', '2']
	 *
	 *  _.times(4, _.constant(0));
	 * // => [0, 0, 0, 0]
	 */
	function times(n, iteratee) {
	  n = toInteger(n);
	  if (n < 1 || n > MAX_SAFE_INTEGER) {
	    return [];
	  }
	  var index = MAX_ARRAY_LENGTH,
	      length = nativeMin(n, MAX_ARRAY_LENGTH);
	
	  iteratee = baseIteratee(iteratee);
	  n -= MAX_ARRAY_LENGTH;
	
	  var result = baseTimes(length, iteratee);
	  while (++index < n) {
	    iteratee(index);
	  }
	  return result;
	}
	
	module.exports = times;


/***/ },
/* 737 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.objectDiff = undefined;
	
	var _isEqual2 = __webpack_require__(738);
	
	var _isEqual3 = _interopRequireDefault(_isEqual2);
	
	var _has2 = __webpack_require__(520);
	
	var _has3 = _interopRequireDefault(_has2);
	
	var _transform2 = __webpack_require__(681);
	
	var _transform3 = _interopRequireDefault(_transform2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Naive and inefficient object difference, intended for development / debugging use only.
	 * Deleted keys are shown as [DELETED].
	 * @param {{}} source The source object
	 * @param {{}} target The target object.
	 * @returns {{}} A new object containing new/modified/deleted keys.
	 * @example
	 * import { objectDiff } from 'src/lib'
	 *
	 * const a = { key: 'val', foo: 'bar' }
	 * const b = { key: 'val', foo: 'baz' }
	 *
	 * objectDiff(a, b)
	 * //=> { foo: 'baz' }
	 */
	var objectDiff = exports.objectDiff = function objectDiff(source, target) {
	  return (0, _transform3.default)(source, function (res, val, key) {
	    // deleted keys
	    if (!(0, _has3.default)(target, key)) res[key] = '[DELETED]';
	    // new keys / changed values
	    else if (!(0, _isEqual3.default)(val, target[key])) res[key] = target[key];
	  }, {});
	};

/***/ },
/* 738 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(648);
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are **not** supported.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}
	
	module.exports = isEqual;


/***/ },
/* 739 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findByType = exports.someByType = undefined;
	
	var _find2 = __webpack_require__(740);
	
	var _find3 = _interopRequireDefault(_find2);
	
	var _some2 = __webpack_require__(743);
	
	var _some3 = _interopRequireDefault(_some2);
	
	var _react = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Determine if child by type exists in children.
	 * @param {Object} children The children prop of a component.
	 * @param {string|Function} type An html tag name string or React component.
	 * @returns {Boolean}
	 */
	var someByType = exports.someByType = function someByType(children, type) {
	  return (0, _some3.default)(_react.Children.toArray(children), { type: type });
	};
	
	/**
	 * Find child by type.
	 * @param {Object} children The children prop of a component.
	 * @param {string|Function} type An html tag name string or React component.
	 * @returns {undefined|Object}
	 */
	var findByType = exports.findByType = function findByType(children, type) {
	  return (0, _find3.default)(_react.Children.toArray(children), { type: type });
	};

/***/ },
/* 740 */
/***/ function(module, exports, __webpack_require__) {

	var createFind = __webpack_require__(741),
	    findIndex = __webpack_require__(742);
	
	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	var find = createFind(findIndex);
	
	module.exports = find;


/***/ },
/* 741 */
/***/ function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(639),
	    isArrayLike = __webpack_require__(623),
	    keys = __webpack_require__(635);
	
	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} findIndexFunc The function to find the collection index.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(findIndexFunc) {
	  return function(collection, predicate, fromIndex) {
	    var iterable = Object(collection);
	    if (!isArrayLike(collection)) {
	      var iteratee = baseIteratee(predicate, 3);
	      collection = keys(collection);
	      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	    }
	    var index = findIndexFunc(collection, predicate, fromIndex);
	    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	  };
	}
	
	module.exports = createFind;


/***/ },
/* 742 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(583),
	    baseIteratee = __webpack_require__(639),
	    toInteger = __webpack_require__(723);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}
	
	module.exports = findIndex;


/***/ },
/* 743 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(651),
	    baseIteratee = __webpack_require__(639),
	    baseSome = __webpack_require__(744),
	    isArray = __webpack_require__(524),
	    isIterateeCall = __webpack_require__(745);
	
	/**
	 * Checks if `predicate` returns truthy for **any** element of `collection`.
	 * Iteration is stopped once `predicate` returns truthy. The predicate is
	 * invoked with three arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 * @example
	 *
	 * _.some([null, 0, 'yes', false], Boolean);
	 * // => true
	 *
	 * var users = [
	 *   { 'user': 'barney', 'active': true },
	 *   { 'user': 'fred',   'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.some(users, { 'user': 'barney', 'active': false });
	 * // => false
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.some(users, ['active', false]);
	 * // => true
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.some(users, 'active');
	 * // => true
	 */
	function some(collection, predicate, guard) {
	  var func = isArray(collection) ? arraySome : baseSome;
	  if (guard && isIterateeCall(collection, predicate, guard)) {
	    predicate = undefined;
	  }
	  return func(collection, baseIteratee(predicate, 3));
	}
	
	module.exports = some;


/***/ },
/* 744 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(631);
	
	/**
	 * The base implementation of `_.some` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function baseSome(collection, predicate) {
	  var result;
	
	  baseEach(collection, function(value, index, collection) {
	    result = predicate(value, index, collection);
	    return !result;
	  });
	  return !!result;
	}
	
	module.exports = baseSome;


/***/ },
/* 745 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(551),
	    isArrayLike = __webpack_require__(623),
	    isIndex = __webpack_require__(570),
	    isObject = __webpack_require__(536);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 746 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deprecate = exports.collectionShorthand = exports.itemShorthand = exports.contentShorthand = exports.demand = exports.givenProps = exports.some = exports.every = exports.disallow = exports.as = undefined;
	
	var _isObject2 = __webpack_require__(747);
	
	var _isObject3 = _interopRequireDefault(_isObject2);
	
	var _pick2 = __webpack_require__(783);
	
	var _pick3 = _interopRequireDefault(_pick2);
	
	var _keys2 = __webpack_require__(784);
	
	var _keys3 = _interopRequireDefault(_keys2);
	
	var _isPlainObject2 = __webpack_require__(785);
	
	var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);
	
	var _isFunction2 = __webpack_require__(786);
	
	var _isFunction3 = _interopRequireDefault(_isFunction2);
	
	var _compact2 = __webpack_require__(787);
	
	var _compact3 = _interopRequireDefault(_compact2);
	
	var _map2 = __webpack_require__(789);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _flow2 = __webpack_require__(792);
	
	var _flow3 = _interopRequireDefault(_flow2);
	
	var _isNil2 = __webpack_require__(795);
	
	var _isNil3 = _interopRequireDefault(_isNil2);
	
	var _templateObject = _taggedTemplateLiteral([' See `', '` prop in `', '`.'], [' See \\`', '\\` prop in \\`', '\\`.']);
	
	var _react = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var typeOf = function typeOf() {
	  var _Object$prototype$toS;
	
	  return (_Object$prototype$toS = Object.prototype.toString).call.apply(_Object$prototype$toS, arguments);
	};
	
	/**
	 * Ensure a component can render as a give prop value.
	 */
	var as = exports.as = function as() {
	  return _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).apply(undefined, arguments);
	};
	
	/**
	 * Disallow other props form being defined with this prop.
	 * @param {string[]} disallowedProps An array of props that cannot be used with this prop.
	 */
	var disallow = exports.disallow = function disallow(disallowedProps) {
	  return function (props, propName, componentName) {
	    if (!Array.isArray(disallowedProps)) {
	      throw new Error(['Invalid argument supplied to disallow, expected an instance of array.'(_templateObject, propName, componentName)].join(''));
	    }
	
	    // skip if prop is undefined
	    if ((0, _isNil3.default)(props[propName]) || props[propName] === false) return;
	
	    // find disallowed props with values
	    var disallowed = disallowedProps.reduce(function (acc, disallowedProp) {
	      if (!(0, _isNil3.default)(props[disallowedProp]) && props[disallowedProp] !== false) {
	        return [].concat(_toConsumableArray(acc), [disallowedProp]);
	      }
	      return acc;
	    }, []);
	
	    if (disallowed.length > 0) {
	      return new Error(['Prop `' + propName + '` in `' + componentName + '` conflicts with props: `' + disallowed.join('`, `') + '`.', 'They cannot be defined together, choose one or the other.'].join(' '));
	    }
	  };
	};
	
	/**
	 * Ensure a prop adherers to multiple prop type validators.
	 * @param {function[]} validators An array of propType functions.
	 */
	var every = exports.every = function every(validators) {
	  return function (props, propName, componentName) {
	    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	      rest[_key - 3] = arguments[_key];
	    }
	
	    if (!Array.isArray(validators)) {
	      throw new Error(['Invalid argument supplied to every, expected an instance of array.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
	    }
	
	    var errors = (0, _flow3.default)((0, _map3.default)(function (validator) {
	      if (typeof validator !== 'function') {
	        throw new Error('every() argument "validators" should contain functions, found: ' + typeOf(validator) + '.');
	      }
	      return validator.apply(undefined, [props, propName, componentName].concat(rest));
	    }), _compact3.default)(validators);
	
	    // we can only return one error at a time
	    return errors[0];
	  };
	};
	
	/**
	 * Ensure a prop adherers to at least one of the given prop type validators.
	 * @param {function[]} validators An array of propType functions.
	 */
	var some = exports.some = function some(validators) {
	  return function (props, propName, componentName) {
	    for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
	      rest[_key2 - 3] = arguments[_key2];
	    }
	
	    if (!Array.isArray(validators)) {
	      throw new Error(['Invalid argument supplied to some, expected an instance of array.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
	    }
	
	    var errors = (0, _compact3.default)((0, _map3.default)(validators, function (validator) {
	      if (!(0, _isFunction3.default)(validator)) {
	        throw new Error('some() argument "validators" should contain functions, found: ' + typeOf(validator) + '.');
	      }
	      return validator.apply(undefined, [props, propName, componentName].concat(rest));
	    }));
	
	    // fail only if all validators failed
	    if (errors.length === validators.length) {
	      var error = new Error('One of these validators must pass:');
	      error.message += '\n' + (0, _map3.default)(errors, function (err, i) {
	        return '[' + (i + 1) + ']: ' + err.message;
	      }).join('\n');
	      return error;
	    }
	  };
	};
	
	/**
	 * Ensure a validator passes only when a component has a given propsShape.
	 * @param {object} propsShape An object describing the prop shape.
	 * @param {function} validator A propType function.
	 */
	var givenProps = exports.givenProps = function givenProps(propsShape, validator) {
	  return function (props, propName, componentName) {
	    for (var _len3 = arguments.length, rest = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
	      rest[_key3 - 3] = arguments[_key3];
	    }
	
	    if (!(0, _isPlainObject3.default)(propsShape)) {
	      throw new Error(['Invalid argument supplied to givenProps, expected an object.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
	    }
	
	    if (typeof validator !== 'function') {
	      throw new Error(['Invalid argument supplied to givenProps, expected a function.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
	    }
	
	    var shouldValidate = (0, _keys3.default)(propsShape).every(function (key) {
	      var val = propsShape[key];
	      // require propShape validators to pass or prop values to match
	      return typeof val === 'function' ? !val.apply(undefined, [props, key, componentName].concat(rest)) : val === props[propName];
	    });
	
	    if (!shouldValidate) return;
	
	    var error = validator.apply(undefined, [props, propName, componentName].concat(rest));
	
	    if (error) {
	      // poor mans shallow pretty print, prevents JSON circular reference errors
	      var prettyProps = '{ ' + (0, _keys3.default)((0, _pick3.default)((0, _keys3.default)(propsShape), props)).map(function (key) {
	        var val = props[key];
	        var renderedValue = val;
	        if (typeof val === 'string') renderedValue = '"' + val + '"';else if (Array.isArray(val)) renderedValue = '[' + val.join(', ') + ']';else if ((0, _isObject3.default)(val)) renderedValue = '{...}';
	
	        return key + ': ' + renderedValue;
	      }).join(', ') + ' }';
	
	      error.message = 'Given props ' + prettyProps + ': ' + error.message;
	      return error;
	    }
	  };
	};
	
	/**
	 * Define prop dependencies by requiring other props.
	 * @param {string[]} requiredProps An array of required prop names.
	 */
	var demand = exports.demand = function demand(requiredProps) {
	  return function (props, propName, componentName) {
	    if (!Array.isArray(requiredProps)) {
	      throw new Error(['Invalid `requiredProps` argument supplied to require, expected an instance of array.'(_templateObject, propName, componentName)].join(''));
	    }
	
	    // skip if prop is undefined
	    if (props[propName] === undefined) return;
	
	    var missingRequired = requiredProps.filter(function (requiredProp) {
	      return props[requiredProp] === undefined;
	    });
	    if (missingRequired.length > 0) {
	      return new Error('`' + propName + '` prop in `' + componentName + '` requires props: `' + missingRequired.join('`, `') + '`.');
	    }
	  };
	};
	
	/**
	 * Ensure a component can render as a node passed as a prop value in place of children.
	 */
	var contentShorthand = exports.contentShorthand = function contentShorthand() {
	  return every([disallow(['children']), _react.PropTypes.node]).apply(undefined, arguments);
	};
	
	/**
	 * Item shorthand is a description of a component that can be a literal,
	 * a props object, or an element.
	 */
	var itemShorthand = exports.itemShorthand = function itemShorthand() {
	  return every([disallow(['children']), _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.object])]).apply(undefined, arguments);
	};
	
	/**
	 * Collection shorthand ensures a prop is an array of item shorthand.
	 */
	var collectionShorthand = exports.collectionShorthand = function collectionShorthand() {
	  return every([disallow(['children']), _react.PropTypes.arrayOf(itemShorthand)]).apply(undefined, arguments);
	};
	
	/**
	 * Show a deprecated warning for component props with a help message and optional validator.
	 * @param {string} help A help message to display with the deprecation warning.
	 * @param {function} [validator] A propType function.
	 */
	var deprecate = exports.deprecate = function deprecate(help, validator) {
	  return function (props, propName, componentName) {
	    for (var _len4 = arguments.length, args = Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
	      args[_key4 - 3] = arguments[_key4];
	    }
	
	    if (typeof help !== 'string') {
	      throw new Error(['Invalid `help` argument supplied to deprecate, expected a string.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
	    }
	
	    // skip if prop is undefined
	    if (props[propName] === undefined) return;
	
	    // deprecation error and help
	    var error = new Error('The `' + propName + '` prop in `' + componentName + '` is deprecated.');
	    if (help) error.message += ' ' + help;
	
	    // add optional validation error message
	    if (validator) {
	      if (typeof validator === 'function') {
	        var validationError = validator.apply(undefined, [props, propName, componentName].concat(args));
	        if (validationError) {
	          error.message = error.message + ' ' + validationError.message;
	        }
	      } else {
	        throw new Error(['Invalid argument supplied to deprecate, expected a function.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
	      }
	    }
	
	    return error;
	  };
	};

/***/ },
/* 747 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('isObject', __webpack_require__(536), __webpack_require__(782));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 748 */
/***/ function(module, exports, __webpack_require__) {

	var baseConvert = __webpack_require__(749),
	    util = __webpack_require__(752);
	
	/**
	 * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
	 * version with conversion `options` applied. If `name` is an object its methods
	 * will be converted.
	 *
	 * @param {string} name The name of the function to wrap.
	 * @param {Function} [func] The function to wrap.
	 * @param {Object} [options] The options object. See `baseConvert` for more details.
	 * @returns {Function|Object} Returns the converted function or object.
	 */
	function convert(name, func, options) {
	  return baseConvert(util, name, func, options);
	}
	
	module.exports = convert;


/***/ },
/* 749 */
/***/ function(module, exports, __webpack_require__) {

	var mapping = __webpack_require__(750),
	    mutateMap = mapping.mutate,
	    fallbackHolder = __webpack_require__(751);
	
	/**
	 * Creates a function, with an arity of `n`, that invokes `func` with the
	 * arguments it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} n The arity of the new function.
	 * @returns {Function} Returns the new function.
	 */
	function baseArity(func, n) {
	  return n == 2
	    ? function(a, b) { return func.apply(undefined, arguments); }
	    : function(a) { return func.apply(undefined, arguments); };
	}
	
	/**
	 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
	 * any additional arguments.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @param {number} n The arity cap.
	 * @returns {Function} Returns the new function.
	 */
	function baseAry(func, n) {
	  return n == 2
	    ? function(a, b) { return func(a, b); }
	    : function(a) { return func(a); };
	}
	
	/**
	 * Creates a clone of `array`.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the cloned array.
	 */
	function cloneArray(array) {
	  var length = array ? array.length : 0,
	      result = Array(length);
	
	  while (length--) {
	    result[length] = array[length];
	  }
	  return result;
	}
	
	/**
	 * Creates a function that clones a given object using the assignment `func`.
	 *
	 * @private
	 * @param {Function} func The assignment function.
	 * @returns {Function} Returns the new cloner function.
	 */
	function createCloner(func) {
	  return function(object) {
	    return func({}, object);
	  };
	}
	
	/**
	 * Creates a function that wraps `func` and uses `cloner` to clone the first
	 * argument it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} cloner The function to clone arguments.
	 * @returns {Function} Returns the new immutable function.
	 */
	function wrapImmutable(func, cloner) {
	  return function() {
	    var length = arguments.length;
	    if (!length) {
	      return;
	    }
	    var args = Array(length);
	    while (length--) {
	      args[length] = arguments[length];
	    }
	    var result = args[0] = cloner.apply(undefined, args);
	    func.apply(undefined, args);
	    return result;
	  };
	}
	
	/**
	 * The base implementation of `convert` which accepts a `util` object of methods
	 * required to perform conversions.
	 *
	 * @param {Object} util The util object.
	 * @param {string} name The name of the function to convert.
	 * @param {Function} func The function to convert.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
	 * @param {boolean} [options.curry=true] Specify currying.
	 * @param {boolean} [options.fixed=true] Specify fixed arity.
	 * @param {boolean} [options.immutable=true] Specify immutable operations.
	 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
	 * @returns {Function|Object} Returns the converted function or object.
	 */
	function baseConvert(util, name, func, options) {
	  var setPlaceholder,
	      isLib = typeof name == 'function',
	      isObj = name === Object(name);
	
	  if (isObj) {
	    options = func;
	    func = name;
	    name = undefined;
	  }
	  if (func == null) {
	    throw new TypeError;
	  }
	  options || (options = {});
	
	  var config = {
	    'cap': 'cap' in options ? options.cap : true,
	    'curry': 'curry' in options ? options.curry : true,
	    'fixed': 'fixed' in options ? options.fixed : true,
	    'immutable': 'immutable' in options ? options.immutable : true,
	    'rearg': 'rearg' in options ? options.rearg : true
	  };
	
	  var forceCurry = ('curry' in options) && options.curry,
	      forceFixed = ('fixed' in options) && options.fixed,
	      forceRearg = ('rearg' in options) && options.rearg,
	      placeholder = isLib ? func : fallbackHolder,
	      pristine = isLib ? func.runInContext() : undefined;
	
	  var helpers = isLib ? func : {
	    'ary': util.ary,
	    'assign': util.assign,
	    'clone': util.clone,
	    'curry': util.curry,
	    'forEach': util.forEach,
	    'isArray': util.isArray,
	    'isFunction': util.isFunction,
	    'iteratee': util.iteratee,
	    'keys': util.keys,
	    'rearg': util.rearg,
	    'spread': util.spread,
	    'toInteger': util.toInteger,
	    'toPath': util.toPath
	  };
	
	  var ary = helpers.ary,
	      assign = helpers.assign,
	      clone = helpers.clone,
	      curry = helpers.curry,
	      each = helpers.forEach,
	      isArray = helpers.isArray,
	      isFunction = helpers.isFunction,
	      keys = helpers.keys,
	      rearg = helpers.rearg,
	      spread = helpers.spread,
	      toInteger = helpers.toInteger,
	      toPath = helpers.toPath;
	
	  var aryMethodKeys = keys(mapping.aryMethod);
	
	  var wrappers = {
	    'castArray': function(castArray) {
	      return function() {
	        var value = arguments[0];
	        return isArray(value)
	          ? castArray(cloneArray(value))
	          : castArray.apply(undefined, arguments);
	      };
	    },
	    'iteratee': function(iteratee) {
	      return function() {
	        var func = arguments[0],
	            arity = arguments[1],
	            result = iteratee(func, arity),
	            length = result.length;
	
	        if (config.cap && typeof arity == 'number') {
	          arity = arity > 2 ? (arity - 2) : 1;
	          return (length && length <= arity) ? result : baseAry(result, arity);
	        }
	        return result;
	      };
	    },
	    'mixin': function(mixin) {
	      return function(source) {
	        var func = this;
	        if (!isFunction(func)) {
	          return mixin(func, Object(source));
	        }
	        var pairs = [];
	        each(keys(source), function(key) {
	          if (isFunction(source[key])) {
	            pairs.push([key, func.prototype[key]]);
	          }
	        });
	
	        mixin(func, Object(source));
	
	        each(pairs, function(pair) {
	          var value = pair[1];
	          if (isFunction(value)) {
	            func.prototype[pair[0]] = value;
	          } else {
	            delete func.prototype[pair[0]];
	          }
	        });
	        return func;
	      };
	    },
	    'nthArg': function(nthArg) {
	      return function(n) {
	        var arity = n < 0 ? 1 : (toInteger(n) + 1);
	        return curry(nthArg(n), arity);
	      };
	    },
	    'rearg': function(rearg) {
	      return function(func, indexes) {
	        var arity = indexes ? indexes.length : 0;
	        return curry(rearg(func, indexes), arity);
	      };
	    },
	    'runInContext': function(runInContext) {
	      return function(context) {
	        return baseConvert(util, runInContext(context), options);
	      };
	    }
	  };
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Casts `func` to a function with an arity capped iteratee if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @returns {Function} Returns the cast function.
	   */
	  function castCap(name, func) {
	    if (config.cap) {
	      var indexes = mapping.iterateeRearg[name];
	      if (indexes) {
	        return iterateeRearg(func, indexes);
	      }
	      var n = !isLib && mapping.iterateeAry[name];
	      if (n) {
	        return iterateeAry(func, n);
	      }
	    }
	    return func;
	  }
	
	  /**
	   * Casts `func` to a curried function if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @param {number} n The arity of `func`.
	   * @returns {Function} Returns the cast function.
	   */
	  function castCurry(name, func, n) {
	    return (forceCurry || (config.curry && n > 1))
	      ? curry(func, n)
	      : func;
	  }
	
	  /**
	   * Casts `func` to a fixed arity function if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @param {number} n The arity cap.
	   * @returns {Function} Returns the cast function.
	   */
	  function castFixed(name, func, n) {
	    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
	      var data = mapping.methodSpread[name],
	          start = data && data.start;
	
	      return start  === undefined ? ary(func, n) : spread(func, start);
	    }
	    return func;
	  }
	
	  /**
	   * Casts `func` to an rearged function if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @param {number} n The arity of `func`.
	   * @returns {Function} Returns the cast function.
	   */
	  function castRearg(name, func, n) {
	    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))
	      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])
	      : func;
	  }
	
	  /**
	   * Creates a clone of `object` by `path`.
	   *
	   * @private
	   * @param {Object} object The object to clone.
	   * @param {Array|string} path The path to clone by.
	   * @returns {Object} Returns the cloned object.
	   */
	  function cloneByPath(object, path) {
	    path = toPath(path);
	
	    var index = -1,
	        length = path.length,
	        lastIndex = length - 1,
	        result = clone(Object(object)),
	        nested = result;
	
	    while (nested != null && ++index < length) {
	      var key = path[index],
	          value = nested[key];
	
	      if (value != null) {
	        nested[path[index]] = clone(index == lastIndex ? value : Object(value));
	      }
	      nested = nested[key];
	    }
	    return result;
	  }
	
	  /**
	   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
	   * version with conversion `options` applied.
	   *
	   * @param {Object} [options] The options object. See `baseConvert` for more details.
	   * @returns {Function} Returns the converted `lodash`.
	   */
	  function convertLib(options) {
	    return _.runInContext.convert(options)(undefined);
	  }
	
	  /**
	   * Create a converter function for `func` of `name`.
	   *
	   * @param {string} name The name of the function to convert.
	   * @param {Function} func The function to convert.
	   * @returns {Function} Returns the new converter function.
	   */
	  function createConverter(name, func) {
	    var oldOptions = options;
	    return function(options) {
	      var newUtil = isLib ? pristine : helpers,
	          newFunc = isLib ? pristine[name] : func,
	          newOptions = assign(assign({}, oldOptions), options);
	
	      return baseConvert(newUtil, name, newFunc, newOptions);
	    };
	  }
	
	  /**
	   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
	   * arguments, ignoring any additional arguments.
	   *
	   * @private
	   * @param {Function} func The function to cap iteratee arguments for.
	   * @param {number} n The arity cap.
	   * @returns {Function} Returns the new function.
	   */
	  function iterateeAry(func, n) {
	    return overArg(func, function(func) {
	      return typeof func == 'function' ? baseAry(func, n) : func;
	    });
	  }
	
	  /**
	   * Creates a function that wraps `func` to invoke its iteratee with arguments
	   * arranged according to the specified `indexes` where the argument value at
	   * the first index is provided as the first argument, the argument value at
	   * the second index is provided as the second argument, and so on.
	   *
	   * @private
	   * @param {Function} func The function to rearrange iteratee arguments for.
	   * @param {number[]} indexes The arranged argument indexes.
	   * @returns {Function} Returns the new function.
	   */
	  function iterateeRearg(func, indexes) {
	    return overArg(func, function(func) {
	      var n = indexes.length;
	      return baseArity(rearg(baseAry(func, n), indexes), n);
	    });
	  }
	
	  /**
	   * Creates a function that invokes `func` with its first argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */
	  function overArg(func, transform) {
	    return function() {
	      var length = arguments.length;
	      if (!length) {
	        return func();
	      }
	      var args = Array(length);
	      while (length--) {
	        args[length] = arguments[length];
	      }
	      var index = config.rearg ? 0 : (length - 1);
	      args[index] = transform(args[index]);
	      return func.apply(undefined, args);
	    };
	  }
	
	  /**
	   * Creates a function that wraps `func` and applys the conversions
	   * rules by `name`.
	   *
	   * @private
	   * @param {string} name The name of the function to wrap.
	   * @param {Function} func The function to wrap.
	   * @returns {Function} Returns the converted function.
	   */
	  function wrap(name, func) {
	    name = mapping.aliasToReal[name] || name;
	
	    var result,
	        wrapped = func,
	        wrapper = wrappers[name];
	
	    if (wrapper) {
	      wrapped = wrapper(func);
	    }
	    else if (config.immutable) {
	      if (mutateMap.array[name]) {
	        wrapped = wrapImmutable(func, cloneArray);
	      }
	      else if (mutateMap.object[name]) {
	        wrapped = wrapImmutable(func, createCloner(func));
	      }
	      else if (mutateMap.set[name]) {
	        wrapped = wrapImmutable(func, cloneByPath);
	      }
	    }
	    each(aryMethodKeys, function(aryKey) {
	      each(mapping.aryMethod[aryKey], function(otherName) {
	        if (name == otherName) {
	          var spreadData = mapping.methodSpread[name],
	              afterRearg = spreadData && spreadData.afterRearg;
	
	          result = afterRearg
	            ? castFixed(name, castRearg(name, wrapped, aryKey), aryKey)
	            : castRearg(name, castFixed(name, wrapped, aryKey), aryKey);
	
	          result = castCap(name, result);
	          result = castCurry(name, result, aryKey);
	          return false;
	        }
	      });
	      return !result;
	    });
	
	    result || (result = wrapped);
	    if (result == func) {
	      result = forceCurry ? curry(result, 1) : function() {
	        return func.apply(this, arguments);
	      };
	    }
	    result.convert = createConverter(name, func);
	    if (mapping.placeholder[name]) {
	      setPlaceholder = true;
	      result.placeholder = func.placeholder = placeholder;
	    }
	    return result;
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  if (!isObj) {
	    return wrap(name, func);
	  }
	  var _ = func;
	
	  // Convert methods by ary cap.
	  var pairs = [];
	  each(aryMethodKeys, function(aryKey) {
	    each(mapping.aryMethod[aryKey], function(key) {
	      var func = _[mapping.remap[key] || key];
	      if (func) {
	        pairs.push([key, wrap(key, func)]);
	      }
	    });
	  });
	
	  // Convert remaining methods.
	  each(keys(_), function(key) {
	    var func = _[key];
	    if (typeof func == 'function') {
	      var length = pairs.length;
	      while (length--) {
	        if (pairs[length][0] == key) {
	          return;
	        }
	      }
	      func.convert = createConverter(key, func);
	      pairs.push([key, func]);
	    }
	  });
	
	  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
	  each(pairs, function(pair) {
	    _[pair[0]] = pair[1];
	  });
	
	  _.convert = convertLib;
	  if (setPlaceholder) {
	    _.placeholder = placeholder;
	  }
	  // Assign aliases.
	  each(keys(_), function(key) {
	    each(mapping.realToAlias[key] || [], function(alias) {
	      _[alias] = _[key];
	    });
	  });
	
	  return _;
	}
	
	module.exports = baseConvert;


/***/ },
/* 750 */
/***/ function(module, exports) {

	/** Used to map aliases to their real names. */
	exports.aliasToReal = {
	
	  // Lodash aliases.
	  'each': 'forEach',
	  'eachRight': 'forEachRight',
	  'entries': 'toPairs',
	  'entriesIn': 'toPairsIn',
	  'extend': 'assignIn',
	  'extendAll': 'assignInAll',
	  'extendAllWith': 'assignInAllWith',
	  'extendWith': 'assignInWith',
	  'first': 'head',
	
	  // Methods that are curried variants of others.
	  'conforms': 'conformsTo',
	  'matches': 'isMatch',
	  'property': 'get',
	
	  // Ramda aliases.
	  '__': 'placeholder',
	  'F': 'stubFalse',
	  'T': 'stubTrue',
	  'all': 'every',
	  'allPass': 'overEvery',
	  'always': 'constant',
	  'any': 'some',
	  'anyPass': 'overSome',
	  'apply': 'spread',
	  'assoc': 'set',
	  'assocPath': 'set',
	  'complement': 'negate',
	  'compose': 'flowRight',
	  'contains': 'includes',
	  'dissoc': 'unset',
	  'dissocPath': 'unset',
	  'dropLast': 'dropRight',
	  'dropLastWhile': 'dropRightWhile',
	  'equals': 'isEqual',
	  'identical': 'eq',
	  'indexBy': 'keyBy',
	  'init': 'initial',
	  'invertObj': 'invert',
	  'juxt': 'over',
	  'omitAll': 'omit',
	  'nAry': 'ary',
	  'path': 'get',
	  'pathEq': 'matchesProperty',
	  'pathOr': 'getOr',
	  'paths': 'at',
	  'pickAll': 'pick',
	  'pipe': 'flow',
	  'pluck': 'map',
	  'prop': 'get',
	  'propEq': 'matchesProperty',
	  'propOr': 'getOr',
	  'props': 'at',
	  'symmetricDifference': 'xor',
	  'symmetricDifferenceBy': 'xorBy',
	  'symmetricDifferenceWith': 'xorWith',
	  'takeLast': 'takeRight',
	  'takeLastWhile': 'takeRightWhile',
	  'unapply': 'rest',
	  'unnest': 'flatten',
	  'useWith': 'overArgs',
	  'where': 'conformsTo',
	  'whereEq': 'isMatch',
	  'zipObj': 'zipObject'
	};
	
	/** Used to map ary to method names. */
	exports.aryMethod = {
	  '1': [
	    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',
	    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',
	    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',
	    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',
	    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',
	    'uniqueId', 'words', 'zipAll'
	  ],
	  '2': [
	    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',
	    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',
	    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',
	    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',
	    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',
	    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',
	    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',
	    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',
	    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',
	    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',
	    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',
	    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',
	    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',
	    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',
	    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',
	    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',
	    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',
	    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',
	    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',
	    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',
	    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',
	    'zipObjectDeep'
	  ],
	  '3': [
	    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',
	    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',
	    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',
	    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',
	    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',
	    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',
	    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',
	    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',
	    'xorWith', 'zipWith'
	  ],
	  '4': [
	    'fill', 'setWith', 'updateWith'
	  ]
	};
	
	/** Used to map ary to rearg configs. */
	exports.aryRearg = {
	  '2': [1, 0],
	  '3': [2, 0, 1],
	  '4': [3, 2, 0, 1]
	};
	
	/** Used to map method names to their iteratee ary. */
	exports.iterateeAry = {
	  'dropRightWhile': 1,
	  'dropWhile': 1,
	  'every': 1,
	  'filter': 1,
	  'find': 1,
	  'findFrom': 1,
	  'findIndex': 1,
	  'findIndexFrom': 1,
	  'findKey': 1,
	  'findLast': 1,
	  'findLastFrom': 1,
	  'findLastIndex': 1,
	  'findLastIndexFrom': 1,
	  'findLastKey': 1,
	  'flatMap': 1,
	  'flatMapDeep': 1,
	  'flatMapDepth': 1,
	  'forEach': 1,
	  'forEachRight': 1,
	  'forIn': 1,
	  'forInRight': 1,
	  'forOwn': 1,
	  'forOwnRight': 1,
	  'map': 1,
	  'mapKeys': 1,
	  'mapValues': 1,
	  'partition': 1,
	  'reduce': 2,
	  'reduceRight': 2,
	  'reject': 1,
	  'remove': 1,
	  'some': 1,
	  'takeRightWhile': 1,
	  'takeWhile': 1,
	  'times': 1,
	  'transform': 2
	};
	
	/** Used to map method names to iteratee rearg configs. */
	exports.iterateeRearg = {
	  'mapKeys': [1]
	};
	
	/** Used to map method names to rearg configs. */
	exports.methodRearg = {
	  'assignInAllWith': [1, 2, 0],
	  'assignInWith': [1, 2, 0],
	  'assignAllWith': [1, 2, 0],
	  'assignWith': [1, 2, 0],
	  'differenceBy': [1, 2, 0],
	  'differenceWith': [1, 2, 0],
	  'getOr': [2, 1, 0],
	  'intersectionBy': [1, 2, 0],
	  'intersectionWith': [1, 2, 0],
	  'isEqualWith': [1, 2, 0],
	  'isMatchWith': [2, 1, 0],
	  'mergeAllWith': [1, 2, 0],
	  'mergeWith': [1, 2, 0],
	  'padChars': [2, 1, 0],
	  'padCharsEnd': [2, 1, 0],
	  'padCharsStart': [2, 1, 0],
	  'pullAllBy': [2, 1, 0],
	  'pullAllWith': [2, 1, 0],
	  'rangeStep': [1, 2, 0],
	  'rangeStepRight': [1, 2, 0],
	  'setWith': [3, 1, 2, 0],
	  'sortedIndexBy': [2, 1, 0],
	  'sortedLastIndexBy': [2, 1, 0],
	  'unionBy': [1, 2, 0],
	  'unionWith': [1, 2, 0],
	  'updateWith': [3, 1, 2, 0],
	  'xorBy': [1, 2, 0],
	  'xorWith': [1, 2, 0],
	  'zipWith': [1, 2, 0]
	};
	
	/** Used to map method names to spread configs. */
	exports.methodSpread = {
	  'assignAll': { 'start': 0 },
	  'assignAllWith': { 'afterRearg': true, 'start': 1 },
	  'assignInAll': { 'start': 0 },
	  'assignInAllWith': { 'afterRearg': true, 'start': 1 },
	  'defaultsAll': { 'start': 0 },
	  'defaultsDeepAll': { 'start': 0 },
	  'invokeArgs': { 'start': 2 },
	  'invokeArgsMap': { 'start': 2 },
	  'mergeAll': { 'start': 0 },
	  'mergeAllWith': { 'afterRearg': true, 'start': 1 },
	  'partial': { 'start': 1 },
	  'partialRight': { 'start': 1 },
	  'without': { 'start': 1 },
	  'zipAll': { 'start': 0 }
	};
	
	/** Used to identify methods which mutate arrays or objects. */
	exports.mutate = {
	  'array': {
	    'fill': true,
	    'pull': true,
	    'pullAll': true,
	    'pullAllBy': true,
	    'pullAllWith': true,
	    'pullAt': true,
	    'remove': true,
	    'reverse': true
	  },
	  'object': {
	    'assign': true,
	    'assignAll': true,
	    'assignAllWith': true,
	    'assignIn': true,
	    'assignInAll': true,
	    'assignInAllWith': true,
	    'assignInWith': true,
	    'assignWith': true,
	    'defaults': true,
	    'defaultsAll': true,
	    'defaultsDeep': true,
	    'defaultsDeepAll': true,
	    'merge': true,
	    'mergeAll': true,
	    'mergeAllWith': true,
	    'mergeWith': true,
	  },
	  'set': {
	    'set': true,
	    'setWith': true,
	    'unset': true,
	    'update': true,
	    'updateWith': true
	  }
	};
	
	/** Used to track methods with placeholder support */
	exports.placeholder = {
	  'bind': true,
	  'bindKey': true,
	  'curry': true,
	  'curryRight': true,
	  'partial': true,
	  'partialRight': true
	};
	
	/** Used to map real names to their aliases. */
	exports.realToAlias = (function() {
	  var hasOwnProperty = Object.prototype.hasOwnProperty,
	      object = exports.aliasToReal,
	      result = {};
	
	  for (var key in object) {
	    var value = object[key];
	    if (hasOwnProperty.call(result, value)) {
	      result[value].push(key);
	    } else {
	      result[value] = [key];
	    }
	  }
	  return result;
	}());
	
	/** Used to map method names to other names. */
	exports.remap = {
	  'assignAll': 'assign',
	  'assignAllWith': 'assignWith',
	  'assignInAll': 'assignIn',
	  'assignInAllWith': 'assignInWith',
	  'curryN': 'curry',
	  'curryRightN': 'curryRight',
	  'defaultsAll': 'defaults',
	  'defaultsDeepAll': 'defaultsDeep',
	  'findFrom': 'find',
	  'findIndexFrom': 'findIndex',
	  'findLastFrom': 'findLast',
	  'findLastIndexFrom': 'findLastIndex',
	  'getOr': 'get',
	  'includesFrom': 'includes',
	  'indexOfFrom': 'indexOf',
	  'invokeArgs': 'invoke',
	  'invokeArgsMap': 'invokeMap',
	  'lastIndexOfFrom': 'lastIndexOf',
	  'mergeAll': 'merge',
	  'mergeAllWith': 'mergeWith',
	  'padChars': 'pad',
	  'padCharsEnd': 'padEnd',
	  'padCharsStart': 'padStart',
	  'propertyOf': 'get',
	  'rangeStep': 'range',
	  'rangeStepRight': 'rangeRight',
	  'restFrom': 'rest',
	  'spreadFrom': 'spread',
	  'trimChars': 'trim',
	  'trimCharsEnd': 'trimEnd',
	  'trimCharsStart': 'trimStart',
	  'zipAll': 'zip'
	};
	
	/** Used to track methods that skip fixing their arity. */
	exports.skipFixed = {
	  'castArray': true,
	  'flow': true,
	  'flowRight': true,
	  'iteratee': true,
	  'mixin': true,
	  'rearg': true,
	  'runInContext': true
	};
	
	/** Used to track methods that skip rearranging arguments. */
	exports.skipRearg = {
	  'add': true,
	  'assign': true,
	  'assignIn': true,
	  'bind': true,
	  'bindKey': true,
	  'concat': true,
	  'difference': true,
	  'divide': true,
	  'eq': true,
	  'gt': true,
	  'gte': true,
	  'isEqual': true,
	  'lt': true,
	  'lte': true,
	  'matchesProperty': true,
	  'merge': true,
	  'multiply': true,
	  'overArgs': true,
	  'partial': true,
	  'partialRight': true,
	  'propertyOf': true,
	  'random': true,
	  'range': true,
	  'rangeRight': true,
	  'subtract': true,
	  'zip': true,
	  'zipObject': true,
	  'zipObjectDeep': true
	};


/***/ },
/* 751 */
/***/ function(module, exports) {

	/**
	 * The default argument placeholder value for methods.
	 *
	 * @type {Object}
	 */
	module.exports = {};


/***/ },
/* 752 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  'ary': __webpack_require__(753),
	  'assign': __webpack_require__(754),
	  'clone': __webpack_require__(757),
	  'curry': __webpack_require__(775),
	  'forEach': __webpack_require__(680),
	  'isArray': __webpack_require__(524),
	  'isFunction': __webpack_require__(535),
	  'iteratee': __webpack_require__(776),
	  'keys': __webpack_require__(636),
	  'rearg': __webpack_require__(777),
	  'spread': __webpack_require__(778),
	  'toInteger': __webpack_require__(723),
	  'toPath': __webpack_require__(781)
	};


/***/ },
/* 753 */
/***/ function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(691);
	
	/** Used to compose bitmasks for function metadata. */
	var ARY_FLAG = 128;
	
	/**
	 * Creates a function that invokes `func`, with up to `n` arguments,
	 * ignoring any additional arguments.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} func The function to cap arguments for.
	 * @param {number} [n=func.length] The arity cap.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Function} Returns the new capped function.
	 * @example
	 *
	 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	 * // => [6, 8, 10]
	 */
	function ary(func, n, guard) {
	  n = guard ? undefined : n;
	  n = (func && n == null) ? func.length : n;
	  return createWrap(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
	}
	
	module.exports = ary;


/***/ },
/* 754 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(755),
	    keys = __webpack_require__(635);
	
	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 755 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(756),
	    baseAssignValue = __webpack_require__(591);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 756 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(591),
	    eq = __webpack_require__(551);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 757 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(758);
	
	/**
	 * Creates a shallow clone of `value`.
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	 * and supports cloning arrays, array buffers, booleans, date objects, maps,
	 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	 * arrays. The own enumerable properties of `arguments` objects are cloned
	 * as plain objects. An empty object is returned for uncloneable values such
	 * as error objects, functions, DOM nodes, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @returns {*} Returns the cloned value.
	 * @see _.cloneDeep
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var shallow = _.clone(objects);
	 * console.log(shallow[0] === objects[0]);
	 * // => true
	 */
	function clone(value) {
	  return baseClone(value, false, true);
	}
	
	module.exports = clone;


/***/ },
/* 758 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(642),
	    arrayEach = __webpack_require__(680),
	    assignValue = __webpack_require__(756),
	    baseAssign = __webpack_require__(754),
	    cloneBuffer = __webpack_require__(759),
	    copyArray = __webpack_require__(712),
	    copySymbols = __webpack_require__(760),
	    getAllKeys = __webpack_require__(761),
	    getTag = __webpack_require__(657),
	    initCloneArray = __webpack_require__(762),
	    initCloneByTag = __webpack_require__(763),
	    initCloneObject = __webpack_require__(774),
	    isArray = __webpack_require__(524),
	    isBuffer = __webpack_require__(615),
	    isObject = __webpack_require__(536),
	    keys = __webpack_require__(635);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;
	
	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);
	
	  var props = isArr ? undefined : (isFull ? getAllKeys : keys)(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}
	
	module.exports = baseClone;


/***/ },
/* 759 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(539);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
	
	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	
	  buffer.copy(result);
	  return result;
	}
	
	module.exports = cloneBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(260)(module)))

/***/ },
/* 760 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(755),
	    getSymbols = __webpack_require__(610);
	
	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}
	
	module.exports = copySymbols;


/***/ },
/* 761 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(606),
	    getSymbols = __webpack_require__(610),
	    keys = __webpack_require__(635);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ },
/* 762 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);
	
	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	module.exports = initCloneArray;


/***/ },
/* 763 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(764),
	    cloneDataView = __webpack_require__(765),
	    cloneMap = __webpack_require__(766),
	    cloneRegExp = __webpack_require__(769),
	    cloneSet = __webpack_require__(770),
	    cloneSymbol = __webpack_require__(772),
	    cloneTypedArray = __webpack_require__(773);
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case dataViewTag:
	      return cloneDataView(object, isDeep);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);
	
	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      return cloneRegExp(object);
	
	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);
	
	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}
	
	module.exports = initCloneByTag;


/***/ },
/* 764 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(653);
	
	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}
	
	module.exports = cloneArrayBuffer;


/***/ },
/* 765 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(764);
	
	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	
	module.exports = cloneDataView;


/***/ },
/* 766 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(767),
	    arrayReduce = __webpack_require__(768),
	    mapToArray = __webpack_require__(654);
	
	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}
	
	module.exports = cloneMap;


/***/ },
/* 767 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}
	
	module.exports = addMapEntry;


/***/ },
/* 768 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	module.exports = arrayReduce;


/***/ },
/* 769 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}
	
	module.exports = cloneRegExp;


/***/ },
/* 770 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(771),
	    arrayReduce = __webpack_require__(768),
	    setToArray = __webpack_require__(655);
	
	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}
	
	module.exports = cloneSet;


/***/ },
/* 771 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}
	
	module.exports = addSetEntry;


/***/ },
/* 772 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(564);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	
	module.exports = cloneSymbol;


/***/ },
/* 773 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(764);
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	
	module.exports = cloneTypedArray;


/***/ },
/* 774 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(682),
	    getPrototype = __webpack_require__(608),
	    isPrototype = __webpack_require__(621);
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}
	
	module.exports = initCloneObject;


/***/ },
/* 775 */
/***/ function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(691);
	
	/** Used to compose bitmasks for function metadata. */
	var CURRY_FLAG = 8;
	
	/**
	 * Creates a function that accepts arguments of `func` and either invokes
	 * `func` returning its result, if at least `arity` number of arguments have
	 * been provided, or returns a function that accepts the remaining `func`
	 * arguments, and so on. The arity of `func` may be specified if `func.length`
	 * is not sufficient.
	 *
	 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	 * may be used as a placeholder for provided arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of curried functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Function
	 * @param {Function} func The function to curry.
	 * @param {number} [arity=func.length] The arity of `func`.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Function} Returns the new curried function.
	 * @example
	 *
	 * var abc = function(a, b, c) {
	 *   return [a, b, c];
	 * };
	 *
	 * var curried = _.curry(abc);
	 *
	 * curried(1)(2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2, 3);
	 * // => [1, 2, 3]
	 *
	 * // Curried with placeholders.
	 * curried(1)(_, 3)(2);
	 * // => [1, 2, 3]
	 */
	function curry(func, arity, guard) {
	  arity = guard ? undefined : arity;
	  var result = createWrap(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	  result.placeholder = curry.placeholder;
	  return result;
	}
	
	// Assign default placeholders.
	curry.placeholder = {};
	
	module.exports = curry;


/***/ },
/* 776 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(758),
	    baseIteratee = __webpack_require__(639);
	
	/**
	 * Creates a function that invokes `func` with the arguments of the created
	 * function. If `func` is a property name, the created function returns the
	 * property value for a given element. If `func` is an array or object, the
	 * created function returns `true` for elements that contain the equivalent
	 * source properties, otherwise it returns `false`.
	 *
	 * @static
	 * @since 4.0.0
	 * @memberOf _
	 * @category Util
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @returns {Function} Returns the callback.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': true },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.filter(users, _.iteratee(['user', 'fred']));
	 * // => [{ 'user': 'fred', 'age': 40 }]
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, _.iteratee('user'));
	 * // => ['barney', 'fred']
	 *
	 * // Create custom iteratee shorthands.
	 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	 *     return func.test(string);
	 *   };
	 * });
	 *
	 * _.filter(['abc', 'def'], /ef/);
	 * // => ['def']
	 */
	function iteratee(func) {
	  return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
	}
	
	module.exports = iteratee;


/***/ },
/* 777 */
/***/ function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(691),
	    flatRest = __webpack_require__(593);
	
	/** Used to compose bitmasks for function metadata. */
	var REARG_FLAG = 256;
	
	/**
	 * Creates a function that invokes `func` with arguments arranged according
	 * to the specified `indexes` where the argument value at the first index is
	 * provided as the first argument, the argument value at the second index is
	 * provided as the second argument, and so on.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} func The function to rearrange arguments for.
	 * @param {...(number|number[])} indexes The arranged argument indexes.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var rearged = _.rearg(function(a, b, c) {
	 *   return [a, b, c];
	 * }, [2, 0, 1]);
	 *
	 * rearged('b', 'c', 'a')
	 * // => ['a', 'b', 'c']
	 */
	var rearg = flatRest(function(func, indexes) {
	  return createWrap(func, REARG_FLAG, undefined, undefined, undefined, indexes);
	});
	
	module.exports = rearg;


/***/ },
/* 778 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(599),
	    arrayPush = __webpack_require__(596),
	    baseRest = __webpack_require__(625),
	    castSlice = __webpack_require__(779),
	    toInteger = __webpack_require__(723);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * create function and an array of arguments much like
	 * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
	 *
	 * **Note:** This method is based on the
	 * [spread operator](https://mdn.io/spread_operator).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.2.0
	 * @category Function
	 * @param {Function} func The function to spread arguments over.
	 * @param {number} [start=0] The start position of the spread.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.spread(function(who, what) {
	 *   return who + ' says ' + what;
	 * });
	 *
	 * say(['fred', 'hello']);
	 * // => 'fred says hello'
	 *
	 * var numbers = Promise.all([
	 *   Promise.resolve(40),
	 *   Promise.resolve(36)
	 * ]);
	 *
	 * numbers.then(_.spread(function(x, y) {
	 *   return x + y;
	 * }));
	 * // => a Promise of 76
	 */
	function spread(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = start === undefined ? 0 : nativeMax(toInteger(start), 0);
	  return baseRest(function(args) {
	    var array = args[start],
	        otherArgs = castSlice(args, 0, start);
	
	    if (array) {
	      arrayPush(otherArgs, array);
	    }
	    return apply(func, this, otherArgs);
	  });
	}
	
	module.exports = spread;


/***/ },
/* 779 */
/***/ function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(780);
	
	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}
	
	module.exports = castSlice;


/***/ },
/* 780 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 781 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(565),
	    copyArray = __webpack_require__(712),
	    isArray = __webpack_require__(524),
	    isSymbol = __webpack_require__(566),
	    stringToPath = __webpack_require__(525),
	    toKey = __webpack_require__(573);
	
	/**
	 * Converts `value` to a property path array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Util
	 * @param {*} value The value to convert.
	 * @returns {Array} Returns the new property path array.
	 * @example
	 *
	 * _.toPath('a.b.c');
	 * // => ['a', 'b', 'c']
	 *
	 * _.toPath('a[0].b.c');
	 * // => ['a', '0', 'b', 'c']
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return arrayMap(value, toKey);
	  }
	  return isSymbol(value) ? [value] : copyArray(stringToPath(value));
	}
	
	module.exports = toPath;


/***/ },
/* 782 */
/***/ function(module, exports) {

	module.exports = {
	  'cap': false,
	  'curry': false,
	  'fixed': false,
	  'immutable': false,
	  'rearg': false
	};


/***/ },
/* 783 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('pick', __webpack_require__(627));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 784 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('keys', __webpack_require__(635), __webpack_require__(782));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 785 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('isPlainObject', __webpack_require__(728), __webpack_require__(782));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 786 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('isFunction', __webpack_require__(535), __webpack_require__(782));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 787 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('compact', __webpack_require__(788), __webpack_require__(782));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 788 */
/***/ function(module, exports) {

	/**
	 * Creates an array with all falsey values removed. The values `false`, `null`,
	 * `0`, `""`, `undefined`, and `NaN` are falsey.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to compact.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.compact([0, 1, false, 2, '', 3]);
	 * // => [1, 2, 3]
	 */
	function compact(array) {
	  var index = -1,
	      length = array ? array.length : 0,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (value) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = compact;


/***/ },
/* 789 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('map', __webpack_require__(790));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 790 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(565),
	    baseIteratee = __webpack_require__(639),
	    baseMap = __webpack_require__(791),
	    isArray = __webpack_require__(524);
	
	/**
	 * Creates an array of values by running each element in `collection` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  return func(collection, baseIteratee(iteratee, 3));
	}
	
	module.exports = map;


/***/ },
/* 791 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(631),
	    isArrayLike = __webpack_require__(623);
	
	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];
	
	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}
	
	module.exports = baseMap;


/***/ },
/* 792 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('flow', __webpack_require__(793));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 793 */
/***/ function(module, exports, __webpack_require__) {

	var createFlow = __webpack_require__(794);
	
	/**
	 * Creates a function that returns the result of invoking the given functions
	 * with the `this` binding of the created function, where each successive
	 * invocation is supplied the return value of the previous.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Util
	 * @param {...(Function|Function[])} [funcs] The functions to invoke.
	 * @returns {Function} Returns the new composite function.
	 * @see _.flowRight
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var addSquare = _.flow([_.add, square]);
	 * addSquare(1, 2);
	 * // => 9
	 */
	var flow = createFlow();
	
	module.exports = flow;


/***/ },
/* 794 */
/***/ function(module, exports, __webpack_require__) {

	var LodashWrapper = __webpack_require__(710),
	    flatRest = __webpack_require__(593),
	    getData = __webpack_require__(705),
	    getFuncName = __webpack_require__(707),
	    isArray = __webpack_require__(524),
	    isLaziable = __webpack_require__(702);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used to compose bitmasks for function metadata. */
	var CURRY_FLAG = 8,
	    PARTIAL_FLAG = 32,
	    ARY_FLAG = 128,
	    REARG_FLAG = 256;
	
	/**
	 * Creates a `_.flow` or `_.flowRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new flow function.
	 */
	function createFlow(fromRight) {
	  return flatRest(function(funcs) {
	    var length = funcs.length,
	        index = length,
	        prereq = LodashWrapper.prototype.thru;
	
	    if (fromRight) {
	      funcs.reverse();
	    }
	    while (index--) {
	      var func = funcs[index];
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
	        var wrapper = new LodashWrapper([], true);
	      }
	    }
	    index = wrapper ? index : length;
	    while (++index < length) {
	      func = funcs[index];
	
	      var funcName = getFuncName(func),
	          data = funcName == 'wrapper' ? getData(func) : undefined;
	
	      if (data && isLaziable(data[0]) &&
	            data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) &&
	            !data[4].length && data[9] == 1
	          ) {
	        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	      } else {
	        wrapper = (func.length == 1 && isLaziable(func))
	          ? wrapper[funcName]()
	          : wrapper.thru(func);
	      }
	    }
	    return function() {
	      var args = arguments,
	          value = args[0];
	
	      if (wrapper && args.length == 1 &&
	          isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	        return wrapper.plant(value).value();
	      }
	      var index = 0,
	          result = length ? funcs[index].apply(this, args) : value;
	
	      while (++index < length) {
	        result = funcs[index].call(this, result);
	      }
	      return result;
	    };
	  });
	}
	
	module.exports = createFlow;


/***/ },
/* 795 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('isNil', __webpack_require__(796), __webpack_require__(782));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 796 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is `null` or `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	 * @example
	 *
	 * _.isNil(null);
	 * // => true
	 *
	 * _.isNil(void 0);
	 * // => true
	 *
	 * _.isNil(NaN);
	 * // => false
	 */
	function isNil(value) {
	  return value == null;
	}
	
	module.exports = isNil;


/***/ },
/* 797 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isPrivate = exports.isChild = exports.isParent = exports.isModule = exports.isView = exports.isElement = exports.isCollection = exports.isAddon = exports.isType = exports.isMeta = exports.TYPES = undefined;
	
	var _startsWith2 = __webpack_require__(798);
	
	var _startsWith3 = _interopRequireDefault(_startsWith2);
	
	var _has2 = __webpack_require__(801);
	
	var _has3 = _interopRequireDefault(_has2);
	
	var _eq2 = __webpack_require__(802);
	
	var _eq3 = _interopRequireDefault(_eq2);
	
	var _flow2 = __webpack_require__(792);
	
	var _flow3 = _interopRequireDefault(_flow2);
	
	var _curry2 = __webpack_require__(803);
	
	var _curry3 = _interopRequireDefault(_curry2);
	
	var _get2 = __webpack_require__(804);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _includes2 = __webpack_require__(805);
	
	var _includes3 = _interopRequireDefault(_includes2);
	
	var _values2 = __webpack_require__(809);
	
	var _values3 = _interopRequireDefault(_values2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TYPES = exports.TYPES = {
	  ADDON: 'addon',
	  COLLECTION: 'collection',
	  ELEMENT: 'element',
	  VIEW: 'view',
	  MODULE: 'module'
	};
	
	var TYPE_VALUES = (0, _values3.default)(TYPES);
	
	/**
	 * Determine if an object qualifies as a META object.
	 * It must have the required keys and valid values.
	 * @private
	 * @param {Object} _meta A proposed component _meta object.
	 * @returns {Boolean}
	 */
	var isMeta = exports.isMeta = function isMeta(_meta) {
	  return (0, _includes3.default)((0, _get3.default)('type', _meta), TYPE_VALUES);
	};
	
	/**
	 * Extract a component's _meta object and optional key.
	 * Handles literal _meta objects, classes with _meta, objects with _meta
	 * @private
	 * @param {function|object} metaArg A class, a component instance, or meta object..
	 * @returns {object|string|undefined}
	 */
	var getMeta = function getMeta(metaArg) {
	  // literal
	  if (isMeta(metaArg)) return metaArg;
	
	  // from prop
	  else if (isMeta((0, _get3.default)('_meta', metaArg))) return metaArg._meta;
	
	    // from class
	    else if (isMeta((0, _get3.default)('constructor._meta', metaArg))) return metaArg.constructor._meta;
	};
	
	var metaHasKeyValue = (0, _curry3.default)(function (key, val, metaArg) {
	  return (0, _flow3.default)(getMeta, (0, _get3.default)(key), (0, _eq3.default)(val))(metaArg);
	});
	var isType = exports.isType = metaHasKeyValue('type');
	
	// ----------------------------------------
	// Export
	// ----------------------------------------
	
	// type
	var isAddon = exports.isAddon = isType(TYPES.ADDON);
	var isCollection = exports.isCollection = isType(TYPES.COLLECTION);
	var isElement = exports.isElement = isType(TYPES.ELEMENT);
	var isView = exports.isView = isType(TYPES.VIEW);
	var isModule = exports.isModule = isType(TYPES.MODULE);
	
	// parent
	var isParent = exports.isParent = (0, _flow3.default)(getMeta, (0, _has3.default)('parent'), (0, _eq3.default)(false));
	var isChild = exports.isChild = (0, _flow3.default)(getMeta, (0, _has3.default)('parent'));
	
	// other
	var isPrivate = exports.isPrivate = (0, _flow3.default)(getMeta, (0, _get3.default)('name'), (0, _startsWith3.default)('_'));

/***/ },
/* 798 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('startsWith', __webpack_require__(799));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 799 */
/***/ function(module, exports, __webpack_require__) {

	var baseClamp = __webpack_require__(800),
	    baseToString = __webpack_require__(563),
	    toInteger = __webpack_require__(723),
	    toString = __webpack_require__(562);
	
	/**
	 * Checks if `string` starts with the given target string.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {string} [target] The string to search for.
	 * @param {number} [position=0] The position to search from.
	 * @returns {boolean} Returns `true` if `string` starts with `target`,
	 *  else `false`.
	 * @example
	 *
	 * _.startsWith('abc', 'a');
	 * // => true
	 *
	 * _.startsWith('abc', 'b');
	 * // => false
	 *
	 * _.startsWith('abc', 'b', 1);
	 * // => true
	 */
	function startsWith(string, target, position) {
	  string = toString(string);
	  position = baseClamp(toInteger(position), 0, string.length);
	  target = baseToString(target);
	  return string.slice(position, position + target.length) == target;
	}
	
	module.exports = startsWith;


/***/ },
/* 800 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.clamp` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {number} number The number to clamp.
	 * @param {number} [lower] The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the clamped number.
	 */
	function baseClamp(number, lower, upper) {
	  if (number === number) {
	    if (upper !== undefined) {
	      number = number <= upper ? number : upper;
	    }
	    if (lower !== undefined) {
	      number = number >= lower ? number : lower;
	    }
	  }
	  return number;
	}
	
	module.exports = baseClamp;


/***/ },
/* 801 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('has', __webpack_require__(520));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 802 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('eq', __webpack_require__(551));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 803 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('curry', __webpack_require__(775));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 804 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('get', __webpack_require__(667));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 805 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('includes', __webpack_require__(806));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 806 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(582),
	    isArrayLike = __webpack_require__(623),
	    isString = __webpack_require__(727),
	    toInteger = __webpack_require__(723),
	    values = __webpack_require__(807);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Checks if `value` is in `collection`. If `collection` is a string, it's
	 * checked for a substring of `value`, otherwise
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * is used for equality comparisons. If `fromIndex` is negative, it's used as
	 * the offset from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {boolean} Returns `true` if `value` is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'a': 1, 'b': 2 }, 1);
	 * // => true
	 *
	 * _.includes('abcd', 'bc');
	 * // => true
	 */
	function includes(collection, value, fromIndex, guard) {
	  collection = isArrayLike(collection) ? collection : values(collection);
	  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;
	
	  var length = collection.length;
	  if (fromIndex < 0) {
	    fromIndex = nativeMax(length + fromIndex, 0);
	  }
	  return isString(collection)
	    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	}
	
	module.exports = includes;


/***/ },
/* 807 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(808),
	    keys = __webpack_require__(635);
	
	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object ? baseValues(object, keys(object)) : [];
	}
	
	module.exports = values;


/***/ },
/* 808 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(565);
	
	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}
	
	module.exports = baseValues;


/***/ },
/* 809 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(748),
	    func = convert('values', __webpack_require__(807), __webpack_require__(782));
	
	func.placeholder = __webpack_require__(751);
	module.exports = func;


/***/ },
/* 810 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ICONS = exports.WIDTHS = exports.VERTICAL_ALIGNMENTS = exports.TEXT_ALIGNMENTS = exports.SIZES = exports.FLOATS = exports.COLORS = undefined;
	
	var _values2 = __webpack_require__(807);
	
	var _values3 = _interopRequireDefault(_values2);
	
	var _keys2 = __webpack_require__(635);
	
	var _keys3 = _interopRequireDefault(_keys2);
	
	var _numberToWord = __webpack_require__(684);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var COLORS = exports.COLORS = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
	var FLOATS = exports.FLOATS = ['left', 'right'];
	var SIZES = exports.SIZES = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];
	var TEXT_ALIGNMENTS = exports.TEXT_ALIGNMENTS = ['left', 'center', 'right', 'justified'];
	var VERTICAL_ALIGNMENTS = exports.VERTICAL_ALIGNMENTS = ['bottom', 'middle', 'top'];
	
	var WIDTHS = exports.WIDTHS = [].concat(_toConsumableArray((0, _keys3.default)(_numberToWord.numberToWordMap)), _toConsumableArray((0, _keys3.default)(_numberToWord.numberToWordMap).map(Number)), _toConsumableArray((0, _values3.default)(_numberToWord.numberToWordMap)));
	
	var ICONS = exports.ICONS = [
	// Web Content Icons
	'add to calendar', 'alarm outline', 'alarm mute outline', 'alarm mute', 'alarm', 'at', 'browser', 'bug', 'calendar outline', 'calendar', 'checked calendar', 'cloud', 'code', 'comment outline', 'comment', 'comments outline', 'comments', 'copyright', 'creative commons', 'dashboard', 'delete calendar', 'external square', 'external', 'eyedropper', 'feed', 'find', 'hand pointer', 'hashtag', 'heartbeat', 'history', 'home', 'hourglass empty', 'hourglass end', 'hourglass full', 'hourglass half', 'hourglass start', 'idea', 'image', 'inbox', 'industry', 'lab', 'mail outline', 'mail square', 'mail', 'mouse pointer', 'options', 'paint brush', 'payment', 'percent', 'privacy', 'protect', 'registered', 'remove from calendar', 'search', 'setting', 'settings', 'shop', 'shopping bag', 'shopping basket', 'signal', 'sitemap', 'tag', 'tags', 'tasks', 'terminal', 'text telephone', 'ticket', 'trademark', 'trophy', 'wifi',
	
	// User Actions Icons
	'add to cart', 'add user', 'adjust', 'archive', 'ban', 'bookmark', 'call', 'call square', 'clone', 'cloud download', 'cloud upload', 'talk', 'talk outline', 'compress', 'configure', 'download', 'edit', 'erase', 'exchange', 'expand', 'external share', 'filter', 'hide', 'in cart', 'lock', 'mail forward', 'object group', 'object ungroup', 'pin', 'print', 'random', 'recycle', 'refresh', 'remove bookmark', 'remove user', 'repeat', 'reply all', 'reply', 'retweet', 'send', 'send outline', 'share alternate', 'share alternate square', 'share', 'share square', 'sign in', 'sign out', 'theme', 'translate', 'undo', 'unhide', 'unlock alternate', 'unlock', 'upload', 'wait', 'wizard', 'write', 'write square',
	
	// Message Icons
	'announcement', 'birthday', 'help circle', 'help', 'info circle', 'info', 'warning circle', 'warning', 'warning sign',
	
	// User Types Icons
	'child', 'doctor', 'handicap', 'spy', 'student', 'user', 'users',
	
	// Gender And Sexuality Icons
	'female', 'gay', 'genderless', 'heterosexual', 'intergender', 'lesbian', 'male', 'man', 'neuter', 'non binary transgender', 'other gender horizontal', 'other gender', 'other gender vertical', 'transgender', 'woman',
	
	// Layout Adjustment Icons
	'block layout', 'crop', 'grid layout', 'list layout', 'maximize', 'resize horizontal', 'resize vertical', 'zoom', 'zoom out',
	
	// Objects Icons
	'anchor', 'bar', 'bomb', 'book', 'bullseye', 'calculator', 'cocktail', 'diamond', 'fax', 'fire extinguisher', 'fire', 'flag checkered', 'flag', 'flag outline', 'gift', 'hand lizard', 'hand peace', 'hand paper', 'hand rock', 'hand scissors', 'hand spock', 'law', 'leaf', 'legal', 'lemon', 'life ring', 'lightning', 'magnet', 'money', 'moon', 'plane', 'puzzle', 'road', 'rocket', 'shipping', 'soccer', 'sticky note', 'sticky note outline', 'suitcase', 'sun', 'travel', 'treatment', 'umbrella', 'world',
	
	// Shapes Icons
	'asterisk', 'certificate', 'circle', 'circle notched', 'circle thin', 'crosshairs', 'cube', 'cubes', 'ellipsis horizontal', 'ellipsis vertical', 'quote left', 'quote right', 'spinner', 'square', 'square outline',
	
	// Item Selection Icons
	'add circle', 'add square', 'check circle', 'check circle outline', 'check square', 'checkmark box', 'checkmark', 'minus circle', 'minus', 'minus square', 'minus square outline', 'move', 'plus', 'plus square outline', 'radio', 'remove circle', 'remove circle outline', 'remove', 'selected radio', 'toggle off', 'toggle on',
	
	// Media Icons
	'area chart', 'bar chart', 'camera retro', 'film', 'line chart', 'newspaper', 'photo', 'pie chart', 'sound',
	
	// Pointers Icons
	'angle double down', 'angle double left', 'angle double right', 'angle double up', 'angle down', 'angle left', 'angle right', 'angle up', 'arrow circle down', 'arrow circle left', 'arrow circle outline down', 'arrow circle outline left', 'arrow circle outline right', 'arrow circle outline up', 'arrow circle right', 'arrow circle up', 'arrow down', 'arrow left', 'arrow right', 'arrow up', 'caret down', 'caret left', 'caret right', 'caret up', 'chevron circle down', 'chevron circle left', 'chevron circle right', 'chevron circle up', 'chevron down', 'chevron left', 'chevron right', 'chevron up', 'long arrow down', 'long arrow left', 'long arrow right', 'long arrow up', 'pointing down', 'pointing left', 'pointing right', 'pointing up', 'toggle down', 'toggle left', 'toggle right', 'toggle up',
	
	// Mobile Icons
	'mobile', 'tablet', 'battery empty', 'battery full', 'battery low', 'battery medium',
	
	// Computer Icons
	'desktop', 'disk outline', 'game', 'high battery', 'keyboard', 'laptop', 'plug', 'power',
	
	// Computer And File System Icons
	'file archive outline', 'file audio outline', 'file code outline', 'file excel outline', 'file', 'file image outline', 'file outline', 'file pdf outline', 'file powerpoint outline', 'file text', 'file text outline', 'file video outline', 'file word outline', 'folder', 'folder open', 'folder open outline', 'folder outline', 'level down', 'level up', 'trash', 'trash outline',
	
	// Technologies Icons
	'barcode', 'bluetooth alternative', 'bluetooth', 'css3', 'database', 'fork', 'html5', 'openid', 'qrcode', 'rss', 'rss square', 'server', 'usb',
	
	// Rating Icons
	'empty heart', 'empty star', 'frown', 'heart', 'meh', 'smile', 'star half empty', 'star half', 'star', 'thumbs down', 'thumbs outline down', 'thumbs outline up', 'thumbs up',
	
	// Audio Icons
	'backward', 'closed captioning', 'eject', 'fast backward', 'fast forward', 'forward', 'music', 'mute', 'pause circle', 'pause circle outline', 'pause', 'play', 'record', 'step backward', 'step forward', 'stop circle', 'stop circle outline', 'stop', 'unmute', 'video play', 'video play outline', 'volume down', 'volume off', 'volume up',
	
	// Map Icons
	'bicycle', 'building', 'building outline', 'bus', 'car', 'coffee', 'compass', 'emergency', 'first aid', 'food', 'h', 'hospital', 'hotel', 'location arrow', 'map', 'map outline', 'map pin', 'map signs', 'marker', 'military', 'motorcycle', 'paw', 'ship', 'space shuttle', 'spoon', 'street view', 'subway', 'taxi', 'train', 'television', 'tree', 'university',
	
	// Tables Icons
	'columns', 'sort alphabet ascending', 'sort alphabet descending', 'sort ascending', 'sort content ascending', 'sort content descending', 'sort descending', 'sort', 'sort numeric ascending', 'sort numeric descending', 'table',
	
	// Text Editor Icons
	'align center', 'align justify', 'align left', 'align right', 'attach', 'bold', 'content', 'copy', 'cut', 'font', 'header', 'indent', 'italic', 'linkify', 'list', 'ordered list', 'outdent', 'paragraph', 'paste', 'save', 'strikethrough', 'subscript', 'superscript', 'text cursor', 'text height', 'text width', 'underline', 'unlinkify', 'unordered list',
	
	// Currency Icons
	'bitcoin', 'dollar', 'euro', 'lira', 'pound', 'ruble', 'rupee', 'shekel', 'won', 'yen',
	
	// Payment Options Icons
	'american express', 'credit card alternative', 'diners club', 'discover', 'google wallet', 'japan credit bureau', 'mastercard', 'paypal card', 'paypal', 'stripe', 'visa',
	
	// Accessibility Icons
	'wheelchair', 'asl interpreting', 'assistive listening systems', 'audio description', 'blind', 'braille', 'deafness', 'low vision', 'sign language', 'universal access', 'volume control phone',
	
	// Brands Icons
	'500px', 'adn', 'amazon', 'android', 'angellist', 'apple', 'behance', 'behance square', 'bitbucket', 'bitbucket square', 'black tie', 'buysellads', 'chrome', 'codepen', 'codiepie', 'connectdevelop', 'contao', 'dashcube', 'delicious', 'deviantart', 'digg', 'dribbble', 'dropbox', 'drupal', 'empire', 'envira gallery', 'expeditedssl', 'facebook', 'facebook f', 'facebook square', 'firefox', 'first order', 'flickr', 'font awesome', 'fonticons', 'fort awesome', 'forumbee', 'foursquare', 'gg', 'gg circle', 'git', 'git square', 'github', 'github alternate', 'github square', 'gitlab', 'gittip', 'glide', 'glide g', 'google', 'google plus', 'google plus circle', 'google plus square', 'hacker news', 'houzz', 'instagram', 'internet explorer', 'ioxhost', 'joomla', 'jsfiddle', 'lastfm', 'lastfm square', 'leanpub', 'linkedin', 'linkedin square', 'linux', 'maxcdn', 'meanpath', 'medium', 'microsoft edge', 'mixcloud', 'modx', 'odnoklassniki', 'odnoklassniki square', 'opencart', 'opera', 'optinmonster', 'pagelines', 'pied piper', 'pied piper alternate', 'pied piper hat', 'pinterest', 'pinterest square', 'pocket', 'product hunt', 'qq', 'rebel', 'reddit', 'reddit alien', 'reddit square', 'renren', 'safari', 'scribd', 'sellsy', 'shirtsinbulk', 'simplybuilt', 'skyatlas', 'skype', 'slack', 'slideshare', 'snapchat', 'snapchat ghost', 'snapchat square', 'soundcloud', 'spotify', 'stack exchange', 'stack overflow', 'steam', 'steam square', 'stumbleupon', 'stumbleupon circle', 'tencent weibo', 'themeisle', 'trello', 'tripadvisor', 'tumblr', 'tumblr square', 'twitch', 'twitter', 'twitter square', 'viacoin', 'viadeo', 'viadeo square', 'vimeo', 'vimeo square', 'vine', 'vk', 'wechat', 'weibo', 'whatsapp', 'wikipedia', 'windows', 'wordpress', 'wpbeginner', 'wpforms', 'xing', 'xing square', 'y combinator', 'yahoo', 'yelp', 'yoast', 'youtube', 'youtube play', 'youtube square'];

/***/ },
/* 811 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Button = __webpack_require__(812);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Button2.default;

/***/ },
/* 812 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(813);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Label = __webpack_require__(815);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _ButtonContent = __webpack_require__(820);
	
	var _ButtonContent2 = _interopRequireDefault(_ButtonContent);
	
	var _ButtonGroup = __webpack_require__(821);
	
	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
	
	var _ButtonOr = __webpack_require__(822);
	
	var _ButtonOr2 = _interopRequireDefault(_ButtonOr);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var debug = (0, _lib.makeDebugger)('button');
	
	/**
	 * A Button indicates a possible user action
	 * @see Form
	 * @see Icon
	 * @see Label
	 */
	function Button(props) {
	  var active = props.active;
	  var animated = props.animated;
	  var attached = props.attached;
	  var basic = props.basic;
	  var children = props.children;
	  var circular = props.circular;
	  var className = props.className;
	  var color = props.color;
	  var compact = props.compact;
	  var content = props.content;
	  var disabled = props.disabled;
	  var floated = props.floated;
	  var fluid = props.fluid;
	  var icon = props.icon;
	  var inverted = props.inverted;
	  var label = props.label;
	  var labelPosition = props.labelPosition;
	  var loading = props.loading;
	  var negative = props.negative;
	  var positive = props.positive;
	  var primary = props.primary;
	  var secondary = props.secondary;
	  var size = props.size;
	  var toggle = props.toggle;
	
	
	  var labeledClasses = (0, _classnames2.default)((0, _lib.useKeyOrValueAndKey)(labelPosition || !!label, 'labeled'));
	
	  var baseClasses = (0, _classnames2.default)(color, size, (0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOrValueAndKey)(animated, 'animated'), (0, _lib.useKeyOrValueAndKey)(attached, 'attached'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(icon === true || icon && (labelPosition || !children && !content), 'icon'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(primary, 'primary'), (0, _lib.useKeyOnly)(secondary, 'secondary'), (0, _lib.useKeyOnly)(toggle, 'toggle'));
	  var rest = (0, _lib.getUnhandledProps)(Button, props);
	  var ElementType = (0, _lib.getElementType)(Button, props, function () {
	    if (label || attached) return 'div';
	  });
	  var tabIndex = ElementType === 'div' ? 0 : undefined;
	
	  if (children) {
	    var _classes = (0, _classnames2.default)('ui', baseClasses, labeledClasses, 'button', className);
	    debug('render children:', { classes: _classes });
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: _classes, tabIndex: tabIndex }),
	      children
	    );
	  }
	
	  if (label) {
	    var _classes2 = (0, _classnames2.default)('ui', baseClasses, 'button', className);
	    var containerClasses = (0, _classnames2.default)('ui', labeledClasses, 'button', className);
	    debug('render label:', { classes: _classes2, containerClasses: containerClasses }, props);
	    var labelElement = _Label2.default.create(label, {
	      basic: true,
	      pointing: labelPosition === 'left' ? 'right' : 'left'
	    });
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: containerClasses }),
	      labelPosition === 'left' && labelElement,
	      _react2.default.createElement(
	        'button',
	        { className: _classes2 },
	        _Icon2.default.create(icon),
	        ' ',
	        content
	      ),
	      (labelPosition === 'right' || !labelPosition) && labelElement
	    );
	  }
	
	  if (icon && !label) {
	    var _classes3 = (0, _classnames2.default)('ui', labeledClasses, baseClasses, 'button', className);
	    debug('render icon && !label:', { classes: _classes3 });
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: _classes3, tabIndex: tabIndex }),
	      _Icon2.default.create(icon),
	      ' ',
	      content
	    );
	  }
	
	  var classes = (0, _classnames2.default)('ui', labeledClasses, baseClasses, 'button', className);
	  debug('render default:', { classes: classes });
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes, tabIndex: tabIndex }),
	    content
	  );
	}
	
	Button.Content = _ButtonContent2.default;
	Button.Group = _ButtonGroup2.default;
	Button.Or = _ButtonOr2.default;
	
	Button._meta = {
	  name: 'Button',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    animated: ['fade', 'vertical'],
	    attached: ['left', 'right', 'top', 'bottom'],
	    color: [].concat(_toConsumableArray(_lib.SUI.COLORS), ['facebook', 'twitter', 'google plus', 'vk', 'linkedin', 'instagram', 'youtube']),
	    floated: _lib.SUI.FLOATS,
	    labelPosition: ['right', 'left'],
	    size: _lib.SUI.SIZES
	  }
	};
	
	Button.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A button can show it is currently the active user selection */
	  active: _react.PropTypes.bool,
	
	  /** A button can animate to show hidden content */
	  animated: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Button._meta.props.animated)]),
	
	  /** A button can be attached to the top or bottom of other content */
	  attached: _react.PropTypes.oneOf(Button._meta.props.attached),
	
	  /** A basic button is less pronounced */
	  basic: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _lib.customPropTypes.every([_react.PropTypes.node, _lib.customPropTypes.disallow(['label']), _lib.customPropTypes.givenProps({
	    icon: _react.PropTypes.oneOfType([_react.PropTypes.string.isRequired, _react.PropTypes.object.isRequired, _react.PropTypes.element.isRequired])
	  }, _lib.customPropTypes.disallow(['icon']))]),
	
	  /** A button can be circular */
	  circular: _react.PropTypes.bool,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** A button can have different colors */
	  color: _react.PropTypes.oneOf(Button._meta.props.color),
	
	  /** A button can reduce its padding to fit into tighter spaces */
	  compact: _react.PropTypes.bool,
	
	  /** A button can show it is currently unable to be interacted with */
	  disabled: _react.PropTypes.bool,
	
	  /** A button can be aligned to the left or right of its container */
	  floated: _react.PropTypes.oneOf(Button._meta.props.floated),
	
	  /** A button can take the width of its container */
	  fluid: _react.PropTypes.bool,
	
	  /** Add an Icon by name, props object, or pass an <Icon /> */
	  icon: _lib.customPropTypes.some([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.object, _react.PropTypes.element]),
	
	  /** A button can be formatted to appear on dark backgrounds */
	  inverted: _react.PropTypes.bool,
	
	  /** A labeled button can format a Label or Icon to appear on the left or right */
	  labelPosition: _react.PropTypes.oneOf(Button._meta.props.labelPosition),
	
	  /** Add a Label by text, props object, or pass a <Label /> */
	  label: _lib.customPropTypes.some([_react.PropTypes.string, _react.PropTypes.object, _react.PropTypes.element]),
	
	  /** A button can show a loading indicator */
	  loading: _react.PropTypes.bool,
	
	  /** A button can hint towards a negative consequence */
	  negative: _react.PropTypes.bool,
	
	  /** A button can hint towards a positive consequence */
	  positive: _react.PropTypes.bool,
	
	  /** A button can be formatted to show different levels of emphasis */
	  primary: _react.PropTypes.bool,
	
	  /** A button can be formatted to show different levels of emphasis */
	  secondary: _react.PropTypes.bool,
	
	  /** A button can be formatted to toggle on and off */
	  toggle: _react.PropTypes.bool,
	
	  /** A button can have different sizes */
	  size: _react.PropTypes.oneOf(Button._meta.props.size)
	};
	
	Button.defaultProps = {
	  as: 'button'
	};
	
	Button.create = (0, _lib.createShorthandFactory)(Button, function (value) {
	  return { content: value };
	});
	
	exports.default = Button;

/***/ },
/* 813 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _IconGroup = __webpack_require__(814);
	
	var _IconGroup2 = _interopRequireDefault(_IconGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * An icon is a glyph used to represent something else
	 * @see Image
	 */
	function Icon(props) {
	  var bordered = props.bordered;
	  var className = props.className;
	  var circular = props.circular;
	  var color = props.color;
	  var corner = props.corner;
	  var disabled = props.disabled;
	  var fitted = props.fitted;
	  var flipped = props.flipped;
	  var inverted = props.inverted;
	  var link = props.link;
	  var loading = props.loading;
	  var name = props.name;
	  var rotated = props.rotated;
	  var size = props.size;
	
	
	  var classes = (0, _classnames2.default)(size, color, (0, _lib.useKeyOnly)(bordered, 'bordered'), (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(corner, 'corner'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(fitted, 'fitted'), (0, _lib.useValueAndKey)(flipped, 'flipped'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(link, 'link'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useValueAndKey)(rotated, 'rotated'), name, className, 'icon');
	  var rest = (0, _lib.getUnhandledProps)(Icon, props);
	  var ElementType = (0, _lib.getElementType)(Icon, props);
	
	  return _react2.default.createElement(ElementType, _extends({}, rest, { className: classes }));
	}
	
	Icon.Group = _IconGroup2.default;
	
	Icon._meta = {
	  name: 'Icon',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    color: _lib.SUI.COLORS,
	    flipped: ['horizontally', 'vertically'],
	    name: _lib.SUI.ICONS,
	    rotated: ['clockwise', 'counterclockwise'],
	    size: _lib.SUI.SIZES
	  }
	};
	
	Icon.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Formatted to appear bordered */
	  bordered: _react.PropTypes.bool,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Icon can formatted to appear circular */
	  circular: _react.PropTypes.bool,
	
	  /** Color of the icon. */
	  color: _react.PropTypes.oneOf(Icon._meta.props.color),
	
	  /** Icons can display a smaller corner icon */
	  corner: _react.PropTypes.bool,
	
	  /** Show that the icon is inactive */
	  disabled: _react.PropTypes.bool,
	
	  /** Fitted, without space to left or right of Icon. */
	  fitted: _react.PropTypes.bool,
	
	  /** Icon can flipped */
	  flipped: _react.PropTypes.oneOf(Icon._meta.props.flipped),
	
	  /** Formatted to have its colors inverted for contrast */
	  inverted: _react.PropTypes.bool,
	
	  /** Name of the icon */
	  name: _react.PropTypes.string,
	
	  /** Icon can be formatter as a link */
	  link: _react.PropTypes.bool,
	
	  /** Icon can be used as a simple loader */
	  loading: _react.PropTypes.bool,
	
	  /** Icon can rotated */
	  rotated: _react.PropTypes.oneOf(Icon._meta.props.rotated),
	
	  /** Size of the icon. */
	  size: _react.PropTypes.oneOf(Icon._meta.props.size)
	};
	
	Icon.defaultProps = {
	  as: 'i'
	};
	
	Icon.create = (0, _lib.createShorthandFactory)(Icon, function (value) {
	  return { name: value };
	});
	
	exports.default = Icon;

/***/ },
/* 814 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Several icons can be used together as a group
	 */
	function IconGroup(props) {
	  var children = props.children;
	  var className = props.className;
	  var size = props.size;
	
	
	  var classes = (0, _classnames2.default)(size, 'icons', className);
	  var rest = (0, _lib.getUnhandledProps)(IconGroup, props);
	  var ElementType = (0, _lib.getElementType)(IconGroup, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	IconGroup._meta = {
	  name: 'IconGroup',
	  parent: 'Icon',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    size: _lib.SUI.SIZES
	  }
	};
	
	IconGroup.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Size of the icon group. */
	  size: _react.PropTypes.oneOf(IconGroup._meta.props.size)
	};
	
	IconGroup.defaultProps = {
	  as: 'i'
	};
	
	exports.default = IconGroup;

/***/ },
/* 815 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(813);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Image = __webpack_require__(816);
	
	var _Image2 = _interopRequireDefault(_Image);
	
	var _LabelDetail = __webpack_require__(818);
	
	var _LabelDetail2 = _interopRequireDefault(_LabelDetail);
	
	var _LabelGroup = __webpack_require__(819);
	
	var _LabelGroup2 = _interopRequireDefault(_LabelGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _meta = {
	  name: 'Label',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    attached: ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
	    color: _lib.SUI.COLORS,
	    corner: ['left', 'right'],
	    pointing: ['above', 'below', 'left', 'right'],
	    ribbon: ['right'],
	    size: _lib.SUI.SIZES
	  }
	};
	
	/**
	 * A label displays content classification
	 */
	
	var Label = function (_Component) {
	  _inherits(Label, _Component);
	
	  function Label() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Label);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Label.__proto__ || Object.getPrototypeOf(Label)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
	      var onClick = _this.props.onClick;
	
	
	      if (onClick) onClick(e, _this.props);
	    }, _this.handleRemove = function (e) {
	      var onRemove = _this.props.onRemove;
	
	
	      if (onRemove) onRemove(e, _this.props);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Label, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var attached = _props.attached;
	      var basic = _props.basic;
	      var children = _props.children;
	      var circular = _props.circular;
	      var className = _props.className;
	      var color = _props.color;
	      var content = _props.content;
	      var corner = _props.corner;
	      var detail = _props.detail;
	      var empty = _props.empty;
	      var floating = _props.floating;
	      var horizontal = _props.horizontal;
	      var icon = _props.icon;
	      var image = _props.image;
	      var onRemove = _props.onRemove;
	      var pointing = _props.pointing;
	      var removable = _props.removable;
	      var ribbon = _props.ribbon;
	      var size = _props.size;
	      var tag = _props.tag;
	
	
	      var pointingClass = pointing === true && 'pointing' || (pointing === 'left' || pointing === 'right') && pointing + ' pointing' || (pointing === 'above' || pointing === 'below') && 'pointing ' + pointing;
	
	      var classes = (0, _classnames2.default)('ui', color, pointingClass, size, (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(empty, 'empty'), (0, _lib.useKeyOnly)(floating, 'floating'), (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(image === true, 'image'), (0, _lib.useKeyOnly)(tag, 'tag'), (0, _lib.useKeyOrValueAndKey)(corner, 'corner'), (0, _lib.useKeyOrValueAndKey)(ribbon, 'ribbon'), (0, _lib.useValueAndKey)(attached, 'attached'), 'label', className);
	      var rest = (0, _lib.getUnhandledProps)(Label, this.props);
	      var ElementType = (0, _lib.getElementType)(Label, this.props);
	
	      if (children) {
	        return _react2.default.createElement(
	          ElementType,
	          _extends({}, rest, { className: classes, onClick: this.handleClick }),
	          children
	        );
	      }
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({ className: classes, onClick: this.handleClick }, rest),
	        _Icon2.default.create(icon),
	        typeof image !== 'boolean' && _Image2.default.create(image),
	        content,
	        (0, _lib.createShorthand)(_LabelDetail2.default, function (val) {
	          return { content: val };
	        }, detail),
	        (removable || onRemove) && _react2.default.createElement(_Icon2.default, { name: 'delete', onClick: this.handleRemove })
	      );
	    }
	  }]);
	
	  return Label;
	}(_react.Component);
	
	// Label is not yet defined inside the class
	// Do not use a static property initializer
	
	
	Label.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A label can attach to a content segment. */
	  attached: _react.PropTypes.oneOf(_meta.props.attached),
	
	  /** A label can reduce its complexity. */
	  basic: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** A label can be circular. */
	  circular: _react.PropTypes.bool,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Color of the label. */
	  color: _react.PropTypes.oneOf(_meta.props.color),
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** A label can position itself in the corner of an element. */
	  corner: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.corner)]),
	
	  /** Shorthand for LabelDetail. */
	  detail: _lib.customPropTypes.itemShorthand,
	
	  /** Formats the label as a dot. */
	  empty: _lib.customPropTypes.every([_lib.customPropTypes.demand(['circular']), _react.PropTypes.bool]),
	
	  /** Float above another element in the upper right corner. */
	  floating: _react.PropTypes.bool,
	
	  /** A horizontal label is formatted to label content along-side it horizontally. */
	  horizontal: _react.PropTypes.bool,
	
	  /** Shorthand for Icon. */
	  icon: _lib.customPropTypes.itemShorthand,
	
	  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
	  image: _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand]),
	
	  /** A label can point to content next to it. */
	  pointing: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.pointing)]),
	
	  /** Adds the link style when present, called with (event, props). */
	  onClick: _react.PropTypes.func,
	
	  /** Adds an "x" icon, called with (event, props) when "x" is clicked. */
	  onRemove: _react.PropTypes.func,
	
	  /** Add an "x" icon that calls onRemove when clicked. */
	  removable: _react.PropTypes.bool,
	
	  /** A label can appear as a ribbon attaching itself to an element. */
	  ribbon: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.ribbon)]),
	
	  /** A label can have different sizes. */
	  size: _react.PropTypes.oneOf(_meta.props.size),
	
	  /** A label can appear as a tag. */
	  tag: _react.PropTypes.bool
	};
	Label._meta = _meta;
	Label.Detail = _LabelDetail2.default;
	Label.Group = _LabelGroup2.default;
	exports.default = Label;
	Label.create = (0, _lib.createShorthandFactory)(Label, function (value) {
	  return { content: value };
	});

/***/ },
/* 816 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Label = __webpack_require__(815);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _ImageGroup = __webpack_require__(817);
	
	var _ImageGroup2 = _interopRequireDefault(_ImageGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * An image is a graphic representation of something
	 * @see Icon
	 */
	function Image(props) {
	  var alt = props.alt;
	  var avatar = props.avatar;
	  var bordered = props.bordered;
	  var centered = props.centered;
	  var className = props.className;
	  var disabled = props.disabled;
	  var floated = props.floated;
	  var fluid = props.fluid;
	  var height = props.height;
	  var hidden = props.hidden;
	  var href = props.href;
	  var inline = props.inline;
	  var label = props.label;
	  var shape = props.shape;
	  var size = props.size;
	  var spaced = props.spaced;
	  var src = props.src;
	  var verticalAlign = props.verticalAlign;
	  var width = props.width;
	  var wrapped = props.wrapped;
	  var ui = props.ui;
	
	
	  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(ui, 'ui'), size, (0, _lib.useVerticalAlignProp)(verticalAlign, 'aligned'), (0, _lib.useKeyOnly)(avatar, 'avatar'), (0, _lib.useKeyOnly)(bordered, 'bordered'), (0, _lib.useKeyOnly)(centered, 'centered'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(hidden, 'hidden'), (0, _lib.useKeyOnly)(inline, 'inline'), (0, _lib.useKeyOrValueAndKey)(spaced, 'spaced'), shape, className, 'image');
	  var rest = (0, _lib.getUnhandledProps)(Image, props);
	  var rootProps = _extends({ className: classes }, rest);
	  var imgTagProps = { src: src, alt: alt, width: width, height: height };
	  var ElementType = (0, _lib.getElementType)(Image, props, function () {
	    if (label || wrapped) return 'div';
	  });
	
	  if (ElementType === 'img') {
	    return _react2.default.createElement(ElementType, _extends({}, rootProps, imgTagProps));
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rootProps, { href: href }),
	    _Label2.default.create(label),
	    _react2.default.createElement('img', imgTagProps)
	  );
	}
	
	Image.Group = _ImageGroup2.default;
	
	Image._meta = {
	  name: 'Image',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS,
	    floated: _lib.SUI.FLOATS,
	    shape: ['rounded', 'circular'],
	    size: _lib.SUI.SIZES,
	    spaced: ['left', 'right']
	  }
	};
	
	Image.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** An image can specify its vertical alignment */
	  verticalAlign: _react.PropTypes.oneOf(Image._meta.props.verticalAlign),
	
	  /** Alternate text for the image specified */
	  alt: _react.PropTypes.string,
	
	  /** An image may be formatted to appear inline with text as an avatar */
	  avatar: _react.PropTypes.bool,
	
	  /** An image may include a border to emphasize the edges of white or transparent content */
	  bordered: _react.PropTypes.bool,
	
	  /** An image can appear centered in a content block */
	  centered: _react.PropTypes.bool,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** An image can show that it is disabled and cannot be selected */
	  disabled: _react.PropTypes.bool,
	
	  /** An image can sit to the left or right of other content */
	  floated: _react.PropTypes.oneOf(Image._meta.props.floated),
	
	  /** An image can take up the width of its container */
	  fluid: _lib.customPropTypes.every([_react.PropTypes.bool, _lib.customPropTypes.disallow(['size'])]),
	
	  /** An image can be hidden */
	  hidden: _react.PropTypes.bool,
	
	  /** The img element height attribute */
	  height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	
	  /** Renders the Image as an <a> tag with this href */
	  href: _react.PropTypes.string,
	
	  /** An image may appear inline */
	  inline: _react.PropTypes.bool,
	
	  /** Shorthand for Label. */
	  label: _lib.customPropTypes.itemShorthand,
	
	  /** An image may appear rounded or circular */
	  shape: _react.PropTypes.oneOf(Image._meta.props.shape),
	
	  /** An image may appear at different sizes */
	  size: _react.PropTypes.oneOf(Image._meta.props.size),
	
	  /** An image can specify that it needs an additional spacing to separate it from nearby content */
	  spaced: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Image._meta.props.spaced)]),
	
	  /** Specifies the URL of the image */
	  src: _react.PropTypes.string,
	
	  /** Whether or not to add the ui className */
	  ui: _react.PropTypes.bool,
	
	  /** The img element width attribute */
	  width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	
	  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup */
	  wrapped: _lib.customPropTypes.every([_react.PropTypes.bool,
	  // these props wrap the image in an a tag already
	  _lib.customPropTypes.disallow(['href'])])
	};
	
	Image.defaultProps = {
	  as: 'img',
	  ui: true
	};
	
	Image.create = (0, _lib.createShorthandFactory)(Image, function (value) {
	  return { src: value };
	});
	
	exports.default = Image;

/***/ },
/* 817 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A group of images
	 */
	function ImageGroup(props) {
	  var children = props.children;
	  var className = props.className;
	  var size = props.size;
	
	  var classes = (0, _classnames2.default)('ui', size, className, 'images');
	  var rest = (0, _lib.getUnhandledProps)(ImageGroup, props);
	  var ElementType = (0, _lib.getElementType)(ImageGroup, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	ImageGroup._meta = {
	  name: 'ImageGroup',
	  parent: 'Image',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    size: _lib.SUI.SIZES
	  }
	};
	
	ImageGroup.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A group of images can be formatted to have the same size. */
	  size: _react.PropTypes.oneOf(ImageGroup._meta.props.size)
	};
	
	exports.default = ImageGroup;

/***/ },
/* 818 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function LabelDetail(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)('detail', className);
	  var rest = (0, _lib.getUnhandledProps)(LabelDetail, props);
	  var ElementType = (0, _lib.getElementType)(LabelDetail, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	LabelDetail._meta = {
	  name: 'LabelDetail',
	  parent: 'Label',
	  type: _lib.META.TYPES.ELEMENT
	};
	
	LabelDetail.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = LabelDetail;

/***/ },
/* 819 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function LabelGroup(props) {
	  var children = props.children;
	  var circular = props.circular;
	  var className = props.className;
	  var color = props.color;
	  var size = props.size;
	  var tag = props.tag;
	
	
	  var classes = (0, _classnames2.default)('ui', color, size, (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(tag, 'tag'), 'labels', className);
	  var rest = (0, _lib.getUnhandledProps)(LabelGroup, props);
	  var ElementType = (0, _lib.getElementType)(LabelGroup, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	LabelGroup._meta = {
	  name: 'LabelGroup',
	  parent: 'Label',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    color: _lib.SUI.COLORS,
	    size: _lib.SUI.SIZES
	  }
	};
	
	LabelGroup.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Labels can share shapes. */
	  circular: _react.PropTypes.bool,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Label group can share colors together. */
	  color: _react.PropTypes.oneOf(LabelGroup._meta.props.color),
	
	  /** Label group can share sizes together. */
	  size: _react.PropTypes.oneOf(LabelGroup._meta.props.size),
	
	  /** Label group can share tag formatting. */
	  tag: _react.PropTypes.bool
	};
	
	exports.default = LabelGroup;

/***/ },
/* 820 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Used in some Button types, such as `animated`
	 */
	function ButtonContent(props) {
	  var children = props.children;
	  var className = props.className;
	  var hidden = props.hidden;
	  var visible = props.visible;
	
	  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(visible, 'visible'), (0, _lib.useKeyOnly)(hidden, 'hidden'), 'content', className);
	  var rest = (0, _lib.getUnhandledProps)(ButtonContent, props);
	  var ElementType = (0, _lib.getElementType)(ButtonContent, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	ButtonContent._meta = {
	  name: 'ButtonContent',
	  parent: 'Button',
	  type: _lib.META.TYPES.ELEMENT
	};
	
	ButtonContent.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Initially hidden, visible on hover */
	  hidden: _react.PropTypes.bool,
	
	  /** Initially visible, hidden on hover */
	  visible: _react.PropTypes.bool
	};
	
	exports.default = ButtonContent;

/***/ },
/* 821 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Button.Group
	 */
	function ButtonGroup(props) {
	  var attached = props.attached;
	  var basic = props.basic;
	  var children = props.children;
	  var className = props.className;
	  var color = props.color;
	  var compact = props.compact;
	  var fluid = props.fluid;
	  var icon = props.icon;
	  var inverted = props.inverted;
	  var labeled = props.labeled;
	  var negative = props.negative;
	  var positive = props.positive;
	  var primary = props.primary;
	  var secondary = props.secondary;
	  var size = props.size;
	  var toggle = props.toggle;
	  var vertical = props.vertical;
	  var widths = props.widths;
	
	
	  var classes = (0, _classnames2.default)('ui', size, color, (0, _lib.useValueAndKey)(attached, 'attached'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(icon, 'icon'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(labeled, 'labeled'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(primary, 'primary'), (0, _lib.useKeyOnly)(secondary, 'secondary'), (0, _lib.useKeyOnly)(toggle, 'toggle'), (0, _lib.useKeyOnly)(vertical, 'vertical'), (0, _lib.useWidthProp)(widths), 'buttons', className);
	
	  var rest = (0, _lib.getUnhandledProps)(ButtonGroup, props);
	  var ElementType = (0, _lib.getElementType)(ButtonGroup, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	ButtonGroup._meta = {
	  name: 'ButtonGroup',
	  parent: 'Button',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    attached: ['left', 'right', 'top', 'bottom'],
	    color: _lib.SUI.COLORS,
	    size: _lib.SUI.SIZES,
	    widths: _lib.SUI.WIDTHS
	  }
	};
	
	ButtonGroup.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A button can be attached to the top or bottom of other content */
	  attached: _react.PropTypes.oneOf(ButtonGroup._meta.props.attached),
	
	  /** Groups can be less pronounced */
	  basic: _react.PropTypes.bool,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Groups can have a shared color */
	  color: _react.PropTypes.oneOf(ButtonGroup._meta.props.color),
	
	  /** Groups can reduce their padding to fit into tighter spaces */
	  compact: _react.PropTypes.bool,
	
	  /** Groups can take the width of their container */
	  fluid: _react.PropTypes.bool,
	
	  /** Groups can be formatted as icons */
	  icon: _react.PropTypes.bool,
	
	  /** Groups can be formatted to appear on dark backgrounds */
	  inverted: _react.PropTypes.bool,
	
	  /** Groups can be formatted as labeled icon buttons */
	  labeled: _react.PropTypes.bool,
	
	  /** Groups can hint towards a negative consequence */
	  negative: _react.PropTypes.bool,
	
	  /** Groups can hint towards a positive consequence */
	  positive: _react.PropTypes.bool,
	
	  /** Groups can be formatted to show different levels of emphasis */
	  primary: _react.PropTypes.bool,
	
	  /** Groups can be formatted to show different levels of emphasis */
	  secondary: _react.PropTypes.bool,
	
	  /** Groups can have different sizes */
	  size: _react.PropTypes.oneOf(ButtonGroup._meta.props.size),
	
	  /** Groups can be formatted to toggle on and off */
	  toggle: _react.PropTypes.bool,
	
	  /** Groups can be formatted to appear vertically */
	  vertical: _react.PropTypes.bool,
	
	  /** Groups can have their widths divided evenly */
	  widths: _react.PropTypes.oneOf(ButtonGroup._meta.props.widths)
	};
	
	exports.default = ButtonGroup;

/***/ },
/* 822 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Used in some Button types, such as `animated`
	 */
	function ButtonOr(props) {
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)('or', className);
	  var rest = (0, _lib.getUnhandledProps)(ButtonOr, props);
	  var ElementType = (0, _lib.getElementType)(ButtonOr, props);
	
	  return _react2.default.createElement(ElementType, _extends({}, rest, { className: classes }));
	}
	
	ButtonOr._meta = {
	  name: 'ButtonOr',
	  parent: 'Button',
	  type: _lib.META.TYPES.ELEMENT
	};
	
	ButtonOr.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = ButtonOr;

/***/ },
/* 823 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Modal = __webpack_require__(824);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Modal2.default;

/***/ },
/* 824 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _pick2 = __webpack_require__(627);
	
	var _pick3 = _interopRequireDefault(_pick2);
	
	var _omit2 = __webpack_require__(576);
	
	var _omit3 = _interopRequireDefault(_omit2);
	
	var _keys2 = __webpack_require__(635);
	
	var _keys3 = _interopRequireDefault(_keys2);
	
	var _isEqual2 = __webpack_require__(738);
	
	var _isEqual3 = _interopRequireDefault(_isEqual2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _ModalHeader = __webpack_require__(825);
	
	var _ModalHeader2 = _interopRequireDefault(_ModalHeader);
	
	var _ModalContent = __webpack_require__(826);
	
	var _ModalContent2 = _interopRequireDefault(_ModalContent);
	
	var _ModalActions = __webpack_require__(827);
	
	var _ModalActions2 = _interopRequireDefault(_ModalActions);
	
	var _ModalDescription = __webpack_require__(828);
	
	var _ModalDescription2 = _interopRequireDefault(_ModalDescription);
	
	var _Portal = __webpack_require__(829);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var debug = (0, _lib.makeDebugger)('modal');
	
	var _meta = {
	  name: 'Modal',
	  type: _lib.META.TYPES.MODULE,
	  props: {
	    size: ['fullscreen', 'large', 'small'],
	    dimmer: ['inverted', 'blurring']
	  }
	};
	
	/**
	 * A modal displays content that temporarily blocks interactions with the main view of a site
	 * @see Confirm
	 * @see Portal
	 */
	
	var Modal = function (_Component) {
	  _inherits(Modal, _Component);
	
	  function Modal() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Modal);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handlePortalMount = function () {
	      debug('handlePortalMount()');
	      var dimmer = _this.props.dimmer;
	
	      var mountNode = _this.getMountNode();
	
	      if (dimmer) {
	        debug('adding dimmer');
	        mountNode.classList.add('dimmable', 'dimmed');
	
	        if (dimmer === 'blurring') {
	          debug('adding blurred dimmer');
	          mountNode.classList.add('blurring');
	        }
	      }
	
	      _this.setPosition();
	    }, _this.handlePortalUnmount = function () {
	      debug('handlePortalUnmount()');
	
	      var mountNode = _this.getMountNode();
	
	      // Always remove all dimmer classes.
	      // If the dimmer value changes while the modal is open,
	      //   then removing its current value could leave cruft classes previously added.
	      mountNode.classList.remove('blurring', 'dimmable', 'dimmed', 'scrollable');
	
	      cancelAnimationFrame(_this.animationRequestId);
	    }, _this.getMountNode = function () {
	      return _this.props.mountNode || document.body;
	    }, _this.setPosition = function () {
	      if (_this._modalNode) {
	        var mountNode = _this.getMountNode();
	
	        var _this$_modalNode$getB = _this._modalNode.getBoundingClientRect();
	
	        var height = _this$_modalNode$getB.height;
	
	        var scrolling = height >= window.innerHeight;
	
	        var newState = {
	          marginTop: -Math.round(height / 2),
	          scrolling: scrolling
	        };
	
	        // add/remove scrolling class on body
	        if (!_this.state.scrolling && scrolling) {
	          mountNode.classList.add('scrolling');
	        } else if (_this.state.scrolling && !scrolling) {
	          mountNode.classList.remove('scrolling');
	        }
	
	        if (!(0, _isEqual3.default)(newState, _this.state)) {
	          _this.setState(newState);
	        }
	      }
	
	      _this.animationRequestId = requestAnimationFrame(_this.setPosition);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Modal, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      debug('componentWillUnmount()');
	      this.handlePortalUnmount();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var basic = _props.basic;
	      var children = _props.children;
	      var className = _props.className;
	      var dimmer = _props.dimmer;
	      var size = _props.size;
	      var _state = this.state;
	      var marginTop = _state.marginTop;
	      var scrolling = _state.scrolling;
	
	      var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(scrolling, 'scrolling'), 'modal transition visible active', className);
	      var unhandled = (0, _lib.getUnhandledProps)(Modal, this.props);
	      var portalPropNames = (0, _keys3.default)(_Portal2.default.propTypes);
	
	      var rest = (0, _omit3.default)(unhandled, portalPropNames);
	      var portalProps = (0, _pick3.default)(unhandled, portalPropNames);
	      var ElementType = (0, _lib.getElementType)(Modal, this.props);
	
	      var modalJSX = _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes, style: { marginTop: marginTop }, ref: function ref(c) {
	            return _this2._modalNode = c;
	          } }),
	        children
	      );
	
	      // wrap dimmer modals
	      var dimmerClasses = !dimmer ? null : (0, _classnames2.default)('ui', dimmer === 'inverted' && 'inverted', 'page modals dimmer transition visible active');
	
	      // Heads up!
	      //
	      // The SUI CSS selector to prevent the modal itself from blurring requires an immediate .dimmer child:
	      // .blurring.dimmed.dimmable>:not(.dimmer) { ... }
	      //
	      // The .blurring.dimmed.dimmable is the body, so that all body content inside is blurred.
	      // We need the immediate child to be the dimmer to :not() blur the modal itself!
	      // Otherwise, the portal div is also blurred, blurring the modal.
	      //
	      // We cannot them wrap the modalJSX in an actual <Dimmer /> instead, we apply the dimmer classes to the <Portal />.
	
	      return _react2.default.createElement(
	        _Portal2.default,
	        _extends({
	          closeOnRootNodeClick: true,
	          closeOnDocumentClick: false
	        }, portalProps, {
	          className: dimmerClasses,
	          mountNode: this.getMountNode(),
	          onMount: this.handlePortalMount,
	          onUnmount: this.handlePortalUnmount
	        }),
	        modalJSX
	      );
	    }
	  }]);
	
	  return Modal;
	}(_react.Component);
	
	Modal.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A modal can reduce its complexity */
	  basic: _react.PropTypes.bool,
	
	  /** A modal can appear in a dimmer */
	  dimmer: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.dimmer)]),
	
	  /** The node where the modal should mount.. */
	  mountNode: _react.PropTypes.any,
	
	  /** A modal can vary in size */
	  size: _react.PropTypes.oneOf(_meta.props.size)
	
	};
	Modal.defaultProps = {
	  dimmer: true
	};
	Modal._meta = _meta;
	Modal.Header = _ModalHeader2.default;
	Modal.Content = _ModalContent2.default;
	Modal.Description = _ModalDescription2.default;
	Modal.Actions = _ModalActions2.default;
	exports.default = Modal;

/***/ },
/* 825 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ModalHeader(props) {
	  var children = props.children;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)(className, 'header');
	  var rest = (0, _lib.getUnhandledProps)(ModalHeader, props);
	  var ElementType = (0, _lib.getElementType)(ModalHeader, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	ModalHeader._meta = {
	  name: 'ModalHeader',
	  type: _lib.META.TYPES.MODULE,
	  parent: 'Modal'
	};
	
	ModalHeader.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = ModalHeader;

/***/ },
/* 826 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ModalContent(props) {
	  var children = props.children;
	  var image = props.image;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)(className, (0, _lib.useKeyOnly)(image, 'image'), 'content');
	  var rest = (0, _lib.getUnhandledProps)(ModalContent, props);
	  var ElementType = (0, _lib.getElementType)(ModalContent, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	ModalContent._meta = {
	  name: 'ModalContent',
	  type: _lib.META.TYPES.MODULE,
	  parent: 'Modal'
	};
	
	ModalContent.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A modal can contain image content */
	  image: _react.PropTypes.bool
	};
	
	exports.default = ModalContent;

/***/ },
/* 827 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ModalActions(props) {
	  var children = props.children;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)(className, 'actions');
	  var rest = (0, _lib.getUnhandledProps)(ModalActions, props);
	  var ElementType = (0, _lib.getElementType)(ModalActions, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	ModalActions._meta = {
	  name: 'ModalActions',
	  type: _lib.META.TYPES.MODULE,
	  parent: 'Modal'
	};
	
	ModalActions.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = ModalActions;

/***/ },
/* 828 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ModalDescription(props) {
	  var children = props.children;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)(className, 'description');
	  var rest = (0, _lib.getUnhandledProps)(ModalDescription, props);
	  var ElementType = (0, _lib.getElementType)(ModalDescription, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	ModalDescription._meta = {
	  name: 'ModalDescription',
	  type: _lib.META.TYPES.MODULE,
	  parent: 'Modal'
	};
	
	ModalDescription.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = ModalDescription;

/***/ },
/* 829 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Portal = __webpack_require__(830);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Portal2.default;

/***/ },
/* 830 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _invoke2 = __webpack_require__(831);
	
	var _invoke3 = _interopRequireDefault(_invoke2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var debug = (0, _lib.makeDebugger)('portal');
	
	var _meta = {
	  name: 'Portal',
	  type: _lib.META.TYPES.ADDON
	};
	
	/**
	 * A component that allows you to render children outside their parent.
	 * @see Modal
	 */
	
	var Portal = function (_Component) {
	  _inherits(Portal, _Component);
	
	  function Portal() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Portal);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Portal.__proto__ || Object.getPrototypeOf(Portal)).call.apply(_ref, [this].concat(args))), _this), _this.handleDocumentClick = function (e) {
	      var _this$props = _this.props;
	      var closeOnDocumentClick = _this$props.closeOnDocumentClick;
	      var closeOnRootNodeClick = _this$props.closeOnRootNodeClick;
	
	      // If event happened in the portal, ignore it
	
	      if (_this.portal.contains(e.target)) return;
	
	      if (closeOnDocumentClick || closeOnRootNodeClick && _this.node.contains(e.target)) {
	        debug('handleDocumentClick()');
	
	        e.stopPropagation();
	        _this.close(e);
	      }
	    }, _this.handleEscape = function (e) {
	      if (!_this.props.closeOnEscape) return;
	      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Escape) return;
	
	      debug('handleEscape()');
	
	      e.preventDefault();
	      _this.close(e);
	    }, _this.handlePortalMouseLeave = function (e) {
	      var _this$props2 = _this.props;
	      var closeOnPortalMouseLeave = _this$props2.closeOnPortalMouseLeave;
	      var mouseLeaveDelay = _this$props2.mouseLeaveDelay;
	
	
	      if (!closeOnPortalMouseLeave) return;
	
	      debug('handlePortalMouseLeave()');
	      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
	    }, _this.handlePortalMouseOver = function (e) {
	      // In order to enable mousing from the trigger to the portal, we need to
	      // clear the mouseleave timer that was set when leaving the trigger.
	      var closeOnPortalMouseLeave = _this.props.closeOnPortalMouseLeave;
	
	
	      if (!closeOnPortalMouseLeave) return;
	
	      debug('handlePortalMouseOver()');
	      clearTimeout(_this.mouseLeaveTimer);
	    }, _this.handleTriggerBlur = function (e) {
	      var _this$props3 = _this.props;
	      var trigger = _this$props3.trigger;
	      var closeOnTriggerBlur = _this$props3.closeOnTriggerBlur;
	
	      // Call original event handler
	
	      (0, _invoke3.default)(trigger, 'props.onBlur', e);
	
	      if (!closeOnTriggerBlur) return;
	
	      debug('handleTriggerBlur()');
	      _this.close(e);
	    }, _this.handleTriggerClick = function (e) {
	      var _this$props4 = _this.props;
	      var trigger = _this$props4.trigger;
	      var closeOnTriggerClick = _this$props4.closeOnTriggerClick;
	      var openOnTriggerClick = _this$props4.openOnTriggerClick;
	      var open = _this.state.open;
	
	      // Call original event handler
	
	      (0, _invoke3.default)(trigger, 'props.onClick', e);
	
	      if (open && closeOnTriggerClick) {
	        debug('handleTriggerClick() - close');
	
	        e.stopPropagation();
	        _this.close(e);
	      } else if (!open && openOnTriggerClick) {
	        debug('handleTriggerClick() - open');
	
	        e.stopPropagation();
	        _this.open(e);
	      }
	
	      // Prevents handleDocumentClick from closing the portal when
	      // openOnTriggerFocus is set. Focus shifts on mousedown so the portal opens
	      // before the click finishes so it may actually wind up on the document.
	      e.nativeEvent.stopImmediatePropagation();
	    }, _this.handleTriggerFocus = function (e) {
	      var _this$props5 = _this.props;
	      var trigger = _this$props5.trigger;
	      var openOnTriggerFocus = _this$props5.openOnTriggerFocus;
	
	      // Call original event handler
	
	      (0, _invoke3.default)(trigger, 'props.onFocus', e);
	
	      if (!openOnTriggerFocus) return;
	
	      debug('handleTriggerFocus()');
	      _this.open(e);
	    }, _this.handleTriggerMouseLeave = function (e) {
	      clearTimeout(_this.mouseOverTimer);
	
	      var _this$props6 = _this.props;
	      var trigger = _this$props6.trigger;
	      var closeOnTriggerMouseLeave = _this$props6.closeOnTriggerMouseLeave;
	      var mouseLeaveDelay = _this$props6.mouseLeaveDelay;
	
	      // Call original event handler
	
	      (0, _invoke3.default)(trigger, 'props.onMouseLeave', e);
	
	      if (!closeOnTriggerMouseLeave) return;
	
	      debug('handleTriggerMouseLeave()');
	      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
	    }, _this.handleTriggerMouseOver = function (e) {
	      clearTimeout(_this.mouseLeaveTimer);
	
	      var _this$props7 = _this.props;
	      var trigger = _this$props7.trigger;
	      var mouseOverDelay = _this$props7.mouseOverDelay;
	      var openOnTriggerMouseOver = _this$props7.openOnTriggerMouseOver;
	
	      // Call original event handler
	
	      (0, _invoke3.default)(trigger, 'props.onMouseOver', e);
	
	      if (!openOnTriggerMouseOver) return;
	
	      debug('handleTriggerMouseOver()');
	      _this.mouseOverTimer = _this.openWithTimeout(e, mouseOverDelay);
	    }, _this.open = function (e) {
	      debug('open()');
	
	      var onOpen = _this.props.onOpen;
	
	      if (onOpen) onOpen(e);
	
	      _this.trySetState({ open: true });
	    }, _this.openWithTimeout = function (e, delay) {
	      // React wipes the entire event object and suggests using e.persist() if
	      // you need the event for async access. However, even with e.persist
	      // certain required props (e.g. currentTarget) are null so we're forced to clone.
	      var eventClone = _extends({}, e);
	      return setTimeout(function () {
	        return _this.open(eventClone);
	      }, delay || 0);
	    }, _this.close = function (e) {
	      debug('close()');
	
	      var onClose = _this.props.onClose;
	
	      if (onClose) onClose(e);
	
	      _this.trySetState({ open: false });
	    }, _this.closeWithTimeout = function (e, delay) {
	      // React wipes the entire event object and suggests using e.persist() if
	      // you need the event for async access. However, even with e.persist
	      // certain required props (e.g. currentTarget) are null so we're forced to clone.
	      var eventClone = _extends({}, e);
	      return setTimeout(function () {
	        return _this.close(eventClone);
	      }, delay || 0);
	    }, _this.mountPortal = function () {
	      if (_this.node) return;
	
	      debug('mountPortal()');
	
	      var _this$props8 = _this.props;
	      var _this$props8$mountNod = _this$props8.mountNode;
	      var mountNode = _this$props8$mountNod === undefined ? document.body : _this$props8$mountNod;
	      var prepend = _this$props8.prepend;
	
	
	      _this.node = document.createElement('div');
	
	      if (prepend) {
	        mountNode.insertBefore(_this.node, mountNode.firstElementChild);
	      } else {
	        mountNode.appendChild(_this.node);
	      }
	
	      document.addEventListener('click', _this.handleDocumentClick);
	      document.addEventListener('keydown', _this.handleEscape);
	
	      var onMount = _this.props.onMount;
	
	      if (onMount) onMount();
	    }, _this.unmountPortal = function () {
	      if (!_this.node) return;
	
	      debug('unmountPortal()');
	
	      _reactDom2.default.unmountComponentAtNode(_this.node);
	      _this.node.parentNode.removeChild(_this.node);
	
	      _this.portal.removeEventListener('mouseleave', _this.handlePortalMouseLeave);
	      _this.portal.removeEventListener('mouseover', _this.handlePortalMouseOver);
	
	      _this.node = null;
	      _this.portal = null;
	
	      document.removeEventListener('click', _this.handleDocumentClick);
	      document.removeEventListener('keydown', _this.handleEscape);
	
	      var onUnmount = _this.props.onUnmount;
	
	      if (onUnmount) onUnmount();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Portal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.state.open) {
	        this.renderPortal();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      // NOTE: Ideally the portal rendering would happen in the render() function
	      // but React gives a warning about not being pure and suggests doing it
	      // within this method.
	
	      // If the portal is open, render (or re-render) the portal and child.
	      if (this.state.open) {
	        this.renderPortal();
	      }
	
	      if (prevState.open && !this.state.open) {
	        debug('portal closed');
	        this.unmountPortal();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unmountPortal();
	
	      // Clean up timers
	      clearTimeout(this.mouseOverTimer);
	      clearTimeout(this.mouseLeaveTimer);
	    }
	
	    // ----------------------------------------
	    // Document Event Handlers
	    // ----------------------------------------
	
	    // ----------------------------------------
	    // Component Event Handlers
	    // ----------------------------------------
	
	    // ----------------------------------------
	    // Behavior
	    // ----------------------------------------
	
	  }, {
	    key: 'renderPortal',
	    value: function renderPortal() {
	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;
	
	
	      this.mountPortal();
	
	      this.node.className = className || '';
	
	      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, _react.Children.only(children), this.node);
	
	      this.portal = this.node.firstElementChild;
	
	      this.portal.addEventListener('mouseleave', this.handlePortalMouseLeave);
	      this.portal.addEventListener('mouseover', this.handlePortalMouseOver);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var trigger = this.props.trigger;
	
	
	      if (!trigger) return null;
	
	      return _react2.default.cloneElement(trigger, {
	        onBlur: this.handleTriggerBlur,
	        onClick: this.handleTriggerClick,
	        onFocus: this.handleTriggerFocus,
	        onMouseLeave: this.handleTriggerMouseLeave,
	        onMouseOver: this.handleTriggerMouseOver
	      });
	    }
	  }]);
	
	  return Portal;
	}(_lib.AutoControlledComponent);
	
	Portal.propTypes = {
	  /** Primary content. */
	  children: _react.PropTypes.node.isRequired,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /**
	   * Controls whether or not the portal should close on a click on the portal background.
	   * NOTE: This differs from closeOnDocumentClick:
	   * - DocumentClick - any click not within the portal
	   * - RootNodeClick - a click not within the portal but within the portal's wrapper
	   */
	  closeOnRootNodeClick: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['closeOnDocumentClick']), _react.PropTypes.bool]),
	
	  /** Controls whether or not the portal should close on a click outside. */
	  closeOnDocumentClick: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['closeOnRootNodeClick']), _react.PropTypes.bool]),
	
	  /** Controls whether or not the portal should close when escape is pressed is displayed. */
	  closeOnEscape: _react.PropTypes.bool,
	
	  /**
	   * Controls whether or not the portal should close when mousing out of the portal.
	   * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
	   * gap from the trigger to the portal.
	   */
	  closeOnPortalMouseLeave: _react.PropTypes.bool,
	
	  /** Controls whether or not the portal should close on blur of the trigger. */
	  closeOnTriggerBlur: _react.PropTypes.bool,
	
	  /** Controls whether or not the portal should close on click of the trigger. */
	  closeOnTriggerClick: _react.PropTypes.bool,
	
	  /** Controls whether or not the portal should close when mousing out of the trigger. */
	  closeOnTriggerMouseLeave: _react.PropTypes.bool,
	
	  /** Initial value of open. */
	  defaultOpen: _react.PropTypes.bool,
	
	  /** The node where the portal should mount. */
	  mountNode: _react.PropTypes.any,
	
	  /** Milliseconds to wait before closing on mouse leave */
	  mouseLeaveDelay: _react.PropTypes.number,
	
	  /** Milliseconds to wait before opening on mouse over */
	  mouseOverDelay: _react.PropTypes.number,
	
	  /** Called when a close event happens */
	  onClose: _react.PropTypes.func,
	
	  /** Called when the portal is mounted on the DOM */
	  onMount: _react.PropTypes.func,
	
	  /** Called when an open event happens */
	  onOpen: _react.PropTypes.func,
	
	  /** Called when the portal is unmounted from the DOM */
	  onUnmount: _react.PropTypes.func,
	
	  /** Controls whether or not the portal is displayed. */
	  open: _react.PropTypes.bool,
	
	  /** Controls whether or not the portal should open when the trigger is clicked. */
	  openOnTriggerClick: _react.PropTypes.bool,
	
	  /** Controls whether or not the portal should open on focus of the trigger. */
	  openOnTriggerFocus: _react.PropTypes.bool,
	
	  /** Controls whether or not the portal should open when mousing over the trigger. */
	  openOnTriggerMouseOver: _react.PropTypes.bool,
	
	  /** Controls whether the portal should be prepended to the mountNode instead of appended. */
	  prepend: _react.PropTypes.bool,
	
	  /** Element to be rendered in-place where the portal is defined. */
	  trigger: _react.PropTypes.node
	};
	Portal.defaultProps = {
	  closeOnDocumentClick: true,
	  closeOnEscape: true,
	  openOnTriggerClick: true
	};
	Portal.autoControlledProps = ['open'];
	Portal._meta = _meta;
	exports.default = Portal;

/***/ },
/* 831 */
/***/ function(module, exports, __webpack_require__) {

	var baseInvoke = __webpack_require__(832),
	    baseRest = __webpack_require__(625);
	
	/**
	 * Invokes the method at `path` of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the method to invoke.
	 * @param {...*} [args] The arguments to invoke the method with.
	 * @returns {*} Returns the result of the invoked method.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
	 *
	 * _.invoke(object, 'a[0].b.c.slice', 1, 3);
	 * // => [2, 3]
	 */
	var invoke = baseRest(baseInvoke);
	
	module.exports = invoke;


/***/ },
/* 832 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(599),
	    castPath = __webpack_require__(523),
	    isKey = __webpack_require__(571),
	    last = __webpack_require__(833),
	    parent = __webpack_require__(834),
	    toKey = __webpack_require__(573);
	
	/**
	 * The base implementation of `_.invoke` without support for individual
	 * method arguments.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the method to invoke.
	 * @param {Array} args The arguments to invoke the method with.
	 * @returns {*} Returns the result of the invoked method.
	 */
	function baseInvoke(object, path, args) {
	  if (!isKey(path, object)) {
	    path = castPath(path);
	    object = parent(object, path);
	    path = last(path);
	  }
	  var func = object == null ? object : object[toKey(path)];
	  return func == null ? undefined : apply(func, object, args);
	}
	
	module.exports = baseInvoke;


/***/ },
/* 833 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ },
/* 834 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(668),
	    baseSlice = __webpack_require__(780);
	
	/**
	 * Gets the parent value at `path` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path to get the parent value of.
	 * @returns {*} Returns the parent value.
	 */
	function parent(object, path) {
	  return path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	}
	
	module.exports = parent;


/***/ },
/* 835 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Radio = __webpack_require__(836);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Radio2.default;

/***/ },
/* 836 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Checkbox = __webpack_require__(837);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A Radio is sugar for <Checkbox radio />.
	 * Useful for exclusive groups of sliders or toggles.
	 * @see Checkbox
	 * @see Form
	 */
	function Radio(props) {
	  var slider = props.slider;
	  var toggle = props.toggle;
	  var type = props.type;
	
	  var rest = (0, _lib.getUnhandledProps)(Radio, props);
	  // const ElementType = getElementType(Radio, props)
	  // radio, slider, toggle are exclusive
	  // use an undefined radio if slider or toggle are present
	  var radio = !(slider || toggle) || undefined;
	
	  return _react2.default.createElement(_Checkbox2.default, _extends({}, rest, { type: type, radio: radio, slider: slider, toggle: toggle }));
	}
	
	Radio._meta = {
	  name: 'Radio',
	  type: _lib.META.TYPES.ADDON,
	  props: {
	    type: _Checkbox2.default._meta.props.type
	  }
	};
	
	Radio.propTypes = {
	  /** Format to emphasize the current selection state */
	  slider: _Checkbox2.default.propTypes.slider,
	
	  /** Format to show an on or off choice */
	  toggle: _Checkbox2.default.propTypes.toggle,
	
	  /** HTML input type, either checkbox or radio. */
	  type: _react.PropTypes.oneOf(Radio._meta.props.type)
	};
	
	Radio.defaultProps = {
	  type: 'radio'
	};
	
	exports.default = Radio;

/***/ },
/* 837 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Checkbox = __webpack_require__(838);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Checkbox2.default;

/***/ },
/* 838 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var debug = (0, _lib.makeDebugger)('checkbox');
	
	var _meta = {
	  name: 'Checkbox',
	  type: _lib.META.TYPES.MODULE,
	  props: {
	    type: ['checkbox', 'radio']
	  }
	};
	
	/**
	 * A checkbox allows a user to select a value from a small set of options, often binary
	 * @see Form
	 * @see Radio
	 */
	
	var Checkbox = function (_Component) {
	  _inherits(Checkbox, _Component);
	
	  function Checkbox() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Checkbox);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.canToggle = function () {
	      var _this$props = _this.props;
	      var disabled = _this$props.disabled;
	      var radio = _this$props.radio;
	      var readOnly = _this$props.readOnly;
	      var checked = _this.state.checked;
	
	
	      return !disabled && !readOnly && !(radio && checked);
	    }, _this.handleClick = function (e) {
	      debug('handleClick()');
	      var _this$props2 = _this.props;
	      var onChange = _this$props2.onChange;
	      var onClick = _this$props2.onClick;
	      var name = _this$props2.name;
	      var value = _this$props2.value;
	      var checked = _this.state.checked;
	
	      debug('  name:       ' + name);
	      debug('  value:      ' + value);
	      debug('  checked:    ' + checked);
	
	      if (_this.canToggle()) {
	        if (onClick) onClick(e, { name: name, value: value, checked: !!checked });
	        if (onChange) onChange(e, { name: name, value: value, checked: !checked });
	
	        _this.trySetState({ checked: !checked });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Checkbox, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var label = _props.label;
	      var name = _props.name;
	      var radio = _props.radio;
	      var slider = _props.slider;
	      var toggle = _props.toggle;
	      var type = _props.type;
	      var value = _props.value;
	      var disabled = _props.disabled;
	      var readOnly = _props.readOnly;
	      var checked = this.state.checked;
	
	      var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(checked, 'checked'),
	      // auto apply fitted class to compact white space when there is no label
	      // http://semantic-ui.com/modules/checkbox.html#fitted
	      (0, _lib.useKeyOnly)(!label, 'fitted'), (0, _lib.useKeyOnly)(radio, 'radio'), (0, _lib.useKeyOnly)(slider, 'slider'), (0, _lib.useKeyOnly)(toggle, 'toggle'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(readOnly, 'read-only'), 'checkbox', className);
	      var rest = (0, _lib.getUnhandledProps)(Checkbox, this.props);
	      var ElementType = (0, _lib.getElementType)(Checkbox, this.props);
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes, onClick: this.handleClick, onChange: this.handleClick }),
	        _react2.default.createElement('input', {
	          type: type,
	          name: name,
	          checked: checked,
	          className: 'hidden',
	          readOnly: true,
	          tabIndex: 0,
	          value: value
	        }),
	        _react2.default.createElement(
	          'label',
	          null,
	          label
	        )
	      );
	    }
	  }]);
	
	  return Checkbox;
	}(_lib.AutoControlledComponent);
	
	Checkbox.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Whether or not checkbox is checked. */
	  checked: _react.PropTypes.bool,
	
	  /** The initial value of checked. */
	  defaultChecked: _react.PropTypes.bool,
	
	  /** Format to emphasize the current selection state */
	  slider: _lib.customPropTypes.every([_react.PropTypes.bool, _lib.customPropTypes.disallow(['radio', 'toggle'])]),
	
	  /** Format as a radio element. This means it is an exclusive option.*/
	  radio: _lib.customPropTypes.every([_react.PropTypes.bool, _lib.customPropTypes.disallow(['slider', 'toggle'])]),
	
	  /** Format to show an on or off choice */
	  toggle: _lib.customPropTypes.every([_react.PropTypes.bool, _lib.customPropTypes.disallow(['radio', 'slider'])]),
	
	  /** A checkbox can appear disabled and be unable to change states */
	  disabled: _react.PropTypes.bool,
	
	  /** Removes padding for a label. Auto applied when there is no label. */
	  fitted: _react.PropTypes.bool,
	
	  /** The text of the associated label element. */
	  label: _react.PropTypes.string,
	
	  /** HTML input type, either checkbox or radio. */
	  type: _react.PropTypes.oneOf(_meta.props.type),
	
	  /** The HTML input name. */
	  name: _react.PropTypes.string,
	
	  /** Called with (event, { name, value, checked }) when the user attempts to change the value. */
	  onChange: _react.PropTypes.func,
	
	  /** Called with (event, { name, value, checked }) when the checkbox or label is clicked. */
	  onClick: _react.PropTypes.func,
	
	  /** A checkbox can be read-only and unable to change states */
	  readOnly: _react.PropTypes.bool,
	
	  /** The HTML input value. */
	  value: _react.PropTypes.string
	};
	Checkbox.defaultProps = {
	  type: 'checkbox'
	};
	Checkbox.autoControlledProps = ['checked'];
	Checkbox._meta = _meta;
	exports.default = Checkbox;

/***/ },
/* 839 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Select = __webpack_require__(840);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Select2.default;

/***/ },
/* 840 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Dropdown = __webpack_require__(841);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A Select is sugar for <Dropdown selection />.
	 * @see Dropdown
	 * @see Form
	 */
	function Select(props) {
	  return _react2.default.createElement(_Dropdown2.default, _extends({}, props, { selection: true }));
	}
	
	Select._meta = {
	  name: 'Select',
	  type: _lib.META.TYPES.ADDON
	};
	
	exports.default = Select;

/***/ },
/* 841 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Dropdown = __webpack_require__(842);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Dropdown2.default;

/***/ },
/* 842 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _compact2 = __webpack_require__(788);
	
	var _compact3 = _interopRequireDefault(_compact2);
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _every2 = __webpack_require__(843);
	
	var _every3 = _interopRequireDefault(_every2);
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _findIndex2 = __webpack_require__(742);
	
	var _findIndex3 = _interopRequireDefault(_findIndex2);
	
	var _find2 = __webpack_require__(740);
	
	var _find3 = _interopRequireDefault(_find2);
	
	var _reduce2 = __webpack_require__(847);
	
	var _reduce3 = _interopRequireDefault(_reduce2);
	
	var _escapeRegExp2 = __webpack_require__(849);
	
	var _escapeRegExp3 = _interopRequireDefault(_escapeRegExp2);
	
	var _isFunction2 = __webpack_require__(535);
	
	var _isFunction3 = _interopRequireDefault(_isFunction2);
	
	var _filter2 = __webpack_require__(628);
	
	var _filter3 = _interopRequireDefault(_filter2);
	
	var _dropRight2 = __webpack_require__(850);
	
	var _dropRight3 = _interopRequireDefault(_dropRight2);
	
	var _isEmpty2 = __webpack_require__(674);
	
	var _isEmpty3 = _interopRequireDefault(_isEmpty2);
	
	var _union2 = __webpack_require__(731);
	
	var _union3 = _interopRequireDefault(_union2);
	
	var _some2 = __webpack_require__(743);
	
	var _some3 = _interopRequireDefault(_some2);
	
	var _get3 = __webpack_require__(667);
	
	var _get4 = _interopRequireDefault(_get3);
	
	var _includes2 = __webpack_require__(806);
	
	var _includes3 = _interopRequireDefault(_includes2);
	
	var _has2 = __webpack_require__(520);
	
	var _has3 = _interopRequireDefault(_has2);
	
	var _isEqual2 = __webpack_require__(738);
	
	var _isEqual3 = _interopRequireDefault(_isEqual2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get2 = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(851);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Label = __webpack_require__(852);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _DropdownDivider = __webpack_require__(853);
	
	var _DropdownDivider2 = _interopRequireDefault(_DropdownDivider);
	
	var _DropdownItem = __webpack_require__(854);
	
	var _DropdownItem2 = _interopRequireDefault(_DropdownItem);
	
	var _DropdownHeader = __webpack_require__(858);
	
	var _DropdownHeader2 = _interopRequireDefault(_DropdownHeader);
	
	var _DropdownMenu = __webpack_require__(859);
	
	var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var debug = (0, _lib.makeDebugger)('dropdown');
	
	var _meta = {
	  name: 'Dropdown',
	  type: _lib.META.TYPES.MODULE,
	  props: {
	    pointing: ['left', 'right', 'top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right'],
	    additionPosition: ['top', 'bottom']
	  }
	};
	
	/**
	 * A dropdown allows a user to select a value from a series of options.
	 * @see Form
	 * @see Select
	 */
	
	var Dropdown = function (_Component) {
	  _inherits(Dropdown, _Component);
	
	  function Dropdown() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Dropdown);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e, value) {
	      debug('handleChange()');
	      debug(value);
	      var _this$props = _this.props;
	      var name = _this$props.name;
	      var onChange = _this$props.onChange;
	
	      if (onChange) onChange(e, { name: name, value: value });
	    }, _this.closeOnEscape = function (e) {
	      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Escape) return;
	      e.preventDefault();
	      _this.close();
	    }, _this.moveSelectionOnKeyDown = function (e) {
	      debug('moveSelectionOnKeyDown()');
	      debug(_lib.keyboardKey.getName(e));
	      switch (_lib.keyboardKey.getCode(e)) {
	        case _lib.keyboardKey.ArrowDown:
	          e.preventDefault();
	          _this.moveSelectionBy(1);
	          break;
	        case _lib.keyboardKey.ArrowUp:
	          e.preventDefault();
	          _this.moveSelectionBy(-1);
	          break;
	        default:
	          break;
	      }
	    }, _this.openOnSpace = function (e) {
	      debug('openOnSpace()');
	      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Spacebar) return;
	      if (_this.state.open) return;
	      e.preventDefault();
	      _this.trySetState({ open: true });
	    }, _this.openOnArrow = function (e) {
	      var code = _lib.keyboardKey.getCode(e);
	      debug('openOnArrow()');
	      if (!(0, _includes3.default)([_lib.keyboardKey.ArrowDown, _lib.keyboardKey.ArrowUp], code)) return;
	      if (_this.state.open) return;
	      e.preventDefault();
	      _this.trySetState({ open: true });
	    }, _this.selectHighlightedItem = function (e) {
	      var open = _this.state.open;
	      var _this$props2 = _this.props;
	      var multiple = _this$props2.multiple;
	      var name = _this$props2.name;
	      var onAddItem = _this$props2.onAddItem;
	      var options = _this$props2.options;
	
	      var value = (0, _get4.default)(_this.getSelectedItem(), 'value');
	
	      // prevent selecting null if there was no selected item value
	      // prevent selecting duplicate items when the dropdown is closed
	      if (!value || !open) return;
	
	      // notify the onAddItem prop if this is a new value
	      if (onAddItem && !(0, _some3.default)(options, { text: value })) {
	        onAddItem(e, { name: name, value: value });
	      }
	
	      // notify the onChange prop that the user is trying to change value
	      if (multiple) {
	        // state value may be undefined
	        var newValue = (0, _union3.default)(_this.state.value, [value]);
	        _this.setValue(newValue);
	        _this.handleChange(e, newValue);
	      } else {
	        _this.setValue(value);
	        _this.handleChange(e, value);
	        _this.close();
	      }
	    }, _this.selectItemOnEnter = function (e) {
	      debug('selectItemOnEnter()');
	      debug(_lib.keyboardKey.getName(e));
	      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Enter) return;
	      e.preventDefault();
	
	      _this.selectHighlightedItem(e);
	    }, _this.removeItemOnBackspace = function (e) {
	      debug('removeItemOnBackspace()');
	      debug(_lib.keyboardKey.getName(e));
	      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Backspace) return;
	
	      var _this$props3 = _this.props;
	      var multiple = _this$props3.multiple;
	      var search = _this$props3.search;
	      var _this$state = _this.state;
	      var searchQuery = _this$state.searchQuery;
	      var value = _this$state.value;
	
	
	      if (searchQuery || !search || !multiple || (0, _isEmpty3.default)(value)) return;
	
	      e.preventDefault();
	
	      // remove most recent value
	      var newValue = (0, _dropRight3.default)(value);
	
	      _this.setValue(newValue);
	      _this.handleChange(e, newValue);
	    }, _this.closeOnDocumentClick = function (e) {
	      debug('closeOnDocumentClick()');
	      debug(e);
	      _this.close();
	    }, _this.handleMouseDown = function (e) {
	      debug('handleMouseDown()');
	      var onMouseDown = _this.props.onMouseDown;
	
	      if (onMouseDown) onMouseDown(e);
	      _this.isMouseDown = true;
	      document.addEventListener('mouseup', _this.handleDocumentMouseUp);
	    }, _this.handleDocumentMouseUp = function () {
	      debug('handleDocumentMouseUp()');
	      _this.isMouseDown = false;
	      document.removeEventListener('mouseup', _this.handleDocumentMouseUp);
	    }, _this.handleClick = function (e) {
	      debug('handleClick()', e);
	      var onClick = _this.props.onClick;
	
	      if (onClick) onClick(e);
	      // prevent closeOnDocumentClick()
	      e.stopPropagation();
	      _this.toggle();
	    }, _this.handleItemClick = function (e, value) {
	      debug('handleItemClick()');
	      debug(value);
	      var _this$props4 = _this.props;
	      var multiple = _this$props4.multiple;
	      var name = _this$props4.name;
	      var onAddItem = _this$props4.onAddItem;
	      var options = _this$props4.options;
	
	      var item = _this.getItemByValue(value) || {};
	
	      // prevent toggle() in handleClick()
	      e.stopPropagation();
	      // prevent closeOnDocumentClick() if multiple or item is disabled
	      if (multiple || item.disabled) {
	        e.nativeEvent.stopImmediatePropagation();
	      }
	
	      if (item.disabled) return;
	
	      // notify the onAddItem prop if this is a new value
	      if (onAddItem && !(0, _some3.default)(options, { text: value })) {
	        onAddItem(e, { name: name, value: value });
	      }
	
	      // notify the onChange prop that the user is trying to change value
	      if (multiple) {
	        var newValue = (0, _union3.default)(_this.state.value, [value]);
	        _this.setValue(newValue);
	        _this.handleChange(e, newValue);
	      } else {
	        _this.setValue(value);
	        _this.handleChange(e, value);
	        _this.close();
	      }
	    }, _this.handleFocus = function (e) {
	      debug('handleFocus()');
	      var onFocus = _this.props.onFocus;
	
	      if (onFocus) onFocus(e);
	      _this.setState({ focus: true });
	    }, _this.handleBlur = function (e) {
	      debug('handleBlur()');
	      var _this$props5 = _this.props;
	      var multiple = _this$props5.multiple;
	      var onBlur = _this$props5.onBlur;
	      var selectOnBlur = _this$props5.selectOnBlur;
	      // do not "blur" when the mouse is down inside of the Dropdown
	
	      if (_this.isMouseDown) return;
	      if (onBlur) onBlur(e);
	      if (selectOnBlur && !multiple) _this.selectHighlightedItem(e);
	      _this.setState({ focus: false });
	    }, _this.handleSearchChange = function (e) {
	      debug('handleSearchChange()');
	      debug(e.target.value);
	      // prevent propagating to this.props.onChange()
	      e.stopPropagation();
	      var _this$props6 = _this.props;
	      var search = _this$props6.search;
	      var onSearchChange = _this$props6.onSearchChange;
	      var open = _this.state.open;
	
	      var newQuery = e.target.value;
	
	      if (onSearchChange) onSearchChange(e, newQuery);
	
	      // open search dropdown on search query
	      if (search && newQuery && !open) _this.open();
	
	      _this.setState({
	        selectedIndex: _this.getEnabledIndices()[0],
	        searchQuery: newQuery
	      });
	    }, _this.getMenuOptions = function () {
	      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
	      var _this$props7 = _this.props;
	      var multiple = _this$props7.multiple;
	      var search = _this$props7.search;
	      var allowAdditions = _this$props7.allowAdditions;
	      var additionPosition = _this$props7.additionPosition;
	      var additionLabel = _this$props7.additionLabel;
	      var options = _this$props7.options;
	      var searchQuery = _this.state.searchQuery;
	
	
	      var filteredOptions = options;
	
	      // filter out active options
	      if (multiple) {
	        filteredOptions = (0, _filter3.default)(filteredOptions, function (opt) {
	          return !(0, _includes3.default)(value, opt.value);
	        });
	      }
	
	      // filter by search query
	      if (search && searchQuery) {
	        if ((0, _isFunction3.default)(search)) {
	          filteredOptions = search(filteredOptions, searchQuery);
	        } else {
	          (function () {
	            var re = new RegExp((0, _escapeRegExp3.default)(searchQuery), 'i');
	            filteredOptions = (0, _filter3.default)(filteredOptions, function (opt) {
	              return re.test(opt.text);
	            });
	          })();
	        }
	      }
	
	      // insert the "add" item
	      if (allowAdditions && search && searchQuery && !(0, _some3.default)(filteredOptions, { text: searchQuery })) {
	        var addItem = {
	          text: additionLabel ? additionLabel + ' ' + searchQuery : searchQuery,
	          value: searchQuery
	        };
	        if (additionPosition === 'top') filteredOptions.unshift(addItem);else filteredOptions.push(addItem);
	      }
	
	      return filteredOptions;
	    }, _this.getSelectedItem = function () {
	      var selectedIndex = _this.state.selectedIndex;
	
	      var options = _this.getMenuOptions();
	
	      return (0, _get4.default)(options, '[' + selectedIndex + ']');
	    }, _this.getEnabledIndices = function (givenOptions) {
	      var options = givenOptions || _this.getMenuOptions();
	
	      return (0, _reduce3.default)(options, function (memo, item, index) {
	        if (!item.disabled) memo.push(index);
	        return memo;
	      }, []);
	    }, _this.getItemByValue = function (value) {
	      var options = _this.props.options;
	
	      return (0, _find3.default)(options, { value: value });
	    }, _this.getMenuItemIndexByValue = function (value) {
	      var options = _this.getMenuOptions();
	
	      return (0, _findIndex3.default)(options, ['value', value]);
	    }, _this.setValue = function (value) {
	      debug('setValue()');
	      debug('value', value);
	      var multiple = _this.props.multiple;
	      var selectedIndex = _this.state.selectedIndex;
	
	      var options = _this.getMenuOptions(value);
	      var enabledIndicies = _this.getEnabledIndices(options);
	      var newState = {
	        searchQuery: ''
	      };
	
	      // update the selected index
	      if (!selectedIndex) {
	        var firstIndex = enabledIndicies[0];
	
	        // Select the currently active item, if none, use the first item.
	        // Multiple selects remove active items from the list,
	        // their initial selected index should be 0.
	        newState.selectedIndex = multiple ? firstIndex : _this.getMenuItemIndexByValue(value || (0, _get4.default)(options, '[' + firstIndex + '].value'));
	      } else if (multiple) {
	        // multiple selects remove options from the menu as they are made active
	        // keep the selected index within range of the remaining items
	        if (selectedIndex >= options.length - 1) {
	          newState.selectedIndex = enabledIndicies[enabledIndicies.length - 1];
	        }
	      } else {
	        var activeIndex = _this.getMenuItemIndexByValue(value);
	
	        // regular selects can only have one active item
	        // set the selected index to the currently active item
	        newState.selectedIndex = (0, _includes3.default)(enabledIndicies, activeIndex) ? activeIndex : undefined;
	      }
	
	      _this.trySetState({ value: value }, newState);
	    }, _this.handleLabelRemove = function (e, labelProps) {
	      debug('handleLabelRemove()');
	      // prevent focusing search input on click
	      e.stopPropagation();
	      var value = _this.state.value;
	
	      var newValue = (0, _without3.default)(value, labelProps.value);
	      debug('label props:', labelProps);
	      debug('current value:', value);
	      debug('remove value:', labelProps.value);
	      debug('new value:', newValue);
	
	      _this.setValue(newValue);
	      _this.handleChange(e, newValue);
	    }, _this.moveSelectionBy = function (offset) {
	      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.selectedIndex;
	
	      debug('moveSelectionBy()');
	      debug('offset: ' + offset);
	
	      var options = _this.getMenuOptions();
	      var lastIndex = options.length - 1;
	
	      // Prevent infinite loop
	      if ((0, _every3.default)(options, 'disabled')) return;
	
	      // next is after last, wrap to beginning
	      // next is before first, wrap to end
	      var nextIndex = startIndex + offset;
	      if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;
	
	      if (options[nextIndex].disabled) return _this.moveSelectionBy(offset, nextIndex);
	
	      _this.setState({ selectedIndex: nextIndex });
	      _this.scrollSelectedItemIntoView();
	    }, _this.scrollSelectedItemIntoView = function () {
	      debug('scrollSelectedItemIntoView()');
	      var menu = document.querySelector('.ui.dropdown.active.visible .menu.visible');
	      var item = menu.querySelector('.item.selected');
	      debug('menu: ' + menu);
	      debug('item: ' + item);
	      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
	      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;
	
	      if (isOutOfUpperView) {
	        menu.scrollTop = item.offsetTop;
	      } else if (isOutOfLowerView) {
	        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
	      }
	    }, _this.open = function () {
	      debug('open()');
	      var search = _this.props.search;
	
	      if (search) _this._search.focus();
	
	      _this.trySetState({ open: true });
	    }, _this.close = function () {
	      debug('close()');
	      _this.trySetState({ open: false });
	    }, _this.handleClose = function () {
	      debug('handleClose()');
	      // https://github.com/Semantic-Org/Semantic-UI-React/issues/627
	      // Blur the Dropdown on close so it is blurred after selecting an item.
	      // This is to prevent it from re-opening when switching tabs after selecting an item.
	      _this._dropdown.blur();
	
	      // We need to keep the virtual model in sync with the browser focus change
	      // https://github.com/Semantic-Org/Semantic-UI-React/issues/692
	      _this.setState({ focus: false });
	    }, _this.toggle = function () {
	      return _this.state.open ? _this.close() : _this.open();
	    }, _this.renderText = function () {
	      var _this$props8 = _this.props;
	      var multiple = _this$props8.multiple;
	      var placeholder = _this$props8.placeholder;
	      var search = _this$props8.search;
	      var text = _this$props8.text;
	      var _this$state2 = _this.state;
	      var searchQuery = _this$state2.searchQuery;
	      var value = _this$state2.value;
	      var open = _this$state2.open;
	
	      var hasValue = multiple ? !(0, _isEmpty3.default)(value) : !!value;
	
	      var classes = (0, _classnames2.default)(placeholder && !hasValue && 'default', 'text', search && searchQuery && 'filtered');
	      var _text = placeholder;
	      if (searchQuery) {
	        _text = null;
	      } else if (text) {
	        _text = text;
	      } else if (open && !multiple) {
	        _text = (0, _get4.default)(_this.getSelectedItem(), 'text');
	      } else if (hasValue) {
	        _text = (0, _get4.default)(_this.getItemByValue(value), 'text');
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: classes },
	        _text
	      );
	    }, _this.renderHiddenInput = function () {
	      debug('renderHiddenInput()');
	      var value = _this.state.value;
	      var _this$props9 = _this.props;
	      var multiple = _this$props9.multiple;
	      var name = _this$props9.name;
	      var options = _this$props9.options;
	      var selection = _this$props9.selection;
	
	      debug('name:      ' + name);
	      debug('selection: ' + selection);
	      debug('value:     ' + value);
	      if (!selection) return null;
	
	      return _react2.default.createElement(
	        'select',
	        { type: 'hidden', name: name, value: value, multiple: multiple },
	        (0, _map3.default)(options, function (option) {
	          return _react2.default.createElement(
	            'option',
	            { key: option.value, value: option.value },
	            option.text
	          );
	        })
	      );
	    }, _this.renderSearchInput = function () {
	      var _this$props10 = _this.props;
	      var search = _this$props10.search;
	      var name = _this$props10.name;
	      var searchQuery = _this.state.searchQuery;
	
	
	      if (!search) return null;
	
	      // resize the search input, temporarily show the sizer so we can measure it
	      var searchWidth = void 0;
	      if (_this._sizer && searchQuery) {
	        _this._sizer.style.display = 'inline';
	        _this._sizer.textContent = searchQuery;
	        searchWidth = Math.ceil(_this._sizer.getBoundingClientRect().width);
	        _this._sizer.style.removeProperty('display');
	      }
	
	      return _react2.default.createElement('input', {
	        value: searchQuery,
	        onChange: _this.handleSearchChange,
	        className: 'search',
	        name: [name, 'search'].join('-'),
	        autoComplete: 'off',
	        tabIndex: '0',
	        style: { width: searchWidth },
	        ref: function ref(c) {
	          return _this._search = c;
	        }
	      });
	    }, _this.renderSearchSizer = function () {
	      var _this$props11 = _this.props;
	      var search = _this$props11.search;
	      var multiple = _this$props11.multiple;
	
	
	      if (!(search && multiple)) return null;
	
	      return _react2.default.createElement('span', { className: 'sizer', ref: function ref(c) {
	          return _this._sizer = c;
	        } });
	    }, _this.renderLabels = function () {
	      debug('renderLabels()');
	      var multiple = _this.props.multiple;
	      var value = _this.state.value;
	
	      if (!multiple || (0, _isEmpty3.default)(value)) {
	        return;
	      }
	      var selectedItems = (0, _map3.default)(value, _this.getItemByValue);
	      debug('selectedItems', selectedItems);
	
	      // if no item could be found for a given state value the selected item will be undefined
	      // compact the selectedItems so we only have actual objects left
	      return (0, _map3.default)((0, _compact3.default)(selectedItems), function (item) {
	        return _react2.default.createElement(_Label2.default, {
	          key: item.value,
	          as: 'a',
	          content: item.text,
	          value: item.value,
	          onRemove: _this.handleLabelRemove
	        });
	      });
	    }, _this.renderOptions = function () {
	      var _this$props12 = _this.props;
	      var multiple = _this$props12.multiple;
	      var search = _this$props12.search;
	      var noResultsMessage = _this$props12.noResultsMessage;
	      var _this$state3 = _this.state;
	      var selectedIndex = _this$state3.selectedIndex;
	      var value = _this$state3.value;
	
	      var options = _this.getMenuOptions();
	
	      if (search && (0, _isEmpty3.default)(options)) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'message' },
	          noResultsMessage
	        );
	      }
	
	      var isActive = multiple ? function (optValue) {
	        return (0, _includes3.default)(value, optValue);
	      } : function (optValue) {
	        return optValue === value;
	      };
	
	      return (0, _map3.default)(options, function (opt, i) {
	        return _react2.default.createElement(_DropdownItem2.default, _extends({
	          key: opt.value + '-' + i,
	          active: isActive(opt.value),
	          onClick: _this.handleItemClick,
	          selected: selectedIndex === i
	        }, opt, {
	          // Needed for handling click events on disabled items
	          style: _extends({}, opt.style, { pointerEvents: 'all' })
	        }));
	      });
	    }, _this.renderMenu = function () {
	      var _this$props13 = _this.props;
	      var children = _this$props13.children;
	      var header = _this$props13.header;
	      var open = _this.state.open;
	
	      var menuClasses = open ? 'visible' : '';
	
	      // single menu child
	      if (children) {
	        var menuChild = _react.Children.only(children);
	        var className = (0, _classnames2.default)(menuClasses, menuChild.props.className);
	
	        return (0, _react.cloneElement)(menuChild, { className: className });
	      }
	
	      return _react2.default.createElement(
	        _DropdownMenu2.default,
	        { className: menuClasses },
	        (0, _lib.createShorthand)(_DropdownHeader2.default, function (val) {
	          return { content: val };
	        }, header),
	        _this.renderOptions()
	      );
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Dropdown, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (_get2(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), 'componentWillMount', this)) _get2(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), 'componentWillMount', this).call(this);
	      debug('componentWillMount()');
	      var _state = this.state;
	      var open = _state.open;
	      var value = _state.value;
	
	
	      this.setValue(value);
	      if (open) this.open();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _isEqual3.default)(nextProps, this.props) || !(0, _isEqual3.default)(nextState, this.state);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      _get2(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
	      debug('componentWillReceiveProps()');
	      // TODO objectDiff still runs in prod, stop it
	      debug('to props:', (0, _lib.objectDiff)(this.props, nextProps));
	
	      /* eslint-disable no-console */
	      if (process.env.NODE_ENV !== 'production') {
	        // in development, validate value type matches dropdown type
	        var isNextValueArray = Array.isArray(nextProps.value);
	        var hasValue = (0, _has3.default)(nextProps, 'value');
	
	        if (hasValue && nextProps.multiple && !isNextValueArray) {
	          console.error('Dropdown `value` must be an array when `multiple` is set.' + (' Received type: `' + Object.prototype.toString.call(nextProps.value) + '`.'));
	        } else if (hasValue && !nextProps.multiple && isNextValueArray) {
	          console.error('Dropdown `value` must not be an array when `multiple` is not set.' + ' Either set `multiple={true}` or use a string or number value.');
	        }
	      }
	      /* eslint-enable no-console */
	
	      if (!(0, _isEqual3.default)(nextProps.value, this.props.value)) {
	        debug('value changed, setting', nextProps.value);
	        this.setValue(nextProps.value);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      // eslint-disable-line complexity
	      debug('componentDidUpdate()');
	      // TODO objectDiff still runs in prod, stop it
	      debug('to state:', (0, _lib.objectDiff)(prevState, this.state));
	
	      // focused / blurred
	      if (!prevState.focus && this.state.focus) {
	        debug('dropdown focused');
	        if (!this.isMouseDown) {
	          debug('mouse is not down, opening');
	          this.open();
	        }
	        if (!this.state.open) {
	          document.addEventListener('keydown', this.openOnArrow);
	          document.addEventListener('keydown', this.openOnSpace);
	        } else {
	          document.addEventListener('keydown', this.moveSelectionOnKeyDown);
	          document.addEventListener('keydown', this.selectItemOnEnter);
	          document.addEventListener('keydown', this.removeItemOnBackspace);
	        }
	      } else if (prevState.focus && !this.state.focus) {
	        debug('dropdown blurred');
	        if (!this.isMouseDown) {
	          debug('mouse is not down, closing');
	          this.close();
	        }
	        document.removeEventListener('keydown', this.openOnArrow);
	        document.removeEventListener('keydown', this.openOnSpace);
	        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
	        document.removeEventListener('keydown', this.selectItemOnEnter);
	        document.removeEventListener('keydown', this.removeItemOnBackspace);
	      }
	
	      // opened / closed
	      if (!prevState.open && this.state.open) {
	        debug('dropdown opened');
	        document.addEventListener('keydown', this.closeOnEscape);
	        document.addEventListener('keydown', this.moveSelectionOnKeyDown);
	        document.addEventListener('keydown', this.selectItemOnEnter);
	        document.addEventListener('keydown', this.removeItemOnBackspace);
	        document.addEventListener('click', this.closeOnDocumentClick);
	        document.removeEventListener('keydown', this.openOnArrow);
	        document.removeEventListener('keydown', this.openOnSpace);
	      } else if (prevState.open && !this.state.open) {
	        debug('dropdown closed');
	        this.handleClose();
	        document.removeEventListener('keydown', this.closeOnEscape);
	        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
	        document.removeEventListener('keydown', this.selectItemOnEnter);
	        document.removeEventListener('keydown', this.removeItemOnBackspace);
	        document.removeEventListener('click', this.closeOnDocumentClick);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      debug('componentWillUnmount()');
	      document.removeEventListener('keydown', this.openOnArrow);
	      document.removeEventListener('keydown', this.openOnSpace);
	      document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
	      document.removeEventListener('keydown', this.selectItemOnEnter);
	      document.removeEventListener('keydown', this.removeItemOnBackspace);
	      document.removeEventListener('keydown', this.closeOnEscape);
	      document.removeEventListener('click', this.closeOnDocumentClick);
	    }
	
	    // ----------------------------------------
	    // Document Event Handlers
	    // ----------------------------------------
	
	    // onChange needs to receive a value
	    // can't rely on props.value if we are controlled
	
	
	    // ----------------------------------------
	    // Component Event Handlers
	    // ----------------------------------------
	
	    // ----------------------------------------
	    // Getters
	    // ----------------------------------------
	
	    // There are times when we need to calculate the options based on a value
	    // that hasn't yet been persisted to state.
	
	
	    // ----------------------------------------
	    // Setters
	    // ----------------------------------------
	
	    // ----------------------------------------
	    // Behavior
	    // ----------------------------------------
	
	    // ----------------------------------------
	    // Render
	    // ----------------------------------------
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      debug('render()');
	      debug('props', this.props);
	      debug('state', this.state);
	      var open = this.state.open;
	      var _props = this.props;
	      var basic = _props.basic;
	      var button = _props.button;
	      var className = _props.className;
	      var compact = _props.compact;
	      var fluid = _props.fluid;
	      var floating = _props.floating;
	      var icon = _props.icon;
	      var inline = _props.inline;
	      var labeled = _props.labeled;
	      var multiple = _props.multiple;
	      var pointing = _props.pointing;
	      var search = _props.search;
	      var selection = _props.selection;
	      var simple = _props.simple;
	      var loading = _props.loading;
	      var error = _props.error;
	      var disabled = _props.disabled;
	      var scrolling = _props.scrolling;
	      var trigger = _props.trigger;
	
	      // Classes
	
	      var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(open, 'active visible'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(button, 'button'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(floating, 'floating'), (0, _lib.useKeyOnly)(inline, 'inline'),
	      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
	      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
	      // TODO: the icon class is only required when a dropdown is a button
	      // useKeyOnly(icon, 'icon'),
	      (0, _lib.useKeyOnly)(labeled, 'labeled'),
	      // TODO: linkItem is required only when Menu child, add dynamically
	      // useKeyOnly(linkItem, 'link item'),
	      (0, _lib.useKeyOnly)(multiple, 'multiple'), (0, _lib.useKeyOnly)(search, 'search'), (0, _lib.useKeyOnly)(selection, 'selection'), (0, _lib.useKeyOnly)(simple, 'simple'), (0, _lib.useKeyOnly)(scrolling, 'scrolling'), (0, _lib.useKeyOrValueAndKey)(pointing, 'pointing'), className, 'dropdown');
	      var rest = (0, _lib.getUnhandledProps)(Dropdown, this.props);
	      var ElementType = (0, _lib.getElementType)(Dropdown, this.props);
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, {
	          className: classes,
	          onBlur: this.handleBlur,
	          onClick: this.handleClick,
	          onMouseDown: this.handleMouseDown,
	          onFocus: this.handleFocus,
	          onChange: this.handleChange,
	          tabIndex: search ? undefined : 0,
	          ref: function ref(c) {
	            return _this2._dropdown = c;
	          }
	        }),
	        this.renderHiddenInput(),
	        this.renderLabels(),
	        this.renderSearchInput(),
	        this.renderSearchSizer(),
	        trigger || this.renderText(),
	        _Icon2.default.create(icon),
	        this.renderMenu()
	      );
	    }
	  }]);
	
	  return Dropdown;
	}(_lib.AutoControlledComponent);
	
	Dropdown.propTypes = {
	  /**
	   * Allow user additions to the list of options (boolean).
	   * Requires the use of `selection`, `options` and `search`.
	   */
	  allowAdditions: _lib.customPropTypes.every([_lib.customPropTypes.demand(['options', 'selection', 'search']), _react.PropTypes.bool]),
	
	  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
	  additionPosition: _react.PropTypes.oneOf(_meta.props.additionPosition),
	
	  /** Label prefixed to an option added by a user. */
	  additionLabel: _react.PropTypes.string,
	
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A Dropdown can reduce its complexity */
	  basic: _react.PropTypes.bool,
	
	  /** Format the Dropdown to appear as a button. */
	  button: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['options', 'selection']), _lib.customPropTypes.givenProps({ children: _react.PropTypes.any.isRequired }, _react2.default.PropTypes.element.isRequired)]),
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A compact dropdown has no minimum width. */
	  compact: _react.PropTypes.bool,
	
	  /** Initial value of open. */
	  defaultOpen: _react.PropTypes.bool,
	
	  /** Initial value or value array if multiple. */
	  defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]))]),
	
	  /** A disabled dropdown menu or item does not allow user interaction. */
	  disabled: _react.PropTypes.bool,
	
	  /** An errored dropdown can alert a user to a problem. */
	  error: _react.PropTypes.bool,
	
	  /** A dropdown menu can contain floated content. */
	  floating: _react.PropTypes.bool,
	
	  /** A dropdown can take the full width of its parent */
	  fluid: _react.PropTypes.bool,
	
	  /** A dropdown menu can contain a header. */
	  header: _react.PropTypes.node,
	
	  /** Add an icon by name or as a component. */
	  icon: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
	
	  /** A dropdown can be formatted to appear inline in other content. */
	  inline: _react.PropTypes.bool,
	
	  /** A dropdown can be labeled. */
	  labeled: _react.PropTypes.bool,
	
	  // linkItem: PropTypes.bool,
	
	  /** A dropdown can show that it is currently loading data. */
	  loading: _react.PropTypes.bool,
	
	  /** A selection dropdown can allow multiple selections. */
	  multiple: _react.PropTypes.bool,
	
	  /** Name of the hidden input which holds the value. */
	  name: _react.PropTypes.string,
	
	  /** Message to display when there are no results. */
	  noResultsMessage: _react.PropTypes.string,
	
	  /** Called with the name and new value added by the user. Use this to update the options list. */
	  onAddItem: _react.PropTypes.func,
	
	  /** Called with the React Synthetic Event on Dropdown blur. */
	  onBlur: _react.PropTypes.func,
	
	  /** Called with the React Synthetic Event and { name, value } on change. */
	  onChange: _react.PropTypes.func,
	
	  /** Called with the React Synthetic Event and current value on search input change. */
	  onSearchChange: _react.PropTypes.func,
	
	  /** Called with the React Synthetic Event on Dropdown click. */
	  onClick: _react.PropTypes.func,
	
	  /** Called with the React Synthetic Event on Dropdown focus. */
	  onFocus: _react.PropTypes.func,
	
	  /** Called with the React Synthetic Event on Dropdown mouse down. */
	  onMouseDown: _react.PropTypes.func,
	
	  /** Controls whether or not the dropdown menu is displayed. */
	  open: _react.PropTypes.bool,
	
	  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
	  options: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _react.PropTypes.arrayOf(_react.PropTypes.shape(_DropdownItem2.default.propTypes))]),
	
	  /** Placeholder text. */
	  placeholder: _react.PropTypes.string,
	
	  /** A dropdown can be formatted so that its menu is pointing. */
	  pointing: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.pointing)]),
	
	  /** A dropdown can have its menu scroll. */
	  scrolling: _react.PropTypes.bool,
	
	  /**
	   * A selection dropdown can allow a user to search through a large list of choices.
	   * Pass a function here to replace the default search.
	   */
	  search: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
	
	  // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?
	
	  /** A dropdown can be used to select between choices in a form. */
	  selection: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _lib.customPropTypes.demand(['options']), _react.PropTypes.bool]),
	
	  /** Define whether the highlighted item should be selected on blur. */
	  selectOnBlur: _react.PropTypes.bool,
	
	  /** A simple dropdown can open without Javascript. */
	  simple: _react.PropTypes.bool,
	
	  /** The text displayed in the dropdown, usually for the active item. */
	  text: _react.PropTypes.string,
	
	  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
	  trigger: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['selection', 'text']), _react.PropTypes.node]),
	
	  /** Current value or value array if multiple. Creates a controlled component. */
	  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]))])
	};
	Dropdown.defaultProps = {
	  icon: 'dropdown',
	  additionLabel: 'Add:',
	  noResultsMessage: 'No results found.',
	  selectOnBlur: true
	};
	Dropdown.autoControlledProps = ['open', 'value'];
	Dropdown._meta = _meta;
	Dropdown.Divider = _DropdownDivider2.default;
	Dropdown.Header = _DropdownHeader2.default;
	Dropdown.Item = _DropdownItem2.default;
	Dropdown.Menu = _DropdownMenu2.default;
	exports.default = Dropdown;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 843 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEvery = __webpack_require__(844),
	    baseEvery = __webpack_require__(845),
	    baseIteratee = __webpack_require__(639),
	    isArray = __webpack_require__(524),
	    isIterateeCall = __webpack_require__(745);
	
	/**
	 * Checks if `predicate` returns truthy for **all** elements of `collection`.
	 * Iteration is stopped once `predicate` returns falsey. The predicate is
	 * invoked with three arguments: (value, index|key, collection).
	 *
	 * **Note:** This method returns `true` for
	 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	 * elements of empty collections.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 * @example
	 *
	 * _.every([true, 1, null, 'yes'], Boolean);
	 * // => false
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': false },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.every(users, { 'user': 'barney', 'active': false });
	 * // => false
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.every(users, ['active', false]);
	 * // => true
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.every(users, 'active');
	 * // => false
	 */
	function every(collection, predicate, guard) {
	  var func = isArray(collection) ? arrayEvery : baseEvery;
	  if (guard && isIterateeCall(collection, predicate, guard)) {
	    predicate = undefined;
	  }
	  return func(collection, baseIteratee(predicate, 3));
	}
	
	module.exports = every;


/***/ },
/* 844 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.every` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 */
	function arrayEvery(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (!predicate(array[index], index, array)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = arrayEvery;


/***/ },
/* 845 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(631);
	
	/**
	 * The base implementation of `_.every` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`
	 */
	function baseEvery(collection, predicate) {
	  var result = true;
	  baseEach(collection, function(value, index, collection) {
	    result = !!predicate(value, index, collection);
	    return result;
	  });
	  return result;
	}
	
	module.exports = baseEvery;


/***/ },
/* 846 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(577),
	    baseRest = __webpack_require__(625),
	    isArrayLikeObject = __webpack_require__(626);
	
	/**
	 * Creates an array excluding all given values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.pull`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...*} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.xor
	 * @example
	 *
	 * _.without([2, 1, 2, 3], 1, 2);
	 * // => [3]
	 */
	var without = baseRest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, values)
	    : [];
	});
	
	module.exports = without;


/***/ },
/* 847 */
/***/ function(module, exports, __webpack_require__) {

	var arrayReduce = __webpack_require__(768),
	    baseEach = __webpack_require__(631),
	    baseIteratee = __webpack_require__(639),
	    baseReduce = __webpack_require__(848),
	    isArray = __webpack_require__(524);
	
	/**
	 * Reduces `collection` to a value which is the accumulated result of running
	 * each element in `collection` thru `iteratee`, where each successive
	 * invocation is supplied the return value of the previous. If `accumulator`
	 * is not given, the first element of `collection` is used as the initial
	 * value. The iteratee is invoked with four arguments:
	 * (accumulator, value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.reduce`, `_.reduceRight`, and `_.transform`.
	 *
	 * The guarded methods are:
	 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	 * and `sortBy`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @returns {*} Returns the accumulated value.
	 * @see _.reduceRight
	 * @example
	 *
	 * _.reduce([1, 2], function(sum, n) {
	 *   return sum + n;
	 * }, 0);
	 * // => 3
	 *
	 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	 *   (result[value] || (result[value] = [])).push(key);
	 *   return result;
	 * }, {});
	 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	 */
	function reduce(collection, iteratee, accumulator) {
	  var func = isArray(collection) ? arrayReduce : baseReduce,
	      initAccum = arguments.length < 3;
	
	  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
	}
	
	module.exports = reduce;


/***/ },
/* 848 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.reduce` and `_.reduceRight`, without support
	 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} accumulator The initial value.
	 * @param {boolean} initAccum Specify using the first or last element of
	 *  `collection` as the initial value.
	 * @param {Function} eachFunc The function to iterate over `collection`.
	 * @returns {*} Returns the accumulated value.
	 */
	function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	  eachFunc(collection, function(value, index, collection) {
	    accumulator = initAccum
	      ? (initAccum = false, value)
	      : iteratee(accumulator, value, index, collection);
	  });
	  return accumulator;
	}
	
	module.exports = baseReduce;


/***/ },
/* 849 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(562);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
	    reHasRegExpChar = RegExp(reRegExpChar.source);
	
	/**
	 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
	 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to escape.
	 * @returns {string} Returns the escaped string.
	 * @example
	 *
	 * _.escapeRegExp('[lodash](https://lodash.com/)');
	 * // => '\[lodash\]\(https://lodash\.com/\)'
	 */
	function escapeRegExp(string) {
	  string = toString(string);
	  return (string && reHasRegExpChar.test(string))
	    ? string.replace(reRegExpChar, '\\$&')
	    : string;
	}
	
	module.exports = escapeRegExp;


/***/ },
/* 850 */
/***/ function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(780),
	    toInteger = __webpack_require__(723);
	
	/**
	 * Creates a slice of `array` with `n` elements dropped from the end.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @param {number} [n=1] The number of elements to drop.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the slice of `array`.
	 * @example
	 *
	 * _.dropRight([1, 2, 3]);
	 * // => [1, 2]
	 *
	 * _.dropRight([1, 2, 3], 2);
	 * // => [1]
	 *
	 * _.dropRight([1, 2, 3], 5);
	 * // => []
	 *
	 * _.dropRight([1, 2, 3], 0);
	 * // => [1, 2, 3]
	 */
	function dropRight(array, n, guard) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return [];
	  }
	  n = (guard || n === undefined) ? 1 : toInteger(n);
	  n = length - n;
	  return baseSlice(array, 0, n < 0 ? 0 : n);
	}
	
	module.exports = dropRight;


/***/ },
/* 851 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Icon = __webpack_require__(813);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Icon2.default;

/***/ },
/* 852 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Label = __webpack_require__(815);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Label2.default;

/***/ },
/* 853 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function DropdownDivider(props) {
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)('divider', className);
	  var rest = (0, _lib.getUnhandledProps)(DropdownDivider, props);
	  var ElementType = (0, _lib.getElementType)(DropdownDivider, props);
	
	  return _react2.default.createElement(ElementType, _extends({}, rest, { className: classes }));
	}
	
	DropdownDivider._meta = {
	  name: 'DropdownDivider',
	  parent: 'Dropdown',
	  type: _lib.META.TYPES.MODULE
	};
	
	DropdownDivider.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = DropdownDivider;

/***/ },
/* 854 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Flag = __webpack_require__(855);
	
	var _Flag2 = _interopRequireDefault(_Flag);
	
	var _Icon = __webpack_require__(851);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Image = __webpack_require__(857);
	
	var _Image2 = _interopRequireDefault(_Image);
	
	var _Label = __webpack_require__(852);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * An item sub-component for Dropdown component
	 */
	var DropdownItem = function (_Component) {
	  _inherits(DropdownItem, _Component);
	
	  function DropdownItem() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DropdownItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
	      var _this$props = _this.props;
	      var onClick = _this$props.onClick;
	      var value = _this$props.value;
	
	
	      if (onClick) onClick(e, value);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(DropdownItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var active = _props.active;
	      var children = _props.children;
	      var className = _props.className;
	      var disabled = _props.disabled;
	      var description = _props.description;
	      var flag = _props.flag;
	      var icon = _props.icon;
	      var image = _props.image;
	      var label = _props.label;
	      var selected = _props.selected;
	      var text = _props.text;
	
	
	      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(selected, 'selected'), 'item', className);
	      // add default dropdown icon if item contains another menu
	      var iconName = icon || _lib.childrenUtils.someByType(children, 'DropdownMenu') && 'dropdown';
	      var rest = (0, _lib.getUnhandledProps)(DropdownItem, this.props);
	      var ElementType = (0, _lib.getElementType)(DropdownItem, this.props);
	
	      if (children) {
	        return _react2.default.createElement(
	          ElementType,
	          _extends({}, rest, { className: classes, onClick: this.handleClick }),
	          children
	        );
	      }
	
	      var flagElement = _Flag2.default.create(flag);
	      var iconElement = _Icon2.default.create(iconName);
	      var imageElement = _Image2.default.create(image);
	      var labelElement = _Label2.default.create(label);
	      var descriptionElement = (0, _lib.createShorthand)('span', function (val) {
	        return { className: 'description', children: val };
	      }, description);
	
	      if (descriptionElement) {
	        return _react2.default.createElement(
	          ElementType,
	          _extends({}, rest, { className: classes, onClick: this.handleClick }),
	          imageElement,
	          iconElement,
	          flagElement,
	          labelElement,
	          descriptionElement,
	          (0, _lib.createShorthand)('span', function (val) {
	            return { className: 'text', children: val };
	          }, text)
	        );
	      }
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes, onClick: this.handleClick }),
	        imageElement,
	        iconElement,
	        flagElement,
	        labelElement,
	        text
	      );
	    }
	  }]);
	
	  return DropdownItem;
	}(_react.Component);
	
	DropdownItem.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Style as the currently chosen item. */
	  active: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Additional text with less emphasis. */
	  description: _lib.customPropTypes.itemShorthand,
	
	  /** A dropdown item can be disabled. */
	  disabled: _react.PropTypes.bool,
	
	  /** Shorthand for Flag. */
	  flag: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for Icon. */
	  icon: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for Image. */
	  image: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for Label. */
	  label: _lib.customPropTypes.itemShorthand,
	
	  /**
	   * The item currently selected by keyboard shortcut.
	   * This is not the active item.
	   */
	  selected: _react.PropTypes.bool,
	
	  /** Display text. */
	  text: _lib.customPropTypes.contentShorthand,
	
	  /** Stored value */
	  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	
	  /** Called on click with (event, value, text). */
	  onClick: _react.PropTypes.func
	};
	DropdownItem._meta = {
	  name: 'DropdownItem',
	  parent: 'Dropdown',
	  type: _lib.META.TYPES.MODULE
	};
	exports.default = DropdownItem;

/***/ },
/* 855 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Flag = __webpack_require__(856);
	
	var _Flag2 = _interopRequireDefault(_Flag);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Flag2.default;

/***/ },
/* 856 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var names = ['ad', 'andorra', 'ae', 'united arab emirates', 'uae', 'af', 'afghanistan', 'ag', 'antigua', 'ai', 'anguilla', 'al', 'albania', 'am', 'armenia', 'an', 'netherlands antilles', 'ao', 'angola', 'ar', 'argentina', 'as', 'american samoa', 'at', 'austria', 'au', 'australia', 'aw', 'aruba', 'ax', 'aland islands', 'az', 'azerbaijan', 'ba', 'bosnia', 'bb', 'barbados', 'bd', 'bangladesh', 'be', 'belgium', 'bf', 'burkina faso', 'bg', 'bulgaria', 'bh', 'bahrain', 'bi', 'burundi', 'bj', 'benin', 'bm', 'bermuda', 'bn', 'brunei', 'bo', 'bolivia', 'br', 'brazil', 'bs', 'bahamas', 'bt', 'bhutan', 'bv', 'bouvet island', 'bw', 'botswana', 'by', 'belarus', 'bz', 'belize', 'ca', 'canada', 'cc', 'cocos islands', 'cd', 'congo', 'cf', 'central african republic', 'cg', 'congo brazzaville', 'ch', 'switzerland', 'ci', 'cote divoire', 'ck', 'cook islands', 'cl', 'chile', 'cm', 'cameroon', 'cn', 'china', 'co', 'colombia', 'cr', 'costa rica', 'cs', 'cu', 'cuba', 'cv', 'cape verde', 'cx', 'christmas island', 'cy', 'cyprus', 'cz', 'czech republic', 'de', 'germany', 'dj', 'djibouti', 'dk', 'denmark', 'dm', 'dominica', 'do', 'dominican republic', 'dz', 'algeria', 'ec', 'ecuador', 'ee', 'estonia', 'eg', 'egypt', 'eh', 'western sahara', 'er', 'eritrea', 'es', 'spain', 'et', 'ethiopia', 'eu', 'european union', 'fi', 'finland', 'fj', 'fiji', 'fk', 'falkland islands', 'fm', 'micronesia', 'fo', 'faroe islands', 'fr', 'france', 'ga', 'gabon', 'gb', 'united kingdom', 'gd', 'grenada', 'ge', 'georgia', 'gf', 'french guiana', 'gh', 'ghana', 'gi', 'gibraltar', 'gl', 'greenland', 'gm', 'gambia', 'gn', 'guinea', 'gp', 'guadeloupe', 'gq', 'equatorial guinea', 'gr', 'greece', 'gs', 'sandwich islands', 'gt', 'guatemala', 'gu', 'guam', 'gw', 'guinea-bissau', 'gy', 'guyana', 'hk', 'hong kong', 'hm', 'heard island', 'hn', 'honduras', 'hr', 'croatia', 'ht', 'haiti', 'hu', 'hungary', 'id', 'indonesia', 'ie', 'ireland', 'il', 'israel', 'in', 'india', 'io', 'indian ocean territory', 'iq', 'iraq', 'ir', 'iran', 'is', 'iceland', 'it', 'italy', 'jm', 'jamaica', 'jo', 'jordan', 'jp', 'japan', 'ke', 'kenya', 'kg', 'kyrgyzstan', 'kh', 'cambodia', 'ki', 'kiribati', 'km', 'comoros', 'kn', 'saint kitts and nevis', 'kp', 'north korea', 'kr', 'south korea', 'kw', 'kuwait', 'ky', 'cayman islands', 'kz', 'kazakhstan', 'la', 'laos', 'lb', 'lebanon', 'lc', 'saint lucia', 'li', 'liechtenstein', 'lk', 'sri lanka', 'lr', 'liberia', 'ls', 'lesotho', 'lt', 'lithuania', 'lu', 'luxembourg', 'lv', 'latvia', 'ly', 'libya', 'ma', 'morocco', 'mc', 'monaco', 'md', 'moldova', 'me', 'montenegro', 'mg', 'madagascar', 'mh', 'marshall islands', 'mk', 'macedonia', 'ml', 'mali', 'mm', 'myanmar', 'burma', 'mn', 'mongolia', 'mo', 'macau', 'mp', 'northern mariana islands', 'mq', 'martinique', 'mr', 'mauritania', 'ms', 'montserrat', 'mt', 'malta', 'mu', 'mauritius', 'mv', 'maldives', 'mw', 'malawi', 'mx', 'mexico', 'my', 'malaysia', 'mz', 'mozambique', 'na', 'namibia', 'nc', 'new caledonia', 'ne', 'niger', 'nf', 'norfolk island', 'ng', 'nigeria', 'ni', 'nicaragua', 'nl', 'netherlands', 'no', 'norway', 'np', 'nepal', 'nr', 'nauru', 'nu', 'niue', 'nz', 'new zealand', 'om', 'oman', 'pa', 'panama', 'pe', 'peru', 'pf', 'french polynesia', 'pg', 'new guinea', 'ph', 'philippines', 'pk', 'pakistan', 'pl', 'poland', 'pm', 'saint pierre', 'pn', 'pitcairn islands', 'pr', 'puerto rico', 'ps', 'palestine', 'pt', 'portugal', 'pw', 'palau', 'py', 'paraguay', 'qa', 'qatar', 're', 'reunion', 'ro', 'romania', 'rs', 'serbia', 'ru', 'russia', 'rw', 'rwanda', 'sa', 'saudi arabia', 'sb', 'solomon islands', 'sc', 'seychelles', 'gb sct', 'scotland', 'sd', 'sudan', 'se', 'sweden', 'sg', 'singapore', 'sh', 'saint helena', 'si', 'slovenia', 'sj', 'svalbard', 'jan mayen', 'sk', 'slovakia', 'sl', 'sierra leone', 'sm', 'san marino', 'sn', 'senegal', 'so', 'somalia', 'sr', 'suriname', 'st', 'sao tome', 'sv', 'el salvador', 'sy', 'syria', 'sz', 'swaziland', 'tc', 'caicos islands', 'td', 'chad', 'tf', 'french territories', 'tg', 'togo', 'th', 'thailand', 'tj', 'tajikistan', 'tk', 'tokelau', 'tl', 'timorleste', 'tm', 'turkmenistan', 'tn', 'tunisia', 'to', 'tonga', 'tr', 'turkey', 'tt', 'trinidad', 'tv', 'tuvalu', 'tw', 'taiwan', 'tz', 'tanzania', 'ua', 'ukraine', 'ug', 'uganda', 'um', 'us minor islands', 'us', 'america', 'united states', 'uy', 'uruguay', 'uz', 'uzbekistan', 'va', 'vatican city', 'vc', 'saint vincent', 've', 'venezuela', 'vg', 'british virgin islands', 'vi', 'us virgin islands', 'vn', 'vietnam', 'vu', 'vanuatu', 'gb wls', 'wales', 'wf', 'wallis and futuna', 'ws', 'samoa', 'ye', 'yemen', 'yt', 'mayotte', 'za', 'south africa', 'zm', 'zambia', 'zw', 'zimbabwe'];
	
	function Flag(props) {
	  var className = props.className;
	  var name = props.name;
	
	  var classes = (0, _classnames2.default)(name, className, 'flag');
	  var rest = (0, _lib.getUnhandledProps)(Flag, props);
	  var ElementType = (0, _lib.getElementType)(Flag, props);
	
	  return _react2.default.createElement(ElementType, _extends({}, rest, { className: classes }));
	}
	
	Flag._meta = {
	  name: 'Flag',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    name: names
	  }
	};
	
	Flag.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Flag name, can use the two digit country code, the full name, or a common alias */
	  name: _react.PropTypes.oneOf(Flag._meta.props.name).isRequired
	};
	
	Flag.defaultProps = {
	  as: 'i'
	};
	
	Flag.create = (0, _lib.createShorthandFactory)(Flag, function (value) {
	  return { name: value };
	});
	
	exports.default = Flag;

/***/ },
/* 857 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Image = __webpack_require__(816);
	
	var _Image2 = _interopRequireDefault(_Image);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Image2.default;

/***/ },
/* 858 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(851);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function DropdownHeader(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	  var icon = props.icon;
	
	  var classes = (0, _classnames2.default)('header', className);
	  var rest = (0, _lib.getUnhandledProps)(DropdownHeader, props);
	  var ElementType = (0, _lib.getElementType)(DropdownHeader, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    _Icon2.default.create(icon),
	    content
	  );
	}
	
	DropdownHeader._meta = {
	  name: 'DropdownHeader',
	  parent: 'Dropdown',
	  type: _lib.META.TYPES.MODULE
	};
	
	DropdownHeader.propTypes = {
	  /** An element type to render as (string or function) */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** Shorthand for Icon. */
	  icon: _lib.customPropTypes.itemShorthand
	};
	
	exports.default = DropdownHeader;

/***/ },
/* 859 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function DropdownMenu(props) {
	  var children = props.children;
	  var className = props.className;
	  var scrolling = props.scrolling;
	
	  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(scrolling, 'scrolling'), 'menu transition', className);
	  var rest = (0, _lib.getUnhandledProps)(DropdownMenu, props);
	  var ElementType = (0, _lib.getElementType)(DropdownMenu, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	DropdownMenu._meta = {
	  name: 'DropdownMenu',
	  parent: 'Dropdown',
	  type: _lib.META.TYPES.MODULE
	};
	
	DropdownMenu.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A dropdown menu can scroll. */
	  scrolling: _react.PropTypes.bool
	};
	
	exports.default = DropdownMenu;

/***/ },
/* 860 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _TextArea = __webpack_require__(861);
	
	var _TextArea2 = _interopRequireDefault(_TextArea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _TextArea2.default;

/***/ },
/* 861 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A simple <textarea> wrapper for use in Form.TextArea.
	 * We may add more features to the TextArea in the future.
	 * @see Form
	 */
	function TextArea(props) {
	  var rest = (0, _lib.getUnhandledProps)(TextArea, props);
	  var ElementType = (0, _lib.getElementType)(TextArea, props);
	
	  return _react2.default.createElement(ElementType, rest);
	}
	
	TextArea._meta = {
	  name: 'TextArea',
	  type: _lib.META.TYPES.ADDON
	};
	
	TextArea.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as
	};
	
	TextArea.defaultProps = {
	  as: 'textarea'
	};
	
	exports.default = TextArea;

/***/ },
/* 862 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Breadcrumb = __webpack_require__(863);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Breadcrumb2.default;

/***/ },
/* 863 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _each2 = __webpack_require__(678);
	
	var _each3 = _interopRequireDefault(_each2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _BreadcrumbDivider = __webpack_require__(864);
	
	var _BreadcrumbDivider2 = _interopRequireDefault(_BreadcrumbDivider);
	
	var _BreadcrumbSection = __webpack_require__(865);
	
	var _BreadcrumbSection2 = _interopRequireDefault(_BreadcrumbSection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * A breadcrumb is used to show hierarchy between content.
	 */
	function Breadcrumb(props) {
	  var children = props.children;
	  var className = props.className;
	  var divider = props.divider;
	  var icon = props.icon;
	  var size = props.size;
	  var sections = props.sections;
	
	  var classes = (0, _classnames2.default)('ui', className, size, 'breadcrumb');
	  var rest = (0, _lib.getUnhandledProps)(Breadcrumb, props);
	  var ElementType = (0, _lib.getElementType)(Breadcrumb, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  var dividerJSX = _react2.default.createElement(
	    _BreadcrumbDivider2.default,
	    { icon: icon },
	    divider
	  );
	  var sectionsJSX = [];
	
	  (0, _each3.default)(sections, function (_ref, index) {
	    var text = _ref.text;
	    var key = _ref.key;
	
	    var restSection = _objectWithoutProperties(_ref, ['text', 'key']);
	
	    var finalKey = key || text;
	    var dividerKey = finalKey + '-divider';
	
	    sectionsJSX.push(_react2.default.createElement(
	      _BreadcrumbSection2.default,
	      _extends({}, restSection, { key: finalKey }),
	      text
	    ));
	
	    if (index !== sections.length - 1) {
	      sectionsJSX.push(_react2.default.cloneElement(dividerJSX, { key: dividerKey }));
	    }
	  });
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    sectionsJSX
	  );
	}
	
	Breadcrumb._meta = {
	  name: 'Breadcrumb',
	  type: _lib.META.TYPES.COLLECTION,
	  props: {
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium')
	  }
	};
	
	Breadcrumb.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content of the Breadcrumb.Divider. */
	  divider: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['icon']), _lib.customPropTypes.contentShorthand]),
	
	  /** For use with the sections prop. Render as an `Icon` component with `divider` class instead of a `div` in
	   *  Breadcrumb.Divider. */
	  icon: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['divider']), _lib.customPropTypes.itemShorthand]),
	
	  /** Shorthand array of props for Breadcrumb.Section. */
	  sections: _lib.customPropTypes.collectionShorthand,
	
	  /** Size of Breadcrumb */
	  size: _react.PropTypes.oneOf(Breadcrumb._meta.props.size)
	};
	
	Breadcrumb.Divider = _BreadcrumbDivider2.default;
	Breadcrumb.Section = _BreadcrumbSection2.default;
	
	exports.default = Breadcrumb;

/***/ },
/* 864 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(851);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A divider sub-component for Breadcrumb component.
	 */
	function BreadcrumbDivider(props) {
	  var children = props.children;
	  var icon = props.icon;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)(className, 'divider');
	  var rest = (0, _lib.getUnhandledProps)(BreadcrumbDivider, props);
	  var ElementType = (0, _lib.getElementType)(BreadcrumbDivider, props);
	
	  if (icon) return _Icon2.default.create(icon, _extends({}, rest, { className: classes }));
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || '/'
	  );
	}
	
	BreadcrumbDivider._meta = {
	  name: 'BreadcrumbDivider',
	  type: _lib.META.TYPES.COLLECTION,
	  parent: 'Breadcrumb'
	};
	
	BreadcrumbDivider.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Render as an `Icon` component with `divider` class instead of a `div`. */
	  icon: _lib.customPropTypes.itemShorthand
	};
	
	exports.default = BreadcrumbDivider;

/***/ },
/* 865 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A section sub-component for Breadcrumb component
	 */
	var BreadcrumbSection = function (_Component) {
	  _inherits(BreadcrumbSection, _Component);
	
	  function BreadcrumbSection() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, BreadcrumbSection);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BreadcrumbSection.__proto__ || Object.getPrototypeOf(BreadcrumbSection)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
	      var onClick = _this.props.onClick;
	
	
	      if (onClick) onClick(e);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(BreadcrumbSection, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var active = _props.active;
	      var children = _props.children;
	      var className = _props.className;
	      var href = _props.href;
	      var link = _props.link;
	      var onClick = _props.onClick;
	
	
	      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), 'section', className);
	      var rest = (0, _lib.getUnhandledProps)(BreadcrumbSection, this.props);
	      var ElementType = (0, _lib.getElementType)(BreadcrumbSection, this.props, function () {
	        if (link || onClick) return 'a';
	      });
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes, href: href, onClick: this.handleClick }),
	        children
	      );
	    }
	  }]);
	
	  return BreadcrumbSection;
	}(_react.Component);
	
	BreadcrumbSection.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Style as the currently active section. */
	  active: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Render as an `a` tag instead of a `div`. */
	  link: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['href']), _react.PropTypes.bool]),
	
	  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
	  href: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['link']), _react.PropTypes.string]),
	
	  /** Render as an `a` tag instead of a `div` and called with event on Section click. */
	  onClick: _react.PropTypes.func
	};
	BreadcrumbSection._meta = {
	  name: 'BreadcrumbSection',
	  type: _lib.META.TYPES.COLLECTION,
	  parent: 'Breadcrumb'
	};
	exports.default = BreadcrumbSection;

/***/ },
/* 866 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Form = __webpack_require__(867);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Form2.default;

/***/ },
/* 867 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _find2 = __webpack_require__(740);
	
	var _find3 = _interopRequireDefault(_find2);
	
	var _filter2 = __webpack_require__(628);
	
	var _filter3 = _interopRequireDefault(_filter2);
	
	var _each2 = __webpack_require__(678);
	
	var _each3 = _interopRequireDefault(_each2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _FormButton = __webpack_require__(868);
	
	var _FormButton2 = _interopRequireDefault(_FormButton);
	
	var _FormCheckbox = __webpack_require__(870);
	
	var _FormCheckbox2 = _interopRequireDefault(_FormCheckbox);
	
	var _FormDropdown = __webpack_require__(871);
	
	var _FormDropdown2 = _interopRequireDefault(_FormDropdown);
	
	var _FormField = __webpack_require__(869);
	
	var _FormField2 = _interopRequireDefault(_FormField);
	
	var _FormGroup = __webpack_require__(872);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormInput = __webpack_require__(873);
	
	var _FormInput2 = _interopRequireDefault(_FormInput);
	
	var _FormRadio = __webpack_require__(876);
	
	var _FormRadio2 = _interopRequireDefault(_FormRadio);
	
	var _FormSelect = __webpack_require__(877);
	
	var _FormSelect2 = _interopRequireDefault(_FormSelect);
	
	var _FormTextArea = __webpack_require__(878);
	
	var _FormTextArea2 = _interopRequireDefault(_FormTextArea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var debug = (0, _lib.makeDebugger)('form');
	
	var getNodeName = function getNodeName(_ref) {
	  var name = _ref.name;
	  return name;
	};
	var debugSerializedResult = function debugSerializedResult() {
	  return undefined;
	};
	
	if (process.NODE_ENV !== 'production') {
	  // debug serialized values
	  debugSerializedResult = function debugSerializedResult(json, name, node) {
	    debug('serialized ' + JSON.stringify(_defineProperty({}, name, json[name])) + ' from:', node);
	  };
	
	  // warn about form nodes missing a "name"
	  getNodeName = function getNodeName(node) {
	    var name = node.name;
	
	    if (!name) {
	      var errorMessage = ['Encountered a form control node without a name attribute.', 'Each node in a group should have a name.', 'Otherwise, the node will serialize as { "undefined": <value> }.'].join(' ');
	      console.error(errorMessage, node); // eslint-disable-line no-console
	    }
	
	    return name;
	  };
	}
	
	function formSerializer(formNode) {
	  debug('formSerializer()');
	  var json = {};
	  // handle empty formNode ref
	  if (!formNode) return json;
	
	  // ----------------------------------------
	  // Checkboxes
	  // Single: { name: value|bool        }
	  // Group:  { name: [value|bool, ...] }
	
	  (0, _each3.default)(formNode.querySelectorAll('input[type="checkbox"]'), function (node, index, arr) {
	    var name = getNodeName(node);
	    var checkboxesByName = (0, _filter3.default)(arr, { name: name });
	
	    // single: (value|checked)
	    if (checkboxesByName.length === 1) {
	      json[name] = node.checked && node.value !== 'on' ? node.value : node.checked;
	      debugSerializedResult(json, name, node);
	      return;
	    }
	
	    // groups (checked): [value, ...]
	    if (!Array.isArray(json[name])) json[name] = [];
	    if (node.checked) json[name].push(node.value);
	    debugSerializedResult(json, name, node);
	
	    // in dev, warn about multiple checkboxes with a default browser value of "on"
	    if (process.NODE_ENV !== 'production' && node.value === 'on') {
	      var errorMessage = ["Encountered a checkbox in a group with the default browser value 'on'.", 'Each checkbox in a group should have a unique value.', "Otherwise, the checkbox value will serialize as ['on', ...]."].join(' ');
	      console.error(errorMessage, node, formNode); // eslint-disable-line no-console
	    }
	  });
	
	  // ----------------------------------------
	  // Radios
	  // checked: { name: checked value }
	  // none:    { name: null }
	
	  (0, _each3.default)(formNode.querySelectorAll('input[type="radio"]'), function (node, index, arr) {
	    var name = getNodeName(node);
	    var checkedRadio = (0, _find3.default)(arr, { name: name, checked: true });
	
	    if (checkedRadio) {
	      json[name] = checkedRadio.value;
	    } else {
	      json[name] = null;
	    }
	
	    debugSerializedResult(json, name, node);
	
	    // in dev, warn about radios with a default browser value of "on"
	    if (process.NODE_ENV !== 'production' && node.value === 'on') {
	      var errorMessage = ["Encountered a radio with the default browser value 'on'.", 'Each radio should have a unique value.', "Otherwise, the radio value will serialize as { [name]: 'on' }."].join(' ');
	      console.error(errorMessage, node, formNode); // eslint-disable-line no-console
	    }
	  });
	
	  // ----------------------------------------
	  // Other inputs
	  // { name: value }
	
	  (0, _each3.default)(formNode.querySelectorAll('input:not([type="radio"]):not([type="checkbox"])'), function (node) {
	    var name = getNodeName(node);
	    json[name] = node.value;
	    debugSerializedResult(json, name, node);
	  });
	
	  // ----------------------------------------
	  // Other inputs and text areas
	  // { name: value }
	
	  (0, _each3.default)(formNode.querySelectorAll('textarea'), function (node) {
	    var name = getNodeName(node);
	    json[name] = node.value;
	    debugSerializedResult(json, name, node);
	  });
	
	  // ----------------------------------------
	  // Selects
	  // single:   { name: value }
	  // multiple: { name: [value, ...] }
	
	  (0, _each3.default)(formNode.querySelectorAll('select'), function (node) {
	    var name = getNodeName(node);
	
	    if (node.multiple) {
	      json[name] = (0, _map3.default)((0, _filter3.default)(node.querySelectorAll('option'), 'selected'), 'value');
	    } else {
	      json[name] = node.value;
	    }
	
	    debugSerializedResult(json, name, node);
	  });
	
	  return json;
	}
	
	var _meta = {
	  name: 'Form',
	  type: _lib.META.TYPES.COLLECTION,
	  props: {
	    widths: ['equal'],
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium')
	  }
	};
	
	/**
	 * A Form displays a set of related user input fields in a structured way.
	 * @see Button
	 * @see Checkbox
	 * @see Dropdown
	 * @see Input
	 * @see Message
	 * @see Radio
	 * @see Select
	 * @see TextArea
	 */
	
	var Form = function (_Component) {
	  _inherits(Form, _Component);
	
	  function Form() {
	    var _ref2;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Form);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref2, [this].concat(args))), _this), _this._form = null, _this.handleRef = function (c) {
	      return _this._form = _this._form || c;
	    }, _this.handleSubmit = function (e) {
	      var _this$props = _this.props;
	      var onSubmit = _this$props.onSubmit;
	      var serializer = _this$props.serializer;
	
	
	      if (onSubmit) onSubmit(e, serializer(_this._form));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Form, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;
	      var error = _props.error;
	      var loading = _props.loading;
	      var reply = _props.reply;
	      var size = _props.size;
	      var success = _props.success;
	      var warning = _props.warning;
	      var widths = _props.widths;
	
	
	      var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(reply, 'reply'), (0, _lib.useKeyOnly)(success, 'success'), (0, _lib.useKeyOnly)(warning, 'warning'), (0, _lib.useWidthProp)(widths, null, true), 'form', className);
	      var rest = (0, _lib.getUnhandledProps)(Form, this.props);
	      var ElementType = (0, _lib.getElementType)(Form, this.props);
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes, ref: this.handleRef, onSubmit: this.handleSubmit }),
	        children
	      );
	    }
	  }]);
	
	  return Form;
	}(_react.Component);
	
	Form.defaultProps = {
	  as: 'form',
	  serializer: formSerializer
	};
	Form.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Automatically show any error Message children */
	  error: _react.PropTypes.bool,
	
	  /** Automatically show a loading indicator */
	  loading: _react.PropTypes.bool,
	
	  /** Called with (event, jsonSerializedForm) on submit */
	  onSubmit: _react.PropTypes.func,
	
	  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
	  reply: _react.PropTypes.bool,
	
	  /** Called onSubmit with the form node that returns the serialized form object */
	  serializer: _react.PropTypes.func,
	
	  /** A form can vary in size */
	  size: _react.PropTypes.oneOf(_meta.props.size),
	
	  /** Automatically show any success Message children */
	  success: _react.PropTypes.bool,
	
	  /** Automatically show any warning Message children */
	  warning: _react.PropTypes.bool,
	
	  /** Forms can automatically divide fields to be equal width */
	  widths: _react.PropTypes.oneOf(_meta.props.widths)
	};
	Form._meta = _meta;
	Form.Field = _FormField2.default;
	Form.Button = _FormButton2.default;
	Form.Checkbox = _FormCheckbox2.default;
	Form.Dropdown = _FormDropdown2.default;
	Form.Group = _FormGroup2.default;
	Form.Input = _FormInput2.default;
	Form.Radio = _FormRadio2.default;
	Form.Select = _FormSelect2.default;
	Form.TextArea = _FormTextArea2.default;
	exports.default = Form;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 868 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Button = __webpack_require__(811);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _FormField = __webpack_require__(869);
	
	var _FormField2 = _interopRequireDefault(_FormField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Sugar for <Form.Field control={Button} />
	 * @see Button
	 * @see Form
	 */
	function FormButton(props) {
	  var control = props.control;
	
	  var rest = (0, _lib.getUnhandledProps)(FormButton, props);
	  var ElementType = (0, _lib.getElementType)(FormButton, props);
	
	  return _react2.default.createElement(ElementType, _extends({}, rest, { control: control }));
	}
	
	FormButton._meta = {
	  name: 'FormButton',
	  parent: 'Form',
	  type: _lib.META.TYPES.COLLECTION
	};
	
	FormButton.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A FormField control prop */
	  control: _FormField2.default.propTypes.control
	};
	
	FormButton.defaultProps = {
	  as: _FormField2.default,
	  control: _Button2.default
	};
	
	exports.default = FormButton;

/***/ },
/* 869 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Checkbox = __webpack_require__(837);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Radio = __webpack_require__(835);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A field is a form element containing a label and an input
	 * @see Form
	 * @see Button
	 * @see Checkbox
	 * @see Dropdown
	 * @see Input
	 * @see Radio
	 * @see Select
	 * @see TextArea
	 */
	function FormField(props) {
	  var control = props.control;
	  var children = props.children;
	  var className = props.className;
	  var disabled = props.disabled;
	  var error = props.error;
	  var inline = props.inline;
	  var label = props.label;
	  var required = props.required;
	  var type = props.type;
	  var width = props.width;
	
	  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(inline, 'inline'), (0, _lib.useKeyOnly)(required, 'required'), (0, _lib.useWidthProp)(width, 'wide'), 'field', className);
	  var rest = (0, _lib.getUnhandledProps)(FormField, props);
	  var ElementType = (0, _lib.getElementType)(FormField, props);
	
	  // ----------------------------------------
	  // No Control
	  // ----------------------------------------
	
	  if (!control) {
	    // TODO add test for label/no label when no control
	    if (!label) return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      _react2.default.createElement(
	        'label',
	        null,
	        label
	      )
	    );
	  }
	
	  // ----------------------------------------
	  // Checkbox/Radio Control
	  // ----------------------------------------
	  var controlProps = _extends({}, rest, { children: children, type: type });
	
	  // wrap HTML checkboxes/radios in the label
	  if (control === 'input' && (type === 'checkbox' || type === 'radio')) {
	    return _react2.default.createElement(
	      ElementType,
	      { className: classes },
	      _react2.default.createElement(
	        'label',
	        null,
	        (0, _react.createElement)(control, controlProps),
	        ' ',
	        label
	      )
	    );
	  }
	
	  // pass label prop to controls that support it
	  if (control === _Checkbox2.default || control === _Radio2.default) {
	    return _react2.default.createElement(
	      ElementType,
	      { className: classes },
	      (0, _react.createElement)(control, _extends({}, controlProps, { label: label }))
	    );
	  }
	
	  // ----------------------------------------
	  // Other Control
	  // ----------------------------------------
	
	  // control with a label
	  if (control && label) {
	    return _react2.default.createElement(
	      ElementType,
	      { className: classes },
	      _react2.default.createElement(
	        'label',
	        null,
	        label
	      ),
	      (0, _react.createElement)(control, controlProps)
	    );
	  }
	
	  // control without a label
	  if (control && !label) {
	    return _react2.default.createElement(
	      ElementType,
	      { className: classes },
	      (0, _react.createElement)(control, controlProps)
	    );
	  }
	}
	
	FormField._meta = {
	  name: 'FormField',
	  parent: 'Form',
	  type: _lib.META.TYPES.COLLECTION,
	  props: {
	    width: _lib.SUI.WIDTHS,
	    control: ['button', 'input', 'select', 'textarea']
	  }
	};
	
	FormField.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /**
	   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
	   * Extra FormField props are passed to the control component.
	   * Mutually exclusive with children.
	   */
	  control: _lib.customPropTypes.some([_react.PropTypes.func, _react.PropTypes.oneOf(FormField._meta.props.control)]),
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Individual fields may be disabled */
	  disabled: _react.PropTypes.bool,
	
	  /** Individual fields may display an error state */
	  error: _react.PropTypes.bool,
	
	  /** A field can have its label next to instead of above it */
	  inline: _react.PropTypes.bool,
	
	  // Heads Up!
	  // Do not disallow children with `label` shorthand
	  // The `control` might accept a `label` prop and `children`
	  /** Mutually exclusive with children. */
	  label: _react.PropTypes.string,
	
	  /** A field can show that input is mandatory.  Requires a label. */
	  required: _lib.customPropTypes.every([_lib.customPropTypes.demand(['label']), _react.PropTypes.bool]),
	
	  /** Passed to the control component (i.e. <input type='password' />) */
	  type: _lib.customPropTypes.every([_lib.customPropTypes.demand(['control'])]),
	
	  /** A field can specify its width in grid columns */
	  width: _react.PropTypes.oneOf(FormField._meta.props.width)
	};
	
	exports.default = FormField;

/***/ },
/* 870 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Checkbox = __webpack_require__(837);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _FormField = __webpack_require__(869);
	
	var _FormField2 = _interopRequireDefault(_FormField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Sugar for <Form.Field control={Checkbox} />
	 * @see Checkbox
	 * @see Form
	 */
	function FormCheckbox(props) {
	  var control = props.control;
	
	  var rest = (0, _lib.getUnhandledProps)(FormCheckbox, props);
	  var ElementType = (0, _lib.getElementType)(FormCheckbox, props);
	
	  return _react2.default.createElement(ElementType, _extends({}, rest, { control: control }));
	}
	
	FormCheckbox._meta = {
	  name: 'FormCheckbox',
	  parent: 'Form',
	  type: _lib.META.TYPES.COLLECTION
	};
	
	FormCheckbox.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A FormField control prop */
	  control: _FormField2.default.propTypes.control
	};
	
	FormCheckbox.defaultProps = {
	  as: _FormField2.default,
	  control: _Checkbox2.default
	};
	
	exports.default = FormCheckbox;

/***/ },
/* 871 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Dropdown = __webpack_require__(841);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _FormField = __webpack_require__(869);
	
	var _FormField2 = _interopRequireDefault(_FormField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Sugar for <Form.Field control={Dropdown} />
	 * @see Dropdown
	 * @see Form
	 */
	function FormDropdown(props) {
	  var control = props.control;
	
	  var rest = (0, _lib.getUnhandledProps)(FormDropdown, props);
	  var ElementType = (0, _lib.getElementType)(FormDropdown, props);
	
	  return _react2.default.createElement(ElementType, _extends({}, rest, { control: control }));
	}
	
	FormDropdown._meta = {
	  name: 'FormDropdown',
	  parent: 'Form',
	  type: _lib.META.TYPES.COLLECTION
	};
	
	FormDropdown.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A FormField control prop */
	  control: _FormField2.default.propTypes.control
	};
	
	FormDropdown.defaultProps = {
	  as: _FormField2.default,
	  control: _Dropdown2.default
	};
	
	exports.default = FormDropdown;

/***/ },
/* 872 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * A set of fields can appear grouped together
	 * @see Form
	 */
	function FormGroup(props) {
	  var children = props.children;
	  var className = props.className;
	  var grouped = props.grouped;
	  var inline = props.inline;
	  var widths = props.widths;
	
	  var classes = (0, _classnames2.default)((0, _lib.useWidthProp)(widths, null, true), (0, _lib.useKeyOnly)(inline, 'inline'), (0, _lib.useKeyOnly)(grouped, 'grouped'), 'fields', className);
	  var rest = (0, _lib.getUnhandledProps)(FormGroup, props);
	  var ElementType = (0, _lib.getElementType)(FormGroup, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	FormGroup._meta = {
	  name: 'FormGroup',
	  parent: 'Form',
	  type: _lib.META.TYPES.COLLECTION,
	  props: {
	    widths: [].concat(_toConsumableArray(_lib.SUI.WIDTHS), ['equal'])
	  }
	};
	
	FormGroup.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Fields can show related choices */
	  grouped: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['inline']), _react.PropTypes.bool]),
	
	  /** Multiple fields may be inline in a row */
	  inline: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['grouped']), _react.PropTypes.bool]),
	
	  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width */
	  widths: _react.PropTypes.oneOf(FormGroup._meta.props.widths)
	};
	
	FormGroup.defaultProps = {
	  as: 'div'
	};
	
	exports.default = FormGroup;

/***/ },
/* 873 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Input = __webpack_require__(874);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _FormField = __webpack_require__(869);
	
	var _FormField2 = _interopRequireDefault(_FormField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Sugar for <Form.Field control={Input} />
	 * @see Form
	 * @see Input
	 */
	function FormInput(props) {
	  var control = props.control;
	
	  var rest = (0, _lib.getUnhandledProps)(FormInput, props);
	  var ElementType = (0, _lib.getElementType)(FormInput, props);
	
	  return _react2.default.createElement(ElementType, _extends({}, rest, { control: control }));
	}
	
	FormInput._meta = {
	  name: 'FormInput',
	  parent: 'Form',
	  type: _lib.META.TYPES.COLLECTION
	};
	
	FormInput.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A FormField control prop */
	  control: _FormField2.default.propTypes.control
	};
	
	FormInput.defaultProps = {
	  as: _FormField2.default,
	  control: _Input2.default
	};
	
	exports.default = FormInput;

/***/ },
/* 874 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Input = __webpack_require__(875);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Input2.default;

/***/ },
/* 875 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.htmlInputPropNames = undefined;
	
	var _includes2 = __webpack_require__(806);
	
	var _includes3 = _interopRequireDefault(_includes2);
	
	var _pick2 = __webpack_require__(627);
	
	var _pick3 = _interopRequireDefault(_pick2);
	
	var _omit2 = __webpack_require__(576);
	
	var _omit3 = _interopRequireDefault(_omit2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	var _Button = __webpack_require__(811);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Icon = __webpack_require__(851);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Label = __webpack_require__(852);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var htmlInputPropNames = exports.htmlInputPropNames = [
	// React
	'selected', 'defaultValue', 'defaultChecked',
	
	// Limited HTML props
	'autoComplete', 'autoFocus', 'checked',
	// 'disabled', do not pass (duplicates SUI CSS opacity rule)
	'form', 'max', 'maxLength', 'min', 'name', 'onChange', 'pattern', 'placeholder', 'readOnly', 'required', 'step', 'type', 'value'];
	
	/**
	 * An Input is a field used to elicit a response from a user
	 * @see Button
	 * @see Form
	 * @see Icon
	 * @see Label
	 */
	function Input(props) {
	  var action = props.action;
	  var actionPosition = props.actionPosition;
	  var children = props.children;
	  var className = props.className;
	  var disabled = props.disabled;
	  var error = props.error;
	  var focus = props.focus;
	  var fluid = props.fluid;
	  var icon = props.icon;
	  var iconPosition = props.iconPosition;
	  var inverted = props.inverted;
	  var label = props.label;
	  var labelPosition = props.labelPosition;
	  var loading = props.loading;
	  var size = props.size;
	  var type = props.type;
	  var input = props.input;
	  var transparent = props.transparent;
	
	
	  var classes = (0, _classnames2.default)('ui', size, (0, _lib.useValueAndKey)(actionPosition, 'action') || (0, _lib.useKeyOnly)(action, 'action'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(focus, 'focus'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useValueAndKey)(labelPosition, 'labeled') || (0, _lib.useKeyOnly)(label, 'labeled'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(transparent, 'transparent'), (0, _lib.useValueAndKey)(iconPosition, 'icon') || (0, _lib.useKeyOnly)(icon, 'icon'), className, 'input');
	  var unhandled = (0, _lib.getUnhandledProps)(Input, props);
	
	  var rest = (0, _omit3.default)(unhandled, htmlInputPropNames);
	  var htmlInputProps = (0, _pick3.default)(props, htmlInputPropNames);
	  var ElementType = (0, _lib.getElementType)(Input, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  var actionElement = _Button2.default.create(action, function (elProps) {
	    return {
	      className: (0, _classnames2.default)(
	      // all action components should have the button className
	      !(0, _includes3.default)(elProps.className, 'button') && 'button')
	    };
	  });
	  var iconElement = _Icon2.default.create(icon);
	  var labelElement = _Label2.default.create(label, function (elProps) {
	    return {
	      className: (0, _classnames2.default)(
	      // all label components should have the label className
	      !(0, _includes3.default)(elProps.className, 'label') && 'label',
	      // add 'left|right corner'
	      (0, _includes3.default)(labelPosition, 'corner') && labelPosition)
	    };
	  });
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    actionPosition === 'left' && actionElement,
	    iconPosition === 'left' && iconElement,
	    labelPosition !== 'right' && labelElement,
	    (0, _lib.createHTMLInput)(input || type, htmlInputProps),
	    actionPosition !== 'left' && actionElement,
	    iconPosition !== 'left' && iconElement,
	    labelPosition === 'right' && labelElement
	  );
	}
	
	Input._meta = {
	  name: 'Input',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    actionPosition: ['left'],
	    iconPosition: ['left'],
	    labelPosition: ['left', 'right', 'left corner', 'right corner'],
	    size: _lib.SUI.SIZES
	  }
	};
	
	Input.defaultProps = {
	  type: 'text'
	};
	
	Input.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** An Input can be formatted to alert the user to an action they may perform */
	  action: _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand]),
	
	  /** An action can appear along side an Input on the left or right */
	  actionPosition: _react.PropTypes.oneOf(Input._meta.props.actionPosition),
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** An Input field can show that it is disabled */
	  disabled: _react.PropTypes.bool,
	
	  /** An Input field can show the data contains errors */
	  error: _react.PropTypes.bool,
	
	  /** An Input field can show a user is currently interacting with it */
	  focus: _react.PropTypes.bool,
	
	  /** Take on the size of it's container */
	  fluid: _react.PropTypes.bool,
	
	  /** Optional Icon to display inside the Input */
	  icon: _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand]),
	
	  /** An Icon can appear inside an Input on the left or right */
	  iconPosition: _react.PropTypes.oneOf(Input._meta.props.iconPosition),
	
	  /** Format to appear on dark backgrounds */
	  inverted: _react.PropTypes.bool,
	
	  /** Shorthand for creating the HTML Input */
	  input: _lib.customPropTypes.itemShorthand,
	
	  /** Optional Label to display along side the Input */
	  label: _lib.customPropTypes.itemShorthand,
	
	  /** A Label can appear outside an Input on the left or right */
	  labelPosition: _react.PropTypes.oneOf(Input._meta.props.labelPosition),
	
	  /** An Icon Input field can show that it is currently loading data */
	  loading: _react.PropTypes.bool,
	
	  /** An Input can vary in size */
	  size: _react.PropTypes.oneOf(Input._meta.props.size),
	
	  /** Transparent Input has no background */
	  transparent: _react.PropTypes.bool,
	
	  /** The HTML input type */
	  type: _react.PropTypes.string
	};
	
	exports.default = Input;

/***/ },
/* 876 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Radio = __webpack_require__(835);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	var _FormField = __webpack_require__(869);
	
	var _FormField2 = _interopRequireDefault(_FormField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Sugar for <Form.Field control={Radio} />
	 * @see Form
	 * @see Radio
	 */
	function FormRadio(props) {
	  var control = props.control;
	
	  var rest = (0, _lib.getUnhandledProps)(FormRadio, props);
	  var ElementType = (0, _lib.getElementType)(FormRadio, props);
	
	  return _react2.default.createElement(ElementType, _extends({}, rest, { control: control }));
	}
	
	FormRadio._meta = {
	  name: 'FormRadio',
	  parent: 'Form',
	  type: _lib.META.TYPES.COLLECTION
	};
	
	FormRadio.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A FormField control prop */
	  control: _FormField2.default.propTypes.control
	};
	
	FormRadio.defaultProps = {
	  as: _FormField2.default,
	  control: _Radio2.default
	};
	
	exports.default = FormRadio;

/***/ },
/* 877 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Select = __webpack_require__(839);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _FormField = __webpack_require__(869);
	
	var _FormField2 = _interopRequireDefault(_FormField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Sugar for <Form.Field control={Select} />
	 * @see Form
	 * @see Select
	 */
	function FormSelect(props) {
	  var control = props.control;
	
	  var rest = (0, _lib.getUnhandledProps)(FormSelect, props);
	  var ElementType = (0, _lib.getElementType)(FormSelect, props);
	
	  return _react2.default.createElement(ElementType, _extends({}, rest, { control: control }));
	}
	
	FormSelect._meta = {
	  name: 'FormSelect',
	  parent: 'Form',
	  type: _lib.META.TYPES.COLLECTION
	};
	
	FormSelect.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A FormField control prop */
	  control: _FormField2.default.propTypes.control
	};
	
	FormSelect.defaultProps = {
	  as: _FormField2.default,
	  control: _Select2.default
	};
	
	exports.default = FormSelect;

/***/ },
/* 878 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _TextArea = __webpack_require__(860);
	
	var _TextArea2 = _interopRequireDefault(_TextArea);
	
	var _FormField = __webpack_require__(869);
	
	var _FormField2 = _interopRequireDefault(_FormField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Sugar for <Form.Field control={TextArea} />
	 * @see Form
	 * @see TextArea
	 */
	function FormTextArea(props) {
	  var control = props.control;
	
	  var rest = (0, _lib.getUnhandledProps)(FormTextArea, props);
	  var ElementType = (0, _lib.getElementType)(FormTextArea, props);
	
	  return _react2.default.createElement(ElementType, _extends({}, rest, { control: control }));
	}
	
	FormTextArea._meta = {
	  name: 'FormTextArea',
	  parent: 'Form',
	  type: _lib.META.TYPES.COLLECTION
	};
	
	FormTextArea.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A FormField control prop */
	  control: _FormField2.default.propTypes.control
	};
	
	FormTextArea.defaultProps = {
	  as: _FormField2.default,
	  control: _TextArea2.default
	};
	
	exports.default = FormTextArea;

/***/ },
/* 879 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Grid = __webpack_require__(880);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Grid2.default;

/***/ },
/* 880 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _GridColumn = __webpack_require__(881);
	
	var _GridColumn2 = _interopRequireDefault(_GridColumn);
	
	var _GridRow = __webpack_require__(882);
	
	var _GridRow2 = _interopRequireDefault(_GridRow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * A grid is used to harmonize negative space in a layout.
	 */
	function Grid(props) {
	  var celled = props.celled;
	  var centered = props.centered;
	  var children = props.children;
	  var className = props.className;
	  var columns = props.columns;
	  var divided = props.divided;
	  var doubling = props.doubling;
	  var padded = props.padded;
	  var relaxed = props.relaxed;
	  var reversed = props.reversed;
	  var stackable = props.stackable;
	  var stretched = props.stretched;
	  var textAlign = props.textAlign;
	  var verticalAlign = props.verticalAlign;
	
	
	  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(centered, 'centered'), (0, _lib.useKeyOnly)(doubling, 'doubling'), (0, _lib.useKeyOnly)(stackable, 'stackable'), (0, _lib.useKeyOnly)(stretched, 'stretched'), (0, _lib.useKeyOrValueAndKey)(celled, 'celled'), (0, _lib.useKeyOrValueAndKey)(divided, 'divided'), (0, _lib.useKeyOrValueAndKey)(padded, 'padded'), (0, _lib.useKeyOrValueAndKey)(relaxed, 'relaxed'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useValueAndKey)(reversed, 'reversed'), (0, _lib.useVerticalAlignProp)(verticalAlign), (0, _lib.useWidthProp)(columns, 'column', true), 'grid', className);
	  var rest = (0, _lib.getUnhandledProps)(Grid, props);
	  var ElementType = (0, _lib.getElementType)(Grid, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	Grid.Column = _GridColumn2.default;
	Grid.Row = _GridRow2.default;
	
	Grid._meta = {
	  name: 'Grid',
	  type: _lib.META.TYPES.COLLECTION,
	  props: {
	    celled: ['internally'],
	    columns: [].concat(_toConsumableArray(_lib.SUI.WIDTHS), ['equal']),
	    divided: ['vertically'],
	    padded: ['horizontally', 'vertically'],
	    relaxed: ['very'],
	    reversed: ['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically'],
	    textAlign: _lib.SUI.TEXT_ALIGNMENTS,
	    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
	  }
	};
	
	Grid.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A grid can have rows divided into cells. */
	  celled: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Grid._meta.props.celled)]),
	
	  /** A grid can have its columns centered. */
	  centered: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Represents column count per row in Grid. */
	  columns: _react.PropTypes.oneOf(Grid._meta.props.columns),
	
	  /** A grid can have dividers between its columns. */
	  divided: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Grid._meta.props.divided)]),
	
	  /** A grid can double its column width on tablet and mobile sizes. */
	  doubling: _react.PropTypes.bool,
	
	  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
	  padded: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Grid._meta.props.padded)]),
	
	  /** A grid can increase its gutters to allow for more negative space. */
	  relaxed: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Grid._meta.props.relaxed)]),
	
	  /** A grid can specify that its columns should reverse order at different device sizes. */
	  reversed: _react.PropTypes.oneOf(Grid._meta.props.reversed),
	
	  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
	  stackable: _react.PropTypes.bool,
	
	  /** An can stretch its contents to take up the entire grid height. */
	  stretched: _react.PropTypes.bool,
	
	  /** A grid can specify its text alignment. */
	  textAlign: _react.PropTypes.oneOf(Grid._meta.props.textAlign),
	
	  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
	  verticalAlign: _react.PropTypes.oneOf(_GridColumn2.default._meta.props.verticalAlign)
	};
	
	exports.default = Grid;

/***/ },
/* 881 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A column sub-component for Grid.
	 */
	function GridColumn(props) {
	  var children = props.children;
	  var className = props.className;
	  var computer = props.computer;
	  var color = props.color;
	  var floated = props.floated;
	  var largeScreen = props.largeScreen;
	  var mobile = props.mobile;
	  var only = props.only;
	  var stretched = props.stretched;
	  var tablet = props.tablet;
	  var textAlign = props.textAlign;
	  var verticalAlign = props.verticalAlign;
	  var widescreen = props.widescreen;
	  var width = props.width;
	
	
	  var classes = (0, _classnames2.default)(color, (0, _lib.useKeyOnly)(stretched, 'stretched'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useValueAndKey)(only, 'only'), (0, _lib.useVerticalAlignProp)(verticalAlign), (0, _lib.useWidthProp)(computer, 'wide computer'), (0, _lib.useWidthProp)(largeScreen, 'wide large screen'), (0, _lib.useWidthProp)(mobile, 'wide mobile'), (0, _lib.useWidthProp)(tablet, 'wide tablet'), (0, _lib.useWidthProp)(widescreen, 'wide widescreen'), (0, _lib.useWidthProp)(width, 'wide'), 'column', className);
	  var rest = (0, _lib.getUnhandledProps)(GridColumn, props);
	  var ElementType = (0, _lib.getElementType)(GridColumn, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	GridColumn._meta = {
	  name: 'GridColumn',
	  parent: 'Grid',
	  type: _lib.META.TYPES.COLLECTION,
	  props: {
	    color: _lib.SUI.COLORS,
	    computer: _lib.SUI.WIDTHS,
	    floated: _lib.SUI.FLOATS,
	    largeScreen: _lib.SUI.WIDTHS,
	    mobile: _lib.SUI.WIDTHS,
	    only: ['computer', 'large screen', 'mobile', 'tablet mobile', 'tablet', 'widescreen'],
	    tablet: _lib.SUI.WIDTHS,
	    textAlign: _lib.SUI.TEXT_ALIGNMENTS,
	    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS,
	    widescreen: _lib.SUI.WIDTHS,
	    width: _lib.SUI.WIDTHS
	  }
	};
	
	GridColumn.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A column can specify a width for a computer. */
	  computer: _react.PropTypes.oneOf(GridColumn._meta.props.width),
	
	  /** A grid column can be colored. */
	  color: _react.PropTypes.oneOf(GridColumn._meta.props.color),
	
	  /** A column can sit flush against the left or right edge of a row. */
	  floated: _react.PropTypes.oneOf(GridColumn._meta.props.floated),
	
	  /** A column can specify a width for a large screen device. */
	  largeScreen: _react.PropTypes.oneOf(GridColumn._meta.props.width),
	
	  /** A column can specify a width for a mobile device. */
	  mobile: _react.PropTypes.oneOf(GridColumn._meta.props.width),
	
	  /** A column can appear only for a specific device, or screen sizes. */
	  only: _react.PropTypes.oneOf(GridColumn._meta.props.only),
	
	  /** An can stretch its contents to take up the entire grid or row height. */
	  stretched: _react.PropTypes.bool,
	
	  /** A column can specify a width for a tablet device. */
	  tablet: _react.PropTypes.oneOf(GridColumn._meta.props.width),
	
	  /** A row can specify its text alignment. */
	  textAlign: _react.PropTypes.oneOf(GridColumn._meta.props.textAlign),
	
	  /** A column can specify its vertical alignment to have all its columns vertically centered. */
	  verticalAlign: _react.PropTypes.oneOf(GridColumn._meta.props.verticalAlign),
	
	  /** A column can specify a width for a wide screen device. */
	  widescreen: _react.PropTypes.oneOf(GridColumn._meta.props.width),
	
	  /** Represents width of column. */
	  width: _react.PropTypes.oneOf(GridColumn._meta.props.width)
	};
	
	exports.default = GridColumn;

/***/ },
/* 882 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * A row sub-component for Grid.
	 */
	function GridRow(props) {
	  var centered = props.centered;
	  var children = props.children;
	  var className = props.className;
	  var color = props.color;
	  var columns = props.columns;
	  var divided = props.divided;
	  var only = props.only;
	  var reversed = props.reversed;
	  var stretched = props.stretched;
	  var textAlign = props.textAlign;
	  var verticalAlign = props.verticalAlign;
	
	
	  var classes = (0, _classnames2.default)(color, (0, _lib.useKeyOnly)(centered, 'centered'), (0, _lib.useKeyOnly)(divided, 'divided'), (0, _lib.useKeyOnly)(stretched, 'stretched'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useValueAndKey)(only, 'only'), (0, _lib.useValueAndKey)(reversed, 'reversed'), (0, _lib.useVerticalAlignProp)(verticalAlign), (0, _lib.useWidthProp)(columns, 'column', true), 'row', className);
	  var rest = (0, _lib.getUnhandledProps)(GridRow, props);
	  var ElementType = (0, _lib.getElementType)(GridRow, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	GridRow._meta = {
	  name: 'GridRow',
	  parent: 'Grid',
	  type: _lib.META.TYPES.COLLECTION,
	  props: {
	    color: _lib.SUI.COLORS,
	    columns: [].concat(_toConsumableArray(_lib.SUI.WIDTHS), ['equal']),
	    only: ['computer', 'large screen', 'mobile', 'tablet mobile', 'tablet', 'widescreen'],
	    reversed: ['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically'],
	    textAlign: _lib.SUI.TEXT_ALIGNMENTS,
	    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
	  }
	};
	
	GridRow.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A row can have its columns centered. */
	  centered: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A grid row can be colored. */
	  color: _react.PropTypes.oneOf(GridRow._meta.props.color),
	
	  /** Represents column count per line in Row. */
	  columns: _react.PropTypes.oneOf(GridRow._meta.props.columns),
	
	  /** A row can have dividers between its columns. */
	  divided: _react.PropTypes.bool,
	
	  /** A row can appear only for a specific device, or screen sizes. */
	  only: _react.PropTypes.oneOf(GridRow._meta.props.only),
	
	  /** A  row can specify that its columns should reverse order at different device sizes. */
	  reversed: _react.PropTypes.oneOf(GridRow._meta.props.reversed),
	
	  /** An can stretch its contents to take up the entire column height. */
	  stretched: _react.PropTypes.bool,
	
	  /** A row can specify its text alignment. */
	  textAlign: _react.PropTypes.oneOf(GridRow._meta.props.textAlign),
	
	  /** A row can specify its vertical alignment to have all its columns vertically centered. */
	  verticalAlign: _react.PropTypes.oneOf(GridRow._meta.props.verticalAlign)
	};
	
	exports.default = GridRow;

/***/ },
/* 883 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Menu = __webpack_require__(884);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Menu2.default;

/***/ },
/* 884 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _get2 = __webpack_require__(667);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _MenuHeader = __webpack_require__(885);
	
	var _MenuHeader2 = _interopRequireDefault(_MenuHeader);
	
	var _MenuItem = __webpack_require__(886);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _MenuMenu = __webpack_require__(902);
	
	var _MenuMenu2 = _interopRequireDefault(_MenuMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _meta = {
	  name: 'Menu',
	  type: _lib.META.TYPES.COLLECTION,
	  props: {
	    attached: ['top', 'bottom'],
	    color: _lib.SUI.COLORS,
	    floated: ['right'],
	    icon: ['labeled'],
	    fixed: ['left', 'right', 'bottom', 'top'],
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium', 'big'),
	    tabular: ['right'],
	    widths: _lib.SUI.WIDTHS
	  }
	};
	
	/**
	 * A menu displays grouped navigation actions.
	 **/
	
	var Menu = function (_Component) {
	  _inherits(Menu, _Component);
	
	  function Menu() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Menu);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemClick = function (e, _ref2) {
	      var name = _ref2.name;
	      var index = _ref2.index;
	
	      _this.trySetState({ activeIndex: index });
	      var _this$props = _this.props;
	      var items = _this$props.items;
	      var onItemClick = _this$props.onItemClick;
	
	
	      if ((0, _get3.default)(items[index], 'onClick')) items[index].onClick(e, { name: name, index: index });
	      if (onItemClick) onItemClick(e, { name: name, index: index });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Menu, [{
	    key: 'renderItems',
	    value: function renderItems() {
	      var _this2 = this;
	
	      var items = this.props.items;
	      var activeIndex = this.state.activeIndex;
	
	
	      return (0, _map3.default)(items, function (item, index) {
	        return (0, _lib.createShorthand)(_MenuItem2.default, function (val) {
	          return { content: val };
	        }, item, {
	          active: activeIndex === index,
	          childKey: function childKey(_ref3) {
	            var content = _ref3.content;
	            var name = _ref3.name;
	            return [content, name].join('-');
	          },
	          index: index,
	          onClick: _this2.handleItemClick
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var attached = _props.attached;
	      var borderless = _props.borderless;
	      var children = _props.children;
	      var className = _props.className;
	      var color = _props.color;
	      var compact = _props.compact;
	      var fixed = _props.fixed;
	      var floated = _props.floated;
	      var fluid = _props.fluid;
	      var icon = _props.icon;
	      var inverted = _props.inverted;
	      var pagination = _props.pagination;
	      var pointing = _props.pointing;
	      var secondary = _props.secondary;
	      var stackable = _props.stackable;
	      var tabular = _props.tabular;
	      var text = _props.text;
	      var vertical = _props.vertical;
	      var size = _props.size;
	      var widths = _props.widths;
	
	      var classes = (0, _classnames2.default)('ui', color, size, (0, _lib.useWidthProp)(widths, 'item'), (0, _lib.useKeyOrValueAndKey)(attached, 'attached'), (0, _lib.useKeyOnly)(borderless, 'borderless'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useValueAndKey)(fixed, 'fixed'), (0, _lib.useKeyOrValueAndKey)(floated, 'floated'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOrValueAndKey)(icon, 'icon'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(pagination, 'pagination'), (0, _lib.useKeyOnly)(pointing, 'pointing'), (0, _lib.useKeyOnly)(secondary, 'secondary'), (0, _lib.useKeyOnly)(stackable, 'stackable'), (0, _lib.useKeyOrValueAndKey)(tabular, 'tabular'), (0, _lib.useKeyOnly)(text, 'text'), (0, _lib.useKeyOnly)(vertical, 'vertical'), className, 'menu');
	      var rest = (0, _lib.getUnhandledProps)(Menu, this.props);
	      var ElementType = (0, _lib.getElementType)(Menu, this.props);
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes }),
	        children || this.renderItems()
	      );
	    }
	  }]);
	
	  return Menu;
	}(_lib.AutoControlledComponent);
	
	Menu.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Index of the currently active item. */
	  activeIndex: _react.PropTypes.number,
	
	  /** A menu may be attached to other content segments. */
	  attached: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.attached)]),
	
	  /** A menu item or menu can have no borders. */
	  borderless: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Additional colors can be specified. */
	  color: _react.PropTypes.oneOf(_meta.props.color),
	
	  /** A menu can take up only the space necessary to fit its content. */
	  compact: _react.PropTypes.bool,
	
	  /** Initial activeIndex value. */
	  defaultActiveIndex: _react.PropTypes.number,
	
	  /** A menu can be fixed to a side of its context. */
	  fixed: _react.PropTypes.oneOf(_meta.props.fixed),
	
	  /** A menu can be floated. */
	  floated: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.floated)]),
	
	  /** A vertical menu may take the size of its container. */
	  fluid: _react.PropTypes.bool,
	
	  /** A menu may have labeled icons. */
	  icon: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.icon)]),
	
	  /** A menu may have its colors inverted to show greater contrast. */
	  inverted: _react.PropTypes.bool,
	
	  /** Shorthand array of props for Menu. */
	  items: _lib.customPropTypes.collectionShorthand,
	
	  /** onClick handler for MenuItem. Mutually exclusive with children. */
	  onItemClick: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _react.PropTypes.func]),
	
	  /** A pagination menu is specially formatted to present links to pages of content. */
	  pagination: _react.PropTypes.bool,
	
	  /** A menu can point to show its relationship to nearby content. */
	  pointing: _react.PropTypes.bool,
	
	  /** A menu can adjust its appearance to de-emphasize its contents. */
	  secondary: _react.PropTypes.bool,
	
	  /** A menu can stack at mobile resolutions. */
	  stackable: _react.PropTypes.bool,
	
	  /** A menu can be formatted to show tabs of information. */
	  tabular: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.tabular)]),
	
	  /** A menu can be formatted for text content. */
	  text: _react.PropTypes.bool,
	
	  /** A vertical menu displays elements vertically. */
	  vertical: _react.PropTypes.bool,
	
	  /** A menu can vary in size. */
	  size: _react.PropTypes.oneOf(_meta.props.size),
	
	  /** A menu can have its items divided evenly. */
	  widths: _react.PropTypes.oneOf(_meta.props.widths)
	};
	Menu._meta = _meta;
	Menu.autoControlledProps = ['activeIndex'];
	Menu.Header = _MenuHeader2.default;
	Menu.Item = _MenuItem2.default;
	Menu.Menu = _MenuMenu2.default;
	exports.default = Menu;

/***/ },
/* 885 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MenuHeader(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)(className, 'header');
	  var rest = (0, _lib.getUnhandledProps)(MenuHeader, props);
	  var ElementType = (0, _lib.getElementType)(MenuHeader, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	MenuHeader._meta = {
	  name: 'MenuHeader',
	  type: _lib.META.TYPES.COLLECTION,
	  parent: 'Menu'
	};
	
	MenuHeader.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = MenuHeader;

/***/ },
/* 886 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _startCase2 = __webpack_require__(887);
	
	var _startCase3 = _interopRequireDefault(_startCase2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(851);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _meta = {
	  name: 'MenuItem',
	  type: _lib.META.TYPES.COLLECTION,
	  parent: 'Menu',
	  props: {
	    color: _lib.SUI.COLORS,
	    fitted: ['horizontally', 'vertically'],
	    position: ['right']
	  }
	};
	
	var MenuItem = function (_Component) {
	  _inherits(MenuItem, _Component);
	
	  function MenuItem() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MenuItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
	      var _this$props = _this.props;
	      var index = _this$props.index;
	      var name = _this$props.name;
	      var onClick = _this$props.onClick;
	
	
	      if (onClick) onClick(e, { name: name, index: index });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(MenuItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var active = _props.active;
	      var children = _props.children;
	      var className = _props.className;
	      var color = _props.color;
	      var content = _props.content;
	      var fitted = _props.fitted;
	      var header = _props.header;
	      var icon = _props.icon;
	      var link = _props.link;
	      var name = _props.name;
	      var onClick = _props.onClick;
	      var position = _props.position;
	
	
	      var classes = (0, _classnames2.default)(color, position, (0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(icon === true || icon && !(name || content), 'icon'), (0, _lib.useKeyOnly)(header, 'header'), (0, _lib.useKeyOnly)(link, 'link'), (0, _lib.useKeyOrValueAndKey)(fitted, 'fitted'), 'item', className);
	      var ElementType = (0, _lib.getElementType)(MenuItem, this.props, function () {
	        if (onClick) return 'a';
	      });
	      var rest = (0, _lib.getUnhandledProps)(MenuItem, this.props);
	
	      if (children) {
	        return _react2.default.createElement(
	          ElementType,
	          _extends({}, rest, { className: classes, onClick: this.handleClick }),
	          children
	        );
	      }
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes, onClick: this.handleClick }),
	        _Icon2.default.create(icon),
	        content || (0, _startCase3.default)(name)
	      );
	    }
	  }]);
	
	  return MenuItem;
	}(_react.Component);
	
	MenuItem.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A menu item can be active. */
	  active: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Additional colors can be specified. */
	  color: _react.PropTypes.oneOf(_meta.props.color),
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** A menu item or menu can remove element padding, vertically or horizontally. */
	  fitted: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.fitted)]),
	
	  /** A menu item may include a header or may itself be a header. */
	  header: _react.PropTypes.bool,
	
	  /** MenuItem can be only icon. */
	  icon: _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand]),
	
	  /** MenuItem index inside Menu. */
	  index: _react.PropTypes.number,
	
	  /** A menu item can be link. */
	  link: _react.PropTypes.bool,
	
	  /** Internal name of the MenuItem. */
	  name: _react.PropTypes.string,
	
	  /** Render as an `a` tag instead of a `div` and called with event on MenuItem click. */
	  onClick: _react.PropTypes.func,
	
	  /** A menu item can take right position. */
	  position: _react.PropTypes.oneOf(_meta.props.position)
	};
	MenuItem._meta = _meta;
	exports.default = MenuItem;

/***/ },
/* 887 */
/***/ function(module, exports, __webpack_require__) {

	var createCompounder = __webpack_require__(888),
	    upperFirst = __webpack_require__(896);
	
	/**
	 * Converts `string` to
	 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.1.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the start cased string.
	 * @example
	 *
	 * _.startCase('--foo-bar--');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('fooBar');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('__FOO_BAR__');
	 * // => 'FOO BAR'
	 */
	var startCase = createCompounder(function(result, word, index) {
	  return result + (index ? ' ' : '') + upperFirst(word);
	});
	
	module.exports = startCase;


/***/ },
/* 888 */
/***/ function(module, exports, __webpack_require__) {

	var arrayReduce = __webpack_require__(768),
	    deburr = __webpack_require__(889),
	    words = __webpack_require__(892);
	
	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]";
	
	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos, 'g');
	
	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder(callback) {
	  return function(string) {
	    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
	  };
	}
	
	module.exports = createCompounder;


/***/ },
/* 889 */
/***/ function(module, exports, __webpack_require__) {

	var deburrLetter = __webpack_require__(890),
	    toString = __webpack_require__(562);
	
	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
	
	/** Used to compose unicode character classes. */
	var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0';
	
	/** Used to compose unicode capture groups. */
	var rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';
	
	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo, 'g');
	
	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr(string) {
	  string = toString(string);
	  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
	}
	
	module.exports = deburr;


/***/ },
/* 890 */
/***/ function(module, exports, __webpack_require__) {

	var basePropertyOf = __webpack_require__(891);
	
	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C',  '\xe7': 'c',
	  '\xd0': 'D',  '\xf0': 'd',
	  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N',  '\xf1': 'n',
	  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	  '\u0134': 'J',  '\u0135': 'j',
	  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	  '\u0174': 'W',  '\u0175': 'w',
	  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	  '\u0132': 'IJ', '\u0133': 'ij',
	  '\u0152': 'Oe', '\u0153': 'oe',
	  '\u0149': "'n", '\u017f': 's'
	};
	
	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter = basePropertyOf(deburredLetters);
	
	module.exports = deburrLetter;


/***/ },
/* 891 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = basePropertyOf;


/***/ },
/* 892 */
/***/ function(module, exports, __webpack_require__) {

	var asciiWords = __webpack_require__(893),
	    hasUnicodeWord = __webpack_require__(894),
	    toString = __webpack_require__(562),
	    unicodeWords = __webpack_require__(895);
	
	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words(string, pattern, guard) {
	  string = toString(string);
	  pattern = guard ? undefined : pattern;
	
	  if (pattern === undefined) {
	    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}
	
	module.exports = words;


/***/ },
/* 893 */
/***/ function(module, exports) {

	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
	
	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}
	
	module.exports = asciiWords;


/***/ },
/* 894 */
/***/ function(module, exports) {

	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
	
	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord(string) {
	  return reHasUnicodeWord.test(string);
	}
	
	module.exports = hasUnicodeWord;


/***/ },
/* 895 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
	
	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ = '\\u200d';
	
	/** Used to compose unicode regexes. */
	var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;
	
	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
	  rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	  rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
	  rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
	  rsUpper + '+' + rsOptUpperContr,
	  rsDigits,
	  rsEmoji
	].join('|'), 'g');
	
	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function unicodeWords(string) {
	  return string.match(reUnicodeWord) || [];
	}
	
	module.exports = unicodeWords;


/***/ },
/* 896 */
/***/ function(module, exports, __webpack_require__) {

	var createCaseFirst = __webpack_require__(897);
	
	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = createCaseFirst('toUpperCase');
	
	module.exports = upperFirst;


/***/ },
/* 897 */
/***/ function(module, exports, __webpack_require__) {

	var castSlice = __webpack_require__(779),
	    hasUnicode = __webpack_require__(898),
	    stringToArray = __webpack_require__(899),
	    toString = __webpack_require__(562);
	
	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString(string);
	
	    var strSymbols = hasUnicode(string)
	      ? stringToArray(string)
	      : undefined;
	
	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);
	
	    var trailing = strSymbols
	      ? castSlice(strSymbols, 1).join('')
	      : string.slice(1);
	
	    return chr[methodName]() + trailing;
	  };
	}
	
	module.exports = createCaseFirst;


/***/ },
/* 898 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';
	
	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';
	
	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');
	
	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}
	
	module.exports = hasUnicode;


/***/ },
/* 899 */
/***/ function(module, exports, __webpack_require__) {

	var asciiToArray = __webpack_require__(900),
	    hasUnicode = __webpack_require__(898),
	    unicodeToArray = __webpack_require__(901);
	
	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return hasUnicode(string)
	    ? unicodeToArray(string)
	    : asciiToArray(string);
	}
	
	module.exports = stringToArray;


/***/ },
/* 900 */
/***/ function(module, exports) {

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}
	
	module.exports = asciiToArray;


/***/ },
/* 901 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';
	
	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';
	
	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
	
	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
	
	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray(string) {
	  return string.match(reUnicode) || [];
	}
	
	module.exports = unicodeToArray;


/***/ },
/* 902 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MenuMenu(props) {
	  var children = props.children;
	  var className = props.className;
	  var position = props.position;
	
	  var classes = (0, _classnames2.default)(className, position, 'menu');
	  var rest = (0, _lib.getUnhandledProps)(MenuMenu, props);
	  var ElementType = (0, _lib.getElementType)(MenuMenu, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	MenuMenu._meta = {
	  name: 'MenuMenu',
	  type: _lib.META.TYPES.COLLECTION,
	  parent: 'Menu',
	  props: {
	    position: ['right']
	  }
	};
	
	MenuMenu.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A sub menu can take right position. */
	  position: _react.PropTypes.oneOf(MenuMenu._meta.props.position)
	};
	
	exports.default = MenuMenu;

/***/ },
/* 903 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Message = __webpack_require__(904);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Message2.default;

/***/ },
/* 904 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(851);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _MessageContent = __webpack_require__(905);
	
	var _MessageContent2 = _interopRequireDefault(_MessageContent);
	
	var _MessageHeader = __webpack_require__(906);
	
	var _MessageHeader2 = _interopRequireDefault(_MessageHeader);
	
	var _MessageList = __webpack_require__(907);
	
	var _MessageList2 = _interopRequireDefault(_MessageList);
	
	var _MessageItem = __webpack_require__(908);
	
	var _MessageItem2 = _interopRequireDefault(_MessageItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A message displays information that explains nearby content
	 * @see Form
	 */
	function Message(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	  var header = props.header;
	  var icon = props.icon;
	  var list = props.list;
	  var onDismiss = props.onDismiss;
	  var hidden = props.hidden;
	  var visible = props.visible;
	  var floating = props.floating;
	  var compact = props.compact;
	  var attached = props.attached;
	  var warning = props.warning;
	  var info = props.info;
	  var positive = props.positive;
	  var success = props.success;
	  var negative = props.negative;
	  var error = props.error;
	  var color = props.color;
	  var size = props.size;
	
	
	  var classes = (0, _classnames2.default)('ui', size, color, (0, _lib.useKeyOnly)(icon, 'icon'), (0, _lib.useKeyOnly)(hidden, 'hidden'), (0, _lib.useKeyOnly)(visible, 'visible'), (0, _lib.useKeyOnly)(floating, 'floating'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOrValueAndKey)(attached, 'attached'), (0, _lib.useKeyOnly)(warning, 'warning'), (0, _lib.useKeyOnly)(info, 'info'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(success, 'success'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(error, 'error'), 'message', className);
	
	  var dismissIcon = onDismiss && _react2.default.createElement(_Icon2.default, { name: 'close', onClick: onDismiss });
	  var rest = (0, _lib.getUnhandledProps)(Message, props);
	  var ElementType = (0, _lib.getElementType)(Message, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      dismissIcon,
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    dismissIcon,
	    _Icon2.default.create(icon),
	    (header || content || list) && _react2.default.createElement(
	      _MessageContent2.default,
	      null,
	      (0, _lib.createShorthand)(_MessageHeader2.default, function (val) {
	        return { children: val };
	      }, header),
	      (0, _lib.createShorthand)(_MessageList2.default, function (val) {
	        return { items: val };
	      }, list),
	      (0, _lib.createShorthand)('p', function (val) {
	        return { children: val };
	      }, content)
	    )
	  );
	}
	
	Message._meta = {
	  name: 'Message',
	  type: _lib.META.TYPES.COLLECTION,
	  props: {
	    attached: ['bottom'],
	    color: _lib.SUI.COLORS,
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium')
	  }
	};
	
	Message.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** Shorthand for MessageHeader. */
	  header: _lib.customPropTypes.itemShorthand,
	
	  /** A message can contain an icon. */
	  icon: _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand]),
	
	  /** Array of string items for the MessageList. Mutually exclusive with children. */
	  list: _lib.customPropTypes.collectionShorthand,
	
	  /**
	   * A message that the user can choose to hide.
	   * Called when the user clicks the "x" icon. This also adds the "x" icon.
	   */
	  onDismiss: _react.PropTypes.func,
	
	  /** A message can be hidden. */
	  hidden: _react.PropTypes.bool,
	
	  /** A message can be set to visible to force itself to be shown. */
	  visible: _react.PropTypes.bool,
	
	  /** A message can float above content that it is related to. */
	  floating: _react.PropTypes.bool,
	
	  /** A message can only take up the width of its content. */
	  compact: _react.PropTypes.bool,
	
	  /** A message can be formatted to attach itself to other content. */
	  attached: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Message._meta.props.attached)]),
	
	  /** A message may be formatted to display warning messages. */
	  warning: _react.PropTypes.bool,
	
	  /** A message may be formatted to display information. */
	  info: _react.PropTypes.bool,
	
	  /** A message may be formatted to display a positive message.  Same as `success`. */
	  positive: _react.PropTypes.bool,
	
	  /** A message may be formatted to display a positive message.  Same as `positive`. */
	  success: _react.PropTypes.bool,
	
	  /** A message may be formatted to display a negative message. Same as `error`. */
	  negative: _react.PropTypes.bool,
	
	  /** A message may be formatted to display a negative message. Same as `negative`. */
	  error: _react.PropTypes.bool,
	
	  /** A message can be formatted to be different colors. */
	  color: _react.PropTypes.oneOf(Message._meta.props.color),
	
	  /** A message can have different sizes. */
	  size: _react.PropTypes.oneOf(Message._meta.props.size)
	};
	
	Message.Content = _MessageContent2.default;
	Message.Header = _MessageHeader2.default;
	Message.List = _MessageList2.default;
	Message.Item = _MessageItem2.default;
	
	exports.default = Message;

/***/ },
/* 905 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MessageContent(props) {
	  var children = props.children;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)('content', className);
	  var rest = (0, _lib.getUnhandledProps)(MessageContent, props);
	  var ElementType = (0, _lib.getElementType)(MessageContent, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	MessageContent._meta = {
	  name: 'MessageContent',
	  parent: 'Message',
	  type: _lib.META.TYPES.COLLECTION
	};
	
	MessageContent.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = MessageContent;

/***/ },
/* 906 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MessageHeader(props) {
	  var children = props.children;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)('header', className);
	  var rest = (0, _lib.getUnhandledProps)(MessageHeader, props);
	  var ElementType = (0, _lib.getElementType)(MessageHeader, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	MessageHeader._meta = {
	  name: 'MessageHeader',
	  parent: 'Message',
	  type: _lib.META.TYPES.COLLECTION
	};
	
	MessageHeader.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = MessageHeader;

/***/ },
/* 907 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _MessageItem = __webpack_require__(908);
	
	var _MessageItem2 = _interopRequireDefault(_MessageItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MessageList(props) {
	  var children = props.children;
	  var className = props.className;
	  var items = props.items;
	
	  var classes = (0, _classnames2.default)('list', className);
	  var rest = (0, _lib.getUnhandledProps)(MessageList, props);
	  var ElementType = (0, _lib.getElementType)(MessageList, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  var content = (0, _map3.default)(items, function (item) {
	    return _react2.default.createElement(
	      _MessageItem2.default,
	      { key: item },
	      item
	    );
	  });
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    content
	  );
	}
	
	MessageList._meta = {
	  name: 'MessageList',
	  parent: 'Message',
	  type: _lib.META.TYPES.COLLECTION
	};
	
	MessageList.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Strings to use as list items. Mutually exclusive with children. */
	  items: _react.PropTypes.arrayOf(_react.PropTypes.string)
	};
	
	MessageList.defaultProps = {
	  as: 'ul'
	};
	
	exports.default = MessageList;

/***/ },
/* 908 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MessageItem(props) {
	  var children = props.children;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)('content', className);
	  var rest = (0, _lib.getUnhandledProps)(MessageItem, props);
	  var ElementType = (0, _lib.getElementType)(MessageItem, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	MessageItem._meta = {
	  name: 'MessageItem',
	  parent: 'Message',
	  type: _lib.META.TYPES.COLLECTION
	};
	
	MessageItem.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	MessageItem.defaultProps = {
	  as: 'li'
	};
	
	exports.default = MessageItem;

/***/ },
/* 909 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Table = __webpack_require__(910);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Table2.default;

/***/ },
/* 910 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _TableBody = __webpack_require__(911);
	
	var _TableBody2 = _interopRequireDefault(_TableBody);
	
	var _TableCell = __webpack_require__(912);
	
	var _TableCell2 = _interopRequireDefault(_TableCell);
	
	var _TableFooter = __webpack_require__(913);
	
	var _TableFooter2 = _interopRequireDefault(_TableFooter);
	
	var _TableHeader = __webpack_require__(914);
	
	var _TableHeader2 = _interopRequireDefault(_TableHeader);
	
	var _TableHeaderCell = __webpack_require__(915);
	
	var _TableHeaderCell2 = _interopRequireDefault(_TableHeaderCell);
	
	var _TableRow = __webpack_require__(916);
	
	var _TableRow2 = _interopRequireDefault(_TableRow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A table displays a collections of data grouped into rows
	 */
	function Table(props) {
	  var basic = props.basic;
	  var attached = props.attached;
	  var renderBodyRow = props.renderBodyRow;
	  var celled = props.celled;
	  var children = props.children;
	  var className = props.className;
	  var collapsing = props.collapsing;
	  var color = props.color;
	  var columns = props.columns;
	  var compact = props.compact;
	  var definition = props.definition;
	  var fixed = props.fixed;
	  var footerRow = props.footerRow;
	  var headerRow = props.headerRow;
	  var inverted = props.inverted;
	  var padded = props.padded;
	  var selectable = props.selectable;
	  var singleLine = props.singleLine;
	  var size = props.size;
	  var stackable = props.stackable;
	  var striped = props.striped;
	  var structured = props.structured;
	  var tableData = props.tableData;
	  var unstackable = props.unstackable;
	
	
	  var classes = (0, _classnames2.default)('ui', color, size, (0, _lib.useKeyOrValueAndKey)(attached, 'attached'), (0, _lib.useKeyOrValueAndKey)(basic, 'basic'), (0, _lib.useKeyOnly)(celled, 'celled'), (0, _lib.useKeyOnly)(collapsing, 'collapsing'), (0, _lib.useKeyOrValueAndKey)(compact, 'compact'), (0, _lib.useKeyOnly)(definition, 'definition'), (0, _lib.useKeyOnly)(fixed, 'fixed'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOrValueAndKey)(padded, 'padded'), (0, _lib.useKeyOnly)(selectable, 'selectable'), (0, _lib.useKeyOnly)(singleLine, 'single line'), (0, _lib.useKeyOnly)(stackable, 'stackable'), (0, _lib.useKeyOnly)(striped, 'striped'), (0, _lib.useKeyOnly)(structured, 'structured'), (0, _lib.useKeyOnly)(unstackable, 'unstackable'), (0, _lib.useWidthProp)(columns, 'column'), className, 'table');
	  var rest = (0, _lib.getUnhandledProps)(Table, props);
	  var ElementType = (0, _lib.getElementType)(Table, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    headerRow && _react2.default.createElement(
	      _TableHeader2.default,
	      null,
	      _TableRow2.default.create(headerRow, { cellAs: 'th' })
	    ),
	    _react2.default.createElement(
	      _TableBody2.default,
	      null,
	      renderBodyRow && (0, _map3.default)(tableData, function (data, index) {
	        return _TableRow2.default.create(renderBodyRow(data, index));
	      })
	    ),
	    footerRow && _react2.default.createElement(
	      _TableFooter2.default,
	      null,
	      _TableRow2.default.create(footerRow)
	    )
	  );
	}
	
	Table._meta = {
	  name: 'Table',
	  type: _lib.META.TYPES.COLLECTION,
	  props: {
	    attached: ['top', 'bottom'],
	    basic: ['very'],
	    color: _lib.SUI.COLORS,
	    columns: _lib.SUI.WIDTHS,
	    compact: ['very'],
	    padded: ['very'],
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive')
	  }
	};
	
	Table.defaultProps = {
	  as: 'table'
	};
	
	Table.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Attach table to other content */
	  attached: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(Table._meta.props.attached), _react.PropTypes.bool]),
	
	  /** A table can reduce its complexity to increase readability. */
	  basic: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Table._meta.props.basic)]),
	
	  /** A table may be divided each row into separate cells. */
	  celled: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A table can be collapsing, taking up only as much space as its rows. */
	  collapsing: _react.PropTypes.bool,
	
	  /** A table can be given a color to distinguish it from other tables. */
	  color: _react.PropTypes.oneOf(Table._meta.props.color),
	
	  /** A table can specify its column count to divide its content evenly. */
	  columns: _react.PropTypes.oneOf(Table._meta.props.columns),
	
	  /** A table may sometimes need to be more compact to make more rows visible at a time. */
	  compact: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Table._meta.props.compact)]),
	
	  /** A table may be formatted to emphasize a first column that defines a rows content. */
	  definition: _react.PropTypes.bool,
	
	  /**
	   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
	   **/
	  fixed: _react.PropTypes.bool,
	
	  /** Shorthand for a TableRow to be placed within Table.Footer. */
	  footerRow: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for a TableRow to be placed within Table.Header. */
	  headerRow: _lib.customPropTypes.itemShorthand,
	
	  /** A table's colors can be inverted. */
	  inverted: _react.PropTypes.bool,
	
	  /** A table may sometimes need to be more padded for legibility. */
	  padded: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Table._meta.props.padded)]),
	
	  /**
	   * A function that takes (data, index) and returns shorthand for a TableRow
	   * to be placed within Table.Body.
	   */
	  renderBodyRow: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _lib.customPropTypes.demand(['tableData']), _react.PropTypes.func]),
	
	  /** A table can have its rows appear selectable. */
	  selectable: _react.PropTypes.bool,
	
	  /** A table can specify that its cell contents should remain on a single line and not wrap. */
	  singleLine: _react.PropTypes.bool,
	
	  /** A table can also be small or large. */
	  size: _react.PropTypes.oneOf(Table._meta.props.size),
	
	  /** A table can specify how it stacks table content responsively. */
	  stackable: _react.PropTypes.bool,
	
	  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
	  striped: _react.PropTypes.bool,
	
	  /** A table can be formatted to display complex structured data. */
	  structured: _react.PropTypes.bool,
	
	  /** Data to be passed to the renderBodyRow function. */
	  tableData: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _lib.customPropTypes.demand(['renderBodyRow']), _react.PropTypes.array]),
	
	  /** A table can specify how it stacks table content responsively. */
	  unstackable: _react.PropTypes.bool
	};
	
	Table.Body = _TableBody2.default;
	Table.Cell = _TableCell2.default;
	Table.Footer = _TableFooter2.default;
	Table.Header = _TableHeader2.default;
	Table.HeaderCell = _TableHeaderCell2.default;
	Table.Row = _TableRow2.default;
	
	exports.default = Table;

/***/ },
/* 911 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function TableBody(props) {
	  var children = props.children;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)(className);
	  var rest = (0, _lib.getUnhandledProps)(TableBody, props);
	  var ElementType = (0, _lib.getElementType)(TableBody, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	TableBody._meta = {
	  name: 'TableBody',
	  type: _lib.META.TYPES.COLLECTION,
	  parent: 'Table'
	};
	
	TableBody.defaultProps = {
	  as: 'tbody'
	};
	
	TableBody.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = TableBody;

/***/ },
/* 912 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(851);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function TableCell(props) {
	  var active = props.active;
	  var children = props.children;
	  var className = props.className;
	  var collapsing = props.collapsing;
	  var content = props.content;
	  var disabled = props.disabled;
	  var error = props.error;
	  var icon = props.icon;
	  var negative = props.negative;
	  var positive = props.positive;
	  var singleLine = props.singleLine;
	  var textAlign = props.textAlign;
	  var verticalAlign = props.verticalAlign;
	  var warning = props.warning;
	  var width = props.width;
	
	
	  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(collapsing, 'collapsing'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(singleLine, 'single line'), (0, _lib.useKeyOnly)(warning, 'warning'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useVerticalAlignProp)(verticalAlign), (0, _lib.useWidthProp)(width, 'wide'), className);
	  var rest = (0, _lib.getUnhandledProps)(TableCell, props);
	  var ElementType = (0, _lib.getElementType)(TableCell, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    _Icon2.default.create(icon),
	    content
	  );
	}
	
	TableCell._meta = {
	  name: 'TableCell',
	  type: _lib.META.TYPES.COLLECTION,
	  parent: 'Table',
	  props: {
	    textAlign: _lib.SUI.TEXT_ALIGNMENTS,
	    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS,
	    width: _lib.SUI.WIDTHS
	  }
	};
	
	TableCell.defaultProps = {
	  as: 'td'
	};
	
	TableCell.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A cell can be active or selected by a user. */
	  active: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A cell can be collapsing so that it only uses as much space as required. */
	  collapsing: _react.PropTypes.bool,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** A cell can be disabled. */
	  disabled: _react.PropTypes.bool,
	
	  /** A cell may call attention to an error or a negative value. */
	  error: _react.PropTypes.bool,
	
	  /** Add an Icon by name, props object, or pass an <Icon /> */
	  icon: _lib.customPropTypes.itemShorthand,
	
	  /** A cell may let a user know whether a value is bad. */
	  negative: _react.PropTypes.bool,
	
	  /** A cell may let a user know whether a value is good. */
	  positive: _react.PropTypes.bool,
	
	  /** A cell can specify that its contents should remain on a single line and not wrap. */
	  singleLine: _react.PropTypes.bool,
	
	  /** A table cell can adjust its text alignment. */
	  textAlign: _react.PropTypes.oneOf(TableCell._meta.props.textAlign),
	
	  /** A table cell can adjust its text alignment. */
	  verticalAlign: _react.PropTypes.oneOf(TableCell._meta.props.verticalAlign),
	
	  /** A cell may warn a user. */
	  warning: _react.PropTypes.bool,
	
	  /** A table can specify the width of individual columns independently. */
	  width: _react.PropTypes.oneOf(TableCell._meta.props.width)
	};
	
	TableCell.create = (0, _lib.createShorthandFactory)(TableCell, function (content) {
	  return { content: content };
	});
	
	exports.default = TableCell;

/***/ },
/* 913 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _TableHeader = __webpack_require__(914);
	
	var _TableHeader2 = _interopRequireDefault(_TableHeader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function TableFooter(props) {
	  return _react2.default.createElement(_TableHeader2.default, props);
	}
	
	TableFooter._meta = {
	  name: 'TableFooter',
	  type: _lib.META.TYPES.COLLECTION,
	  parent: 'Table'
	};
	
	TableFooter.defaultProps = {
	  as: 'tfoot'
	};
	
	exports.default = TableFooter;

/***/ },
/* 914 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function TableHeader(props) {
	  var children = props.children;
	  var className = props.className;
	  var fullWidth = props.fullWidth;
	
	  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(fullWidth, 'full-width'), className);
	  var rest = (0, _lib.getUnhandledProps)(TableHeader, props);
	  var ElementType = (0, _lib.getElementType)(TableHeader, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	TableHeader._meta = {
	  name: 'TableHeader',
	  type: _lib.META.TYPES.COLLECTION,
	  parent: 'Table'
	};
	
	TableHeader.defaultProps = {
	  as: 'thead'
	};
	
	TableHeader.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
	  fullWidth: _react.PropTypes.bool
	};
	
	exports.default = TableHeader;

/***/ },
/* 915 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _TableCell = __webpack_require__(912);
	
	var _TableCell2 = _interopRequireDefault(_TableCell);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function TableHeaderCell(props) {
	  return _react2.default.createElement(_TableCell2.default, props);
	}
	
	TableHeaderCell._meta = {
	  name: 'TableHeaderCell',
	  type: _lib.META.TYPES.COLLECTION,
	  parent: 'Table'
	};
	
	TableHeaderCell.defaultProps = {
	  as: 'th'
	};
	
	exports.default = TableHeaderCell;

/***/ },
/* 916 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _TableCell = __webpack_require__(912);
	
	var _TableCell2 = _interopRequireDefault(_TableCell);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function TableRow(props) {
	  var active = props.active;
	  var cellAs = props.cellAs;
	  var cells = props.cells;
	  var children = props.children;
	  var className = props.className;
	  var disabled = props.disabled;
	  var error = props.error;
	  var negative = props.negative;
	  var positive = props.positive;
	  var textAlign = props.textAlign;
	  var verticalAlign = props.verticalAlign;
	  var warning = props.warning;
	
	
	  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(warning, 'warning'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useVerticalAlignProp)(verticalAlign), className);
	  var rest = (0, _lib.getUnhandledProps)(TableRow, props);
	  var ElementType = (0, _lib.getElementType)(TableRow, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    (0, _map3.default)(cells, function (cell) {
	      return _TableCell2.default.create(cell, { as: cellAs });
	    })
	  );
	}
	
	TableRow._meta = {
	  name: 'TableRow',
	  type: _lib.META.TYPES.COLLECTION,
	  parent: 'Table',
	  props: {
	    textAlign: _lib.SUI.TEXT_ALIGNMENTS,
	    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
	  }
	};
	
	TableRow.defaultProps = {
	  as: 'tr',
	  cellAs: 'td'
	};
	
	TableRow.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A row can be active or selected by a user. */
	  active: _react.PropTypes.bool,
	
	  /** An element type to render as (string or function). */
	  cellAs: _lib.customPropTypes.as,
	
	  /** Shorthand array of props for TableCell. */
	  cells: _lib.customPropTypes.collectionShorthand,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A row can be disabled. */
	  disabled: _react.PropTypes.bool,
	
	  /** A row may call attention to an error or a negative value. */
	  error: _react.PropTypes.bool,
	
	  /** A row may let a user know whether a value is bad. */
	  negative: _react.PropTypes.bool,
	
	  /** A row may let a user know whether a value is good. */
	  positive: _react.PropTypes.bool,
	
	  /** A table row can adjust its text alignment. */
	  textAlign: _react.PropTypes.oneOf(TableRow._meta.props.textAlign),
	
	  /** A table row can adjust its vertical alignment. */
	  verticalAlign: _react.PropTypes.oneOf(TableRow._meta.props.verticalAlign),
	
	  /** A row may warn a user. */
	  warning: _react.PropTypes.bool
	};
	
	TableRow.create = (0, _lib.createShorthandFactory)(TableRow, function (cells) {
	  return { cells: cells };
	});
	
	exports.default = TableRow;

/***/ },
/* 917 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Container = __webpack_require__(918);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Container2.default;

/***/ },
/* 918 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A container limits content to a maximum width
	 */
	function Container(props) {
	  var text = props.text;
	  var textAlign = props.textAlign;
	  var fluid = props.fluid;
	  var children = props.children;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(text, 'text'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useTextAlignProp)(textAlign), 'container', className);
	  var rest = (0, _lib.getUnhandledProps)(Container, props);
	  var ElementType = (0, _lib.getElementType)(Container, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	Container._meta = {
	  name: 'Container',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    textAlign: _lib.SUI.TEXT_ALIGNMENTS
	  }
	};
	
	Container.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Reduce maximum width to more naturally accommodate text */
	  text: _react.PropTypes.bool,
	
	  /** Container has no maximum with */
	  fluid: _react.PropTypes.bool,
	
	  /** Align container text */
	  textAlign: _react.PropTypes.oneOf(Container._meta.props.textAlign)
	};
	
	exports.default = Container;

/***/ },
/* 919 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Divider = __webpack_require__(920);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Divider2.default;

/***/ },
/* 920 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A divider visually segments content into groups
	 */
	function Divider(props) {
	  var horizontal = props.horizontal;
	  var vertical = props.vertical;
	  var inverted = props.inverted;
	  var fitted = props.fitted;
	  var hidden = props.hidden;
	  var section = props.section;
	  var clearing = props.clearing;
	  var children = props.children;
	  var className = props.className;
	
	
	  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(vertical, 'vertical'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(fitted, 'fitted'), (0, _lib.useKeyOnly)(hidden, 'hidden'), (0, _lib.useKeyOnly)(section, 'section'), (0, _lib.useKeyOnly)(clearing, 'clearing'), 'divider', className);
	  var rest = (0, _lib.getUnhandledProps)(Divider, props);
	  var ElementType = (0, _lib.getElementType)(Divider, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	Divider._meta = {
	  name: 'Divider',
	  type: _lib.META.TYPES.ELEMENT
	};
	
	Divider.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Divider can segment content horizontally */
	  horizontal: _react.PropTypes.bool,
	
	  /** Divider can segment content vertically */
	  vertical: _react.PropTypes.bool,
	
	  /** Divider can have it's colours inverted */
	  inverted: _react.PropTypes.bool,
	
	  /** Divider can be fitted without any space above or below it */
	  fitted: _react.PropTypes.bool,
	
	  /** Divider can divide content without creating a dividing line */
	  hidden: _react.PropTypes.bool,
	
	  /** Divider can provide greater margins to divide sections of content */
	  section: _react.PropTypes.bool,
	
	  /** Divider can clear the content above it */
	  clearing: _react.PropTypes.bool
	};
	
	exports.default = Divider;

/***/ },
/* 921 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Header = __webpack_require__(922);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Header2.default;

/***/ },
/* 922 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(851);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Image = __webpack_require__(857);
	
	var _Image2 = _interopRequireDefault(_Image);
	
	var _HeaderSubheader = __webpack_require__(923);
	
	var _HeaderSubheader2 = _interopRequireDefault(_HeaderSubheader);
	
	var _HeaderContent = __webpack_require__(924);
	
	var _HeaderContent2 = _interopRequireDefault(_HeaderContent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A header provides a short summary of content
	 */
	function Header(props) {
	  var color = props.color;
	  var content = props.content;
	  var dividing = props.dividing;
	  var block = props.block;
	  var attached = props.attached;
	  var floated = props.floated;
	  var inverted = props.inverted;
	  var disabled = props.disabled;
	  var sub = props.sub;
	  var size = props.size;
	  var textAlign = props.textAlign;
	  var icon = props.icon;
	  var image = props.image;
	  var children = props.children;
	  var className = props.className;
	  var subheader = props.subheader;
	
	
	  var classes = (0, _classnames2.default)('ui', size, color, (0, _lib.useKeyOrValueAndKey)(attached, 'attached'), (0, _lib.useKeyOnly)(block, 'block'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(dividing, 'dividing'), (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useKeyOnly)(icon === true, 'icon'), (0, _lib.useKeyOnly)(image === true, 'image'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(sub, 'sub'), (0, _lib.useTextAlignProp)(textAlign), className, 'header');
	  var rest = (0, _lib.getUnhandledProps)(Header, props);
	  var ElementType = (0, _lib.getElementType)(Header, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  var iconElement = _Icon2.default.create(icon);
	  var imageElement = _Image2.default.create(image);
	
	  if (iconElement || imageElement) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      iconElement || imageElement,
	      (content || subheader) && _react2.default.createElement(
	        _HeaderContent2.default,
	        null,
	        content,
	        (0, _lib.createShorthand)(_HeaderSubheader2.default, function (val) {
	          return { content: val };
	        }, subheader)
	      )
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    content,
	    (0, _lib.createShorthand)(_HeaderSubheader2.default, function (val) {
	      return { content: val };
	    }, subheader)
	  );
	}
	
	Header._meta = {
	  name: 'Header',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    attached: ['top', 'bottom'],
	    color: _lib.SUI.COLORS,
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'big', 'massive'),
	    floated: _lib.SUI.FLOATS,
	    textAlign: _lib.SUI.TEXT_ALIGNMENTS
	  }
	};
	
	Header.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** Add an icon by icon name or pass an <Icon /.> */
	  icon: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['image']), _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand])]),
	
	  /** Add an image by img src or pass an <Image />. */
	  image: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['icon']), _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand])]),
	
	  /** Color of the header. */
	  color: _react.PropTypes.oneOf(Header._meta.props.color),
	
	  /** Divide header from the content below it */
	  dividing: _react.PropTypes.bool,
	
	  /** Format header to appear inside a content block */
	  block: _react.PropTypes.bool,
	
	  /** Attach header  to other content, like a segment */
	  attached: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(Header._meta.props.attached), _react.PropTypes.bool]),
	
	  /** Header can sit to the left or right of other content */
	  floated: _react.PropTypes.oneOf(Header._meta.props.floated),
	
	  /** Inverts the color of the header for dark backgrounds */
	  inverted: _react.PropTypes.bool,
	
	  /** Show that the header is inactive */
	  disabled: _react.PropTypes.bool,
	
	  /** Headers may be formatted to label smaller or de-emphasized content */
	  sub: _react.PropTypes.bool,
	
	  /** Content headings are sized with em and are based on the font-size of their container. */
	  size: _react.PropTypes.oneOf(Header._meta.props.size),
	
	  /** Shorthand for Header.Subheader. */
	  subheader: _lib.customPropTypes.itemShorthand,
	
	  /** Align header content */
	  textAlign: _react.PropTypes.oneOf(Header._meta.props.textAlign)
	};
	
	Header.Content = _HeaderContent2.default;
	Header.Subheader = _HeaderSubheader2.default;
	
	exports.default = Header;

/***/ },
/* 923 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function HeaderSubheader(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)('sub header', className);
	  var rest = (0, _lib.getUnhandledProps)(HeaderSubheader, props);
	  var ElementType = (0, _lib.getElementType)(HeaderSubheader, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	HeaderSubheader._meta = {
	  name: 'HeaderSubheader',
	  parent: 'Header',
	  type: _lib.META.TYPES.ELEMENT
	};
	
	HeaderSubheader.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = HeaderSubheader;

/***/ },
/* 924 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Header content wraps the main content when there is an adjacent Icon or Image.
	 */
	function HeaderContent(props) {
	  var children = props.children;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)(className, 'content');
	  var rest = (0, _lib.getUnhandledProps)(HeaderContent, props);
	  var ElementType = (0, _lib.getElementType)(HeaderContent, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	HeaderContent._meta = {
	  name: 'HeaderContent',
	  parent: 'Header',
	  type: _lib.META.TYPES.VIEW
	};
	
	HeaderContent.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = HeaderContent;

/***/ },
/* 925 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _List = __webpack_require__(926);
	
	var _List2 = _interopRequireDefault(_List);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _List2.default;

/***/ },
/* 926 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _ListContent = __webpack_require__(927);
	
	var _ListContent2 = _interopRequireDefault(_ListContent);
	
	var _ListDescription = __webpack_require__(928);
	
	var _ListDescription2 = _interopRequireDefault(_ListDescription);
	
	var _ListHeader = __webpack_require__(929);
	
	var _ListHeader2 = _interopRequireDefault(_ListHeader);
	
	var _ListIcon = __webpack_require__(930);
	
	var _ListIcon2 = _interopRequireDefault(_ListIcon);
	
	var _ListItem = __webpack_require__(931);
	
	var _ListItem2 = _interopRequireDefault(_ListItem);
	
	var _ListList = __webpack_require__(932);
	
	var _ListList2 = _interopRequireDefault(_ListList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A list groups related content
	 **/
	function List(props) {
	  var animated = props.animated;
	  var bulleted = props.bulleted;
	  var celled = props.celled;
	  var children = props.children;
	  var className = props.className;
	  var divided = props.divided;
	  var floated = props.floated;
	  var horizontal = props.horizontal;
	  var inverted = props.inverted;
	  var items = props.items;
	  var link = props.link;
	  var ordered = props.ordered;
	  var relaxed = props.relaxed;
	  var size = props.size;
	  var selection = props.selection;
	  var verticalAlign = props.verticalAlign;
	
	
	  var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(animated, 'animated'), (0, _lib.useKeyOnly)(bulleted, 'bulleted'), (0, _lib.useKeyOnly)(celled, 'celled'), (0, _lib.useKeyOnly)(divided, 'divided'), (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(link, 'link'), (0, _lib.useKeyOnly)(ordered, 'ordered'), (0, _lib.useKeyOnly)(selection, 'selection'), (0, _lib.useKeyOrValueAndKey)(relaxed, 'relaxed'), (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useVerticalAlignProp)(verticalAlign), 'list', className);
	  var rest = (0, _lib.getUnhandledProps)(List, props);
	  var ElementType = (0, _lib.getElementType)(List, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    (0, _map3.default)(items, function (item) {
	      return _ListItem2.default.create(item);
	    })
	  );
	}
	
	List._meta = {
	  name: 'List',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    floated: _lib.SUI.FLOATS,
	    relaxed: ['very'],
	    size: _lib.SUI.SIZES,
	    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
	  }
	};
	
	List.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A list can animate to set the current item apart from the list. */
	  animated: _react.PropTypes.bool,
	
	  /** A list can mark items with a bullet. */
	  bulleted: _react.PropTypes.bool,
	
	  /** A list can divide its items into cells. */
	  celled: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A list can show divisions between content. */
	  divided: _react.PropTypes.bool,
	
	  /** An list can be floated left or right. */
	  floated: _react.PropTypes.oneOf(List._meta.props.floated),
	
	  /** A list can be formatted to have items appear horizontally. */
	  horizontal: _react.PropTypes.bool,
	
	  /** A list can be inverted to appear on a dark background. */
	  inverted: _react.PropTypes.bool,
	
	  /** Shorthand array of props for ListItem. */
	  items: _lib.customPropTypes.collectionShorthand,
	
	  /** A list can be specially formatted for navigation links. */
	  link: _react.PropTypes.bool,
	
	  /** A list can be ordered numerically. */
	  ordered: _react.PropTypes.bool,
	
	  /** A list can relax its padding to provide more negative space. */
	  relaxed: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(List._meta.props.relaxed)]),
	
	  /** A selection list formats list items as possible choices. */
	  selection: _react.PropTypes.bool,
	
	  /** A list can vary in size. */
	  size: _react.PropTypes.oneOf(List._meta.props.size),
	
	  /** An element inside a list can be vertically aligned. */
	  verticalAlign: _react.PropTypes.oneOf(List._meta.props.verticalAlign)
	};
	
	List.Content = _ListContent2.default;
	List.Description = _ListDescription2.default;
	List.Header = _ListHeader2.default;
	List.Icon = _ListIcon2.default;
	List.Item = _ListItem2.default;
	List.List = _ListList2.default;
	
	exports.default = List;

/***/ },
/* 927 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _ListDescription = __webpack_require__(928);
	
	var _ListDescription2 = _interopRequireDefault(_ListDescription);
	
	var _ListHeader = __webpack_require__(929);
	
	var _ListHeader2 = _interopRequireDefault(_ListHeader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ListContent(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	  var description = props.description;
	  var floated = props.floated;
	  var header = props.header;
	  var verticalAlign = props.verticalAlign;
	
	
	  var classes = (0, _classnames2.default)((0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useVerticalAlignProp)(verticalAlign), 'content', className);
	  var rest = (0, _lib.getUnhandledProps)(ListContent, props);
	  var ElementType = (0, _lib.getElementType)(ListContent, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    _ListHeader2.default.create(header),
	    _ListDescription2.default.create(description),
	    content
	  );
	}
	
	ListContent._meta = {
	  name: 'ListContent',
	  parent: 'List',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    floated: _lib.SUI.FLOATS,
	    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
	  }
	};
	
	ListContent.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** Shorthand for ListDescription. */
	  description: _lib.customPropTypes.itemShorthand,
	
	  /** An list content can be floated left or right. */
	  floated: _react.PropTypes.oneOf(ListContent._meta.props.floated),
	
	  /** Shorthand for ListHeader. */
	  header: _lib.customPropTypes.itemShorthand,
	
	  /** An element inside a list can be vertically aligned. */
	  verticalAlign: _react.PropTypes.oneOf(ListContent._meta.props.verticalAlign)
	};
	
	ListContent.create = (0, _lib.createShorthandFactory)(ListContent, function (content) {
	  return { content: content };
	});
	
	exports.default = ListContent;

/***/ },
/* 928 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ListDescription(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)(className, 'description');
	  var rest = (0, _lib.getUnhandledProps)(ListDescription, props);
	  var ElementType = (0, _lib.getElementType)(ListDescription, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	ListDescription._meta = {
	  name: 'ListDescription',
	  parent: 'List',
	  type: _lib.META.TYPES.ELEMENT
	};
	
	ListDescription.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	ListDescription.create = (0, _lib.createShorthandFactory)(ListDescription, function (content) {
	  return { content: content };
	});
	
	exports.default = ListDescription;

/***/ },
/* 929 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ListHeader(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)(className, 'header');
	  var rest = (0, _lib.getUnhandledProps)(ListHeader, props);
	  var ElementType = (0, _lib.getElementType)(ListHeader, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	ListHeader._meta = {
	  name: 'ListHeader',
	  parent: 'List',
	  type: _lib.META.TYPES.ELEMENT
	};
	
	ListHeader.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	ListHeader.create = (0, _lib.createShorthandFactory)(ListHeader, function (content) {
	  return { content: content };
	});
	
	exports.default = ListHeader;

/***/ },
/* 930 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(813);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ListIcon(props) {
	  var className = props.className;
	  var verticalAlign = props.verticalAlign;
	
	  var classes = (0, _classnames2.default)((0, _lib.useVerticalAlignProp)(verticalAlign), className);
	  var rest = (0, _lib.getUnhandledProps)(ListIcon, props);
	
	  return _react2.default.createElement(_Icon2.default, _extends({}, rest, { className: classes }));
	}
	
	ListIcon._meta = {
	  name: 'ListIcon',
	  parent: 'List',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
	  }
	};
	
	ListIcon.propTypes = {
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** An element inside a list can be vertically aligned. */
	  verticalAlign: _react.PropTypes.oneOf(ListIcon._meta.props.verticalAlign)
	};
	
	ListIcon.create = (0, _lib.createShorthandFactory)(ListIcon, function (name) {
	  return { name: name };
	});
	
	exports.default = ListIcon;

/***/ },
/* 931 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isPlainObject2 = __webpack_require__(728);
	
	var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Image = __webpack_require__(857);
	
	var _Image2 = _interopRequireDefault(_Image);
	
	var _ListContent = __webpack_require__(927);
	
	var _ListContent2 = _interopRequireDefault(_ListContent);
	
	var _ListDescription = __webpack_require__(928);
	
	var _ListDescription2 = _interopRequireDefault(_ListDescription);
	
	var _ListHeader = __webpack_require__(929);
	
	var _ListHeader2 = _interopRequireDefault(_ListHeader);
	
	var _ListIcon = __webpack_require__(930);
	
	var _ListIcon2 = _interopRequireDefault(_ListIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ListItem(props) {
	  var active = props.active;
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	  var description = props.description;
	  var disabled = props.disabled;
	  var header = props.header;
	  var icon = props.icon;
	  var image = props.image;
	  var value = props.value;
	
	
	  var ElementType = (0, _lib.getElementType)(ListItem, props);
	  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(ElementType !== 'li', 'item'), className);
	  var rest = (0, _lib.getUnhandledProps)(ListItem, props);
	  var valueProp = ElementType === 'li' ? { value: value } : { 'data-value': value };
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }, valueProp),
	      children
	    );
	  }
	
	  var iconElement = _ListIcon2.default.create(icon);
	  var imageElement = _Image2.default.create(image);
	
	  // See description of `content` prop for explanation about why this is necessary.
	  if (!(0, _react.isValidElement)(content) && (0, _isPlainObject3.default)(content)) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }, valueProp),
	      iconElement || imageElement,
	      _ListContent2.default.create(content, { header: header, description: description })
	    );
	  }
	
	  var headerElement = _ListHeader2.default.create(header);
	  var descriptionElement = _ListDescription2.default.create(description);
	
	  if (iconElement || imageElement) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }, valueProp),
	      iconElement || imageElement,
	      (content || headerElement || descriptionElement) && _react2.default.createElement(
	        _ListContent2.default,
	        null,
	        headerElement,
	        descriptionElement,
	        content
	      )
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }, valueProp),
	    headerElement,
	    descriptionElement,
	    content
	  );
	}
	
	ListItem._meta = {
	  name: 'ListItem',
	  parent: 'List',
	  type: _lib.META.TYPES.ELEMENT
	};
	
	ListItem.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A list item can active. */
	  active: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /**
	   * Shorthand for primary content.
	   *
	   * Heads up!
	   *
	   * This is handled slightly differently than the typical `content` prop since
	   * the wrapping ListContent is not used when there's no icon or image.
	   *
	   * If you pass content as:
	   * - an element/literal, it's treated as the sibling node to
	   * header/description (whether wrapped in Item.Content or not).
	   * - a props object, it forces the presence of Item.Content and passes those
	   * props to it. If you pass a content prop within that props object, it
	   * will be treated as the sibling node to header/description.
	   */
	  content: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for ListDescription. */
	  description: _lib.customPropTypes.itemShorthand,
	
	  /** A list item can disabled. */
	  disabled: _react.PropTypes.bool,
	
	  /** Shorthand for ListHeader. */
	  header: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for ListIcon. */
	  icon: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['image']), _lib.customPropTypes.itemShorthand]),
	
	  /** Shorthand for Image. */
	  image: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['icon']), _lib.customPropTypes.itemShorthand]),
	
	  /** A value for an ordered list. */
	  value: _react.PropTypes.string
	};
	
	ListItem.create = (0, _lib.createShorthandFactory)(ListItem, function (content) {
	  return { content: content };
	});
	
	exports.default = ListItem;

/***/ },
/* 932 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ListList(props) {
	  var children = props.children;
	  var className = props.className;
	
	
	  var rest = (0, _lib.getUnhandledProps)(ListList, props);
	  var ElementType = (0, _lib.getElementType)(ListList, props);
	  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(ElementType !== 'ul' && ElementType !== 'ol', 'list'), className);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	ListList._meta = {
	  name: 'ListList',
	  parent: 'List',
	  type: _lib.META.TYPES.ELEMENT
	};
	
	ListList.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = ListList;

/***/ },
/* 933 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Loader = __webpack_require__(934);
	
	var _Loader2 = _interopRequireDefault(_Loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Loader2.default;

/***/ },
/* 934 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Loader(props) {
	  var active = props.active;
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	  var disabled = props.disabled;
	  var indeterminate = props.indeterminate;
	  var inline = props.inline;
	  var inverted = props.inverted;
	  var size = props.size;
	
	
	  var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(indeterminate, 'indeterminate'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(children || content, 'text'), (0, _lib.useKeyOrValueAndKey)(inline, 'inline'), 'loader', className);
	  var rest = (0, _lib.getUnhandledProps)(Loader, props);
	  var ElementType = (0, _lib.getElementType)(Loader, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	Loader._meta = {
	  name: 'Loader',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    inline: ['centered'],
	    size: _lib.SUI.SIZES
	  }
	};
	
	Loader.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A loader can be active or visible. */
	  active: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** A loader can be disabled or hidden. */
	  disabled: _react.PropTypes.bool,
	
	  /** A loader can show it's unsure of how long a task will take. */
	  indeterminate: _react.PropTypes.bool,
	
	  /** Loaders can appear inline with content. */
	  inline: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Loader._meta.props.inline)]),
	
	  /** Loaders can have their colors inverted. */
	  inverted: _react.PropTypes.bool,
	
	  /** Loaders can have different sizes. */
	  size: _react.PropTypes.oneOf(Loader._meta.props.size)
	};
	
	exports.default = Loader;

/***/ },
/* 935 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Rail = __webpack_require__(936);
	
	var _Rail2 = _interopRequireDefault(_Rail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Rail2.default;

/***/ },
/* 936 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A rail is used to show accompanying content outside the boundaries of the main view of a site.
	 */
	function Rail(props) {
	  var attached = props.attached;
	  var children = props.children;
	  var className = props.className;
	  var close = props.close;
	  var dividing = props.dividing;
	  var internal = props.internal;
	  var position = props.position;
	  var size = props.size;
	
	
	  var classes = (0, _classnames2.default)('ui', position, size, (0, _lib.useKeyOnly)(attached, 'attached'), (0, _lib.useKeyOnly)(dividing, 'dividing'), (0, _lib.useKeyOnly)(internal, 'internal'), (0, _lib.useKeyOrValueAndKey)(close, 'close'), 'rail', className);
	  var rest = (0, _lib.getUnhandledProps)(Rail, props);
	  var ElementType = (0, _lib.getElementType)(Rail, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	Rail._meta = {
	  name: 'Rail',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    close: ['very'],
	    position: _lib.SUI.FLOATS,
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium')
	  }
	};
	
	Rail.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A rail can appear attached to the main viewport. */
	  attached: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A rail can appear closer to the main viewport. */
	  close: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Rail._meta.props.close)]),
	
	  /** A rail can create a division between itself and a container. */
	  dividing: _react.PropTypes.bool,
	
	  /** A rail can attach itself to the inside of a container. */
	  internal: _react.PropTypes.bool,
	
	  /** A rail can be presented on the left or right side of a container. */
	  position: _react.PropTypes.oneOf(Rail._meta.props.position).isRequired,
	
	  /** A rail can have different sizes. */
	  size: _react.PropTypes.oneOf(Rail._meta.props.size)
	};
	
	exports.default = Rail;

/***/ },
/* 937 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Segment = __webpack_require__(938);
	
	var _Segment2 = _interopRequireDefault(_Segment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Segment2.default;

/***/ },
/* 938 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _SegmentGroup = __webpack_require__(939);
	
	var _SegmentGroup2 = _interopRequireDefault(_SegmentGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A segment is used to create a grouping of related content.
	 */
	function Segment(props) {
	  var attached = props.attached;
	  var basic = props.basic;
	  var children = props.children;
	  var circular = props.circular;
	  var className = props.className;
	  var clearing = props.clearing;
	  var color = props.color;
	  var compact = props.compact;
	  var disabled = props.disabled;
	  var floated = props.floated;
	  var inverted = props.inverted;
	  var loading = props.loading;
	  var padded = props.padded;
	  var piled = props.piled;
	  var raised = props.raised;
	  var secondary = props.secondary;
	  var size = props.size;
	  var stacked = props.stacked;
	  var tertiary = props.tertiary;
	  var textAlign = props.textAlign;
	  var vertical = props.vertical;
	
	
	  var classes = (0, _classnames2.default)('ui', color, size, (0, _lib.useKeyOrValueAndKey)(attached, 'attached'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(clearing, 'clearing'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOrValueAndKey)(padded, 'padded'), (0, _lib.useKeyOnly)(piled, 'piled'), (0, _lib.useKeyOnly)(raised, 'raised'), (0, _lib.useKeyOnly)(secondary, 'secondary'), (0, _lib.useKeyOnly)(stacked, 'stacked'), (0, _lib.useKeyOnly)(tertiary, 'tertiary'), (0, _lib.useTextAlignProp)(textAlign), (0, _lib.useKeyOnly)(vertical, 'vertical'), className, 'segment');
	  var rest = (0, _lib.getUnhandledProps)(Segment, props);
	  var ElementType = (0, _lib.getElementType)(Segment, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	Segment.Group = _SegmentGroup2.default;
	
	Segment._meta = {
	  name: 'Segment',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    attached: ['top', 'bottom'],
	    color: _lib.SUI.COLORS,
	    floated: _lib.SUI.FLOATS,
	    padded: ['very'],
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium'),
	    textAlign: _lib.SUI.TEXT_ALIGNMENTS
	  }
	};
	
	Segment.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Attach segment to other content, like a header */
	  attached: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(Segment._meta.props.attached), _react.PropTypes.bool]),
	
	  /** A basic segment has no special formatting */
	  basic: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** A segment can be circular */
	  circular: _react.PropTypes.bool,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A segment can clear floated content */
	  clearing: _react.PropTypes.bool,
	
	  /** Segment can be colored */
	  color: _react.PropTypes.oneOf(Segment._meta.props.color),
	
	  /** A segment may take up only as much space as is necessary */
	  compact: _react.PropTypes.bool,
	
	  /** A segment may show its content is disabled */
	  disabled: _react.PropTypes.bool,
	
	  /** Segment content can be floated to the left or right */
	  floated: _react.PropTypes.oneOf(Segment._meta.props.floated),
	
	  /** A segment can have its colors inverted for contrast */
	  inverted: _react.PropTypes.bool,
	
	  /** A segment may show its content is being loaded */
	  loading: _react.PropTypes.bool,
	
	  /** A segment can increase its padding */
	  padded: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Segment._meta.props.padded)]),
	
	  /** Formatted to look like a pile of pages. */
	  piled: _react.PropTypes.bool,
	
	  /** A segment may be formatted to raise above the page. */
	  raised: _react.PropTypes.bool,
	
	  /** A segment can be formatted to appear less noticeable */
	  secondary: _react.PropTypes.bool,
	
	  /** A segment can have different sizes. */
	  size: _react.PropTypes.oneOf(Segment._meta.props.size),
	
	  /** Formatted to show it contains multiple pages. */
	  stacked: _react.PropTypes.bool,
	
	  /** A segment can be formatted to appear even less noticeable */
	  tertiary: _react.PropTypes.bool,
	
	  /** Formats content to be aligned as part of a vertical group. */
	  textAlign: _react.PropTypes.oneOf(Segment._meta.props.textAlign),
	
	  /** Formats content to be aligned vertically */
	  vertical: _react.PropTypes.bool
	};
	
	exports.default = Segment;

/***/ },
/* 939 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A group of segments can be formatted to appear together.
	 */
	function SegmentGroup(props) {
	  var children = props.children;
	  var className = props.className;
	  var compact = props.compact;
	  var horizontal = props.horizontal;
	  var piled = props.piled;
	  var raised = props.raised;
	  var size = props.size;
	  var stacked = props.stacked;
	
	  var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(piled, 'piled'), (0, _lib.useKeyOnly)(raised, 'raised'), (0, _lib.useKeyOnly)(stacked, 'stacked'), className, 'segments');
	  var rest = (0, _lib.getUnhandledProps)(SegmentGroup, props);
	  var ElementType = (0, _lib.getElementType)(SegmentGroup, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	SegmentGroup._meta = {
	  name: 'SegmentGroup',
	  parent: 'Segment',
	  type: _lib.META.TYPES.ELEMENT,
	  props: {
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium')
	  }
	};
	
	SegmentGroup.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** A segment may take up only as much space as is necessary */
	  compact: _react.PropTypes.bool,
	
	  /** Formats content to be aligned horizontally */
	  horizontal: _react.PropTypes.bool,
	
	  /** Formatted to look like a pile of pages. */
	  piled: _react.PropTypes.bool,
	
	  /** A segment group may be formatted to raise above the page. */
	  raised: _react.PropTypes.bool,
	
	  /** A segment group can have different sizes. */
	  size: _react.PropTypes.oneOf(SegmentGroup._meta.props.size),
	
	  /** Formatted to show it contains multiple pages. */
	  stacked: _react.PropTypes.bool
	};
	
	exports.default = SegmentGroup;

/***/ },
/* 940 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Step = __webpack_require__(941);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Step2.default;

/***/ },
/* 941 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(851);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _StepContent = __webpack_require__(942);
	
	var _StepContent2 = _interopRequireDefault(_StepContent);
	
	var _StepDescription = __webpack_require__(943);
	
	var _StepDescription2 = _interopRequireDefault(_StepDescription);
	
	var _StepGroup = __webpack_require__(945);
	
	var _StepGroup2 = _interopRequireDefault(_StepGroup);
	
	var _StepTitle = __webpack_require__(944);
	
	var _StepTitle2 = _interopRequireDefault(_StepTitle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A step shows the completion status of an activity in a series of activities
	 */
	var Step = function (_Component) {
	  _inherits(Step, _Component);
	
	  function Step() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Step);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Step.__proto__ || Object.getPrototypeOf(Step)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
	      var onClick = _this.props.onClick;
	
	
	      if (onClick) onClick(e);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Step, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var active = _props.active;
	      var children = _props.children;
	      var className = _props.className;
	      var completed = _props.completed;
	      var description = _props.description;
	      var disabled = _props.disabled;
	      var href = _props.href;
	      var icon = _props.icon;
	      var link = _props.link;
	      var onClick = _props.onClick;
	      var title = _props.title;
	
	
	      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(completed, 'completed'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(link, 'link'), 'step', className);
	      var rest = (0, _lib.getUnhandledProps)(Step, this.props);
	      var ElementType = (0, _lib.getElementType)(Step, this.props, function () {
	        if (onClick) return 'a';
	      });
	
	      if (children) {
	        return _react2.default.createElement(
	          ElementType,
	          _extends({}, rest, { className: classes, href: href, onClick: this.handleClick }),
	          children
	        );
	      }
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes, href: href, onClick: this.handleClick }),
	        _Icon2.default.create(icon),
	        _react2.default.createElement(_StepContent2.default, { description: description, title: title })
	      );
	    }
	  }]);
	
	  return Step;
	}(_react.Component);
	
	Step.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A step can be highlighted as active. */
	  active: _react.PropTypes.bool,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** A step can show that a user has completed it. */
	  completed: _react.PropTypes.bool,
	
	  /** Shorthand for StepDescription. */
	  description: _lib.customPropTypes.itemShorthand,
	
	  /** Show that the Loader is inactive. */
	  disabled: _react.PropTypes.bool,
	
	  /** Shorthand for Icon. */
	  icon: _lib.customPropTypes.itemShorthand,
	
	  /** A step can be link. */
	  link: _react.PropTypes.bool,
	
	  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
	  href: _react.PropTypes.string,
	
	  /** Render as an `a` tag instead of a `div` and called with event on Step click. */
	  onClick: _react.PropTypes.func,
	
	  /** A step can show a ordered sequence of steps. Passed from StepGroup. */
	  ordered: _react.PropTypes.bool,
	
	  /** Shorthand for StepTitle. */
	  title: _lib.customPropTypes.itemShorthand
	};
	Step._meta = {
	  name: 'Step',
	  type: _lib.META.TYPES.ELEMENT
	};
	Step.Content = _StepContent2.default;
	Step.Description = _StepDescription2.default;
	Step.Group = _StepGroup2.default;
	Step.Title = _StepTitle2.default;
	exports.default = Step;

/***/ },
/* 942 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	var _StepDescription = __webpack_require__(943);
	
	var _StepDescription2 = _interopRequireDefault(_StepDescription);
	
	var _StepTitle = __webpack_require__(944);
	
	var _StepTitle2 = _interopRequireDefault(_StepTitle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function StepContent(props) {
	  var children = props.children;
	  var className = props.className;
	  var description = props.description;
	  var title = props.title;
	
	  var classes = (0, _classnames2.default)(className, 'content');
	  var rest = (0, _lib.getUnhandledProps)(StepContent, props);
	  var ElementType = (0, _lib.getElementType)(StepContent, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    (0, _lib.createShorthand)(_StepTitle2.default, function (val) {
	      return { title: val };
	    }, title),
	    (0, _lib.createShorthand)(_StepDescription2.default, function (val) {
	      return { description: val };
	    }, description)
	  );
	}
	
	StepContent._meta = {
	  name: 'StepContent',
	  parent: 'Step',
	  type: _lib.META.TYPES.ELEMENT
	};
	
	StepContent.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Shorthand for StepDescription. */
	  description: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for StepTitle. */
	  title: _lib.customPropTypes.itemShorthand
	};
	
	exports.default = StepContent;

/***/ },
/* 943 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function StepDescription(props) {
	  var children = props.children;
	  var className = props.className;
	  var description = props.description;
	
	  var classes = (0, _classnames2.default)(className, 'description');
	  var rest = (0, _lib.getUnhandledProps)(StepDescription, props);
	  var ElementType = (0, _lib.getElementType)(StepDescription, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || description
	  );
	}
	
	StepDescription._meta = {
	  name: 'StepDescription',
	  parent: 'Step',
	  type: _lib.META.TYPES.ELEMENT
	};
	
	StepDescription.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Shorthand for primary content. */
	  description: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = StepDescription;

/***/ },
/* 944 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function StepTitle(props) {
	  var children = props.children;
	  var className = props.className;
	  var title = props.title;
	
	  var classes = (0, _classnames2.default)(className, 'title');
	  var rest = (0, _lib.getUnhandledProps)(StepTitle, props);
	  var ElementType = (0, _lib.getElementType)(StepTitle, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || title
	  );
	}
	
	StepTitle._meta = {
	  name: 'StepTitle',
	  parent: 'Step',
	  type: _lib.META.TYPES.ELEMENT
	};
	
	StepTitle.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Shorthand for primary content. */
	  title: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = StepTitle;

/***/ },
/* 945 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Step = __webpack_require__(941);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function StepGroup(props) {
	  var children = props.children;
	  var className = props.className;
	  var fluid = props.fluid;
	  var items = props.items;
	  var ordered = props.ordered;
	  var size = props.size;
	  var stackable = props.stackable;
	  var vertical = props.vertical;
	
	  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(ordered, 'ordered'), (0, _lib.useValueAndKey)(stackable, 'stackable'), (0, _lib.useKeyOnly)(vertical, 'vertical'), size, className, 'steps');
	  var rest = (0, _lib.getUnhandledProps)(StepGroup, props);
	  var ElementType = (0, _lib.getElementType)(StepGroup, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  var content = (0, _map3.default)(items, function (item) {
	    var key = item.key || [item.title, item.description].join('-');
	    return _react2.default.createElement(_Step2.default, _extends({ key: key }, item));
	  });
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    content
	  );
	}
	
	StepGroup._meta = {
	  name: 'StepGroup',
	  parent: 'Step',
	  props: {
	    sizes: (0, _without3.default)(_lib.SUI.SIZES, 'medium'),
	    stackable: ['tablet']
	  },
	  type: _lib.META.TYPES.ELEMENT
	};
	
	StepGroup.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** A fluid step takes up the width of its container. */
	  fluid: _react.PropTypes.bool,
	
	  /** Shorthand array of props for Step. */
	  items: _lib.customPropTypes.collectionShorthand,
	
	  /** A step can show a ordered sequence of steps. */
	  ordered: _react.PropTypes.bool,
	
	  /** Steps can have different sizes. */
	  size: _react.PropTypes.oneOf(StepGroup._meta.props.sizes),
	
	  /** A step can stack vertically only on smaller screens. */
	  stackable: _react.PropTypes.oneOf(StepGroup._meta.props.stackable),
	
	  /** A step can be displayed stacked vertically. */
	  vertical: _react.PropTypes.bool
	};
	
	exports.default = StepGroup;

/***/ },
/* 946 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys2 = __webpack_require__(635);
	
	var _keys3 = _interopRequireDefault(_keys2);
	
	var _omit2 = __webpack_require__(576);
	
	var _omit3 = _interopRequireDefault(_omit2);
	
	var _each2 = __webpack_require__(678);
	
	var _each3 = _interopRequireDefault(_each2);
	
	var _has2 = __webpack_require__(520);
	
	var _has3 = _interopRequireDefault(_has2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(851);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _AccordionContent = __webpack_require__(947);
	
	var _AccordionContent2 = _interopRequireDefault(_AccordionContent);
	
	var _AccordionTitle = __webpack_require__(948);
	
	var _AccordionTitle2 = _interopRequireDefault(_AccordionTitle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * An accordion allows users to toggle the display of sections of content
	 */
	var Accordion = function (_Component) {
	  _inherits(Accordion, _Component);
	
	  function Accordion() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Accordion);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleTitleClick = function (e, index) {
	      var onTitleClick = _this.props.onTitleClick;
	      var activeIndex = _this.state.activeIndex;
	
	
	      _this.trySetState({
	        activeIndex: index === activeIndex ? -1 : index
	      });
	      if (onTitleClick) onTitleClick(e, index);
	    }, _this.renderChildren = function () {
	      var children = _this.props.children;
	      var activeIndex = _this.state.activeIndex;
	
	
	      return _react.Children.map(children, function (child, i) {
	        var isTitle = child.type === _AccordionTitle2.default;
	        var isContent = child.type === _AccordionContent2.default;
	
	        if (isTitle) {
	          var isActive = (0, _has3.default)(child, 'props.active') ? child.props.active : activeIndex === i;
	          var onClick = function onClick(e) {
	            _this.handleTitleClick(e, i);
	            if (child.props.onClick) child.props.onClick(e, i);
	          };
	          return (0, _react.cloneElement)(child, _extends({}, child.props, { active: isActive, onClick: onClick }));
	        }
	
	        if (isContent) {
	          // content must be the a sibling too title
	          // it is active if the active title index that precedes it is active
	          var _isActive = (0, _has3.default)(child, 'props.active') ? child.props.active : activeIndex === i - 1;
	          return (0, _react.cloneElement)(child, _extends({}, child.props, { active: _isActive }));
	        }
	
	        return child;
	      });
	    }, _this.renderPanels = function () {
	      var panels = _this.props.panels;
	      var activeIndex = _this.state.activeIndex;
	
	      var children = [];
	
	      (0, _each3.default)(panels, function (panel, i) {
	        var isActive = (0, _has3.default)(panel, 'active') ? panel.active : activeIndex === i;
	
	        var onClick = function onClick(e) {
	          _this.handleTitleClick(e, i);
	          if (panel.onClick) panel.onClick(e, i);
	        };
	
	        children.push(_react2.default.createElement(
	          _AccordionTitle2.default,
	          { key: panel.title + '-title', active: isActive, onClick: onClick },
	          _react2.default.createElement(_Icon2.default, { name: 'dropdown' }),
	          panel.title
	        ));
	        children.push(_react2.default.createElement(
	          _AccordionContent2.default,
	          { key: panel.title + '-content', active: isActive },
	          panel.content
	        ));
	      });
	
	      return children;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Accordion, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Accordion.prototype.__proto__ || Object.getPrototypeOf(Accordion.prototype), 'componentWillMount', this).call(this);
	      this.trySetState({ activeIndex: -1 });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var fluid = _props.fluid;
	      var inverted = _props.inverted;
	      var panels = _props.panels;
	      var styled = _props.styled;
	
	
	      var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(styled, 'styled'), 'accordion', className);
	      var rest = (0, _omit3.default)(this.props, (0, _keys3.default)(Accordion.propTypes));
	      var ElementType = (0, _lib.getElementType)(Accordion, this.props);
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes }),
	        panels ? this.renderPanels() : this.renderChildren()
	      );
	    }
	  }]);
	
	  return Accordion;
	}(_lib.AutoControlledComponent);
	
	Accordion.autoControlledProps = ['activeIndex'];
	Accordion.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Index of the currently active panel. */
	  activeIndex: _react.PropTypes.number,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Initial activeIndex value. */
	  defaultActiveIndex: _react.PropTypes.number,
	
	  /** Format to take up the width of it's container. */
	  fluid: _react.PropTypes.bool,
	
	  /** Format for dark backgrounds. */
	  inverted: _react.PropTypes.bool,
	
	  /** Called with (event, index) when a panel title is clicked. */
	  onTitleClick: _react.PropTypes.func,
	
	  /**
	   * Create simple accordion panels from an array of { text: <string>, content: <string> } objects.
	   * Object can optionally define an `active` key to open/close the panel.
	   * Mutually exclusive with children.
	   * TODO: AccordionPanel should be a sub-component
	   */
	  panels: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    active: _react.PropTypes.bool,
	    title: _react.PropTypes.string,
	    content: _react.PropTypes.string,
	    onClick: _react.PropTypes.func
	  }))]),
	
	  /** Adds some basic styling to accordion panels. */
	  styled: _react.PropTypes.bool
	};
	Accordion._meta = {
	  name: 'Accordion',
	  type: _lib.META.TYPES.MODULE
	};
	Accordion.Content = _AccordionContent2.default;
	Accordion.Title = _AccordionTitle2.default;
	exports.default = Accordion;

/***/ },
/* 947 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function AccordionContent(props) {
	  var active = props.active;
	  var children = props.children;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)('content', (0, _lib.useKeyOnly)(active, 'active'), className);
	  var rest = (0, _lib.getUnhandledProps)(AccordionContent, props);
	  var ElementType = (0, _lib.getElementType)(AccordionContent, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	AccordionContent.displayName = 'AccordionContent';
	
	AccordionContent.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Whether or not the content is visible. */
	  active: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	AccordionContent._meta = {
	  name: 'AccordionContent',
	  type: _lib.META.TYPES.MODULE,
	  parent: 'Accordion'
	};
	
	exports.default = AccordionContent;

/***/ },
/* 948 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A title sub-component for Accordion component
	 */
	var AccordionTitle = function (_Component) {
	  _inherits(AccordionTitle, _Component);
	
	  function AccordionTitle() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, AccordionTitle);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AccordionTitle.__proto__ || Object.getPrototypeOf(AccordionTitle)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
	      var onClick = _this.props.onClick;
	
	
	      if (onClick) onClick(e);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(AccordionTitle, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var active = _props.active;
	      var children = _props.children;
	      var className = _props.className;
	
	
	      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), 'title', className);
	      var rest = (0, _lib.getUnhandledProps)(AccordionTitle, this.props);
	      var ElementType = (0, _lib.getElementType)(AccordionTitle, this.props);
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes, onClick: this.handleClick }),
	        children
	      );
	    }
	  }]);
	
	  return AccordionTitle;
	}(_react.Component);
	
	AccordionTitle.displayName = 'AccordionTitle';
	AccordionTitle.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Whether or not the title is in the open state. */
	  active: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Called with (event, index) on title click. */
	  onClick: _react.PropTypes.func
	};
	AccordionTitle._meta = {
	  name: 'AccordionTitle',
	  type: _lib.META.TYPES.MODULE,
	  parent: 'Accordion'
	};
	exports.default = AccordionTitle;

/***/ },
/* 949 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Popup = __webpack_require__(950);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Popup2.default;

/***/ },
/* 950 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys2 = __webpack_require__(635);
	
	var _keys3 = _interopRequireDefault(_keys2);
	
	var _pick2 = __webpack_require__(627);
	
	var _pick3 = _interopRequireDefault(_pick2);
	
	var _assign2 = __webpack_require__(951);
	
	var _assign3 = _interopRequireDefault(_assign2);
	
	var _mapValues2 = __webpack_require__(953);
	
	var _mapValues3 = _interopRequireDefault(_mapValues2);
	
	var _isNumber2 = __webpack_require__(726);
	
	var _isNumber3 = _interopRequireDefault(_isNumber2);
	
	var _includes2 = __webpack_require__(806);
	
	var _includes3 = _interopRequireDefault(_includes2);
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	var _Portal = __webpack_require__(829);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	var _PopupContent = __webpack_require__(954);
	
	var _PopupContent2 = _interopRequireDefault(_PopupContent);
	
	var _PopupHeader = __webpack_require__(955);
	
	var _PopupHeader2 = _interopRequireDefault(_PopupHeader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _meta = {
	  name: 'Popup',
	  type: _lib.META.TYPES.MODULE,
	  props: {
	    content: [_react.PropTypes.string, _react.PropTypes.node],
	    on: ['hover', 'click', 'focus'],
	    positioning: ['top left', 'top right', 'bottom right', 'bottom left', 'right center', 'left center', 'top center', 'bottom center'],
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium', 'big', 'massive'),
	    wide: [true, false, 'very']
	  }
	};
	
	/**
	 * A Popup displays additional information on top of a page.
	 */
	
	var Popup = function (_Component) {
	  _inherits(Popup, _Component);
	
	  function Popup() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Popup);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.hideOnScroll = function (event) {
	      _this.setState({ closed: true });
	      window.removeEventListener('scroll', _this.hideOnScroll);
	      setTimeout(function () {
	        return _this.setState({ closed: false });
	      }, 50);
	    }, _this.onOpen = function (event) {
	      _this.coords = event.currentTarget.getBoundingClientRect();
	      if (_this.props.hideOnScroll) {
	        window.addEventListener('scroll', _this.hideOnScroll);
	      }
	    }, _this.popupMounted = function (ref) {
	      _this.popupCoords = ref ? ref.getBoundingClientRect() : null;
	      _this.setPopupStyle();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Popup, [{
	    key: 'computePopupStyle',
	    value: function computePopupStyle(positions) {
	      var style = { position: 'absolute' };
	      var offset = this.props.offset;
	      var _window = window;
	      var pageYOffset = _window.pageYOffset;
	      var pageXOffset = _window.pageXOffset;
	      var _document$documentEle = document.documentElement;
	      var clientWidth = _document$documentEle.clientWidth;
	      var clientHeight = _document$documentEle.clientHeight;
	
	
	      if ((0, _includes3.default)(positions, 'right')) {
	        style.right = Math.round(clientWidth - (this.coords.right + pageXOffset));
	        style.left = 'auto';
	      } else if ((0, _includes3.default)(positions, 'left')) {
	        style.left = Math.round(this.coords.left + pageXOffset);
	        style.right = 'auto';
	      } else {
	        // if not left nor right, we are horizontally centering the element
	        var xOffset = (this.coords.width - this.popupCoords.width) / 2;
	        style.left = Math.round(this.coords.left + xOffset + pageXOffset);
	        style.right = 'auto';
	      }
	
	      if ((0, _includes3.default)(positions, 'top')) {
	        style.bottom = Math.round(clientHeight - (this.coords.top + pageYOffset));
	        style.top = 'auto';
	      } else if ((0, _includes3.default)(positions, 'bottom')) {
	        style.top = Math.round(this.coords.bottom + pageYOffset);
	        style.bottom = 'auto';
	      } else {
	        // if not top nor bottom, we are vertically centering the element
	        var yOffset = (this.coords.height + this.popupCoords.height) / 2;
	        style.top = Math.round(this.coords.bottom + pageYOffset - yOffset);
	        style.bottom = 'auto';
	
	        var _xOffset = this.popupCoords.width + 8;
	        if ((0, _includes3.default)(positions, 'right')) {
	          style.right -= _xOffset;
	        } else {
	          style.left -= _xOffset;
	        }
	      }
	
	      if (offset) {
	        if ((0, _isNumber3.default)(style.right)) {
	          style.right -= offset;
	        } else {
	          style.left -= offset;
	        }
	      }
	
	      return style;
	    }
	
	    // check if the style would display
	    // the popup outside of the view port
	
	  }, {
	    key: 'isStyleInViewport',
	    value: function isStyleInViewport(style) {
	      var _window2 = window;
	      var pageYOffset = _window2.pageYOffset;
	      var pageXOffset = _window2.pageXOffset;
	      var _document$documentEle2 = document.documentElement;
	      var clientWidth = _document$documentEle2.clientWidth;
	      var clientHeight = _document$documentEle2.clientHeight;
	
	
	      var element = {
	        top: style.top,
	        left: style.left,
	        width: this.popupCoords.width,
	        height: this.popupCoords.height
	      };
	      if ((0, _isNumber3.default)(style.right)) {
	        element.left = clientWidth - style.right - element.width;
	      }
	      if ((0, _isNumber3.default)(style.bottom)) {
	        element.top = clientHeight - style.bottom - element.height;
	      }
	
	      // hidden on top
	      if (element.top < pageYOffset) return false;
	      // hidden on the bottom
	      if (element.top + element.height > pageYOffset + clientHeight) return false;
	      // hidden the left
	      if (element.left < pageXOffset) return false;
	      // hidden on the right
	      if (element.left + element.width > pageXOffset + clientWidth) return false;
	
	      return true;
	    }
	  }, {
	    key: 'setPopupStyle',
	    value: function setPopupStyle() {
	      if (!this.coords || !this.popupCoords) return;
	      var positioning = this.props.positioning;
	      var style = this.computePopupStyle(positioning);
	
	      // Lets detect if the popup is out of the viewport and adjust
	      // the position accordingly
	      var positions = (0, _without3.default)(_meta.props.positioning, positioning);
	      for (var i = 0; !this.isStyleInViewport(style) && i < positions.length; i++) {
	        style = this.computePopupStyle(positions[i]);
	        positioning = positions[i];
	      }
	
	      // Append 'px' to every numerical values in the style
	      style = (0, _mapValues3.default)(style, function (value) {
	        return (0, _isNumber3.default)(value) ? value + 'px' : value;
	      });
	      this.setState({ style: style, positioning: positioning });
	    }
	  }, {
	    key: 'getPortalProps',
	    value: function getPortalProps() {
	      var portalProps = { onOpen: this.onOpen };
	      var _props = this.props;
	      var on = _props.on;
	      var hoverable = _props.hoverable;
	
	
	      switch (on) {
	        case 'click':
	          portalProps.openOnTriggerClick = true;
	          portalProps.closeOnTriggerClick = true;
	          portalProps.closeOnDocumentClick = true;
	          break;
	
	        case 'focus':
	          portalProps.openOnTriggerFocus = true;
	          portalProps.closeOnTriggerBlur = true;
	          break;
	
	        default:
	          // default to hover
	          portalProps.openOnTriggerMouseOver = true;
	          portalProps.closeOnTriggerMouseLeave = true;
	          // Taken from SUI: https://git.io/vPmCm
	          portalProps.mouseLeaveDelay = 70;
	          portalProps.mouseOverDelay = 50;
	          break;
	      }
	
	      if (hoverable) {
	        portalProps.closeOnPortalMouseLeave = true;
	        portalProps.mouseLeaveDelay = 300;
	      }
	
	      return portalProps;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var basic = _props2.basic;
	      var children = _props2.children;
	      var className = _props2.className;
	      var content = _props2.content;
	      var flowing = _props2.flowing;
	      var header = _props2.header;
	      var inverted = _props2.inverted;
	      var size = _props2.size;
	      var trigger = _props2.trigger;
	      var wide = _props2.wide;
	      var _state = this.state;
	      var positioning = _state.positioning;
	      var closed = _state.closed;
	
	      var style = (0, _assign3.default)({}, this.state.style, this.props.style);
	      var classes = (0, _classnames2.default)('ui', positioning, size, (0, _lib.useKeyOrValueAndKey)(wide, 'wide'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(flowing, 'flowing'), (0, _lib.useKeyOnly)(inverted, 'inverted'), 'popup transition visible', className);
	
	      if (closed) return trigger;
	
	      var rest = (0, _lib.getUnhandledProps)(Popup, this.props);
	      var ElementType = (0, _lib.getElementType)(Popup, this.props);
	      var portalProps = (0, _pick3.default)(rest, (0, _keys3.default)(_Portal2.default.propTypes));
	
	      var popupJSX = _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes, style: style, ref: this.popupMounted }),
	        children,
	        !children && _PopupHeader2.default.create(header),
	        !children && _PopupContent2.default.create(content)
	      );
	
	      return _react2.default.createElement(
	        _Portal2.default,
	        _extends({}, portalProps, {
	          trigger: trigger
	        }, this.getPortalProps()),
	        popupJSX
	      );
	    }
	  }]);
	
	  return Popup;
	}(_react.Component);
	
	Popup.propTypes = {
	  /** Display the popup without the pointing arrow */
	  basic: _react.PropTypes.bool,
	
	  /** You may pass a content as children of the Popup */
	  children: _react.PropTypes.node,
	
	  /** Classes to add to the Popup className. */
	  className: _react.PropTypes.string,
	
	  /** Simple text content for the popover */
	  content: _react.PropTypes.oneOfType(_meta.props.content),
	
	  /** A Flowing popup have no maximum width and continue to flow to fit its content */
	  flowing: _react.PropTypes.bool,
	
	  /** Takes up the entire width of its offset container */
	  // TODO: implement the Popup fluid layout
	  // fluid: PropTypes.bool,
	
	  /** Header displayed above the content in bold */
	  header: _react.PropTypes.string,
	
	  /** Whether the popup should not close on hover */
	  hoverable: _react.PropTypes.bool,
	
	  /** Invert the colors of the popup */
	  inverted: _react.PropTypes.bool,
	
	  /** The node where the popup should mount.. */
	  hideOnScroll: _react.PropTypes.bool,
	
	  /** Horizontal offset in pixels to be applied to the popup */
	  offset: _react.PropTypes.number,
	
	  /** Event triggering the popup */
	  on: _react.PropTypes.oneOf(_meta.props.on),
	
	  /** Positioning for the popover */
	  positioning: _react.PropTypes.oneOf(_meta.props.positioning),
	
	  /** Popup size */
	  size: _react.PropTypes.oneOf(_meta.props.size),
	
	  /** custom popup style */
	  style: _react.PropTypes.object,
	
	  /** Element to be rendered in-place where the popup is defined. */
	  trigger: _react.PropTypes.node,
	
	  /** Popup width */
	  wide: _react.PropTypes.oneOf(_meta.props.wide)
	};
	Popup.defaultProps = {
	  positioning: 'top left',
	  on: 'hover'
	};
	Popup._meta = _meta;
	Popup.Content = _PopupContent2.default;
	Popup.Header = _PopupHeader2.default;
	exports.default = Popup;

/***/ },
/* 951 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(756),
	    copyObject = __webpack_require__(755),
	    createAssigner = __webpack_require__(952),
	    isArrayLike = __webpack_require__(623),
	    isPrototype = __webpack_require__(621),
	    keys = __webpack_require__(635);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});
	
	module.exports = assign;


/***/ },
/* 952 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(625),
	    isIterateeCall = __webpack_require__(745);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 953 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(591),
	    baseForOwn = __webpack_require__(632),
	    baseIteratee = __webpack_require__(639);
	
	/**
	 * Creates an object with the same keys as `object` and values generated
	 * by running each own enumerable string keyed property of `object` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns the new mapped object.
	 * @see _.mapKeys
	 * @example
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * _.mapValues(users, function(o) { return o.age; });
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	function mapValues(object, iteratee) {
	  var result = {};
	  iteratee = baseIteratee(iteratee, 3);
	
	  baseForOwn(object, function(value, key, object) {
	    baseAssignValue(result, key, iteratee(value, key, object));
	  });
	  return result;
	}
	
	module.exports = mapValues;


/***/ },
/* 954 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = PopupContent;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A PopupContent displays the content body of a Popover.
	 */
	function PopupContent(props) {
	  var children = props.children;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)('content', className);
	  var rest = (0, _lib.getUnhandledProps)(PopupContent, props);
	  var ElementType = (0, _lib.getElementType)(PopupContent, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	PopupContent.create = (0, _lib.createShorthandFactory)(PopupContent, function (value) {
	  return { children: value };
	});
	
	PopupContent.propTypes = {
	  /** The content of the Popup */
	  children: _react.PropTypes.node,
	
	  /** Classes to add to the Popup content className. */
	  className: _react.PropTypes.string
	};
	
	PopupContent._meta = {
	  name: 'PopupContent',
	  type: _lib.META.TYPES.MODULE,
	  parent: 'Popup'
	};

/***/ },
/* 955 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = PopupHeader;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A PopupHeader displays a header in a Popover.
	 */
	function PopupHeader(props) {
	  var children = props.children;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)('header', className);
	  var rest = (0, _lib.getUnhandledProps)(PopupHeader, props);
	  var ElementType = (0, _lib.getElementType)(PopupHeader, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	PopupHeader.create = (0, _lib.createShorthandFactory)(PopupHeader, function (value) {
	  return { children: value };
	});
	
	PopupHeader.propTypes = {
	  /** The header of the Popup */
	  children: _react.PropTypes.node,
	
	  /** Classes to add to the Popup header className. */
	  className: _react.PropTypes.string
	};
	
	PopupHeader._meta = {
	  name: 'PopupHeader',
	  type: _lib.META.TYPES.MODULE,
	  parent: 'Popup'
	};

/***/ },
/* 956 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Progress = __webpack_require__(957);
	
	var _Progress2 = _interopRequireDefault(_Progress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Progress2.default;

/***/ },
/* 957 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _round2 = __webpack_require__(958);
	
	var _round3 = _interopRequireDefault(_round2);
	
	var _clamp2 = __webpack_require__(960);
	
	var _clamp3 = _interopRequireDefault(_clamp2);
	
	var _every2 = __webpack_require__(843);
	
	var _every3 = _interopRequireDefault(_every2);
	
	var _isUndefined2 = __webpack_require__(961);
	
	var _isUndefined3 = _interopRequireDefault(_isUndefined2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Progress(props) {
	  var active = props.active;
	  var attached = props.attached;
	  var autoSuccess = props.autoSuccess;
	  var color = props.color;
	  var children = props.children;
	  var className = props.className;
	  var disabled = props.disabled;
	  var error = props.error;
	  var indicating = props.indicating;
	  var inverted = props.inverted;
	  var label = props.label;
	  var percent = props.percent;
	  var precision = props.precision;
	  var progress = props.progress;
	  var size = props.size;
	  var success = props.success;
	  var total = props.total;
	  var value = props.value;
	  var warning = props.warning;
	
	
	  var isAutoSuccess = autoSuccess && (percent >= 100 || value >= total);
	
	  var showProgress = progress || label || !(0, _isUndefined3.default)(precision) || !(0, _every3.default)([total, value], _isUndefined3.default);
	
	  var _percent = void 0;
	  if (!(0, _isUndefined3.default)(percent)) {
	    _percent = percent;
	  } else if (!(0, _isUndefined3.default)(total) && !(0, _isUndefined3.default)(value)) {
	    _percent = value / total * 100;
	  }
	
	  _percent = (0, _clamp3.default)(_percent, 0, 100);
	
	  if (!(0, _isUndefined3.default)(precision)) {
	    _percent = (0, _round3.default)(_percent, precision);
	  }
	
	  var progressText = void 0;
	  if (label === 'percent' || label === true || (0, _isUndefined3.default)(label)) {
	    progressText = _percent + '%';
	  } else if (label === 'ratio') {
	    progressText = value + '/' + total;
	  }
	
	  var classes = (0, _classnames2.default)('ui', size, color, (0, _lib.useKeyOnly)(active || indicating, 'active'), (0, _lib.useKeyOnly)(isAutoSuccess || success, 'success'), (0, _lib.useKeyOnly)(warning, 'warning'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(indicating, 'indicating'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useValueAndKey)(attached, 'attached'), className, 'progress');
	  var rest = (0, _lib.getUnhandledProps)(Progress, props);
	  var ElementType = (0, _lib.getElementType)(Progress, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    _react2.default.createElement(
	      'div',
	      { className: 'bar', style: { width: _percent + '%' } },
	      showProgress && _react2.default.createElement(
	        'div',
	        { className: 'progress' },
	        progressText
	      )
	    ),
	    children && _react2.default.createElement(
	      'div',
	      { className: 'label' },
	      children
	    )
	  );
	}
	
	Progress._meta = {
	  name: 'Progress',
	  type: _lib.META.TYPES.MODULE,
	  props: {
	    attached: ['top', 'bottom'],
	    color: _lib.SUI.COLORS,
	    label: ['ratio', 'percent'],
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'mini', 'huge', 'massive')
	  }
	};
	
	Progress.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A progress bar can show activity. */
	  active: _react.PropTypes.bool,
	
	  /** A progress bar can attach to and show the progress of an element (i.e. Card or Segment). */
	  attached: _react.PropTypes.oneOf(Progress._meta.props.attached),
	
	  /** Whether success state should automatically trigger when progress completes. */
	  autoSuccess: _react.PropTypes.bool,
	
	  /** A progress bar can have different colors. */
	  color: _react.PropTypes.oneOf(Progress._meta.props.color),
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A progress bar be disabled. */
	  disabled: _react.PropTypes.bool,
	
	  /** A progress bar can show a error state. */
	  error: _react.PropTypes.bool,
	
	  /** An indicating progress bar visually indicates the current level of progress of a task. */
	  indicating: _react.PropTypes.bool,
	
	  /** A progress bar can have its colors inverted. */
	  inverted: _react.PropTypes.bool,
	
	  /** Can be set to either to display progress as percent or ratio. */
	  label: _lib.customPropTypes.every([_lib.customPropTypes.some([_lib.customPropTypes.demand(['percent']), _lib.customPropTypes.demand(['total', 'value'])]), _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Progress._meta.props.label)])]),
	
	  /** Current percent complete. */
	  percent: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['total', 'value']), _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])]),
	
	  /** A progress bar can contain a text value indicating current progress. */
	  progress: _react.PropTypes.bool,
	
	  /** Decimal point precision for calculated progress. */
	  precision: _react.PropTypes.number,
	
	  /** A progress bar can vary in size. */
	  size: _react.PropTypes.oneOf(Progress._meta.props.size),
	
	  /** A progress bar can show a success state. */
	  success: _react.PropTypes.bool,
	
	  /**
	   * For use with value.
	   * Together, these will calculate the percent.
	   * Mutually excludes percent.
	   */
	  total: _lib.customPropTypes.every([_lib.customPropTypes.demand(['value']), _lib.customPropTypes.disallow(['percent']), _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])]),
	
	  /**
	   * For use with total. Together, these will calculate the percent. Mutually excludes percent.
	   */
	  value: _lib.customPropTypes.every([_lib.customPropTypes.demand(['total']), _lib.customPropTypes.disallow(['percent']), _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])]),
	
	  /** A progress bar can show a warning state. */
	  warning: _react.PropTypes.bool
	};
	
	exports.default = Progress;

/***/ },
/* 958 */
/***/ function(module, exports, __webpack_require__) {

	var createRound = __webpack_require__(959);
	
	/**
	 * Computes `number` rounded to `precision`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.10.0
	 * @category Math
	 * @param {number} number The number to round.
	 * @param {number} [precision=0] The precision to round to.
	 * @returns {number} Returns the rounded number.
	 * @example
	 *
	 * _.round(4.006);
	 * // => 4
	 *
	 * _.round(4.006, 2);
	 * // => 4.01
	 *
	 * _.round(4060, -2);
	 * // => 4100
	 */
	var round = createRound('round');
	
	module.exports = round;


/***/ },
/* 959 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(723),
	    toNumber = __webpack_require__(725),
	    toString = __webpack_require__(562);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;
	
	/**
	 * Creates a function like `_.round`.
	 *
	 * @private
	 * @param {string} methodName The name of the `Math` method to use when rounding.
	 * @returns {Function} Returns the new round function.
	 */
	function createRound(methodName) {
	  var func = Math[methodName];
	  return function(number, precision) {
	    number = toNumber(number);
	    precision = nativeMin(toInteger(precision), 292);
	    if (precision) {
	      // Shift with exponential notation to avoid floating-point issues.
	      // See [MDN](https://mdn.io/round#Examples) for more details.
	      var pair = (toString(number) + 'e').split('e'),
	          value = func(pair[0] + 'e' + (+pair[1] + precision));
	
	      pair = (toString(value) + 'e').split('e');
	      return +(pair[0] + 'e' + (+pair[1] - precision));
	    }
	    return func(number);
	  };
	}
	
	module.exports = createRound;


/***/ },
/* 960 */
/***/ function(module, exports, __webpack_require__) {

	var baseClamp = __webpack_require__(800),
	    toNumber = __webpack_require__(725);
	
	/**
	 * Clamps `number` within the inclusive `lower` and `upper` bounds.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Number
	 * @param {number} number The number to clamp.
	 * @param {number} [lower] The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the clamped number.
	 * @example
	 *
	 * _.clamp(-10, -5, 5);
	 * // => -5
	 *
	 * _.clamp(10, -5, 5);
	 * // => 5
	 */
	function clamp(number, lower, upper) {
	  if (upper === undefined) {
	    upper = lower;
	    lower = undefined;
	  }
	  if (upper !== undefined) {
	    upper = toNumber(upper);
	    upper = upper === upper ? upper : 0;
	  }
	  if (lower !== undefined) {
	    lower = toNumber(lower);
	    lower = lower === lower ? lower : 0;
	  }
	  return baseClamp(toNumber(number), lower, upper);
	}
	
	module.exports = clamp;


/***/ },
/* 961 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */
	function isUndefined(value) {
	  return value === undefined;
	}
	
	module.exports = isUndefined;


/***/ },
/* 962 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Rating = __webpack_require__(963);
	
	var _Rating2 = _interopRequireDefault(_Rating);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Rating2.default;

/***/ },
/* 963 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _times2 = __webpack_require__(736);
	
	var _times3 = _interopRequireDefault(_times2);
	
	var _invoke2 = __webpack_require__(831);
	
	var _invoke3 = _interopRequireDefault(_invoke2);
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _RatingIcon = __webpack_require__(964);
	
	var _RatingIcon2 = _interopRequireDefault(_RatingIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _meta = {
	  name: 'Rating',
	  type: _lib.META.TYPES.MODULE,
	  props: {
	    clearable: ['auto'],
	    icon: ['star', 'heart'],
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium', 'big')
	  }
	};
	
	/**
	 * A rating indicates user interest in content
	 */
	
	var Rating = function (_Component) {
	  _inherits(Rating, _Component);
	
	  function Rating() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Rating);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rating.__proto__ || Object.getPrototypeOf(Rating)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Rating, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var className = _props.className;
	      var disabled = _props.disabled;
	      var icon = _props.icon;
	      var maxRating = _props.maxRating;
	      var size = _props.size;
	      var _state = this.state;
	      var rating = _state.rating;
	      var selectedIndex = _state.selectedIndex;
	      var isSelecting = _state.isSelecting;
	
	
	      var classes = (0, _classnames2.default)('ui', icon, size, (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(isSelecting && !disabled && selectedIndex >= 0, 'selected'), 'rating', className);
	      var rest = (0, _lib.getUnhandledProps)(Rating, this.props);
	      var ElementType = (0, _lib.getElementType)(Rating, this.props);
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes, onMouseLeave: this.handleMouseLeave }),
	        (0, _times3.default)(maxRating, function (i) {
	          return _react2.default.createElement(_RatingIcon2.default, {
	            active: rating >= i + 1,
	            index: i,
	            key: i,
	            onClick: _this2.handleIconClick,
	            onMouseEnter: _this2.handleIconMouseEnter,
	            selected: selectedIndex >= i && isSelecting
	          });
	        })
	      );
	    }
	  }]);
	
	  return Rating;
	}(_lib.AutoControlledComponent);
	
	Rating.autoControlledProps = ['rating'];
	Rating.defaultProps = {
	  clearable: 'auto',
	  maxRating: 1
	};
	Rating.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /**
	   * You can clear the rating by clicking on the current start rating.
	   * By default a rating will be only clearable if there is 1 icon.
	   * Setting to `true`/`false` will allow or disallow a user to clear their rating.
	   */
	  clearable: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(_meta.props.clearable), _react.PropTypes.bool]),
	
	  /** The initial rating value. */
	  defaultRating: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	
	  /** You can disable or enable interactive rating.  Makes a read-only rating. */
	  disabled: _react.PropTypes.bool,
	
	  /** A rating can use a set of star or heart icons. */
	  icon: _react.PropTypes.oneOf(_meta.props.icon),
	
	  /** The total number of icons. */
	  maxRating: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	
	  /** Called with (event, { rating, maxRating }) after user selects a new rating. */
	  onRate: _react.PropTypes.func,
	
	  /** The current number of active icons. */
	  rating: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	
	  /** A progress bar can vary in size. */
	  size: _react.PropTypes.oneOf(_meta.props.size)
	};
	Rating._meta = _meta;
	
	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;
	
	  this.handleIconClick = function (e, index) {
	    var _props2 = _this3.props;
	    var clearable = _props2.clearable;
	    var disabled = _props2.disabled;
	    var maxRating = _props2.maxRating;
	    var onRate = _props2.onRate;
	    var rating = _this3.state.rating;
	
	    if (disabled) return;
	
	    // default newRating is the clicked icon
	    // allow toggling a binary rating
	    // allow clearing ratings
	    var newRating = index + 1;
	    if (clearable === 'auto' && maxRating === 1) {
	      newRating = +!rating;
	    } else if (clearable === true && newRating === rating) {
	      newRating = 0;
	    }
	
	    // set rating
	    _this3.trySetState({ rating: newRating }, { isSelecting: false });
	    if (onRate) onRate(e, { rating: newRating, maxRating: maxRating });
	  };
	
	  this.handleIconMouseEnter = function (index) {
	    if (_this3.props.disabled) return;
	
	    _this3.setState({ selectedIndex: index, isSelecting: true });
	  };
	
	  this.handleMouseLeave = function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    _invoke3.default.apply(undefined, [_this3.props, 'onMouseLeave'].concat(args));
	
	    if (_this3.props.disabled) return;
	
	    _this3.setState({ selectedIndex: -1, isSelecting: false });
	  };
	};
	
	exports.default = Rating;

/***/ },
/* 964 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * An internal icon sub-component for Rating component
	 */
	var RatingIcon = function (_Component) {
	  _inherits(RatingIcon, _Component);
	
	  function RatingIcon() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, RatingIcon);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RatingIcon.__proto__ || Object.getPrototypeOf(RatingIcon)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
	      var _this$props = _this.props;
	      var onClick = _this$props.onClick;
	      var index = _this$props.index;
	
	
	      if (onClick) onClick(e, index);
	    }, _this.handleMouseEnter = function () {
	      var _this$props2 = _this.props;
	      var onMouseEnter = _this$props2.onMouseEnter;
	      var index = _this$props2.index;
	
	
	      if (onMouseEnter) onMouseEnter(index);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(RatingIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var active = _props.active;
	      var selected = _props.selected;
	
	      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(selected, 'selected'), 'icon');
	
	      return _react2.default.createElement('i', { className: classes, onClick: this.handleClick, onMouseEnter: this.handleMouseEnter });
	    }
	  }]);
	
	  return RatingIcon;
	}(_react.Component);
	
	RatingIcon.propTypes = {
	  /** Indicates activity of an icon. */
	  active: _react.PropTypes.bool,
	
	  /** An index of icon inside Rating. */
	  index: _react.PropTypes.number,
	
	  /** Called with (event, index) after user clicked on an icon. */
	  onClick: _react.PropTypes.func,
	
	  /** Called with (index) after user move cursor to an icon. */
	  onMouseEnter: _react.PropTypes.func,
	
	  /** Indicates selection of an icon. */
	  selected: _react.PropTypes.bool
	};
	RatingIcon._meta = {
	  name: 'RatingIcon',
	  parent: 'Rating',
	  type: _lib.META.TYPES.MODULE
	};
	exports.default = RatingIcon;

/***/ },
/* 965 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Search = __webpack_require__(966);
	
	var _Search2 = _interopRequireDefault(_Search);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Search2.default;

/***/ },
/* 966 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isEmpty2 = __webpack_require__(674);
	
	var _isEmpty3 = _interopRequireDefault(_isEmpty2);
	
	var _partialRight2 = __webpack_require__(967);
	
	var _partialRight3 = _interopRequireDefault(_partialRight2);
	
	var _inRange2 = __webpack_require__(968);
	
	var _inRange3 = _interopRequireDefault(_inRange2);
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _get3 = __webpack_require__(667);
	
	var _get4 = _interopRequireDefault(_get3);
	
	var _reduce2 = __webpack_require__(847);
	
	var _reduce3 = _interopRequireDefault(_reduce2);
	
	var _isEqual2 = __webpack_require__(738);
	
	var _isEqual3 = _interopRequireDefault(_isEqual2);
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get2 = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Input = __webpack_require__(874);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _SearchCategory = __webpack_require__(970);
	
	var _SearchCategory2 = _interopRequireDefault(_SearchCategory);
	
	var _SearchResult = __webpack_require__(971);
	
	var _SearchResult2 = _interopRequireDefault(_SearchResult);
	
	var _SearchResults = __webpack_require__(972);
	
	var _SearchResults2 = _interopRequireDefault(_SearchResults);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var debug = (0, _lib.makeDebugger)('search');
	
	var _meta = {
	  name: 'Search',
	  type: _lib.META.TYPES.MODULE,
	  props: {
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium')
	  }
	};
	
	/**
	 * A search module allows a user to query for results from a selection of data
	 */
	
	var Search = function (_Component) {
	  _inherits(Search, _Component);
	
	  function Search() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Search);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e, result) {
	      debug('handleChange()');
	      debug(result);
	      var onChange = _this.props.onChange;
	
	      if (onChange) onChange(e, result);
	    }, _this.closeOnEscape = function (e) {
	      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Escape) return;
	      e.preventDefault();
	      _this.close();
	    }, _this.moveSelectionOnKeyDown = function (e) {
	      debug('moveSelectionOnKeyDown()');
	      debug(_lib.keyboardKey.getName(e));
	      switch (_lib.keyboardKey.getCode(e)) {
	        case _lib.keyboardKey.ArrowDown:
	          e.preventDefault();
	          _this.moveSelectionBy(1);
	          break;
	        case _lib.keyboardKey.ArrowUp:
	          e.preventDefault();
	          _this.moveSelectionBy(-1);
	          break;
	        default:
	          break;
	      }
	    }, _this.selectItemOnEnter = function (e) {
	      debug('selectItemOnEnter()');
	      debug(_lib.keyboardKey.getName(e));
	      if (_lib.keyboardKey.getCode(e) !== _lib.keyboardKey.Enter) return;
	      e.preventDefault();
	
	      var result = _this.getSelectedResult();
	
	      // prevent selecting null if there was no selected item value
	      if (!result) return;
	
	      // notify the onChange prop that the user is trying to change value
	      _this.setValue(result.title);
	      _this.handleChange(e, result);
	      _this.close();
	    }, _this.closeOnDocumentClick = function (e) {
	      debug('closeOnDocumentClick()');
	      debug(e);
	      _this.close();
	    }, _this.handleMouseDown = function (e) {
	      debug('handleMouseDown()');
	      var onMouseDown = _this.props.onMouseDown;
	
	      if (onMouseDown) onMouseDown(e);
	      _this.isMouseDown = true;
	      document.addEventListener('mouseup', _this.handleDocumentMouseUp);
	    }, _this.handleDocumentMouseUp = function () {
	      debug('handleDocumentMouseUp()');
	      _this.isMouseDown = false;
	      document.removeEventListener('mouseup', _this.handleDocumentMouseUp);
	    }, _this.handleInputClick = function (e) {
	      debug('handleInputClick()', e);
	
	      // prevent closeOnDocumentClick()
	      e.nativeEvent.stopImmediatePropagation();
	
	      _this.tryOpen();
	    }, _this.handleItemClick = function (e, id) {
	      debug('handleItemClick()');
	      debug(id);
	      var result = _this.getSelectedResult(id);
	
	      // prevent closeOnDocumentClick()
	      e.nativeEvent.stopImmediatePropagation();
	
	      // notify the onChange prop that the user is trying to change value
	      _this.setValue(result.title);
	      _this.handleChange(e, result);
	      _this.close();
	    }, _this.handleFocus = function (e) {
	      debug('handleFocus()');
	      var onFocus = _this.props.onFocus;
	
	      if (onFocus) onFocus(e);
	      _this.setState({ focus: true });
	    }, _this.handleBlur = function (e) {
	      debug('handleBlur()');
	      var onBlur = _this.props.onBlur;
	
	      if (onBlur) onBlur(e);
	      _this.setState({ focus: false });
	    }, _this.handleSearchChange = function (e) {
	      debug('handleSearchChange()');
	      debug(e.target.value);
	      // prevent propagating to this.props.onChange()
	      e.stopPropagation();
	      var _this$props = _this.props;
	      var onSearchChange = _this$props.onSearchChange;
	      var minCharacters = _this$props.minCharacters;
	      var open = _this.state.open;
	
	      var newQuery = e.target.value;
	
	      if (onSearchChange) onSearchChange(e, newQuery);
	
	      // open search dropdown on search query
	      if (newQuery.length < minCharacters) {
	        _this.close();
	      } else if (!open) {
	        _this.tryOpen(newQuery);
	      }
	
	      _this.setValue(newQuery);
	    }, _this.getFlattenedResults = function () {
	      var _this$props2 = _this.props;
	      var category = _this$props2.category;
	      var results = _this$props2.results;
	
	
	      return !category ? results : (0, _reduce3.default)(results, function (memo, categoryData) {
	        return memo.concat(categoryData.results);
	      }, []);
	    }, _this.getSelectedResult = function () {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.selectedIndex;
	
	      var results = _this.getFlattenedResults();
	      return (0, _get4.default)(results, index);
	    }, _this.setValue = function (value) {
	      debug('setValue()');
	      debug('value', value);
	
	      var selectFirstResult = _this.props.selectFirstResult;
	
	
	      _this.trySetState({ value: value }, { selectedIndex: selectFirstResult ? 0 : -1 });
	    }, _this.moveSelectionBy = function (offset) {
	      debug('moveSelectionBy()');
	      debug('offset: ' + offset);
	      var selectedIndex = _this.state.selectedIndex;
	
	
	      var results = _this.getFlattenedResults();
	      var lastIndex = results.length - 1;
	
	      // next is after last, wrap to beginning
	      // next is before first, wrap to end
	      var nextIndex = selectedIndex + offset;
	      if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;
	
	      _this.setState({ selectedIndex: nextIndex });
	      _this.scrollSelectedItemIntoView();
	    }, _this.scrollSelectedItemIntoView = function () {
	      debug('scrollSelectedItemIntoView()');
	      var menu = document.querySelector('.ui.search.active.visible .results.visible');
	      var item = menu.querySelector('.result.active');
	      debug('menu (results): ' + menu);
	      debug('item (result): ' + item);
	      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
	      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;
	
	      if (isOutOfUpperView) {
	        menu.scrollTop = item.offsetTop;
	      } else if (isOutOfLowerView) {
	        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
	      }
	    }, _this.tryOpen = function () {
	      var currentValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
	
	      debug('open()');
	
	      var minCharacters = _this.props.minCharacters;
	
	      if (currentValue.length < minCharacters) return;
	
	      _this.open();
	    }, _this.open = function () {
	      debug('open()');
	      _this.trySetState({ open: true });
	    }, _this.close = function () {
	      debug('close()');
	      _this.trySetState({ open: false });
	    }, _this.renderSearchInput = function () {
	      var _this$props3 = _this.props;
	      var icon = _this$props3.icon;
	      var placeholder = _this$props3.placeholder;
	      var value = _this.state.value;
	
	
	      return _react2.default.createElement(_Input2.default, {
	        value: value,
	        placeholder: placeholder,
	        onBlur: _this.handleBlur,
	        onChange: _this.handleSearchChange,
	        onFocus: _this.handleFocus,
	        onClick: _this.handleInputClick,
	        input: { className: 'prompt', tabIndex: '0', autoComplete: 'off' },
	        icon: icon
	      });
	    }, _this.renderNoResults = function () {
	      var _this$props4 = _this.props;
	      var noResultsMessage = _this$props4.noResultsMessage;
	      var noResultsDescription = _this$props4.noResultsDescription;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'message empty' },
	        _react2.default.createElement(
	          'div',
	          { className: 'header' },
	          noResultsMessage
	        ),
	        noResultsDescription && _react2.default.createElement(
	          'div',
	          { className: 'description' },
	          noResultsDescription
	        )
	      );
	    }, _this.renderResult = function (_ref2, index, _array) {
	      var childKey = _ref2.childKey;
	
	      var result = _objectWithoutProperties(_ref2, ['childKey']);
	
	      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	      var resultRenderer = _this.props.resultRenderer;
	      var selectedIndex = _this.state.selectedIndex;
	
	      var offsetIndex = index + offset;
	
	      return _react2.default.createElement(_SearchResult2.default, _extends({
	        key: childKey || result.title,
	        active: selectedIndex === offsetIndex,
	        onClick: _this.handleItemClick,
	        onMouseDown: function onMouseDown(e) {
	          return e.preventDefault();
	        } // prevent default to allow item select without closing on blur
	        , renderer: resultRenderer
	      }, result, {
	        id: offsetIndex // Used to lookup the result on item click
	      }));
	    }, _this.renderResults = function () {
	      var results = _this.props.results;
	
	
	      return (0, _map3.default)(results, _this.renderResult);
	    }, _this.renderCategories = function () {
	      var _this$props5 = _this.props;
	      var categoryRenderer = _this$props5.categoryRenderer;
	      var categories = _this$props5.results;
	      var selectedIndex = _this.state.selectedIndex;
	
	
	      var count = 0;
	
	      return (0, _map3.default)(categories, function (_ref3, name, index) {
	        var childKey = _ref3.childKey;
	
	        var category = _objectWithoutProperties(_ref3, ['childKey']);
	
	        var categoryProps = _extends({
	          key: childKey || category.name,
	          active: (0, _inRange3.default)(selectedIndex, count, count + category.results.length),
	          renderer: categoryRenderer
	        }, category);
	        var renderFn = (0, _partialRight3.default)(_this.renderResult, count);
	
	        count = count + category.results.length;
	
	        return _react2.default.createElement(
	          _SearchCategory2.default,
	          categoryProps,
	          category.results.map(renderFn)
	        );
	      });
	    }, _this.renderMenuContent = function () {
	      var _this$props6 = _this.props;
	      var category = _this$props6.category;
	      var showNoResults = _this$props6.showNoResults;
	      var results = _this$props6.results;
	
	
	      if ((0, _isEmpty3.default)(results)) {
	        return showNoResults ? _this.renderNoResults() : null;
	      }
	
	      return category ? _this.renderCategories() : _this.renderResults();
	    }, _this.renderResultsMenu = function () {
	      var open = _this.state.open;
	
	      var resultsClasses = open ? 'visible' : '';
	      var menuContent = _this.renderMenuContent();
	
	      if (!menuContent) return;
	
	      return _react2.default.createElement(
	        _SearchResults2.default,
	        { className: resultsClasses },
	        menuContent
	      );
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Search, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (_get2(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'componentWillMount', this)) _get2(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'componentWillMount', this).call(this);
	      debug('componentWillMount()');
	      var _state = this.state;
	      var open = _state.open;
	      var value = _state.value;
	
	
	      this.setValue(value);
	      if (open) this.open();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _isEqual3.default)(nextProps, this.props) || !(0, _isEqual3.default)(nextState, this.state);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      _get2(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
	      debug('componentWillReceiveProps()');
	      // TODO objectDiff still runs in prod, stop it
	      debug('changed props:', (0, _lib.objectDiff)(nextProps, this.props));
	
	      if (!(0, _isEqual3.default)(nextProps.value, this.props.value)) {
	        debug('value changed, setting', nextProps.value);
	        this.setValue(nextProps.value);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      // eslint-disable-line complexity
	      debug('componentDidUpdate()');
	      // TODO objectDiff still runs in prod, stop it
	      debug('to state:', (0, _lib.objectDiff)(prevState, this.state));
	
	      // focused / blurred
	      if (!prevState.focus && this.state.focus) {
	        debug('search focused');
	        if (!this.isMouseDown) {
	          debug('mouse is not down, opening');
	          this.tryOpen();
	        }
	        if (this.state.open) {
	          document.addEventListener('keydown', this.moveSelectionOnKeyDown);
	          document.addEventListener('keydown', this.selectItemOnEnter);
	        }
	      } else if (prevState.focus && !this.state.focus) {
	        debug('search blurred');
	        if (!this.isMouseDown) {
	          debug('mouse is not down, closing');
	          this.close();
	        }
	        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
	        document.removeEventListener('keydown', this.selectItemOnEnter);
	      }
	
	      // opened / closed
	      if (!prevState.open && this.state.open) {
	        debug('search opened');
	        this.open();
	        document.addEventListener('keydown', this.closeOnEscape);
	        document.addEventListener('keydown', this.moveSelectionOnKeyDown);
	        document.addEventListener('keydown', this.selectItemOnEnter);
	        document.addEventListener('click', this.closeOnDocumentClick);
	      } else if (prevState.open && !this.state.open) {
	        debug('search closed');
	        this.close();
	        document.removeEventListener('keydown', this.closeOnEscape);
	        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
	        document.removeEventListener('keydown', this.selectItemOnEnter);
	        document.removeEventListener('click', this.closeOnDocumentClick);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      debug('componentWillUnmount()');
	      document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
	      document.removeEventListener('keydown', this.selectItemOnEnter);
	      document.removeEventListener('keydown', this.closeOnEscape);
	      document.removeEventListener('click', this.closeOnDocumentClick);
	    }
	
	    // ----------------------------------------
	    // Document Event Handlers
	    // ----------------------------------------
	
	    // onChange needs to receive a value
	    // can't rely on props.value if we are controlled
	
	
	    // ----------------------------------------
	    // Component Event Handlers
	    // ----------------------------------------
	
	    // ----------------------------------------
	    // Getters
	    // ----------------------------------------
	
	    // ----------------------------------------
	    // Setters
	    // ----------------------------------------
	
	    // ----------------------------------------
	    // Behavior
	    // ----------------------------------------
	
	    // Open if the current value is greater than the minCharacters prop
	
	
	    // ----------------------------------------
	    // Render
	    // ----------------------------------------
	
	    /**
	     * Offset is needed for determining the active item for results within a
	     * category. Since the index is reset to 0 for each new category, an offset
	     * must be passed in.
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      debug('render()');
	      debug('props', this.props);
	      debug('state', this.state);
	      var _state2 = this.state;
	      var searchClasses = _state2.searchClasses;
	      var focus = _state2.focus;
	      var open = _state2.open;
	      var _props = this.props;
	      var aligned = _props.aligned;
	      var category = _props.category;
	      var className = _props.className;
	      var fluid = _props.fluid;
	      var loading = _props.loading;
	      var size = _props.size;
	
	      // Classes
	
	      var classes = (0, _classnames2.default)('ui', open && 'active visible', size, searchClasses, (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useValueAndKey)(aligned, 'aligned'), (0, _lib.useKeyOnly)(category, 'category'), (0, _lib.useKeyOnly)(focus, 'focus'), (0, _lib.useKeyOnly)(fluid, 'fluid'), className, 'search');
	      var rest = (0, _lib.getUnhandledProps)(Search, this.props);
	      var ElementType = (0, _lib.getElementType)(Search, this.props);
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, {
	          className: classes,
	          onBlur: this.handleBlur,
	          onFocus: this.handleFocus,
	          onChange: this.handleChange,
	          onMouseDown: this.handleMouseDown
	        }),
	        this.renderSearchInput(),
	        this.renderResultsMenu()
	      );
	    }
	  }]);
	
	  return Search;
	}(_lib.AutoControlledComponent);
	
	Search.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  // ------------------------------------
	  // Behavior
	  // ------------------------------------
	  /** Add an icon by name or as a component. */
	  icon: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
	
	  /**
	   * One of:
	   * - array of Search.Result props e.g. `{ title: '', description: '' }` or
	   * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
	   */
	  results: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(_SearchResult2.default.propTypes)), _react.PropTypes.object]),
	
	  /** Controls whether or not the results menu is displayed. */
	  open: _react.PropTypes.bool,
	
	  /** Initial value of open. */
	  defaultOpen: _react.PropTypes.bool,
	
	  /** Current value of the search input. Creates a controlled component. */
	  value: _react.PropTypes.string,
	
	  /** Initial value. */
	  defaultValue: _react.PropTypes.string,
	
	  /** Placeholder of the search input. */
	  placeholder: _react.PropTypes.string,
	
	  /** Minimum characters to query for results */
	  minCharacters: _react.PropTypes.number,
	
	  /** Message to display when there are no results. */
	  noResultsMessage: _react.PropTypes.string,
	
	  /** Additional text for "No Results" message with less emphasis. */
	  noResultsDescription: _react.PropTypes.string,
	
	  /** Whether the search should automatically select the first result after searching */
	  selectFirstResult: _react.PropTypes.bool,
	
	  /** Whether a "no results" message should be shown if no results are found. */
	  showNoResults: _react.PropTypes.bool,
	
	  // ------------------------------------
	  // Rendering
	  // ------------------------------------
	
	  /**
	   * A function that returns the category contents.
	   * Receives all SearchCategory props.
	   */
	  categoryRenderer: _react.PropTypes.func,
	
	  /**
	   * A function that returns the result contents.
	   * Receives all SearchResult props.
	   */
	  resultRenderer: _react.PropTypes.func,
	
	  // ------------------------------------
	  // Callbacks
	  // ------------------------------------
	
	  /** Called with the React Synthetic Event on Search blur. */
	  onBlur: _react.PropTypes.func,
	
	  /** Called with the React Synthetic Event, the selected result. */
	  onChange: _react.PropTypes.func,
	
	  /** Called with the React Synthetic Event and current value on search input change. */
	  onSearchChange: _react.PropTypes.func,
	
	  /** Called with the React Synthetic Event on Search focus. */
	  onFocus: _react.PropTypes.func,
	
	  /** Called with the React Synthetic Event on Dropdown mouse down. */
	  onMouseDown: _react.PropTypes.func,
	
	  // ------------------------------------
	  // Style
	  // ------------------------------------
	
	  /** A search can have its results aligned to its left or right container edge. */
	  aligned: _react.PropTypes.string,
	
	  /** A search can display results from remote content ordered by categories. */
	  category: _react.PropTypes.bool,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A search can have its results take up the width of its container. */
	  fluid: _react.PropTypes.bool,
	
	  size: _react.PropTypes.oneOf(_meta.props.size),
	
	  loading: _react.PropTypes.bool
	};
	Search.defaultProps = {
	  icon: 'search',
	  minCharacters: 1,
	  noResultsMessage: 'No results found.',
	  showNoResults: true
	};
	Search.autoControlledProps = ['open', 'value'];
	Search._meta = _meta;
	Search.Result = _SearchResult2.default;
	Search.Results = _SearchResults2.default;
	Search.Category = _SearchCategory2.default;
	exports.default = Search;

/***/ },
/* 967 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(625),
	    createWrap = __webpack_require__(691),
	    getHolder = __webpack_require__(718),
	    replaceHolders = __webpack_require__(720);
	
	/** Used to compose bitmasks for function metadata. */
	var PARTIAL_RIGHT_FLAG = 64;
	
	/**
	 * This method is like `_.partial` except that partially applied arguments
	 * are appended to the arguments it receives.
	 *
	 * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	 * builds, may be used as a placeholder for partially applied arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of partially
	 * applied functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Function
	 * @param {Function} func The function to partially apply arguments to.
	 * @param {...*} [partials] The arguments to be partially applied.
	 * @returns {Function} Returns the new partially applied function.
	 * @example
	 *
	 * function greet(greeting, name) {
	 *   return greeting + ' ' + name;
	 * }
	 *
	 * var greetFred = _.partialRight(greet, 'fred');
	 * greetFred('hi');
	 * // => 'hi fred'
	 *
	 * // Partially applied with placeholders.
	 * var sayHelloTo = _.partialRight(greet, 'hello', _);
	 * sayHelloTo('fred');
	 * // => 'hello fred'
	 */
	var partialRight = baseRest(function(func, partials) {
	  var holders = replaceHolders(partials, getHolder(partialRight));
	  return createWrap(func, PARTIAL_RIGHT_FLAG, undefined, partials, holders);
	});
	
	// Assign default placeholders.
	partialRight.placeholder = {};
	
	module.exports = partialRight;


/***/ },
/* 968 */
/***/ function(module, exports, __webpack_require__) {

	var baseInRange = __webpack_require__(969),
	    toFinite = __webpack_require__(724),
	    toNumber = __webpack_require__(725);
	
	/**
	 * Checks if `n` is between `start` and up to, but not including, `end`. If
	 * `end` is not specified, it's set to `start` with `start` then set to `0`.
	 * If `start` is greater than `end` the params are swapped to support
	 * negative ranges.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.3.0
	 * @category Number
	 * @param {number} number The number to check.
	 * @param {number} [start=0] The start of the range.
	 * @param {number} end The end of the range.
	 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	 * @see _.range, _.rangeRight
	 * @example
	 *
	 * _.inRange(3, 2, 4);
	 * // => true
	 *
	 * _.inRange(4, 8);
	 * // => true
	 *
	 * _.inRange(4, 2);
	 * // => false
	 *
	 * _.inRange(2, 2);
	 * // => false
	 *
	 * _.inRange(1.2, 2);
	 * // => true
	 *
	 * _.inRange(5.2, 4);
	 * // => false
	 *
	 * _.inRange(-3, -2, -6);
	 * // => true
	 */
	function inRange(number, start, end) {
	  start = toFinite(start);
	  if (end === undefined) {
	    end = start;
	    start = 0;
	  } else {
	    end = toFinite(end);
	  }
	  number = toNumber(number);
	  return baseInRange(number, start, end);
	}
	
	module.exports = inRange;


/***/ },
/* 969 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * The base implementation of `_.inRange` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {number} number The number to check.
	 * @param {number} start The start of the range.
	 * @param {number} end The end of the range.
	 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	 */
	function baseInRange(number, start, end) {
	  return number >= nativeMin(start, end) && number < nativeMax(start, end);
	}
	
	module.exports = baseInRange;


/***/ },
/* 970 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultRenderer = function defaultRenderer(_ref) {
	  var name = _ref.name;
	  return name;
	};
	
	function SearchCategory(props) {
	  var active = props.active;
	  var children = props.children;
	  var className = props.className;
	  var renderer = props.renderer;
	
	  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), 'category', className);
	  var rest = (0, _lib.getUnhandledProps)(SearchCategory, props);
	  var ElementType = (0, _lib.getElementType)(SearchCategory, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    _react2.default.createElement(
	      'div',
	      { className: 'name' },
	      renderer ? renderer(props) : defaultRenderer(props)
	    ),
	    children
	  );
	}
	
	SearchCategory._meta = {
	  name: 'SearchCategory',
	  parent: 'Search',
	  type: _lib.META.TYPES.MODULE
	};
	
	SearchCategory.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** The item currently selected by keyboard shortcut. */
	  active: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Display name. */
	  name: _react.PropTypes.string,
	
	  /**
	   * A function that returns the category contents.
	   * Receives all SearchCategory props.
	   */
	  renderer: _react.PropTypes.func,
	
	  /** Array of Search.Result props */
	  results: _react.PropTypes.array
	};
	
	exports.default = SearchCategory;

/***/ },
/* 971 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Note: You technically only need the 'content' wrapper when there's an
	// image. However, optionally wrapping it makes this function a lot more
	// complicated and harder to read. Since always wrapping it doesn't affect
	// the style in any way let's just do that.
	//
	// Note: To avoid requiring a wrapping div, we return an array here so to
	// prevent rendering issues each node needs a unique key.
	var defaultRenderer = function defaultRenderer(_ref) {
	  var image = _ref.image;
	  var price = _ref.price;
	  var title = _ref.title;
	  var description = _ref.description;
	  return [image && _react2.default.createElement(
	    'div',
	    { key: 'image', className: 'image' },
	    (0, _lib.createHTMLImage)(image)
	  ), _react2.default.createElement(
	    'div',
	    { key: 'content', className: 'content' },
	    price && _react2.default.createElement(
	      'div',
	      { className: 'price' },
	      price
	    ),
	    title && _react2.default.createElement(
	      'div',
	      { className: 'title' },
	      title
	    ),
	    description && _react2.default.createElement(
	      'div',
	      { className: 'description' },
	      description
	    )
	  )];
	};
	
	var SearchResult = function (_Component) {
	  _inherits(SearchResult, _Component);
	
	  function SearchResult() {
	    var _ref2;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, SearchResult);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).call.apply(_ref2, [this].concat(args))), _this), _this.handleClick = function (e) {
	      var _this$props = _this.props;
	      var id = _this$props.id;
	      var onClick = _this$props.onClick;
	
	
	      if (onClick) onClick(e, id);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(SearchResult, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var active = _props.active;
	      var className = _props.className;
	      var renderer = _props.renderer;
	
	
	      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), 'result', className);
	      var rest = (0, _lib.getUnhandledProps)(SearchResult, this.props);
	      var ElementType = (0, _lib.getElementType)(SearchResult, this.props);
	
	      // Note: You technically only need the 'content' wrapper when there's an
	      // image. However, optionally wrapping it makes this function a lot more
	      // complicated and harder to read. Since always wrapping it doesn't affect
	      // the style in any way let's just do that.
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes, onClick: this.handleClick }),
	        renderer ? renderer(this.props) : defaultRenderer(this.props)
	      );
	    }
	  }]);
	
	  return SearchResult;
	}(_react.Component);
	
	SearchResult.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** The item currently selected by keyboard shortcut. */
	  active: _react.PropTypes.bool,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Additional text with less emphasis. */
	  description: _react.PropTypes.string,
	
	  /** A unique identifier. */
	  id: _react.PropTypes.number,
	
	  /** Add an image to the item. */
	  image: _react.PropTypes.string,
	
	  /** Called on click with (event, value, text). */
	  onClick: _react.PropTypes.func,
	
	  /** Customized text for price. */
	  price: _react.PropTypes.string,
	
	  /**
	   * A function that returns the result contents.
	   * Receives all SearchResult props.
	   */
	  renderer: _react.PropTypes.func,
	
	  /** Display title. */
	  title: _react.PropTypes.string
	};
	SearchResult._meta = {
	  name: 'SearchResult',
	  parent: 'Search',
	  type: _lib.META.TYPES.MODULE
	};
	exports.default = SearchResult;

/***/ },
/* 972 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function SearchResults(props) {
	  var children = props.children;
	  var className = props.className;
	
	  var classes = (0, _classnames2.default)('results transition', className);
	  var rest = (0, _lib.getUnhandledProps)(SearchResults, props);
	  var ElementType = (0, _lib.getElementType)(SearchResults, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	SearchResults._meta = {
	  name: 'SearchResults',
	  parent: 'Search',
	  type: _lib.META.TYPES.MODULE
	};
	
	SearchResults.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = SearchResults;

/***/ },
/* 973 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Image = __webpack_require__(857);
	
	var _Image2 = _interopRequireDefault(_Image);
	
	var _CardContent = __webpack_require__(974);
	
	var _CardContent2 = _interopRequireDefault(_CardContent);
	
	var _CardDescription = __webpack_require__(975);
	
	var _CardDescription2 = _interopRequireDefault(_CardDescription);
	
	var _CardGroup = __webpack_require__(978);
	
	var _CardGroup2 = _interopRequireDefault(_CardGroup);
	
	var _CardHeader = __webpack_require__(976);
	
	var _CardHeader2 = _interopRequireDefault(_CardHeader);
	
	var _CardMeta = __webpack_require__(977);
	
	var _CardMeta2 = _interopRequireDefault(_CardMeta);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _meta = {
	  name: 'Card',
	  type: _lib.META.TYPES.VIEW,
	  props: {
	    color: _lib.SUI.COLORS
	  }
	};
	
	/**
	 * A card displays site content in a manner similar to a playing card
	 */
	
	var Card = function (_Component) {
	  _inherits(Card, _Component);
	
	  function Card() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Card);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
	      var onClick = _this.props.onClick;
	
	
	      if (onClick) onClick(e);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Card, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var centered = _props.centered;
	      var children = _props.children;
	      var className = _props.className;
	      var color = _props.color;
	      var description = _props.description;
	      var extra = _props.extra;
	      var fluid = _props.fluid;
	      var header = _props.header;
	      var href = _props.href;
	      var image = _props.image;
	      var meta = _props.meta;
	      var onClick = _props.onClick;
	      var raised = _props.raised;
	
	
	      var classes = (0, _classnames2.default)('ui', color, (0, _lib.useKeyOnly)(centered, 'centered'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(raised, 'raised'), 'card', className);
	      var rest = (0, _lib.getUnhandledProps)(Card, this.props);
	      var ElementType = (0, _lib.getElementType)(Card, this.props, function () {
	        if (onClick) return 'a';
	      });
	
	      if (children) {
	        return _react2.default.createElement(
	          ElementType,
	          _extends({}, rest, { className: classes, href: href, onClick: this.handleClick }),
	          children
	        );
	      }
	
	      return _react2.default.createElement(
	        ElementType,
	        _extends({}, rest, { className: classes, href: href, onClick: this.handleClick }),
	        _Image2.default.create(image),
	        (description || header || meta) && _react2.default.createElement(_CardContent2.default, { description: description, header: header, meta: meta }),
	        extra && _react2.default.createElement(
	          _CardContent2.default,
	          { extra: true },
	          extra
	        )
	      );
	    }
	  }]);
	
	  return Card;
	}(_react.Component);
	
	Card.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** A Card can center itself inside its container. */
	  centered: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A Card can be formatted to display different colors. */
	  color: _react.PropTypes.oneOf(_meta.props.color),
	
	  /** Shorthand for CardDescription. */
	  description: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for primary content of CardContent. */
	  extra: _lib.customPropTypes.contentShorthand,
	
	  /** A Card can be formatted to take up the width of its container. */
	  fluid: _react.PropTypes.bool,
	
	  /** Shorthand for CardHeader. */
	  header: _lib.customPropTypes.itemShorthand,
	
	  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
	  href: _react.PropTypes.string,
	
	  /** A card can contain an Image component. */
	  image: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for CardMeta. */
	  meta: _lib.customPropTypes.itemShorthand,
	
	  /** Render as an `a` tag instead of a `div` and called with event on Card click. */
	  onClick: _react.PropTypes.func,
	
	  /** A Card can be formatted to raise above the page. */
	  raised: _react.PropTypes.bool
	};
	Card._meta = _meta;
	Card.Content = _CardContent2.default;
	Card.Description = _CardDescription2.default;
	Card.Group = _CardGroup2.default;
	Card.Header = _CardHeader2.default;
	Card.Meta = _CardMeta2.default;
	exports.default = Card;

/***/ },
/* 974 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _CardDescription = __webpack_require__(975);
	
	var _CardDescription2 = _interopRequireDefault(_CardDescription);
	
	var _CardHeader = __webpack_require__(976);
	
	var _CardHeader2 = _interopRequireDefault(_CardHeader);
	
	var _CardMeta = __webpack_require__(977);
	
	var _CardMeta2 = _interopRequireDefault(_CardMeta);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A card can contain blocks of content or extra content meant to be formatted separately from the main content
	 */
	function CardContent(props) {
	  var children = props.children;
	  var className = props.className;
	  var description = props.description;
	  var extra = props.extra;
	  var header = props.header;
	  var meta = props.meta;
	
	  var classes = (0, _classnames2.default)(className, (0, _lib.useKeyOnly)(extra, 'extra'), 'content');
	  var rest = (0, _lib.getUnhandledProps)(CardContent, props);
	  var ElementType = (0, _lib.getElementType)(CardContent, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    (0, _lib.createShorthand)(_CardHeader2.default, function (val) {
	      return { content: val };
	    }, header),
	    (0, _lib.createShorthand)(_CardMeta2.default, function (val) {
	      return { content: val };
	    }, meta),
	    (0, _lib.createShorthand)(_CardDescription2.default, function (val) {
	      return { content: val };
	    }, description)
	  );
	}
	
	CardContent._meta = {
	  name: 'CardContent',
	  parent: 'Card',
	  type: _lib.META.TYPES.VIEW
	};
	
	CardContent.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for CardDescription. */
	  description: _lib.customPropTypes.itemShorthand,
	
	  /** A card can contain extra content meant to be formatted separately from the main content */
	  extra: _react.PropTypes.bool,
	
	  /** Shorthand for CardHeader. */
	  header: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for CardMeta. */
	  meta: _lib.customPropTypes.itemShorthand
	};
	
	exports.default = CardContent;

/***/ },
/* 975 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A card can contain a description with one or more paragraphs
	 */
	function CardDescription(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)(className, 'description');
	  var rest = (0, _lib.getUnhandledProps)(CardDescription, props);
	  var ElementType = (0, _lib.getElementType)(CardDescription, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	CardDescription._meta = {
	  name: 'CardDescription',
	  parent: 'Card',
	  type: _lib.META.TYPES.VIEW
	};
	
	CardDescription.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = CardDescription;

/***/ },
/* 976 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A card can contain a header
	 */
	function CardHeader(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)(className, 'header');
	  var rest = (0, _lib.getUnhandledProps)(CardHeader, props);
	  var ElementType = (0, _lib.getElementType)(CardHeader, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	CardHeader._meta = {
	  name: 'CardHeader',
	  parent: 'Card',
	  type: _lib.META.TYPES.VIEW
	};
	
	CardHeader.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = CardHeader;

/***/ },
/* 977 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A card can contain content metadata
	 */
	function CardMeta(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)(className, 'meta');
	  var rest = (0, _lib.getUnhandledProps)(CardMeta, props);
	  var ElementType = (0, _lib.getElementType)(CardMeta, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	CardMeta._meta = {
	  name: 'CardMeta',
	  parent: 'Card',
	  type: _lib.META.TYPES.VIEW
	};
	
	CardMeta.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = CardMeta;

/***/ },
/* 978 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Card = __webpack_require__(973);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A group of cards.
	 */
	function CardGroup(props) {
	  var children = props.children;
	  var className = props.className;
	  var doubling = props.doubling;
	  var items = props.items;
	  var itemsPerRow = props.itemsPerRow;
	  var stackable = props.stackable;
	
	  var classes = (0, _classnames2.default)('ui', (0, _lib.useWidthProp)(itemsPerRow), (0, _lib.useKeyOnly)(doubling, 'doubling'), (0, _lib.useKeyOnly)(stackable, 'stackable'), className, 'cards');
	  var rest = (0, _lib.getUnhandledProps)(CardGroup, props);
	  var ElementType = (0, _lib.getElementType)(CardGroup, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  var content = (0, _map3.default)(items, function (item) {
	    var key = item.key || [item.header, item.description].join('-');
	    return _react2.default.createElement(_Card2.default, _extends({ key: key }, item));
	  });
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    content
	  );
	}
	
	CardGroup._meta = {
	  name: 'CardGroup',
	  parent: 'Card',
	  props: {
	    itemsPerRow: _lib.SUI.WIDTHS
	  },
	  type: _lib.META.TYPES.VIEW
	};
	
	CardGroup.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A group of cards can double its column width for mobile */
	  doubling: _react.PropTypes.bool,
	
	  /** Shorthand array of props for Card. */
	  items: _lib.customPropTypes.collectionShorthand,
	
	  /** A group of cards can set how many cards should exist in a row */
	  itemsPerRow: _react.PropTypes.oneOf(CardGroup._meta.props.itemsPerRow),
	
	  /** A group of cards can automatically stack rows to a single columns on mobile devices */
	  stackable: _react.PropTypes.bool
	};
	
	exports.default = CardGroup;

/***/ },
/* 979 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Comment = __webpack_require__(980);
	
	var _Comment2 = _interopRequireDefault(_Comment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Comment2.default;

/***/ },
/* 980 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _CommentAction = __webpack_require__(981);
	
	var _CommentAction2 = _interopRequireDefault(_CommentAction);
	
	var _CommentActions = __webpack_require__(982);
	
	var _CommentActions2 = _interopRequireDefault(_CommentActions);
	
	var _CommentAuthor = __webpack_require__(983);
	
	var _CommentAuthor2 = _interopRequireDefault(_CommentAuthor);
	
	var _CommentAvatar = __webpack_require__(984);
	
	var _CommentAvatar2 = _interopRequireDefault(_CommentAvatar);
	
	var _CommentContent = __webpack_require__(985);
	
	var _CommentContent2 = _interopRequireDefault(_CommentContent);
	
	var _CommentGroup = __webpack_require__(986);
	
	var _CommentGroup2 = _interopRequireDefault(_CommentGroup);
	
	var _CommentMetadata = __webpack_require__(987);
	
	var _CommentMetadata2 = _interopRequireDefault(_CommentMetadata);
	
	var _CommentText = __webpack_require__(988);
	
	var _CommentText2 = _interopRequireDefault(_CommentText);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A comment displays user feedback to site content
	 * */
	function Comment(props) {
	  var className = props.className;
	  var children = props.children;
	  var collapsed = props.collapsed;
	
	
	  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(collapsed, 'collapsed'), 'comment', className);
	  var rest = (0, _lib.getUnhandledProps)(Comment, props);
	  var ElementType = (0, _lib.getElementType)(Comment, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	Comment._meta = {
	  name: 'Comment',
	  type: _lib.META.TYPES.VIEW
	};
	
	Comment.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Comment can be collapsed, or hidden from view. */
	  collapsed: _react.PropTypes.bool
	};
	
	Comment.Author = _CommentAuthor2.default;
	Comment.Action = _CommentAction2.default;
	Comment.Actions = _CommentActions2.default;
	Comment.Avatar = _CommentAvatar2.default;
	Comment.Content = _CommentContent2.default;
	Comment.Group = _CommentGroup2.default;
	Comment.Metadata = _CommentMetadata2.default;
	Comment.Text = _CommentText2.default;
	
	exports.default = Comment;

/***/ },
/* 981 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CommentAction(props) {
	  var active = props.active;
	  var className = props.className;
	  var children = props.children;
	
	
	  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), className);
	  var rest = (0, _lib.getUnhandledProps)(CommentAction, props);
	  var ElementType = (0, _lib.getElementType)(CommentAction, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	CommentAction._meta = {
	  name: 'CommentAction',
	  parent: 'Comment',
	  type: _lib.META.TYPES.VIEW
	};
	
	CommentAction.defaultProps = {
	  as: 'a'
	};
	
	CommentAction.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Style as the currently active action. */
	  active: _react.PropTypes.bool,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = CommentAction;

/***/ },
/* 982 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CommentActions(props) {
	  var className = props.className;
	  var children = props.children;
	
	  var classes = (0, _classnames2.default)('actions', className);
	  var rest = (0, _lib.getUnhandledProps)(CommentActions, props);
	  var ElementType = (0, _lib.getElementType)(CommentActions, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	CommentActions._meta = {
	  name: 'CommentActions',
	  parent: 'Comment',
	  type: _lib.META.TYPES.VIEW
	};
	
	CommentActions.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = CommentActions;

/***/ },
/* 983 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CommentAuthor(props) {
	  var className = props.className;
	  var children = props.children;
	
	  var classes = (0, _classnames2.default)('author', className);
	  var rest = (0, _lib.getUnhandledProps)(CommentAuthor, props);
	  var ElementType = (0, _lib.getElementType)(CommentAuthor, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	CommentAuthor._meta = {
	  name: 'CommentAuthor',
	  parent: 'Comment',
	  type: _lib.META.TYPES.VIEW
	};
	
	CommentAuthor.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = CommentAuthor;

/***/ },
/* 984 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CommentAvatar(props) {
	  var className = props.className;
	  var src = props.src;
	
	  var classes = (0, _classnames2.default)('avatar', className);
	  var rest = (0, _lib.getUnhandledProps)(CommentAvatar, props);
	  var ElementType = (0, _lib.getElementType)(CommentAvatar, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    (0, _lib.createHTMLImage)(src)
	  );
	}
	
	CommentAvatar._meta = {
	  name: 'CommentAvatar',
	  parent: 'Comment',
	  type: _lib.META.TYPES.VIEW
	};
	
	CommentAvatar.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Specifies the URL of the image. */
	  src: _react.PropTypes.string
	};
	
	exports.default = CommentAvatar;

/***/ },
/* 985 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CommentContent(props) {
	  var className = props.className;
	  var children = props.children;
	
	  var classes = (0, _classnames2.default)('content', className);
	  var rest = (0, _lib.getUnhandledProps)(CommentContent, props);
	  var ElementType = (0, _lib.getElementType)(CommentContent, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	CommentContent._meta = {
	  name: 'CommentContent',
	  parent: 'Comment',
	  type: _lib.META.TYPES.VIEW
	};
	
	CommentContent.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = CommentContent;

/***/ },
/* 986 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CommentGroup(props) {
	  var className = props.className;
	  var children = props.children;
	  var collapsed = props.collapsed;
	  var minimal = props.minimal;
	  var threaded = props.threaded;
	
	
	  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(collapsed, 'collapsed'), (0, _lib.useKeyOnly)(minimal, 'minimal'), (0, _lib.useKeyOnly)(threaded, 'threaded'), 'comments', className);
	  var rest = (0, _lib.getUnhandledProps)(CommentGroup, props);
	  var ElementType = (0, _lib.getElementType)(CommentGroup, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	CommentGroup._meta = {
	  name: 'CommentGroup',
	  parent: 'Comment',
	  type: _lib.META.TYPES.VIEW
	};
	
	CommentGroup.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Comments can be collapsed, or hidden from view. */
	  collapsed: _react.PropTypes.bool,
	
	  /** Comments can hide extra information unless a user shows intent to interact with a comment */
	  minimal: _react.PropTypes.bool,
	
	  /** A comment list can be threaded to showing the relationship between conversations */
	  threaded: _react.PropTypes.bool
	};
	
	exports.default = CommentGroup;

/***/ },
/* 987 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CommentMetadata(props) {
	  var className = props.className;
	  var children = props.children;
	
	  var classes = (0, _classnames2.default)('metadata', className);
	  var rest = (0, _lib.getUnhandledProps)(CommentMetadata, props);
	  var ElementType = (0, _lib.getElementType)(CommentMetadata, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	CommentMetadata._meta = {
	  name: 'CommentMetadata',
	  parent: 'Comment',
	  type: _lib.META.TYPES.VIEW
	};
	
	CommentMetadata.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = CommentMetadata;

/***/ },
/* 988 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CommentText(props) {
	  var className = props.className;
	  var children = props.children;
	
	  var classes = (0, _classnames2.default)('text', className);
	  var rest = (0, _lib.getUnhandledProps)(CommentText, props);
	  var ElementType = (0, _lib.getElementType)(CommentText, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children
	  );
	}
	
	CommentText._meta = {
	  name: 'CommentText',
	  parent: 'Comment',
	  type: _lib.META.TYPES.VIEW
	};
	
	CommentText.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string
	};
	
	exports.default = CommentText;

/***/ },
/* 989 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Feed = __webpack_require__(990);
	
	var _Feed2 = _interopRequireDefault(_Feed);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Feed2.default;

/***/ },
/* 990 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _FeedContent = __webpack_require__(991);
	
	var _FeedContent2 = _interopRequireDefault(_FeedContent);
	
	var _FeedDate = __webpack_require__(992);
	
	var _FeedDate2 = _interopRequireDefault(_FeedDate);
	
	var _FeedEvent = __webpack_require__(998);
	
	var _FeedEvent2 = _interopRequireDefault(_FeedEvent);
	
	var _FeedExtra = __webpack_require__(993);
	
	var _FeedExtra2 = _interopRequireDefault(_FeedExtra);
	
	var _FeedLabel = __webpack_require__(999);
	
	var _FeedLabel2 = _interopRequireDefault(_FeedLabel);
	
	var _FeedLike = __webpack_require__(995);
	
	var _FeedLike2 = _interopRequireDefault(_FeedLike);
	
	var _FeedMeta = __webpack_require__(994);
	
	var _FeedMeta2 = _interopRequireDefault(_FeedMeta);
	
	var _FeedSummary = __webpack_require__(996);
	
	var _FeedSummary2 = _interopRequireDefault(_FeedSummary);
	
	var _FeedUser = __webpack_require__(997);
	
	var _FeedUser2 = _interopRequireDefault(_FeedUser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function Feed(props) {
	  var children = props.children;
	  var className = props.className;
	  var events = props.events;
	  var size = props.size;
	
	  var classes = (0, _classnames2.default)('ui', className, size, 'feed');
	  var rest = (0, _lib.getUnhandledProps)(Feed, props);
	  var ElementType = (0, _lib.getElementType)(Feed, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  var eventElements = (0, _map3.default)(events, function (eventProps) {
	    var childKey = eventProps.childKey;
	    var date = eventProps.date;
	    var meta = eventProps.meta;
	    var summary = eventProps.summary;
	
	    var eventData = _objectWithoutProperties(eventProps, ['childKey', 'date', 'meta', 'summary']);
	
	    var finalKey = childKey || [date, meta, summary].join('-');
	
	    return _react2.default.createElement(_FeedEvent2.default, _extends({
	      date: date,
	      key: finalKey,
	      meta: meta,
	      summary: summary
	    }, eventData));
	  });
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    eventElements
	  );
	}
	
	Feed._meta = {
	  name: 'Feed',
	  type: _lib.META.TYPES.VIEW,
	  props: {
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive')
	  }
	};
	
	Feed.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand array of props for FeedEvent. */
	  events: _lib.customPropTypes.collectionShorthand,
	
	  /** A feed can have different sizes. */
	  size: _react.PropTypes.oneOf(Feed._meta.props.size)
	};
	
	Feed.Content = _FeedContent2.default;
	Feed.Date = _FeedDate2.default;
	Feed.Event = _FeedEvent2.default;
	Feed.Extra = _FeedExtra2.default;
	Feed.Label = _FeedLabel2.default;
	Feed.Like = _FeedLike2.default;
	Feed.Meta = _FeedMeta2.default;
	Feed.Summary = _FeedSummary2.default;
	Feed.User = _FeedUser2.default;
	
	exports.default = Feed;

/***/ },
/* 991 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _FeedDate = __webpack_require__(992);
	
	var _FeedDate2 = _interopRequireDefault(_FeedDate);
	
	var _FeedExtra = __webpack_require__(993);
	
	var _FeedExtra2 = _interopRequireDefault(_FeedExtra);
	
	var _FeedMeta = __webpack_require__(994);
	
	var _FeedMeta2 = _interopRequireDefault(_FeedMeta);
	
	var _FeedSummary = __webpack_require__(996);
	
	var _FeedSummary2 = _interopRequireDefault(_FeedSummary);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function FeedContent(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	  var extraImages = props.extraImages;
	  var extraText = props.extraText;
	  var date = props.date;
	  var meta = props.meta;
	  var summary = props.summary;
	
	  var classes = (0, _classnames2.default)(className, 'content');
	  var rest = (0, _lib.getUnhandledProps)(FeedContent, props);
	  var ElementType = (0, _lib.getElementType)(FeedContent, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    (0, _lib.createShorthand)(_FeedDate2.default, function (val) {
	      return { content: val };
	    }, date),
	    (0, _lib.createShorthand)(_FeedSummary2.default, function (val) {
	      return { content: val };
	    }, summary),
	    content,
	    (0, _lib.createShorthand)(_FeedExtra2.default, function (val) {
	      return { text: true, content: val };
	    }, extraText),
	    (0, _lib.createShorthand)(_FeedExtra2.default, function (val) {
	      return { images: val };
	    }, extraImages),
	    (0, _lib.createShorthand)(_FeedMeta2.default, function (val) {
	      return { content: val };
	    }, meta)
	  );
	}
	
	FeedContent._meta = {
	  name: 'FeedContent',
	  parent: 'Feed',
	  type: _lib.META.TYPES.VIEW
	};
	
	FeedContent.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** An event can contain a date. */
	  date: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for FeedExtra with images. */
	  extraImages: _FeedExtra2.default.propTypes.images,
	
	  /** Shorthand for FeedExtra with text. */
	  extraText: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for FeedMeta. */
	  meta: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for FeedSummary. */
	  summary: _lib.customPropTypes.itemShorthand
	};
	
	exports.default = FeedContent;

/***/ },
/* 992 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Show a feed date
	 */
	function FeedDate(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)(className, 'date');
	  var rest = (0, _lib.getUnhandledProps)(FeedDate, props);
	  var ElementType = (0, _lib.getElementType)(FeedDate, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	FeedDate._meta = {
	  name: 'FeedDate',
	  parent: 'Feed',
	  type: _lib.META.TYPES.VIEW
	};
	
	FeedDate.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = FeedDate;

/***/ },
/* 993 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function FeedExtra(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	  var images = props.images;
	  var text = props.text;
	
	  var classes = (0, _classnames2.default)(className, (0, _lib.useKeyOnly)(images, 'images'), (0, _lib.useKeyOnly)(content || text, 'text'), 'extra');
	  var rest = (0, _lib.getUnhandledProps)(FeedExtra, props);
	  var ElementType = (0, _lib.getElementType)(FeedExtra, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  // TODO need a "collection factory" to handle creating multiple image elements and their keys
	  var imageElements = (0, _map3.default)(images, function (image, index) {
	    var key = [index, image].join('-');
	    return (0, _lib.createHTMLImage)(image, { key: key });
	  });
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    content,
	    imageElements
	  );
	}
	
	FeedExtra._meta = {
	  name: 'FeedExtra',
	  parent: 'Feed',
	  type: _lib.META.TYPES.VIEW
	};
	
	FeedExtra.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** An event can contain additional information like a set of images. */
	  images: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['text']), _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.collectionShorthand])]),
	
	  /** An event can contain additional text information. */
	  text: _react.PropTypes.bool
	};
	
	exports.default = FeedExtra;

/***/ },
/* 994 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _FeedLike = __webpack_require__(995);
	
	var _FeedLike2 = _interopRequireDefault(_FeedLike);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function FeedMeta(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	  var like = props.like;
	
	  var classes = (0, _classnames2.default)(className, 'meta');
	  var rest = (0, _lib.getUnhandledProps)(FeedMeta, props);
	  var ElementType = (0, _lib.getElementType)(FeedMeta, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    (0, _lib.createShorthand)(_FeedLike2.default, function (val) {
	      return { content: val };
	    }, like),
	    content
	  );
	}
	
	FeedMeta._meta = {
	  name: 'FeedMeta',
	  parent: 'Feed',
	  type: _lib.META.TYPES.VIEW
	};
	
	FeedMeta.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** Shorthand for FeedLike. */
	  like: _lib.customPropTypes.itemShorthand
	};
	
	exports.default = FeedMeta;

/***/ },
/* 995 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(851);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function FeedLike(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	  var icon = props.icon;
	
	  var classes = (0, _classnames2.default)(className, 'like');
	  var rest = (0, _lib.getUnhandledProps)(FeedLike, props);
	  var ElementType = (0, _lib.getElementType)(FeedLike, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    _Icon2.default.create(icon),
	    content
	  );
	}
	
	FeedLike._meta = {
	  name: 'FeedLike',
	  parent: 'Feed',
	  type: _lib.META.TYPES.VIEW
	};
	
	FeedLike.defaultProps = {
	  as: 'a'
	};
	
	FeedLike.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** Shorthand for icon. Mutually exclusive with children. */
	  icon: _lib.customPropTypes.itemShorthand
	};
	
	exports.default = FeedLike;

/***/ },
/* 996 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _FeedDate = __webpack_require__(992);
	
	var _FeedDate2 = _interopRequireDefault(_FeedDate);
	
	var _FeedUser = __webpack_require__(997);
	
	var _FeedUser2 = _interopRequireDefault(_FeedUser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function FeedSummary(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	  var date = props.date;
	  var user = props.user;
	
	  var classes = (0, _classnames2.default)(className, 'summary');
	  var rest = (0, _lib.getUnhandledProps)(FeedSummary, props);
	  var ElementType = (0, _lib.getElementType)(FeedSummary, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    (0, _lib.createShorthand)(_FeedUser2.default, function (val) {
	      return { content: val };
	    }, user),
	    content,
	    (0, _lib.createShorthand)(_FeedDate2.default, function (val) {
	      return { content: val };
	    }, date)
	  );
	}
	
	FeedSummary._meta = {
	  name: 'FeedSummary',
	  parent: 'Feed',
	  type: _lib.META.TYPES.VIEW
	};
	
	FeedSummary.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** Shorthand for FeedDate. */
	  date: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for FeedUser. */
	  user: _lib.customPropTypes.itemShorthand
	};
	
	exports.default = FeedSummary;

/***/ },
/* 997 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function FeedUser(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)(className, 'user');
	  var rest = (0, _lib.getUnhandledProps)(FeedUser, props);
	  var ElementType = (0, _lib.getElementType)(FeedUser, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	FeedUser._meta = {
	  name: 'FeedUser',
	  parent: 'Feed',
	  type: _lib.META.TYPES.VIEW
	};
	
	FeedUser.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	FeedUser.defaultProps = {
	  as: 'a'
	};
	
	exports.default = FeedUser;

/***/ },
/* 998 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _FeedContent = __webpack_require__(991);
	
	var _FeedContent2 = _interopRequireDefault(_FeedContent);
	
	var _FeedLabel = __webpack_require__(999);
	
	var _FeedLabel2 = _interopRequireDefault(_FeedLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function FeedEvent(props) {
	  var content = props.content;
	  var children = props.children;
	  var className = props.className;
	  var date = props.date;
	  var extraImages = props.extraImages;
	  var extraText = props.extraText;
	  var image = props.image;
	  var icon = props.icon;
	  var meta = props.meta;
	  var summary = props.summary;
	
	  var classes = (0, _classnames2.default)(className, 'event');
	  var rest = (0, _lib.getUnhandledProps)(FeedEvent, props);
	  var ElementType = (0, _lib.getElementType)(FeedEvent, props);
	
	  var hasContentProp = content || date || extraImages || extraText || meta || summary;
	  var contentProps = { content: content, date: date, extraImages: extraImages, extraText: extraText, meta: meta, summary: summary };
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    (0, _lib.createShorthand)(_FeedLabel2.default, function (val) {
	      return { icon: val };
	    }, icon),
	    (0, _lib.createShorthand)(_FeedLabel2.default, function (val) {
	      return { image: val };
	    }, image),
	    hasContentProp && _react2.default.createElement(_FeedContent2.default, contentProps),
	    children
	  );
	}
	
	FeedEvent._meta = {
	  name: 'FeedEvent',
	  parent: 'Feed',
	  type: _lib.META.TYPES.VIEW
	};
	
	FeedEvent.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for FeedContent. */
	  content: _FeedContent2.default.propTypes.content,
	
	  /** Shorthand for FeedDate. */
	  date: _FeedContent2.default.propTypes.date,
	
	  /** Shorthand for FeedExtra with images. */
	  extraImages: _FeedContent2.default.propTypes.extraImages,
	
	  /** Shorthand for FeedExtra with content. */
	  extraText: _FeedContent2.default.propTypes.extraText,
	
	  /** An event can contain icon label. */
	  icon: _lib.customPropTypes.itemShorthand,
	
	  /** An event can contain image label. */
	  image: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for FeedMeta. */
	  meta: _FeedContent2.default.propTypes.meta,
	
	  /** Shorthand for FeedSummary. */
	  summary: _FeedContent2.default.propTypes.summary
	};
	
	exports.default = FeedEvent;

/***/ },
/* 999 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Icon = __webpack_require__(851);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function FeedLabel(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	  var icon = props.icon;
	  var image = props.image;
	
	  var classes = (0, _classnames2.default)(className, 'label');
	  var rest = (0, _lib.getUnhandledProps)(FeedLabel, props);
	  var ElementType = (0, _lib.getElementType)(FeedLabel, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    content,
	    _Icon2.default.create(icon),
	    (0, _lib.createHTMLImage)(image)
	  );
	}
	
	FeedLabel._meta = {
	  name: 'FeedLabel',
	  parent: 'Feed',
	  type: _lib.META.TYPES.VIEW
	};
	
	FeedLabel.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** An event can contain icon label. */
	  icon: _lib.customPropTypes.itemShorthand,
	
	  /** An event can contain image label. */
	  image: _lib.customPropTypes.itemShorthand
	};
	
	exports.default = FeedLabel;

/***/ },
/* 1000 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Item = __webpack_require__(1001);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Item2.default;

/***/ },
/* 1001 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _ItemContent = __webpack_require__(1002);
	
	var _ItemContent2 = _interopRequireDefault(_ItemContent);
	
	var _ItemDescription = __webpack_require__(1004);
	
	var _ItemDescription2 = _interopRequireDefault(_ItemDescription);
	
	var _ItemExtra = __webpack_require__(1005);
	
	var _ItemExtra2 = _interopRequireDefault(_ItemExtra);
	
	var _ItemGroup = __webpack_require__(1007);
	
	var _ItemGroup2 = _interopRequireDefault(_ItemGroup);
	
	var _ItemHeader = __webpack_require__(1003);
	
	var _ItemHeader2 = _interopRequireDefault(_ItemHeader);
	
	var _ItemImage = __webpack_require__(1008);
	
	var _ItemImage2 = _interopRequireDefault(_ItemImage);
	
	var _ItemMeta = __webpack_require__(1006);
	
	var _ItemMeta2 = _interopRequireDefault(_ItemMeta);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * An item view presents large collections of site content for display
	 **/
	function Item(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	  var description = props.description;
	  var extra = props.extra;
	  var header = props.header;
	  var image = props.image;
	  var meta = props.meta;
	
	  var classes = (0, _classnames2.default)(className, 'item');
	  var rest = (0, _lib.getUnhandledProps)(Item, props);
	  var ElementType = (0, _lib.getElementType)(Item, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    (0, _lib.createShorthand)(_ItemImage2.default, function (val) {
	      return { src: val };
	    }, image),
	    _react2.default.createElement(_ItemContent2.default, {
	      content: content,
	      description: description,
	      extra: extra,
	      header: header,
	      meta: meta
	    })
	  );
	}
	
	Item._meta = {
	  name: 'Item',
	  type: _lib.META.TYPES.VIEW
	};
	
	Item.Content = _ItemContent2.default;
	Item.Description = _ItemDescription2.default;
	Item.Extra = _ItemExtra2.default;
	Item.Group = _ItemGroup2.default;
	Item.Header = _ItemHeader2.default;
	Item.Image = _ItemImage2.default;
	Item.Meta = _ItemMeta2.default;
	
	Item.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for ItemContent component. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** Shorthand for ItemDescription component. */
	  description: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for ItemExtra component. */
	  extra: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for ItemImage component. */
	  image: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for ItemHeader component. */
	  header: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for ItemMeta component. */
	  meta: _lib.customPropTypes.itemShorthand
	};
	
	exports.default = Item;

/***/ },
/* 1002 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _ItemHeader = __webpack_require__(1003);
	
	var _ItemHeader2 = _interopRequireDefault(_ItemHeader);
	
	var _ItemDescription = __webpack_require__(1004);
	
	var _ItemDescription2 = _interopRequireDefault(_ItemDescription);
	
	var _ItemExtra = __webpack_require__(1005);
	
	var _ItemExtra2 = _interopRequireDefault(_ItemExtra);
	
	var _ItemMeta = __webpack_require__(1006);
	
	var _ItemMeta2 = _interopRequireDefault(_ItemMeta);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * An item can contain content
	 **/
	function ItemContent(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	  var description = props.description;
	  var extra = props.extra;
	  var header = props.header;
	  var meta = props.meta;
	  var verticalAlign = props.verticalAlign;
	
	  var classes = (0, _classnames2.default)(className, (0, _lib.useVerticalAlignProp)(verticalAlign), 'content');
	  var rest = (0, _lib.getUnhandledProps)(ItemContent, props);
	  var ElementType = (0, _lib.getElementType)(ItemContent, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    (0, _lib.createShorthand)(_ItemHeader2.default, function (val) {
	      return { content: val };
	    }, header),
	    (0, _lib.createShorthand)(_ItemMeta2.default, function (val) {
	      return { content: val };
	    }, meta),
	    (0, _lib.createShorthand)(_ItemDescription2.default, function (val) {
	      return { content: val };
	    }, description),
	    (0, _lib.createShorthand)(_ItemExtra2.default, function (val) {
	      return { content: val };
	    }, extra),
	    content
	  );
	}
	
	ItemContent._meta = {
	  name: 'ItemContent',
	  parent: 'Item',
	  type: _lib.META.TYPES.VIEW,
	  props: {
	    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
	  }
	};
	
	ItemContent.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand,
	
	  /** Shorthand for ItemDescription component. */
	  description: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for ItemExtra component. */
	  extra: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for ItemHeader component. */
	  header: _lib.customPropTypes.itemShorthand,
	
	  /** Shorthand for ItemMeta component. */
	  meta: _lib.customPropTypes.itemShorthand,
	
	  /** Content can specify its vertical alignment */
	  verticalAlign: _react.PropTypes.oneOf(ItemContent._meta.props.verticalAlign)
	};
	
	exports.default = ItemContent;

/***/ },
/* 1003 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * An item can contain a header
	 **/
	function ItemHeader(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)(className, 'header');
	  var rest = (0, _lib.getUnhandledProps)(ItemHeader, props);
	  var ElementType = (0, _lib.getElementType)(ItemHeader, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	ItemHeader._meta = {
	  name: 'ItemHeader',
	  parent: 'Item',
	  type: _lib.META.TYPES.VIEW
	};
	
	ItemHeader.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = ItemHeader;

/***/ },
/* 1004 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * An item can contain a description with a single or multiple paragraphs
	 **/
	function ItemDescription(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)(className, 'description');
	  var rest = (0, _lib.getUnhandledProps)(ItemDescription, props);
	  var ElementType = (0, _lib.getElementType)(ItemDescription, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	ItemDescription._meta = {
	  name: 'ItemDescription',
	  parent: 'Item',
	  type: _lib.META.TYPES.VIEW
	};
	
	ItemDescription.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = ItemDescription;

/***/ },
/* 1005 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * An item can contain extra content meant to be formatted separately from the main content
	 **/
	function ItemExtra(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)(className, 'extra');
	  var rest = (0, _lib.getUnhandledProps)(ItemExtra, props);
	  var ElementType = (0, _lib.getElementType)(ItemExtra, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	ItemExtra._meta = {
	  name: 'ItemExtra',
	  parent: 'Item',
	  type: _lib.META.TYPES.VIEW
	};
	
	ItemExtra.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = ItemExtra;

/***/ },
/* 1006 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * An item can contain content metadata.
	 **/
	function ItemMeta(props) {
	  var children = props.children;
	  var className = props.className;
	  var content = props.content;
	
	  var classes = (0, _classnames2.default)(className, 'meta');
	  var rest = (0, _lib.getUnhandledProps)(ItemMeta, props);
	  var ElementType = (0, _lib.getElementType)(ItemMeta, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || content
	  );
	}
	
	ItemMeta._meta = {
	  name: 'ItemMeta',
	  parent: 'Item',
	  type: _lib.META.TYPES.VIEW
	};
	
	ItemMeta.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  content: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = ItemMeta;

/***/ },
/* 1007 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Item = __webpack_require__(1001);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * A group of items
	 **/
	function ItemGroup(props) {
	  var children = props.children;
	  var className = props.className;
	  var divided = props.divided;
	  var items = props.items;
	  var link = props.link;
	  var relaxed = props.relaxed;
	
	  var classes = (0, _classnames2.default)('ui', className, (0, _lib.useKeyOnly)(divided, 'divided'), (0, _lib.useKeyOnly)(link, 'link'), (0, _lib.useKeyOrValueAndKey)(relaxed, 'relaxed'), 'items');
	  var rest = (0, _lib.getUnhandledProps)(ItemGroup, props);
	  var ElementType = (0, _lib.getElementType)(ItemGroup, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  var itemsJSX = (0, _map3.default)(items, function (item) {
	    var childKey = item.childKey;
	
	    var itemProps = _objectWithoutProperties(item, ['childKey']);
	
	    var finalKey = childKey || [itemProps.content, itemProps.description, itemProps.header, itemProps.meta].join('-');
	
	    return _react2.default.createElement(_Item2.default, _extends({}, itemProps, { key: finalKey }));
	  });
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    itemsJSX
	  );
	}
	
	ItemGroup._meta = {
	  name: 'ItemGroup',
	  type: _lib.META.TYPES.VIEW,
	  parent: 'Item',
	  props: {
	    relaxed: ['very']
	  }
	};
	
	ItemGroup.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Items can be divided to better distinguish between grouped content. */
	  divided: _react.PropTypes.bool,
	
	  /** Shorthand array of props for Item. */
	  items: _lib.customPropTypes.collectionShorthand,
	
	  /** An item can be formatted so that the entire contents link to another page. */
	  link: _react.PropTypes.bool,
	
	  /** A group of items can relax its padding to provide more negative space. */
	  relaxed: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(ItemGroup._meta.props.relaxed)])
	};
	
	exports.default = ItemGroup;

/***/ },
/* 1008 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Image = __webpack_require__(857);
	
	var _Image2 = _interopRequireDefault(_Image);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * An item can contain an image
	 **/
	function ItemImage(props) {
	  return _react2.default.createElement(_Image2.default, _extends({}, props, { ui: false, wrapped: true }));
	}
	
	ItemImage._meta = {
	  name: 'ItemImage',
	  parent: 'Item',
	  type: _lib.META.TYPES.VIEW
	};
	
	exports.default = ItemImage;

/***/ },
/* 1009 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Statistic = __webpack_require__(1010);
	
	var _Statistic2 = _interopRequireDefault(_Statistic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Statistic2.default;

/***/ },
/* 1010 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without2 = __webpack_require__(846);
	
	var _without3 = _interopRequireDefault(_without2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _StatisticGroup = __webpack_require__(1011);
	
	var _StatisticGroup2 = _interopRequireDefault(_StatisticGroup);
	
	var _StatisticLabel = __webpack_require__(1012);
	
	var _StatisticLabel2 = _interopRequireDefault(_StatisticLabel);
	
	var _StatisticValue = __webpack_require__(1013);
	
	var _StatisticValue2 = _interopRequireDefault(_StatisticValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Statistic(props) {
	  var children = props.children;
	  var className = props.className;
	  var color = props.color;
	  var floated = props.floated;
	  var horizontal = props.horizontal;
	  var inverted = props.inverted;
	  var label = props.label;
	  var size = props.size;
	  var text = props.text;
	  var value = props.value;
	
	  var classes = (0, _classnames2.default)('ui', color, (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(inverted, 'inverted'), size, className, 'statistic');
	  var rest = (0, _lib.getUnhandledProps)(Statistic, props);
	  var ElementType = (0, _lib.getElementType)(Statistic, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    _react2.default.createElement(_StatisticValue2.default, { text: text, value: value }),
	    _react2.default.createElement(_StatisticLabel2.default, { label: label })
	  );
	}
	
	Statistic._meta = {
	  name: 'Statistic',
	  type: _lib.META.TYPES.VIEW,
	  props: {
	    color: _lib.SUI.COLORS,
	    floated: _lib.SUI.FLOATS,
	    size: (0, _without3.default)(_lib.SUI.SIZES, 'big', 'massive', 'medium')
	  }
	};
	
	Statistic.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A statistic can be formatted to be different colors. */
	  color: _react.PropTypes.oneOf(Statistic._meta.props.color),
	
	  /** A statistic can sit to the left or right of other content. */
	  floated: _react.PropTypes.oneOf(Statistic._meta.props.floated),
	
	  /** A statistic can present its measurement horizontally. */
	  horizontal: _react.PropTypes.bool,
	
	  /** A statistic can be formatted to fit on a dark background. */
	  inverted: _react.PropTypes.bool,
	
	  /** Label content of the Statistic. */
	  label: _lib.customPropTypes.contentShorthand,
	
	  /** A statistic can vary in size. */
	  size: _react.PropTypes.oneOf(Statistic._meta.props.size),
	
	  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
	  text: _react.PropTypes.bool,
	
	  /** Value content of the Statistic. */
	  value: _lib.customPropTypes.contentShorthand
	};
	
	Statistic.Group = _StatisticGroup2.default;
	Statistic.Label = _StatisticLabel2.default;
	Statistic.Value = _StatisticValue2.default;
	
	exports.default = Statistic;

/***/ },
/* 1011 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map2 = __webpack_require__(790);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	var _Statistic = __webpack_require__(1010);
	
	var _Statistic2 = _interopRequireDefault(_Statistic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function StatisticGroup(props) {
	  var children = props.children;
	  var className = props.className;
	  var horizontal = props.horizontal;
	  var items = props.items;
	  var widths = props.widths;
	
	  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useWidthProp)(widths), 'statistics', className);
	  var rest = (0, _lib.getUnhandledProps)(StatisticGroup, props);
	  var ElementType = (0, _lib.getElementType)(StatisticGroup, props);
	
	  if (children) {
	    return _react2.default.createElement(
	      ElementType,
	      _extends({}, rest, { className: classes }),
	      children
	    );
	  }
	
	  var itemsJSX = (0, _map3.default)(items, function (item) {
	    return _react2.default.createElement(_Statistic2.default, _extends({ key: item.childKey || [item.label, item.title].join('-') }, item));
	  });
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    itemsJSX
	  );
	}
	
	StatisticGroup._meta = {
	  name: 'StatisticGroup',
	  type: _lib.META.TYPES.VIEW,
	  parent: 'Statistic',
	  props: {
	    widths: _lib.SUI.WIDTHS
	  }
	};
	
	StatisticGroup.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** A statistic can present its measurement horizontally. */
	  horizontal: _react.PropTypes.bool,
	
	  /** Array of props for Statistic. */
	  items: _lib.customPropTypes.collectionShorthand,
	
	  /** A statistic group can have its items divided evenly. */
	  widths: _react.PropTypes.oneOf(StatisticGroup._meta.props.widths)
	};
	
	exports.default = StatisticGroup;

/***/ },
/* 1012 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function StatisticLabel(props) {
	  var children = props.children;
	  var className = props.className;
	  var label = props.label;
	
	  var classes = (0, _classnames2.default)(className, 'label');
	  var rest = (0, _lib.getUnhandledProps)(StatisticLabel, props);
	  var ElementType = (0, _lib.getElementType)(StatisticLabel, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || label
	  );
	}
	
	StatisticLabel._meta = {
	  name: 'StatisticLabel',
	  parent: 'Statistic',
	  type: _lib.META.TYPES.VIEW
	};
	
	StatisticLabel.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Shorthand for primary content. */
	  label: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = StatisticLabel;

/***/ },
/* 1013 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(729);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lib = __webpack_require__(574);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function StatisticValue(props) {
	  var children = props.children;
	  var className = props.className;
	  var text = props.text;
	  var value = props.value;
	
	  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(text, 'text'), className, 'value');
	  var rest = (0, _lib.getUnhandledProps)(StatisticValue, props);
	  var ElementType = (0, _lib.getElementType)(StatisticValue, props);
	
	  return _react2.default.createElement(
	    ElementType,
	    _extends({}, rest, { className: classes }),
	    children || value
	  );
	}
	
	StatisticValue._meta = {
	  name: 'StatisticValue',
	  parent: 'Statistic',
	  type: _lib.META.TYPES.VIEW
	};
	
	StatisticValue.propTypes = {
	  /** An element type to render as (string or function). */
	  as: _lib.customPropTypes.as,
	
	  /** Primary content. */
	  children: _react.PropTypes.node,
	
	  /** Additional classes. */
	  className: _react.PropTypes.string,
	
	  /** Format the value with smaller font size to fit nicely beside number values. */
	  text: _react.PropTypes.bool,
	
	  /** Primary content of the StatisticValue. Mutually exclusive with the children prop. */
	  value: _lib.customPropTypes.contentShorthand
	};
	
	exports.default = StatisticValue;

/***/ }
]));
//# sourceMappingURL=10.bundle.js.map