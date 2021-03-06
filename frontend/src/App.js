import React from 'react'
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header';
import './bootstrap.min.css';
import Homescreen from './screens/Homescreen';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
    <Header/>
    <main className= 'py-3'>
      <Container>
        <Route path="/" component={Homescreen} exact />
        <Route path="/product/:id" component={ProductScreen}/>
      </Container>
      </main>

     <Footer></Footer>
    </Router>
    
  );
}

export default App;
