import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import Button from '../Button';
import Input from '../inputs/Input';
import { useValidationForms } from '../../hooks/useValidationForms';
import { useAuth } from '../../contexts/AuthContextApiHook';

export default function SignInForm() {
    const { validateRequiredFields, validateEmailField } = useValidationForms();
    const navigate = useNavigate();
    const { sign } = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('data: ', e.target.elements);

        const email = e.target.elements['email'].value;
        const password = e.target.elements['password'].value;

        let validationErrors = validateRequiredFields([
            { input: email, msg: 'O campo e-mail é obrigatório' },
            { input: password, msg: 'O campo senha é obrigatório' },
        ]);

        validationErrors += validateEmailField(email);

        if (validationErrors === 0) {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);

            try {
                const response = await sign({ email, password });
                console.log('response: ', response);

                if (!response.message) {
                    toast.success(`Olá, ${response.name}!`);
                    navigate('/inicio');
                } else {
                    toast.error(response.message);
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('Erro no cadastro!');
            }
        }
    }

    return (
        <form className="space-y-4 md:space-y-6" method="post" onSubmit={onSubmit}>
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