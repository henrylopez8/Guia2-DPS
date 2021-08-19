import React from 'react'
const Todo = ({numero,todo,list,index,deleteTodo}) => {

return (
    
    <>
   <div className='separado'>
    <div className="list">
        <h3> {list[0]} - {list[1]} </h3> 
    <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
    </div>
    </div>
    </>
)
}
export default Todo