import { createContext, useState } from "react"
import MetamaskConnect from "./components/molecules/MetamaskConnect"
import NftContainer from "./components/organisms/NftContainer"
import { StyledEngineProvider } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme"
import "./App.css"

interface context {
    walletAddress: string
    setWalletAddress: any
    setNetwork: any
    network: number
}

export const WalletContext = createContext<context>({
    walletAddress: "",
    setWalletAddress: () => {},
    setNetwork: () => {},
    network: NaN
})

const App = (): JSX.Element => {
    const [walletAddress, setWalletAddress] = useState<string>("")
    const [network, setNetwork] = useState<number>(NaN)

    const App = {
        textAlign: "center",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    return (
        <Box sx={App}>
            <WalletContext.Provider
                value={{ walletAddress, setWalletAddress, setNetwork, network }}
            >
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <MetamaskConnect />
                        <NftContainer />
                    </ThemeProvider>
                </StyledEngineProvider>
            </WalletContext.Provider>
        </Box>
    )
}

export default App
