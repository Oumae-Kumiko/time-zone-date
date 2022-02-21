type DatePara = string | number | Date | null | undefined
type _Date = string | number | Date
import {getESTDate,getWorldTimeZone} from './time-zone'
import { week,DEFAULT_OPTIONS,getSymbol } from './data'

/** @以下是获取UTC0时区的数据 */
export const UTC_getYear = (datePara?:_Date)=> new Date(datePara as _Date).getUTCFullYear()
export const UTC_getMonth = (datePara?:_Date)=> new Date(datePara as _Date).getUTCMonth()
export const UTC_getDate = (datePara?:_Date)=> new Date(datePara as _Date).getUTCDate()
export const UTC_getHours = (datePara?:_Date)=> new Date(datePara as _Date).getUTCHours()
export const UTC_getMinutes = (datePara?:_Date)=> new Date(datePara as _Date).getUTCMinutes()
export const UTC_getSeconds = (datePara?:_Date)=> new Date(datePara as _Date).getUTCSeconds()


/** @以下是获取指定时区的指定数据 */
// 不传则默认代码运行环境时的当前时区
export const get_mmddyyyy = (region:string,symbol?:string,datePara?:DatePara)=> {
  datePara = datePara ? datePara:new Date();
  let sym = getSymbol(symbol)
  let date = getWorldTimeZone(datePara,'en-GB',{timeZone:region})
  let dmy = date.split(' ')[1].replace(',','').split('/')
  let y = dmy[2]
  let m = dmy[1]
  let d = dmy[0]
  return `${m+sym}${d+sym}${y}`  // 月 日 年
}
export const get_ddmmyyyy = (region:string,symbol?:string,datePara?:DatePara)=> {
  datePara = datePara ? datePara:new Date();
  let sym = getSymbol(symbol)
  let date = getWorldTimeZone(datePara,'en-GB',{timeZone:region})
  let dmy = date.split(' ')[1].replace(',','').split('/')
  let y = dmy[2]
  let m = dmy[1]
  let d = dmy[0]
  return `${d+sym}${m+sym}${y}`  // 日 月 年
}
export const get_yyyymmdd = (region:string,symbol?:string,datePara?:DatePara)=> {
  datePara = datePara ? datePara:new Date();
  let sym = getSymbol(symbol)
  let date = getWorldTimeZone(datePara,'en-GB',{timeZone:region})
  let dmy = date.split(' ')[1].replace(',','').split('/')
  let y = dmy[2]
  let m = dmy[1]
  let d = dmy[0]
  return `${y+sym}${m+sym}${d}`  // 年 月 日
}
export const custom_yyyymmdd_sort = (region:string,ymdsort?:string,symbol?:string,datePara?:DatePara)=> {
  datePara = datePara ? datePara:new Date();
  let sym = getSymbol(symbol)
  let date = getWorldTimeZone(datePara,'en-GB',{timeZone:region})
  let dmy = date.split(' ')[1].replace(',','').split('/')
  let y = dmy[2]
  let m = dmy[1]
  let d = dmy[0]
  let returnData = ''
  if (ymdsort) {
    let sort:string[] = ymdsort.split('')
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
export const custom_ymd_sort = (region:string,ymdsort?:string,symbol?:string,datePara?:DatePara)=> {
  datePara = datePara ? datePara:new Date();
  let sym = getSymbol(symbol)
  let date = getWorldTimeZone(datePara,'en-US',{timeZone:region})
  let dmy = date.split(' ')[1].replace(',','').split('/')
  let y = dmy[2]
  let m = dmy[0]
  let d = dmy[1]
  let returnData = ''
  if (ymdsort) {
    let sort = ymdsort.split('')
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

export const get_hms = (region:string,datePara?:DatePara):string => {
  datePara = datePara ? datePara:new Date();
  let date = getWorldTimeZone(datePara,'en-US',{timeZone:region})
  return date.split(' ')[2]  // 时 分 秒
}

export const getYear = (region:string,datePara?:DatePara)=>{
  datePara = datePara ? datePara:new Date();
  return Number(get_mmddyyyy(region,'/',datePara).split('/')[2])
}
export const getMonth = (region:string,datePara?:DatePara)=>{
  datePara = datePara ? datePara:new Date();
  return Number(get_mmddyyyy(region,'/',datePara).split('/')[0]) - 1
}
export const getDate = (region:string,datePara?:DatePara)=>{
  datePara = datePara ? datePara:new Date();
  return Number(get_mmddyyyy(region,'/',datePara).split('/')[1])
}
// 默认24小时制
export const getHours = (region:string,datePara?:DatePara)=> {
  datePara = datePara ? datePara:new Date();
  let h = Number(get_hms(region,datePara).split(':')[0])
  if (h === 24) {
    h = 0
  }
  return Number(h)
}
export const getMinutes = (region:string,datePara?:DatePara)=> {
  datePara = datePara ? datePara:new Date();
  let m = get_hms(region,datePara).split(':')[1]
  return Number(m)
}
export const getSeconds = (region:string,datePara?:DatePara)=> {
  datePara = datePara ? datePara:new Date();
  let s = get_hms(region,datePara).split(':')[2]
  return Number(s)
}
export const getDay = (region:string,datePara?:DatePara)=> {
  datePara = datePara ? datePara:new Date();
  DEFAULT_OPTIONS.timeZone = region
  let date = new Date(datePara).toLocaleString('en-US',DEFAULT_OPTIONS)
  let day = date.split(' ')[0].replace(',','')
  let DAY = week.findIndex((e:string)=>{
    return e == day
  })
  return DAY
}




/** @以下是EST时间 */
export const getESTmmddyyyy = (datePara?:_Date)=> {
  return getESTDate(datePara).split(' ')[1].replace(',','')  // 月 日 年
}
export const getESThms = (datePara?:_Date)=> {
  return getESTDate(datePara).split(' ')[2]  // 时 分 秒
}
export const EST_getYear = (datePara?:_Date)=> {
  return Number(getESTmmddyyyy(datePara).split('/')[2])
}
export const EST_getMonth = (datePara?:_Date)=> {
  return Number(getESTmmddyyyy(datePara).split('/')[0])-1
}
export const EST_getDate = (datePara?:_Date)=> {
  return Number(getESTmmddyyyy(datePara).split('/')[1])
}
export const EST_getHours = (is0?:number,datePara?:_Date)=> {
  let data = Number(getESThms(datePara).split(':')[0])
  if (is0 === 0 && Number(data) === 24) {
    data = 0
  }
  return Number(data)
}
export const EST_getMinutes = (datePara?:_Date)=> {
  return Number(getESThms(datePara).split(':')[1])
}
export const EST_getSeconds = (datePara?:_Date)=> {
  return Number(getESThms(datePara).split(':')[2])
}
export const EST_getDay = (datePara?:_Date)=> {
  let usDay = getESTDate(datePara).split(' ')[0].replace(',','')
  let DAY = week.findIndex((e:string)=>{
    return e == usDay
  })
  return DAY
}
/** @以上是EST时间 */