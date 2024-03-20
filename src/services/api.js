const API_URL = "https://reqres.in/api";

export async function postLogin({ email, password }) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Error al realizar el login");
  }
  
  const data = await response.json();

  return data;
}
