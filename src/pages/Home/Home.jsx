import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import { useProperty } from "../../Context/PropertiesContext";
import propertyData from "../../database/db";
import { locationFilter, dateFilter, priceFilter, typeFilter } from "../../utils/Filters";

function Home() {
    const {propertyState}=useProperty();
    const priceData = priceFilter(propertyData.properties, propertyState.price);
    const locationData=locationFilter(priceData,propertyState.state);
    const dateData = dateFilter(locationData, propertyState.date);
    const data = typeFilter(dateData, propertyState.type);
    return ( 
        <>
            <Filter data={propertyData}/>
            <div className="blog-list grid container-center">
                {data.length > 0 ? data.map((property) => <Card property={property} key={property.id} />) : <>No results found</> }
            </div>
        </>
     );
}

export default Home;