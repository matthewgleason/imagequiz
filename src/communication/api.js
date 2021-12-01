let getFlowers = () => {
  return fetch("http://localhost:4002/flowers").then((x) => x.json());
};

let baseURL = `http://localhost:4002`;
let signup = (name, email, password) => {
  return fetch(`${baseURL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((x) => x.json());
};

let signin = (email, password) => {
  return fetch(`${baseURL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((x) => x.json());
};

let api = {
  getFlowers: getFlowers,
  signup: signup,
  signin: signin,
};

export default api;
