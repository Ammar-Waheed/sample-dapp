import "../../../styles/metamask.css"

interface Props {
    walletAddress: string
    disconnect: () => void
}

const ConnectBtn: React.FC<Props> = (props): JSX.Element => {
    return (
        <button id="addressBtn" onClick={props.disconnect}>
            Account: {props.walletAddress}
        </button>
    )
}

export default ConnectBtn
