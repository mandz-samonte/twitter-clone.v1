import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import Link from "next/link";

export default function AuthLayout({ header, subHeader, children }) {
    return (
        <div className="flex items-center justify-center bg-slate-900 h-screen">
            <div className="w-2/6 flex items-center justify-center bg-black rounded-xl px-5 py-24 relative">
                <BsTwitter className="absolute top-5 text-4xl" />
                <div className="flex flex-col w-3/5 gap-y-5">
                    <span className="text-2xl font-bold">{header}</span>
                    {subHeader && <span>{subHeader}</span>}

                    <button className="w-full bg-white px-5 py-2 rounded-full text-black font-medium flex items-center justify-center gap-x-2">
                        <FcGoogle /> Sign in with Google
                    </button>
                    <button className="w-full bg-white px-5 py-2 rounded-full text-black font-medium flex items-center justify-center gap-x-2">
                        <AiFillApple />
                        Sign in with Apple
                    </button>

                    <div className="flex items-center gap-x-2">
                        <div className="w-full h-px bg-zinc-600"></div>
                        <span>or</span>
                        <div className="w-full h-px bg-zinc-600"></div>
                    </div>

                    {children}

                    <button className="w-full bg-transparent border border-white px-5 py-1.5 rounded-full font-medium text-white">
                        Forgot Password?
                    </button>

                    <span className="mt-5 text-zinc-600">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-blue-500">
                            Sign Up
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}
