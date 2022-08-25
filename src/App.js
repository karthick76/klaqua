import './App.css';
import {Component} from "react"
import {Route, Switch, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import AddP from './component/AddP';
import Service from './component/Service';
import Home from './component/Home';
import Footer from './component/Footer';
import Contact from './component/Contact';
class App extends Component{
  render(){
    return(
      <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand" href="#">
    <img src="https://thumbs.dreamstime.com/b/kl-logo-monogram-shield-shape-isolated-blue-colors-outline-design-template-179292944.jpg" width="30" height="30" class="d-inline-block align-top" alt="" />
      <a className='navbar-brand text-light' href="/">KL AQUA TECH</a>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link text-light" href="/">Home </a>
      <a className="nav-item nav-link text-light" href="/products">Products</a>
      <a className="nav-item nav-link text-light" href="/services">Services</a>
      <a className="nav-item nav-link text-light" href="/contact">Contact</a>
      <a className="nav-item nav-link text-light" href="/">About Us</a>
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
