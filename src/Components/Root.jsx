import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>

            <div className="container mx-auto px-5">
                <Navbar />

                <div className="min-h-[calc(100vh-300px)]">
                    <Outlet></Outlet>
                    <Footer></Footer>

                </div>
            </div>

            {/* <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer> */}
        </div>
    );
};

export default Root;