
function propertyFilter(propertyState,action) {

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

        case "TYPE": 
            return {
                ...propertyState,
                type: action.payload
            }

        default:
            return{
                ...propertyState
            }
            
    }
}

export default propertyFilter;