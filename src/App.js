import logo from './datalinc.png';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>Datalinc</code>. <br></br>Website coming soon.
        </p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
