import React from 'react'
import "./template.scss"
import sai from "../../images/images"
import { useParams } from 'react-router-dom'
const Template = () => {
    const { userid } = useParams();
    const imageSrc = sai[userid];
    // alert(imageSrc)
    return (
        <>
            <div class="resume-wrapper">
                <section class="profile section-padding">
                    <div class="container">
                        <div class="picture-resume-wrapper">
                            <div class="picture-resume">
                                <span><img className='unselectable' src={imageSrc} alt="fgehd" /></span>
                                {/* <span><img src={img[0].akanksha} alt="" /></span> */}
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="name-wrapper">
                            <h1>{userid} </h1><br /><h1>🦋</h1><br />
                            <span>My Golden Friend's 💕👁️</span>
                            {/* <h2>👀</h2> */}
                        </div>
                        <div class="clearfix"></div>
                        <div class="contact-presentation">
                            <p><span class="bold">for You {userid} :-</span> Someone you can only stay mad at for so long because you have important things to talk about. A friend knows the song in my heart and sings it to me when my memory fails. A real friend is one who walks in when the rest of the world walks out.</p>
                        </div>
                    </div>
                </section>
                <section class="experience section-padding">
                    <div class="container">
                        <h3 class="experience-title">Experience</h3>
                        <div class="experience-wrapper">
                            <div class="company-wrapper clearfix">
                                <div class="experience-title">Company name</div>
                                <div class="time">Nov 2012 - Present</div>
                            </div>
                            <div class="job-wrapper clearfix">
                                <div class="experience-title">Front End Developer </div>
                                <div class="company-description">
                                    <p>HTML, CSS, and JavaScript</p>
                                </div>
                            </div>
                            <div class="company-wrapper clearfix">
                                <div class="experience-title">Company name</div>
                                <div class="time">Nov 2010 - Present</div>
                            </div>
                            <div class="company-wrapper clearfix">
                                <div class="experience-title">School name</div>
                                <div class="time">DPS - Present</div>
                            </div>
                            <div class="job-wrapper clearfix">
                                <div class="experience-title">Freelance, Web Designer / Web Developer</div>
                                <div class="company-description">
                                    <p>Asst. Professor </p>
                                </div>
                            </div>
                            <div class="job-wrapper clearfix">
                                <div class="experience-title">Web Designer </div>
                                <div class="company-description">
                                    <p> Proficient in front-end technologies like HTML, CSS, and JavaScript, with expertise in frameworks such as React and Vue.js. Experienced in back-end development with Node.js </p>
                                </div>
                            </div>
                        </div>
                        <div class="section-wrapper clearfix">
                            <h3 class="section-title">Skills</h3>
                            <ul>
                                <li class="skill-percentage">HTML / HTML5</li>
                                <li class="skill-percentage">CSS / SASS / SCSS </li>
                                <li class="skill-percentage">Javascript</li>
                                <li class="skill-percentage">Jquery</li>
                                <li class="skill-percentage">React / Next JS</li>
                                <li class="skill-percentage">Teaching</li>
                            </ul>
                        </div>
                        <div class="section-wrapper clearfix">
                            <h3 class="section-title">Hobbies</h3>
                            <p>😁😅😆😉🤗🥲🫥😶🫡😥😴😒🫠🙃🥵🥶😡🤠🤡😈💖🤣🤦‍♂️😍💕😁😞😕🤑😐😎😁😅😁😞😕🤑😐😎😁😅👺😆😉🤗👹🐹🐭🐸🦙🧞‍♀️👁️</p>
                            <p>😁😅😆😉🤗😡🤠🤡😈💖🤣🤦‍♂️😍💕😒🫠🙃🥵🥶😁😞😕🤑😐😎😁😅😡🤠🤡😈👹💀👾😁😞😕🤑😐😎😁😅👺😆😉🤗👹🐹🐭🦙🧞‍♀️👁️</p>
                            <p>💖🤣🤦‍♂️😍💕😁😞😕🤑😐😎😁😁😞😕🤑😐😎😁😅😅😆😉🤗🥲🫥😶🫡😥😴😒🫠🙃🥵🥶😡🤠🤡😈👹💀👾🐗🐷🐹🐭🐸🦙🧞‍♀️👁️🫁💖</p>
                        </div>
                    </div>
                </section>

                <div class="clearfix"></div>
            </div>
        </>
    )
}

export default Template
