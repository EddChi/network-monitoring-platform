function LoadingState({ message = "Loading data..." }) {
    return (
        <div className="mt-8 flex items-center gap-3 text-slate-400">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-400" />

            <p className="text-sm">{message}</p>
        </div>
    );
}

export default LoadingState;