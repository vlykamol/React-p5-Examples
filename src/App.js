import './App.css';
// import Sketch from './components/Sketch'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import TodoList from './components/TodoList';
import TodoList1 from './components/TodoList1';

function App() {
  return (
    <div className="container">
      <div className = "canvas" >
      {/* <Sketch /> */}
      </div>
      <div className = "overlayBox">
          <Navbar />
          <MainPage />
          <TodoList1 />
          {/* <TodoList /> */}
      </div>
    </div>
  );
}

export default App;
