import { useEffect, useContext, useMemo } from "react"
import { providerGen } from "../../../utils/GetProvider"
import { getAccounts } from "../../../utils/WalletConnector"
import Btn from "../atoms/Btn"
import { WalletContext } from "../../App"

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
            setNetwork(net?.chainId)
            console.log("chain", net?.chainId)
        }
        loadConnectedWallet()
    }, [])

    const onClickConnect = async () => {
        if (!window.ethereum) {
            console.log("please install MetaMask")
            return
        }
        const net = await provider?.getNetwork()
        provider
            ?.send("eth_requestAccounts", [])
            .then((accounts: string[]) => {
                if (accounts.length > 0) setWalletAddress(accounts[0])
            })
            .catch((e: any) => console.log(e))
        setNetwork(net?.chainId)
    }

    const onClickDisconnect = () => {
        setWalletAddress(undefined)
    }

    return (
        <header>
            {walletAddress ? (
                <Btn click={onClickDisconnect} text={`Account : ${walletAddress}`} />
            ) : (
                <Btn click={onClickConnect} text="connect metamask" />
            )}
        </header>
    )
}

export default MetamaskConnect
