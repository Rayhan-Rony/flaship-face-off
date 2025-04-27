export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) return JSON.parse(favorites);
  return [];
};
export const addToFavorite = (phone) => {
  const favorites = getFavorites();
  const isExist = favorites.find((p) => p.id === phone.id);
  if (isExist) return console.log("phone already exist");
  favorites.push(phone);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
export const removeFavorite = (id) => {
  const favorites = getFavorites();
  const remainingFavorites = favorites.filter((phone) => phone.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remainingFavorites));
};
export const getCarts = () => {
  const carts = localStorage.getItem("carts");
  if (carts) return JSON.parse(carts);
  return [];
};
export const addToCart = (phone) => {
  const carts = getCarts();
  const isExist = carts.find((p) => p.id === phone.id);
  if (isExist) return console.log("phone already exist");
  carts.push(phone);
  localStorage.setItem("carts", JSON.stringify(carts));
};
export const removeCart = (id) => {
  const carts = getCarts();
  const remainingCarts = carts.filter((phone) => phone.id !== id);
  localStorage.setItem("carts", JSON.stringify(remainingCarts));
};
