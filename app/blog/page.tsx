"use client";
import { Blog } from "./blog-details";
import { Footer } from "../footer";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Videos } from "../video";
import { blogs } from "../fake_db/blogs";

function Video({ src, className }: { src: string; className: string }) {
    return (
        <iframe
            id="ytplayer"
            className={className}
            width="100%"
            height="800"
            src={src}
        ></iframe>
    );
}

function Image({ src, className }: { src: string; className: string }) {
    return <img src={src} className={className} />;
}

const BlogPage = () => {
    const searchParameter = window.location.search;
    const article = blogs[searchParameter];

    return (
        <main className="blog-page min-h-screen absolute w-full overflow-hidden ">
            <header className="flex justify-between">
                <a
                    href="/"
                    className="flex justify-center items-center logo z-10 w-[125px] h-[84px]"
                >
                    <img src="ico-blog.png" className="h-12 object-cover" />
                </a>
                <div className="blog-archives max-xl:h-[40vw] max-sm:hidden">
                    <div className="animation--from-bottom-fade smart-animation smart-animation-view">
                        <a href="">
                            <span>Blog Archives</span>
                        </a>
                    </div>
                </div>
                {article.video_src ? (
                    <>
                        <Video
                            className="max-xl:h-[40vw] max-sm:hidden"
                            src={article.video_src}
                        ></Video>
                    </>
                ) : (
                    <>
                        <Image
                            src={article.img_src}
                            className={
                                "w-full h-[800px] max-xl:h-[40vw] max-sm:hidden object-cover"
                            }
                        ></Image>
                    </>
                )}
                <div className="menu relative justify-center items-center flex bg-[#925ff0] w-[99px] h-[84px]">
                    <nav role="navigation">
                        <div id="menuToggle">
                            <input
                                type="checkbox"
                                className="absolute w-[99px]"
                            />

                            <span></span>
                            <span></span>
                            <span></span>

                            <ul id="menu">
                                <a href="/">
                                    <li>Home</li>
                                </a>
                                <a href="/#about-us">
                                    <li>About</li>
                                </a>
                                <a href="/#info">
                                    <li>Info</li>
                                </a>
                                <a href="/#contact">
                                    <li>Contact</li>
                                </a>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            {article.video_src ? (
                <Video
                    className="max-xl:h-[60vw] sm:hidden"
                    src={article.video_src}
                ></Video>
            ) : (
                <>
                    <Image
                        src={article.img_src}
                        className={
                            "w-full h-[800px] max-xl:h-[60vw] sm:hidden object-cover"
                        }
                    ></Image>
                </>
            )}

            <div className="container mx-auto flex flex-wrap justify-between gap-2 mt-8">
                <div className="blog-desc max-w-5xl mx-auto">
                    <Blog
                        titles={article.titles}
                        contents={article.contents}
                    ></Blog>
                </div>
                <div className="flex flex-col gap-10 mx-auto">
                    <div className="blog-nav rounded-lg border py-7 px-8 flex flex-col gap-5 h-fit w-[30rem] bg-[#f0f0ff] max-2xl:hidden">
                        <h1 className="font-extrabold text-3xl mb-4 border-b border-[#020140] py-4">
                            In This Article
                        </h1>
                        <ul className="flex flex-col gap-5 text-xl list-outside list-disc">
                            {article.titles.map((title: any, index: number) => (
                                <li key={index} className="ml-8">
                                    <a href="#">{title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#f0f0ff] overflow-hidden rounded-lg max-w-[30rem]">
                        <AuroraBackground>
                            <div className="relative lets_talk_main p-12 rounded-lg shadow-lg text-left">
                                <span className="text-[#020140] font-bold text-lg">
                                    Build Your Business
                                </span>
                                <h2 className="text-[#020140] font-bold text-4xl mb-8 mt-3">
                                    Is a custom website best for your business?
                                </h2>
                                <a
                                    href="/#contact"
                                    className="button bg-[#925ff0] text-[#f0f0ff] py-4 px-10 rounded-lg transition duration-300 ease-in-out inline-block hover:bg-[#020140] hover:text-[#f0f0ff]"
                                >
                                    Get a Quote
                                </a>
                            </div>
                        </AuroraBackground>
                    </div>
                </div>
            </div>

            <div className="blog mb-10" id="videos">
                <div className="flex flex-col gap-16 pt-28">
                    <Videos
                        videos={[
                            {
                                title: "iPhone XS Repair",
                                desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
                                href: "blog",
                                img: "",
                            },
                            {
                                title: "iPhone XS Repair",
                                desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
                                href: "blog",
                                img: "",
                            },
                            {
                                title: "iPhone XS Repair",
                                desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
                                href: "blog",
                                img: "",
                            },
                        ]}
                    ></Videos>
                </div>
            </div>

            <Footer></Footer>
        </main>
    );
};

export default BlogPage;
