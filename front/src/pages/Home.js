import Form from "../components/Form";
import Header from "../components/Header";
import Table from "../components/Table";

export default function Home() {
    return (
        <div className="bg-dark-400" style={{ minHeight: '100vh', minWidth: '100vw' }}>
            <Header />
            <div style={{ margin: 'auto', maxWidth: '1440px' }}>
                <h1 className="text-5xl font-bold text-primary-500 mt-8 mb-4">Confiabilidade dos Equipamentos</h1>
                <p className="text-xl mb-8 text-white opacity-80">Simule as condições de funcionamento em equipamentos da sua empresa e calcule sua confiabilidade!</p>
                <Form />
                <Table />
            </div>
        </div>
    );
}