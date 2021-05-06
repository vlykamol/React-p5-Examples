import './App.css';
import Sketch from './Sketch'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <div className = "canvas" >
      <Sketch />
      </div>
      <div className = "overlayBox">
        <div className = "navbar">
            <Navbar />
        </div>
        <div>hi</div>
      </div>
      
    </div>
  );
}

export default App;
