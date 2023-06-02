import React, {useState} from 'react'
import Itemlist from './Itemlist';
import Newitem from './Newitem'
import './App.css';

const App =()=> {
  const [content,setcontent] = useState([
{id:'cg1',text:'eat'},
{id:'cg2',text:'sleep'},
{id:'cg3',text:'code'},
{id:'cg4',text:'repeat'}
]);

  const addTodolist =((newitem)=>{
    setcontent(content.concat(newitem));
  })
  return (
    <div>
    <h1>TODO LIST</h1>
    <Newitem addTodolist={addTodolist}/>
    <Itemlist goals={content}/>
    </div>
  );
}

export default App;
