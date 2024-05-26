import React from 'react';

// スタート画面を表示する

export type card = {
    illustration: string;
    opened: boolean;
}


/*
    * ペンギンのカードを表示する。
    * propでカードのペンギンのイラストのパスを渡す。<img src={prop.illustration} alt="ペンギンのイラスト" />でイメージを表示する
    * onClilk関数を用いてカードをクリックしたときにカードの状態をture/flaseで切り替える
    * カードがオープンしているときはカードのイラストを表示する。カードがクローズしているときはカードの裏面(ペンギンの絵)を表示する if文使うか？もしくは非表示にするか？

 */

const tf = (opened:boolean) => {
    if (opened == true){
        alert("表")
    }else if(opened == false){
        alert("裏")
    }else{
        alert("カードの状態取得失敗")
    }
}
export function Card(prop:card) {
    

  return (
    <div>
        <img src={prop.illustration} alt="ペンギンのイラスト" onClick={()=>tf(prop.opened)} />
    </div>
  );
}

