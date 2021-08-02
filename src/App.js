import './App.css';
import SearchBar from './containers/SearchBar';
import CityInfo from './containers/CityInfo';

function App() {
  return (
    <div className="container">
      <SearchBar />
      <CityInfo />
    </div>
  );
}

export default App;
