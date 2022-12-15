const isRoot = (session) => {
  if (session === undefined || session === null) return false
  if (session.user.email !== 'jws970306@khu.ac.kr') return false
  return true
}

export { isRoot }
