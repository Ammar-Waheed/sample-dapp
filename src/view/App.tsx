import { createContext, useState } from "react"
import MetamaskConnect from "./components/molecules/MetamaskConnect"
import NftContainer from "./components/organisms/NftContainer"
import { StyledEngineProvider } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme"
import "./App.css"

interface context {
    walletAddress: string
    setWalletAddress: (wallet: string) => void
    setNetwork: (net: number) => void
    network: number | undefined
}

export const WalletContext = createContext<context>({
    walletAddress: "",
    setWalletAddress: () => {},
    setNetwork: () => {},
    network: undefined
})

const App = (): JSX.Element => {
    const [walletAddress, setWalletAddress] = useState<string>("")
    const [network, setNetwork] = useState<number>(NaN)

    return (
        <Box
            textAlign={"center"}
            minHeight={"100vh"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
        >
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
