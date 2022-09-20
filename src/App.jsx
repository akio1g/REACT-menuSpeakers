import Speakers from './components/Speakers'
import './css/App.css'
import Header from './components/Header'
import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext();

function App() {
  // muda o state do theme mas ainda não muda o visu
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div>
        <Header />
        <Speakers />
      </div>
    </ThemeContext.Provider>
    
  )
}

export default App
