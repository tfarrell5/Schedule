import './App.css';

function App() {
  return (
    <div className="App">
      <AddItem />
    </div>
  );
}

function AddItem(){
  return(
    <div>
      <form>
        <label for="text-form">Type something: </label>
        <input type="text" id="text-form"/>
      </form>
    </div>
  );
}

export default App;
