import "../../../styles/metamask.css"

interface Props {
    connect: () => void
}

const DisconnectBtn: React.FC<Props> = (props): JSX.Element => {
    return (
        <button id="addressBtn" onClick={props.connect}>
            Connect Metamask
        </button>
    )
}

export default DisconnectBtn
