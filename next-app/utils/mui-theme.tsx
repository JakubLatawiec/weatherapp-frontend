import {createTheme} from "@mui/material/styles"

const mui_switch = {
    MuiSwitch: {
        styleOverrides: {
            switchBase: {
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

const mui_light_theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#4caf50"
        }
    },
    components: mui_switch
})

const mui_dark_theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "##90caf9"
        }
    },
    components: mui_switch
})

export {mui_light_theme, mui_dark_theme};