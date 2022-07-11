import React from "react";
import "./Categories.css";



const Categories = () => {
   
   
   
    return (<>
       
        <div className="C-row">
            <div className="categorycontainer">
                <div >
                    &nbsp;<h4>Top Categories</h4>
                    <div className="topCategories" >
                    <div className="box2">
                        <p>Included with prime</p>

                    </div>
                    <div className="box2">
                        <p>Amazon Originals</p>
                        
                    </div>
                    <div className="box2">
                        <p>Movies</p>
                        
                    </div>
                    <div className="box2">
                    <p>TV</p>
                        
                    </div>
                    <div className="box2">
                    <p>Kids</p>
                        
                    </div>
                    </div>
                   

                </div>
                <div className="Langauges">
                      
                       <div>
                        <ul className="list-L">
                            <li> <h4> Audio languages</h4></li>
                            <li>English</li>
                            <li>Hindi</li>
                            <li>Telugu</li>
                            <li>Tamil</li>
                            <li>Kannada</li>
                        </ul>
                    </div>
                     <div>
                        <ul className="list-L">
                            <li>Panjabi</li>
                            <li>Marathi</li>
                            <li>Gujarati</li>
                            <li>Malayalam</li>
                            <li>Bengali</li>
                        </ul>
                    </div>


                </div>
                <div className="otherCategories">  
                      
                       <div>
                        <ul className="list-L">
                            <li> <h4>Other Categories</h4></li>
                            <li>Drama</li>
                            <li>Action and Adventures</li>
                            <li>Romance</li>
                            <li>Comedy</li>
                            <li>Suspence</li>
                            <li>Horror</li>
                            <li>Award Winners</li>
                        </ul>


                </div>

            </div>
        </div>
        </div>
        </>
    );
}


export default Categories;