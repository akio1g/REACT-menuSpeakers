import Speakers from './components/Speakers'
import './css/App.css'
import Header from './components/Header'
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1></h1>
        <Header />
        <Speakers />
      </div>
    </ThemeProvider>
  )
}

export default App
