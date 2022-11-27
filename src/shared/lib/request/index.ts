
export const request = async (link:string) => {
   const req = await fetch(link);
   const reqJson = await req.json()

   return reqJson;
}