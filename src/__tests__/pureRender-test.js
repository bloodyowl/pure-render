import pureRender from ".."
import React from "react"
import ReactDOM from "react-dom"

tape("pure-render", (test) => {
  let ran = 0
  const Dummy = () => {
    test.ok(++ran < 2)
    return <div />
  }
  const WrappedDummy = pureRender()(Dummy)
  const mountNode = document.createElement("div")
  ReactDOM.render(
    <WrappedDummy />,
    mountNode
  )
  ReactDOM.render(
    <WrappedDummy />,
    mountNode
  )
  test.end()
})

tape("pure-render re-renders when needed", (test) => {
  let ran = 0
  const Dummy = () => {
    test.ok(++ran < 3)
    return <div />
  }
  const WrappedDummy = pureRender()(Dummy)
  const mountNode = document.createElement("div")
  ReactDOM.render(
    <WrappedDummy />,
    mountNode
  )
  ReactDOM.render(
    <WrappedDummy />,
    mountNode
  )
  ReactDOM.render(
    <WrappedDummy foo="bar"/>,
    mountNode
  )
  test.end()
})

tape("pure-render takes custom function", (test) => {
  let ran = 0
  const Dummy = () => {
    test.ok(++ran < 2)
    return <div />
  }
  const shouldComponentUpdate = (prevProps, props) => (
    prevProps.id !== props.id
  )
  const WrappedDummy = pureRender(shouldComponentUpdate)(Dummy)
  const mountNode = document.createElement("div")
  ReactDOM.render(
    <WrappedDummy id="foo" foo={1} />,
    mountNode
  )
  ReactDOM.render(
    <WrappedDummy id="foo" foo={2} />,
    mountNode
  )
  ReactDOM.render(
    <WrappedDummy id="foo" foo={3} />,
    mountNode
  )
  test.end()
})
