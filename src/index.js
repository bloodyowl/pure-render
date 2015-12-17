import shallowEqual from "fbjs/lib/shallowEqual"

const defaultShouldComponentUpdate = (prevProps, props) => !shallowEqual(prevProps, props)

const pureRender = (shouldComponentUpdate = defaultShouldComponentUpdate) => (func) => {
  let lastProps = null
  let lastReturnedValue = null
  let ran = false
  return (props) => {
    if(ran && !shouldComponentUpdate(lastProps, props)) {
      return lastReturnedValue
    }
    ran = true
    lastProps = props
    lastReturnedValue = func(props)
    return lastReturnedValue
  }
}

export default pureRender
