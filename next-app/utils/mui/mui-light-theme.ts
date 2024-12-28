import { createTheme } from "@mui/material"
import { mui_modal } from "./common/mui-modal"
import { mui_switch } from "./common/mui-switch"


const mui_light_theme = createTheme({
    typography: {
        fontFamily: "'Chakra Petch', sans-serif"
    },
    palette: {
        mode: "light",
        primary: {
            main: "#fe5c01"
        }
    },
    components: {
        ...mui_switch,
        ...mui_modal,
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
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: "#000",
                    fontWeight: "600",
                    "&.Mui-selected": {
                        color: "#fe5c01"
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: "#fe5c01",
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontWeight: "800"
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontWeight: "600"
                }
            }
        }
    }
})

export {mui_light_theme}