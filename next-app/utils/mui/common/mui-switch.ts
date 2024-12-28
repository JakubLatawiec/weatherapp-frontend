const mui_switch = {
    MuiSwitch: {
        styleOverrides: {
            switchBase: {
                color: "#000000",
                "&.Mui-checked": {
                    color: "#E0E0E0",
                    "& + .MuiSwitch-track": {
                        backgroundColor: "#fe5c01",
                        opacity: 1
                    }
                }
            }
        }
    }
}

export {mui_switch}