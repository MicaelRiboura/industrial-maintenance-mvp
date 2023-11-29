import { useEffect } from "react";
import Logo from "../assets/images/logo.svg";
import SignInForm from "../components/forms/SignInForm";
import { useAuth } from "../contexts/AuthContextApiHook";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
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
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <img src={Logo} alt="RelEquip Logo" className="mb-4" style={{ height: '70px' }} />
                <div className="w-full bg-dark-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tigh md:text-2xl text-white">
                            Entre em sua conta
                        </h1>
                       <SignInForm />
                    </div>
                </div>
            </div>
        </section>
    );
}