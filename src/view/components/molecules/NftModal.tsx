import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import styles from "../../../styles/modal.module.css"
import Link from "@mui/material/Link"
import Container from "../atoms/Container"

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
            <Container variant="modal">
                <img
                    className={styles.heroImg}
                    src={props.img}
                    alt={props.title}
                />
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    color={"#feda03"}
                    padding={"2% 5%"}
                >
                    <Typography
                        variant="h3"
                        gutterBottom
                    >
                        {props.title} #{props?.id}
                    </Typography>
                    <Box textAlign={"start"} alignSelf={"start"}>
                        <Typography variant="h5">Description</Typography>
                        <Typography
                            variant="body1"
                            gutterBottom
                        >
                            {props.description.length
                                ? props.description
                                : "No content Found!"}
                        </Typography>
                    </Box>
                    <Button variant="contained" color="primary">
                        <Link
                            href={`${process.env.REACT_APP_OSLINK}${props.address}/${props.id}`}
                            target="_blank"
                            color="inherit"
                            underline="none"
                        >
                            purchase on opensea
                        </Link>
                    </Button>
                </Box>
            </Container>
        </Modal>
    )
}

export default NftModal
