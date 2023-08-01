import { title } from "process"

type HeadingTitle = {
    title: string
    image: string
}

export const DetailsBlock = (props: HeadingTitle) => {
    return <>
    <div className="details-block-section">
        <div className="details-block-div">
            <p className="about">about</p>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas, quo deleniti quos eos ipsam omnis labore laborum eaque aut? Ab, culpa sapiente. Dolorem velit at praesentium, aspernatur eum voluptate.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quis sint repellat cumque tempore numquam!
            </p>
        </div>
        <div className="details-block-div-2">
            <img src={props.image} alt="block-image" className="block-image"/>
        </div>
    </div>
    </>
}