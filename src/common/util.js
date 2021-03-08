export const isEmail = function(e) {
  const regx = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return regx.test(e)
}
export const isNotEmpty = function(data) {
  debugger
  if (data == "") {
    return false
  }
  return true
}
// export default {
//   isEmail,
//   isNotEmpty
// }