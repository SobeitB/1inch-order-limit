
export const getAddress = async () => (
   await window.ethereum.request({method:"eth_accounts"})[0]
)