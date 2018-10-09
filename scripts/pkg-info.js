var pkg = require('../package.json')

// 兼容 base 和 @jsmini/base，@jsmini/base 替换为 jsmini_base
var name = pkg.name.replace('@', '').replace(/\//g, '_')
var version = pkg.version

var banner = 
`/*
 * flexshare v${version} (https://github.com/lianhr12/flexshare)
 * docs https://github.com/lianhr12/flexshare/blob/6d5a7b90802cbd3f07994e3b7e880bd69094b5a2/docs/flexShare.md
 * Copyright 2017-${(new Date).getFullYear()} flexshare. All Rights Reserved
 * Licensed under MIT (https://github.com/lianhr12/flexshare/master/LICENSE)
 */
`;

exports.name = name
exports.banner = banner