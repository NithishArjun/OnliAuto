import { faEnvelope, faMobile, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HomeNewsSidebar.css';

export default function HomeNewsSidebar(){
    return (
      <div className="oa-HomeNewsSidebar">
        <div className="subscribeContent">
          Whether you would like to receive personalized newsletter in your
          inbox / message app?
          <div className="chkControl">
            <input type="checkbox" />
            &nbsp;&nbsp;
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;&nbsp;Email
          </div>
          <div className="chkControl">
            <input type="checkbox" />
            &nbsp;&nbsp;
            <FontAwesomeIcon icon={faMobileAlt} />
            &nbsp;&nbsp;Whatsapp
          </div>
        </div>
        <div className="subscribeBtn">
          <button className="common">SUBSCRIBE NOW</button>
        </div>
      </div>
    );
}