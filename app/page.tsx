"use client";
import { HiArrowRight } from "react-icons/hi";
import { Apple, Honor, HuaweiLogo, OppoLogo, Samsung } from "@/assets/logos";
import {
    Cart,
    ContactIcon,
    Lightning,
    Person1,
    Stars,
    Verified,
} from "@/assets/icons";
import { Skill } from "./skills";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { CustomContactForm } from "./contact";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Footer } from "./footer";
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/highlight";
import { Videos } from "./video";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function Home(props: any) {
    const phones = [
        {
            name: "Samsung A04e",
            src: "https://www.fix4less.com/wp-content/uploads/2023/08/Samsung-A04e-32GB-Light-Blue-R8YTC0088GT-8806094731934-174.99-1-New.webp",
            ram: "64GB",
            price: "$179.99",
        },
        {
            name: "Samsung A04s",
            src: "https://images.samsung.com/is/image/samsung/p6pim/my/sm-a047fzcgxme/gallery/my-galaxy-a04s-a047-sm-a047fzcgxme-533790978?$650_519_PNG$",
            ram: "64GB",
            price: "$199.99",
        },
        {
            name: "Samsung A05s",
            src: "https://m.media-amazon.com/images/I/61TEyjMZbNL.jpg",
            ram: "128GB",
            price: "$249.99",
        },
        {
            name: "Samsung A05",
            src: "https://secure.mdg.ca/img/products_webp/en-CA/product_25367.webp",
            ram: "64GB",
            price: "$189.99",
        },
        {
            name: "Samsung A05",
            src: "https://wmw-eshop-prod.s3.amazonaws.com/images/products/4718/larges/Galaxy_A05_Silver.jpg?1698203700",
            ram: "64GB",
            price: "$189.99",
        },
        {
            name: "Samsung A14",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ROxLBPPvfan-yT0y0qpEkNBbsc_X2vfYQT1irEDKxlJrjyg3QU74DmoARYVjKYs1vX8&usqp=CAU",
            ram: "128GB",
            price: "$299.99",
        },
        {
            name: "Samsung A32 5G",
            src: "https://m-cdn.phonearena.com/images/article/154221-wide-two_350/Verizons-Galaxy-A14-5G-is-getting-updated-to-Android-14.jpg",
            ram: "64GB",
            price: "$249.99",
        },
    ];
    return (
        <main className="min-h-screen absolute w-full overflow-hidden">
            <div className="navbar flex fixed text-xl inset-x-0 max-w-screen-2xl h-20 mx-auto z-50 top-2 px-5 items-center justify-between rounded-full font-black max-md:hidden">
                <a href="">
                    <img src="ico.png" className="h-12" />
                </a>
                <div className="flex gap-8">
                    <a href="#new-arrivals">New Arrivals</a>
                    <a href="#videos">Videos</a>
                    <a href="#contact">Contact</a>
                </div>
                <a
                    href="coming-soon"
                    className="cart-btn flex text-lg gap-2 px-6 h-11 items-center rounded-full"
                >
                    <Cart></Cart>
                    Cart
                </a>
            </div>
            <div className="menu fixed right-0 justify-center items-center flex navbar lc-round w-[99px] h-[84px] md:hidden z-[1000]">
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />

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

            {/* CAROUSEL */}
            <img
                src="bp1.jpg"
                alt=""
                className="z-[-1] absolute w-full h-[80vh] object-cover"
            />
            <div className="carousel flex w-[100%] h-[80vh] px-[10%] justify-between">
                <div className="flex flex-col gap-4 max-w-fit self-end mb-20">
                    <Highlight className="max-w-fit py-1 px-3 text-3xl text-white font-bold">
                        We fix TVs too!
                    </Highlight>
                    <h1 className="text-6xl font-bold">Restore,</h1>
                    <h1 className="text-6xl font-bold">Renew, Repair:</h1>
                    <p className="text-xl leading-7">
                        Your Trusted Destination <br />
                        for Phone, Laptop, and Tablet Repairs!
                    </p>
                    <div className="flex gap-3">
                        <AnimatedTooltip
                            items={[
                                {
                                    name: "smartphonerepair2017@outlook.com",
                                    id: 0,
                                    designation: "Send Email",
                                    href: "mailto:smartphonerepair2017@outlook.com",
                                },
                                {
                                    name: "(825) 439-9773",
                                    id: 1,
                                    designation: "Call",
                                    href: "tel:+15873346669",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>

            {/* BRANDS */}
            <div className="brands flex h-[20vh] items-center justify-evenly max-md:hidden">
                <Apple></Apple>
                <Samsung></Samsung>
                <Honor></Honor>
                <HuaweiLogo></HuaweiLogo>
                <OppoLogo></OppoLogo>
            </div>

            {/* SKILLS */}
            <div
                className="skills flex flex-wrap py-20 justify-evenly gap-y-12 px-2"
                id="info"
            >
                <Skill
                    title={"Skilled Technicians"}
                    desc={
                        "Our team comprises experienced professionals adept at repairing a wide range of phone models and accessories."
                    }
                    icon={<Stars></Stars>}
                ></Skill>
                <Skill
                    title={"Quality Parts"}
                    desc={
                        "We exclusively use high-grade replacement components from reputable suppliers to ensure optimal device performance and durability."
                    }
                    icon={<Verified></Verified>}
                ></Skill>
                <Skill
                    title={"Fast Service"}
                    desc={
                        "We prioritize efficiency, striving to swiftly restore your devices to full functionality, minimizing any inconvenience to you."
                    }
                    icon={<Lightning></Lightning>}
                ></Skill>
            </div>

            {/* NEW ARRIVALS */}
            <div
                className="new-arrivals pt-[100px] max-h-[950px] overflow-hidden"
                id="new-arrivals"
            >
                <h1 className="text-center text-3xl font-bold mb-16 min-w-max">
                    New Arrivals
                </h1>

                <div className=" full-phone-row flex gap-x-[138px] gap-y-16 pr-[240px] justify-center">
                    <div className="phone-row flex flex-wrap gap-x-[138px] gap-y-16 justify-evenly pl-[240px] max-w-[1334px]">
                        {(() => {
                            const arr = [];
                            for (let i = 0; i < 6; i++) {
                                arr.push(
                                    <div key={i}>
                                        <DirectionAwareHover
                                            imageUrl={phones[i].src}
                                            imageClassName="h-[169px] max-w-[230px] translate-y-[30px]"
                                            children1={phones[i].name}
                                            children2={phones[i].ram}
                                            children3={phones[i].price}
                                        ></DirectionAwareHover>
                                    </div>
                                );
                            }
                            return arr;
                        })()}
                    </div>
                    <div className="w-[240px] flex flex-col gap-y-[199px] max-sm:gap-y-[50px] items-center">
                        <DirectionAwareHover
                            imageUrl={phones[phones.length - 1].src}
                            imageClassName="h-[169px] w-[230px] translate-y-[30px]"
                            children1={phones[phones.length - 1].name}
                            children2={phones[phones.length - 1].ram}
                            children3={phones[phones.length - 1].price}
                        ></DirectionAwareHover>
                        <a
                            href="coming-soon"
                            className="contact-btn flex text-xl font-bold w-fit gap-2 px-6 h-14 items-center rounded-full group text-white"
                        >
                            View all
                            <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>

            {/* REVIEWS */}
            <div
                className="flex justify-center reviews-section bg-white pt-28 w-full"
                id="about-us"
            >
                <div className="bg-[#f0f0ff] md:rounded-[32px] md:w-[80vw] overflow-hidden">
                    <AuroraBackground>
                        <motion.div
                            initial={{ opacity: 0.0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="relative flex flex-col gap-4 items-center justify-center px-4"
                        >
                            {" "}
                            <div className="text-[#020140] md:py-32 max-md:py-12 text-center flex flex-col justify-center">
                                <div className="self-center">
                                    <h1 className="font-bold text-4xl max-md:text-3xl ">
                                        What People Say About Us
                                    </h1>
                                    <p className="review-desc text-lg mt-4 mb-14 max-w-[600px]">
                                        Here&apos;s what our customers have to
                                        say about our phone and accessory repair
                                        services:
                                    </p>
                                </div>

                                <div className="flex flex-wrap h-[300px] overflow-hidden justify-center gap-9">
                                    <div className="review-card h-[300px] flex flex-col justify-between rounded-2xl p-8 max-w-[320px] text-left">
                                        <Person1></Person1>
                                        <p className="text-xl">
                                            &quot;Their expertise and
                                            professionalism exceeded my
                                            expectations. Highly
                                            recommended.&quot;
                                        </p>
                                        <p className="font-bold">Jeremy G.</p>
                                    </div>
                                    <div className="review-card flex flex-col justify-between rounded-2xl p-8 max-w-[320px] h-[300px] text-left">
                                        <Person1></Person1>
                                        <p className="text-xl">
                                            &quot;This seller maintains
                                            top-notch quality. Highly recommend
                                            their products.&quot;
                                        </p>
                                        <p className="font-bold">Emily S.</p>
                                    </div>
                                    <div className="review-card flex flex-col justify-between rounded-2xl p-8 max-w-[320px] h-[300px] text-left">
                                        <Person1></Person1>
                                        <p className="text-xl">
                                            &quot;Their prices and quality
                                            exceeded my expectations.&quot;
                                        </p>
                                        <p className="font-bold">Sergei L.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AuroraBackground>
                </div>
            </div>

            {/* BLOG */}
            <div className="blog" id="videos">
                <div className="flex flex-col gap-16 pt-28">
                    <h1 className="font-bold text-4xl text-center">Blogs</h1>
                    <Videos
                        videos={[
                            {
                                title: "Repair, Buy, Repeat",
                                desc: "Maximizing the Value of Your Electronic Devices: Repair and Buy Responsibly",
                                href: "blog?article1",
                                img: "bp3.jpg",
                            },
                            {
                                title: "iPhone XS Repair",
                                desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
                                href: "",
                                img: "",
                            },
                            {
                                title: "iPhone XS Repair",
                                desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
                                href: "",
                                img: "",
                            },
                        ]}
                    ></Videos>
                    <a
                        href="coming-soon"
                        className="contact-btn flex text-xl font-bold w-fit gap-2 px-6 h-14 items-center rounded-full group text-white self-center"
                    >
                        View all
                        <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>

            {/* CONTACT */}
            <div
                className="contact mt-28 flex flex-col md:flex-row items-center justify-evenly px-2 py-28 gap-y-10"
                id="contact"
            >
                <div className="contact-desc text-white w-full md:w-[470px] gap-4 flex flex-col">
                    <div className="flex justify-center items-center contact-icon mb-4 h-20 w-20 rounded-full">
                        <ContactIcon></ContactIcon>
                    </div>
                    <h2 className="font-bold text-4xl">
                        et a free consultancy from our expert right now!
                    </h2>
                    <p className="text-lg">
                        In our tech-centric lives, gadgets are indispensable.
                        When phones or accessories malfunction, it&apos;s
                        concerning. Professional repair services swiftly resolve
                        issues, ensuring seamless functionality.
                    </p>
                </div>
                {/* CONTACT FORM */}
                <CustomContactForm></CustomContactForm>
            </div>

            {/* SUBSCRIPTION */}
            <div className="subscription max-lg:hidden">
                <div className=" my-28 flex justify-center px-12 items-center gap-20">
                    <h2 className="font-bold text-3xl w-[508px]">
                        Subscribe to our newsletter to get latest news on your
                        inbox.
                    </h2>
                    <div className="mb-5 flex gap-6">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="email-sub w-[320px] rounded-2xl border border-[#e0e0e0] py-3 px-6 text-sm font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        <button className="subscribe-btn flex font-bold w-fit gap-2 px-6 h-14 items-center rounded-2xl group text-white self-center">
                            Subscribe
                            <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}
