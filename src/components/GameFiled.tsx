import React from 'react';
import {card,Card} from './Card';

// スタート画面を表示する
// 

type cards = {
    cards : card[];
}



function GameFiled(prop:cards) {
    const {cards} = prop;
    console.log(cards);
  return (
    <>
     <div className="game-field">
      {
          cards.map((card) => (
                <Card illustration={card.illustration} opened={card.opened}  />
          ))
      }
     </div>
    </>
  );
}

export default GameFiled;