import style from "./Display.module.css"

let Display = ({display})=> {
  return ( 
  <input class={style.display} type="text" value={display} readOnly/>
  )
}
export default Display;
