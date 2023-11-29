import { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import HomeForm from "../components/forms/HomeForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextApiHook";

export default function Home() {
    const { signed, user } = useAuth();
    const navigate = useNavigate();
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        console.log(signed)
        if (!signed) {
            navigate('/');
        }
    }, [signed, navigate]);

    const loadEquipments = useCallback(() => {
        if (signed && user) {
            const url = `http://localhost:5000/equipments/user?user_id=${user.id}`;
            fetch(url, {
                method: 'get',
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    console.log(user.id)
                    setEquipments(data.equipments);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [user, signed]);


    useEffect(() => {
        loadEquipments();
    }, [loadEquipments]);

    const qualityDict = {
        'L': 'Baixa',
        'M': 'Média',
        'H': 'Alta',
    }

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
                    data={equipments.map(equip => ({
                        id: equip.id,
                        type: qualityDict[equip.type],
                        airTemperature: String(equip.air_temperature.toFixed(2)).replace('.', ','),
                        processTemperature: String(equip.process_temperature.toFixed(2)).replace('.', ','),
                        rotationSpeed: equip.rotation_speed,
                        torque: String(equip.torque.toFixed(2)).replace('.', ','),
                        toolWear: equip.tool_wear,
                        target: equip.target === 1 ? 'Apresenta Falha' : 'Não apresenta falha'

                    }))}
                />
            </div>
        </div>
    );
}