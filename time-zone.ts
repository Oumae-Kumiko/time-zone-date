type DatePara = string | number | Date | null | undefined

import {
  UTC_getYear,UTC_getMonth,UTC_getDate,UTC_getHours,UTC_getMinutes,UTC_getSeconds,
  EST_getYear,EST_getMonth,EST_getDate,EST_getHours,EST_getMinutes,EST_getSeconds
} from './operation'
import { DEFAULT_OPTIONS } from './data'
let isObject = (type:any)=>{
  return Object.prototype.toString.call(type) === '[object Object]'
}
export const getUTCDate = (datePara?:DatePara)=> {
  datePara = datePara ? datePara:new Date();
  return new Date(datePara).toUTCString()
}
export const getESTDate = (datePara?:DatePara)=> {
  datePara = datePara ? datePara:new Date();
  DEFAULT_OPTIONS.timeZone = "America/New_York";
  return new Date(datePara).toLocaleString("en-US",DEFAULT_OPTIONS)
}
export const getWorldTimeZone = (datePara?:DatePara,locales?:string,options?:DEFAULT_OPTIONS)=> {
  if (!isObject(options)&&options) {
    console.error('getWorldTimeZone() 请传入正确 options 选项');
  }
  let data = {
    ...DEFAULT_OPTIONS,
    ...options
  }
  datePara = datePara ? datePara:new Date();
  return new Date(datePara).toLocaleString(locales,data)
}

export const isUS_Dst = ()=> {
  // 美国现在是否夏令时 GMT-4
  let UTCyear = UTC_getYear()
  let UTCmonth = UTC_getMonth()
  let UTCdate = UTC_getDate()
  let UTChours = UTC_getHours()
  let UTCminutes = UTC_getMinutes()
  let UTCseconds = UTC_getSeconds()
  let us = +new Date(
    EST_getYear(),
    EST_getMonth(),
    EST_getDate(),
    EST_getHours(0),
    EST_getMinutes(),
    EST_getSeconds(),
  )
  let utc = +new Date(UTCyear,UTCmonth,UTCdate,UTChours,UTCminutes,UTCseconds)
  let timeDiff = (us - utc)/1000/60/60
  if (timeDiff == -5) {
    return false
  }else{
    return true
  }
}
export const isUS_Wt = ()=> {
  // 美国现在是否冬令时 GMT-5
  return !isUS_Dst()
}

