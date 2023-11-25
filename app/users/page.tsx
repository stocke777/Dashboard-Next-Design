import React from "react";
import Pagination from "@/components/Pagination"


type Props = {};

const page = async ({
	params, searchParams
}: Props) => {
	console.log(params, searchParams)
	let data;
	await fetch(`http://jsonplaceholder.typicode.com/users?_start=${searchParams.page || 1}&_limit=3`)
      .then(response => response.json())
      .then(json => data = json)
	  .catch((err)=> {
		throw new Error()
	  })

	console.log(data)
	return (
		<div className='flex flex-col justify-between items-center h-full'>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Website</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{data?.map((user, index)=>{
							return <tr key={user.id}>
							<th>{user.id}</th>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.website}</td>
						</tr>
						})}	
					</tbody>
				</table>
			</div>
			<Pagination />
		</div>
	);
};

export default page;
