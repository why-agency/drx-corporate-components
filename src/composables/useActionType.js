export const useActionType = (to, tag = 'button') => {
  if (!to) {
    return { isAnchor: false, type: tag }
  }
  return { isAnchor: true, type: 'a' }
}
