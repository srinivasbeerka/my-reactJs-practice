import React, { useEffect, useState } from 'react'

const Url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Ex2 = () => {

     const [drinksData,setDrinksData]=useState([]);
     const [searchTerm,setSearchTerm]=useState('');
     const [loading,setLoading]=useState(false);

     const fetchDrinks= async (apiUrl)=>{
        setLoading(true)
       
        try {
            const response=await fetch(apiUrl);
            const {drinks} =await response.json();
            setDrinksData(drinks)
            console.log(drinks)

            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
     }

     useEffect(()=>{
        const correctUrl=`${Url}${searchTerm}`

        fetchDrinks(correctUrl);

     },[searchTerm])

     if(loading){
        return(
            <div className='cocktail-data-fetch'>
                <h1>Loading..</h1>
            </div>
        )
     }


  return (
    <div className='cocktail-data-fetch'> 
       <form>
          <input type='text' name='search' id='search' placeholder='search something here' value={searchTerm } onChange={(e)=>{setSearchTerm(e.target.value)}}/>
       </form>
       <hr/>

       <ul className='cocktail-data'>
           {
            drinksData.map((eachDrink)=>{
                const {idDrink,strDrink,strDrinkThumb}=eachDrink;

                return(
                    <li key={idDrink}>
                        <div>
                            <img src={strDrinkThumb}></img>
                        </div>
                        <div>
                            <h1>{strDrink}</h1>
                        </div>
                    </li>
                )
            })
           }
       </ul>
        
    </div>
  )
}

export default Ex2