 const renderCountry = (collection) => {
    const countriesContainer = document.querySelector(`.country-list`);
    countriesContainer.innerHTML = '';
    const countries = collection.map(name => {
        const li = document.createElement('li');
        li.classList.add('countries-item');
        
        const wrapper = document.createElement('div');
        wrapper.classList.add('countries-wrapper');
        li.append(wrapper);

        const div = document.createElement('div');
        div.classList.add('countries-div');
        wrapper.append(div);

        const img = document.createElement('img');
        img.classList.add('countries-img');
        img.src = `${name.flags.svg}`;
        img.alt = `${name.name.official}`;
        div.append(img);

        const title = document.createElement('h2');
        title.classList.add('countries-title');
        title.textContent = name.name.official;
        wrapper.append(title);

        const capital = document.createElement('p')
        capital.classList.add('countries-capital');
        capital.textContent = `capital: ${name.capital}`;
        li.append(capital);

         const population = document.createElement('p')
        population.classList.add('countries-population');
        population.textContent = `population: ${name.population}`;
        li.append(population);

         const languages = document.createElement('p')
        languages.classList.add('countries-languages');
        languages.textContent = `languages: ${Object.values(name.languages).join(', ')}`;
        li.append(languages);

        return li
    }) 
    countriesContainer.append(...countries)
}
 const renderCountries = (collection) => {
    const countriesContainer = document.querySelector(`.country-list`);
    countriesContainer.innerHTML = '';
    const countries = collection.map(name => {
         const li = document.createElement('li');
        li.classList.add('countries-item');
        
        const wrapper = document.createElement('div');
        wrapper.classList.add('countries-wrapper');
        li.append(wrapper);

        const div = document.createElement('div');
        div.classList.add('countries-div');
        wrapper.append(div);

        const img = document.createElement('img');
        img.classList.add('countries-img');
        img.src = `${name.flags.svg}`;
        img.alt = `${name.official}`;
        div.append(img);

        const title = document.createElement('h2');
        title.classList.add('countries-title');
        title.textContent = name.name.official;
        wrapper.append(title);
         return li
    }) 
    countriesContainer.append(...countries)
}

export {renderCountries, renderCountry}