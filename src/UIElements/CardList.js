import React, { useEffect,cssProperties} from 'react';
import Card from './Card';
import './CardList.css';
import Backdrop from './Backdrop';
import HashLoader from 'react-spinners/HashLoader';


const CardList = ({items}) => {

  if (items.length === 0) {
    return (
      <React.Fragment>
        <Backdrop />
        <div className="loader">
          <HashLoader size={120} color="#99aff6" />
          <div className="loader-txt">Achieve Great in Style Mf</div>
          </div>
      </React.Fragment>
    );
  }
  console.log(items);
    return (
      <ul className="card-list">
        {items.map((item) => (
          <div className='card'>
          <Card
          id={item.id}
          Title={item.title}
          Poster={item.poster_path}
          Plot={item.overview}
            />
            </div>
        ))}
      </ul>
    );
  
  
};

export default CardList;
