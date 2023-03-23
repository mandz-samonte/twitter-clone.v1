import React from "react";
import { BsThreeDots } from "react-icons/bs";

export default function TrendRow({ topic, title, number }) {
    return (
        <div className="flex flex-col relative px-5 py-3 hover:bg-gray-700 cursor-pointer">
            <span className="text-sm text-gray-500">{topic}</span>
            <span className="font-bold">{title}</span>
            <span className="text-xs text-gray-500">{number}</span>

            <button className="h-7 w-7 rounded-full absolute right-2 text-gray-500 hover:text-sky-400 hover:bg-sky-700 flex items-center justify-center">
                <BsThreeDots />
            </button>
        </div>
    );
}
