import Button from "@mui/material/Button"
import Link from "@mui/material/Link"

interface Props {
    text: string
    link?: string
    click?: () => void
}

const ConnectBtn: React.FC<Props> = (props): JSX.Element => {
    return (
        <Button
            color="primary"
            variant="contained"
            disableRipple
            onClick={props.click ? props.click : () => null}
        >
            {props.link ? (
                <Link
                    href={props.link}
                    target="_blank"
                    color="inherit"
                    underline="none"
                >
                    {props.text}
                </Link>
            ) : (
                props.text
            )}
        </Button>
    )
}

export default ConnectBtn
