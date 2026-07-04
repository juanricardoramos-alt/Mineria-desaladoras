export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

async function handleResponse(response) {
  if (!response.ok) {
    const body = await response.json().catch(() => null)
    throw new Error(body?.detail || `Error ${response.status}`)
  }
  if (response.status === 204) return null
  return response.json()
}

export function getProyectos() {
  return fetch(`${API_URL}/proyectos`).then(handleResponse)
}

export function createProyecto(data) {
  return fetch(`${API_URL}/proyectos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleResponse)
}

export function updateProyecto(id, data) {
  return fetch(`${API_URL}/proyectos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleResponse)
}

export function deleteProyecto(id) {
  return fetch(`${API_URL}/proyectos/${id}`, { method: 'DELETE' }).then(handleResponse)
}
