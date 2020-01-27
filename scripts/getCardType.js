import { typeCard } from '../constants/cardTypes';

let input = {
    numberCardValue: 0,
    typeCardBlock: ''
}

export const onkeyupValue = (e) => {
    let {numberCardValue, typeCardBlock} = input;
    numberCardValue = e.target.value;
    typeCardBlock = document.querySelector(`.${e.target.name}`);
    if(numberCardValue == ''){
        typeCardBlock.innerHTML = '';
    }
    getTypeCard();
}

[...document.querySelectorAll('.card_number-inpt')].map(element => {
    element.onkeyup = onkeyupValue;
})


export const getTypeCard = () => {
    typeCard.forEach((value, key) => {
        if(input.numberCardValue == key){
             render(value);
        };
    });
};

export const render = (value) => {
    let typeCardImg = `<img src=${value} alt='type card'>`;
    input.typeCardBlock.innerHTML = '';
    input.typeCardBlock.insertAdjacentHTML('beforeEnd', typeCardImg);
};
