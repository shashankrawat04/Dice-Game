import GamePlay from "./Components/GamePlay";
import StartGame from "./Components/StartGame";
import { useState } from "react";

function App() {
  const [isGameStarted, SetIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    SetIsGameStarted((prev) => !prev);
  };
  return (
    <>
    {
      isGameStarted ? <GamePlay/>: <StartGame toggle={toggleGamePlay}/>
    }
      
    </>
  );
    

}

export default App;
