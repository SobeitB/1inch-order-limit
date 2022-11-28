import {ADDRESS_LIMIT_ORDER, CHAIN_ID, CHAIN_NAME} from "./config";

const chainIdString = CHAIN_ID.toString();

export const GET_PRICE_ETH = `https://api.coingecko.com/api/v3/simple/price?ids=${CHAIN_NAME}-network&vs_currencies=usd`;
export const GET_TOKENS = `https://tokens.1inch.io/v1.1/${chainIdString}`;
export const GET_TOKENS_PRICE = `https://token-prices.1inch.io/v1.1/${chainIdString}`;
export const ADD_LIMIT_ORDER = `https://limit-orders.1inch.io/v2.0/${chainIdString}/limit-order`;

export const ACTIVE_LIMIT_ORDERS = async () => {
   const [wallet] = await window.ethereum.request({method:"eth_accounts"});
   return `https://limit-orders.1inch.io/v2.0/${CHAIN_ID}/limit-order/address/${wallet}?page=1&limit=100&statuses=%5B1,2%5D&sortBy=createDateTime`
};

export const GET_TOKENS_BALANCE = async () => {
   const [wallet] = await window.ethereum.request({method:"eth_accounts"});
   return `https://balances.1inch.io/v1.1/${CHAIN_ID}/allowancesAndBalances/${ADDRESS_LIMIT_ORDER.toLowerCase()}/${wallet}?tokensFetchType=listedTokens`;
}