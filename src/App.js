import logo from './logo.svg';
import './App.css';
import Singlecomponent from './examples/Singlecomponent.jsx';
import Multiplecomponents from './examples/Multiplecomponents.jsx';
import Fruits from './examples/Hybridcomponents.jsx';
import Bio from './examples/Bio.jsx';

import './bio.css'

function App() {
  return (
    <div className="App">
      <h1>Components</h1>

      <Singlecomponent/>

      <Multiplecomponents/>
 
      <Fruits/>
      <Fruits/>

      <h1>CSS</h1>
      <Bio/>

    </div>
  );
}

export default App;
