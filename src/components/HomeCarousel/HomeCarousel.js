import './HomeCarousel.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faFileAlt,
  faCarAlt,
  faRoadBridge,
  faMotorcycle,
  faFileEdit,
  faMailBulk,
  faNewspaper,
  faHandshakeSimple,
  faCar,
  faCalculator,
  faFileCircleCheck,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";

import carImage from '../../images/elevateCar.jpeg'
import carNews from '../../images/carnews.jpeg'
import carCare from '../../images/carcare.jpg'
import carReview from '../../images/carreview.jpg'

import { useState } from 'react';

export default function HomeCarousel(){
  const carouselCount = 4;
  const [activeCarousel, setActiveCarousel]=useState(1);

  const [isAutoNext, setIsAutoNext] = useState(true);

  const previousClick=()=>{
    if (activeCarousel > 1) {
      setActiveCarousel(activeCarousel-1);
    }
  }

  const nextClick=()=>{
    if (activeCarousel < carouselCount) {
      setActiveCarousel(activeCarousel + 1);
    }
  }
    return (
      <div className="carousel">
        <div className="carousel__each">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={`carousel__each-arrow ${
              activeCarousel > 1 ? "active" : "disabled"
            }`}
            onClick={previousClick}
          />
          <div
            className={`carousel__each-content ${
              activeCarousel === 1 ? "show" : "hide"
            }`}
          >
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
                  <div className="tooltipTop">In-depth Analysis</div>
                </div>
                <div className="icon__each">
                  <FontAwesomeIcon icon={faCarAlt} />
                  <div className="tooltipBottom">Expert Reviews</div>
                </div>
                <div className="icon__each">
                  <FontAwesomeIcon icon={faRoadBridge} />
                  <div className="tooltipTop">Ownership Costs</div>
                </div>
                <div className="icon__each">
                  <FontAwesomeIcon icon={faMotorcycle} />
                  <div className="tooltipBottom">Bike Reviews</div>
                </div>
              </div>
              <button className="common">KNOW MORE...</button>
            </div>
            <div className="carousel__each-content--image">
              <img src={carImage} alt="Get Insights"/>
            </div>
          </div>
          <div
            className={`carousel__each-content ${
              activeCarousel === 2 ? "show" : "hide"
            }`}
          >
            <div className="carousel__each-content--text">
              <h1>
                <div className="highlight">Newsletter</div>Personalized For You
              </h1>
              <p>
                Subscribe to personalized newsletter from
                <span className="highlight"> OnliAuto</span>. We make sure all
                recent happenings in the world of automobile will be at your
                fingertips. Unsubscribe any time.
              </p>
              <div className="carousel__each-content--text-icons">
                <div className="icon__each">
                  <FontAwesomeIcon icon={faFileEdit} />
                  <div className="tooltipTop">Personalized Newsletter</div>
                </div>
                <div className="icon__each">
                  <FontAwesomeIcon icon={faMailBulk} />
                  <div className="tooltipBottom">Email/SMS</div>
                </div>
                <div className="icon__each">
                  <FontAwesomeIcon icon={faNewspaper} />
                  <div className="tooltipTop">New Launches</div>
                </div>
              </div>
              <button className="common">SUBSCRIBE NOW...</button>
            </div>
            <div className="carousel__each-content--image">
              <img src={carNews} alt="Automobile Newsletter" />
            </div>
          </div>
          <div
            className={`carousel__each-content ${
              activeCarousel === 3 ? "show" : "hide"
            }`}
          >
            <div className="carousel__each-content--text">
              <h1>
                <div className="highlight">We Care</div>Your Car
              </h1>
              <p>
                At <span className="highlight"> OnliAuto</span> we know how
                favourite your car is for you. Find tips for car care. If you
                have a running business which deals with car care, we welcome
                you to join our team of service providers.
              </p>
              <div className="carousel__each-content--text-icons">
                <div className="icon__each">
                  <FontAwesomeIcon icon={faHandshakeSimple} />
                  <div className="tooltipTop">Join Our Tem</div>
                </div>
                <div className="icon__each">
                  <FontAwesomeIcon icon={faCar} />
                  <div className="tooltipBottom">Car Care</div>
                </div>
                <div className="icon__each">
                  <FontAwesomeIcon icon={faFileCircleCheck} />
                  <div className="tooltipTop">Car Accessories</div>
                </div>
              </div>
              <button className="common">JOIN OUR TEAM...</button>
            </div>
            <div className="carousel__each-content--image">
              <img src={carCare} alt="Car Care" />
            </div>
          </div>
          <div
            className={`carousel__each-content ${
              activeCarousel === 4 ? "show" : "hide"
            }`}
          >
            <div className="carousel__each-content--text">
              <h1>
                Share Your
                <div className="highlight">Experience</div>
              </h1>
              <p>
                Post your time with your favourite machine in{" "}
                <span className="highlight"> OnliAuto</span>. Let it be in the
                form of photos, videos or text. Help others by providing your
                ownership experience. This matters a lot.
              </p>
              <div className="carousel__each-content--text-icons">
                <div className="icon__each">
                  <FontAwesomeIcon icon={faFileEdit} />
                  <div className="tooltipTop">Write a review</div>
                </div>
                <div className="icon__each">
                  <FontAwesomeIcon icon={faPhotoVideo} />
                  <div className="tooltipBottom">Pictures/Videos</div>
                </div>
                <div className="icon__each">
                  <FontAwesomeIcon icon={faCalculator} />
                  <div className="tooltipTop">Cost of ownership</div>
                </div>
              </div>
              <button className="common">WRITE A REVIEW...</button>
            </div>
            <div className="carousel__each-content--image">
              <img src={carReview} alt="Car Review" />
            </div>
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`carousel__each-arrow ${
              activeCarousel < carouselCount ? "active" : "disabled"
            }`}
            onClick={nextClick}
          />
        </div>
        <div className="carousel__navigator">
          <div
            className={`carousel__navigator-each ${
              activeCarousel === 1 && "active"
            }`}
            onClick={() => setActiveCarousel(1)}
          >
            <h2>Insights</h2>
            <div className="bottomBorder"></div>
          </div>
          <div
            className={`carousel__navigator-each ${
              activeCarousel === 2 && "active"
            }`}
            onClick={() => setActiveCarousel(2)}
          >
            <h2>Newsletter</h2>
            <div className="bottomBorder"></div>
          </div>
          <div
            className={`carousel__navigator-each ${
              activeCarousel === 3 && "active"
            }`}
            onClick={() => setActiveCarousel(3)}
          >
            <h2>Car Care</h2>
            <div className="bottomBorder"></div>
          </div>
          <div
            className={`carousel__navigator-each ${
              activeCarousel === 4 && "active"
            }`}
            onClick={() => setActiveCarousel(4)}
          >
            <h2>Reviews</h2>
            <div className="bottomBorder"></div>
          </div>
        </div>
      </div>
    );
}