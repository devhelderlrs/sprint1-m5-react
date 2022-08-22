import {Header} from "./components/header/Header.jsx"
import {ParagrafoApp} from "./components/paragraphs/Paragraphs.jsx"
import GridCards from "./components/Cards/GridCards.jsx"
import Footer from "./components/footer/Footer.jsx"
import {FormApp} from "./components/forms/Forms.jsx"
import './app.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="para-form-app">
      <ParagrafoApp/>
      <FormApp/>
      </div>
      <GridCards/>
      <Footer/>
    </div>
  )
}

export default App