'use client'

import {NAV_ITEMS} from "../lib/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavItems = () => {
    const pathname = usePathname()

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';

        return pathname.startsWith(path);
    }

    return (
        <ul className="nav-list">
            {NAV_ITEMS.map(({ href, label }) => {
                return <li key={href}>
                    <Link href={href} className={`nav-link ${isActive(href) ? 'active' : ''}`}>
                        {label}
                    </Link>
                </li>
            })}
        </ul>
    )
}
export default NavItems