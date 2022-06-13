import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import "./App.css";
import Navbar from "./navbar.js";

function App() {
  return (
    <div>
      <Navbar />
      <div className="imageContainer">
        <div className="images">
          <img src={img1} alt="1" />
          <div className="imgText">HEY</div>
        </div>
        <div className="images">
          <img src={img2} alt="2" />
          <div className="imgText">LET'S</div>
        </div>
        <div className="images">
          <img src={img3} alt="3" />
          <div className="imgText">GIVE</div>
        </div>
        <div className="images">
          <img src={img4} alt="4" />
          <div className="imgText">ALL</div>
        </div>
        <div className="images">
          <img src={img5} alt="5" />
          <div className="imgText">YOU CAN</div>
        </div>
      </div>
    </div>
  );
}

export default App;
