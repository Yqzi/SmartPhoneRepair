import React from "react";
import { emailKey } from "../keys";
import { HiArrowRight } from "react-icons/hi";

const ComingSoonPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 to-purple-200 overflow-x-hidden">
            <div className="max-w-2xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 px-2">
                    Something Exciting is Coming!
                </h1>
                <p className="text-lg text-gray-700 mb-8 px-4">
                    We&apos;re working on an innovative product to enhance your
                    digital lifestyle.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Stay tuned for updates.
                </p>
                <div className="flex justify-center">
                    <form
                        action={"https://formbold.com/s/" + emailKey}
                        method="POST"
                        className="mb-5 flex flex-wrap justify-center  gap-6"
                    >
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Enter your email"
                            className="email-sub w-[320px] rounded-2xl border border-[#e0e0e0] py-3 px-6 text-sm font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        <button className="subscribe-btn flex font-bold w-fit gap-2 px-6 h-14 items-center rounded-2xl group text-white self-center">
                            Subscribe
                            <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
