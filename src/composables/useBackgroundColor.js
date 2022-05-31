export const useBackgroundColor = key => {
  const options = {
    dark: 'bg-primary',
    light: 'bg-sand',
    gradient: 'bg-gradient'
  }
  return options[key]
}
