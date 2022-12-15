const truncName = (name) => {
  if (name.length > 8) {
    return name.slice(0, 8) + '...'
  }
  return name
}

export { truncName }
