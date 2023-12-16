import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "../backendapi";

const EmployeeCard = () => {
    const [userData, setUserData] = useState([]);
    const [editUser, setEditUser] = useState({});
    const [changeUser, setChangeUser] = useState({});
    const fetchData = async () => {
        const response = await axios.get(`${URL}/api/userlist`)
        const data = response.data;
        setUserData(data.user);

    }
    const handleEdit = (user) => {
        setEditUser(user);
        setChangeUser({ ...changeUser });
    }
    const handleSave = async () => {
        if (editUser) {
            try {
                const response = await axios.put(`${URL}/api/update/${editUser._id}`, changeUser);
                const data=response.data;
                setUserData(data.user);
                alert(response.data.message);
            } catch (error) {
                alert("User Not Created");
            }
        }
        fetchData();
        setEditUser(null);
        setChangeUser(null);
    }
    const handleDelete = async (id) => {
        
        try{
            const response=await axios.delete(`${URL}/api/delete/${id}`)
            alert(response.data.message)
            fetchData();
        }catch(error){
            alert("Error")
        }   

    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="flex flex-wrap">
            {userData.length > 0 && userData.map((user,i) => (
                <div key={i} className="m-4 p-4 w-[300px] h-auto hover:bg-gray-200 border rounded-lg bg-blue-300" >
                    <h3 className="font-bold py-2 textmdg">Name : {editUser && editUser._id === user._id ? (<input type="text" value={changeUser.name} onChange={(e) => setChangeUser({ ...changeUser, name: e.target.value })} />) : user.name.slice(0, 1).toUpperCase() + user.name.slice(1).toLowerCase()}</h3>
                    <h4 className="font-bold py-2 text-lg">Department : {editUser && editUser._id === user._id ? (<input type="text" value={changeUser.department} onChange={(e) => setChangeUser({ ...changeUser, department: e.target.value })} />) : user.department.slice(0, 1).toUpperCase() + user.department.slice(1).toLowerCase()}</h4>
                    <h4 className="font-bold py-2 text-lg">Position :{editUser && editUser._id === user._id ? (<input type="text" value={changeUser.position} onChange={(e) => setChangeUser({ ...changeUser, position: e.target.value })} />) : user.position.slice(0, 1).toUpperCase() + user.position.slice(1).toLowerCase()}</h4>
                    <h4 className="font-bold py-2 text-lg">Salary : {editUser && editUser._id === user._id ? (<input type="text" value={changeUser.salary} onChange={(e) => setChangeUser({ ...changeUser, salary: e.target.value })} />) : user.salary}</h4>
                    <button className="border rounded-lg bg-blue-500 px-2 mr-10" onClick={handleSave}>Save</button>
                    <button className="border rounded-lg bg-red-500 px-2 mr-10" onClick={() => handleEdit(user)}>Edit</button>
                    <button className="border rounded-lg bg-pink-500 px-2 " onClick={() => handleDelete(user._id)}>Delete</button>
                </div>))}
        </div>
    )
}
export default EmployeeCard;