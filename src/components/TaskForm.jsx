import React, { useContext } from 'react';
import { AppContext } from '../App';

const TaskForm = () => {

	const { handleSubmit, setInput } = useContext(AppContext)

	return (
		<div>
			<h1 className='text-center font-bold text-6xl text-white pt-5 drop-shadow-md font-serif'>To Do List </h1>
			<form
				className='flex justify-center content-center mt-10 '
				onSubmit={handleSubmit}>
				<input
					className='formSection-input text-lg outline-none p-3 drop-shadow-xl placeholder:italic rounded-l-md w-96
					pl-5 text-green-600 italic font-medium focus:border-green-300 focus:border-2 '
					autoFocus 
					placeholder='add a new task . . .'
					onChange={e => setInput((e.target.value))}
					type='text' />
				<button className='bg-green-700 text-white px-4 pb-1 drop-shadow-xl rounded-r-md font-black text-3xl hover:bg-green-400 ease-out'>+</button>
			</form>
			<div className='errorMsj-container flex justify-center content-center flex-col flex-wrap'></div>
		</div>
	)
}

export default TaskForm;
