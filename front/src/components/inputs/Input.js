export default function Input({ name, label, type, placeholder, groupClassName, step }) {
    return (
        <div className={groupClassName}>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-white">{label}</label>
            <input
                id={name}
                type={type} 
                name={name}
                step={step}
                className="w-full bg-dark-800 text-white px-3 py-2 mb-1 border-2 border-dark-800 rounded-md focus:outline-none focus:border-primary-500 transition-colors"
                placeholder={placeholder}
            />
        </div>
    );
}