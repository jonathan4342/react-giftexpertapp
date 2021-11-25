import React,{useState} from "react";
import { AddCategory } from "./componets/AddCategory";
import { GifGrid } from "./componets/GifGrid";

const GifExpertApp=()=>{

    const [categories, setCategories]=useState(['One Puch'])

   


    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ul>
                {
                    categories.map(c=>(
                        <GifGrid 
                        key={c}
                        category={c}/>
                    ))
                }
            </ul>
        </>
    )
}

export default GifExpertApp;