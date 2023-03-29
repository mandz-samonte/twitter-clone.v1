import { uniqueId } from "lodash";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import AuthLayout from "../layout/AuthLayout";
import Input from "../components/Input";

export default function Login() {
    return (
        <AuthLayout header="Sign in to Twitter">
            <form className="flex flex-col gap-y-5">
                <Input label="Email Address" type="email" />
                <Input label="Password" type="password" />

                <button className="w-full bg-white px-5 py-2 rounded-full text-black font-medium">Sign in</button>
            </form>
        </AuthLayout>
    );
}
