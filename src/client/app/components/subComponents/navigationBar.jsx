import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';


export default function NavigationBar(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-success row">
      <div>
        { // eslint-disable-next-line
        <a className="navbar-brand" href="#">
          <img className="float-left img-fluid-header nav-brand-img" src="public/assets/logo_white_b.jpg" alt="Home" />
          <button
            className="navbar-toggler float-right menu-header p-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerList"
            aria-controls="navbarTogglerList"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-white">Menu</span>
          </button>
        </a>
        }
      </div>

      <div className="collapse navbar-collapse" id="navbarTogglerList">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NavLink
              className="nav-link"
              to="/"
            >Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <div className="">
              <a // eslint-disable-line
                className="nav-link dropdown-toggle"
                href=""
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="/services/cosmetic">Cosmetic Dentistry</NavLink>
                <NavLink className="dropdown-item" to="/services/bridges">Dental Bridges</NavLink>
                <NavLink className="dropdown-item" to="/services/crowns">Dental Crowns</NavLink>
                <NavLink className="dropdown-item" to="/services/implants">Dental Implants</NavLink>
                <NavLink className="dropdown-item" to="/services/dentures">Dentures</NavLink>
                <NavLink className="dropdown-item" to="/services/root-canal">Endodontics and Root Canals</NavLink>
                <NavLink className="dropdown-item" to="/services/family-dentistry">Family Dentistry</NavLink>
                <NavLink className="dropdown-item" to="/services/general-dentistry">General Dentistry</NavLink>
                <NavLink className="dropdown-item" to="/services/orthodontics">Interceptive Orthodontics</NavLink>
              </div>
            </div>
          </li>
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NavLink
              className="nav-link"
              to="/about-us"
            >About Us
            </NavLink>
          </li>
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
          </li>
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NavLink className="nav-link" to="/meet-us">Meet Us</NavLink>
          </li>
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NavLink className="nav-link" to="/promotions">Promotions</NavLink>
          </li>
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <hr />

      </div>

    </nav>
  );
}
