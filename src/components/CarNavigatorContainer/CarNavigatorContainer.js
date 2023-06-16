import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CarCard from '../CarCard/CarCard'
import './CarNavigatorContainer.css'

export default function CarNavigatorContainer(){

  const arrowClickHandler = (direction)=>{
    const carNavigator = document.getElementById('carNavigator');
    if(carNavigator){
      carNavigator.scroll({
        left: (carNavigator.scrollLeft + (direction === "left" ? -200 : 200)),
        behavior:'smooth'
      });
    }
  }

    return (
      <div className="oa-carNavigatorOuterContainer">
        <div
          className="oa-arrow left"
          onClick={() => arrowClickHandler("left")}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div
          className="oa-arrow right"
          onClick={() => arrowClickHandler("right")}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="oa-carNavigatorContainer" id="carNavigator">
          <div className="oa-carNavigatorContainer__card">
            <CarCard />
          </div>
          <div className="oa-carNavigatorContainer__card">
            <CarCard />
          </div>
          <div className="oa-carNavigatorContainer__card">
            <CarCard />
          </div>
          <div className="oa-carNavigatorContainer__card">
            <CarCard />
          </div>
          <div className="oa-carNavigatorContainer__card">
            <CarCard />
          </div>
        </div>
      </div>
    );
}