import React from "react";

const ComingSoonPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 to-purple-200">
            <div className="max-w-2xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                    Something Exciting is Coming!
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    We&apos;re working on an innovative product to enhance your
                    digital lifestyle.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Stay tuned for updates.
                </p>
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
