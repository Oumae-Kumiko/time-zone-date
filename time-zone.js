
import {getUtcYear,getUtcMonth,getUtcDate,getUtcHours,getUtcMinutes,getUtcSeconds} from './operation'
import { week,country } from './data'
let isObject = (type)=>{
  return Object.prototype.toString.call(type) === '[object Object]'
}

let DEFAULT_OPTIONS = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  weekday: "short", // long 最长    narrow 最短
  hour12:false, 
  timeZone:"America/New_York",
  timeZoneName :"short",  // short
};
export const getTimeZone = (locales,options)=> {
  let data = Object.assign(DEFAULT_OPTIONS,options)
  if (locales && options) {
    return new Date().toLocaleString(locales,data)
  }else{
    let val = country.find(item=>{
      return item == locales
    })
    if (val) {
      data.timeZone = val.timeZone
      data.locales = val.locales
      return new Date().toLocaleString(locales,data)
    }
  }
}
export const getUTCDate = ()=> {
  return new Date().toUTCString()
}
export const getUSDate = (options)=> {
  if (!isObject(options)&&options) {
    console.error('getUSDate() 请传入正确 options 选项');
  }
  let data = Object.assign(DEFAULT_OPTIONS,options)
  return new Date().toLocaleString("en-US",data)
}
export const isUSDst = ()=> {
  let UTCyear = getUtcYear()
  let UTCmonth = getUtcMonth()
  let UTCdate = getUtcDate()
  let UTChours = getUtcHours()
  let UTCminutes = getUtcMinutes()
  let UTCseconds = getUtcSeconds()
  let usDate = getUSDate()
  let USmmddyyyy = usDate.split(' ')[1].split('/')  // 月 日 年
  let UShms = usDate.split(' ')[2].split(':')  // 时 分 秒
  let us = +new Date(Number(USmmddyyyy[2].replace(',','')),Number(USmmddyyyy[0])-1,Number(USmmddyyyy[1]),Number(UShms[0]),Number(UShms[1]),Number(UShms[2]))
  let utc = +new Date(UTCyear,UTCmonth,UTCdate,UTChours,UTCminutes,UTCseconds)
  let timeDiff = (us - utc)/1000/60/60
  if (timeDiff == -5) {
    return false
  }else{
    return true
  }
}