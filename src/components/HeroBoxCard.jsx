
const HeroBoxCard = ({ title, value, color }) => {
    return (
        <div>
            <h6 className="text-[28px] font-semibold" style={{ color: color }}>{title}</h6>
            <h6 className="text-[#454c7e]">{value}</h6>
        </div>
    );
};

export default HeroBoxCard;