import React, { useState } from 'react';
import './App.css';
import DiaryInput from './components/DiaryInput';
import DiaryList from './components/DiaryList';

function App() {
  const [entries, setEntries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const editEntry = (index) => {
    setEditIndex(index);
    setEditText(entries[index]);
  };

  const saveEdit = () => {
    const updatedEntries = [...entries];
    updatedEntries[editIndex] = editText;
    setEntries(updatedEntries);
    setEditIndex(null);
    setEditText('');
  };

  const deleteEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Diary App</h1>
      <DiaryInput onAdd={addEntry} />
      {editIndex !== null && (
        <div className="edit-container">
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            rows="5"
            cols="30"
          />
          <button onClick={saveEdit}>Save</button>
          <button onClick={() => setEditIndex(null)}>Cancel</button>
        </div>
      )}
      <DiaryList
        entries={entries}
        onEdit={editEntry}
        onDelete={deleteEntry}
      />
    </div>
  );
}

export default App;
