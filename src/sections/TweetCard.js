import React from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { MdOutlineFileUpload } from "react-icons/md";

export default function TweetCard({ profile = {}, time, tweet, media, replies, retweets, likes, views }) {
    return (
        <div className="flex items-start gap-x-2 p-5">
            <div className="w-12 h-12 rounded-full bg-white flex-shrink-0"></div>
            <div className="flex flex-col w-full">
                {/* Profile Section */}
                <div className="flex items-center gap-x-2">
                    <span className="font-semibold">{profile.name}</span>
                    <span className="text-sm text-gray-600">{profile.username}</span>
                    <span>·</span>
                    <span className="text-sm text-gray-400">{time}</span>
                </div>

                {/* Tweet Section */}
                <div className="flex flex-col w-full">{tweet}</div>

                {/* Actions Section */}
                <div className="flex items-center justify-between w-4/5">
                    <button className="flex items-center group hover:text-sky-300">
                        <div className="w-10 h-10 flex items-center justify-center group-hover:bg-sky-800 rounded-full">
                            <IoChatbubbleOutline />
                        </div>
                        {replies && <span>{replies}</span>}
                    </button>
                    <button className="flex items-center group hover:text-emerald-300">
                        <div className="w-10 h-10 flex items-center justify-center group-hover:bg-emerald-800 rounded-full">
                            <FaRetweet />
                        </div>
                        {retweets && <span>{retweets}</span>}
                    </button>
                    <button className="flex items-center group hover:text-rose-300">
                        <div className="w-10 h-10 flex items-center justify-center group-hover:bg-rose-800 rounded-full">
                            <AiOutlineHeart />
                        </div>
                        {likes && <span>{likes}</span>}
                    </button>
                    <button className="flex items-center group hover:text-sky-300">
                        <div className="w-10 h-10 flex items-center justify-center group-hover:bg-sky-800 rounded-full">
                            <BiBarChart />
                        </div>
                        {views && <span>{views}</span>}
                    </button>
                    <button className="flex items-center group hover:text-sky-300">
                        <div className="w-10 h-10 flex items-center justify-center group-hover:bg-sky-800 rounded-full">
                            <MdOutlineFileUpload />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
