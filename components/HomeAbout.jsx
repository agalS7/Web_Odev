"use client";

import Typewriter from "typewriter-effect";

export default function HomeAbout() {
    return (
        <div className="relative">
            <h1 className="flex gap-2 text-lg items-center">
                Merhabalar, ben
                <span className="font-bold text-2xl">
                    <Typewriter
                        options={{
                            autoStart: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Ramazan BODUR")
                                .start();
                        }}
                    />
                </span>
            </h1>
            <p className="mt-4 opacity-80">
                Web geliştirme alanında uzmanlaşmış bir <strong>Full-Stack</strong> Developer'ım. Özellikle backend ağırlıklı olmak üzere projeler geliştirmekteyim.
            </p>
            <p className="mt-2 opacity-80">
                Frontend tarafında <strong>React</strong> teknolojisi üzerine uzmanlaşmış birisiyim. 5 yıldır React kullanmakta ve her türlü yeni gelişmeye adapte olup kendimi geliştirmekteyim.
                Backend tarafında ise <strong>Node.JS</strong> runtime'ı ve <strong>Rust</strong> programlama dili üzerine uzmanım. Yaklaşır 7 yıldır Node.JS üzerinde projeler geliştirmekte ve yaklaşık 4 yıldır Rust üzerinde uzmanlaşmış bulunmaktayım.
            </p>
        </div>
    );
}
