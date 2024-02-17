import { useState } from "react";

const ClassList = ({ setshowImage, ...props }) => {
    const [isActive, setIsActive] = useState(1);
    const classes = [
        {
            id: 1,
            title: "লাইভ এবং রেকর্ডেড ক্লাস",
            img: "https://cdn.apito.io/media/shikho_website_v2_8ma77/shikhoHomepageV3/13SX02ME9W_live_class.svg",
            showImage: "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1687694515/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Live_and_Recorded_Class_m1e0eg"
        },
        {
            id: 2,
            title: "অ্যানিমেটেড ভিডিও",
            img: "https://cdn.apito.io/media/shikho_website_v2_8ma77/shikhoHomepageV3/J581ZR7LKK_animated_video.svg",
            showImage: "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1671090186/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Animeted_Video_841x656_qgv12n"
        },
    ];
    return (
        <div {...props}>
            {classes.map(item => <Card isActive={isActive} setIsActive={setIsActive} setshowImage={setshowImage} key={item.id} item={item} />)}

        </div>
    );
};

export default ClassList;



const Card = ({ item, setshowImage, setIsActive, isActive }) => {
    return (
        <div onClick={() => {
            setshowImage(item.showImage)
            setIsActive(item.id)
        }} className={`bg-white ${isActive === item.id ? 'active-class' : ''} relative px-8 py-3 rounded-lg flex items-center space-x-3 cursor-pointer`}>
            <img src={item.img} alt="" />
            <h6 className="text-[#454c7e] text-[20px] font-[500]">{item.title}</h6>
        </div>
    )
}