export const getAccounts = async (): Promise<string[]> => {
    return await window.ethereum.request({
        method: "eth_accounts"
    })
}
