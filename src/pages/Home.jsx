import Academy from "../components/Academy";
import Hero from "../components/Hero";
import HeroBox from "../components/HeroBox";
import LectureSection from "../components/LectureSection";

export default function Home() {
    return (<div>
        <div className="relative">
            <Hero />
            <div className="absolute w-[80%]  bottom-[-51px] flex justify-center items-center mx-auto right-0 left-0">
                <HeroBox />
            </div>
        </div>
        <div className="mt-[100px]">
            <LectureSection />
        </div>
        <Academy />
    </div>)
}