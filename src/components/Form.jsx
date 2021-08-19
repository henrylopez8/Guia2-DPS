import React,{useState} from 'react'
import Todo from '../components/Todo';
const Form = () => {
    const [todo, setTodo]=useState ({
    
    })

    const [numeros,setnumeros]=useState([])
   
    const [numero, setnumero]=useState ({})
    const [todos,setTodos]=useState([


    ]
    



    )
    const [list,setList]=useState([])

 
    
const handleChange = e => setTodo (
    /* [e.target.name]: */ e.target.value)
const handleChange1 = e => setnumero (/* [e.target.name]:  */e.target.value)
const handleClick = e => {
    
        if(Object.keys(todo).length === 0 /* || todo.todo.trim() === '' */){
            alert('el campo no puede estar vacio')
            return
      
    }
    setTodos([...todos,todo]);
    if(Object.keys(numero).length === 0 /* || numero.numero.trim() === '' */){
        alert('el campo no puede estar vacio')
        return
        
}

setnumeros([...numeros,numero]);
const datos={todo,numero};
if(todo &&numero){
    setList((ls)=>[...ls,datos])
}
}
const deleteTodo = indice => {
    const newTodos =[...list]
    newTodos.splice(indice,1)
    setList(newTodos)
  
/*     const newnumeros =[...numeros]
    newnumeros.splice(indice,1)
    setnumeros(newnumeros) */


   /*  const newnumeros =[...datos]
    newnumeros.splice(indice,1)
    setTodos(newnumeros) */
}

return (
    <>
    <form onSubmit = {e=> e.preventDefault()}>
            <label> Agregar tarea</label> <br/>
            <input type="text"placeholder="Producto" name="todo"    onChange={handleChange} />
            <input type="text"placeholder="Cantidad" name="numero"   onChange={handleChange1} />
            <button onClick={handleClick}> agregar</button>



    </form>
  
    

  {
 
  
  
  /*   {
    //  todos.map((value,index)=>(<Todo todo={value.todo} />))
    numeros.map((value,index) => (
        <Todo numero={value.numero} todo={value.todo}key={index} index={index} deleteTodo={deleteTodo}/>
  
        ))



        
  }
    {
       
        todos.map((value, index) => (
        
            <Todo numero={value.numero} todo={value.todo}key={index} index={index} deleteTodo={deleteTodo}/>
            ))
            
    } */}
    {
     list.map((a,index)=>
     
     <div>

     <Todo list= {[numero, todo]} key={index} index={index}deleteTodo={deleteTodo} /> 

     </div>
 
     )
     
     
     
    }
 
   
  </>
)
}
export default Form 