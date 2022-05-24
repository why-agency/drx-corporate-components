export const useAction = ({ buttontext, buttonlink }) => {
  return {
    content: {
      text: buttontext,
      link: {
        url: buttonlink
      }
    }
  }
}
