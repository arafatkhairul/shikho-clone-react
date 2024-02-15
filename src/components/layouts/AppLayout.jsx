import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function AppLayout() {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>)
}