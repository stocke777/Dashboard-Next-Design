import React from "react";
import Combining from "@/components/Combining/Combining";
import PieChart from "@/components/PieChart/PieChart";
type Props = {};

const Dashboard = (props: Props) => {
	return (
		<div className='flex flex-col justify-start h-full pt-20 p-4  bg-secondary rounded-md'>
			<section className='pb-8'>
				<div className='stats shadow w-full'>
					<div className='stat'>
						<div className='stat-figure text-secondary'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								className='inline-block w-8 h-8 stroke-current'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								></path>
							</svg>
						</div>
						<div className='stat-title'>Downloads</div>
						<div className='stat-value'>31K</div>
						<div className='stat-desc'>Jan 1st - Feb 1st</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-secondary'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								className='inline-block w-8 h-8 stroke-current'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
								></path>
							</svg>
						</div>
						<div className='stat-title'>New Users</div>
						<div className='stat-value'>4,200</div>
						<div className='stat-desc'>↗︎ 400 (22%)</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-secondary'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								className='inline-block w-8 h-8 stroke-current'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
								></path>
							</svg>
						</div>
						<div className='stat-title'>New Registers</div>
						<div className='stat-value'>1,200</div>
						<div className='stat-desc'>↘︎ 90 (14%)</div>
					</div>
				</div>
			</section>
			<section className='antialiased '>
				<div className='flex flex-col justify-center w-full'>
					<div className='w-full mx-auto bg-base-100 shadow-lg rounded-xl  '>
						<header className='px-5 py-4  '>
							<h2 className='font-semibold '>
								Customers <span className='text-xs'>(last month)</span>
							</h2>
						</header>
						<div className='p-3'>
							<div className='overflow-x-auto rounded-md'>
								<table className='table-auto w-full'>
									<thead className=' font-semibold uppercase  bg-base-10'>
										<tr>
											<th className='p-2 whitespace-nowrap'>
												<div className='font-semibold text-left'>Name</div>
											</th>
											<th className='p-2 whitespace-nowrap'>
												<div className='font-semibold text-left'>Email</div>
											</th>
											<th className='p-2 whitespace-nowrap'>
												<div className='font-semibold text-left'>Spent</div>
											</th>
											<th className='p-2 whitespace-nowrap'>
												<div className='font-semibold text-center'>Country</div>
											</th>
										</tr>
									</thead>
									<tbody className='text-sm divide-y divide-gray-100'>
										<tr>
											<td className='p-2 whitespace-nowrap'>
												<div className='flex items-center'>
													<div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
														<img
															className='rounded-full'
															src='https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp'
															width='40'
															height='40'
															alt='Alex Shatov'
														/>
													</div>
													<div className='font-medium'>Alex Shatov</div>
												</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-left'>alexshatov@gmail.com</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-left font-medium text-green-500'>
													$2,890.66
												</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-lg text-center'>??</div>
											</td>
										</tr>
										<tr>
											<td className='p-2 whitespace-nowrap'>
												<div className='flex items-center'>
													<div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
														<img
															className='rounded-full'
															src='https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg'
															width='40'
															height='40'
															alt='Philip Harbach'
														/>
													</div>
													<div className='font-medium'>Philip Harbach</div>
												</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-left'>philip.h@gmail.com</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-left font-medium text-green-500'>
													$2,767.04
												</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-lg text-center'>??</div>
											</td>
										</tr>
										<tr>
											<td className='p-2 whitespace-nowrap'>
												<div className='flex items-center'>
													<div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
														<img
															className='rounded-full'
															src='https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg'
															width='40'
															height='40'
															alt='Mirko Fisuk'
														/>
													</div>
													<div className='font-medium '>Mirko Fisuk</div>
												</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-left'>mirkofisuk@gmail.com</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-left font-medium text-green-500'>
													$2,996.00
												</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-lg text-center'>??</div>
											</td>
										</tr>
										<tr>
											<td className='p-2 whitespace-nowrap'>
												<div className='flex items-center'>
													<div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
														<img
															className='rounded-full'
															src='https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg'
															width='40'
															height='40'
															alt='Olga Semklo'
														/>
													</div>
													<div className='font-medium '>Olga Semklo</div>
												</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-left'>olga.s@cool.design</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-left font-medium text-green-500'>
													$1,220.66
												</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-lg text-center'>??</div>
											</td>
										</tr>
										<tr>
											<td className='p-2 whitespace-nowrap'>
												<div className='flex items-center'>
													<div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
														<img
															className='rounded-full'
															src='https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'
															width='40'
															height='40'
															alt='Burak Long'
														/>
													</div>
													<div className='font-medium '>Burak Long</div>
												</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-left'>longburak@gmail.com</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-left font-medium text-green-500'>
													$1,890.66
												</div>
											</td>
											<td className='p-2 whitespace-nowrap'>
												<div className='text-lg text-center'>??</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='flex items-center justify-around'>
				<Combining />
				<PieChart />
			</section>
		</div>
	);
};

export default Dashboard;
