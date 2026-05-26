function StatusBadge({ status }) {
    const isOnline = status === "ONLINE";

    return (
        <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                isOnline
                    ? "bg-emerald-950 text-emerald-300"
                    : "bg-red-950 text-red-300"
            }`}
        >
      {status}
    </span>
    );
}

export default StatusBadge;