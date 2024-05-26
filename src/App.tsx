import React from 'react';
import './App.css';
import GameStart from './components/GameStart';
import {Card} from './components/Card';

function App() {

  const card = {
    illustration: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghBpX3a6ElnHnjyyjcdWzhVYpsrNbb5q1JxQe2vzy5CdBy1cXc1LpFhQm6qydZHJcTd4J_IVYob5azYtikXSLdyQFkU0gOy7YBGMjfL51_IJzuX2AiVaqBWBIKMvMwVj2PPUZLhU_UoVWn/s400/penguin15_cape.png",
    opened: false
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <Card illustration={card.illustration} opened={card.opened}  />
      </header>
    </div>
  );
}

export default App;
