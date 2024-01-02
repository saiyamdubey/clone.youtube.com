import React from 'react'
// import { useState } from 'react'
import "./sidebar.scss"
import { Link } from "react-router-dom"
import sai from "../../images/images.js"
import { showsub, showbox } from "./api"

function sidebar() {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <Link to="/home" className='active'><img src={sai.home} alt="" />Home</Link>
                    <Link to="/shorts"><img src={sai.online_video} alt="" />Shorts</Link>
                    <Link to="/subscription" ><img src={sai.subscribe} alt="" />Subscriptions</Link>
                    <hr className='hr' />
                    <Link to="/library" ><img src={sai.library} alt="" />Library</Link>
                    <Link to="/history" ><img src={sai.history} alt="" />History</Link>
                    <Link to="/your_videos" ><img src={sai.online_video} alt="" />Your Videos</Link>
                    <Link to="/watch" ><img src={sai.movie} alt="" />Watch Later</Link>
                    <Link to="/liked_video" ><img src={sai.like} alt="" />Liked Video</Link>
                    <div className="show_more" id="box">
                        <Link to="/songs" ><img src={sai.online_video} alt="" />Songs</Link>
                        <Link to="/playlist" ><img src={sai.library} alt="" />Tripathi</Link>
                        <Link to="/mainsongs" ><img src={sai.subscribe} alt="" />Sagar Guru</Link>
                        <Link to="/Recent" ><img src={sai.trending} alt="" />Shobhit Gamer</Link>
                        <Link to="/new" ><img src={sai.like} alt="" />MiniMilitia song</Link>
                    </div>
                    <Link to="/Show" onClick={() => showbox()}><img className="show" src={sai.down} alt="" />Show More</Link>
                    <hr className='hr' />
                    <div className="subscription">
                        <h2>Subscription</h2>
                        <Link to="/carryminati" ><img src={sai.carry} alt="" />CarryMinati</Link>
                        <Link to="/tribegaming" ><img src={sai.tribe} alt="" />Tribe Gaimg</Link>
                        <Link to="/programmer" ><img src={sai.program} alt="" />Program Clever</Link>
                        <Link to="/techburner" ><img src={sai.techburner} alt="" />Tech Burner</Link>
                        <Link to="/gareebo" ><img src={sai.gareebo} alt="" />Gareebo</Link>
                        <Link to="/guruji" ><img src={sai.guruji} alt="" />Technical Guruji</Link>
                        <Link to="/vikas" ><img src={sai.Vikas} alt="" />Vikas Shukla</Link>
                        <Link to="/riya" ><img src={sai.Riya} alt="" />Riya Pandey</Link>
                        <Link to="/apnacollege" ><img src={sai.apna} alt="" />Apna College</Link>

                        <div className="show_sub" id="sub">
                            <Link to="/Drishti" ><img src={sai.drashti} alt="" />Drishti</Link>
                            <Link to="/riya" ><img src={sai.Riya} alt="" />Riya Pandey</Link>
                            <Link to="/ash" ><img src={sai.ash} alt="" />Ash gaming</Link>
                            <Link to="/guruji" ><img src={sai.guruji} alt="" />Technical Guruji</Link>
                            <Link to="/ayush" ><img src={sai.Ayush} alt="" />Ayush Blog</Link>
                            <Link to="/carrylive" ><img src={sai.jenny} alt="" />Jennny Lecture</Link>
                            <Link to="/Hackerspolit" ><img src={sai.hacker} alt="" />Hackerspolit</Link>
                            <Link to="/tvf" ><img src={sai.tvf} alt="" />Viral fever</Link>
                            <Link to="/Code with harry" ><img src={sai.cwithh} alt="" />Code with harry</Link>
                            <Link to="/Prashansha" ><img src={sai.jiya} alt="" />Tripathi ji</Link>
                            <Link to="/Drishti" ><img src={sai.drashti} alt="" />Drishti</Link>
                            <Link to="/ash" ><img src={sai.ash} alt="" />Ash gaming</Link>
                            <Link to="/ayush" ><img src={sai.Ayush} alt="" />Ayush Blog</Link>
                            <Link to="/Code with harry" ><img src={sai.cwithh} alt="" />Code with harry</Link>
                            <Link to="/apnacollege" ><img src={sai.apna} alt="" />Apna College</Link>
                        </div>
                        <Link to="/Show" onClick={() => showsub()}><img className="showsub" src={sai.down} alt="" />Show More</Link>
                        <hr className='hr' />
                    </div>
                    <div className="explore">
                        <h2>Explore</h2>
                        <Link to="/library" ><img src={sai.trending} alt="" />Trending</Link>
                        <Link to="/library" ><img src={sai.mic} alt="" />Music</Link>
                        <Link to="/library" ><img src={sai.live} alt="" />Live</Link>
                        <Link to="/library" ><img src={sai.shop} alt="" />Shopping</Link>
                        <Link to="/library" ><img src={sai.game} alt="" />Gaming</Link>
                        <Link to="/library" ><img src={sai.learn} alt="" />Learnig</Link>
                        <Link to="/library" ><img src={sai.fashion} alt="" />Fashion</Link>
                        <Link to="/library" ><img src={sai.gaming} alt="" />Sports</Link>
                        <Link to="/library" ><img src={sai.news} alt="" />News</Link>
                        <Link to="/library" ><img src={sai.like} alt="" />Healthy</Link>
                        <hr className='hr' />
                    </div>

                    <div className="more-video">
                        <h2>More from YouTube</h2>
                        <Link to="/library" ><img src={sai.logo} alt="" />Premium</Link>
                        <Link to="/library" ><img src={sai.studio} alt="" />Youtube Studio</Link>
                        <Link to="/library" ><img src={sai.music} alt="" />Youtube Music</Link>
                        <Link to="/library" ><img src={sai.ylogo} alt="" />Youtube Kids</Link>

                        <hr className='hr' />
                    </div>
                    <div className="main-info">
                        <Link to="/Setting" ><img src={sai.setting} alt="" />Settings</Link>
                        <Link to="/Report History" ><img src={sai.flag} alt="" />Report History</Link>
                        <Link to="/Help" ><img src={sai.question} alt="" />Help</Link>
                        <Link to="/Send Feedback" ><img src={sai.mail} alt="" />Send Feedback</Link>
                        <hr className='hr' />
                    </div>
                    <div className="copy">
                        <p>About  Press  Copyright <br />Contact    usCreators <br /> Advertise    Developers</p>
                        <p>Terms  Privacy  Policy  <br /> & SafetyHow  YouTube    <br />worksTest    new  features</p>
                        <p className='copyright'>©  2023  Google  LLC</p>
                    </div>
                </ul>

            </div>
        </>
    )
}

export default sidebar;