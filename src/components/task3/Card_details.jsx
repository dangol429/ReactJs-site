import React from 'react';
import Nav from '../nav/Nav';
import './card_details.css'
/*  importing location library in order to get the data from task2 */
import { useLocation } from 'react-router-dom';

/*  Declaring the function to get card details.*/
const Card_details = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const name = params.get('name');
  const avatar = params.get('avatar');

  return (
    <>
      <Nav />
      <section className='container'>
        <article className='card-content'>
          <h1>Card Details</h1>
          <p>ID: {id}</p>
          <p>Name: {name}</p>
          {avatar && <img src={decodeURIComponent(avatar)} alt='Avatar' />}
        </article>
      </section>
    </>
  );
};

export default Card_details;
