var _0x376d=['start','fstat','closeSync','../common','createBenchmark','fstatSync','statSync','openSync'];(function(_0x16e2b5,_0x5d47cd){var _0x35d08b=function(_0x1881a3){while(--_0x1881a3){_0x16e2b5['push'](_0x16e2b5['shift']());}};_0x35d08b(++_0x5d47cd);}(_0x376d,0x15b));var _0x1c2e=function(_0x2be071,_0x33fc03){_0x2be071=_0x2be071-0x0;var _0x4c1e92=_0x376d[_0x2be071];return _0x4c1e92;};'use strict';const common=require(_0x1c2e('0x0'));const fs=require('fs');const bench=common[_0x1c2e('0x1')](main,{'n':[0xf4240],'statSyncType':[_0x1c2e('0x2'),'lstatSync',_0x1c2e('0x3')]});function main({n,statSyncType}){const _0x58f748=statSyncType===_0x1c2e('0x2')?fs[_0x1c2e('0x4')](__filename,'r'):__dirname;const _0x4166c1=fs[statSyncType];bench[_0x1c2e('0x5')]();for(var _0x56cd23=0x0;_0x56cd23<n;_0x56cd23++){_0x4166c1(_0x58f748);}bench['end'](n);if(statSyncType===_0x1c2e('0x6'))fs[_0x1c2e('0x7')](_0x58f748);}