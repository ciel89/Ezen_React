import React from 'react';
import PropTypes from 'prop-types';
import DiaryItem from './DiaryItem';

function DiaryList({ entries, onEdit, onDelete }) {
  return (
    <div className="diary-list">
      {entries.map((entry, index) => (
        <DiaryItem
          key={index}
          entry={entry}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

DiaryList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.string).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DiaryList;
