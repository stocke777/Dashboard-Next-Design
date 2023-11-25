import React from "react";

import DeleteButton from "@/components/DeleteButton"
import getTodos from "@/utils/getTodos"
import CheckBox from "@/components/CheckBox"
type Props = {};

const TodoList = async (props: Props) => {

	const data = await getTodos();

	return (
		<ul>
			{data.map((item, index) => {
				return (
					<li key={item.id}>
						<div className='form-control'>
							<div className='flex justify-between'>
								<label className='label cursor-pointer'>
									<CheckBox id={item.id} checked={item.completed} />
									<span className='label-text ml-4'>{item.task}</span>
								</label>
								<DeleteButton id={item.id} />
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default TodoList;
