import CarNavigatorContainer from "../components/CarNavigatorContainer/CarNavigatorContainer";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import HomeNewsContainer from "../components/HomeNewsContainer/HomeNewsContainer";
import HomeNewsSidebar from "../components/HomeNewsSidebar/HomeNewsSidebar";
import SearchCarBox from "../components/SearchCarBox/SearchCarBox";

export default function Home(){
    return (
      <div className="pageContainer">
        <HomeCarousel />
        <div className="sectionTwo">
          <SearchCarBox />
          <CarNavigatorContainer />
        </div>
        <div className="sectionThree">
          <HomeNewsContainer />
          <HomeNewsSidebar />
        </div>
      </div>
    );
}