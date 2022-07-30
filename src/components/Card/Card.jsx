import bedIcon from '../../media/icons/bed-icon.svg';
import bathroomIcon from '../../media/icons/bathroom-icon.svg';
import areaIcon from '../../media/icons/area-icon.svg';
import likeIcon from '../../media/icons/like-icon.svg';
import './Card.css';

function Card( {property} ) {
    return ( 
        <a href="/" className ="txt-decor-none blog-card container-base" >
            <div className="blog-container flex">
                <div className="blog-card-cover">
                    <img src={require(`../../media/images/${property?.cover}`)} alt={property.location} />
                </div>
                <div className="blog-card-text flex">
                    <div>
                        <p>Move-in date {property.date}</p>
                        <div className='flex price-head'>
                            <h1 className="blog-card-heading">${property.price}/month</h1>
                            <div className='like-icon-container flex'> <img src={likeIcon} alt="bookmark" className='filter-color-scheme like-icon' /></div>
                        </div>
                        <p>{property.location.city}</p>    
                        <small className="blog-card-para">{property.location.address}, {property.location.city}, {property.location.state}</small>
                    </div>
                    <div>
                        <hr />
                        <div className="blog-stat stats flex">
                            <div className="flex sub-stats">
                                <img src={bedIcon} alt="read time" width="16px" className="filter-color-scheme" />
                                <p>{property.beds}</p>
                            </div>
                            <div className="flex sub-stats">
                                <img src={bathroomIcon} alt="read time" width="16px" className="filter-color-scheme" />
                                <p> {property.beds}</p>
                            </div>
                            <div className="flex sub-stats">
                                <img src={areaIcon} alt="read time" width="16px" className="filter-color-scheme" />
                                <p> {property.area} m<sup>2</sup></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
     );
}

export default Card;