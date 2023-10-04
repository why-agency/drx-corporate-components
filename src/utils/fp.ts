export const pipe =
  (...fns: any[]) =>
  (x: any) =>
    fns.reduce((y, f) => f(y), x)
