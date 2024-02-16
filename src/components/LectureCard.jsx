
const LectureCard = ({ title, img, bg }) => {
    return (
        <div className={`${bg} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-10 shadow-lg rounded-lg flex justify-center items-center flex-col`}>
            <img src={img} alt={title} />
            <h5 className="text-white text-lg mt-4 font-semibold">{title}</h5>
        </div>
    );
};

export default LectureCard;