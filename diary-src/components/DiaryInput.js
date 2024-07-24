import React, { useState } from 'react';
import PropTypes from 'prop-types';

function DiaryInput({ onAdd }) {
  const [entry, setEntry] = useState('');

  const handleChange = (e) => {
    setEntry(e.target.value);
  };

  const handleAdd = () => {
    if (entry.trim() === '') return; // 빈 항목 추가 방지
    onAdd(entry);
    setEntry('');
  };

  return (
    <div className="input-container">
      <textarea
        value={entry}
        onChange={handleChange}
        placeholder="Write your diary entry..."
        rows="5"
        cols="30"
      />
      <button onClick={handleAdd}>Add Entry</button>
    </div>
  );
}

DiaryInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default DiaryInput;
