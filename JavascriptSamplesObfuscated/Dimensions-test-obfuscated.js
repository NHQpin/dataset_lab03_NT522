var _0x1691=['fontScale','should\x20set\x20screen\x20dimensions\x20on\x20iOS','ios','Dimensions','Platform','should\x20set\x20window\x20dimensions','set','get','window','toEqual','height','should\x20set\x20screen\x20dimensions\x20on\x20Android','android','width','screen','scale'];(function(_0x50149b,_0x4bc2a6){var _0x41f272=function(_0x36f802){while(--_0x36f802){_0x50149b['push'](_0x50149b['shift']());}};_0x41f272(++_0x4bc2a6);}(_0x1691,0x1c3));var _0x334c=function(_0xc033a1,_0x3e47ab){_0xc033a1=_0xc033a1-0x0;var _0x284bfc=_0x1691[_0xc033a1];return _0x284bfc;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */
'use strict';describe(_0x334c('0x0'),()=>{const _0x112d69=require('Dimensions');const _0x14bf01=require(_0x334c('0x1'));it(_0x334c('0x2'),()=>{_0x112d69[_0x334c('0x3')]({'windowPhysicalPixels':{'width':0x190,'height':0x320,'scale':0x2,'fontScale':0x3}});expect(_0x112d69[_0x334c('0x4')](_0x334c('0x5'))['width'])[_0x334c('0x6')](0xc8);expect(_0x112d69['get'](_0x334c('0x5'))[_0x334c('0x7')])[_0x334c('0x6')](0x190);expect(_0x112d69[_0x334c('0x4')](_0x334c('0x5'))['scale'])['toEqual'](0x2);expect(_0x112d69['get'](_0x334c('0x5'))['fontScale'])[_0x334c('0x6')](0x3);});it(_0x334c('0x8'),()=>{_0x14bf01['OS']=_0x334c('0x9');const _0x4c2bf4={'width':0x190,'height':0x320,'scale':0x2,'fontScale':0x3};_0x112d69[_0x334c('0x3')]({'windowPhysicalPixels':_0x4c2bf4,'screenPhysicalPixels':_0x4c2bf4});expect(_0x112d69['get']('screen')[_0x334c('0xa')])['toEqual'](0xc8);expect(_0x112d69[_0x334c('0x4')](_0x334c('0xb'))[_0x334c('0x7')])['toEqual'](0x190);expect(_0x112d69[_0x334c('0x4')](_0x334c('0xb'))[_0x334c('0xc')])[_0x334c('0x6')](0x2);expect(_0x112d69[_0x334c('0x4')](_0x334c('0xb'))[_0x334c('0xd')])[_0x334c('0x6')](0x3);});it(_0x334c('0xe'),()=>{_0x14bf01['OS']=_0x334c('0xf');const _0x558152={'width':0x190,'height':0x320,'scale':0x2,'fontScale':0x3};_0x112d69[_0x334c('0x3')]({'windowPhysicalPixels':_0x558152});expect(_0x112d69[_0x334c('0x4')](_0x334c('0xb')))[_0x334c('0x6')](_0x112d69[_0x334c('0x4')](_0x334c('0x5')));});});