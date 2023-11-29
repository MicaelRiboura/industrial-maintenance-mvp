import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import Button from '../Button';
import Input from '../inputs/Input';
import { useValidationForms } from '../../hooks/useValidationForms';

export default function SignUpForm() {
    const { validateRequiredFields, validateEmailField } = useValidationForms();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('data: ', e.target.elements);

        const name = e.target.elements['name'].value;
        const email = e.target.elements['email'].value;
        const password = e.target.elements['password'].value;

        let validationErrors = validateRequiredFields([
            { input: name, msg: 'O campo nome é obrigatório' },
            { input: email, msg: 'O campo e-mail é obrigatório' },
            { input: password, msg: 'O campo senha é obrigatório' },
        ]);

        validationErrors += validateEmailField(email);

        if (validationErrors === 0) {
            console.log('sem erro');
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);

            try {
                const url = 'http://localhost:5000/users/create';
                const responseJson = await fetch(url, {
                    method: 'post',
                    body: formData
                })
                // .then((response) => response.json())
                const response = await responseJson.json();
                console.log('response: ', response);
                if (!response.message) {
                    toast.success('Cadastro realizado com sucesso!');
                    navigate('/');

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