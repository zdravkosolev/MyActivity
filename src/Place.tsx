import { useEffect, useState } from "react"

type PlaceProps = {
    id: number;
}

export const Place = ({id}: PlaceProps) => {

    let [place, setPlace] = useState("");
let [desc, setDesc] = useState("");
let [img, setImg] = useState("");

useEffect(() => {
    fetch(`http://localhost:5001/places/${id}`)
    .then(res=>res.json())
    .then( data => {
        console.log(data)
        setPlace(data.place);
        setDesc(data.desc);
        setImg(data.img);
    })
    
})
    return <>
    <div className="place-div" style={{ backgroundImage: `url(${img})`}}>
        <div >
             {/* <img src={img} alt="place-img" /> */}
            <h3>{place}
            </h3>
            <p>{desc}</p>
            <div></div>
           
        </div>
    </div>
    </>
}