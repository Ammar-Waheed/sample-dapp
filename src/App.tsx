import { createContext, useState } from "react"
import MetamaskConnect from './view/components/molecules/MetamaskConnect'
import NftContainer from "./view/components/organisms/NftContainer"
import { StyledEngineProvider } from "@mui/material/styles"
import "./styles/App.css"

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

    return (
        <div className="App">
            <WalletContext.Provider
                value={{ walletAddress, setWalletAddress, setNetwork, network }}
            >
                <StyledEngineProvider injectFirst>
                    <MetamaskConnect />
                    <NftContainer/>
                </StyledEngineProvider>
            </WalletContext.Provider>
        </div>
    )
}

export default App
