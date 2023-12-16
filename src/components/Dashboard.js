import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import DepartmentPieChart from "../charts/DepartmentPieChart";
import { PieChartData } from "../charts/charFunctions";
import { URL } from "../backendapi";
// import DepartmentPieChart from "../charts/DepartmentPieChart";

Chart.register(CategoryScale);
const Dashboard = () => {
    const [userData, setUserData] = useState([]);
    const [depData, setDepData] = useState();
    const [avgSalary,setAvgSalary]=useState();
    const [totalEmployees,setTotalEmployees]=useState();
    const fetchdata = async () => {
        try {
            const res = await axios.get(`${URL}/api/userlist`);
            const data = res.data;
            setUserData(data.user);
            // console.log(userData);
            // Below function are PieChart Calculation
            const countData = PieChartData(data.user);
            setDepData(countData);
            


            setTotalEmployees(data.user.length);
            const totalSalary=data.user.reduce((acc,user)=>acc+user.salary,0);
            setAvgSalary(Math.ceil(totalSalary/data.user.length));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    useEffect(() => {
        fetchdata();
    }, []);
    return (
        <div>
            <div className="container w-full m-10 p-5 border border-black-lg bg-opacity-60 bg-slate-500 flex justify-between px-20">
                <span className="font-extrabold">Total Employees : {totalEmployees}</span>
                <span className="font-extrabold">Avg Salary : {avgSalary} </span>
            </div>


            <div className="flex justify-center">
                {depData && (<div>
                    <DepartmentPieChart charData={depData} />
                </div>)}
            </div>
        </div>
    )
}
export default Dashboard;