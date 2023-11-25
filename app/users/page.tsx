import React from "react";
import connectToDatabase from '@/utils/db.js'
import User from "@/utils/models/User"
type Props = {};

const page = async (props: Props) => {
	try {
		console.log('CONNECTING TO MONGO');
		await connectToDatabase();
		console.log('CONNECTED TO MONGO');
	
		console.log('CREATING DOCUMENT');
		const test = await User.create({name: "JaiXXXXXZZ", email: "asbc@kvsd.comm"});
		console.log('CREATED DOCUMENT');
	
		// res.json({ test });
	  } catch (error) {
		console.log(error);
		// res.json({ error });
	  }
	return (
		<div className='flex flex-col justify-between items-center h-full'>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<th>1</th>
							<td>Cy Ganderton</td>
							<td>Quality Control Specialist</td>
							<td>Blue</td>
						</tr>
						{/* row 2 */}
						<tr>
							<th>2</th>
							<td>Hart Hagerty</td>
							<td>Desktop Support Technician</td>
							<td>Purple</td>
						</tr>
						{/* row 3 */}
						<tr>
							<th>3</th>
							<td>Brice Swyre</td>
							<td>Tax Accountant</td>
							<td>Red</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='join'>
				<button className='join-item btn'>1</button>
				<button className='join-item btn btn-active'>2</button>
				<button className='join-item btn'>3</button>
				<button className='join-item btn'>4</button>
			</div>
		</div>
	);
};

export default page;
