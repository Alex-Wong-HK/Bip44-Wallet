
## Mnemonic
<hr>

Generate Mnemonic
```
const mnemonic = generateMnemonic()
```

Generate Wallet By Mnemonic
```
const wallet_EVM = genBIP44WalletFromMnemonic(BLOCKCHAIN.EVM, mnemonic)
const wallet_TRON = genBIP44WalletFromMnemonic(BLOCKCHAIN.TRON, mnemonic)
```

Get Wallet By Mnemonic
```
const accountId = 82707355
const indexId = 91770953
const wallet_EVM = getBIP44WalletFromMnemonic(BLOCKCHAIN.EVM, mnemonic, accountId, indexId)
const wallet_TRON = getBIP44WalletFromMnemonic(BLOCKCHAIN.TRON, mnemonic, accountId, indexId)
```

## Entropy
<hr>

Generate Entropy
```
const entropy = generateEntropy()
```

Generate Wallet By Entropy
```
const wallet_EVM = genBIP44WalletFromEntropy(BLOCKCHAIN.EVM, entropy)
const wallet_TRON = genBIP44WalletFromEntropy(BLOCKCHAIN.TRON, entropy)
```

Get Wallet By Entropy
```
const accountId = 82707355
const indexId = 91770953
const wallet_EVM_entropy = getBIP44WalletFromEntropy(BLOCKCHAIN.EVM, entropy, accountId, indexId)
const wallet_TRON_entropy = getBIP44WalletFromEntropy(BLOCKCHAIN.TRON, entropy, accountId, indexId)
```


## Converter
<hr>

Entropy To Mnemonic
``` 
const mnemonic = entropyToMnemonic(entropy)
```

Mnemonic To Entropy
``` 
const entropy = mnemonicToEntropy(mnemonic)
```
