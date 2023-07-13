import React, { useEffect, useState } from 'react';
import Nav from '../nav/Nav';
import './card.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Card = () => {
  const [users, setUsers] = useState([]);
  const numberOfCircles = useSelector((state) => state.circle.numberOfCircles) || 1;
  
/* Fetching from the api's and fitted it in an array */
  
  useEffect(() => {
    fetch(`https://random-data-api.com/api/v2/users?size=${numberOfCircles}`)
      .then((response) => response.json())
      .then((data) => {
        const dataArray = Array.isArray(data) ? data : [data];
        setUsers(dataArray);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [numberOfCircles]);

  /* Function to pass the details about the card from task2 to task3 so using an event */
  
  const handleCardClick = (event, user) => {
  const { id, first_name, last_name, avatar } = user;
  const url = `/task3?id=${id}&name=${encodeURIComponent(
    `${first_name} ${last_name}`
  )}&avatar=${encodeURIComponent(avatar)}`;
  window.location.href = url;
};
  
  

  return (
    <>
      <Nav task2='active' />
      <section className='card-grid'>
        {users.map((user) => (
          <div className='card' key={user.id}>
            <article className='card-details'>
              <span className='card-id'>ID: {user.id}</span>
              <span className='card-name'>Name: {`${user.first_name} ${user.last_name}`}</span>
              <span className='card-title'>{user.title}</span>
              <img className='card-avatar' src={user.avatar} alt='Avatar' />
              <button className='btn btn-primary' onClick={(event) => handleCardClick(event, user)}>Know More!</button>
            </article>
          </div>
        ))}
      </section>
    </>
  );
};

export default Card;
