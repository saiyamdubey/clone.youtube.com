import React from 'react'
import { Link } from 'react-router-dom'
import "./links.scss"

const links = () => {
    return (
        <>
            <div className="link">
                <Link to="/"><button className='active'>All</button></Link>
                <Link to="/resume/Akansha" ><button>Akanksha Tiwari</button></Link>
                <Link to="/resume/Shobhit"><button>Shobhit Singh</button></Link>
                <Link to="/resume/Sagar" ><button>Sagar Pal</button></Link>
                <Link to="/resume/Pratik" ><button>Pratik Gutpa</button></Link>
                <Link to="/resume/Sharad" ><button>Sharad Awasthi</button></Link>
                <Link to="/resume/Prashansha" ><button>Prashansha Tiwari</button></Link>
                <Link to="/resume/Shubh" ><button>Shubh Dubey</button></Link>
                <Link to="/resume/Saksham" ><button>Saksham Dubey</button></Link>
                <Link to="/resume/Saurabh" ><button>Saurabh Jhaa</button></Link>
                <Link to="/resume/Vaibhav" ><button>Vaibhav Tripathi</button></Link>
                <Link to="/resume/Siddhartha" ><button>Siddhartha Shukla</button></Link>
                <Link to="/resume/Riya" ><button>Riya Pandey</button></Link>
                {/* <Link to="/resume/Poonam" ><button>Poonam Singh</button></Link> */}
                <Link to="/resume/Vikas" ><button>Vikas Shukla</button></Link>
                <Link to="/resume/Sandeep" ><button>Sandeep Tharu</button></Link>
                <Link to="/resume/Shaurya" ><button>Shaurya Mishra</button></Link>
                <Link to="/resume/Krishna" ><button>Krishna ji</button></Link>
                <Link to="/resume/Ayush" ><button>Ayush Malviya</button></Link>
                <Link to="/resume/Harshit" ><button>Harshit Singh</button></Link>
                <Link to="/resume/Yash" ><button>Yash Tanaija</button></Link>
                <Link to="/resume/Rajneesh" ><button>Rajneesh</button></Link>
                {/* <Link to="/resume/Prashant" ><button>Prashant</button></Link> */}
                <Link to="/resume/Deepika" ><button>Deepika Dhamaija</button></Link>
                {/* <Link to="/resume/Aishwarya" ><button>Aishwarya Gupta</button></Link> */}
                <Link to="/resume/Shailesh" ><button>Shailesh Vajpayee</button></Link>
                <Link to="/resume/Dada" ><button>Dada Maharaj prabhu</button></Link>

            </div >
        </>
    )
}

export default links