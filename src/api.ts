export async function fetchProducts() {
  const response = await fetch("https://668b21d90b61b8d23b0891fb.mockapi.io/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export async function fetchRecommend() {
  const response = await fetch("https://668b21d90b61b8d23b0891fb.mockapi.io/recommend");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}