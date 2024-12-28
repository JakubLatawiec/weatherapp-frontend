import { createTheme } from "@mui/material";
import { mui_modal } from "./common/mui-modal";
import { mui_switch } from "./common/mui-switch";

const mui_dark_theme = createTheme({
    typography: {
        fontFamily: "'Chakra Petch', sans-serif"
    },
    palette: {
        mode: "dark",
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
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: "#FFF",
                    "&.Mui-selected": {
                        color: "#fe5c01 !important",
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    color: "#FFF",
                },
                indicator: {
                    backgroundColor: "#fe5c01",
                },
            },
        },
    }
})

export {mui_dark_theme}