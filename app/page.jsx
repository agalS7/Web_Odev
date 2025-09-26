import Image from "next/image";
import Link from "next/link";
import HomeAbout from "@/components/HomeAbout";
import { Star } from "lucide-react";
import ReactPlayer from 'react-player'

const beceriler = [
    {
        name: "React",
        stars: 5,
    },
    {
        name: "Node.JS",
        stars: 5,
    },
    {
        name: "Rust",
        stars: 5,
    },
    {
        name: "NextJS",
        stars: 5,
    },
    {
        name: "PostgreSQL",
        stars: 5,
    },
    {
        name: "C, C++",
        stars: 4,
    },
    {
        name: "Golang",
        stars: 3
    },
]

const hobiler = [
    "Yazılım Geliştirme",
    "Video Oyunları",
    "Yazılım Üzerine Kitaplar Okumak",
    "Geziler",
]

export default function Home() {
    return (
        <div className="mt-16 relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 size-128 -z-10">
                <defs>
                    <linearGradient id="Gradient">
                        <stop offset="5%" stopColor="lab(38.4009% 52.6132 -92.3857)" />
                        <stop offset="95%" stopColor="lab(44.0605% 29.0279 -86.0352)" />
                    </linearGradient>
                </defs>
                <path className="fill-[url(#Gradient)]" d="M43.1,-40.5C48.4,-27.8,40,-10.3,37.4,11.6C34.9,33.4,38.1,59.6,28.5,67.5C18.8,75.4,-3.7,64.9,-22.2,53.3C-40.8,41.6,-55.3,28.8,-56.6,15.2C-57.9,1.5,-46,-12.8,-34.4,-27C-22.8,-41.2,-11.4,-55.2,3.8,-58.2C18.9,-61.2,37.9,-53.2,43.1,-40.5Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-1/8 size-196 -z-10">
                <path className="fill-[url(#Gradient)]" d="M39.6,-53.6C47.9,-48.5,48.9,-32.3,47.8,-19.4C46.7,-6.4,43.6,3.4,45.1,19.5C46.5,35.7,52.6,58.2,45.8,60.1C39.1,61.9,19.5,43.2,2.4,39.9C-14.8,36.6,-29.5,48.8,-40.3,48.2C-51.2,47.6,-58.1,34.4,-62.6,20.4C-67.1,6.4,-69.2,-8.4,-59.8,-13.9C-50.4,-19.4,-29.5,-15.6,-17.6,-19.5C-5.7,-23.4,-2.9,-35,6.4,-43.8C15.7,-52.6,31.3,-58.6,39.6,-53.6Z" transform="translate(100 100)" />
            </svg>
            <div className="container mx-auto">
                <HomeAbout />
                <div className="flex flex-col mt-16 items-center gap-8">
                    <div className="flex gap-12 justify-items-center place-content-center max-w-5xl">
                        <div className="bg-black/70 rounded-xl p-4 animate-in fade-in zoom-in slide-in-from-bottom duration-500 flex-1">
                            <h3 className="font-bold text-2xl text-center">Becerilerim</h3>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                { beceriler.map((item) => (
                                    <div key={item.name} className="bg-black/80 rounded-xl p-4">
                                        <h4 className="font-bold text-lg">{item.name}</h4>
                                        <div className="flex gap-2">
                                            { Array.from({ length: item.stars }, (_, i) => (
                                                <Star key={item.name + "_yildiz" + i} className="text-yellow-500" />
                                            )) }
                                        </div>
                                    </div>
                                )) }
                            </div>
                        </div>
                        <div className="bg-black/70 rounded-xl p-4 animate-in fade-in zoom-in slide-in-from-bottom duration-500 flex-1">
                            <h3 className="font-bold text-2xl text-center">Hobilerim</h3>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                { hobiler.map((item) => (
                                    <div key={item} className="bg-black/80 rounded-xl p-4 max-w-64">
                                        <h4 className="font-bold text-lg">{item}</h4>
                                    </div>
                                )) }
                            </div>
                        </div>
                    </div>
                    <div className="bg-black/70 rounded-xl p-4 animate-in fade-in zoom-in slide-in-from-bottom duration-500 w-full max-w-5xl">
                        <h3 className="text-center font-bold text-2xl mb-4">Örnek Video</h3>
                        <div className="rounded-lg overflow-hidden">
                            <ReactPlayer
                                slot="media"
                                src="https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                controls
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
