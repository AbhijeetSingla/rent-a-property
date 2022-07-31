import './Filter.css';
import { useState } from "react";
import { useProperty } from "../../Context/PropertiesContext";

function Filter({data}) {
    const locationSet = Array.from(new Set(data.properties.map((property) => property.state)).values());
    const typeSet = Array.from(new Set(data.properties.map((property) => property.type)).values());
    const priceSet = Array.from(new Set(data.properties.map((property) => property.price)).values());
    const {propertyState,propertyDispatch} = useProperty();
    const [filterPrice, setFilterPrice] = useState(Math.ceil(Math.max(...priceSet)));
    const [filterLocation, setFilterLocation] = useState("All");
    const [filterDate, setFilterDate] = useState("");
    const [filterType, setFilterType] = useState("");
    
    function filterSearch (event) {
        event.preventDefault();
        propertyDispatch({type:"PRICE",payload:filterPrice});
        propertyDispatch({type:"LOCATION",payload:filterLocation});
        propertyDispatch({type:"DATE",payload:filterDate});
        propertyDispatch({type:"TYPE",payload:filterType});
    }

    return ( 
        <div className="search-filter-container container-center section-base">
            <h1>Search properties to rent</h1>
            <form action="" onSubmit={filterSearch}>
                <div className="search-filter-inner flex section-offwhite">
                    <div className='flex sub-filter'>
                        <label htmlFor="location">Location: </label>
                        <select name="location" id="location" value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}>
                            <option value="All">Select a location</option>
                            {locationSet.map((state) => <option key={state} value={state} >{state}</option>)}
                        </select>
                    </div>
                    <hr />
                    <div className='flex sub-filter'>
                        <label htmlFor="moveindate">When: </label>
                        <input type="date" name="moveindate" id="moveindate" onChange={(e) => setFilterDate(e.target.value)}/>
                    </div>
                    <hr />
                    <div className='flex sub-filter'>
                        <label htmlFor="pricerange">Price: </label>
                        <input type="range" name="pricerange" id="pricerange" currentvalue={filterPrice} defaultValue={Math.ceil(Math.max(...priceSet))} min={Math.floor(Math.min(...priceSet))} max={Math.ceil(Math.max(...priceSet))} onChange={(e) => setFilterPrice(e.target.value)}/>
                    </div>
                    <hr />
                    <div className='flex sub-filter'>
                        <label htmlFor="propertytype">Property Type: </label>
                        <select name="propertytype" id="propertytype" onChange={(e) => setFilterType(e.target.value)}>
                            {typeSet.map((type) => <option key={type} value={type}>{type}</option>)}
                        </select>
                    </div>
                    <hr />
                    <div className='flex sub-filter'>
                        <button type="submit" className='primary-link'>Search</button>
                    </div>
                </div>
            </form>
        </div>
     );
}

export default Filter;