const bip39 = require('bip39')
const ethers = require('ethers');
const fs = require("fs");

function writeToFile(data){
    fs.appendFile('./mnemonics.txt',data,err =>{
        if(err) throw err;
    })
}

function generateMnemonic(){
    writeToFile("Two mnemonics are :\n")
    const mnemonics = []
    for(i = 0;i < 2; i++){
        const localMnemonic = bip39.generateMnemonic()        
        mnemonics.push(localMnemonic)     
        writeToFile(localMnemonic +  "\n")   
    }    
    //console.log(mnemonics)
    return mnemonics
}

function generateAddress(mnemonics){    
    const address = []
    len = mnemonics.length
    for(i = 0; i < len; i++){
        walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic[i])
        address.push(walletMnemonic)
        writeToFile("The private key is: " + walletMnemonic.privateKey + " and The public key is: " + walletMnemonic.address + "\n")         
    }
    return address
}

//Generate 2 random 12 word mnemonics
mnemonic = generateMnemonic()
console.log("Generated Mnemonics are: \n",mnemonic)

//Generate 2 ethereum addresses derived from each of the mnemonics
address = generateAddress(mnemonic)
console.log("The first wallet address is: " ,address[0].address , "\nThe Second address wallet is: ",address[1].address)
console.log("The first private key is: " ,address[0].privateKey , "\nThe Second private key is: ",address[1].privateKey)