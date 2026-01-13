Letter Matching Game - Project Roadmap

Game Overview

A Candy Crush-style word puzzle game where players swap adjacent letters in a 6x6 grid to form words horizontally or vertically. When a valid 4+ letter word is formed, it's removed from the grid, new letters drop down, and play continues until time runs out.

Game Specifications

    Grid Size: 6x6 (36 letters)

    Interaction: Click two adjacent tiles to swap them

    Minimum Word Length: 4 letters

    Valid Directions: Horizontal and vertical only

    Game Mode: Timed - find as many words as possible before timer expires

    Scoring: Simple count + bonus for longer words

Phase 1: Grid Foundation & Data Structures

1.1 Grid Data Structure

    Design a 6x6 2D array structure to hold letter objects

    What letter is it? (A, B, C, etc.)

    Where is it located? (row 2, column 3?)

    What image should it show? (the picture from LETTERS.js)

    Each cell contains: letter, id, position {row, col}, image src, state

    Create initial state structure in main game component

    we want random letters in a 6x6

    Is it selected right now? (yes/no)

    Is it matched? (yes/no)

1.2 Game State Management

Set up state for: grid, selectedTile, score, foundWords, timer, gameStatus, isProcessing

Choose state management approach (useState/useReducer/Context)



Here's what we need to figure out:

1. The Grid
Your 6x6 grid of letters (that you just planned in 1.1)

2. Selected Tile
Which tile did the player click first? (need to remember it until they click the second tile)
Or is nothing selected right now?

3. Score
How many points does the player have?

4. Found Words
What words has the player found so far?
Do you want to keep a list of them?

5. Timer
How much time is left?

6. Game Status
Is the game not started yet?
Is it currently playing?
Is it game over?

7. Is Processing
Are letters currently animating/falling/matching?
(Important so player can't click during animations)

8. Game Win/Game Over
How do you win? points?
How can you lose? time runout? no words on screen?

9. Difficulty increase (after MVP)
increase word ceiling
keep time, maybe decrease?

1.3 Random Letter Generator
    The logic for the letter generator is fairly straightforward. Our first variable, 'vowels', is filtering through our LETTERS array that we have imported, and it is creating an array of vowels by checking if the letter object contains the property of 'vowel'

    We have done the same thing with our second variable, 'consonants'

    After initializing these two variables, we then call to a function that will give us a random letter, based on a ratio that we came up with of 60% consonants to 40% vowels. 
    
    Our first variable 'chosenLetters' uses a ternary operator. We ask it to give us a random number, and if it is less than 0.4 (40%), then it will pull from our 'vowels' array. If it is above 0.4 (60%) it will pull from our 'consonants' array. 
    
    Our next variable 'randomChosen' is set up to pull a random letter from either the 'vowels' or 'consonants' array, depending on what array was chosen to have a letter pulled from it.

    Finally, we return the letter that was randomly chosen, from a randomly chosen array of either consonants or vowels. The reasoning for this logic is to preventthe game from populating a bunch of letters that you can't make words from.

Phase 2: Core Components
2.1 LetterTile Component
Display individual letter image
Handle click events
Show different visual states (normal, selected, matched)
2.2 Grid Component
Render 6x6 grid of LetterTile components
Use CSS Grid/Flexbox for layout
Pass click handlers to tiles

Phase 3: Swap Mechanics
3.1 Tile Selection Logic
Click first tile to select it
Visual highlight on selected tile
Click again to deselect
3.2 Adjacency Validation
Check if two tiles are adjacent (up/down/left/right only)
No diagonal swaps allowed
3.3 Swap Execution
Click second adjacent tile to swap positions
If not adjacent, show feedback and deselect
Update grid state with swapped positions
3.4 Swap Animation
Smooth transition when tiles swap (200-300ms)
Lock input during animation

Phase 4: Word Detection & Validation
4.1 Dictionary Setup
Choose dictionary source (API, JSON file, or npm package)
Set up word validation function
4.2 Horizontal Word Scanner
Scan each row for 4, 5, and 6 letter sequences
Return found words with their positions
4.3 Vertical Word Scanner
Scan each column for 4, 5, and 6 letter sequences
Return found words with their positions
4.4 Word Validation
Check detected sequences against dictionary
Filter out invalid words
4.5 Post-Swap Word Check
After every swap, check if valid words formed
If yes → proceed to match resolution
If no → swap back to original positions (undo)

Phase 5: Match Resolution & Grid Refill
5.1 Highlight Matched Words
Visual highlight on matched letters
Brief pause so player can see the word
Display the word on screen temporarily
5.2 Remove Matched Letters
Clear matched letters from grid
Add word to foundWords list
Update score
Fade-out animation
5.3 Gravity System (Letters Fall)
Letters above empty spaces fall down
Falling animation
Process all columns
5.4 Generate New Letters
Fill empty top cells with new random letters
Spawn animation from top
5.5 Cascade Detection
Check for new words after letters drop
If found, repeat match resolution process
Continue until no new matches
Add combo multiplier (optional)

Phase 6: Timer & Scoring
6.1 Countdown Timer Component
Display remaining time (MM:SS format)
Change color when time is low (e.g., red under 30 seconds)
6.2 Timer Logic
Set initial duration (2-3 minutes)
Count down every second
Trigger game over when timer reaches 0
6.3 Scoring System
Define scoring rules:
Base points per word
Bonus for word length
Cascade multiplier (optional)
Calculate and update score when words matched
6.4 Score Display
Show current score
Show number of words found
List of recent/all words found

Phase 7: Game Flow & Polish
7.1 Game Over Screen
Display final score
Show all words found
Show longest word
"Play Again" button
7.2 Start Game Screen
Game title and instructions
"Start Game" button
Optional difficulty selection
7.3 Play Again Functionality
Reset grid, score, timer
Generate new random grid
Return to playing state
7.4 Game State Transitions
Manage flow: idle → playing → gameover
Control which components render based on state

Phase 8: Enhancements & Polish (Optional)
8.1 Sound Effects
Match sounds, swap sounds, timer warning, game over
8.2 Visual Polish
Particle effects, better animations, themed styling, responsive design
8.3 Additional Features
Hint system, power-ups, difficulty levels, leaderboard, daily challenge
8.4 Performance Optimization
Memoization, efficient re-renders

Recommended File Structure
src/app/
├── components/
│   ├── Grid.jsx
│   ├── LetterTile.jsx
│   ├── Timer.jsx
│   ├── ScoreBoard.jsx
│   ├── GameOver.jsx
│   └── StartScreen.jsx
├── utils/
│   ├── gridGenerator.js
│   ├── gridHelpers.js
│   ├── gridPhysics.js
│   ├── wordDetector.js
│   ├── dictionary.js
│   └── scoring.js
├── shared/
│   └── LETTERS.js (already exists)
└── data/
    └── words.json (if using local dictionary)


