import React from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

type Props = {};

const todoList = [
	{ id: 1, task: "Buy groceries", completed: false },
	{ id: 2, task: "Read a book", completed: true },
	{ id: 3, task: "Write code", completed: false },
	{ id: 4, task: "Exercise", completed: true },
	{
		id: 5,
		task: "Call a friendCall a friendCall a friendCall a friendCall a friendCall a friendCall a friend",
		completed: false,
	},
	{ id: 1, task: "Buy groceries", completed: false },
	{ id: 2, task: "Read a book", completed: true },
	{ id: 3, task: "Write code", completed: false },
	{ id: 4, task: "Exercise", completed: true },
	{
		id: 5,
		task: "Call a friendCall a friendCall a friendCall a friendCall a friendCall a friendCall a friend",
		completed: false,
	},
	{ id: 1, task: "Buy groceries", completed: false },
	{ id: 2, task: "Read a book", completed: true },
	{ id: 3, task: "Write code", completed: false },
	{ id: 4, task: "Exercise", completed: true },
	{
		id: 5,
		task: "Call a friendCall a friendCall a friendCall a friendCall a friendCall a friendCall a friend",
		completed: false,
	},
	{ id: 1, task: "Buy groceries", completed: false },
	{ id: 2, task: "Read a book", completed: true },
	{ id: 3, task: "Write code", completed: false },
	{ id: 4, task: "Exercise", completed: true },
	{
		id: 5,
		task: "Call a friendCall a friendCall a friendCall a friendCall a friendCall a friendCall a friend",
		completed: false,
	},
	{ id: 1, task: "Buy groceries", completed: false },
	{ id: 2, task: "Read a book", completed: true },
	{ id: 3, task: "Write code", completed: false },
	{ id: 4, task: "Exercise", completed: true },
	{
		id: 5,
		task: "Call a friendCall a friendCall a friendCall a friendCall a friendCall a friendCall a friend",
		completed: false,
	},
];

const page = (props: Props) => {
	return (
		<div className='flex'>
			<div className='flex-1'>
				<TodoList />
			</div>
			<TodoForm />
		</div>
	);
};

export default page;
