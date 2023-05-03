import React, { useContext } from "react";
import { AppContext } from "../App";

const TaskForm = () => {

	const { handleSubmit, setInput } = useContext(AppContext)

	return (
		<div>
			<h1>To Do List :</h1>
			<form
				className='formSection'
				onSubmit={handleSubmit}>
				<input
					autoFocus
					className='formSection-input'
					placeholder='add a new task'
					onChange={e => setInput((e.target.value))}
					type="text" />
				<button>Add</button>
			</form>
			<div className='errorMsj-container'></div>
		</div>
	)
}

export default TaskForm;
