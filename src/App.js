import logo from './logo.svg';
import './App.css';
import TestComponent from './containers/newTestComponent';
import AnotherTestComponent from './containers/anotherOneComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Create a new project?
        </p>
        <button className='buttonOK'>
          YES
        </button>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      test
      <TestComponent />
      <AnotherTestComponent />

    </div>
  );
}

export default App;
