import { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import HomeForm from "../components/forms/HomeForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextApiHook";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

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

    const deleteEquipment = (id) => {
        console.log(id)
        const url = `http://localhost:5000/equipments/delete?id=${id}`;
        fetch(url, {
            method: 'delete',
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message.includes('sucesso')) {
                    toast.success('Análise de equipamento removida com sucesso!');
                    loadEquipments();
                } else {
                    toast.error(data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    useEffect(() => {
        loadEquipments();
    }, [loadEquipments]);

    const qualityDict = {
        'L': (<span className="px-4 py-1 rounded-lg bg-blue-500 text-sm text-white">Baixa</span>),
        'M': (<span className="px-4 py-1 rounded-lg bg-yellow-500 text-sm text-white">Média</span>),
        'H': (<span className="px-4 py-1 rounded-lg bg-green-500 text-sm text-white">Alta</span>),
    }

    return (
        <div className="bg-dark-400" style={{ minHeight: '100vh', minWidth: '100%' }}>
            <Header />
            <div className="px-8 2xl:px-0" style={{ margin: 'auto', maxWidth: '1440px' }}>
                <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-primary-500 pt-32 mb-4">Confiabilidade de Equipamentos</h1>
                <p className="text-lg xl:text-xl  mb-12 text-white opacity-80">Diagnostique o equipamento de sua empresa com base em condições futuras de funcionamento!</p>
                <HomeForm />
                <h2 className="mt-12 mb-4 font-bold text-white text-xl">Minhas Análises</h2>
                <Table
                    heads={[
                        'ID do Produto',
                        'Qualidade',
                        'Temperatura do Ar (°C)',
                        'Temperatura do Processo (°C)',
                        'Velocidade de Rotação',
                        'Torque',
                        'Desgaste da Ferramenta',
                        'Diagnóstico',
                        'Ações',
                    ]}
                    data={equipments.map(equip => ({
                        id: equip.id,
                        type: qualityDict[equip.type],
                        airTemperature: String((equip.air_temperature - 273).toFixed(1)).replace('.', ',') + ' °C',
                        processTemperature: String((equip.process_temperature - 273).toFixed(1)).replace('.', ',') + ' °C',
                        rotationSpeed: equip.rotation_speed,
                        torque: String(equip.torque.toFixed(1)).replace('.', ','),
                        toolWear: equip.tool_wear,
                        target: equip.target === 1 ? (<span className="px-2 py-1 rounded-lg bg-red-500 text-white text-sm">Falha</span>) : (<span className="px-2 py-1 rounded-lg bg-green-600 text-white text-sm">Normal</span>),
                        delete: (<span onClick={() => deleteEquipment(equip.id)}><FaTrashAlt className="text-lg text-white cursor-pointer" /></span>),

                    }))}
                />
            </div>
        </div>
    );
}