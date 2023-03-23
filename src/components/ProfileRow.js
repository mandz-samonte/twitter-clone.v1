import React from "react";

export default function ProfileRow({ name, username, bio }) {
    return (
        <div className="flex items-start p-3 gap-x-2 hover:bg-gray-600 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white flex-shrink-0"></div>
            <div className="flex flex-col w-full">
                <div className="flex items-center">
                    <div className="flex flex-col">
                        <span className="leading-tight">{name}</span>
                        <span className="text-gray-400 leading-tight">{username}</span>
                    </div>
                    <button className="ml-auto px-3 rounded-full py-1 bg-white text-black">Follow</button>
                </div>
                <span>{bio}</span>
            </div>
        </div>
    );
}
