import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import "../../../styles/modal.css"

interface Props {
    img: string
    title: string
    address: string
    id: number
    description: string
    open: boolean
    closer: () => void
}

const NftModal: React.FC<Props> = (props): JSX.Element => {
    return (
        <Modal
            open={props.open}
            onClose={props.closer}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="popup"
        >
            <Box className="modal-body">
                <img className="heroImg" src={props.img} alt={props.title} />
                <div className="nftData">
                    <h1
                        style={{
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                    >
                        {props.title} #{props?.id}
                    </h1>
                    <div className="description">
                        <h3>Description</h3>
                        <p>{props.description}</p>
                    </div>
                    <a
                        href={`https://testnets.opensea.io/assets/goerli/${props.address}/${props.id}`}
                        target="_blank"
                    >
                        <button className="buy">Purchase on Opensea</button>
                    </a>
                </div>
            </Box>
        </Modal>
    )
}

export default NftModal
