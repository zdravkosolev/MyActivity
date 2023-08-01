
import { IProducts } from "../Interfaces";
import "./Filter.css"




export const Filter = ({
    sortName, 
    amountProd, 
    filterCards,
    activeNavEl,
    handleActiveNav,
}:any) => {

        return(
            
        <p
        onClick={(e)=>{
            filterCards(e);
            handleActiveNav(e)
        }}
        className={`filterEl ${activeNavEl === sortName ? "activeNav": ""}`}>
            <span className="span">{sortName}</span>{" "}
            <span
            className={`${activeNavEl === sortName ? "activeSpan": "amountSpan"}`}>{amountProd}</span>
        </p>


        )
    }
    

    
