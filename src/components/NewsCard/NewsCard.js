import './NewsCard.css';
import carNews from '../../images/carnews.jpeg'

export default function NewsCard(){
    return (
      <div className="oa-NewsCard">
        <img src={carNews} alt="Auto News" className='thumbnail'/>
        <div className="oa-NewsCard__content">
          <a href="#" className="link">
            Hyundai Exter interior officially unveiled.
          </a>
          <p className="newsSubTitle">
            Exter deliveries to start by mid-July; will be sold with petrol and
            CNG powertrain options.
          </p>
          <p className="newsContent">
            The Exter’s steering wheel and dashboard design are quite similar to
            the Grand i10 Nios and Aura, however, there are quite a few unique
            elements. Firstly, the interior gets an all-black colour scheme
            instead of the grey/black or bronze/black interior seen on the Nios
            and Aura...
          </p>
          <p className='newsFooter'>
            Published on 16/June/2023
          </p>
        </div>
      </div>
    );
}