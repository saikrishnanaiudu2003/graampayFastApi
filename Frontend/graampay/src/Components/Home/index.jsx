import { FaArrowLeft } from "react-icons/fa";

import './index.css'


const Home = () => {
    return(
        <div className="main-home-page">
           <div className='dashborad-text'>
           <div className="flex-dashboard-text">
           <FaArrowLeft width={12} height={14} color="#3408A4" />
           <h1 className="main-home-head"> Dashboard</h1>
           </div>
          <div>
          <p><span className="viyona-text">VIYONA</span> <span className="viyona-span">/ Dashboard</span></p>
          
           </div>
           </div>
           <div className="home-main-stats-cards"> 
            <div className="first-stats-card"></div>
            <div className="first-stats-card"></div>

            <div className="year-stats-card"></div>
           </div>
           <div className="home-main-stats-cards">
           <div className="slary-stats-card"></div>
           <div className="todo-stats-card"></div>
           </div>
        </div>
    )
}

export default Home