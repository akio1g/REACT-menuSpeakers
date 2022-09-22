import Speakers from './components/Speakers'
import Header from './components/Header'
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthContextProvider} from './contexts/AuthContext';

function App() {

  async function getData() {
        
    const response = await fetch('api/speakers');
    const data = await response.json();
    console.log(data)
  }

  return (
    <AuthContextProvider initialLogin='Akio'>
      <ThemeProvider>
        <div>
          <h1 onClick={() => getData()}>TESTE</h1>
          <Header />
          <Speakers />
        </div>
      </ThemeProvider>
    </AuthContextProvider>
  )
}

export default App
