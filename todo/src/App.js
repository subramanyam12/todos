
import './App.css';
import Work from './Work';
import React,{ useState,useEffect } from 'react';
import axios from 'axios';

function App() {

  const [worklist,setlist]=useState([]);
  const [inputvalue,setvalue]=useState('');
useEffect(()=>{
  // fetch('http://127.0.0.1:8000/data/')
  // .then(res=>res.json())
  // .then(data=>setlist(data))
  axios.get('http://127.0.0.1:8000/data/')
  .then(res=>setlist(res.data))
},[])


  const close= (id) => {
    setlist(filterlist=>filterlist.filter((item)=>item.id!==id));
    axios.delete('http://127.0.0.1:8000/data/'+id)
   //const filterlist=worklist.filter((item,i)=>i!==id)
   // setlist(filterlist)
  }

  return (
    <div className="App">
      <div className='box'>
        <h2>TO DO LIST</h2>
        <div className='input'>
          <input onKeyDown={(e)=>{
             if(e.key==="Enter"){
              {inputvalue && setlist([...worklist,{task:inputvalue,id:parseInt(worklist[worklist.length-1].id)+1}])};
              setvalue('');
            }
          }} placeholder='Enter todo....' value={inputvalue} onChange={e=>setvalue(e.target.value)} type='text'/>
          <button onClick={()=>{
              {inputvalue && setlist([...worklist,{task:inputvalue,id:parseInt(worklist[worklist.length-1].id)+1}])};
              axios.post('http://127.0.0.1:8000/data/',{task:inputvalue,completed:true})
              .then(res=>setlist([...worklist,res.data]))
              .catch(err=>setlist(worklist))
              setvalue('');
            }
            }>Add</button>
        </div>

        <div className='main'>
          <Work close={close} worklist={worklist} />
        </div>

      </div>  
    </div> 
  );
}

export default App;
