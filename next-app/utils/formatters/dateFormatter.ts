const dateFormatter = (date: string | undefined): string => {
    if (date === undefined) {
        return "N/A";
    }
    
    const inputDate = new Date(date);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    today.setHours(0, 0, 0, 0);
    tomorrow.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);

    if (inputDate.getTime() === today.getTime()) {
        return "Today";
    }
    else if (inputDate.getTime() === tomorrow.getTime()) {
        return "Tomorrow";
    }
    else {
        const day = inputDate.getDate().toString().padStart(2, '0');
        const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
        const year = inputDate.getFullYear();
        return `${day}/${month}/${year}`;
    }
}

export {dateFormatter};