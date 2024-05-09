import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
    {
        name: "IPTV",
        id: "tier-monthly",
        href: "#",
        featured: true,
        description: "Watch anywhere, anytime, on Demand!",
        priceMonthly: "$15",
        mainFeatures: [
            "Premium Server",
            "4K UHD+ HD Quality Streaming",
            "+23 500 Channels 24h/24",
            "+147 000 VOD 24h/24",
            "Latest Movies And Series",
            "24h/7 Free Support",
            "Watch On Any Device",
        ],
    },
    {
        name: "IPTV",
        id: "tier-yearly",
        href: "#",
        featured: true,
        description: "Watch anywhere, anytime, on Demand!",
        priceYearly: "$" + 15 * 11,
        mainFeatures: [
            "Premium Server",
            "4K UHD+ HD Quality Streaming",
            "+23 500 Channels 24h/24",
            "+147 000 VOD 24h/24",
            "Latest Movies And Series",
            "24h/7 Free Support",
            "Watch On Any Device",
        ],
    },
];

export default function Pricing() {
    return (
        <div className="isolate overflow-hidden bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">
                        Pricing
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        The right price for you,{" "}
                        <br className="hidden sm:inline lg:hidden" />
                        whoever you are
                    </p>
                </div>
                <div className="relative mt-6">
                    <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
                        Upgrade your visual Experience with IPTV
                    </p>
                    <svg
                        viewBox="0 0 1208 1024"
                        className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
                    >
                        <ellipse
                            cx={604}
                            cy={512}
                            fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
                            rx={604}
                            ry={512}
                        />
                        <defs>
                            <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="flow-root bg-white pb-24 sm:pb-32">
                <div className="-mt-80">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                            {tiers.map((tier) => (
                                <div
                                    key={tier.id}
                                    className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                                >
                                    <div>
                                        <h3
                                            id={tier.id}
                                            className="text-base font-semibold leading-7 text-indigo-600"
                                        >
                                            {tier.name}
                                        </h3>
                                        <div className="mt-4 flex items-baseline gap-x-2">
                                            <span className="text-5xl font-bold tracking-tight text-gray-900">
                                                {tier.priceMonthly ??
                                                    tier.priceYearly}
                                            </span>
                                            <span className="text-base font-semibold leading-7 text-gray-600">
                                                {tier.priceMonthly
                                                    ? "/month"
                                                    : "/year"}
                                            </span>
                                        </div>
                                        <p className="mt-6 text-base leading-7 text-gray-600">
                                            {tier.description}
                                        </p>
                                        <ul
                                            role="list"
                                            className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
                                        >
                                            {tier.mainFeatures.map(
                                                (feature) => (
                                                    <li
                                                        key={feature}
                                                        className="flex gap-x-3"
                                                    >
                                                        <CheckIcon
                                                            className="h-6 w-5 flex-none text-indigo-600"
                                                            aria-hidden="true"
                                                        />
                                                        {feature}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <a
                                        href="tel:+15873346669"
                                        aria-describedby={tier.id}
                                        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Call Now
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
