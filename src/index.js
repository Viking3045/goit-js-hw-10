import './css/styles.css';
import { getrCountries } from './fetchCountries';
import {renderCountries, renderCountry} from './countries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';
const DEBOUNCE_DELAY = 300;


const input = document.querySelector('#search-box')
input.addEventListener('input',debounce(e => {
    e.preventDefault;
    const searchValue = input.value.trim(); 
    getrCountries(searchValue).then(data => {
     if (data.length === 1) {                
         renderCountry(data);    
            };

            if (data.length > 1 && data.length <= 10) {
                renderCountries(data);
            };

            if (data.length > 10) { 
                Notify.info("Too many matches found. Please enter a more specific name.");
            };
    }).catch(error =>Notify.failure(`Oops, there is no country with that name`));
},DEBOUNCE_DELAY,{
      leading: false,
    trailing: true,
      
}));
    

  