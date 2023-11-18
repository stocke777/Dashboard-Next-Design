import React from "react";

type Props = {};

const todoList = [
	{ id: 1, task: "Buy groceries", completed: false },
	{ id: 2, task: "Read a book", completed: true },
	{ id: 3, task: "Write code", completed: false },
	{ id: 4, task: "Exercise", completed: true },
	{ id: 5, task: "Call a friendCall a friendCall a friendCall a friendCall a friendCall a friendCall a friend", completed: false },
];

const page = (props: Props) => {
	return (
		<div className="flex">
            <div className="flex-1">
			<ul>
				{todoList.map((item) => {
					return (
						<li key={item.id}>
							<div className='form-control'>
								<label className='label cursor-pointer'>
									<span className='label-text mr-4'>{item.task}</span>
									<input
										type='checkbox'
										checked={item.completed}
										className='checkbox'
									/>
								</label>
							</div>
						</li>
					);
				})}
			</ul></div>
            <div className="flex-1"></div>
		</div>
	);
};

export default page;
