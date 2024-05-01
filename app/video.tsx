"use client";
import { HiArrowRight } from "react-icons/hi";

export function Videos({
    videos,
}: {
    videos: {
        title: string;
        desc: string;
        href: string;
        img: string;
    }[];
}) {
    return (
        <>
            <div className="video flex flex-wrap justify-center gap-20 h-[320px] overflow-hidden">
                {videos.map((video, idx) => (
                    <div className="flex flex-col justify-between" key={idx}>
                        <a
                            href={video.href != "" ? video.href : "coming-soon"}
                            className="flex flex-col gap-5 w-96"
                        >
                            {video.img ? (
                                <>
                                    <h3 className="font-bold text-xl">
                                        {video.title}
                                    </h3>
                                    <img
                                        src={video.img}
                                        alt="Video Thumbnail"
                                        className="rounded-2xl h-40 w-full object-cover"
                                    />
                                    <p>{video.desc}</p>
                                </>
                            ) : (
                                <>
                                    <h3 className="font-bold text-xl">
                                        Coming Soon
                                    </h3>
                                    <div className="rounded-2xl h-40 w-full bg-black text-[#f0f0ff] content-center text-center text-3xl font-semibold">
                                        Coming Soon
                                    </div>
                                    <p>
                                        Stay tuned! Exciting things are on the
                                        horizon.
                                    </p>
                                </>
                            )}
                        </a>
                        <a
                            href={video.href != "" ? video.href : "coming-soon"}
                            className="video-btn flex items-center gap-6"
                        >
                            Watch now <HiArrowRight />
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}
