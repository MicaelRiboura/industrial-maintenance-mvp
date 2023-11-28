import Button from '../Button';
import Input from '../inputs/Input';
import Select from '../inputs/Select';

export default function HomeForm() {
    return (
        <form className="flex flex-wrap" action="">
            <div className="flex flex-wrap">
                <div className="w-1/4 my-3 pr-4">
                    <Select
                        name="productID"
                        label="Tipo de Qualidade"
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
                <div className="w-1/4 my-3 pr-4">
                    <Input
                        type="number"
                        name="productID"
                        label="Temperatura do Ar (°C)"
                        groupClassName="px-3"
                    />
                </div>
                <div className="w-1/4 my-3 pr-4">
                    <Input
                        type="number"
                        name="productID"
                        label="Temperatura do Processo (°C)"
                        groupClassName="px-3"
                    />
                </div>
                <div className="w-1/4 my-3 pr-4">
                    <Input
                        type="number"
                        name="productID"
                        label="Velocidade de Rotação"
                        groupClassName="px-3"
                    />
                </div>
                <div className="w-1/4 my-3 pr-4">
                    <Input
                        type="number"
                        name="productID"
                        label="Torque"
                        groupClassName="px-3"
                    />
                </div>
                <div className="w-1/4 my-3 pr-4">
                    <Input
                        type="number"
                        name="productID"
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