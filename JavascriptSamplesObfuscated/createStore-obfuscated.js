var _0x1545=['replaceReducer','location','run','hot','accept','./rootReducer'];(function(_0x19a34d,_0x27abd6){var _0x10c5af=function(_0x40b7ab){while(--_0x40b7ab){_0x19a34d['push'](_0x19a34d['shift']());}};_0x10c5af(++_0x27abd6);}(_0x1545,0x1d5));var _0x5a27=function(_0x3f60f1,_0x315f8f){_0x3f60f1=_0x3f60f1-0x0;var _0x55adcc=_0x1545[_0x3f60f1];return _0x55adcc;};import{composeWithDevTools}from'redux-devtools-extension/logOnlyInProduction';import{createStore as _0x4790f7,applyMiddleware}from'redux';import _0x4e0c53 from'redux-saga';import{createEpicMiddleware}from'redux-observable';import _0x406789 from'./rootEpic';import _0x10011 from'./rootReducer';import _0x41c6ea from'./rootSaga';import{isBrowser}from'../../utils';const clientSide=isBrowser();const sagaMiddleware=_0x4e0c53({'context':{'document':clientSide?document:{}}});const epicMiddleware=createEpicMiddleware({'dependencies':{'window':clientSide?window:{},'location':clientSide?window[_0x5a27('0x0')]:{},'document':clientSide?document:{}}});const composeEnhancers=composeWithDevTools({});export const createStore=()=>{const store=_0x4790f7(_0x10011,composeEnhancers(applyMiddleware(sagaMiddleware,epicMiddleware)));sagaMiddleware[_0x5a27('0x1')](_0x41c6ea);epicMiddleware[_0x5a27('0x1')](_0x406789);if(module[_0x5a27('0x2')]){module[_0x5a27('0x2')][_0x5a27('0x3')](_0x5a27('0x4'),()=>{const nextRootReducer=require(_0x5a27('0x4'));store[_0x5a27('0x5')](nextRootReducer);});}return store;};