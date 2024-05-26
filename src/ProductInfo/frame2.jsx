import React from "react";
import "./frame2.css";
function Frame2({ product }) {
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="frame-2">
        <div className="details-div">
            <br></br><br></br>
            <p className="title">Details</p>
            <p className="title-text">Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>
            <p className="screen-properties">Screen</p>
           <div className="screen-properties-text">Screen diagonal <p className="screen1"> {product.text5}</p> </div>
           <div className="screen-properties-text1">{product.text16}<p className="screen2"> {product.text17}</p> </div>
              <div className="screen-properties-text1">{product.text18}<p className="screen3"> {product.text19}</p> </div>
              <div className="screen-properties-text1">{product.text20}<p className="screen4"> {product.text21}</p> </div>
              <div className="screen-properties-text1">{product.text22}<p className="screen5"> {product.text23}</p> </div>
              <div className="screen-properties-text2">Additionally <p className="screen6">Dynamic Island<p>Always-On display<p>HDR display<p>True Tone<p>Wide color (P3)</p></p></p></p></p></div>
            <div className="CPU-properties">CPU <p className="Cpu">Cpu<p className="cpu-info">{product.text7}</p></p>
            <div className="cpu2">{product.text8}<p className="numberofcores">{product.text9}</p>
    </div>
    <input type="button" value="View More  ▼" className="more-details"></input>
            </div>
        </div>
        
        </div>
    );
}

export default Frame2;