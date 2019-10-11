import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core'

const TasksList = ({ data, changeStatus, tag, title, deleteTask }) => {
	return (
		<List>
			<h2>{title}</h2>
			{data.reverse().map((e, i) => (
				<ListItem button key={i}>
					<ListItemText onClick={() => changeStatus(e.id)}>
						{tag} {e.text}
					</ListItemText>
					<Button variant={'contained'} onClick={() => deleteTask(e.id)}>
						x
					</Button>
				</ListItem>
			))}
		</List>
	)
}

export default TasksList
