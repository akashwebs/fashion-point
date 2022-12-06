const base_url = "https://fashion-point.up.railway.app/api/v1";

export const products = async () => {
  const response = await fetch(`${base_url}/product`);
  const json = await response.json();
  return json;
};