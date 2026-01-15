import style from "./ButtonsConatianer.module.css"

let ButtonsContainer = ({onPress}) => {
  
  const buttons = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return <div className={style.buttonsContainer}>
    {buttons.map(buttonName=> 
    <button className={style.button} onClick={() => onPress(buttonName)}>{buttonName}</button>)}
    </div>
}
export default ButtonsContainer;
