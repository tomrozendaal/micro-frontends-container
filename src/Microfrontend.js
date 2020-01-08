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
      script.src = host
      script.onload = this.renderMicroFrontend
      document.head.appendChild(script)
    }
  }

  componentWillUnmount() {
    const { name } = this.props
    window[`unmount${name}`](`${name}-container`)
  }

  renderMicroFrontend = () => {
    const { name, history } = this.props
    window[`render${name}`](`${name}-container`, history)
  }

  render() {
    return <main id={`${this.props.name}-container`} />
  }
}

export default MicroFrontend
