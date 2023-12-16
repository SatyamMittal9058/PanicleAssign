import { useState } from "react";
import axios from "axios";
import { URL } from "../backendapi";

const EmployeeForm = () => {
    const [userData,setUserData]=useState({
        name:'',
        department:'',
        position:'',
        salary:0,
    })
    
    const handleSubmit= async()=>{
        try{
            const response=await axios.put(`${URL}/api/updateOradd`,userData);
            alert(response.data.message);
        }catch(error){
            alert("User Not Created");
        }
    }
    return (
        <div className="flex items-top justify-center mt-10">
            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">
                        Name:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={userData.name}
                        onChange={(e)=>setUserData({...userData,name:e.target.value})}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Department">
                    Department:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={userData.department}
                        onChange={(e)=>setUserData({...userData,department:e.target.value})}

                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Position">
                        Position:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={userData.position}
                        onChange={(e)=>setUserData({...userData,position:e.target.value})}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Salary">
                        Salary:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="Number"
                        value={userData.salary}
                        onChange={(e)=>setUserData({...userData,salary:e.target.value})}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
export default EmployeeForm;