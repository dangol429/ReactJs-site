import React from 'react';
import Nav from '../nav/Nav';
import './card_details.css'
import { useLocation } from 'react-router-dom';

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
