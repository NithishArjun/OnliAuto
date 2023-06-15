import './HomeCarousel.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faFileEdit, faFile, faFileAlt, faCar, faCarAlt, faCaravan, faCarBurst, faCarTunnel, faRoad, faRoadBarrier, faRoadBridge, faMotorcycle } from "@fortawesome/free-solid-svg-icons";

import carImage from '../../images/elevateCar.jpeg'

export default function HomeCarousel(){
  // PERSONALIZED NEWSLETTER FOR YOU
  // WE CARE YOUR CAR - CAR ACCESSORIES, CAR WASH AND CAR CARE PRODUCTS.
  // SPACE FOR YOUR FAVOURITE CARS ALERTS AND NOTIFICATIONS - SERVICE REMINDERS, INSURANCE DUE ETC.
  // REVIEW YOUR CAR - POST YOUR TIME WITH YOUR VEHICLE LET IT BE PICTURES VIDEOS. HELP OTHERS BY PROVIDING YOUR OWNERSHIP EXPERIENCE WITH THE CAR
  // DREAM IT TODAY, WE KNOW YOU WILL BUY IT  
    return (
      <div className="carousel">
        <div className="carousel__each">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="carousel__each-arrow"
          />
          <div className="carousel__each-content">
            <div className="carousel__each-content--text">
              <h1>
                <div className="highlight">Get Insights</div> For Your Next Car
              </h1>
              <p>
                Buying a new car/bike has never been so easy. With{" "}
                <span className="highlight">OnliAuto</span> you get detailed
                expert reviews and ownership reviews of each and every car
                available in the market. We simpliy your needs.
              </p>
              <div className="carousel__each-content--text-icons">
                <div className="icon__each">
                  <FontAwesomeIcon icon={faFileAlt} />
                  <div className='tooltipTop'>
                    In-depth Analysis
                  </div>
                </div>
                <div className="icon__each">
                  <FontAwesomeIcon icon={faCarAlt} />
                  <div className='tooltipBottom'>
                    Expert Reviews
                  </div>
                </div>
                <div className="icon__each">
                  <FontAwesomeIcon icon={faRoadBridge} />
                  <div className='tooltipTop'>
                    Ownership Costs
                  </div>
                </div>
                <div className="icon__each">
                  <FontAwesomeIcon icon={faMotorcycle} />
                  <div className='tooltipBottom'>
                    Bike Reviews
                  </div>
                </div>
              </div>
              <button className='common'>KNOW MORE...</button>
            </div>
            <div className="carousel__each-content--image">
              <img src={carImage} />
            </div>
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="carousel__each-arrow"
          />
        </div>
      </div>
    );
}