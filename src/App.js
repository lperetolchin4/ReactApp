import logo from './logo.svg';
import './App.css';
import TestComponent from './containers/newTestComponent';
import AnotherTestComponent from './containers/anotherOneComponent';
import ClassComponent from './containers/classComponent';
import CurrentDate from './containers/CurrentDate';
import CurrentTime from './containers/CurrentTime';
import react from 'react';

function App() {
  const someFunc = (value) => {
    alert(value)
  }
  return (
    <>
    <AnotherTestComponent />
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

        current time
        <TestComponent title={"button 1"} color={'red'} onclick={someFunc}/>
        <TestComponent title={"button 2"} color={'pink'}/>
        <TestComponent title={"button 3"} color={'black'}/>
        <TestComponent title={"button 4"} color={'green'}/>
        
        <ClassComponent />

      </div>
      <div> no class </div>
      <CurrentDate />
      <CurrentTime />
    </>

  );
}

export default App;
