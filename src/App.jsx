import logo from './logo.svg';
import './App.css';
import XML from './xml.json';
import Main from './Main'

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;

// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <ul>
    //       { XML.response.add_update_list.meta_data.length}
    //     </ul>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
