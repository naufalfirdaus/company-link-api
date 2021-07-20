var crypto = require('crypto');

var mykey = crypto.createDecipher('aes-256-cbc', 'mypassword');
var mystr = mykey.update('76cb53a0abefa8027bdbb30b0652db5190db7f15', 'hex', 'sha1')
mystr += mykey.final('sha1');

console.log(mystr);