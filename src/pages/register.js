import React from "react";
import AuthLayout from "../layout/AuthLayout";
import Input from "../components/Input";

export default function Register() {
    return (
        <AuthLayout header="Sign in to Twitter">
            <form className="flex flex-col gap-y-5">
                <Input label="Email Address" type="email" />

                <button className="w-full bg-white px-5 py-2 rounded-full text-black font-medium">Sign in</button>
            </form>
        </AuthLayout>
    );
}
