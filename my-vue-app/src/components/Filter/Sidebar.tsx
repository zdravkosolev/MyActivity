import { useState } from "react"
import { IProducts } from "../Interfaces";
import { Filter } from "./Filter";
import "./Filter.css"



export const Sidebar = ({fetchedData, filterCards}: any) => {

        const [activeNavEl, setActiveNavEl] = useState<boolean | string>("Show All")
        const handleActiveNav = (e:any) =>{
            setActiveNavEl(e.target.innerText)
        };
        const createArrWithProp = (prop:string) =>{
            let customArr: IProducts[] = [];

            fetchedData.forEach((el:any) => {
                if(!customArr.find((elArr:any) => elArr === el[prop]))
                {
                    customArr.push(el[prop])
                }
            })
            return customArr
        }
        const genderArr = createArrWithProp("gender");
        const brandArr = createArrWithProp("brand")
       
        const findNumberOfElement = (prop:any, parameter: IProducts | string)=>{
            let findedElements = fetchedData.filter(
                (filterEl:IProducts) => filterEl[prop as keyof IProducts] === parameter
            );
            return findedElements.length
        }
    return (
        <aside className="asideContainer">
            <h1>Bikes</h1>
            <h3>Filter by:</h3>
            <div className="borderBottom">
                {
                    <Filter
                    key={"Show All"}
                    sortName={"Show All"}
                    amountProd={fetchedData.length}
                    filterCards={(e:React.MouseEvent<HTMLParagraphElement>)=>{
                        filterCards(e)
                    }}
                    activeNavEl= {activeNavEl}
                    handleActiveNav={handleActiveNav}/>
                }
            </div>
            <h3>Gender</h3>
            <div className="borderBottom">
              
                {genderArr.map((el)=>(
                    <Filter 
                    key={el}
                    sortName={el}
                    amountProd={findNumberOfElement("gender",el)}
                    filterCards={(e:React.MouseEvent<HTMLParagraphElement>)=>{
                        filterCards(e, "gender")
                    }}
                    activeNavEl={activeNavEl}
                    handleActiveNav={handleActiveNav}/>
                ))}
            </div>
            <h3>Brand</h3>
            <div>
                {brandArr.map((el)=>(
                    <Filter 
                    key={el}
                    sortName={el}
                    amountProd={findNumberOfElement("brand",el)}
                    filterCards={(e:React.MouseEvent<HTMLParagraphElement>)=>{
                        filterCards(e, "brand")
                    }}
                    activeNavEl={activeNavEl}
                    handleActiveNav={handleActiveNav}/>
                ))}
            </div>
        </aside>
    )
}