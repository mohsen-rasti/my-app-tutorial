import './App.css';
import Navbar from "./Component/Layout/Navbar";
import Footer from "./Component/Layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
//router dom
import {Switch,Route} from 'react-router-dom';

//import pages
import Contacts from './Component/Pages/Contacts';
import Details from './Component/Pages/Details';
import NotFoundPage from './Component/Pages/NotFoundPage';
import News from './Component/Pages/News';
import Home from './Component/Pages/Home';



function App() {
  return (
    <>
<Navbar />
<Switch>
  <Route path="/home" component={Home}/>
  <Route path="/news" component={News}/>
  <Route path="/contacts" component={Contacts}/>
  <Route path="/details" component={Details}/>
  <Route path="/notfoundpages" component={NotFoundPage}/>
</Switch>
<Footer />
    </>
  );
}

export default App;
