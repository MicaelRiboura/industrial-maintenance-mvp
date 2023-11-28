import Logo from "../assets/images/logo.svg";
export default function Header() {
    return (
        <header className="bg-dark-800" style={{ height: '80px' }}>
            <div className="h-full flex items-center justify-between" style={{ margin: 'auto', maxWidth: '1440px' }}>
                <img src={Logo} alt="RelEquip Logo" className="mb-4" style={{ height: '60px' }} />
                <div className="flex text-white font-bold">
                    <span>Usuário</span>
                </div>
            </div>
        </header>
    );
}