"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Props = { id: any; checked: boolean };

const CheckBox = (props: Props) => {
	const router = useRouter();

	const handleChange = (e) => {
		console.log(props.id);
		fetch("api/markCompleted", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id: props.id, checked: e.target.checked }),
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
		<input
			type='checkbox'
			defaultChecked={props.checked}
			className='checkbox'
			onChange={(e)=>handleChange(e)}
		/>
	);
};

export default CheckBox;
