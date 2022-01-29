import superagent from "superagent";

export const fetchProducts = (filter) => {
  return superagent
    .get(`http://localhost:4000/products`)
    .query(filter)
    .then((res) => res.body);
};
