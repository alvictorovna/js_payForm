import { config } from '../../config';

export const changeCurrency = (function(){
    [...document.querySelectorAll('.transfer__currency')].map(element => {
        element.insertAdjacentHTML('beforeEnd', config.currency);
    });
})()