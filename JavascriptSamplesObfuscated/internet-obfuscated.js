var _0x3fe6=['NODE_TEST_','env','exports','8.8.8.8','2001:4860:4860::8888','something.invalid','nodejs.org','8.8.8.8.in-addr.arpa','sip2sip.info','blog.nodejs.org','keys'];(function(_0x10003e,_0x38920c){var _0x17b3ec=function(_0x40f41b){while(--_0x40f41b){_0x10003e['push'](_0x10003e['shift']());}};_0x17b3ec(++_0x38920c);}(_0x3fe6,0xb3));var _0x2433=function(_0x170c35,_0x43a867){_0x170c35=_0x170c35-0x0;var _0x3fafee=_0x3fe6[_0x170c35];return _0x3fafee;};/* eslint-disable node-core/required-modules */
'use strict';// Utilities for internet-related tests
const addresses={'INET_HOST':'nodejs.org','INET4_HOST':'nodejs.org','INET6_HOST':'nodejs.org','INET4_IP':_0x2433('0x0'),'INET6_IP':_0x2433('0x1'),'INVALID_HOST':_0x2433('0x2'),'MX_HOST':_0x2433('0x3'),'SRV_HOST':'_jabber._tcp.google.com','PTR_HOST':_0x2433('0x4'),'NAPTR_HOST':_0x2433('0x5'),'SOA_HOST':_0x2433('0x3'),'CNAME_HOST':_0x2433('0x6'),'NS_HOST':'nodejs.org','TXT_HOST':'nodejs.org','DNS4_SERVER':'8.8.8.8','DNS6_SERVER':'2001:4860:4860::8888'};for(const key of Object[_0x2433('0x7')](addresses)){const envName=_0x2433('0x8')+key;if(process['env'][envName]){addresses[key]=process[_0x2433('0x9')][envName];}}module[_0x2433('0xa')]={'addresses':addresses};