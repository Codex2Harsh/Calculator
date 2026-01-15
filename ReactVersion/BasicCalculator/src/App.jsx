import style from "./App.module.css"
import Display from "./components/display"
import ButtonsContainer from "./components/ButtonsContainer"
import { useState } from "react"
function App() {
  let[calVal , selectButton] = useState([""]);
  let onClickButton =(buttonText) => {
    if(buttonText === 'C'){
      selectButton("")
    }else if(buttonText ==='='){
      const result = eval(calVal)
      selectButton(result)
    }else{
      let newState=calVal + buttonText
      selectButton(newState);
    }
  }

  return <div className={style.calculator}>
   <Display display = {calVal}/>
    <ButtonsContainer onPress={onClickButton}/>
  </div>

}

export default App
