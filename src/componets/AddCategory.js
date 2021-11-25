import React,{useState} from 'react'

export const AddCategory = ({setCategories}) => {

    const [inputValue,setInputValue]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(inputValue.trim().length >2){
        setCategories(categories =>[inputValue,...categories]);
        setInputValue('');
    }
}
    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder='Category'
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
        </form>
    )
 }


