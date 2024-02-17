import { useState } from "react";
import ClassList from "./ClassList";

const Academy = () => {
    const [showImage, setshowImage] = useState("https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1687694515/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Live_and_Recorded_Class_m1e0eg")
    return (
        <div className="bg-[url(https://shikho.com/images/shikho-program/academic_program_bg.png)] h-auto w-full bg-no-repeat bg-cover p-8">
            <div className="text-white text-center">
                <h5 className="text-[32px] font-semibold">Shikho একাডেমিক প্রোগ্রামে যা যা থাকছে</h5>
                <h3 className="text-[18px] font-[400] mt-1">ক্লাসের পড়ায় ও বোর্ড পরীক্ষার প্রস্তুতিতে সবার চেয়ে এগিয়ে রাখতে এই প্রোগ্রামে রয়েছে-</h3>

                <div className="grid mt-12 mx-20 grid-cols-12 gap-8">
                    <ClassList setshowImage={setshowImage} className="col-span-4 space-y-4" />
                    <div className="col-span-8 rounded-lg overflow-hidden">
                        <img src={showImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academy;