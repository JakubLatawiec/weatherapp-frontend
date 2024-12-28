const timeFormatter = (seconds: number): string => {
    if (seconds === undefined) {
        return "N/A";
    }

    if (seconds < 60) {
        return `${seconds.toFixed(0)}s`;
    }
    else if (seconds < 3600) {
        return `${(seconds / 60).toFixed(0)}m`;
    }
    else {
        return `${(seconds / 3600).toFixed(2)}h`;
    }
}

export { timeFormatter };