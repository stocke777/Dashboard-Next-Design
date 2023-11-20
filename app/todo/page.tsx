import React from "react";
import { MdDelete } from "react-icons/md";
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
				<ul>
					{todoList.map((item, index) => {
						return (
							<li key={item.id}>
								<div className='form-control'>
									<div className='flex justify-between'>
										<label className='label cursor-pointer'>
											<input
												type='checkbox'
												checked={item.completed}
												className='checkbox'
											/>
											<span className='label-text ml-4'>{item.task}</span>
										</label>
										<button className='btn  btn-sm hover:btn-error'>
											<MdDelete size={20} />
										</button>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className='flex-1 relative flex justify-center flex-col items-center'>
				<form className='fixed top-10 flex justify-center flex-col items-center'>
					<textarea
						className='textarea textarea-warning mb-4 textarea-lg'
						placeholder='Write here...'
					></textarea>
					<button className='btn btn-outline' type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default page;
