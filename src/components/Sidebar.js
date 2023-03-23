import React from "react";
import NavLink from "./NavLink";
import { RiHome7Line, RiHashtag, RiNotification2Line } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { BsBookmark, BsTwitter } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { FiFeather, FiSearch } from "react-icons/fi";
import classNames from "classnames";
import Link from "next/link";

export default function Sidebar() {
    const navClassName =
        "flex w-12 h-12 justify-center lg:w-auto lg:h-auto items-center gap-x-5 lg:py-2 lg:px-4 rounded-full hover:bg-gray-800 text-xl lg:justify-start";

    return (
        <div className="flex flex-col items-start w-full max-w-max lg:max-w-2xs flex-shrink-0 h-screen sticky p-5 gap-y-4">
            <Link href="/" className="text-2xl w-12 h-12 flex items-center justify-center">
                <BsTwitter />
            </Link>
            <NavLink href="/" className={navClassName}>
                <RiHome7Line /> <span className="hidden lg:block">Home</span>
            </NavLink>
            <NavLink href="/" className={classNames(navClassName, "lg:hidden")}>
                <FiSearch /> <span className="hidden lg:block">Explore</span>
            </NavLink>
            <NavLink href="/" className={navClassName}>
                <RiHashtag /> <span className="hidden lg:block">Explore</span>
            </NavLink>
            <NavLink href="/" className={navClassName}>
                <RiNotification2Line /> <span className="hidden lg:block">Notification</span>
            </NavLink>
            <NavLink href="/" className={navClassName}>
                <FaRegEnvelope /> <span className="hidden lg:block">Messages</span>
            </NavLink>
            <NavLink href="/" className={navClassName}>
                <BsBookmark /> <span className="hidden lg:block">Bookmark</span>
            </NavLink>
            <NavLink href="/" className={navClassName}>
                <HiOutlineDotsCircleHorizontal /> <span className="hidden lg:block">More</span>
            </NavLink>

            <button className="w-full py-2 bg-sky-400 rounded-full text-xl font-semibold flex items-center justify-center gap-x-2">
                <FiFeather className="lg:hidden" />
                <span className="hidden lg:block">Tweet</span>
            </button>
        </div>
    );
}
