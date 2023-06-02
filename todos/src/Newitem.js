import React,{useState} from 'react';
import './Newitem.css';
const Newitem =(props)=>{
	const[input,setinput]=useState('');
	const newitempush =(event)=>{
		 event.preventDefault();
		const newitem={
			id:Math.random.toString(),
			text:input,
		};
		props.addTodolist(newitem);
	}
	const newInput =(event)=>{
		setinput(event.target.value);
	}
	return(
		<div className ='Newitem'>
		<input type='search' onChange={newInput}/>
		<button onClick={newitempush}>Submit</button>
		</div>
		)
}

export default Newitem;