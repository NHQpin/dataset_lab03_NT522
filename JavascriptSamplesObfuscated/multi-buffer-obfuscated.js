var _0x4275=['allocUnsafe','round','udp4','127.0.0.1','listening','start','end','message','bind','../common.js','PORT','createBenchmark','send','recv','push'];(function(_0x13826f,_0x4e196b){var _0x4db97f=function(_0x41ba28){while(--_0x41ba28){_0x13826f['push'](_0x13826f['shift']());}};_0x4db97f(++_0x4e196b);}(_0x4275,0x72));var _0x3aec=function(_0x2699a9,_0x501e82){_0x2699a9=_0x2699a9-0x0;var _0x5b6c40=_0x4275[_0x2699a9];return _0x5b6c40;};// test UDP send/recv throughput with the multi buffer API
'use strict';const common=require(_0x3aec('0x0'));const dgram=require('dgram');const PORT=common[_0x3aec('0x1')];const bench=common[_0x3aec('0x2')](main,{'len':[0x40,0x100,0x400],'num':[0x64],'chunks':[0x1,0x2,0x4,0x8],'type':[_0x3aec('0x3'),_0x3aec('0x4')],'dur':[0x5]});function main({dur,len,num,type,chunks}){const _0x5df161=[];for(var _0x3932d0=0x0;_0x3932d0<chunks;_0x3932d0++){_0x5df161[_0x3aec('0x5')](Buffer[_0x3aec('0x6')](Math[_0x3aec('0x7')](len/chunks)));}var _0x422f37=0x0;var _0x57fc1d=0x0;const _0x1a16c3=dgram['createSocket'](_0x3aec('0x8'));function _0x282aa6(){if(_0x422f37++%num===0x0){for(var _0x3932d0=0x0;_0x3932d0<num;_0x3932d0++){_0x1a16c3[_0x3aec('0x3')](_0x5df161,PORT,_0x3aec('0x9'),_0x282aa6);}}}_0x1a16c3['on'](_0x3aec('0xa'),()=>{bench[_0x3aec('0xb')]();_0x282aa6();setTimeout(()=>{const _0x8727c5=(type===_0x3aec('0x3')?_0x422f37:_0x57fc1d)*len;const _0x27f711=_0x8727c5*0x8/(0x400*0x400*0x400);bench[_0x3aec('0xc')](_0x27f711);process['exit'](0x0);},dur*0x3e8);});_0x1a16c3['on'](_0x3aec('0xd'),()=>{_0x57fc1d++;});_0x1a16c3[_0x3aec('0xe')](PORT);}