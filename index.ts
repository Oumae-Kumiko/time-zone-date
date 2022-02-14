(function toLocaleStringSupportsLocales() {
  try {
      new Date().toLocaleString("i");
  } catch (e) {
    return
  }
  console.error('该浏览器环境可能不支持　@time-zone/date　库');
})()
export * from './operation'
export * from './time-zone'