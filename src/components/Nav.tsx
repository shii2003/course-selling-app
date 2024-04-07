"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
    return (
        <nav className="dark:bg-gray-800 text-primary-foreground flex justify-center px-4">
            {children}
        </nav>
    );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
    const pathname = usePathname();

    return (
        <Link {...props}
            className={`p-4 hover:bg-gray-700 hover:text-gray-300 
            focus-visible:bg-gray-700 focus-visible:text-gray-300
            ${pathname === props.href ? "bg-black text-white" : "text-white"}`}


        />
    );
}