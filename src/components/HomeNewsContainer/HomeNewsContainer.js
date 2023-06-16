import NewsCard from '../NewsCard/NewsCard';
import './HomeNewsContainer.css';

export default function HomeNewsContainer(){
    return (
        <div className='oa-HomeNewsContainer'>
            <h2><span className='highlight'>AUTO NEWS </span>- JUST IN, NEW LAUNCHES, SCOOPS & MORE.</h2>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    )
}