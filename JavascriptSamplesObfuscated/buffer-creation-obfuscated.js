var _0x5033=['slow-allocUnsafe','slow','buffer()','alloc','start','fast-allocUnsafe','allocUnsafe','allocUnsafeSlow','fail','Should\x20not\x20get\x20here','end','SlowBuffer','../common.js','assert','fast-alloc','fast-alloc-fill'];(function(_0x472814,_0x134a3c){var _0x275a44=function(_0x14210f){while(--_0x14210f){_0x472814['push'](_0x472814['shift']());}};_0x275a44(++_0x134a3c);}(_0x5033,0xeb));var _0x43e7=function(_0x378598,_0x4837db){_0x378598=_0x378598-0x0;var _0x1993c2=_0x5033[_0x378598];return _0x1993c2;};'use strict';const SlowBuffer=require('buffer')[_0x43e7('0x0')];const common=require(_0x43e7('0x1'));const assert=require(_0x43e7('0x2'));const bench=common['createBenchmark'](main,{'type':[_0x43e7('0x3'),_0x43e7('0x4'),'fast-allocUnsafe',_0x43e7('0x5'),_0x43e7('0x6'),_0x43e7('0x7')],'len':[0xa,0x400,0x800,0x1000,0x2000],'n':[0x400]});function main({len,n,type}){let _0x44496a,_0x319a87;switch(type){case'':case _0x43e7('0x3'):_0x44496a=Buffer[_0x43e7('0x8')];break;case'fast-alloc-fill':bench[_0x43e7('0x9')]();for(_0x319a87=0x0;_0x319a87<n*0x400;_0x319a87++){Buffer[_0x43e7('0x8')](len,0x0);}bench['end'](n);return;case _0x43e7('0xa'):_0x44496a=Buffer[_0x43e7('0xb')];break;case _0x43e7('0x5'):_0x44496a=Buffer[_0x43e7('0xc')];break;case _0x43e7('0x6'):_0x44496a=SlowBuffer;break;case _0x43e7('0x7'):_0x44496a=Buffer;break;default:assert[_0x43e7('0xd')](_0x43e7('0xe'));}bench['start']();for(_0x319a87=0x0;_0x319a87<n*0x400;_0x319a87++){_0x44496a(len);}bench[_0x43e7('0xf')](n);}