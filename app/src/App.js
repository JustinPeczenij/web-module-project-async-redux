import './App.css';
import Quotes from './Components/Quotes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'http://clipart-library.com/image_gallery2/Kanye-West-PNG.png'} className="App-logo" alt="logo" />
        <h1> Yeezy Said... </h1>
        <img src={'http://clipart-library.com/image_gallery2/Kanye-West-PNG.png'} className="App-logo" alt="logo" />
      </header>
      <Quotes />
    </div>
  );
}

export default App;
