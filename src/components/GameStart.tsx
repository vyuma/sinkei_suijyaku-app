import React from 'react';

// スタート画面を表示する

const start = () => {
    alert("ゲーム開始");
}


function GameStart() {
  return (
    <>
        <div className="GameStart">
            <h1>ペンギン逢わせ</h1>
            <p>ゲームを始める</p>
            <button onClick = {()=>start()}>スタート</button>
        </div>
    </>
  );
}

export default GameStart;
