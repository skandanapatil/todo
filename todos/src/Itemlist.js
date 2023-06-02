import React from 'react';
import './Itemlist.css'
const Itemlist =props=>{
	return(
		<ul className='Itemlist'>
		{props.goals.map(goal=>{
			return <li key={goal.id}>{goal.text}</li>
		})}
		</ul>
		)

}

export default Itemlist;