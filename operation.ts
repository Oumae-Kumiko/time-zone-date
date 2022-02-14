
import {getESTDate,getWorldTimeZone} from './time-zone'
import { week,DEFAULT_OPTIONS,getSymbol } from './data'

/** @以下是获取UTC0时区的数据 */
export const UTC_getYear = ()=> new Date().getUTCFullYear()
export const UTC_getMonth = ()=> new Date().getUTCMonth()
export const UTC_getDate = ()=> new Date().getUTCDate()
export const UTC_getHours = ()=> new Date().getUTCHours()
export const UTC_getMinutes = ()=> new Date().getUTCMinutes()
export const UTC_getSeconds = ()=> new Date().getUTCSeconds()


/** @以下是获取指定时区的指定数据 */
// 不传则默认代码运行环境时的当前时区
export const get_mmddyyyy = (region,symbol?:string)=> {
  let sym = getSymbol(symbol)
  let date = getWorldTimeZone('en-GB',{timeZone:region})
  let dmy = date.split(' ')[1].replace(',','').split('/')
  let y = dmy[2]
  let m = dmy[1]
  let d = dmy[0]
  return `${m+sym}${d+sym}${y}`  // 月 日 年
}
export const get_ddmmyyyy = (region,symbol)=> {
  let sym = getSymbol(symbol)
  let date = getWorldTimeZone('en-GB',{timeZone:region})
  let dmy = date.split(' ')[1].replace(',','').split('/')
  let y = dmy[2]
  let m = dmy[1]
  let d = dmy[0]
  return `${d+sym}${m+sym}${y}`  // 日 月 年
}
export const get_yyyymmdd = (region,symbol)=> {
  let sym = getSymbol(symbol)
  let date = getWorldTimeZone('en-GB',{timeZone:region})
  let dmy = date.split(' ')[1].replace(',','').split('/')
  let y = dmy[2]
  let m = dmy[1]
  let d = dmy[0]
  return `${y+sym}${m+sym}${d}`  // 年 月 日
}
export const custom_yyyymmdd_sort = (region,sort,symbol)=> {
  let sym = getSymbol(symbol)
  let date = getWorldTimeZone('en-GB',{timeZone:region})
  let dmy = date.split(' ')[1].replace(',','').split('/')
  let y = dmy[2]
  let m = dmy[1]
  let d = dmy[0]
  let returnData = ''
  if (sort) {
    sort = sort.split('')
    sort.forEach((e,i) => {
      switch (e) {
        case 'y':
          returnData+=(y + (i==sort.length-1?'':sym))
          break;
        case 'm':
          returnData+=(m + (i==sort.length-1?'':sym))
          break;
        case 'd':
          returnData+=(d + (i==sort.length-1?'':sym))
          break;
      }
    });
  }else{
    returnData = `${y+sym}${m+sym}${d}`
  }
  return returnData  // 自定义顺序
}
export const custom_ymd_sort = (region,sort,symbol)=> {
  let sym = getSymbol(symbol)
  let date = getWorldTimeZone('en-US',{timeZone:region})
  let dmy = date.split(' ')[1].replace(',','').split('/')
  let y = dmy[2]
  let m = dmy[0]
  let d = dmy[1]
  let returnData = ''
  if (sort) {
    sort = sort.split('')
    sort.forEach((e,i) => {
      switch (e) {
        case 'y':
          returnData+=(y + (i==sort.length-1?'':sym))
          break;
        case 'm':
          returnData+=(m + (i==sort.length-1?'':sym))
          break;
        case 'd':
          returnData+=(d + (i==sort.length-1?'':sym))
          break;
      }
    });
  }else{
    returnData = `${y+sym}${m+sym}${d}`
  }
  return returnData  // 自定义顺序
}

export const get_hms = (region)=> {
  let date = getWorldTimeZone('en-US',{timeZone:region})
  return date.split(' ')[2]  // 时 分 秒
}

export const getYear = (region)=>{
  return Number(get_mmddyyyy(region).split('/')[2])
}
export const getMonth = (region)=>{
  return Number(get_mmddyyyy(region).split('/')[0]) - 1
}
export const getDate = (region)=>{
  return Number(get_mmddyyyy(region).split('/')[1])
}
// 默认24小时制
export const getHours = (region)=> {
  let h = Number(get_hms(region).split(':')[0])
  if (h === 24) {
    h = 0
  }
  return Number(h)
}
export const getMinutes = (region)=> {
  let m = get_hms(region).split(':')[1]
  return Number(m)
}
export const getSeconds = (region)=> {
  let s = get_hms(region).split(':')[2]
  return Number(s)
}
export const getDay = (region)=> {
  DEFAULT_OPTIONS.timeZone = region
  let date = new Date().toLocaleString('en-US',DEFAULT_OPTIONS)
  let day = date.split(' ')[0].replace(',','')
  let DAY = week.findIndex(e=>{
    return e == day
  })
  return DAY
}




/** @以下是EST时间 */
export const getESTmmddyyyy = ()=> {
  return getESTDate().split(' ')[1].replace(',','')  // 月 日 年
}
export const getESThms = ()=> {
  return getESTDate().split(' ')[2]  // 时 分 秒
}
export const EST_getYear = ()=> {
  return Number(getESTmmddyyyy().split('/')[2])
}
export const EST_getMonth = ()=> {
  return Number(getESTmmddyyyy().split('/')[0])-1
}
export const EST_getDate = ()=> {
  return Number(getESTmmddyyyy().split('/')[1])
}
export const EST_getHours = (is0)=> {
  let data = Number(getESThms().split(':')[0])
  if (is0 === 0 && Number(data) === 24) {
    data = 0
  }
  return Number(data)
}
export const EST_getMinutes = ()=> {
  return Number(getESThms().split(':')[1])
}
export const EST_getSeconds = ()=> {
  return Number(getESThms().split(':')[2])
}
export const EST_getDay = ()=> {
  let usDay = getESTDate().split(' ')[0].replace(',','')
  let DAY = week.findIndex(e=>{
    return e == usDay
  })
  return DAY
}
/** @以上是EST时间 */