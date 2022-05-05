export enum Code {
  OK,
  FAIL,
}

export enum PointType {
  START,
  END,
  NONE,
}

export enum fixPoint {
  TOPLEFT,
  CENTER,
}

export enum alignDirection {}
/**
 * 固定点是和拖动点相反的点
 */
export enum FixPointPosition {
  LEFTTOP,
  RIGHTTOP,
  LEFTBOTTOM,
  RIGHTBOTTOM,
  LEFT,
  RIGHT,
  TOP,
  DOWN,
}

export enum descriptionPositon {
  Left,
  Right,
  Top,
  Bottom,
}

export enum pathMode {
  EDIT,
  NORMAL,
}

export const selectEvent = 'select';

export enum segmentStatus {
  SILENT,
  DRAWING,
}

export enum DoFrom {
  fromUndoMgr = 'fromUndoMgr',
}

export enum Layout {
  Flex,
  None,
}

/**
 * 有位置信息。和设置透明度差不多？
 */

export enum Visibility {
  visible = 'visible',
  hidden = 'hidden',
  inherit = 'inherit',
}

/**
 * 没有位置大小信息
 */
export enum Display {
  none = 'none',
  default = '',
  block = 'block',
  inline = 'inline',
}

/**
 * propery panel
 */

export const mutation_showGroupProperty = 'mutation_showGroupProperty';

/**
 * centerConnector和droptoContainer时用到
 */
export enum MutationTypes {
  setActionTipForModel = 'setActionTipForModel',
  setTheConnectingConnector = 'setTheConnectingConnector',
  showOrderWnd = 'showOrderWnd',
  showBindingEmailWindow = 'showBindingEmailWindow',
  setRotatePointModel = 'setRotatePointModel',
  backupSVGElement = 'backupSVGElement',
}

/**
 * 方向
 */
export enum Direction {
  // 对box而言是水平上以上，对点而言是正上方
  Up,

  // 对box而言是水平上以右，对点而言是正右方
  Right,
  Down,
  Left,
  RightUp,
  RightDown,
  LeftUp,
  LeftDown,
  Same, // 相同位置
  Unkown,
  Intersection,
}

export enum FourDirection {
  Up,
  Right,
  Down,
  Left,
}

export enum TreeDirection {
  Left = 0,
  Right,
  Down,
}

export enum hvLineType {
  Horizontal,
  Vertical,
}

export enum AxisType {
  X,
  Y,
}

export enum Position {
  Inner,
  Stroke,
  Outer,
}

export enum NetWorkState {
  Online,
  Offline,
}

export enum TitleOrContent {
  OnlyTitle,
  OnlyContent,
  TitleAndContent,
}

export const gtplName = 'g_template';

export const curDocIdKey = 'currentDocumentId';

/**
 * Btn状态4个状态时互斥的
 */
export enum BtnStatus {
  hover = 'hover', // hover到Normal状态的元素
  Normal = 'normal', // 可点击的普通状态
  Disabled = 'disabled', // 不可点击状态.
  Focused = 'focused', // 选中状态
}

export enum ListItemStatus {
  Normal,
  Selected, // 点击之后处于选中状态
}


export const INFO = 'info';
export const WARNING = 'warning';

export const rightIcon = './static/images-deprecated/right.svg';
export const downIcon = './static/images-deprecated/down.svg';

export const TITLE_HEIHGT = 32;
export const ALLTAG = 'tags';

// 日志类型
export enum LogType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  DEBUG = 'dbg',
}

export enum ReportType {
  Info = 'info',
  Error = 'error',
  WARN = 'warn',
}

export const allowedTypes = [LogType.ERROR, LogType.DEBUG];

(window as any).allowedTypes = allowedTypes;

export const showToolbarNothing = 'BtnNothing';

export enum TplAuditStatus {
  submited = 'submited',
  accepted = 'accepted',
  rejected = 'rejected',
}

export const radius = '10px';

export enum Action {
  Do_Nothing,

  DrawFreeline,
  DrawRectangle,
  DrawPolyLine,
  DrawLabel,
  DrawCircle,

  MakeLeftCallout,
  MakeRightCallout,
  MakeUpCallout,
  MakeDownCallout,

  ResizeConnectorSegment,
  ResizeShape,
}

export enum TplCreateType {
  Image = 'image',
  Icon = 'icon',
  Model = 'model',
}

export enum ExportFormat {
  PNG = 'png',
  JPG = 'jpg',
  SVG = 'svg',
}

export const EVENT_MOVE_ON_TOOLBAR = 'EVENT_MOVE_ON_TOOLBAR';
export const EVENT_HIDE_POLYLINE_ADD_BTN = 'EVENT_HIDE_POLYLINE_ADD_BTN';
export const EVENT_HIDE_TREE_ADD_BTN = 'EVENT_HIDE_TREE_ADD_BTN';
export const EVENT_SELECT_NO_CATEGORY = 'EVENT_SELECT_NO_CATEGORY';
export const EVENT_HIDE_MM_ADD_BTN = 'EVENT_HIDE_MM_ADD_BTN';

// 函数名
export enum constFunName {
  // move
  moveNothing_ = 'bavfun1',
  moveByTranslate_ = 'bavfun2',

  // layout
  alignLayout_ = 'bavfun3',
  autoSizeBgLayout_ = 'bavfun4',
  fixedSizeBgLayout_ = 'fixedSizeBgLayout',
  centerAlignLayout_ = 'bavfun5',
  noLayout_ = 'bavfun6',
  maxContentCenterLayout_ = 'maxContentCenterLayout',
  calloutLayout_ = 'calloutLayout',
  ncalloutLayout_ = 'ncalloutLayout_',

  // resize
  resizeBox_ = 'bavfun7',
  resizeBoxWidth_ = 'bavfun8',
  resizeBoxEqualRatio_ = 'bavfun9',
  circleResize_ = 'bavfun10',
  resizeGroupMember_ = 'bavfun11',
  resizeGroupOnlyBg_ = 'bavfun12',
  resizeGroupOnlyFg_ = 'resizeGroupOnlyFg_',

  resizeElement_ = 'bavfun13',
  pathResize_ = 'bavfun14',
  polygonResize_ = 'bavfun15',
  resizeNothing_ = 'bavfun16',
  stlineResize_ = 'bavfun17',
  generalResize_ = 'generalResize',
  braceResize = 'braceResize',
  generalEqualRatioResize = 'generalEqualRatioResize',
  generalEqualLengthResize = 'generalEqualLengthResize',
  resizeLane = 'resizeLane',

  resizeBoxEqualLength_ = 'resizeBoxEqualLength',
  ellipseResize_ = 'ellipseResize',
  resizeBoxHeight = 'resizeBoxHeight',
  resizeArrowFn = 'resizeArrowFn',

  // gsetLayoutBox
  getBgLayoutBox_ = 'boxFun18',
  setBgLayoutBox_ = 'boxFun19',
  defaultGetLayoutBox_ = 'boxFun20',
  defaultSetLayoutBox_ = 'boxFun21',
  vertialLaneGetLayoutBoxFn = 'vertialLaneGetLayoutBoxFn',
  vertialLaneSetLayoutBoxFn = 'vertialLaneSetLayoutBoxFn',
  horizonLaneGetLayoutBoxFn = 'horizonLaneGetLayoutBoxFn',
  horizonLaneSetLayoutBoxFn = 'horizonLaneSetLayoutBoxFn',

  // route
  routeNothing = 'routeNothing',
  polylineRoute = 'polylineRoute',
  centerConnectorRoute = 'centerConnectorRoute',
  onlyRouteEndSegment = 'onlyRouteEndSegment',
  newPolylineRoutFn = 'newPolylineRoutFn',

  // JointsShownWhenSelectedFun
  showAllJoints = 'showAllJoints',
  showJontsNothing = 'showJontsNothing',
  showBBoxJoints = 'showBBoxJoints',
  showBBoxJointsOfLongEdge_ = 'showBBoxJointsOfLongEdge_',
  showTextJoint_ = 'showTextJoint',
  showBgJoints_ = 'showBgJoints',
  showJointsOfNoneCenterJoints = 'showJointsOfNoneCenterJoints',
  showJointsOfChildren = 'showJointsOfChildren',
  showTurnJoint_ = 'showTurnJoint',
  // JointsShownWhenConnectTo
  showAllJointsWhenConnectedTo = 'showAllJointsWhenConnectedTo',
  showNothingWhenConnectedTo = 'showNothingWhenConnectedTo',

  // joint generator
  generateNothing_ = 'generateNothing',
  generateBBoxJoint_ = 'generateBBoxJoint_',
  geneatorFixLineJoint_ = 'geneatorFixLineJoint_',
  turnPointJointsGenerator_ = 'turnPointJointsGenerator',
  midBBoxJointOfEdge_ = 'midJointOfBBoxEdge',
  turnPointAndMiddlePointOfEdge_ = 'turnPointAndMiddlePointOfEdge_',
  mindMapJointGenerator_ = 'mindMapJointGenerator',

  // outlineBox
  emptyOutlineBoxFun_ = 'emptyOutlineBoxFun',
  mboxOutlienBoxFun_ = 'mboxOutlineBoxFun',

  // ctrlpoint generator
  generatorNothingCtrlPointFn = 'generatorNothingCtrlPointFn',
  polylineCtrlPointFn = 'polylineCtrlPointFn',
  straightlineCtrlPointFn = 'straightlineCtrlPointFn',
  calloutBgCtrlPointFn = 'calloutBgCtrlPointFn',
  genCubicBezCtrlPointFn = 'genCubicBezCtrlPointFn',
  genConnectorCtrlPointFn = 'genConnectorCtrlPointFn',
}

export enum FunctionKey {
  NONE = 'NONE',
  F1 = 'F1',
  F2 = 'F2',
}

export const modelName = {
  staticTextModelName_: 'model1',
  tableModelName_: 'model22',
  labelModelName_: 'labelModel',
  quadBezCurveModelName_: 'model15',
  cubicBezCurveModelName_: 'cubicBezCurveModelName_',
  mindmapModelName: 'model9',
  leftTreeModelName: 'ltm',
  rightTreeModelName: 'rtm',
  downTreeModelName: 'dtm',
  freelineModelName: 'freeline',
  codeblockText: 'codeblockText',
  pathlineModelName: 'model4',
  linewidthArrowName: 'lineWidthArrow',
  connectorModelName: 'model21',
  polylineModelName: 'model13',
  stlineModelName: 'model12',
  titlebarModelName: 'model11',
  withTitleModelName: 'model10',
  groupModelName: 'model7',
  rectModelName: 'model2',
  squareModelName: 'sqaremodel',
  imageModelName: 'model3',
  treeActionTipBtnModelName: 'tabmn',
  bgGroupModelName: 'bgg',
  editableGroupName: 'edgn',
  ellipseModelName: 'eclipse',
  calloutName: 'callout',

  passiveJoint: 'disperseJoint',
  centerJoint: 'centerJoint',
  bboxJoint: 'bboxJoint',
  lineJoint: 'lineJoint',
  fakeCenterJoint: 'fakeCenterJoint',

  controlPoint: 'controlPoint',
  circleModelName: 'model5',
  ncalloutModelName: 'ncalloutModelName',
  calloutbgModelName: 'calloutbgModelName',
  braceModelName: 'braceModelName',

  lanemodelName: 'lane-model-name',
  vlanemodelName: 'vlane-model-name',
  hlanemodelName: 'hlane-model-name',

  arrowModelName: 'arrowModelName',
  polygonModelName: 'model6',

  rotatePointModelName: 'rotatePointModelName',
};

export const btnStatusEvent = 'foucsoutEvent';

export const enum shapeRendering {
  geometricPrecision = 'geometricPrecision', // 开启抗锯齿（但是线条会变大）。适用path等可能出现倾斜的线条
  crispEdges = 'crispEdges', //// 更细小(1px)，但是斜线会有锯齿。适合于水平线和垂线（包括垂直或水平的折线），rect等情况.
}

export const ghostFakeImageId = 'ghost';

export enum evt {
  treeAddChild = 'addChild',
  treeAddSibling = 'addSibling',
  treeFocusTree = 'treeFocusTree',
  stopEditingText = 'stopEditingText',
  keyTab = 'keytab',
  updateCursor = 'update_cursor',
}

export const none = 'none';
export type NONE = 'none';

export enum BtfColorLuminosity {
  bright = 'bright',
  light = 'light',
  dark = 'dark',
}

export const searchCatId = 11;

export enum prtyBtnId {
  borderBtnId = 'borderBtnId',
  fillBtnId = 'fillBtnId',
  leftArrow = 'leftArrow',
  rightArrow = 'rightArrow',
  connLine = 'connLine',

  none = 'none',
}

export enum ToolBarBtnIds {
  toolbar_alignBtnId = 'toolbar_alignBtnId',
  toolbar_connectorBtn = 'toolbar_connectorBtn',
  toolbar_otherGroupBtnId = 'toolbar_otherGroupBtnId',
  toolbar_TreeBtnId = 'toolbar_TreeBtnId',
  toolbar_calloutGrpBtnId = 'toolbar_calloutGrpBtnId',
  toolbar_moreBtnId = 'toolbar_moreBtnId',
  none = 'none',
}

/**
 * 该选项是进行配置的
 */
export enum StrokeAction {
  Select, // 选中
  Connect, // 连线
  MOVE_SEGMENT,
  NONE,
}
export enum LoginStatus {
  unknown = 1,
  logined,
  unlogin,
}
export enum TextAlign {
  left = 'left',
  center = 'center',
  right = 'right',
  none = 'none',
}

export enum SelectWhich {
  // 逐层向上传递，直到svg
  NONE,

  // 请优先选中我（选中后会终止事件向上传递）
  selectMe,

  // 永远也选不中我，因为我会把事件向上传递(主要用在背景布局和树中）
  pass2Parent,
}

export enum MarkerKind {
  none = 'none',
  arrow = 'arrow',
  triangle_fill = 'triangle_fill',
  triangle_blank = 'triangle_blank',
  diamond_fill = 'diamond_fill',
  diamond_blank = 'diamond_blank',
  circle_fill = 'circle_fill',
  circle_blank = 'circle_blank',
}

export const AutoRouteDist = 200;

export const LongEdge = 64;

export enum lmsEdge {
  Long,
  Middle,
  Small,
}

export enum TreeType {
  lefTree = 'leftTree',
  rightTree = 'rightTree',
  downTree = 'downTree',
}

export enum Currency {
  rmb = 'rmb',
  dollar = 'dollar',
}

export enum PointerEvents {
  fill = 'fill',
  stroke = 'stroke',
  all = 'all',
  none = 'none',

  // 使用此类型group元素的空白区域也可以接受到事件
  boundingBox = 'bounding-box',
}

export enum ClassName {
  BoxModel = 'BoxModel',
}

export enum CalloutType {
  LeftCallout,
  RightCallout,
  UpCallout,
  DownCallout,
}

export enum Pages {
  MyDocList = 1,
  RecommendList = 2,
  BullMindPage = 3,
}

export enum ConnectMarkerAction {
  // 在2个图形之间建立一个中心点连接connector
  connect2CenterJoint,

  // 连接到图形的stroke上的joint
  connect2EdgeJoint,

  NoConnect, // 不连接
}

export interface IEventPropagation {
  mousedown: boolean;
  mousemove: boolean;
  mouseup: boolean;
  mouseover: boolean;
  mouseout: boolean;
}

export const defaultPropagation = () => {
  return {
    mousedown: false, // 不允许传播
    mousemove: false,
    mouseup: false,
    mouseover: true, // 允许向上传播
    mouseout: true,
  };
};

export enum Perm {
  ro = 'ro',
  rw = 'rw',
  hidden = 'hidden',
  check_perm_table = 'check_perm_table',
}

export interface ISize {
  width: number;
  height: number;
}
export enum dragStatus {
  static = 1,
  dragStart,
  dragEnter,
  dragOver,
}
export interface IRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export enum docStatus {
  Saving,
  Saved,
  SavError,
}
// 验证手机号。目前只支持中国大陆地区的手机号
export const phoneNumberRegex = /^1[3456789]\d{9}$/;
export const codeRegex = /^\d{6}$/;

export const MIN_MBOX_WIDTH = 20;
export const MIN_MBOX_HEIGHT = 20;

export const IMAGE_PLACEHOLDER = 'https://www.bullmind.com/logo.svg';
