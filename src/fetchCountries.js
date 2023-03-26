export const getrCountries = (search) => {
    return fetch(`https://restcountries.com/v3.1/name/${search}?fields=name,name.official,capital,population,flags,languages`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
      
    })
   
};

