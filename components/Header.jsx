import Link from "next/link";
import Image from "next/image";
import agalSLogo from "@/public/agals_logo.png";
import { Mail } from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"

export default function Header() {
    return (
        <div className="flex justify-between items-center py-6 px-8 sticky z-99 top-4 backdrop-filter backdrop-blur-xl bg-gradient-to-r from-indigo-600/60 to-blue-600/60 m-4 rounded-2xl">
            <h1 className="font-bold text-lg uppercase">Ramazan Bodur</h1>
            <nav className="flex gap-5">
                <a href="https://github.com/agalS7" target="_blank" className="flex gap-2 items-center p-1 uppercase border-b-2 border-white rounded-sm text-gray-300 hover:text-white transition">
                    <SiGithub />
                    GitHub Sayfam
                </a>
            </nav>
            <Link className="absolute left-1/2 -translate-x-1/2 -bottom-1/2 hover:rotate-180 transition duration-300" href="/">
                <Image
                    src={agalSLogo}
                    alt="agalS Logo"
                    width={96}
                    height={96}
                    placeholder="blur"
                />
            </Link>
        </div>
    );
}
