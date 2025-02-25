//DO NOT MODIFY THIS CODE IN ANY WAY....USED TO TEST YOUR getPopulation and findHighPopulationCountries FUNCTIONS
const test = {
    fontSize: '20px',
    passColor: '#00FF00',
    failColor: '#FF0000',
    correctOutputPopulation: 1608378516,
    correctOutputCountries: ["Russian Federation"], // Example expected output
    run: function(populationInput, countriesInput) {
        const displayPopulationInput = populationInput === '' ? 'an Empty String' : populationInput;
        const displayCountriesInput = Array.isArray(countriesInput) && countriesInput.length > 0 ? countriesInput.join(', ') : 'an Empty Array or Undefined';

        if(populationInput === this.correctOutputPopulation) {
            console.log(
                `%cFUNCTION getPopulation is CORRECT`, 
                `color: ${this.passColor}; font-size: ${this.fontSize};`
            );
        } else {
            console.log(
                `%cFUNCTION getPopulation is INCORRECT\n\tExpected ${this.correctOutputPopulation} but got ${displayPopulationInput}`,
                `color: ${this.failColor}; font-size: ${this.fontSize};`
            );
        }

        if(Array.isArray(countriesInput) && JSON.stringify(countriesInput) === JSON.stringify(this.correctOutputCountries)) {
            console.log(
                `%cFUNCTION findHighPopulationCountries is CORRECT`, 
                `color: ${this.passColor}; font-size: ${this.fontSize};`
            );
        } else {
            console.log(
                `%cFUNCTION findHighPopulationCountries is INCORRECT\n\tExpected ${this.correctOutputCountries.join(', ')} but got ${displayCountriesInput}`,
                `color: ${this.failColor}; font-size: ${this.fontSize};`
            );
        }
    }
}
