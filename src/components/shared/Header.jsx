
const Header = () => {
    return (
        <header className="bg-white shadow-md px-10 p-4 flex items-center space-x-5 justify-between">
            <div className="flex items-center space-x-5">
                <img className="max-w-[100px]" src="./logo.svg" alt="" />
                <div className="flex items-center space-x-4">
                    <Menu name="Home" />
                    <Menu name="Acadamic" />
                    <Menu name="Course" />
                </div>
            </div>
            <button className="bg-blue-500 px-4 text-white py-2 rounded-md">Login</button>
        </header>
    );
};

export default Header;

// eslint-disable-next-line react/prop-types
const Menu = ({ name }) => {
    return (<div>
        {name}
    </div>)
}