import React from "react";
import "./Home.css"
import Photo1 from "../Images/photo1.jpg";
import Photo2 from "../Images/photo2.jpeg";
import Remote from "../Images/remote.png";
import cartoon from "../Images/cartoon.jpg";
import Footer from "./Footer";




const Home = () => {
    return (
        <>
            <div className="rowbox">
                <div className="row">
                    <div className="textcontainer">
                    <div className="text">  <h1>Welcome to Prime Video</h1>
                        <p>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
                        <button className="btn">Start your 30-day free trial</button><br />
                        <span>With select credit or debit cards</span></div>

                    </div>
                    <div className="photocontiner">
                        <img src={Photo1} alt="" />


                    </div>
                </div>

            </div>

            <div className="rowbox">
                <div className="row">
                    <div className="textcontainer">
                    <div className="text">   <h1>Movie rentals on Prime Video</h1>
                        <p>Early Access to new movies, before digital subscription</p>
                        <button className="btn">Rent Now</button><br /></div>

                    </div>
                    <div className="photocontiner2">
                        <img src={Photo2} alt="" />


                    </div>
                </div>

            </div>

            <div className="rowbox2">
                <div className="row">
                    <div className=" textcontainer2">
                       <div className="text"> <h1>Your favorite channels all in one place</h1>
                        <p>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</p>
                        </div>
                    </div>
                    <div className="photocontiner3">
                       <div className="boxrow">
                       <div className="box ">
                            <h2>Lionsgate<br />
                                Play</  h2>
                        </div>
                        <div className="box">
                            <h2>ho!cho!
                               </h2>
                        </div>
                        <div className="box">
                            <h2>MUBI</h2>
                        </div>
                       </div>
                       <div  className="boxrow">
                       <div className="box">
                            <h2>Discovery +</h2>
                        </div>
                        <div className="box">
                            <h2>DOCUBAY
                               </h2>
                        </div>
                        <div className="box">
                            <h2>manoramamax</h2>
                        </div>
                       </div>
                       <div  className="boxrow">
                       <div className="box">
                            <h2>erosnow</h2>
                        </div>
                        <div className="box">
                            <h2>SHORTSTV</h2>
                        </div>
                        <div className="box">
                            <h2>hayu</h2>
                        </div>
                       </div>
                       
                    </div>
                </div>
                
                <div className="rowbox">
                    <div className="row">
                        <div className="textcontainer">
                        <div className="text">    <h1>Even better with Fire TV Stick</h1>
                            <p>The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</p>


                            <button className="btn">Get Start</button><br /></div>

                        </div>
                        <div className="photocontainer4">
                            <img src={Remote} alt="" />


                        </div>
                    </div>

                </div>
                <div className="rowbox">
                    <div className="row">
                        <div className="textcontainer4">
                        <div className="text">   <h1>Family Friendly</h1>
                            <p>With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.</p>


                            <button className="btn">Get Start</button><br />
                                </div>
                        </div>
                        <div className="photocontainer4">
                            <img src={cartoon} alt="" />


                        </div>
                    </div>

                </div>

            </div>
            <Footer />

        </>

    );
}


export default Home;