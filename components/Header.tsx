import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import ThemeToggle from "./ThemeToggle";

const Header = () => {

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image src="/assets/icons/sheScoresLogo.svg" alt="She Scores logo" width={300} height={100} className="h-8 sm:h-12 w-auto cursor-pointer" />
                </Link>
                <div className="justify-center flex flex-1">
                    <nav className="hidden sm:block">
                        <NavItems />
                    </nav>
                </div>

                <div className="ml-auto flex items-center gap-4">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
export default Header