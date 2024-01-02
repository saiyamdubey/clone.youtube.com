import React from 'react'
import "./Notfound.scss"
import sai from "../../images/images"

const Notfound = () => {
    return (
        <>
            <div className="section_main">
                <div className="both">
                    <div className="up">
                        <img src={sai.Monkey} alt="" />
                        <pre>This page isn't available. Sorry about that.
                            Try searching for something else.</pre>
                    </div>
                    <div className="low">
                        <div className="logo_youtube">
                            <img class="logo" src={sai.logo} alt="bool lo aab" />
                            <h2>YouTube<sup>IN</sup></h2>
                        </div>
                        <div className="input_sec">
                            <input type="search" placeholder="Search " name="" id="" />
                            <button type="button"><img src={sai.search} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notfound