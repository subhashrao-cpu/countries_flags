import { useEffect, useState } from "react";

const CountryCard = ({name, flagImg, flagAltTxt}) =>{
    return (
        <div style ={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "10px",
            margin:"10px",
            border: "1px solid black",
            borderRadius:"8px",
            width:"200px",
            height:"200px"
        }}>
            <img src={flagImg}  
            alt={flagAltTxt} 
            style={{ width:"100px", height:"100px" }}/>
            <h2>{name}</h2>
        </div>
    )
}


function Countries()
{
    const API_URL = "https://xcountries-backend.azurewebsites.net/all"
    const [countries, setCountries] = useState([])
    console.log({countries});
    useEffect(() =>{
        fetch(API_URL)
        .then(res => res.json())
        .then((data) => setCountries(data))
        .catch((error) => console.error("error: ", error));
    },[])

    return (
        <div 
        style = {{
            display:"flex",
            flexWrap:"wrap",
            alignItems:"center",
            justifyContent:"center",
            height:"100vh"
        }}>
         {countries.map((country)=>(
            <CountryCard
            name={country.name} 
            flagImg={country.flag} 
            flagAltTxt={country.abbr}
            />
         ))}
        </div>
    
    );
}

export default Countries