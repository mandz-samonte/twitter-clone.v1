import classNames from "classnames";
import { useRouter } from "next/router";
import React from "react";

export default function NavLink({ children, href, className, activeClassName, ...props }) {
    const router = useRouter();

    const handleOnClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <a
            href={href}
            onClick={handleOnClick}
            className={classNames(className, { [activeClassName]: router.asPath === href })}
        >
            {children}
        </a>
    );
}
