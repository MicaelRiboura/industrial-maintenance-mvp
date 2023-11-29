import { FaUserCircle } from "react-icons/fa";
import Logo from "../assets/images/logo.svg";
import { useAuth } from "../contexts/AuthContextApiHook";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
    const { signed, user, signOut } = useAuth();

    return (
        <header className="bg-dark-800 fixed w-full" style={{ height: '80px', zIndex: 4 }}>
            <div className="h-full flex items-center justify-between" style={{ margin: 'auto', maxWidth: '1440px' }}>
                <img src={Logo} alt="RelEquip Logo" className="mb-4" style={{ height: '60px' }} />
                {signed && (
                    <div className="flex items-center text-white font-bold">
                        <FaUserCircle className="text-lg mr-2" />
                        <span>{user.name}</span>
                        <FiLogOut className="text-lg ml-4 cursor-pointer" onClick={() => signOut()} />
                    </div>
                )}
            </div>
        </header>
    );
}