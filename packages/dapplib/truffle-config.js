require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain collect grace beauty food gift'; 
let testAccounts = [
"0x1079d242e76e4bc2b3dbee6ee2c927b6c4d6be273fc06ac48701be79c458c589",
"0x448767a9347418a84dfdf8e0cf6a31512b971a8f2f69dd7585ad37fcbbe43066",
"0xb109f82903a333b3e30bc12f64fc3c67b3eb133a3593966851ec9bb585054880",
"0xc784897ff97c5739d6211a1f7d47ee6284fa059a7eda37718e4dbd0ebaaf2583",
"0xbbfc260e171b5ab9526e1b79db02a1db79c92dc5a75de34009c71adcc8a487ab",
"0x7c99e30422d3541c60e665d90958dc2839890b5cc6f711fc1d9a3b2f302c436e",
"0x0de5889907e546a308838941075aa6a143309ff441104476d0481f4761728a19",
"0x9d09cd15c260efe11939f1abd0b47279bc42da0a49fe7108c040e92a06184ff1",
"0xaeb28be5c833316f34e1fceb7b66c645b3ae2c4867cbfc5337c86b5255243185",
"0xbb784675418ae9f4af5d3b749b74a776b08e55fedf82a6063209c4f2fb6f4586"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
