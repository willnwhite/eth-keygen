var EthUtil = require("ethereumjs-util")
var Web3 = require("web3")
var uuidV4 = require('uuid/v4');

var randomString = uuidV4()

var web3 = new Web3

var hexToBytes = function (hex) {
  for (var bytes = [], c = 0; c < hex.length; c+=2)
  bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

var privateKeyToAddress = function (privateKey) {
  return `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString("hex")}`
}

var stringToPrivateKey = function (seed) {
  return web3.sha3(seed)
  .slice(2) // takes off 0x
}

var privateKey = stringToPrivateKey(randomString)

console.log(`private key: ${privateKey}\naddress: ${privateKeyToAddress(privateKey)}`);
