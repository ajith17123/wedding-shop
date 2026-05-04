import '../assets/style/Nav.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';


function Nav () {
    return (

<section className='nav-sec'>
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Mappillai-Ponnu Styles</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home<i className="bi bi-house-check"></i></Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Collections
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/product">Men</Link></li>
            <li><Link className="dropdown-item" to="/product">Women</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Who We Are</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login<i className="bi bi-person-add"></i></Link>
        </li>
      </ul>
      <form className="d-flex nav-search-bar" role="search">
        <input className="form-control nav-search me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn-nav" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</section>

    )
}

export default Nav;