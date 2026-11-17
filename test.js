//DO NOT MODIFY THIS CODE....USED TO TEST YOUR FUNCTIONS
const test = (() => {
    const fontSize  = '20px';
    const passColor = '#00FF00';
    const failColor = '#FF0000';

    // Expected outputs are intentionally hidden — do not hardcode your answers.
    // Your functions must derive these values from the data.
    const _high   = ['One Minute','Half Measures','Full Measure','Salud','Crawl Space','End Times','Face Off','Ozymandias'];
    const _cast   = ['Skyler White','Marie Schrader','Lydia Rodarte-Quayle'];
    const _avg    = {1:8.07,2:8.17,3:8.23,4:8.27,5:8.06};
    const _lowest = {1:'Cancer Man',2:'Down',3:'Fly',4:'Open House',5:'Rabid Dog'};

    function check(label, actual, expected) {
        const ok = JSON.stringify(actual) === JSON.stringify(expected);
        console.log(
            ok
                ? `%cFUNCTION ${label} is CORRECT`
                : `%cFUNCTION ${label} is INCORRECT\n\tExpected ${JSON.stringify(expected)}\n\tGot      ${JSON.stringify(actual)}`,
            `color: ${ok ? passColor : failColor}; font-size: ${fontSize};`
        );
    }

    return {
        run(highInput, castInput, avgInput, lowestInput) {
            check('getHighRatedEpisodes',        highInput,   _high);
            check('getCastMemberNames',           castInput,   _cast);
            check('getAverageRatingBySeason',     avgInput,    _avg);
            check('getLowestRatedEpisodePerSeason', lowestInput, _lowest);
        }
    };
})();
