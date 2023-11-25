"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
type Props = {};

const Pagination = (props: Props) => {
	const searchParams = useSearchParams();
	const totalPages = 50;

	return (
		<div className='flex items-center justify-around w-full'>
            <Link
				href={{
					pathname: "/users",
					query: { page: parseInt(searchParams.get("page")) - 1 },
				}}
			>
			<button
				className='join-item btn'
				// onClick={() => setPage((prev) => prev - 1)}
			>
				Prev
			</button></Link>
			<span>
				{searchParams.get('page')} of {totalPages}
			</span>
			<Link
				href={{
					pathname: "/users",
					query: { page: parseInt(searchParams.get("page")) + 1 },
				}}
			>
				<button
					className='join-item btn'
					// onClick={() => setPage((prev) => prev + 1)}
				>
					Next
				</button>
			</Link>
		</div>
	);
};

export default Pagination;
