
export const priceSell = (price: number, count: string):string => (
   (price * +count).toString()
);

export const priceBuy = (priceSell: number, priceBuy: number, count: string):string => {
   const price = ((priceSell * +count) / priceBuy).toString();

   if(price === 'NaN' || price === 'Infinity') {
      return '0'
   }

   return price;
} ;