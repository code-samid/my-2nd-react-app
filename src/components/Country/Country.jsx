import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    console.log(country.languages)

    const[visited,setVisited] = useState(false);

    const handleVisited = () =>{

        // basic system
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // 2nd system ternnary
        // setVisited(visited? false : true)

        // third system
        setVisited(!visited);
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h4>Capital: {country.capital.capital}</h4>
            <p>Region: {country.region.region}</p>
            
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : 'Small Country'}</p>
            <button onClick={handleVisited}>
                {visited ? 'visited' : 'Not Visited'}
            </button>
            <button onClick={() => {handleVisitedFlags(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;