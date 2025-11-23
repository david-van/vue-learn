export const getTime = (): string => {
  const now = new Date()
  const hour = now.getHours()
  let message = ''
  if (hour < 6) {
    message = '凌晨'
  } else if (hour < 9) {
    message = '早上'
  } else if (hour < 12) {
    message = '上午'
  } else if (hour < 14) {
    message = '中午'
  } else if (hour < 17) {
    message = '下午'
  } else if (hour < 19) {
    message = '傍晚'
  } else if (hour < 22) {
    message = '晚上'
  }
  return message
}
