
const Header = () => {
    return (
        <header className="bg-white shadow-md px-10 p-4 flex items-center space-x-5 justify-between">
            <div className="flex items-center space-x-5">
                <img className="max-w-[100px] h-[70px]" src="https://shikho.com/shikho-logo.svg" alt="" />
            </div>
            <ul className="flex items-center space-x-6">
                <Menu name="হোম" active />
                <Menu name="একাডেমিক প্রোগ্রাম" />
                <Menu name="কোর্স" />
                <Menu name="মডেল টেস্ট ও রিভিশন" />
                <Menu name="আমাদের সম্পর্কে" />
                <Menu name="শিখো বিদ্যালয়" />
                <Menu name="বহুব্রীহি" />
            </ul>
            <button className="bg-pink-500 px-4 text-white py-2 rounded-md">Login</button>
        </header>
    );
};

export default Header;

const Menu = ({ active, name }) => {
    return (<li className={`${active ? 'text-main' : 'text-bluegray'} hover:text-main cursor-pointer`}>
        {name}
    </li>)
}