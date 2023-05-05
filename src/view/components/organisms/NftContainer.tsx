import { useContext, useState, useEffect, useMemo } from "react"
import { WalletContext } from "../../App"
import { Network } from "alchemy-sdk"
import { getAlchemy } from "../../../utils/alchemy"
import NftItem from "../molecules/NftItem"
import NftModal from "../molecules/NftModal"
import Box from "@mui/material/Box"

const NftContainer = (): JSX.Element => {
    const wallet = useContext(WalletContext)
    const netId =
        wallet.network === 11155111 ? Network.ETH_SEPOLIA : Network.ETH_MAINNET
    const [ownedNfts, setOnwnedNfts] = useState<any>([])
    const [title, setTitle] = useState<string>("")
    const [id, setId] = useState<number>(NaN)
    const [description, setDescription] = useState<string>("")
    const [img, setImg] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const alchemy = useMemo(() => getAlchemy(netId), [wallet.network])

    useEffect(() => {
        const loadNFTs = async () => {
            if (wallet.walletAddress) {
                //do not try to fetch if undefined
                const nftsForOwner = await alchemy.nft.getNftsForOwner(
                    wallet.walletAddress
                )
                console.log("number of NFTs found:", nftsForOwner.totalCount)
                console.log(nftsForOwner.ownedNfts)
                setOnwnedNfts(nftsForOwner.ownedNfts)
            } else {
                setOnwnedNfts([])
            }
        }
        loadNFTs()
    }, [wallet.walletAddress]) //load NFTs everytime the wallet address changes

    const nftWrapper = {
        backgroundColor: "#222528",
        display: "flex",
        flexWrap: "wrap",
        rowGap: "30px",
        columnGap: "40px",
        minHeight: "45%",
        width: "55%",
        border: "2px solid black",
        paddingBottom: "3vh",
        paddingTop: "3vh",
        paddingLeft: "3vw",
        paddingRight: "3vw",
        borderRadius: "20px",
        marginBottom: "10%"
    }

    const openModal = (
        title: string,
        description: string,
        id: number,
        img: string,
        address: string
    ): void => {
        setOpen(true)
        setTitle(title)
        setDescription(description)
        setAddress(address)
        setId(id)
        setImg(img)
    }

    const closeModal = (): void => {
        setOpen(false)
    }

    return (
        <Box sx={nftWrapper}>
            {ownedNfts.map((item: any) => (
                <NftItem
                    key={`${item.tokenId}/${item.contract.address}`}
                    media={item.media[0].gateway}
                    title={item.title}
                    description={item.description}
                    tokenId={item.tokenId}
                    address={item.contract.address}
                    modalOpener={openModal}
                />
            ))}
            <NftModal
                title={title}
                id={id}
                description={description}
                img={img}
                address={address}
                open={open}
                closer={closeModal}
            />
        </Box>
    )
}

export default NftContainer
