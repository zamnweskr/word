# Word?!

A Candy Crush-style word puzzle game built with React and Redux Toolkit.

## How to Play

1. Click a tile to select it
2. Click an adjacent tile to swap them
3. Form words from the target list (horizontal or vertical)
4. Matched words disappear and new tiles drop in
5. Find all words before time runs out!

## Features

- **Tile Swapping** - Swap adjacent tiles to form words
- **Word Detection** - Automatically detects horizontal and vertical words
- **Cascade System** - Matched tiles disappear, remaining tiles drop, new tiles fill in
- **Target Words** - Random word selection for each game
- **Timer** - Race against the clock
- **Win Modal** - Celebration when all words are found
- **Play Again** - Reset and start fresh with new words

## Tech Stack

- React 19
- Redux Toolkit
- Vite
- Reactstrap / Bootstrap
- Firebase Hosting

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Live Demo

Deployed on Firebase Hosting

https://word-cc6ad.web.app

Git repo

https://github.com/zamnweskr/word

## Project Structure

```
src/
├── app/
│   ├── assets/        # Letter tile images
│   ├── components/    # React components (Grid, TargetWords, GameTimer, etc.)
│   ├── features/      # Redux slices
│   ├── shared/        # Word lists
│   └── utils/         # Grid generation, word detection, helpers
├── App.jsx            # Main game logic
└── main.jsx           # Entry point
```
