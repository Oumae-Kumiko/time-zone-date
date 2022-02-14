

export const week:string[] = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
export const DEFAULT_OPTIONS:DEFAULT_OPTIONS = {
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
export const getSymbol = (symbol?:string):string => {
  return symbol?symbol:'/'
}

export interface DEFAULT_OPTIONS {
  year?: "numeric" | "2-digit",
  month?: "long" | "short" | "narrow" | "numeric" | "2-digit",
  day?: "numeric" | "2-digit",
  hour?: "numeric" | "2-digit",
  minute?: "numeric" | "2-digit",
  second?: "numeric" | "2-digit",
  weekday?: "long" | "short" | "narrow",
  hour12?:boolean, 
  timeZoneName?:"long" | "short",
  timeZone ?:string,
}