const _handledError=Symbol('handledError');export function isHandledError(_0x5d2992){return!!_0x5d2992[_handledError];}export function unwrapHandledError(_0x483c7e){return _0x483c7e[_handledError]||{};}export function wrapHandledError(_0x2284b8,{type,message,redirectTo,status=0xc8}){_0x2284b8[_handledError]={'type':type,'message':message,'redirectTo':redirectTo,'status':status};return _0x2284b8;}export const createValidatorErrorFormatter=(_0x3f940e,_0x2141fa)=>({msg})=>wrapHandledError(new Error(msg),{'type':_0x3f940e,'message':msg,'redirectTo':_0x2141fa,'status':0x190});