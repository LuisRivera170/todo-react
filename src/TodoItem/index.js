import React from 'react';
import './TodoItem.css';

import { CompleteIcon } from '../CompleteIcon';
import { DeleteIcon } from '../DeleteIcon';

export function TodoItem({text, completed, onComplete, onDelete}) {
    return (
       <li className="TodoItem">
           <CompleteIcon completed={ completed } onComplete={ onComplete } />
           <p className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}>{text}</p>
           <DeleteIcon onDelete={ onDelete } />
       </li>
    )
}
