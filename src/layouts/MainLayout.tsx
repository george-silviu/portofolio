import { Outlet } from "react-router";
import Header from "../components/Header";

import "./MainLayout.scss";

const Mainlayout: React.FC = () => {

    return (
        <div className="app-layout">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Mainlayout;