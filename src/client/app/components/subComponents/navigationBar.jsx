import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavigationBar(props) {
  return (

    <nav className=" navbar navbar-expand-lg row">
      <div className=" d-none d-md-flex">
        { // eslint-disable-next-line
        <a className="navbar-brand" href="#">
          <img className="float-left img-fluid-header nav-brand-img" src="public/assets/logo_white_b.jpg" alt="Home" />

        </a>
        }
      </div>

      <div className="collapse navbar-collapse" id="navbarTogglerList">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item navbar-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NavLink
              className="nav-link"
              to="/"
            >Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item navbar-item dropdown">
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
                <NavLink className="dropdown-item" to="/services/bridges">Crowns and Bridges</NavLink>
                {/*
                  <NavLink className="dropdown-item" to="/services/crowns">Dental Crowns</NavLink>
                  */}
                <NavLink className="dropdown-item" to="/services/implants">Dental Implants</NavLink>
                <NavLink className="dropdown-item" to="/services/dentures">Dentures</NavLink>
                <NavLink className="dropdown-item" to="/services/root-canal">Endodontics and Root Canals</NavLink>
                <NavLink className="dropdown-item" to="/services/family-dentistry">Family Dentistry</NavLink>
                <NavLink className="dropdown-item" to="/services/general-dentistry">General Dentistry</NavLink>
                <NavLink className="dropdown-item" to="/services/orthodontics">Interceptive Orthodontics</NavLink>
                <NavLink className="dropdown-item" to="/services/oral-surgery">Oral Surgery</NavLink>
                <NavLink className="dropdown-item" to="/services/pediatric">Pediatric Dentistry</NavLink>
                <NavLink className="dropdown-item" to="/services/periodontics">Periodontics</NavLink>
                <NavLink className="dropdown-item" to="/services/restorative-dentistry">Restorative Dentistry</NavLink>
                <NavLink className="dropdown-item" to="/services/preventive-dentistry">Preventive Dentistry</NavLink>
                <NavLink className="dropdown-item" to="/services/sedation-dentistry">Sedation Dentistry</NavLink>
                <NavLink className="dropdown-item" to="/services/sleep-disorder-dentistry">Sleep Disorder Dentistry</NavLink>
                <NavLink className="dropdown-item" to="/services/tmj-tmd-dentistry">TMJ and TMD Dentistry</NavLink>
                <NavLink className="dropdown-item" to="/services/teeth-whitening">Teeth Whitening</NavLink>
                <NavLink className="dropdown-item" to="/services/invisalign-braces">Invisalign/Invisible Braces</NavLink>
              </div>
            </div>
          </li>
          <li className="nav-item navbar-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NavLink
              className="nav-link"
              to="/about-us"
            >About Us
            </NavLink>
          </li>
          <li className="nav-item navbar-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
          </li>
          <li className="nav-item navbar-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NavLink className="nav-link" to="/meet-us">Meet Us</NavLink>
          </li>
          <li className="nav-item navbar-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NavLink className="nav-link" to="/promotions">Specials</NavLink>
          </li>
          <li className="nav-item navbar-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>

      </div>

    </nav>
  );
}
