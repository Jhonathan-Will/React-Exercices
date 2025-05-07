import './App.css'

import { AppProvider } from './components/exercice4/Context/Context'

import Exercice from "./components/exercice1/exercice"
import Exercice2 from "./components/exercice2/exercice"
import Exercice3 from "./components/exercice3/exercice"
import Exercice4 from "./components/exercice4/exercice"

function App() {

  return (
    <>
      <h1>Exercício 1</h1>  
      <Exercice/>

      <h1>Exercício 2</h1>
      <Exercice2/>

      <h1>Exercicio 3</h1>
      <Exercice3/>

      <h1>Exercicio 4</h1>
      <AppProvider>
        <Exercice4/>
      </AppProvider>
    </>
  )
}

export default App
