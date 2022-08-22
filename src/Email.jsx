import {HeaderEmail} from "./components/header/Header.jsx"
import {ParagrafoEmail} from "./components/paragraphs/Paragraphs.jsx"
import GridCardsEmail from "./components/Cards/GridCards.jsx"
import Footer from "./components/footer/Footer.jsx"
import './app.css'

export default function Email() {
  return (
    <div className="Email">
      <HeaderEmail/>
      <ParagrafoEmail/>
      <GridCardsEmail/>
      <Footer/>
    </div>
  )
}