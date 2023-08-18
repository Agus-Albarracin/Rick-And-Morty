import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { Link } from 'react-router-dom';
import style from '../navBar/navBar.css'


export default function NavBar(props) {
    return (
       <div className="divNav">

            <div className="divCont">
            <Link to="/home">
            <button className="buttonHome">Home</button>
            </Link>
            </div>


            <div className="divCont">
            <Link to="/about">
            <button className="buttonAbout">About</button>
            </Link>
            </div>


            <div className="divCont">
            <Link to="/favorites">
            <button className="buttonFav">❤️</button>
            </Link>
            </div>
           

          <SearchBar onSearch={props.onSearch} />
          <div className="divCont">
            <button onClick={props.logout} className="buttonExit">Exit</button>
          </div>
            

       </div>
       
    );
 }