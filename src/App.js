import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Routes>
      {/* <Route path="/message" exact element={<Message/>} /> */}
      {/* <Route path="/photos" exact element={<Photos/>} /> */}
      <Route path="/" element={<Home/>} />
    </Routes>
 </>
  );
}

export default App;
