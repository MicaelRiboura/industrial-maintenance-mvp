import { Link } from 'react-router-dom';
import Button from '../Button';
import Input from '../inputs/Input';

export default function SignInForm() {
    return (
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
    );
}