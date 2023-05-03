import { ethers } from "ethers"

export const providerGen = () => {
    if (typeof window.ethereum !== undefined) {
        return new ethers.providers.Web3Provider(window.ethereum)
    }
}
