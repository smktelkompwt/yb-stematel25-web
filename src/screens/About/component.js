import React from 'react';
import './style.css';
import contributors from '../../data/contributor.json'

const AboutUs = () =>  {
  const checkPath = (path) => {
    try {
        return require(`../../data${path}`)
    } catch (err) {
        return require('../../assets/img/no-image.png')
    }
  };
  
  return (
    <div className="container row contributor_container mx-auto">
      {
        contributors.map((value,key) => {
          return(
            <>
            <div key={key} className="contributor__section col-lg-3 col-xl-3 col-xs-12">
              <img className="contributor__image" src={checkPath(value.photo)} alt=""/>
              <p className="">{value.name}</p>
              <p className="">{value.role}</p>
            </div>
            </>
          )
        })
      }
      
    </div>
  );
}

export default AboutUs;
