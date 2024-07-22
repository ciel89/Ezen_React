import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // 스타일을 별도로 정의할 수 있습니다.

function Card({ name, age, profession }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  profession: PropTypes.string.isRequired,
};

export default Card;
