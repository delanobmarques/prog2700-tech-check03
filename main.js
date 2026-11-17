//NOTE: You are NOT permitted to use FOR, FOREACH, or WHILE loops of any kind.
//      You must leverage the available JavaScript Array Iteration Functions to accomplish your goal.
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

// MARKING
// 10/10 - Functions are completed to spec and submitted within class time
//  8/10 - Functions are completed to spec and submitted within a grace period of twelve hours of the end of class time
//  6/10 - Functions are completed to spec and submitted after a twelve-hour grace period
//  0/10 - Functions are not completed


(function(test){

    fetch(`https://api.tvmaze.com/shows/169?embed[]=episodes&embed[]=cast`)
        .then(response => response.json())
        .then(json => {
            const episodes = json._embedded.episodes;
            const cast     = json._embedded.cast;

            //DO NOT MODIFY THIS CODE
            const highRatedResult  = getHighRatedEpisodes(episodes);
            const castNamesResult  = getCastMemberNames(cast);
            const avgRatingResult  = getAverageRatingBySeason(episodes);
            const lowestResult     = getLowestRatedEpisodePerSeason(episodes);

            const h3High = document.createElement('h3');
            h3High.textContent = `Episodes rated 9.0 or above: ${highRatedResult.join(', ')}`;
            document.body.appendChild(h3High);

            const h3Cast = document.createElement('h3');
            h3Cast.textContent = `Female cast character names: ${castNamesResult.join(', ')}`;
            document.body.appendChild(h3Cast);

            const h3Avg = document.createElement('h3');
            h3Avg.textContent = `Average episode rating by season: ${JSON.stringify(avgRatingResult)}`;
            document.body.appendChild(h3Avg);

            const h3Low = document.createElement('h3');
            h3Low.textContent = `Lowest rated episode per season: ${JSON.stringify(lowestResult)}`;
            document.body.appendChild(h3Low);

            test.run(highRatedResult, castNamesResult, avgRatingResult, lowestResult);
        })

    // WRITE YOUR FUNCTIONS BELOW — in the order listed here
    // |           |             |           |
    // V           V             V           V

    // 1. getHighRatedEpisodes(episodes)    
    //    - Returns episode NAMES for all episodes with an
    //      average rating of 9.0 or above, in the order they appear in the data    

    // 2. getCastMemberNames(cast)
    //    - Returns CHARACTER names for all female cast members,
    //      in the order they appear in the data    
    //    - Note: this dataset contains the main cast only (11 members total)

    // 3. getAverageRatingBySeason(episodes)
    //    - Returns a plain object where each key is a season number and each value is
    //      the average episode rating for that season, rounded to two decimal places
    //    - Expected shape: { 1: 8.07, 2: 8.17, 3: 8.23, 4: 8.27, 5: 8.06 }

    // 4. getLowestRatedEpisodePerSeason(episodes)
    //    - Returns a plain object where each key is a season number and each value is
    //      the NAME of the lowest-rated episode in that season
    //    - Expected shape: { 1: 'Cancer Man', 2: 'Down', ... }

})(test);
