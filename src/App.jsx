import Grid from './app/components/grid.jsx';
import './App.css'
import './index.css'
import gridGenerator from './app/utils/gridGenerator.js';

function App() {
  gridGenerator()
  return (
    <Grid />
  )
}

export default App