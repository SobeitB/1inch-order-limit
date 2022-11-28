
export const getAddress = async () => {
   return await window.ethereum.request({method:"eth_accounts"})[0]
}