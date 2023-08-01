import { IProducts } from "../Interfaces"
import { Card } from "./Card";

interface ICardContainer {
    fetchedData: IProducts[];
    filteredData: IProducts[];
}

export const CardContainer = ({
    fetchedData,
    filteredData
}:ICardContainer) => {
    return ( 
    <>
    {filteredData.length !== 0 ? filteredData.map((product:IProducts, el:number)=> (
        <Card key={el} {...product} el={el}/>
    )):
    fetchedData.map((product:IProducts, el:number)=>(
        <Card key={el} {...product} el={el}/>
    ))
    }


    
    </>
    
    )
}