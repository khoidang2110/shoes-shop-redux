/**
 input: [
  { price: 100, quatity: 1, ... },
  { price: 100, quatity: 1, ... },
 ]

 output: 200
*/
export function calcPrice(data = []) {
  const result = data.reduce((acc, cart) => acc += cart.price * cart.quatity, 0);
  return result;
}