export enum BLOCKCHAIN {
    TRON='TRON',
    EVM='EVM'
}

export interface IWallet{
    eco:BLOCKCHAIN
    publicKey:string
    privateKey:string
    address:string
    accountId:number
    indexId:number
}
