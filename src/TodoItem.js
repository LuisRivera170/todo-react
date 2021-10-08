import React from 'react';
import './TodoItem.css';

export function TodoItem({text, completed}) {
    return (
       <li className="TodoItem">
           <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>√</span>
           <p className={`TodoItem.p ${completed && 'TodoItem-p--completed'}`}>{text}</p>
           <span className='Icon Icon-delete'>X</span>
       </li>
    )
}
