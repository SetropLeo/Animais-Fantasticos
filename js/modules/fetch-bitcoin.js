export default function fetchBitcoin(url, target) {
  console.log('teste')
  fetch(url)
    .then((responsebtc) => responsebtc.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    }).catch((erro) => console.log(Error(erro)));
}
