import './App.css';
import { User } from './User.js'

function App() {
    const users = [
        {name: 'Tikka', age: 21, email: 'tikka@tikka.com'},
        {name: 'Jake', age: 11, email: 'NoNe'},
        {name: 'Tobby', age: 17, email: 'tobby@tobby.com'}
    ]
  return (
    <div className="App"> 
      {users.map((user, key) => {
          return <User name = {user.name} age = {user.age} email = {user.email}/>
      })}
    </div>
  );
}



export default App;
