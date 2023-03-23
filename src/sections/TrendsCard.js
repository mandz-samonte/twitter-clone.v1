import React from "react";
import TrendRow from "../components/TrendRow";

export default function TrendsCard() {
    return (
        <div className="flex flex-col bg-gray-800 rounded-lg overflow-hidden">
            <span className="px-5 py-3 text-lg font-bold">Trends for You</span>
            <TrendRow topic="Politics" title="World War III" number="13.2k" />
            <TrendRow topic="Politics" title="World War III" number="13.2k" />
            <TrendRow topic="Politics" title="World War III" number="13.2k" />
            <TrendRow topic="Politics" title="World War III" number="13.2k" />
            <TrendRow topic="Politics" title="World War III" number="13.2k" />
            <TrendRow topic="Politics" title="World War III" number="13.2k" />
            <TrendRow topic="Politics" title="World War III" number="13.2k" />
            <TrendRow topic="Politics" title="World War III" number="13.2k" />
            <TrendRow topic="Politics" title="World War III" number="13.2k" />
            <TrendRow topic="Politics" title="World War III" number="13.2k" />
            <button className="text-sky-600 text-left px-5 py-4 hover:bg-gray-700">Show More</button>
        </div>
    );
}
