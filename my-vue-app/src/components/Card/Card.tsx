import { IProductsArr } from "../Interfaces"
import "./Card.css"
import img1 from "../Images/img/1.png"
import img2 from "../Images/img/2.png"
import img3 from "../Images/img/3.png"
import img4 from "../Images/img/4.png"
import img5 from "../Images/img/5.png"
import img6 from "../Images/img/6.png"
import img7 from "../Images/img/7.png"
import img8 from "../Images/img/8.png"
import img9 from "../Images/img/9.png"
import img10 from "../Images/img/10.png"
import img11 from "../Images/img/11.png"
import img12 from "../Images/img/12.png"
import img13 from "../Images/img/13.png"
import img14 from "../Images/img/14.png"
import img15 from "../Images/img/15.png"
import img16 from "../Images/img/16.png"
import img17 from "../Images/img/17.png"
import img18 from "../Images/img/18.png"
import img19 from "../Images/img/19.png"
import img20 from "../Images/img/20.png"


const Photos = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20]

export const Card = ({name, price,el, image}:IProductsArr) => {
    return (
    <>
     <div className="card">
        <div className="bikeDivProp">
            <img className="imgProperties"  src={Photos[el % Photos.length]} alt="alt" />
            {/* <img src={require(`../Images/img/${image}.png`)} alt="alt"/> */}
        </div>
        <div className="cardInfo">
            <h4>{name}</h4>
            <p>{price}$</p>
        </div>
     </div>
        </>
        )
}