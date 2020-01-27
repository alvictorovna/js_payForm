import { config } from '../../config'

export const changeColorBtn = (function(){
    document.querySelector('.form__button input').style.background = config.colorTranslateBtn;
})();
