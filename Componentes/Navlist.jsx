import React, { useState } from "react";
import Logo from "../Images/logo1.png";
import { NavLink } from "react-router-dom"
import "./Navlist.css";
import Languages from "./Languages";
import Icon from '../Images/icon.png';
import Usericon from "../Images/usericon.png";



const Navlist = () => {

    const [show, setShow] = useState(false);
    const [usericon, setUsericon] = useState(false);
    return (

        <>
            <div className="Container">

                <div>
                    <ul>

                        <NavLink exact to="/home">  <img className="Logo" src={Logo} alt="" /></NavLink>

                        <li>
                            <NavLink exact to='/home' >Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/store' >Store</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/channel' >Channels</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/categories' >Categories</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/mystuff' >Mystuff</NavLink>
                        </li>
                    </ul>

                </div>





                <div className="navlist2">
                    <ul>
                        <li>
                            <NavLink exact to='/login' ><button className="tryfrofree">Try For Free</button></NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/searchbar' >{show ? <input type="text" placeholder="Searchbar" className="searchbar" /> : null}</NavLink>

                        </li>
                        <li>
                            <img className="icon" src={Icon} alt="" onClick={() => setShow(!show)} />
                        </li>
                        <li>
                            <NavLink to='/' ><Languages /></NavLink>
                        </li>
                        <li>
                            <img className="icon" src={Usericon} alt="" onClick={() => setUsericon(!usericon)} />
                        </li>
                        <li>
                            <NavLink exact to='/signup' >


                                {usericon ? <select className="dropDown">
                                    <option>Sign Up</option>
                                    <option     >Watch Anywhere</option>
                                    <option>Help</option>
                                </select> : null}</NavLink>
                        </li>

                    </ul>
                </div>


            </div>




        </>
    );
}

export default Navlist;