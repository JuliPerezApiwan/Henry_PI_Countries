import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/home'
import CountryDetail from './components/CountryDetail/countryDetail';
import Form from './components/ActivitiesForm/activitiesForm'

function App() {
  return (
    <div className="App">
      <Route path='/home' component={Home}/>
      <Route path='/countries/:id' component={CountryDetail} />
      <Route path='/form' component={Form} />
    </div>
  );
}

export default App;
