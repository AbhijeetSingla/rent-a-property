function locationFilter (propertyArr,locationState) {
   return locationState!=="All"? propertyArr.filter(element=>element.state===locationState):propertyArr
}

function dateFilter (propertyArr, date){
   return date!== ""? propertyArr.filter(element=> element.date===date.split('-').reverse().join('-')) : propertyArr
}

function priceFilter (propertyArr, price) {
   return propertyArr.filter(element=> element.price<=price);
}

export { locationFilter, dateFilter, priceFilter };