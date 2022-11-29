import React, { useState } from 'react';
import countries from '../isocode.json';
import Card from '../components/Card/Card';
import Map from '../components/Map/Map';

function Homepage() {
    const [countryCovidData, setCountryCovidData] = useState({});
    function onCountryChange(event) {
        fetch(`http://localhost:8000/covidstats/country/${event.target.value}`)
            .then(res => res.json())
            .then(countryData => setCountryCovidData(countryData[0]))
    }
    return (
        <div>
            <h1>Covid 19 Tracker</h1>
            <select onChange={onCountryChange}>
                <option>Select a country</option>
                {countries.map(country => <option key={country.country} value={country.country}>{country.country}</option>)}
            </select>
            <Card title="Coronavirus Cases" newCases={countryCovidData.NewCases} totalCases={countryCovidData.TotalCases} />
            <Card title="Recovered" newCases={countryCovidData.NewRecovered} totalCases={countryCovidData.TotalRecovered} />
            <Card title="Deaths" newCases={countryCovidData.NewDeaths} totalCases={countryCovidData.TotalDeaths} />
            <Map />
        </div>
    )
}

export default Homepage;