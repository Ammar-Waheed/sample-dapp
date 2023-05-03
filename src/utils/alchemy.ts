import { Alchemy } from "alchemy-sdk"

export const getAlchemy = (netId: any) => {
    return new Alchemy({
        apiKey: process.env.REACT_APP_APIKEY, // Replace with your Alchemy API Key.
        network: netId // Replace with your network.
    })
}
