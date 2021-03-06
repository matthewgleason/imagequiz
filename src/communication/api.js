let getFlowers = () => {
  return fetch("http://localhost:4002/flowers").then((x) => x.json());
};

let baseURL = `http://localhost:4002`;
let signup = (name, email, password) => {
  return fetch(`${baseURL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({ name, email, password }),
  }).then((x) => x.json());
};

let signin = (email, password) => {
  return fetch(`${baseURL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({ email, password }),
  }).then((x) => x.json());
};

let getQuiz = (id) => {
  return fetch(`${baseURL}/quiz/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((x) => x.json());
};

let verifyTwitter = (username) => {
  return fetch(`${baseURL}/twitter/${username}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  }).then((x) => x.json());
};

let setScore = (score, quizid, quiztaker) => {
  return fetch(`${baseURL}/score`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({ score, quizid, quiztaker }),
  }).then((x) => x.json());
};

let api = {
  getFlowers: getFlowers,
  signup: signup,
  signin: signin,
  getQuiz: getQuiz,
  setScore: setScore,
  verifyTwitter: verifyTwitter,
};

export default api;
