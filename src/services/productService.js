export async function getProductList(searchTerm) {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/products?name_like=${
      searchTerm ? searchTerm : ""
    }`
  );
  if (!response.ok) {
    throw { message: response.statusText }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
}

export async function getProductDetail(id) {
  const response = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`);
  if (!response.ok) {
    throw { message: response.statusText }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
}

export async function getFeaturedProducts() {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/featured_products`
  );
  if (!response.ok) {
    throw { message: response.statusText }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
}
