import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getUserInfo } from "../../Services/requestServices";

const Dashboard = () => {
    let navigate = useNavigate();

    useEffect(async () => {
        const userInfoResponse = await getUserInfo();
        console.log("User Info Response:", userInfoResponse);
        if (userInfoResponse.noError === false) {
            navigate("../login");
        }
    }, []);

    return (
        <div>
            <h1>Dashboard Page</h1>
        </div>
    );
};

export default Dashboard;