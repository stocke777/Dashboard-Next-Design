"use client";
import React, { FormEvent, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation'
type Props = {};

const TodoForm = (props: Props) => {
	const taskRef = useRef(null);
	const router = useRouter()

	useEffect(() => {
		// This function will run when the component is first loaded
		console.log('Page has been refreshed or loaded for the first time');
	  }, []);
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		const { name, value } = e.target[0];

		fetch("api/createTodo", {
			method: "POST",
			headers: {
				"Content-Type": "application/json", // specify content type if sending JSON
				// add any other headers as needed
			},
			body: JSON.stringify({ name: name, value: value }), // include the request body
		}).then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			if (taskRef.current) {
				taskRef.current.value = "";
				router.refresh();
			}
		});
	};
	return (
		<div className='flex-1 relative flex justify-center flex-col items-center'>
			<form
				className='fixed top-10 flex justify-center flex-col items-center'
				onSubmit={onSubmit}
			>
				<textarea
					className='textarea textarea-warning mb-4 textarea-lg'
					placeholder='Write here...'
					name='task'
					ref={taskRef}
				></textarea>
				<button
					className='btn btn-outline'
					type='submit'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default TodoForm;
