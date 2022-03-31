import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setUser } from "../Actions/userActions";
import { getUserInfo } from "../Services/requestServices";
import { getMatches } from "../Actions/matchActions";
import Container from "@mui/material/Container";

const MainLayout = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            if (user?.id !== undefined) { return; }
            const session = await getUserInfo();

            if (!session) {
                navigate("/");
            }
            else {
                dispatch(setUser(session));
            }
        })();
        dispatch(getMatches());
    });

    return (
        <Container>
            <Outlet />
        </Container>
    )

};

export default MainLayout;