import { FaTrashAlt } from "react-icons/fa";

export default function Table({ heads = [], data = [] }) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-8">
                <thead className="text-xs uppercase bg-dark-800 text-white">
                    <tr>
                        {heads.map((head, index) => (
                            <th key={`head-${index}`} scope="col" className="px-6 py-3">
                                {head}
                            </th>
                        ))}
                        <th key={`head-${heads.length}`} scope="col" className="px-6 py-3">
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {(data && data.length > 0) ? (data.map((item, index) => (
                        <tr key={`tr-${index}`} className="bg-gray-700 border-b border-dark-800">
                            {Object.values(item).map((value, index) => (
                                <td key={`td-${index}`} className="px-6 py-4 font-medium whitespace-nowrap text-white">
                                    {value}
                                </td>
                                
                            ))}
                            <td key={`td-${data.length}`} className="px-6 py-4 font-medium whitespace-nowrap text-white">
                                <FaTrashAlt className="text-lg text-red-400 cursor-pointer" />
                            </td>
                        </tr>
                    ))) : (
                            <tr className="bg-gray-700 border-b border-dark-800">
                                <td colSpan={heads.length + 1} className="px-6 py-4 font-medium text-center whitespace-nowrap text-white">
                                    Nenhum registro encontrado!
                                </td>
                            </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}