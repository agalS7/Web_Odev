import Image from "next/image";
import SDULogo from "@/public/sdu_logo.png";

export default function Footer() {
    return (
        <div className="flex bg-gradient-to-r from-indigo-600/60 to-blue-600/60 m-4 rounded-2xl p-8">
            <Image src={SDULogo} alt="SDU Logo" width={256} height={256} placeholder="blur" className="border-r border-white/50 pr-8" />
            <div className="text-right w-full flex flex-col">
                <span className="font-bold text-lg">© Ramazan Bodur</span>
                <span className="font-bold text-lg">2321032020</span>
            </div>
        </div>
    )
}