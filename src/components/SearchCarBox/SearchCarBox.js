import './SearchCarBox.css'

export default function SearchCarBox(){
    return (
      <div className="searchCarBox">
        <h3>Getting Started</h3>
        <p>Search for your favourite machine here. Find expert reviews, ownership reviews, average mielage, tips and more...</p>
        <div className="oneColForm">
          <div className="oneColForm__control">
            <label>Brand</label>
            <select></select>
          </div>
          <div className="oneColForm__control">
            <label>Model</label>
            <select></select>
          </div>
          <div className="oneColForm__control">
            <button className="common">SEARCH YOUR CAR</button>
          </div>
          <div className="oneColForm__control rightAlign">
            <a><label>Advanced Search &gt;</label></a>
          </div>
        </div>
      </div>
    );
}