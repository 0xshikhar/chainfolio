"use client"
import Link from "next/link";
import Router, { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NavLinks } from "@/constants";

const style = {
	wrapper: `bg-black w-screen px-[1.2rem] py-[0.8rem] flex `,
	logoContainer: `flex items-center cursor-pointer`,
	logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
	searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
	searchIcon: `text-[#8a939b] mx-3 font-bolcd text-lg`,
	searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
	headerItems: ` flex flex-1 px-3 items-center align-right justify-end`,
	headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
	headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
};

export default function Navbar() {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className={style.wrapper}>
			<Link href="/">
				<div className={style.logoContainer}>
					{/* <Image src={logo} height={80} width={200} alt="mantle logo" /> */}
					<div className="text-[32px] text-white font-serif"
					>
						ChainFolio
					</div>
					<div className={style.logoText}></div>
				</div>
			</Link>



			{/* <ul className="flex items-center justify-center text-white">
				{NavLinks.map((link) => (
					<Link href={link.href} key={link.key}>
						{link.text}
					</Link>
				))}
			</ul> */}

			{/* search bar to search streams */}
			{/* <div className={style.searchBar}> 
				<div className={style.searchIcon}>
					<AiOutlineSearch />
				</div>
				<input
					className={style.searchInput}
					type="text"
					value={searchQuery}
					placeholder="Enter Text"
				//  onKeyPress={(e) => {
				// if (e.key === 'Enter')
				//     console.log(searchQuery)
				// }}
				/>
				<button
					onClick={() => {
						router.push(`/searching/${searchQuery}`);
					}}
					className="text-white px-2"
				>
					Search
				</button>
			</div> */}

			<div className={style.headerItems}>
				<Link href="/searching">
					{/* <div className={style.headerItem}> Streaming </div> */}
				</Link>
				<div
					className={style.headerItem}
					onClick={() => {
						router.push("/");
					}}
				>
					Home
				</div>

				<div
					className={style.headerItem}
					onClick={() => {
						router.push("/create-project");
					}}
				>
					Create Project
				</div>
				<div
					className={style.headerItem}
					onClick={() => {
						router.push("/create-profile");
					}}
				>
					Create Profile
				</div>


				{/* <div className={style.headerIcon} onClick={() => { router.push(`/profile/${address}`) }}> */}
				<div
					className={style.headerIcon}
					onClick={() => {
						router.push("/profile/1");
					}}
				>
					<CgProfile />
				</div>
				<div className={style.headerIcon}>
					<MdOutlineAccountBalanceWallet />
				</div>
				<div>
					<ConnectButton></ConnectButton>
				</div>
			</div>
		</div>
	);
}
