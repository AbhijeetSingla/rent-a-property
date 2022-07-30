import './Filter.css';
import { useEffect, useState } from "react";
import { useProperty } from "../../Context/PropertiesContext";

function Filter({data}) {
    const locationSet = Array.from(new Set(data.properties.map((property) => property.state)).values());
    const typeSet = Array.from(new Set(data.properties.map((property) => property.type)).values());
    const priceSet = Array.from(new Set(data.properties.map((property) => property.price)).values());
    const [inputValue, setInputValue] = useState(Math.ceil(Math.max(...priceSet)));
    const {propertyState,propertyDispatch}=useProperty();
    
    function updatePrice(event) {
        setInputValue(event.target.value);
        propertyDispatch({type:"PRICE",payload:event.target.value});
    }

    function updateLocation (e){
       propertyDispatch({type:"LOCATION",payload:e.target.value});
       console.log("🚀 ~ file: Filter.jsx ~ line 19 ~ updateLocation ~ e.target.value", e.target.value)
    }
    
    function updateDate(e) {
        propertyDispatch({type:"DATE",payload:e.target.value});
    }
    return ( 
        <div className="search-filter-container container-center section-base">
            <h1>Search properties to rent</h1>
            <div className="search-filter-inner flex">
                <div>
                    <label htmlFor="location">Location: </label>
                    <select name="location" id="location" value={propertyState.state} onChange={updateLocation}>
                        <option value="All">Select a location</option>
                        {locationSet.map((state) => <option value={state} 
                        >{state}</option>)}
                       
                    </select>
                </div>
                <div>
                    <label htmlFor="moveindate">When: </label>
                    <input type="date" name="moveindate" id="moveindate" onChange={updateDate} value={propertyState.date}/>
                </div>
                <div>
                    <label htmlFor="pricerange">Price</label>
                    <input type="range" name="pricerange" id="pricerange" onChange={updatePrice} currentvalue={inputValue} defaultValue={Math.ceil(Math.max(...priceSet))} min={Math.floor(Math.min(...priceSet))} max={Math.ceil(Math.max(...priceSet))} />
                </div>
                <div>
                    <label htmlFor="propertytype">Property Type: </label>
                    <select name="propertytype" id="propertytype">
                        {typeSet.map((type) => <option value={type}>{type}</option>)}
                    </select>
                </div>
            </div>
        </div>
     );
}

export default Filter;