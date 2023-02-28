import './App.css';
import { Route } from 'react-router-dom'
import Country from './components/country/country';
import Landing from './components/landing/landing';
// import CountryCard from './components/countryCard/countryCard';
import CountryDetail from './components/countryDetail/countryDetail';
import Form from './components/form/form';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className="App">
      <Route path='/landing' component={Landing} />
      <Route path='/countries' component={NavBar} />
      <Route path='/countries' component={Country} />
      <Route path='/detail/:id' component={CountryDetail} />
      <Route path='/form' component={Form} />
    </div>
  );
}

export default App;
