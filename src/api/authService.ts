import client from "./axiosClient";

interface LoginResponse {
  token: string;
  refreshToken: string;
  username: string;
  roles: string[];
}

export async function login(username: string, password: string) {
  // Axios interceptor devuelve response.data directamente
  const response = await client.post<LoginResponse>("/auth/login", { username, password });
  const data = response as unknown as LoginResponse;

  if (!data.token) {
    throw new Error("No se recibió un token en la respuesta del login.");
  }

  localStorage.setItem("authToken", data.token);
  if (data.refreshToken) {
    localStorage.setItem("refreshToken", data.refreshToken);
  }
  // Guardamos también datos básicos del usuario si los necesitamos luego
  localStorage.setItem("user", JSON.stringify({ username: data.username, roles: data.roles }));
  
  return data;
}

export function logout() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  window.location.href = "/login";
}
