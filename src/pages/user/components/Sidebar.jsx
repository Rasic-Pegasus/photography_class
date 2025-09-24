import { Link } from "react-router-dom";
import { useLogin } from "../../../context/authContext";

function Sidebar() {

    const { logout } = useLogin();

    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-4 flex flex-col">
            <h3 className="text-xl font-bold mb-6">Dashboard</h3>
            <nav className="flex flex-col gap-4">
                <Link to="/dashboard">Home</Link>
                <Link to="/dashboard/events">Events</Link>
                <Link to="/dashboard/website">Websites</Link>
                <button className="mt-auto text-red-400" onClick={() => logout()}>Logout</button>
            </nav>
        </div>
    );
}

export default Sidebar
