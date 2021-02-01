export const isEmail = (e) => {
  const regx = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return regx.test(e)
}
export default {
  isEmail
}