import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import { useProperty } from "../../Context/PropertiesContext";
import propertyData from "../../database/db";
import { locationFilter, dateFilter, priceFilter } from "../../utils/Filters";

function Home() {
    const {propertyState}=useProperty();
    const priceData = priceFilter(propertyData.properties, propertyState.price);
    console.log("🚀 ~ file: Home.jsx ~ line 10 ~ Home ~ priceData", priceData)
    const locationData=locationFilter(priceData,propertyState.state);
    console.log("🚀 ~ file: Home.jsx ~ line 12 ~ Home ~ locationData", locationData)
    const data = dateFilter(locationData, propertyState.date);
    console.log(data);
    return ( 
        <>
            <Filter data={propertyData}/>
            <div className="blog-list grid container-center">
                {data.map((property) => <Card property={property} key={property.id} />)}
            </div>
        </>
     );
}

export default Home;