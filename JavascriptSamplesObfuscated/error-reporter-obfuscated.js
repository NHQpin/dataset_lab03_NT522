var _0x4bd2=['\x0aStack:\x20','\x0a\x0a//\x20raw\x0a','env','NODE_ENV','error','ERROR_REPORTER','status','fcc:middlewares:error-reporter','now','\x0aError:\x20','\x0aIs\x20authenticated\x20user:\x20','user','\x0aRoute:\x20','stringify'];(function(_0x40ee55,_0x59301b){var _0x47a0ff=function(_0x4f82e3){while(--_0x4f82e3){_0x40ee55['push'](_0x40ee55['shift']());}};_0x47a0ff(++_0x59301b);}(_0x4bd2,0x12d));var _0x1a64=function(_0xd4b97e,_0x24d4f5){_0xd4b97e=_0xd4b97e-0x0;var _0x4dcadb=_0x4bd2[_0xd4b97e];return _0x4dcadb;};import _0x3d945c from'debug';import _0x3e7219 from'rollbar';import{isHandledError,unwrapHandledError}from'../utils/create-handled-error.js';import{rollbar}from'../../../config/secrets';const {appId}=rollbar;const reporter=new _0x3e7219(appId);const log=_0x3d945c(_0x1a64('0x0'));const errTemplate=(error,req)=>{const {message,stack}=error;return'\x0aTime:\x20'+new Date(Date[_0x1a64('0x1')]())['toISOString']()+_0x1a64('0x2')+message+_0x1a64('0x3')+!!req[_0x1a64('0x4')]+_0x1a64('0x5')+JSON[_0x1a64('0x6')](req['route'],null,0x2)+_0x1a64('0x7')+stack+_0x1a64('0x8')+JSON[_0x1a64('0x6')](error,null,0x2)+'\x0a\x0a';};export function reportError(err){return process[_0x1a64('0x9')][_0x1a64('0xa')]==='production'?reporter[_0x1a64('0xb')](err['message'],err):console[_0x1a64('0xb')](err);}export default function errrorReporter(){if(process[_0x1a64('0x9')][_0x1a64('0xa')]!=='production'&&process[_0x1a64('0x9')][_0x1a64('0xc')]){return(err,req,res,next)=>{console['error'](errTemplate(err,req));if(isHandledError(err)){const handled=unwrapHandledError(err);log(handled['message']);}next(err);};}return(err,req,res,next)=>{if(isHandledError(err)||err['statusCode']||err[_0x1a64('0xd')]){return next(err);}console[_0x1a64('0xb')](errTemplate(err,req));reportError(err);return next(err);};}