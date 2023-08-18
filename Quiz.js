import React, { useState } from "react";
import { QuizData } from "./QuizData";
import QuizResult from "./QuizResult";

function Quiz() {
  
  const [currentquestion, setcurrentquestion]=useState(0)
  const [clickedOption, setclickedOption] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult,setShowResult]=useState(false);

  const changeQuestion = ()=>{
    updateScore();
        if(currentquestion< QuizData.length-1){
          setcurrentquestion(currentquestion+1);
            setclickedOption(0);
        }else{
            setShowResult(true)
        } 
  }

  const updateScore=()=>{
    if(clickedOption===QuizData[currentquestion].answer){
        setScore(score+1);
    }
}
const resetAll=()=>{
  setShowResult(false);
    setcurrentquestion(0);
    setclickedOption(0);
    setScore(0);
}

  

  return (
    <div>
      <h1>Quiz App</h1>
      <div className="contenar">

      {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
            ):(

              <>

        <div className="questions">
          <span id="question-number">{currentquestion+1}.</span>
          <span id="question-txt">{QuizData[currentquestion].question}</span>
        </div>

        <div className="option-contenar">

          {QuizData[currentquestion].option.map((option, index) =>{

            return(
              <button 
              // className="option-btn"
              className={`option-btn ${
                clickedOption == index+1?"checked":null
            }`}
            key={index}
            onClick={()=>setclickedOption(index+1)}             
              
              >

                {option}
              </button>
            )
          })}
        </div>
        

        <input type="button" value="next" className="input-type" onClick={changeQuestion} />

        </>)}
        
      </div>
    </div>
  );
}

export default Quiz;
