<img width="150px" src="https://www.nscc.ca/img/aboutnscc/visual-identity-guidelines/artwork/nscc-jpeg.jpg" >

# PROG 2700 - Tech Check 3

**Value:** 7.5% of overall course mark  
**Time to complete:** 1 hour

## Array FUNctions

Using the data retrieved from the [TVMaze Breaking Bad API](https://api.tvmaze.com/shows/169?embed[]=episodes&embed[]=cast), implement the following four functions:

---

### 1. `getHighRatedEpisodes(episodes)`

Accepts the **episodes** array and returns an array of episode **names** (strings) for all episodes with an average rating of **9.0 or above**, in the order they appear in the data.

---

### 2. `getCastMemberNames(cast)`

Accepts the **cast** array and returns an array of **character names** (strings) for all **female** cast members, in the order they appear in the data.

> **Note:** This dataset contains the **main cast only** (11 members total).

---

### 3. `getAverageRatingBySeason(episodes)`

Accepts the **episodes** array and returns a plain object where each key is a **season number** and each value is the **average episode rating** for that season, rounded to **two decimal places**.

> **Expected shape:** `{ 1: 8.07, 2: 8.17, 3: 8.23, 4: 8.27, 5: 8.06 }`  

---

### 4. `getLowestRatedEpisodePerSeason(episodes)`

Accepts the **episodes** array and returns a plain object where each key is a **season number** and each value is the **name** of the lowest-rated episode in that season.

> **Expected shape:** `{ 1: 'Cancer Man', 2: 'Down', 3: 'Fly', 4: 'Open House', 5: 'Rabid Dog' }`  

---

### Requirements

You are NOT permitted to use FOR, FOREACH, or WHILE loops of any kind.  
You must leverage the available JavaScript Array Iteration Functions to accomplish your goal.  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

### Submission Instructions

Once your program is complete, or if you run out of in-class time to complete the Tech Check, commit and push your code to GitHub with the commit message **"EndOfClass"**

If you complete the Tech Check outside of class time, commit and push your subsequent code additions and changes with the message **"ReadyForMarking"**

### Marking Scheme

Final Grade | Requirement
:---: | ---
|**10/10** | Tech check is correct (passes all tests) and is completed within the allotted in-class time.
|**8/10** | Tech check is correct (passes all tests) and is completed within a 12-hour grace period beginning immediately following the end of in-class time.
|**6/10** | Tech check is correct (passes all tests) and is completed and submitted after the 12-hour grace period has elapsed.
|**0/10** | Tech check is not submitted or does not pass all tests.
