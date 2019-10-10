import React from 'react'

const Task = ({ element }) => {
    return(
        <li>{element}</li>
    )
}

const TasksList = (props) => {
    return(
        <ul>
            {props.task.map((e, i) => <Task  key={i} element={e}/>)}
        </ul>
    )
}

export default TasksList