import styles from "./App.module.css"
import Display from "./Components/Display.jsx"
import Buttons from "./Components/BtnsContainer.jsx";

function App(){
  return <div className={styles.calculator} >
    <Display></Display>
    <Buttons></Buttons>
  </div>
}

export default App;