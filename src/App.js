import './App.css';
import {NavBar} from './components/NavBar/NavBar.js';

function App() {
  const NameApp = 'BikO';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a {NameApp}</h1>
        <p>Ale Piñeiro</p>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
