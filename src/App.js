// import logo from './logo.svg';
// import './App.css';
// import Grid from '@mui/material/Grid';
import TopAppBar from "./components/TopAppBar";
import Content from "./components/Content";
import BottomAppBar from "./components/BottomAppBar";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TopAppBar />
      <Content />
      <BottomAppBar />
    </div>
  );
}

export default App;
