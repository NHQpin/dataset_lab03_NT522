var _0x2c9d=['log','red','cyan','\x20\x20Searched\x20in:\x20','path','chalk','forEach','F_OK','dirname','basename'];(function(_0x330af9,_0x27f57d){var _0x15d11c=function(_0x2827dc){while(--_0x2827dc){_0x330af9['push'](_0x330af9['shift']());}};_0x15d11c(++_0x27f57d);}(_0x2c9d,0x1b2));var _0x5a23=function(_0x2aa269,_0xfd4a38){_0x2aa269=_0x2aa269-0x0;var _0x581cf3=_0x2c9d[_0x2aa269];return _0x581cf3;};/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var fs=require('fs');var path=require(_0x5a23('0x0'));var chalk=require(_0x5a23('0x1'));function checkRequiredFiles(_0x4fe08b){var _0x58b1aa;try{_0x4fe08b[_0x5a23('0x2')](_0x287219=>{_0x58b1aa=_0x287219;fs['accessSync'](_0x287219,fs[_0x5a23('0x3')]);});return!![];}catch(_0x3e1c0e){var _0x5a06c5=path[_0x5a23('0x4')](_0x58b1aa);var _0x45a5de=path[_0x5a23('0x5')](_0x58b1aa);console[_0x5a23('0x6')](chalk[_0x5a23('0x7')]('Could\x20not\x20find\x20a\x20required\x20file.'));console[_0x5a23('0x6')](chalk['red']('\x20\x20Name:\x20')+chalk[_0x5a23('0x8')](_0x45a5de));console['log'](chalk['red'](_0x5a23('0x9'))+chalk[_0x5a23('0x8')](_0x5a06c5));return![];}}module['exports']=checkRequiredFiles;