import React from 'react';
function Work({worklist,close}){
    return (
      <>
        {worklist.map((item)=>
          <div key={item.id} className='content'>
             <input type='checkbox' /> 
             <output>{item.task}</output>
             <span onClick={()=>close(item.id)} className='remove'></span>
          </div>
        )}
      </>
    ) 
}
  export default Work;