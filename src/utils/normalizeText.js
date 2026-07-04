// Quita tildes y normaliza mayúsculas para comparar texto sin
// que el usuario tenga que escribir acentos exactos al buscar.
export function normalizeText(value) {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
}
