
import {getUSDate} from './time-zone'
import { week } from './data'
export const getUtcYear = ()=> new Date().getUTCFullYear()
export const getUtcMonth = ()=> new Date().getUTCMonth()
export const getUtcDate = ()=> new Date().getUTCDate()
export const getUtcHours = ()=> new Date().getUTCHours()
export const getUtcMinutes = ()=> new Date().getUTCMinutes()
export const getUtcSeconds = ()=> new Date().getUTCSeconds()
export const getUsDay = ()=> {
  let usDay = getUSDate().split(' ')[0].replace(',','')
  let DAY = week.findIndex(e=>{
    return e == usDay
  })
  return DAY+1
}
export const getUSmmddyyyy = ()=> {
  let usDate = getUSDate()
  return usDate.split(' ')[1].replace(',','')  // 月 日 年
}
export const getUShms = ()=> {
  let usDate = getUSDate()
  return usDate.split(' ')[2]  // 时 分 秒
}
export const getUsHours = ()=> {
  return getUShms().split(':')[0]
}
export const getUsMinutes = ()=> {
  return getUShms().split(':')[1]
}
export const getUsSeconds = ()=> {
  return getUShms().split(':')[2]
}