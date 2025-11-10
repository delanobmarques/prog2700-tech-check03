//NOTE: You are NOT permitted to use FOR, FOREACH, or WHILE loops of any kind.
//      You must leverage the available JavaScript Array Iteration Functions to accomplish your goal.
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

// MARKING
// 10/10 - Function is completed to spec and submitted within class time
//  8/10 - Function is completed to spec and submitted within a grace period of twelve hours of the end of class time
//  6/10 - Function is completed to spec and submitted after a twelve-hour grace period
//  0/10 - Function is not completed


(function(test){

    fetch(`https://countries-data-zclf.onrender.com/countries`)
        .then(response => response.json())
        .then(json => {
            //DO NOT MODIFY THIS CODE
            const populationResult = getPopulation(json);
            const countriesResult = findHighPopulationCountries(json);
            document.write(`<h3>The total population of countries that border China and list English as an official language is ${populationResult}</h3>`)
            document.write(`<h3>Countries in Europe with a population greater than 85 million: ${countriesResult.join(', ')}</h3>`)            
            test.run(populationResult, countriesResult) // will output test result to browser console
        })

    // WRITE YOUR getPopulation and findHighPopulationCountries FUNCTIONS BELOW
    // |           |             |           |
    // V           V             V           V
    
    
    

})(test);

