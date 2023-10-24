import './App.css';
import { Todos } from './Todos';


function App() {
  return (
<div className='containerParent'>
    <div className='container'>
        <h1 > TODO LIST</h1>
    </div>
    <div>
        <Todos />  
    </div>
</div>  
);
}

export default App;
