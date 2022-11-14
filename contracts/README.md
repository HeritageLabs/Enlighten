# Legacy Contract

Contract on [tronscan](https://shasta.tronscan.org/?_ga=2.7234746.980462762.1668128383-558968841.1668128383#/contract/TGNNQbUshY9Y7aC7tr4XBS7USKDSxj1HCq/code)

How to run locally

- Create .env file and add your private key

### Install tronbox

```bash
npm i -g tronbox
```

### Compile

```bash
tronbox compile
```

### Deploy

```bash
source .env && tronbox migrate --network shasta
```
