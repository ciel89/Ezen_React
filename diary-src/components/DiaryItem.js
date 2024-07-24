import React from 'react';
import PropTypes from 'prop-types';

function DiaryItem({ entry, onEdit, onDelete }) {
  return (
    <div className="diary-item">
      <p>{entry}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

DiaryItem.propTypes = {
  entry: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DiaryItem;
