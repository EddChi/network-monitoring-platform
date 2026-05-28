function ErrorState({ message = "Something went wrong." }) {
    return (
        <div className="mt-8 rounded-2xl border border-red-900 bg-red-950/50 p-5 shadow-lg">
            <p className="text-sm font-semibold text-red-300">Unable to load data</p>

            <p className="mt-2 text-sm text-red-200">{message}</p>
        </div>
    );
}

export default ErrorState;