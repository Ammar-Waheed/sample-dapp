import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import Btn from "../atoms/Btn"
import styles from "../../../styles/modal.module.css"

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
    const modalBody = {
        backgroundColor: "#1b202c",
        height: "80vh",
        width: "70vw",
        display: "inline-block",
        borderRadius: "30px",
        overflow: "hidden"
    }

    const nftData = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "start",
        color: "#feda03",
        padding: "2% 5%"
    }

    const popup = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <Modal
            open={props.open}
            onClose={props.closer}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={popup}
        >
            <Box sx={modalBody}>
                <img
                    className={styles.heroImg}
                    src={props.img}
                    alt={props.title}
                />
                <Box sx={nftData}>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: "bold" }}
                        gutterBottom
                    >
                        {props.title} #{props?.id}
                    </Typography>
                    <Box>
                        <Typography variant="h5">Description</Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: "rgb(255, 246, 194)" }}
                            gutterBottom
                        >
                            {props.description.length
                                ? props.description
                                : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit`}
                        </Typography>
                    </Box>
                    <Btn
                        text="Purchase on Opensea"
                        link={`${process.env.REACT_APP_OSLINK}${props.address}/${props.id}`}
                    />
                </Box>
            </Box>
        </Modal>
    )
}

export default NftModal
