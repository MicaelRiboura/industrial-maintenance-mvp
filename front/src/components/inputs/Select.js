export default function Select({ name, label, groupClassName, options }) {
    return (
        <div className={groupClassName}>
            <label for={name} className="block mb-2 text-sm font-medium text-white">{label}</label>
            <select
                id={name}
                name={name}
                className="w-full bg-dark-800 text-white px-3 py-2 mb-1 border-2 border-dark-800 rounded-md focus:outline-none focus:border-primary-500 transition-colors"
            >
               {options.map(option => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}