import React from "react";
import { BiImage } from "react-icons/bi";
import { RiFileGifLine, RiMapPinLine } from "react-icons/ri";
import { BsUiRadios, BsEmojiSmile } from "react-icons/bs";
import { MdSchedule } from "react-icons/md";
import { AiOutlineEye, AiOutlineCaretDown } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";

export default function TweetInput() {
    return (
        <div className="flex items-start p-5 gap-x-2">
            <div className="w-12 h-12 rounded-full bg-white flex-shrink-0"></div>

            <div className="flex flex-col w-full">
                <div className="flex items-center gap-x-2 pb-3">
                    <button className="flex items-center text-sky-400 gap-x-1 text-sm border border-gray-800 rounded-full px-3 py-1">
                        <AiOutlineEye />
                        Everyone can see
                        <AiOutlineCaretDown />
                    </button>
                    <button className="flex items-center text-sky-400 gap-x-1 text-sm border border-gray-800 rounded-full px-3 py-1">
                        <IoChatbubbleOutline />
                        Everyone can reply
                        <AiOutlineCaretDown />
                    </button>
                </div>
                <textarea rows={4} className="bg-transparent outline-none" placeholder="What's happening" />

                <div className="flex items-center pt-3 border-t border-gray-800">
                    <button className="h-10 w-10 text-lg rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-400/10">
                        <BiImage />
                    </button>
                    <button className="h-10 w-10 text-lg rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-400/10">
                        <RiFileGifLine />
                    </button>
                    <button className="h-10 w-10 text-lg rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-400/10">
                        <BsUiRadios />
                    </button>
                    <button className="h-10 w-10 text-lg rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-400/10">
                        <BsEmojiSmile />
                    </button>
                    <button className="h-10 w-10 text-lg rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-400/10">
                        <MdSchedule />
                    </button>
                    <button className="h-10 w-10 text-lg rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-400/10">
                        <RiMapPinLine />
                    </button>

                    <button className="ml-auto px-5 py-1 rounded-full bg-sky-400 font-semibold">Tweet</button>
                </div>
            </div>
        </div>
    );
}
