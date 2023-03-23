import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import TrendsCard from "../sections/TrendsCard";
import TweetCard from "../sections/TweetCard";
import TweetInput from "../sections/TweetInput";
import WhoToFollowCard from "../sections/WhoToFollowCard";

export default function Home() {
    return (
        <div className="flex items-start w-full lg:max-w-screen-xl mx-auto divide-x divide-gray-800">
            <Sidebar />

            <div className="w-full min-h-screen flex flex-col divide-y divide-gray-800">
                <TweetInput />
                <TweetCard
                    profile={{
                        name: "incorrect genshin quotes",
                        username: "@incorrectgenshin",
                    }}
                    time="17h"
                    tweet="Sample Tweet 1"
                />
                <TweetCard
                    profile={{
                        name: "incorrect genshin quotes",
                        username: "@incorrectgenshin",
                    }}
                    time="17h"
                    tweet="Sample Tweet 1"
                />
                <TweetCard
                    profile={{
                        name: "incorrect genshin quotes",
                        username: "@incorrectgenshin",
                    }}
                    time="17h"
                    tweet="Sample Tweet 1"
                />
            </div>

            <div className="w-full max-w-xs h-full p-5 gap-y-5 flex flex-col relative flex-shrink-0">
                <div className="sticky top-0 py-1 z-10 bg-black">
                    <div className="flex items-center rounded-full bg-gray-800">
                        <input className="bg-transparent outline-none px-5 py-3" placeholder="Search Twitter" />
                    </div>
                </div>
                <TrendsCard />
                <WhoToFollowCard />
            </div>
        </div>
    );
}
