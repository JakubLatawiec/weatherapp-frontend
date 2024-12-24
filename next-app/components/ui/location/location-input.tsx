import { TextField } from "@mui/material";
import { useState, useEffect } from "react";

interface LocationInputProps {
    label: string;
    initialValue: number;
    onValid: (value: number) => void;
    onError: (hasError: boolean) => void;
    min: number;
    max: number;
    className?: string;
}

const LocationInput: React.FC<LocationInputProps> = ({
    label,
    initialValue,
    onValid,
    onError,
    min,
    max,
    className
}) => {
    const [inputValue, setInputValue] = useState<string>(initialValue.toFixed(6));
    const [error, setError] = useState(false);

    useEffect(() => {
        setInputValue(initialValue.toString());
    }, [initialValue]);

    const isValidNumber = (value: string) => {
        const numberRegex = /^-?\d+(\.\d+)?$/;
        return numberRegex.test(value);
    };

    const validate = (value: string) => {
        if (!isValidNumber(value)) {
            setError(true);
            onError(true);
            return;
        }
        const numericValue = parseFloat(value);
        if (isNaN(numericValue) || numericValue < min || numericValue > max) {
            setError(true);
            onError(true);
        }
        else {
            setError(false);
            onError(false);
            onValid(parseFloat(numericValue.toFixed(6)));
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        validate(value);
    }

    return (
        <TextField
            label={label}
            variant="standard"
            value={inputValue}
            onChange={handleChange}
            error={error}
            helperText={error ? `Value must be between ${min} and ${max}` : ""}
            className={className}
        />
    )
}

export default LocationInput;