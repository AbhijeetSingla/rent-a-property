import { createContext, useContext, useReducer } from "react";
import  propertyFilter  from "../utils/propertyFilter";
import data from "../database/db";

const PropertyContext=createContext()
const priceSet = Array.from(new Set(data.properties.map((property) => property.price)).values());
export function PropertyProvider({children}) {
    const [propertyState,propertyDispatch]=useReducer(propertyFilter,{
        filteredProperties:data.properties,
        state:"All",
        date:"",
        price:Math.max(...priceSet),
        type:""
    });
    
    return <PropertyContext.Provider value={{propertyState,propertyDispatch}}>{children}</PropertyContext.Provider>


}

export const useProperty=()=>useContext(PropertyContext);