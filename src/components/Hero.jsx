import { BiLogoPlayStore } from "react-icons/bi";

const Hero = () => {
    return (
        <div className="bg-[#e0f0fd] min-h-[484px] flex items-center justify-center">
            <div className="grid grid-cols-12 items-center mx-20">
                <div className="col-span-8">
                    <h6 className="font-semibold text-[#354895] text-[48px] !leading-[140%]">Shikho একাডেমিক প্রোগ্রাম <br /><span className="text-main">SSC-HSC’র A+</span>  প্রস্তুতি এখানেই</h6>

                    <h5 className="text-[#454c7e] font-[500] mt-2 text-[24px]">অষ্টম থেকে দ্বাদশ শ্রেণি পর্যন্ত শিক্ষার্থীদের সারাবছর পড়ালেখার কমপ্লিট সল্যুশন</h5>

                    <div className="flex items-center space-x-3 mt-5">
                        <button className="bg-main text-white rounded-lg px-4 py-3">একাডেমিক প্রোগ্রাম দেখো</button>

                        <button className="bg-white border-main hover:bg-main hover:text-white border-[1px] text-main  flex items-center space-x-2 rounded-lg px-4 py-3">
                            <BiLogoPlayStore size={20} />
                            <span>শিখতে শুরু করো</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-4">
                    <img src="./hero.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;