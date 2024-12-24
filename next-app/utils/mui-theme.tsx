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

const mui_modal = {
    MuiModal: {
        styleOverrides: {
            root: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },
        },
    },
}

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
        }
    }
})

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
        }
    }
})

export {mui_light_theme, mui_dark_theme};