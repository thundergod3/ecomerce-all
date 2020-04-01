export const fetchProductList = async () => {
  try {
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
