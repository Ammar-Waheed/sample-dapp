import { useEffect, useContext, useMemo } from "react"
import { providerGen } from "../../../utils/GetProvider"
import { getAccounts } from "../../../utils/WalletConnector"
import { WalletContext } from "../../App"
import Button from "@mui/material/Button"
import log from "loglevel"

const MetamaskConnect = (): JSX.Element => {
    const { walletAddress, setWalletAddress, setNetwork } =
        useContext(WalletContext)
    const provider = useMemo(() => providerGen(), [])

    useEffect(() => {
        window.ethereum.on("accountsChanged", () => {
            loadConnectedWallet()
        })
        const loadConnectedWallet = async () => {
            const accounts: string[] = await getAccounts()
            const net = await provider?.getNetwork()
            if (accounts.length > 0) {
                setWalletAddress(accounts[0])
            }
            if (typeof net?.chainId === "number") {
                setNetwork(net?.chainId)
            }
            log.trace("chain", net?.chainId)
        }
        loadConnectedWallet()
    }, [])

    const onClickConnect = async () => {
        if (!window.ethereum) {
            alert("please install MetaMask")
            return
        }
        const net = await provider?.getNetwork()
        provider
            ?.send("eth_requestAccounts", [])
            .then((accounts: string[]) => {
                if (accounts.length > 0) setWalletAddress(accounts[0])
            })
            .catch((e: any) => log.error(e))
        if (typeof net?.chainId === "number") {
            setNetwork(net?.chainId)
        }
    }

    const onClickDisconnect = () => {
        setWalletAddress("")
    }

    return (
        <header>
            {walletAddress !== "" ? (
                <Button
                    onClick={onClickDisconnect}
                    variant="contained"
                    color="primary"
                >
                    Account: {walletAddress}
                </Button>
            ) : (
                <Button
                    onClick={onClickConnect}
                    variant="contained"
                    color="primary"
                >
                    connect metamask
                </Button>
            )}
        </header>
    )
}

export default MetamaskConnect
