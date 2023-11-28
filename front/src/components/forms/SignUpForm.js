import { Link } from 'react-router-dom';
import Button from '../Button';
import Input from '../inputs/Input';

export default function SignUpForm() {
    return (
        <form class="space-y-4 md:space-y-6" action="#">
            <Input
                type="text"
                name="name"
                groupClassName={'w-full'}
                placeholder="Company"
                label="Nome da Empresa"
            />

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
                label="Cadastrar"
                extendClassName="w-full"
            />
            <p className="text-sm font-normal text-gray-50 dark:text-gray-400">
                Já tem uma conta ainda? <Link to={'/'} className="font-medium text-primary-500 hover:underline">Entre</Link>
            </p>
        </form>
    );
}