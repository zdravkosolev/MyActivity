import { useEffect, useState } from "react"
import { IProducts } from "../Interfaces"
import { CardContainer } from "../Card/CardContainer"
import { Sidebar } from "./Sidebar"
import axios from "axios"
import "./Filter.css"
export const Main = () => {
    const [fetchedData, setFetchedData] = useState<IProducts[]>([])
    const [filteredData, setFilteredData] = useState<IProducts[]>([])

    const filterCards = (e:any, type: string) => {
        if(e.target.innerText === "Show All"){
            setFilteredData(fetchedData);
            return;
        }
        setFilteredData(
            fetchedData.filter(
                (el:IProducts) =>el[type as keyof IProducts] === e.target.innerText
            )
        )
        }

        useEffect(() => {
                axios
                .get('https://challenges.brainster.tech/ajax_data/data.json')
                .then(function(res){
                    setFetchedData(res.data.products)
                })
        }, []);

        return( 
                <main className="main">
                    <Sidebar fetchedData={fetchedData} filterCards={filterCards}/>
                <div className="cardContainer">

                <CardContainer fetchedData= {fetchedData} filteredData={filteredData}/>
                </div>
                </main>


        )


}