import './App.css';
import {Component} from "react"
import {Route, Switch, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import AddP from './component/AddP';
import Service from './component/Service';
import Home from './component/Home';
import Footer from './component/Footer';
import Contact from './component/Contact';
import "bootstrap/dist/js/bootstrap.min.js";
import { Helmet } from 'react-helmet';
class App extends Component{
  render(){
    return(
      <>
       <Helmet>
        <title>KL AQUA TECH - Water and Air Conditioner</title>
      </Helmet>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
  <a class="navbar-brand" href="/">
    <img src="https://thumbs.dreamstime.com/b/kl-logo-monogram-shield-shape-isolated-blue-colors-outline-design-template-179292944.jpg" width="30" height="30" class="d-inline-block align-top" alt="" />
  </a>
    <a class="navbar-brand text-light" href="/">KL AQUA TECH</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-light" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/">About us</a>
        </li>
      </ul>
    </div>
    </div>
</nav>

<Switch>
<Route path="/products" component={AddP} />
<Route path="/services" component={Service} />
<Route path="/contact" component={Contact} />
<Route path="/" component={Home} />
</Switch>
<Footer/>
      </>
    )
  }
}

export default App;
