import React from "react";
import ProfileRow from "../components/ProfileRow";

export default function WhoToFollowCard() {
    return (
        <div className="flex flex-col bg-gray-800 rounded-lg overflow-hidden">
            <span className="text-xl px-5 py-2 font-semibold">Who to Follow</span>
            <ProfileRow name="sang" username="@sanghainako" />
            <ProfileRow name="sang" username="@sanghainako" />
            <ProfileRow name="sang" username="@sanghainako" />
            <button className="text-sky-600 text-left px-5 py-4 hover:bg-gray-700">Show More</button>
        </div>
    );
}
