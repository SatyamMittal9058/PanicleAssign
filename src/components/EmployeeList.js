import axios from "axios";
import { useEffect, useState } from "react";

const EmployeeList = () => {
    const [originalData, setOriginalData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [userData, setUserData] = useState([]);
    const [page, setPage] = useState(1);

    const handleSearch = () => {
        const filterData = originalData.filter((user) => Object.values(user).some((value) => String(value).includes(searchText.toLowerCase())));
        setUserData(filterData);
    }
    const handlePage = (currPage) => {
        if (currPage >= 1 && currPage <= Math.ceil(userData.length / 6) && currPage !== page) setPage(currPage);
    }
    const fetchdata = async () => {
        try {
            const res = await axios.get("http://localhost:4000/api/userlist");
            const data = res.data;
            setOriginalData(data.user);
            setUserData(data.user);
            alert(data.message);
        }catch(err){
            alert("Error fetching");
        }
    }
    useEffect(() => {
        fetchdata();
    }, []);

    return (

        <div className="container mx-auto my-2">
            <div className="overflow-y-auto">
                <div className="my-2">
                    <input className="border border-gray-300 mr-2 rounded-lg px-2" type="text" placeholder="Enter Value..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="bg-gray-600 rounded-lg px-2 text-white" onClick={handleSearch}>
                        Search
                    </button >
                </div>
                <table className="w-full table border border-gray-30">
                    <thead className="">
                        <tr className="text-lg border-b">
                            <th className="text-left py-2 px-2 border-r">Name</th>
                            <th className="text-left py-2 px-2 border-r">Department</th>
                            <th className="text-left py-2 px-2 border-r">Position</th>
                            <th className="text-left py-2 px-1">Salary</th>
                        </tr>
                    </thead>
                    {(userData.length > 0 && (<tbody>
                        {userData.sort((a, b) => { return a.id - b.id }).slice(page * 6 - 6, page * 6).map((user,i) => (
                            < tr key={i} className="border-b">
                                <td className="text-left py-4 px-2 border-r">{user.name}</td>
                                <td className="text-left py-4 px-2 border-r">{user.department}</td>
                                <td className="text-left py-4 px-2 border-r">{user.position}</td>
                                <td className="text-left py-4 px-2">{user.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                    ))}
                </table>
            </div>
            <div className="relative bottom-0">
                {userData.length > 0 && (
                    <div className="cursor-pointer my-6">
                        <span>Page {page} of {Math.ceil(userData.length / 6)}</span>
                        <span className="bg-gray-300 rounded-lg px-2 mx-1 hover:bg-gray-500" onClick={() => handlePage(page - 1)}>Prev</span>
                        {[...Array(Math.ceil(userData.length / 6))].map((u, i) => {
                            return (
                                <span key={i} className="border bg-gray-200 rounded-lg px-1 mx-1 hover:bg-gray-500" onClick={(page) => handlePage(i + 1)}>{i + 1}</span>
                            )
                        })}
                        <span className="bg-gray-300 rounded-lg px-2 mx-1 hover:bg-gray-500" onClick={() => handlePage(page + 1)}>Next</span>

                    </div>
                )}
            </div>
        </div>
    )
}
export default EmployeeList;