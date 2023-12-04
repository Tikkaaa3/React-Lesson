import './App.css';

function App() {
  return (
    <div className="App"> <User/> </div>
  );
}

const User = () => {   // Components should start with capital letter!!
    return (
        <div>
            <h1>Tikka</h1>
            <h2>21</h2>
            <h2>tikka@tikka.com</h2>
        </div> 
    )
};

export default App;
