import {BLOCKCHAIN, IWallet} from "./interface";

const bip39 = require('bip39')
const TronWeb = require("tronweb");
import _ from "lodash";
import { ethers } from "ethers";


function getBIP44WalletFromEntropy(eco: BLOCKCHAIN,entropy:string,accountId:number,indexId:number):IWallet{
    const mnemonic = bip39.entropyToMnemonic(entropy)
    return getBIP44WalletFromMnemonic(eco,mnemonic,accountId,indexId)
}

function getBIP44WalletFromMnemonic(eco: BLOCKCHAIN,mnemonic:string,accountId:number,indexId:number):IWallet{
    let path;
    let publicKey;
    let privateKey;
    let address;
    let wallet;
    switch (eco) {
        case BLOCKCHAIN.EVM:
            path = `m/44'/60'/${accountId}'/0/${indexId}`;
            wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
            publicKey = wallet.publicKey;
            privateKey = wallet.privateKey;
            address = wallet.address;
            break;
        case BLOCKCHAIN.TRON:
            path = `m/44'/195'/${accountId}'/0/${indexId}`;
            wallet = TronWeb.fromMnemonic(mnemonic, path);
            publicKey = wallet.publicKey;
            privateKey = wallet.privateKey;
            address = wallet.address;
            break;
    }
    return {
        eco,
        publicKey,
        privateKey,
        address,
        accountId,
        indexId
    }
}


function genBIP44WalletFromEntropy(eco: BLOCKCHAIN,entropy:string):IWallet{
    const mnemonic = bip39.entropyToMnemonic(entropy)
    const wallet:IWallet = genBIP44WalletFromMnemonic(eco,mnemonic)
    return wallet
}
function genBIP44WalletFromMnemonic(eco: BLOCKCHAIN,mnemonic:string):IWallet{
    let accountId = _.random(0, 99999999);
    let indexId = _.random(0, 99999999);
    return getBIP44WalletFromMnemonic(eco,mnemonic,accountId,indexId)
}


function generateMnemonic(){
    return bip39.generateMnemonic()
}

function mnemonicToEntropy(mnemonic:string){
    const entropy = bip39.mnemonicToEntropy(mnemonic)
    return entropy
}

function generateEntropy(){
    const mnemonic = bip39.generateMnemonic()
    const entropy = bip39.mnemonicToEntropy(mnemonic)
    return entropy
}

function entropyToMnemonic(entropy:string){
    const mnemonic = bip39.entropyToMnemonic(entropy)
    return mnemonic
}


export {genBIP44WalletFromEntropy,genBIP44WalletFromMnemonic,generateMnemonic,mnemonicToEntropy,generateEntropy,entropyToMnemonic,getBIP44WalletFromEntropy,getBIP44WalletFromMnemonic}
