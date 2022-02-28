# Get the tool library of time zones and times in the world

## Preface
* Let the code run in different national environments, you can accurately obtain the time of the specified country!

[![NPM version](https://img.shields.io/npm/v/@time-zone/date.svg?style=flat-square)](https://www.npmjs.com/package/@time-zone/date)
[![](https://img.shields.io/badge/github-time--zone--date-%238B36DA?style=flat-square&logo=github)](https://github.com/Oumae-Kumiko/time-zone-date)
[![](https://img.shields.io/badge/github-issues-%2365A30D?style=flat-square&logo=github)](https://github.com/Oumae-Kumiko/time-zone-date/issues)

English | [简体中文](https://github.com/Oumae-Kumiko/time-zone-date/blob/main/README-zh_CN.md)

## Installation
```bash
npm i @time-zone/date --save
```
<br>

## Example
* All APIs are introduced in the same way
* Total 31 APIs
```js
import {isUS_Wt,isUS_Dst,getWorldTimeZone,getUTCDate} from '@time-zone/date'
isUS_Wt() // true: It's winter time in the United States GMT-5  ; false: You know...
getUTCDate() // UTC Current time
getUTCDate("2022-2-1")
getUTCDate("2022-2-1 13:10:10")
getWorldTimeZone()
getWorldTimeZone("2022-2-1 13:10:10",'en-US')
getWorldTimeZone("2022-2-1 13:10:10",'en-US',{timeZone:'America/New_York'}) // Specify the time corresponding to a time zone
getWorldTimeZone(null,'en-US',{timeZone:'America/New_York'}) // Time zone current time
getWorldTimeZone(new Date(),'en-US',{timeZone:'America/New_York'}) // Time zone current time
getWorldTimeZone(1643692210000)
```
<br>

# Referral function
* Determine whether the United States is now in winter time
* Judge whether the United States is now daylight saving time

* Gets the time in the specified time zone  
   * Full time
   * Full time format adjustment
   * yyyymmdd　|　ddmmyyyy　|　mmddyyyy
   * Custom year and month and date formats: order, separator
   * hhmmss
   * year
   * month
   * date
   * hours（24-hour system）
   * minutes
   * seconds
   * week　　

<br>

> In addition, the above method can replace all the following contents
* Get EST time zone  
   * Full time
   * yyyymmdd
   * hhmmss
   * yearv
   * month
   * date
   * hours（24-hour system. You can set 0 as the starting point of a new day or 24 as the starting point of a new day）
   * minutes
   * seconds
   * week  
<br>

* Get UTC time zone: time difference ± 0  
   * Full time
   * year
   * month
   * date
   * hours
   * minutes
   * seconds

<br>  

# API

## getWorldTimeZone()  
> As mentioned at the beginning of the introduction, this is the main API .  
> See the end of the document for references to `locales` and `options` parameters.
- Gets the time in the specified time zone. 
* 3 parameters
* `date`
  * purpose：`Time parameters; Obtain the time of the corresponding time zone based on the current running system environment.`
  * type：`?:string | number | Date | null | undefined`
  * value：　`Those that match the first parameter of 'new date()' can be used, and 'null' and 'undefined' represent the current time.`
* `locales`
  * purpose：`Returns the corresponding language type`
  * type：`?:string`
  * value：　`language[-scripts][-region]`
* `options`
  * purpose：`Adjust the returned time format content. Specifies the time to return to the time zone`
  * type：`?:object`
  * value：　`See options parameter below`
```javascript
import { getWorldTimeZone } from '@time-zone/date'
// Get the full time of the target time zone
let date = getWorldTimeZone(new Date(),'en-US',{timeZone:'America/New_York'}) 

// If it is not transmitted, the current time zone of the code running environment will be the default
// getWorldTimeZone()
```
<br>


## custom_yyyymmdd_sort()
Get the month, year and day of the specified time zone, and you can customize the order of month, year and day (supplement 0 when month and day are single digits)
* 4 parameters
   * `timeZone`：type `string`
   * Date sequence：type `string` 
      * 1、Must be lowercase。
      * 2、The letter is : `y`、`m`、`d`。
      * 3、The default value for parameters not transmitted isyyyymmdd
      * The order of 3 letters determines the order of return
   * Separator, not passed, default to `/`
   * Time parameters; Obtain the time of the corresponding time zone based on the current running system environment. Parameter type is `?:string | number | Date | null | undefined`
```javascript
import { custom_yyyymmdd_sort } from '@time-zone/date'
let ymd = custom_yyyymmdd_sort('Asia/Shanghai','ymd','-',new Date())
let dmy = custom_yyyymmdd_sort('Asia/Shanghai','dmy','/')
let ydm = custom_yyyymmdd_sort('Asia/Shanghai','ydm','*-@#$$%^^*&(*&)(_+`~')
let mdy = custom_yyyymmdd_sort('Asia/Shanghai','mdy')

// The month, year and day can be combined arbitrarily, and if there is a repetition, the returned result will also appear repeatedly
let ymdy = custom_yyyymmdd_sort('Asia/Shanghai','ymdy')
```
<br>


## get_mmddyyyy() 　 get_ddmmyyyy() 　 get_yyyymmdd（）
Get the month, day and year of the specified time zone (supplement 0 if the month and day are single digits)
* 3 Parameters
   * `timeZone`：type `string`
   * Separator, not passed, default to `/`
   * Time parameters; Obtain the time of the corresponding time zone based on the current running system environment. Parameter type is `?:string | number | Date | null | undefined`
```javascript
import { get_mmddyyyy,get_ddmmyyyy,get_yyyymmdd } from '@time-zone/date'
let mdy = get_mmddyyyy('Asia/Shanghai','/', new Date())
// get_ddmmyyyy() , get_yyyymmdd() 
// No explanation, just look at the name to know the order.

```
<br>


## custom_ymd_sort()
- 0 will not be added if the month day is a single digit
- Other contents follow ` custom_ yyyymmdd_ Sort() ` consistent, no further explanation
```javascript
import { custom_ymd_sort } from '@time-zone/date'
let ymd = custom_ymd_sort( 'Asia/Shanghai','ymd','-',new Date() )
```
<br>


## get_hms()
- Gets the hour, minute, and second of the target time zone
* 2 parameters
   * `timeZone`：type `string`
   * Time parameters; Obtain the time of the corresponding time zone based on the current running system environment. Parameter type is `?:string | number | Date | null | undefined`
```javascript
import { get_hms } from '@time-zone/date'
let hms = get_hms('Asia/Shanghai')  // format：08:00:00
```
<br>

## getYear()
- Gets the year of the target time zone
* 2 parameters
   * `timeZone`：type `string`
   * Time parameters; Obtain the time of the corresponding time zone based on the current running system environment. Parameter type is `?:string | number | Date | null | undefined`
```javascript
import { getYear } from '@time-zone/date'
let year = getYear('Asia/Shanghai')  // Return value number type
```
<br>

## getMonth()
- Gets the month (0-11) of the target time zone
* 2 parameters
   * `timeZone`：type `string`
   * Time parameters; Obtain the time of the corresponding time zone based on the current running system environment. Parameter type is `?:string | number | Date | null | undefined`
```javascript
import { getMonth } from '@time-zone/date'
let month = getMonth('Asia/Shanghai')  // Return value number type
```
<br>

## getDate()
- Gets the day of the target time zone
* 2 parameters
   * `timeZone`：type `string`
   * Time parameters; Obtain the time of the corresponding time zone based on the current running system environment. Parameter type is `?:string | number | Date | null | undefined`
```javascript
import { getDate } from '@time-zone/date'
let date = getDate('Asia/Shanghai')  // Return value number type
```
<br>

## getHours()
- Gets the hour of the target time zone
- Get the hours of the target time zone separately, and the unified return value is: '0-23', so as to avoid confusion caused by the problem of 1-24 in the United States.
* 2 parameters
   * `timeZone`：type `string`
   * Time parameters; Obtain the time of the corresponding time zone based on the current running system environment. Parameter type is `?:string | number | Date | null | undefined`
```javascript
import { getHours } from '@time-zone/date'
let hours = getHours('Asia/Shanghai')  // Return value number type
```
<br>

## getMinutes()
- Gets the minutes of the target time zone
* 2 parameters
   * `timeZone`：type `string`
   * Time parameters; Obtain the time of the corresponding time zone based on the current running system environment. Parameter type is `?:string | number | Date | null | undefined`
```javascript
import { getMinutes } from '@time-zone/date'
let minutes = getMinutes('Asia/Shanghai')  // Return value number type
```
<br>

## getSeconds()
- Gets the second of the target time zone
* 2 parameters
   * `timeZone`：type `string`
   * Time parameters; Obtain the time of the corresponding time zone based on the current running system environment. Parameter type is `?:string | number | Date | null | undefined`
```javascript
import { getSeconds } from '@time-zone/date'
let sec = getSeconds('Asia/Shanghai')  // Return value number type
```
<br>

## getDay()
- Gets the week in the target time zone
- The return value is' 0-6 ', 0 is Sunday, 1 is Monday, followed by order
* 2 parameters
   * `timeZone`：type `string`
   * Time parameters; Obtain the time of the corresponding time zone based on the current running system environment. Parameter type is `?:string | number | Date | null | undefined`
```javascript
import { getDay } from '@time-zone/date'
let day = getDay('Asia/Shanghai')  // Return value number type
```
<br>
<br>


## getESTDate()  
* Get the time of EST time zone. The returned language type is en US
* parameter
   * Time parameters; Obtain the time of the corresponding time zone based on the current running system environment. Parameter type is `?:string | number | Date | null | undefined`
```javascript
import { getESTDate } from '@time-zone/date'
let date = getESTDate()
```
<br>


## getUTCDate()  
* Get UTC time zone
* parameter
   * Time parameters; Obtain the time of the corresponding time zone based on the current running system environment. Parameter type is `?:string | number | Date | null | undefined`
```javascript
import { getUTCDate } from '@time-zone/date'
let date = getUTCDate()
```
<br>


## isUS_Dst()  
Judge whether the United States is now daylight saving time
* No parameters. 
* Returning 'true' indicates that the United States is currently daylight saving time
* Return value: `true` | `false`
```javascript
import { isUS_Dst } from '@time-zone/date'
let booleanDate = isUS_Dst()
```
<br>


## isUS_Wt()  
Determine whether the United States is now in winter time
* No parameters. 
* Returning 'true' indicates that it is winter time in the United States
* Return value:  `true` | `false`
```javascript
import { isUS_Wt } from '@time-zone/date'
let booleanDate = isUS_Wt()
```
<br>


# Other 
## Corresponding value of EST time
* parameter
   * Time parameters; Obtain the time of the corresponding time zone based on the current running system environment. Parameter type is `?:string | number | Date | null | undefined`
```javascript
import { getESTmmddyyyy, ...... } from '@time-zone/date'
getESTmmddyyyy()
getESThms()
EST_getYear()
EST_getMonth()
EST_getDate()
EST_getHours(0)  // U.S. hours. If 0 is passed, it means that the starting point of the new day is 0, otherwise it is 24
EST_getMinutes()
EST_getSeconds()
EST_getDay()
```
<br>
<br>


# `locales` parameter  
* type：`string`
* language[-scripts][-region]  
- The special code can be replaced by the corresponding code type. Refer to the MDN website for details
   * language[-scripts][-region]-u-nu-*  
   * language[-scripts][-region]-u-ca-*  

<br>

- reference value
- Refer to for other values：http://www.lingoes.cn/zh/translator/langcode.htm
```javascript
"zh-Hans" //Simplified Chinese
"zh-TW" //Traditional Chinese
"ru-RU" //Russian
"en-GB" //britain
"it-IT" //Italy
"fr-FR" //French
"pt-PT" //Portugal
"de-DE" //German
"en-US" //usa
"en-AU" //澳大利亚
"en-CA" //Australia
"ko-KR" //the republic of korea
"ar-EG" //arab
"ja-JP" //Japan
"nl-NL" //Netherlands
"es-ES" //Spain
"hi-IN" //Hindi
"eo" //Esperanto  
```

<br>

# `options` parameter  
* type：`object`

* The built-in default parameter is
```javascript
const DEFAULT_OPTIONS = {
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
```

### Configurable parameters. If they have the same properties as the default parameters, the passed in parameters will prevail
```javascript
let options = {
  era: "long",  //Show ad："narrow", "short", "long"  
  year: "numeric",  //"numeric", "2-digit"  
  month: "numeric", //"numeric", "2-digit", "narrow", "short", "long"   
  day: "numeric",   //"numeric", "2-digit"
  hour: "numeric",  //"numeric", "2-digit"
  minute: "numeric",//"numeric", "2-digit"
  second: "numeric",//"numeric", "2-digit"
  weekday: "long",  //"narrow", "short", "long"
  hour12:false,     // true | false
  timeZoneName :"short",  //"short", "long"
  timeZone:"", // Specify the time zone for the city
}
```

## Reference value of：`options.timeZone` 
- For other values, please refer to：https://www.iana.org/time-zones
```javascript
timeZone:'UTC' // UTC time
timeZone:'Europe/Berlin' // GMT+1; German time zone
timeZone:'Australia/Sydney' // GMT+11; Australian time zone
timeZone:'Europe/Moscow' // GMT+3; Russian time zone
timeZone:'Europe/Paris' // GMT+1; French time zone
timeZone:'Europe/London' // GMT; UK time zone
timeZone:'Asia/Tokyo' // JST; Tokyo time zone
timeZone:'Asia/Shanghai' // GMT+8; Beijing time zone
timeZone:'America/Denver' // MST; Us mountain time zone
timeZone:'America/Los_Angeles' // PTZ; Pacific time zone
timeZone:'America/New_York' // EST; Eastern time zone
timeZone:'America/Chicago' // CST; Central time zone
```

<br>
<br>


# Version update history

## v2.2.2
Update document parameter description

## v2.2.1
Update document example reference

## v2.2.0
The corresponding time can be specified for all API additions

## v2.1.2
Verification of development and production environment

## v2.1.1
add tsconfig.json

## v2.1.0
Change the JS of the library to ts