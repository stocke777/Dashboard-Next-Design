import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
type Props = {};

const sidebarOptions = [
	{ name: "Dashboard", active: false, icon: <FaHome />, link: "/" },
	{ name: "Users", active: false, icon: <FaUserSecret />, link: "/users" },
	{ name: "Todo List", active: false, icon: <FaCheck />, link: "/todo" },
];

const Sidebar = (props: Props) => {
	return (
		<div className='p-4 h-screen  fixed lg:w-[20%] mr-auto min-w-[60px]'>
			<div className='flex flex-col justify-start h-full pt-20 p-4  bg-secondary rounded-md'>
				<ul>
					{sidebarOptions.map((item, index) => {
						return (
							<a href={item.link}>
								<li
									key={item.name}
									className='hover:text-primary mb-4 flex items-center'
								>
									<div className='lg:pr-4'>{item.icon}</div>
									<div className='lg:block hidden'>{item.name}</div>
								</li>
							</a>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
