import React, { PureComponent, createRef } from 'react'
import PropTypes from 'prop-types'
import shaka from 'shaka-player'

import { SECOND } from 'constants/common'
import { secondsToValidTime } from 'helpers/common'

import styles from './styles'

const PLAYER_EVENTS = {
  error: 'error',
  buffering: 'buffering',
  playing: 'playing',
  pause: 'pause',
  ended: 'ended'
}

class ShakaPlayer extends PureComponent {
  sendingInfoIntervalId = null
  playerRef = createRef()
  playerInstance = null
  currentSecond = 0

  state = {
    playing: false,
    buffering: false,
  }
  
  componentDidMount() {
    shaka.polyfill.installAll()

    if (shaka.Player.isBrowserSupported()) this.initPlayer()
    else console.error('Browser not supported!')
  }

  componentWillUnmount() {
    const playerNode = this.playerRef.current

    clearInterval(this.sendingInfoIntervalId)
    this.playerInstance?.destroy()

    playerNode.removeEventListener(PLAYER_EVENTS.playing, this.handlePlayerActivation)
    playerNode.removeventListener(PLAYER_EVENTS.pause, this.handlePlayerActivation)
    playerNode.removeEventListener(PLAYER_EVENTS.ended, this.handlePlayerActivation)
  }

  componentDidUpdate() {
    const { playing, buffering } = this.state
    
    if (playing || buffering) this.startSendingInfoInterval()
    else this.stopSendingInfoInterval()
  }

  initPlayer = () => {
    const { uri } = this.props
    const playerNode = this.playerRef.current

    this.playerInstance = new shaka.Player(this.playerRef.current)
    
    this.playerInstance.addEventListener(PLAYER_EVENTS.error, this.onError)

    playerNode.addEventListener(PLAYER_EVENTS.playing, this.handlePlayerActivation)
    playerNode.addEventListener(PLAYER_EVENTS.pause, this.handlePlayerDeacivation)
    playerNode.addEventListener(PLAYER_EVENTS.ended, this.handlePlayerDeacivation)
    
    this.playerInstance.addEventListener(PLAYER_EVENTS.buffering, ({ buffering }) => {
      this.handleBufferingUpdate(buffering)
    })

    this.playerInstance.load(uri)
      .catch(this.onError)
  }

  onErrorEvent = event => this.onError(event)
  onError = err => console.error(err)

  handlePlayerActivation = () => this.setState({ playing: true })
  handlePlayerDeacivation = () => this.setState({ playing: false })
  handleBufferingUpdate = buffering => this.setState({ buffering })

  startSendingInfoInterval = () => {
    const { onTickUpdate, tickDelay } = this.props

    if (!onTickUpdate || this.sendingInfoIntervalId) return

    this.sendingInfoIntervalId = setInterval(this.handleSendingInfoInterval, tickDelay)
  }

  handleSendingInfoInterval = () => {
    this.currentSecond += 1

    const buffering = this.state.buffering
    const stats = this.playerInstance.getStats()
    const videoRate = Math.round(stats.streamBandwidth / 1000)
    const netSpeed = Math.round(stats.estimatedBandwidth / 1000)
    const time = secondsToValidTime(this.currentSecond)

    this.props.onTickUpdate({ videoRate, netSpeed, buffering, time })
  }

  stopSendingInfoInterval = () => {
    clearInterval(this.sendingInfoIntervalId)
    this.sendingInfoIntervalId = null
  }

  render() {
    const { controls, autoPlay } = this.props

    return (
      <div className="shaka-player">
        <video
          ref={this.playerRef}
          className="video"
          controls={controls}
          autoPlay={autoPlay}
        />

        <style jsx>{styles}</style>
      </div>
    )
  }
}

ShakaPlayer.defaultProps = {
  controls: true,
  autoPlay: true,
  uri: '',
  tickDelay: SECOND
}

ShakaPlayer.propTypes = {
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  onTickUpdate: PropTypes.func,
  tickDelay: PropTypes.number,
  uri: PropTypes.string.isRequired,
}

export default ShakaPlayer
