"use client";

import React from "react";
import { MdDelete } from "react-icons/md";
import { useRouter } from 'next/navigation'

type Props = { id: any };

const DeleteButton = (props: Props) => {
	const router = useRouter()

	const handleDelete = async () => {
		console.log(props.id);
		fetch("api/deleteTodo", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id: props.id }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
			})
			.finally(() => {
				router.refresh();
			});
	};
	return (
		<button
			className='btn  btn-sm hover:btn-error'
			onClick={handleDelete}
		>
			<MdDelete size={20} />
		</button>
	);
};

export default DeleteButton;
