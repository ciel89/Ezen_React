import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';

// 카드 데이터를 배열로 정의합니다.
const cardsData = [
  { id: 1, name: 'Alice', age: 28, profession: 'Engineer' },
  { id: 2, name: 'Bob', age: 34, profession: 'Designer' },
  { id: 3, name: 'Charlie', age: 22, profession: 'Developer' },
  { id: 4, name: 'David', age: 30, profession: 'Manager' },
  { id: 5, name: 'Eve', age: 29, profession: 'Writer' }
];

function App() {
  const [showOlder, setShowOlder] = useState(false);

  // 조건에 따라 필터링된 카드 배열을 반환합니다.
  const filteredCards = showOlder
    ? cardsData.filter(card => card.age > 30)
    : cardsData;

  return (
    <div className="App">
      <h1>Information Cards</h1>
      <button onClick={() => setShowOlder(!showOlder)}>
        {showOlder ? 'Show All' : 'Show Older Than 30'}
      </button>
      <div className="card-container">
        {filteredCards.map(card => (
          <Card
            key={card.id}
            name={card.name}
            age={card.age}
            profession={card.profession}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
