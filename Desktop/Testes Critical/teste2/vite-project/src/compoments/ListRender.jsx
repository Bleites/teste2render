import { useState } from 'react';

const ListRender = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState('');

	const [filter, setFilter] = useState('');

	const addTask = () => {
		setTodos([...todos, { id: Math.random(), task: task }]);
		setTask('');
	};

	const removeTask = (id) => {
		setTodos([...todos.filter((todo) => todo.id != id)]);
		alert(`task com o id: ${id} removida`);
	};
	// const removeTask = (id) => {
	// 	console.log('id', id);
	// };

	return (
		<div>
			<input
				type="text"
				placeholder="add to the basket"
				onChange={(e) => setTask(e.target.value)}
				value={task}
			/>
			<div>
				<button onClick={addTask}>Add</button>
			</div>

			{todos &&
				todos
					.filter((todo) => todo.task.includes(filter))
					.map((todo) => (
						<p key={todo.id}>
							{todo.task} <button onClick={() => removeTask(todo.id)}>X</button>
						</p>
					))}

			<div>
				<input
					type="text"
					placeholder="search your task"
					onChange={(e) => setFilter(e.target.value)}
					value={filter}
				/>
			</div>
		</div>
	);
};

export default ListRender;
