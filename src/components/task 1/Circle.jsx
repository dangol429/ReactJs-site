import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNumberOfCircles } from '../circleSlice';
import './Circle.css'

const Circle = () => {
  const numberOfCircles = useSelector((state) => state.circle.numberOfCircles);
  const dispatch = useDispatch();

  const [circles, setCircles] = React.useState([{ id: 1, counter: 0, color: 'yellow' }]);

  const changeNumbCol = (id) => {
    setCircles((prevCircles) =>
      prevCircles.map((circle) =>
        circle.id === id
          ? { ...circle, counter: circle.counter + 1, color: generateRandomColor() }
          : circle
      )
    );
  };

  const duplicateItem = (id) => {
    dispatch(setNumberOfCircles(numberOfCircles + 1))
    if (circles.length < 10) {
      setCircles((prevCircles) => [
        ...prevCircles,
        { id: prevCircles.length + 1, counter: 0, color: 'yellow' },
      ]);
    }
  };

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let a = 0; a < 6; a++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const incrementCircles = () => {
    dispatch(setNumberOfCircles(numberOfCircles + 1));
  };

  return (
    <section id='container'>
      {circles.map((circle) => (
        <article className='content' key={circle.id}>
          <div className='circle' style={{ background: circle.color }}>
            <span id='counter'>{circle.counter}</span>
            <span id='color'>{circle.color}</span>
            <div className='buttons'>
              <button className='btn btn-primary' onClick={() => changeNumbCol(circle.id)}>
                Change
              </button>
              <button className='btn btn-primary' onClick={() => duplicateItem(circle.id)}>
                Duplicate
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Circle;
