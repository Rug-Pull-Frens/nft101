# Rug Pull Frens - NFT 101
## 課程介紹
https://www.facebook.com/RobotAI521/posts/4901417409901785

## Deploy Contract Instructions:
1. Install Node.js
2. Download RPF Contract repo
3. Install Package for RPF contract
```shell
npm install
```
4. Setup .env file
* 請自行申請Infura、Etherscan的API KEY並填入
* WALLET_PRIVATE_KEY為錢包的私鑰（[metamask教學](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key)）
* 如果rinkeby測試幣不夠，請至佛心的[chainlink](https://faucets.chain.link/rinkeby)輸入地址申請
```shell
INFURA_ENDPOINT=
ETHERSCAN_API_KEY=
WALLET_PRIVATE_KEY=
```
5. Compile and deploy Contract to Rinkeby testnet
```shell
npx hardhat run scripts/deploy.ts --network rinkeby
```
6. when your contract is deplyed, verify code on etherscan
* DEPLOYED_CONTRACT_ADDRESS要填入剛才部署完成的合約地址
```shell
npx hardhat verify --network rinkeby DEPLOYED_CONTRACT_ADDRESS
```

## Metadata Generation
1. 上傳圖片至雲端或是[ipfs](https://www.pinata.cloud/)
2. 開啟Colab，載入Metadata Generation.ipynb
3. 設定好metadata後，一樣將metadata上傳至雲端或是ipfs
4. 與合約互動，執行write contract的setURI功能，填入metadata的網址


## Feel free to ask for help
contact Mosano at discord if you have any questions.
Happy coding!
