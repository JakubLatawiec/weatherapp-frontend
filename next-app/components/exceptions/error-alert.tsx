import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react"

interface ErrorAlertProps {
    message: string | null; 
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({
    message
}) => {
    const [open, setOpen] = useState(!!message);

    useEffect(() => {
        if (message) {
            setOpen(true);
        }
    }, [message])

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" variant="filled" className="w-full">
                {message}
            </Alert>
        </Snackbar>
    )
}

export default ErrorAlert;