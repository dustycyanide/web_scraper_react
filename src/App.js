import logo from './logo.svg';
import './App.css';
import LinkSubmitter from './components/LinkSubmitter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <LinkSubmitter />
        </div>
      </header>
    </div>
  );
}

export default App;
