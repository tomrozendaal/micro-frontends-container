import React from 'react'

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host } = this.props
    const scriptId = `micro-frontend-script-${name}`

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend()
    } else {
      const script = document.createElement('script')
      script.id = scriptId
      script.crossOrigin = ''
      script.src = `${host}/main.js`
      script.onload = this.renderMicroFrontend
      document.head.appendChild(script)

      const style = document.createElement('link')
      style.rel = 'stylesheet'
      style.href = `${host}/main.css`
      style.type = 'text/css'
      document.head.appendChild(style)
    }
  }

  componentWillUnmount() {
    const { name } = this.props
    window[`unmount${name}`](`${name}-container`)
  }

  renderMicroFrontend = () => {
    const { name, history, match } = this.props
    window[`render${name}`](`${name}-container`, { ...history, match })
  }

  render() {
    return <main id={`${this.props.name}-container`} />
  }
}

export default MicroFrontend
