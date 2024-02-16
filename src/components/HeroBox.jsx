import HeroBoxCard from "./HeroBoxCard";

const HeroBox = () => {
    return (
        <div className="flex items-center w-full justify-between p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl">
            <HeroBoxCard title="২৫ লক্ষ+" value="শিক্ষার্থী" color="#ff6e76" />
            <HeroBoxCard title="৫০ জন+" value="অভিজ্ঞ মেন্টর" color="#3daffd" />
            <HeroBoxCard title="১০ লক্ষ+" value="অ্যাপ ডাউনলোড" color="#00b19e" />
            <HeroBoxCard title="১.৮ লক্ষ+" value="লার্নিং ম্যাটেরিয়াল" color="#eaa819" />
        </div>
    );
};

export default HeroBox;
