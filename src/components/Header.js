import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <nav className="bg-slate-600 px-4">
                <div className="py-2">
                    <div className="my-4 flex items-center justify-between">
                        <span className="mx-2 text-xl hover:text-white"><Link to="/">DashBoard</Link></span>
                        <span className="mx-2 text-xl hover:text-white"><Link to="/emplist">Employee List</Link></span>
                        <span className="mx-2 text-xl hover:text-white"><Link to="/empform">Employee Form</Link></span>
                        <span className="mx-2 text-xl hover:text-white"><Link to="/empcard">Employee Card</Link></span>
                    </div>
                    {/* <div className="flex items-center">
                        <input className="border rounded-lg mr-2 p-1" type="search" placeholder="search" />
                        <button className="border rounded-lg p-1 hover:bg-slate-700 ">Search</button>
                    </div> */}
                </div>
            </nav>
        </div>

    )
}
export default Header;