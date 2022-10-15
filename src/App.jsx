import React from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>ScoVerseへようこそ</h1>
      <ColofulMessage color="blue">メタマスク認証したい</ColofulMessage>
      <ColofulMessage color="pink">まだできない</ColofulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
