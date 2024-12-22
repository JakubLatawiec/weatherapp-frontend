import {createTheme} from "@mui/material/styles"

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

const mui_light_theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#000"
        }
    },
    components: {
        ...mui_switch,
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: "#000000",
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    border: "1px solid #000",
                    backgroundColor: "inherit"
                }
            }
        }
    }
})

const mui_dark_theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#FFF"
        }
    },
    components: {
        ...mui_switch,
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: "#FFFFFF"
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    border: "1px solid #FFF",
                    backgroundColor: "inherit"
                }
            }
        }
    }
})

export {mui_light_theme, mui_dark_theme};