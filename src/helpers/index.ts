export const getClassNames = (...classNames: Array<string | false>) => classNames.filter((item) => Boolean(item)).join(' ')
