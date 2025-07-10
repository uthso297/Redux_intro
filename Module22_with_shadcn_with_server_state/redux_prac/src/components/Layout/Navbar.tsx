import Logo from "@/assets/Logo";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toogle";

const Navbar = () => {
    return (
        <div>
            <Logo></Logo>
            <ModeToggle></ModeToggle>
            <Link to='user'>Users</Link>
            <Link to='tasks'>Tasks</Link>
        </div>
    );
};

export default Navbar;