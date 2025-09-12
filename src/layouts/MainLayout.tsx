import { Outlet } from "react-router";

import { Header } from "../components/Header";

const Mainlayout: React.FC = () => {

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Mainlayout;