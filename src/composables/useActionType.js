export const useActionType = (to, tag = 'button', target) => {
  if (!to) {
    return { isAnchor: false, type: tag }
  }
  const linkTarget = target?.includes('target="_top"') ? '_top' : '_blank'
  return { isAnchor: true, type: 'a', linkTarget }
}
