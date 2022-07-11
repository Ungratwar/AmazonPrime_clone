import React from "react";
import "./Channels.css";
import Photo2 from "../Images/Channel/photo2.webp";
import Poster1 from "../Images/Channel/poster1.jpg";
import Poster2 from "../Images/Channel/poster2.jpg";
import Poster3 from "../Images/Channel/poster3.jpg";
import Poster4 from "../Images/Channel/poster4.jpg";
import Poster5 from "../Images/Channel/poster5.webp";
import Poster6 from "../Images/Channel/poster6.jpg";
import Poster7 from "../Images/Channel/poster7.jpg";
import Poster8 from "../Images/Channel/poster8.webp";
import Poster9 from "../Images/Channel/poster9.webp";
import Poster10 from "../Images/Channel/poster10.jpg";
import Poster11 from "../Images/Channel/poster11.webp";
import Poster12 from "../Images/Channel/poster12.webp";  
import Poster13 from "../Images/Channel/poster13.jpg";
import Poster14 from "../Images/Channel/poster14.jpg";
import Poster15 from "../Images/Channel/poster15.jpg";
import Poster16 from "../Images/Channel/poster16.jpg";
import Poster17 from "../Images/Channel/poster17.jpg";
import Poster18 from "../Images/Channel/poster18.jpg";
import Poster19 from "../Images/Channel/poster19.jpg";
import Poster20 from "../Images/Channel/poster20.jpg";
import Poster21 from "../Images/Channel/poster21.webp";
import Poster22 from "../Images/Channel/poster22.jpg";
import Poster23 from "../Images/Channel/poster23.webp";
import Poster24 from "../Images/Channel/poster24.jpg";
import Poster25 from "../Images/Channel/poster25.jpg";
import Footer from "./Footer";


const Channels = () => {
    return (
      <>
           <div className="storeContainer">
            <img src={Photo2} alt="" />
        </div><br />
            <div className="tital"> <h3>RENT New release movies &nbsp; See More </h3></div><br></br>
            <div className="movieContainer">

                <div><img src={Poster1} alt="" />New Movie</div>
                <div><img src={Poster2} alt="" />New Movie</div>
                <div><img src={Poster3} alt="" />New Movie</div>
                <div><img src={Poster4} alt="" />New Movie</div>
                <div><img src={Poster5} alt="" />New Movie</div>
            </div><br />
           
            <div className="tital"> <h3>RENT Movies In Telugu &nbsp; See More </h3></div><br></br>
            <div className="movieContainer">

                <div><img src={Poster6} alt="" />New Movie</div>
                <div><img src={Poster7} alt="" />New Movie</div>
                <div><img src={Poster8} alt="" />New Movie</div>
                <div><img src={Poster9} alt="" />New Movie</div>
                <div><img src={Poster10} alt="" />New Movie</div>
            </div><br />
           
            <div className="tital"> <h3>RENT
                Jurassic Park collection &nbsp; See More </h3></div><br></br>
            <div className="movieContainer">

                <div><img src={Poster11} alt="" />New Movie</div>
                <div><img src={Poster12} alt="" />New Movie</div>
                <div><img src={Poster13} alt="" />New Movie</div>
                <div><img src={Poster14} alt="" />New Movie</div>
                <div><img src={Poster15} alt="" />New Movie</div>
            </div><br />
            <div className="tital"> <h3>RENT Drama movies &nbsp; See More </h3></div><br></br>
            <div className="movieContainer">

                <div><img src={Poster16} alt="" />New Movie</div>
                <div><img src={Poster17} alt="" />New Movie</div>
                <div><img src={Poster18} alt="" />New Movie</div>
                <div><img src={Poster19} alt="" />New Movie</div>
                <div><img src={Poster20} alt="" />New Movie</div>
            </div><br />
            <div className="tital"> <h3>RENT
                Action and adventure movies &nbsp; See More </h3></div><br></br>
            <div className="movieContainer">

                <div><img src={Poster21} alt="" />New Movie</div>
                <div><img src={Poster22} alt="" />New Movie</div>
                <div><img src={Poster23} alt="" />New Movie</div>
                <div><img src={Poster24} alt="" />New Movie</div>
                <div><img src={Poster25} alt="" />New Movie</div>
            </div><br />
            <Footer/>
      </>
    );
}


export default Channels ;