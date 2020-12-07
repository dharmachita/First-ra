import './App.css';
import './styles/main.css';
import NavBar from './global/NavBar'
import palette from './assets/colors.json'

function App() {
  const root = document.documentElement;
  palette.map(function(colors){
    return root.style.setProperty(`--${colors.name}`,colors.value);
  });
  
  return (
      <header> 
          <NavBar /> 
      </header>
  );
}

export default App;



