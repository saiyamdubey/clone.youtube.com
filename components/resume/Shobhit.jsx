import React from 'react'
import "./main_resume.scss"
import sai from "../../images/images"
const template = () => {
    return (
        <>
            <div class="resume-wrapper">
                <section class="profile section-padding">
                    <div class="container">
                        <div class="picture-resume-wrapper">
                            <div class="picture-resume">
                                <span><img src={sai.shobhit} alt="" /></span>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="name-wrapper">
                            <h1>शोभित सिंह</h1><br /><h1>Shobhit Singh 🐸</h1><br />
                            <span>Asst. Looser 👁️👁️</span>
                            {/* <h2>🙈👀🙊</h2> */}
                        </div>
                        <div class="clearfix"></div>
                        <div class="contact-presentation">
                            <p> Hey <span class="bold"></span>शोभित सिंह , I just wanted to take a moment to remind you of how truly awesome you are. Your presence in my life brings so much light and positivity. Your kindness, your sense of humor, and your unwavering support mean the world to me. You have a heart of gold, and I'm endlessly grateful to have you as my friend. Your positivity is infectious, and you make the world a better place just by being in it. So here's a virtual high-five for being the amazing person you are! Keep shining, my friend. You're not just good, you're absolutely great!"</p>
                            {/* <p><span class="bold">जुनूनी </span> वेब डेवलपर सहज, आकर्षक उपयोगकर्ता अनुभव बनाने में माहिर है। रिएक्ट और Vue.js जैसे फ्रेमवर्क में विशेषज्ञता के साथ HTML, CSS और जावास्क्रिप्ट जैसी फ्रंट-एंड तकनीकों में कुशल। मजबूत, कुशल वेब समाधानों के लिए Node.js और डेटाबेस प्रबंधन के साथ बैक-एंड विकास में अनुभवी।</p> */}
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

export default template
