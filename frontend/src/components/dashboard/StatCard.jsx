function StatCard({ title, value, subtitle }) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <p className="text-sm font-medium text-slate-400">{title}</p>

            <p className="mt-3 text-3xl font-bold text-slate-100">{value}</p>

            {subtitle && <p className="mt-2 text-sm text-slate-500">{subtitle}</p>}
        </div>
    );
}

export default StatCard;