import React from "react";
import Input from "../components/Input";
import { BsTwitter } from "react-icons/bs";

export default function ForgotPassword() {
    return (
        <div className="flex items-center justify-center bg-slate-900 h-screen">
            <div className="w-2/6 flex flex-col items-center justify-center bg-black rounded-xl px-5 py-24 relative">
                <BsTwitter className="absolute top-5 text-4xl" />

                <form className="flex flex-col w-3/4">
                    <span className="text-2xl font-bold">Find your Twitter account</span>
                    <span className="mb-5 text-zinc-500">
                        Enter the email, phone number or username associated with your account to change your password.
                    </span>
                    <Input label="Email Address" />

                    <button className="bg-white rounded-full px-5 py-3 text-black font-semibold mt-20">Next</button>
                </form>
            </div>
        </div>
    );
}
