import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"

interface Props {
    media: string
    title: string
    description: string
    tokenId: number
    address: string
    modalOpener: (
        title: string,
        description: string,
        tokenId: number,
        media: string,
        address: string
    ) => void
}

const NftItem: React.FC<Props> = (props): JSX.Element => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={props.media}
                    alt={props.title}
                    onClick={() =>
                        props.modalOpener(
                            props.title,
                            props.description,
                            props.tokenId,
                            props.media,
                            props.address
                        )
                    }
                ></CardMedia>
                <CardContent>
                    <Typography
                        variant="h5"
                    >
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default NftItem
