import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <section class="bg-dark-800">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <img src={Logo} alt="RelEquip Logo" className="mb-4" style={{ height: '70px' }} />
                <div class="w-full bg-dark-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tigh md:text-2xl text-white">
                            Entre em sua conta
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <Input 
                                type="email"
                                name="email"
                                groupClassName={'w-full'}
                                placeholder="name@company.com"
                                label="Seu e-mail"
                            />

                            <Input
                                type="password"
                                name="password"
                                groupClassName={'w-full'}
                                placeholder="••••••••"
                                label="Senha"
                            />
                            <Button
                                type="submit"
                                label="Entrar"
                                extendClassName="w-full"
                            />
                            <p className="text-sm font-normal text-gray-50 dark:text-gray-400">
                                Não tem uma conta ainda? <Link to={'/cadastre-se'} className="font-medium text-primary-500 hover:underline">Cadastre-se</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}