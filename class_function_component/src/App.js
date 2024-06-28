import './App.css';
import { useState } from 'react';
import ClassComponent from './class';

function App() {
  const [value, setValue] = useState('');

  const onChange = event => setValue(event.target.value);
  return (
    <>
       <ClassComponent/>
    <div>
      <h1>Hello React Function Component!</h1>

      <input value={value} type="text" onChange={onChange} />

      <p>{value}</p>
    </div>
 
   </>
  );
}

export default App;

