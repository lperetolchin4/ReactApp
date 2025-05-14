import logo from './logo.svg';
import './App.css';
import TestComponent from './containers/newTestComponent';
import AnotherTestComponent from './containers/anotherOneComponent';
import ClassComponent from './containers/classComponent';
import CurrentDate from './containers/CurrentDate';
import CurrentTime from './containers/CurrentTime';
import react from 'react';
import Writers from './containers/Writers';
import Writer from './containers/Writers/components/writer';
import Form from './containers/Form';

function App() {
  const someFunc = (value) => {
    alert(value)
  }

  const someFunc1 = (value) => {
    console.log(value)
  }
  return (
    <>
    <AnotherTestComponent title={'button'} color={'grey'}/>
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
        <Form />

        current time
        <Writers />
        <TestComponent title={"button 1"} color={'red'} onclick={someFunc}/>
        <TestComponent title={"button 2"} color={'pink'} onclick={someFunc1}/>
        <TestComponent title={"button 3"} color={'black'}/>
        <TestComponent title={"button 4"} color={'green'}/>
        
        <ClassComponent startValue={3} incValue={5}/>

      </div>
      <div style={{background:'black', fontSize:'50px', color:'red', border:'solid 10px green', borderRadius:'3px'}}> no class </div>
      <CurrentDate color={'red'}/>
      <CurrentDate color={'green'}/>

      <CurrentTime color={''}/>
    </>

  );
}

export default App;
