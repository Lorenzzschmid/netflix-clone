import './App.css';
import Row from './components/Row';
import requests from "../src/request"; 

function App() {
  return (
    <div className="App">
     <h1>Hi, we'll try to do it today</h1>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     
    </div>
  );
}

export default App;
