import { emailKey } from "./keys";

export function CustomContactForm() {
    return (
        <div className="contact-form p-9 bg-white">
            <form
                action={"https://formbold.com/s/" + emailKey}
                method="POST"
                className="flex gap-6"
            >
                <div className="flex flex-col gap-4">
                    <div className="mx-auto w-full max-w-[550px]">
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                required
                                className="w-full rounded-2xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="phone"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Phone
                            </label>
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                name="phone"
                                id="phone"
                                placeholder="Phone number"
                                required
                                className="w-full rounded-2xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="message"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Type your message"
                                className="w-full h-[7.375rem] resize-none rounded-2xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div></div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="mx-auto w-full max-w-[550px]">
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                className="w-full rounded-2xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="options"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Which service do you need?
                            </label>
                            <select
                                name="options"
                                id="options"
                                className="w-full rounded-2xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            >
                                <option selected>Repair</option>
                                <option>Purchase</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="Device"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Device name
                            </label>
                            <input
                                type="text"
                                name="Device"
                                id="Device"
                                placeholder="i.e. iPhone 13 Pro Max"
                                className="w-full rounded-2xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <button className="rounded-2xl w-full bg-[#6A64F1] py-3 px-8 text-bold font-semibold text-white outline-none">
                            Get Free Consultancy
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
