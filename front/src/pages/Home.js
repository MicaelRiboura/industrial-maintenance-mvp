import { useEffect } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import HomeForm from "../components/forms/HomeForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextApiHook";

export default function Home() {
    const { signed } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(signed)
        if (!signed) {
            navigate('/');
        }
    }, [signed, navigate]);

    return (
        <div className="bg-dark-400" style={{ minHeight: '100vh', minWidth: '100%' }}>
            <Header />
            <div style={{ margin: 'auto', maxWidth: '1440px' }}>
                <h1 className="text-5xl font-bold text-primary-500 mt-12 mb-4">Confiabilidade de Equipamentos</h1>
                <p className="text-xl  mb-12 text-white opacity-80">Diagnostique o equipamento de sua empresa com base em condições futuras de funcionamento!</p>
                <HomeForm />
                <h2 className="mt-12 mb-4 font-bold text-white text-xl">Minhas Análises</h2>
                <Table
                    heads={[
                        'ID do Produto',
                        'Qualidade',
                        'Temperatura do Ar',
                        'Temperatura do Processo',
                        'Velocidade de Rotação',
                        'Torque',
                        'Desgaste da Ferramenta',
                        'Diagnóstico',
                    ]}
                    data={[
                        {
                            productId: 1,
                            type: 1,
                            airTemperature: 1,
                            processTemperature: 1,
                            speedRotation: 1,
                            torque: 1,
                            toolWear: 1,
                            target: 1,
                        },
                        {
                            productId: 1,
                            type: 1,
                            airTemperature: 1,
                            processTemperature: 1,
                            speedRotation: 1,
                            torque: 1,
                            toolWear: 1,
                            target: 1,
                        },
                        {
                            productId: 1,
                            type: 1,
                            airTemperature: 1,
                            processTemperature: 1,
                            speedRotation: 1,
                            torque: 1,
                            toolWear: 1,
                            target: 1,
                        },
                        {
                            productId: 1,
                            type: 1,
                            airTemperature: 1,
                            processTemperature: 1,
                            speedRotation: 1,
                            torque: 1,
                            toolWear: 1,
                            target: 1,
                        },
                        {
                            productId: 1,
                            type: 1,
                            airTemperature: 1,
                            processTemperature: 1,
                            speedRotation: 1,
                            torque: 1,
                            toolWear: 1,
                            target: 1,
                        },
                    ]}
                />
            </div>
        </div>
    );
}