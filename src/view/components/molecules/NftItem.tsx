import "../../../styles/nft.css"

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
        <>
            <div className="card">
                <img
                    className="card-img-top"
                    src={props.media}
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
                ></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                </div>
            </div>
        </>
    )
}

export default NftItem
