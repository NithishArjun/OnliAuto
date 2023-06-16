import './CarCard.css';

import carImage from '../../images/elevateCar.jpeg'
import carNews from '../../images/carnews.jpeg'
import carCare from '../../images/carcare.jpg'
import carReview from '../../images/carreview.jpg'

export default function CarCard(){
    return (
      <div className="oa-cardContainer">
        <img src={carReview} alt="Car Card Image" />
        <div className="oa-cardContainer__content">
          <h4>Honda City</h4>
          <div className="oa-cardContainer__content--row">
            <span className="oa-label">Average service cost: </span>
            <span className="oa-value">Rs.7,514 /year</span>
          </div>
          <div className="oa-cardContainer__content--row">
            <span className="oa-label">Average mileage: </span>
            <span className="oa-value">22.3 kmpl</span>
          </div>
          <div className="oa-cardContainer__content--row">
            <span className="oa-label">Rating: </span>
            <span className="oa-value">[star rating]</span>
            <span className="oa-label">| 243 users</span>
          </div>
          <div className="oa-cardContainer__content--row">
            <span className="oa-label">Specification: </span>
            <span className="oa-spec">1497cc</span>
            <span className="oa-spec">117bhp petrol engine</span>
            <span className="oa-spec">Petrol/Hybrid</span>
          </div>
        </div>
      </div>
    );
}