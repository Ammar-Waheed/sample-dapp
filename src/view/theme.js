import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    components: {
        // Name of the component ⚛️
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === "contained" &&
                        ownerState.color === "primary" && {
                            backgroundColor: "#feda03",
                            color: "black",
                            borderRadius: "10px",
                            height: "60px",
                            minWidth: "10vw",
                            paddingLeft: "10%",
                            paddingRight: "10%",
                            fontWeight: "bold",
                            marginTop: "2vw",
                            marginBottom: "3vw",
                            "&:hover": {
                                backgroundColor: "#feda03",
                                color: "black",
                                boxShadow: "0px 5px 10px rgb(255, 231, 94)"
                            }
                        })
                })
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    cursor: "pointer",
                    borderRadius: "20px",
                    backgroundColor: "#2e2f30",
                    width: "30%"
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "10%"
                }
            }
        }
    },
    typography: {
        h3: {
            fontWeight: "bold"
        },
        h5: {
            color: "#feda03",
            fontSize: "1.5rem"
        },
        body1: {
            color: "rgb(255, 246, 194)"
        }
    }
})

export default theme
