import { useEffect } from "react";
import Logo from "../assets/images/logo.svg";
import SignUpForm from "../components/forms/SignUpForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextApiHook";

export default function SignUp() {
    const { signed } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(signed)
        if (signed) {
            navigate('/inicio');
        }
    }, [signed, navigate]);

    return (
        <section className="bg-dark-800">
            <div className="flex">
                <div className="w-1/2">
                    <div className="flex flex-col justify-center items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-9/12">
                            <h1 className="text-primary-500 text-6xl font-bold mb-8">Cadastre-se agora!</h1>
                            <p className="text-white opacity-80 text-xl">Para obter um diagnóstico seguro dos equipamentos de sua empresa, é necessária a criação de uma conta empresarial!</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <img src={Logo} alt="RelEquip Logo" className="mb-4" style={{ height: '70px' }} />
                        <div className="w-full bg-dark-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tigh md:text-2xl text-white">
                                    Cadastre-se
                                </h1>
                                <SignUpForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}