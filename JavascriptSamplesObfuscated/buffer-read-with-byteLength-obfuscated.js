var _0x64de=['read','writeDoubleLE','start','../common.js','IntBE','UIntBE','createBenchmark','fast','SlowBuffer'];(function(_0x1a7886,_0x53bd60){var _0x210c00=function(_0x59f3d5){while(--_0x59f3d5){_0x1a7886['push'](_0x1a7886['shift']());}};_0x210c00(++_0x53bd60);}(_0x64de,0x16b));var _0x476f=function(_0xb67384,_0x27295a){_0xb67384=_0xb67384-0x0;var _0x156d7c=_0x64de[_0xb67384];return _0x156d7c;};'use strict';const common=require(_0x476f('0x0'));const types=[_0x476f('0x1'),'IntLE',_0x476f('0x2'),'UIntLE'];const bench=common[_0x476f('0x3')](main,{'buffer':[_0x476f('0x4'),'slow'],'type':types,'n':[0xf4240],'byteLength':[0x1,0x2,0x3,0x4,0x5,0x6]});function main({n,buf,type,byteLength}){const _0x555dc9=buf===_0x476f('0x4')?Buffer:require('buffer')[_0x476f('0x5')];const _0x452a0e=new _0x555dc9(0x8);const _0x3cb9ec=_0x476f('0x6')+(type||_0x476f('0x1'));_0x452a0e[_0x476f('0x7')](0x0,0x0);bench[_0x476f('0x8')]();for(var _0x51058c=0x0;_0x51058c!==n;_0x51058c++){_0x452a0e[_0x3cb9ec](0x0,byteLength);}bench['end'](n);}