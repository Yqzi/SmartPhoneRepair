import { Twitter, Facebook, Instagram, Linkedin } from "@/assets/icons";

export function Footer() {
    return (
        <footer className="pt-20 px-2 border-t border-[#925ff0]">
            <div className="flex flex-wrap gap-16 justify-evenly">
                {/* SOCIALS */}
                <div className="socials flex flex-col">
                    <a href="" className="font-bold text-3xl mb-4 text-center">
                        Smartphone Repair
                    </a>
                    <div className="flex gap-6">
                        <Twitter></Twitter>
                        <Facebook></Facebook>
                        <Instagram></Instagram>
                        <Linkedin></Linkedin>
                    </div>
                </div>

                {/* BOTTOM PAGE NAV */}
                <div className="page">
                    <div className="flex gap-7 font-medium text-xl">
                        <a href="#new-arrivals">New Arrivals</a>
                        <a href="#videos">Videos</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>

                {/* SUPPORT */}
                <div className="support flex gap-7 text-xl">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions </a>
                    <a href="">Support</a>
                </div>
            </div>
            <p className="flex justify-center pt-10">
                © 2024 Copyright, All Right Reserved
            </p>
        </footer>
    );
}
