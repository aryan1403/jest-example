import { createContext, useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navBar';
import Login from './Pages/login';
import { Link } from 'react-router-dom';
import Counter from './counter';


function App() {
  const [a, seta] = useState(0);
  const [theme, settheme] = useState('light')
  const themeContext = createContext('light');
  
  function Button(props) {
    return (
      <themeContext.Consumer>
        {theme => (
          <button className={theme}>{theme}</button>
        )}
      </themeContext.Consumer>
    );
  }
  useEffect(() => {
    console.log("hello started");
  }, []);
  return (
    <>
    {/* <themeContext.Provider value={theme}>
    <h2>hello react {a + 5}</h2>
    <NavBar name="Arush" />
      <Link  to="/login">
        <button>login page</button>
      </Link>
    <button className='btn btn-primary' onClick={() => {
      
      seta(a+1)
      console.log(a);
    }}>click me</button>
    <Button name={theme}/>

    </themeContext.Provider> */}
    <Counter />
    </>
  );
}

export default App;
