import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Routes ,Route } from 'react-router-dom';
import CreateDaoBuilder from './CreateDaoBuilder';
function App() {
  return (
    <>
    <Header />
    <Routes>
      {/* <Route path="/message" exact element={<Message/>} /> */}
      <Route path="/create-dao" exact element={<CreateDaoBuilder/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
 </>
  );
}

export default App;
