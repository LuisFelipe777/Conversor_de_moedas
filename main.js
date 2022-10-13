const url = 'http://economia.awesomeapi.com.br/json/last/';

const inputValue = document.querySelector("#input-valor");
const titleCoinOne = document.querySelector(".titles-coins-1");
const titleCoinTwo = document.querySelector(".titles-coins-2");
const valueOne = document.querySelector(".valueOne");
const valueTwo = document.querySelector(".valueTwo");

const selectOne = document.querySelector("#selectTwo");
const selectTwo = document.querySelector("#selectOne");
let coinSelect1;
let coinSelect2;
let coinParament;

function setCoinSelected() {
    coinSelect1 = selectOne.options[selectOne.selectedIndex].value;
    coinSelect2 = selectTwo.options[selectTwo.selectedIndex].value;
}
setCoinSelected();

function updateDisplay(valueCoin, nameCoin, nameCoinConvert, inputValue) {
    titleCoinOne.innerText = nameCoin;
    titleCoinTwo.innerText = nameCoinConvert;
    valueOne.innerText = parseFloat(inputValue).toFixed(2);
    valueTwo.innerText = (parseFloat(valueCoin) * parseFloat(inputValue)).toFixed(2);
}

function convertCoin() {
    if (coinSelect1 === coinSelect2) {
        alert("Insira duas moedas diferentes");
        return;
    }
    if (inputValue.value == "") {
        alert("Insira um valor a ser convertido");
        return;
    }
    axios.get(`${url}${coinSelect2}-${coinSelect1}`).then(response => {
        const data = response.data;
        const objData = Object.values(data);
        updateDisplay(objData[0].ask, (objData[0].code), (objData[0].codein), inputValue.value);
    }).catch(error => console.log(error));
}

