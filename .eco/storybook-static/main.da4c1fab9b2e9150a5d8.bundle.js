(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{260:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={default:{item:{type:"atom",label:"Default label",id:"node-132465467"}}}},261:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(17),__webpack_require__(27),__webpack_require__(28),__webpack_require__(18),__webpack_require__(111),__webpack_require__(37),__webpack_require__(21),__webpack_require__(43),__webpack_require__(16),__webpack_require__(48),__webpack_require__(29),__webpack_require__(19),__webpack_require__(30);var react=__webpack_require__(0),react_default=__webpack_require__.n(react);__webpack_require__(15),__webpack_require__(59),__webpack_require__(56),__webpack_require__(110),__webpack_require__(2),__webpack_require__(130),__webpack_require__(257),__webpack_require__(34);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var RepositoryContext=react_default.a.createContext();console.log("init repo contxt");var initialState={changed:{flag:!1,type:null},selectedNodeId:"",familyChildren:[],familyParents:[],nodeIdFrom:null,nodeIdTo:null,paintNodeConnections:!1},reducer=function(state,action){switch(action.type){case"change":return console.log("change"),_objectSpread({},state,{changed:{flag:!0,type:action.payload}});case"updated":return console.log("updated"),_objectSpread({},state,{changed:{flag:!1,type:null}});case"selectedNodeId":return initialState;case"setSelectedNodeId":return _objectSpread({},state,{selectedNodeId:action.payload});case"setPaintNodeConnections":return _objectSpread({},state,{paintNodeConnections:action.payload});case"addToFamilyChildren":return _objectSpread({},state,{familyChildren:[].concat(_toConsumableArray(state.familyChildren),_toConsumableArray(action.payload))});case"setFamilyChildren":return _objectSpread({},state,{familyChildren:action.payload});case"addToFamilyParents":return _objectSpread({},state,{familyParents:[].concat(_toConsumableArray(state.familyParents),_toConsumableArray(action.payload))});case"setFamilyParents":return _objectSpread({},state,{familyParents:action.payload});case"setNodeIdFrom":return _objectSpread({},state,{nodeIdFrom:action.payload});case"setNodeIdTo":return _objectSpread({},state,{nodeIdTo:action.payload});case"resetFromTo":return _objectSpread({},state,{nodeIdFrom:null,nodeIdTo:null})}},RepositoryContextProvider=function(props){var _React$useReducer2=_slicedToArray(react_default.a.useReducer(reducer,initialState),2),state=_React$useReducer2[0],dispatch=_React$useReducer2[1];return react_default.a.createElement(RepositoryContext.Provider,{value:{state:state,dispatch:dispatch}},props.children)};RepositoryContextProvider.displayName="RepositoryContextProvider";var getContext=function(){return RepositoryContext};RepositoryContextProvider.__docgenInfo={description:"",methods:[],displayName:"RepositoryContextProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\helpers\\contexts\\Repository.context.js"]={name:"RepositoryContextProvider",docgenInfo:RepositoryContextProvider.__docgenInfo,path:"src\\helpers\\contexts\\Repository.context.js"});__webpack_require__(74);function repositoryService_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function repositoryService_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var repository=function repositoryService_objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?repositoryService_ownKeys(source,!0).forEach((function(key){repositoryService_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):repositoryService_ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}({},{items:[{type:"atom",label:"Button1",id:"1"},{type:"atom",label:"Button2",id:"2"},{type:"molecule",label:"BBox",id:"3"}],tree:[{id:"3",children:[]}]});function getChildren(id){var treeItemList=repository.tree.filter((function(item){return item.id==id}));return treeItemList.length&&treeItemList[0].children?treeItemList[0].children:[]}function getParents(id){var parents=repository.tree.filter((function(item){return item.id!=id&&item.children&&-1<item.children.indexOf(id)})).map((function(element){return element.id}));return parents.length?parents:[]}__webpack_require__(141),__webpack_require__(250);var _colors,styled_components_browser_esm=__webpack_require__(39);function colors_styles_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}colors_styles_defineProperty(_colors={black:"#000000",grey_dark:"#444",grey_light:"#aaaa",grey_medium:"#888",white:"#ffffff"},"grey_dark","#14171E"),colors_styles_defineProperty(_colors,"grey_dark_medium","#1B1E27"),colors_styles_defineProperty(_colors,"grey_medium","#383C45"),colors_styles_defineProperty(_colors,"light","#ffffff"),colors_styles_defineProperty(_colors,"item_base","#242831"),colors_styles_defineProperty(_colors,"green","#04BF2D"),colors_styles_defineProperty(_colors,"green_dark","#1E4435"),colors_styles_defineProperty(_colors,"grey_text_med","#383C45"),colors_styles_defineProperty(_colors,"grey_text_lig","#ffffff");var theme_base_des_02="#242831",theme_text_des_01="#383C45",theme_text="#ffffff",theme_accent={default:{d1:"#CA00B4",base:"#E81CD2",l1:""},primary:{d1:"#1E4435",base:"#04BF2D",l1:""},secondary:{d1:"#824C04",base:"#F4971B",l1:""},tertiary:{d1:"#cccccc",base:"#ffffff",l1:""}};__webpack_require__(559),__webpack_require__(49),__webpack_require__(226);var colorize={hexToRgbA:function hexToRgbA(hex,_alpha){var c;if(/^\#([A-Fa-f0-9]{3}){1,2}$/.test(hex))return 3==(c=hex.substring(1).split("")).length&&(c=[c[0],c[0],c[1],c[1],c[2],c[2]]),c="0x"+c.join(""),"rgba( ".concat([255&c>>16,255&c>>8,255&c].join(","),", ").concat(_alpha||1,")");throw new Error("Bad Hex")}};function _templateObject8(){var data=_taggedTemplateLiteral(["\n  width: 10px;\n  align-self: flex-end;\n  cursor:pointer;\n\n  :after {\n    display: inline-block;\n    content: '\\2807';\n    font-size: 18px;\n    color: ",";\n  }\n"],["\n  width: 10px;\n  align-self: flex-end;\n  cursor:pointer;\n\n  :after {\n    display: inline-block;\n    content: '\\\\2807';\n    font-size: 18px;\n    color: ",";\n  }\n"]);return _templateObject8=function(){return data},data}function _templateObject7(){var data=_taggedTemplateLiteral(["\n  min-width:30px;\n  padding:2px;\n  border-radius: 5px;\n  background-color: ",";\n  text-align:center;\n  font-size:10px;\n  color: ",";\n"]);return _templateObject7=function(){return data},data}function _templateObject6(){var data=_taggedTemplateLiteral(["\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align:left;\n  color: ",";\n  padding: 5px 0;\n\n  &:first-child {\n    margin-left: 10px;\n    margin-right: 5px;\n    flex-grow: 1;\n\n    cursor:pointer;\n  }\n  &:last-child {\n    margin-right: 10px;\n    margin-left: 5px;\n    width:20px;\n  }\n"]);return _templateObject6=function(){return data},data}function _templateObject5(){var data=_taggedTemplateLiteral(["\n  display:flex;\n  flex-direction:row;\n  flex-grow: 1;\n  background-color: ",";\n  color: ",";\n"]);return _templateObject5=function(){return data},data}function _templateObject4(){var data=_taggedTemplateLiteral(["\n  display:flex;\n  width: ","px;\n  cursor: pointer;\n\n  :hover{\n    ","{\n      ","\n    }\n    ","{\n      background-color: ",";\n    }\n  }\n"]);return _templateObject4=function(){return data},data}function _templateObject3(){var data=_taggedTemplateLiteral(["\n  width: ","px;\n  background-color: ",";\n  order: ",";\n  ","\n\n  ","\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=_taggedTemplateLiteral(["\n  flex: 1;\n  align-self: center;\n  background-color: ",";\n  height: ","px;\n  order:",void 0],["\n  flex: 1;\n  align-self: center;\n  background-color: ",";\n  height: ","px;\n  order:",';\n\n  /* :before{\n    display: block;\n    content: "\\2193"; \n    font-size: 12px;\n  } */\n']);return _templateObject2=function(){return data},data}function _templateObject(){var data=_taggedTemplateLiteral(["\n  display:flex;\n  min-height: ","px;\n  margin: 5px 0;\n"]);return _templateObject=function(){return data},data}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var actionHeight=Math.min(25,35),NodeWrapper=styled_components_browser_esm.a.div(_templateObject(),35),processStatus=function(_ref){var isSelected=_ref.isSelected,isInParent=(_ref.hasParents,_ref.hasChildren,_ref.isInParent),color=(_ref.isInChildren,_ref.nodeIdFrom,_ref.nodeIdTo,theme_accent.default.base);return isSelected||(color=isInParent?theme_accent.primary.base:theme_accent.secondary.base),color},ConectorAction=styled_components_browser_esm.a.div(_templateObject2(),(function(_ref2){var active=_ref2.active,status=_ref2.status;return active?processStatus(status):colorize.hexToRgbA("#ffffff",".1")}),actionHeight,(function(_ref3){return _ref3.left?"0":"1"})),ConectorDecoration=styled_components_browser_esm.a.div(_templateObject3(),10,theme_base_des_02,(function(_ref4){return _ref4.left?"1":"0"}),(function(_ref5){return _ref5.left?"border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px;\n      ":"border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    "}),(function(_ref6){var left=_ref6.left,active=_ref6.active,status=_ref6.status,color=processStatus(status);return active?left?"border-left: 2px solid ".concat(color,";"):"border-right: 2px solid ".concat(color,";"):""})),ConectorWrapper=styled_components_browser_esm.a.div(_templateObject4(),42,ConectorDecoration,(function(_ref7){return _ref7.left?"border-left: 2px solid ".concat(theme_accent.tertiary.base,";"):"border-right: 2px solid ".concat(theme_accent.tertiary.base,";")}),ConectorAction,theme_accent.tertiary.base),Box=styled_components_browser_esm.a.div(_templateObject5(),theme_base_des_02,theme_text),BoxCol=styled_components_browser_esm.a.div(_templateObject6(),(function(_ref8){var status=_ref8.status;return status&&(status.isSelected||status.isInParent||status.isInChildren)?processStatus(status):theme_text})),Sticker=styled_components_browser_esm.a.div(_templateObject7(),colorize.hexToRgbA("#ffffff",".1"),colorize.hexToRgbA("#ffffff",".2")),Dotted=styled_components_browser_esm.a.div(_templateObject8(),theme_text_des_01);function node_slicedToArray(arr,i){return function node_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function node_iterableToArrayLimit(arr,i){if(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function node_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}__webpack_require__.d(__webpack_exports__,"a",(function(){return Node}));var Conector=function(_ref){var left=_ref.left,active=_ref.active,status=_ref.status,id=_ref.id,_useContext=Object(react.useContext)(getContext()),dispatch=(_useContext.state,_useContext.dispatch);return react_default.a.createElement(ConectorWrapper,{left:left,onClick:function onClick(){return dispatch(left?{type:"setNodeIdTo",payload:id}:{type:"setNodeIdFrom",payload:id})}},react_default.a.createElement(ConectorAction,{active:active,left:left,status:status}),react_default.a.createElement(ConectorDecoration,{active:active,left:left,status:status}))};Conector.displayName="Conector";var _ref3=react_default.a.createElement(BoxCol,null,react_default.a.createElement(Dotted,null)),Node=function(_ref2){function recursionTree(){var gen1ChildrenIds=getChildren(id);setHasChildren(0<gen1ChildrenIds.length),dispatch({type:"setFamilyChildren",payload:gen1ChildrenIds}),gen1ChildrenIds.forEach((function(subId){var gen2ChildrenIds=getChildren(subId);dispatch({type:"addToFamilyChildren",payload:gen2ChildrenIds}),gen2ChildrenIds.forEach((function(subId){var gen3ChildrenIds=getChildren(subId);dispatch({type:"addToFamilyChildren",payload:gen3ChildrenIds})}))}));var gen1ParentsIds=getParents(id);setHasParents(0<gen1ParentsIds.length),dispatch({type:"setFamilyParents",payload:gen1ParentsIds}),gen1ParentsIds.forEach((function(subId){var gen2ParentsIds=getParents(subId);dispatch({type:"addToFamilyParents",payload:gen2ParentsIds}),gen2ParentsIds.forEach((function(subId){var gen3ParentsIds=getParents(subId);dispatch({type:"addToFamilyParents",payload:gen3ParentsIds})}))}))}function getStatus(){return{isSelected:isSelected,hasParents:hasParents,hasChildren:hasChildren,isInParent:isInParent,isInChildren:isInChildren,nodeIdFrom:nodeIdFrom,nodeIdTo:nodeIdTo}}_ref2.type;var label=_ref2.label,id=_ref2.id,_useContext2=Object(react.useContext)(getContext()),state=_useContext2.state,dispatch=_useContext2.dispatch,_useState2=node_slicedToArray(Object(react.useState)(state.selectedNodeId==id),2),isSelected=_useState2[0],setIsSelected=_useState2[1],_useState4=node_slicedToArray(Object(react.useState)(!1),2),isCreated=_useState4[0],_useState6=(_useState4[1],node_slicedToArray(Object(react.useState)(!1),2)),isInChildren=_useState6[0],setIsInChildren=_useState6[1],_useState8=node_slicedToArray(Object(react.useState)(!1),2),isInParent=_useState8[0],setIsInParent=_useState8[1],_useState10=node_slicedToArray(Object(react.useState)(!1),2),hasChildren=_useState10[0],setHasChildren=_useState10[1],_useState12=node_slicedToArray(Object(react.useState)(!1),2),hasParents=_useState12[0],setHasParents=_useState12[1],_useState14=node_slicedToArray(Object(react.useState)(!1),2),nodeIdFrom=_useState14[0],setNodeIdFrom=_useState14[1],_useState16=node_slicedToArray(Object(react.useState)(!1),2),nodeIdTo=_useState16[0],setNodeIdTo=_useState16[1];return Object(react.useLayoutEffect)((function(){setNodeIdFrom(state.nodeIdFrom==id)}),[state.nodeIdFrom]),Object(react.useLayoutEffect)((function(){setNodeIdTo(state.nodeIdTo==id)}),[state.nodeIdTo]),Object(react.useLayoutEffect)((function(){setIsSelected(state.selectedNodeId==id)}),[state.selectedNodeId]),Object(react.useLayoutEffect)((function(){setIsSelected(state.selectedNodeId==id),state.paintNodeConnections&&state.selectedNodeId===id&&recursionTree()}),[state.paintNodeConnections]),Object(react.useLayoutEffect)((function(){if(state.selectedNodeId!=id){var inList=-1<state.familyChildren.indexOf(id);if(setIsInChildren(inList),inList){var gen1ChildrenIds=getChildren(id);setHasChildren(0<gen1ChildrenIds.length)}else setHasChildren(!1)}}),[state.familyChildren]),Object(react.useLayoutEffect)((function(){if(state.selectedNodeId!=id){var inList=-1<state.familyParents.indexOf(id);if(setIsInParent(inList),inList){var gen1ParentsIds=getParents(id);setHasParents(0<gen1ParentsIds.length)}else setHasParents(!1)}}),[state.familyParents]),Object(react.useLayoutEffect)((function(){}),[isSelected]),react_default.a.createElement(NodeWrapper,null,react_default.a.createElement(Conector,{active:hasChildren||isInParent,id:id,left:!0,status:getStatus()}),react_default.a.createElement(Box,{isSelected:isSelected},react_default.a.createElement(BoxCol,{status:getStatus(),onClick:function onClick(){return function selectNode(){dispatch({type:"setSelectedNodeId",payload:id}),recursionTree()}()}},label),react_default.a.createElement(BoxCol,null,react_default.a.createElement(Sticker,isCreated,isCreated?"C":"P")),_ref3),react_default.a.createElement(Conector,{active:hasParents||isInChildren,id:id,status:getStatus()}))};Node.displayName="Node",Node.__docgenInfo={description:"",methods:[],displayName:"Node"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\node\\node.jsx"]={name:"Node",docgenInfo:Node.__docgenInfo,path:"src\\components\\node\\node.jsx"})},264:function(module,exports,__webpack_require__){__webpack_require__(265),__webpack_require__(377),module.exports=__webpack_require__(378)},286:function(module,exports){},378:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(112);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(557),module)}.call(this,__webpack_require__(197)(module))},557:function(module,exports,__webpack_require__){var map={"./components/node/node.stories.js":558};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=557},558:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(112),_node__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(261),_node_mocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(260);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atoms/Dummy",module).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node__WEBPACK_IMPORTED_MODULE_2__.a,_node_mocks__WEBPACK_IMPORTED_MODULE_3__.a.default.item)}))}.call(this,__webpack_require__(197)(module))}},[[264,1,2]]]);
//# sourceMappingURL=main.da4c1fab9b2e9150a5d8.bundle.js.map