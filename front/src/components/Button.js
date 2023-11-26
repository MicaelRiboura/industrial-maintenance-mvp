export default function Button({ type, label, extendClassName }) {
    return (
        <button
            type={type}
            className={`bg-primary-500 text-dark-800 py-2 px-4 font-bold rounded-md ${extendClassName}`}
        >
            {label}
        </button>
    );
}