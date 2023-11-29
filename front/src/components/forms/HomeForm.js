import { useValidationForms } from '../../hooks/useValidationForms';
import Button from '../Button';
import Input from '../inputs/Input';
import Select from '../inputs/Select';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContextApiHook';
import { useCallback } from 'react';

export default function HomeForm() {
    const { validateRequiredFields } = useValidationForms();
    const { user } = useAuth();
    const navigate = useNavigate();

    const onSubmit = useCallback(async (e) => {
        e.preventDefault();
        console.log('data: ', e.target.elements);

        const type = e.target.elements['type'].value;
        const airTemperature = e.target.elements['airTemperature'].value;
        const processTemperature = e.target.elements['processTemperature'].value;
        const speedRotation = e.target.elements['speedRotation'].value;
        const torque = e.target.elements['torque'].value;
        const toolWear = e.target.elements['toolWear'].value;

        let validationErrors = validateRequiredFields([
            { input: type, msg: 'O campo Qualidade é obrigatório' },
            { input: airTemperature, msg: 'O campo Temperatura do Ar é obrigatório' },
            { input: processTemperature, msg: 'O campo Temperatura do Processo é obrigatório' },
            { input: speedRotation, msg: 'O campo Velocidade de Rotação é obrigatório' },
            { input: torque, msg: 'O campo Torque é obrigatório' },
            { input: toolWear, msg: 'O campo Desgaste da Ferramenta é obrigatório' },
        ]);

        if (user && user?.id) {
            if (validationErrors === 0) {
                console.log('sem erro');
                const formData = new FormData();
                formData.append('type', type);
                formData.append('air_temperature', parseFloat(airTemperature));
                formData.append('process_temperature', parseFloat(processTemperature));
                formData.append('rotation_speed', parseFloat(speedRotation));
                formData.append('torque', parseFloat(torque));
                formData.append('tool_wear', parseFloat(toolWear));
                formData.append('user_id', user.id);

                try {
                    const url = 'http://localhost:5000/equipments/create';
                    const responseJson = await fetch(url, {
                        method: 'post',
                        body: formData
                    })
                    // .then((response) => response.json())
                    const response = await responseJson.json();
                    console.log('response: ', response);
                    if (!response.message) {
                        toast.success('Diagnóstico realizado com sucesso!');
                        navigate('/');

                    } else {
                        toast.error(response.message);
                    }
                } catch (error) {
                    console.error('Error:', error);
                    toast.error('Erro no diagnóstico!');
                }
            }
        }
    }, [validateRequiredFields, user, navigate]);

    return (
        <form className="flex flex-wrap" method="post" onSubmit={onSubmit}>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/4 my-3 pr-4">
                    <Select
                        name="type"
                        label="Qualidade"
                        groupClassName="px-3"
                        options={[
                            {
                                value: 'L',
                                label: 'Baixa',
                            },
                            {
                                value: 'M',
                                label: 'Média',
                            },
                            {
                                value: 'H',
                                label: 'Alta',
                            },
                        ]}
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 my-3 pr-4">
                    <Input
                        type="number"
                        name="airTemperature"
                        label="Temperatura do Ar (°C)"
                        groupClassName="px-3"
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 my-3 pr-4">
                    <Input
                        type="number"
                        name="processTemperature"
                        label="Temperatura do Processo (°C)"
                        groupClassName="px-3"
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 my-3 pr-4">
                    <Input
                        type="number"
                        name="speedRotation"
                        label="Velocidade de Rotação"
                        groupClassName="px-3"
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 my-3 pr-4">
                    <Input
                        type="number"
                        name="torque"
                        label="Torque"
                        groupClassName="px-3"
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 my-3 pr-4">
                    <Input
                        type="number"
                        name="toolWear"
                        label="Desgaste da Ferramenta"
                        groupClassName="px-3"
                    />
                </div>
            </div>
            <Button
                type="submit"
                label="Diagnosticar"
                extendClassName="mx-4 mt-4 block w-32"
            />
        </form>
    );
}