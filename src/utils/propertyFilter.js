import data from "../database/db";

function propertyFilter(propertyState,action) {

    const locationSet = Array.from(new Set(data.properties.map((property) => property.location.state)).values());
    const typeSet = Array.from(new Set(data.properties.map((property) => property.type)).values());
    const priceSet = Array.from(new Set(data.properties.map((property) => property.price)).values());

    switch (action.type) {
        case "LOCATION":
            return {
                ...propertyState,
                state: action.payload
            }
            
        case "DATE":
            return {
                ...propertyState,
                date: action.payload
            }
        
        case "PRICE":
            return {
                ...propertyState,
                price: action.payload
            }
        default:
            return{
                ...propertyState
            }
            
    }
}

export default propertyFilter;