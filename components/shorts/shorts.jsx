import React from 'react'
import "./shorts.scss"
import data from "../../Utils/data_youtube.json"
import verified from "../../images/verify.png"


const shorts = () => {
    return (
        <>
            <div className="shorts">
                {data.map((item) => (
                    <div className='video'>
                        <div className='thumbnail'>
                            <img src={item.thumbnailUrl} alt='' />
                            {/* <video src={item.preloadvideo}></video> */}
                            <span>{item.duration}</span>
                        </div>
                        <div className="info">
                            <div className="logo_img">
                                <img src={item.channel_img} alt='' />
                            </div>
                            <div className="information">
                                <div className='title'>
                                    <p>{item.title}</p>
                                </div>
                                <div className='detail'>
                                    <p>{item.channel_name}<img src={verified} alt="" /></p>
                                </div>
                                <div className='channel'>
                                    <p>{item.uploadTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default shorts