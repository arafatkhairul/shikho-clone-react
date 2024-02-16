import LectureCard from "./LectureCard";

const LectureSection = () => {
    return (
        <div className="flex justify-center flex-col items-center">
            <h6 className="text-[32px] font-semibold text-[#354895]">মাধ্যমিক ও উচ্চমাধ্যমিকের পড়ালেখা এবং পরীক্ষা প্রস্তুতির পূর্ণাঙ্গ প্রোগ্রাম</h6>
            <h5 className="text-[18px] font-[400] mt-2">বছরজুড়ে দেশসেরা মেন্টরদের লাইভ ক্লাস, লাইভ এক্সাম, ক্লাস নোট, অ্যানিমেটেড ভিডিও-তে A+ প্রস্তুতি নাও</h5>

            <div className="grid grid-cols-4 gap-8 my-8">
                <LectureCard bg="bg-orange-400" title="ক্লাস ৮" img="https://shikho.com/banners/whiteboard-8.png" />
                <LectureCard bg="bg-[#2dadf5]" title="৯ম (নতুন কারিকুলাম)" img="https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_auto/v1671513891/a5hlb2hsvl47wc9yt4jg" />
                <LectureCard bg="bg-[#c84bae]" title="১০ম - বিজ্ঞান" img="https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_auto/v1671515295/uxapdc55th5q09kervro" />
                <LectureCard bg="bg-[#d54a5d]" title="১১শ - বিজ্ঞান" img="https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_auto/v1671515381/lyp1yeeedd4ekn7wispx" />
            </div>
        </div>
    );
};

export default LectureSection;