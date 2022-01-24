

export const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

export const DEFAULT_OPTIONS = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  weekday: "short",
  hour12:false, 
  timeZoneName :"short",
}

export const getSymbol = (symbol)=>{
  return symbol?symbol:'/'
}