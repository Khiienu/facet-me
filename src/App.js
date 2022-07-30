import { React, useState } from 'react'

function App() {
  const [counter, setCounter] = useState(75)

    //* if the person *hits* then the percentage goes down by 10. 
    const hit = () => {
        if (counter === 25 ){
          setCounter(count => count+0)
        }
        else{
        setCounter(count => count-10 )
        }
    };

    //! if the person *misses* then the percentage goes up by 10.
    const miss = () => {
        if (counter === 75 ){
          setCounter(count => count+0)
        }
        else {
        setCounter(count => count+10)
        }
    }
    






  return (
    <div className="App">
      {counter}
      <div className="engravings-pos1">
        positive engraving 1
        <div className="buttons">
          <button className="button" onClick={hit}> + </button>
          <button className="button" onClick={miss}> - </button>
        </div>
      </div>
      <div className="engravings-pos2">
        positive engraving 2
        <div className="buttons">
          <button className="button" onClick={hit}> + </button>
          <button className="button" onClick={miss}> - </button>
        </div>
      </div>
      <div className="engravings-neg1">
        negative engraving 
        <div className="buttons">
          <button className="button" onClick={hit}> + </button>
          <button className="button" onClick={miss}> - </button>
        </div>
      </div>
      <div className="toolbar">
        this is tool bar
      </div>
    </div>
  );
}

export default App;
