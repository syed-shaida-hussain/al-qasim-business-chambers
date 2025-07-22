'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen((open) => !open);
	};

	return (
		<nav className="flex justify-between sm:justify-around items-center flex-wrap px-10 md:px-2 h-20 bg-indigo-900 text-gray-50  mb-6">
			<Link href="/" className="font-semibold text-lg ">
				Home
			</Link>
			<button className="inline sm:hidden relative" onClick={toggleMenu}>
				{isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
			</button>
			<nav className="hidden gap-2 sm:gap-6 items-center sm:flex">
				<Link href="/products" className="font-semibold text-lg ">
					Products
				</Link>
				<Link href="/about" className="font-semibold text-lg ">
					About
				</Link>
                <Link href="/contact" className="font-semibold text-lg ">
					Contact
				</Link>
			</nav>
			{isMenuOpen && (
				<nav className="min-h-screen flex flex-col items-center pt-6 text-2xl gap-10 px-10 py-5 min-w-full bg-indigo-900 text-gray-50 absolute top-20 right-0 sm:hidden">
					<Link
						href="/products"
						className="font-semibold text-lg "
						onClick={toggleMenu}
					>
						Products
					</Link>
					<Link
						href="/about"
						className="font-semibold text-lg "
						onClick={toggleMenu}
					>
						About
					</Link>
                    	<Link
						href="/contact"
						className="font-semibold text-lg "
						onClick={toggleMenu}
					>
						Contact
					</Link>
				</nav>
			)}
		</nav>
	);
};

export default Navbar;