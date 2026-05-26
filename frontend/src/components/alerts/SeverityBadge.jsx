function SeverityBadge({ severity }) {
    const styles = {
        MEDIUM: "bg-amber-950 text-amber-300",
        HIGH: "bg-orange-950 text-orange-300",
        CRITICAL: "bg-red-950 text-red-300",
    };

    return (
        <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                styles[severity] || "bg-slate-800 text-slate-300"
            }`}
        >
      {severity}
    </span>
    );
}

export default SeverityBadge;