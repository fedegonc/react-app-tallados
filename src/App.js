import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/Button';
import Header from './components/organisms/Header';

function App() {
  return (
    <div className="App">
      
      <Header />

        {/* Navbar */} 
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save hola mundo este es el gato de shrodinger to reload.
        </p>
        <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

export default App;
