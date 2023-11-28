import Header from "../components/Header";
import Table from "../components/Table";
import HomeForm from "../components/forms/HomeForm";

export default function Home() {
    return (
        <div className="bg-dark-400" style={{ minHeight: '100vh', minWidth: '100vw' }}>
            <Header />
            <div style={{ margin: 'auto', maxWidth: '1440px' }}>
                <h1 className="text-5xl font-bold text-primary-500 mt-12 mb-4">Confiabilidade de Equipamentos</h1>
                <p className="text-xl  mb-12 text-white opacity-80">Diagnostique o equipamento de sua empresa com base em condições futuras de funcionamento!</p>
                <HomeForm />
                <h2 class="mt-12 mb-4 font-bold text-white text-xl">Minhas Análises</h2>
                <Table />
            </div>
        </div>
    );
}