import React, { useState } from 'react'
import "./navbar.scss"
import burgurmenu from "../../images/menuham.png"
import logo from "../../images/logo.png"
import search from "../../images/search.png"
import mic from "../../images/mic.png"
import create from "../../images/create.png"
import bell from "../../images/bell.png"
import profile from "../../images/profile.png"
import sidebar from '../../components/sidebar/sidebar'

const Navbar = ({ menu }) => {
    return (
        <>
            <div className="navbar">
                <div className="left">
                    <img class="burgurmenu" src={burgurmenu} alt='' /> 
                    <img class="logo" src={logo} alt="bool lo aab" />
                    <h2>YouTube<sup>IN</sup></h2>
                </div>
                <div className="middle">
                    <input type="text" name="search" id="search" placeholder='Search' />
                    <div className="search">
                        <img src={search} alt="search karlo thora" />
                    </div>
                    <img class="mic" src={mic} alt="" />
                </div>
                <div className="right">
                    <img src={create} alt="hhmm" />
                    <img src={bell} alt="hehe" />
                    <img src={profile} class="profile" alt="profile" />
                </div>
            </div>
        </>
    )
}

export default Navbar