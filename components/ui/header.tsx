import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import LanSwitcher from "@/components/LanSwitcher"
import Logo from "@/public/images/logo.svg"
export default function Header() {
    return (
        <header className="absolute top-4 md:top-6 w-full z-30 pb-4 md:pb-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] shadow-[0_1px_0_0_theme(colors.white/.2)] dark:shadow-none">
            <div className="px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="relative flex items-center justify-between gap-x-2 h-12 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg px-3 shadow">
                        {/* Border with dots in corners */}
                        <div
                            className="absolute -inset-1.5 bg-indigo-500/15 dark:bg-gray-800/50 rounded-sm -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[10px] before:bg-[length:10px_10px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)] after:absolute after:inset-y-0 after:right-0 after:w-[10px] after:bg-[length:10px_10px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)]"
                            aria-hidden="true"
                        />
                        {/* Site branding */}
                        <div className="flex-1">
                            {/* Logo */}
                            <Link href="/">
                                {/* <img src={Logo.src} alt="" className="h-20"/> */}
                                <p className="text-xl font-extrabold bg-gradient-to-br from-indigo-600 to-purple-500 bg-clip-text text-transparent hover:from-indigo-500 hover:to-purple-300 transition-all duration-300 cursor-pointer filter drop-shadow-sm">
                                    <span className="text-indigo-600">JFIF</span>
                                    <span className="text-purple-500">TO</span>
                                    <span className="text-indigo-600">JPG</span>
                                </p>
                            </Link>
                        </div>

                        {/* Right side group: Theme toggle, Language switcher, and Mobile menu */}
                        <div className="flex items-center gap-x-2">
                            <ThemeToggle />
                            <LanSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
