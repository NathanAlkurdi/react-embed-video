import React, { useState, useEffect } from 'react'
import { 
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
  generateEmbedURL
} from '../../utils'

/* wish list for basic embed:
- Youtube (ref: https://youtubevideoembed.com/
- Twitch
- Vimeo
- Dailymotion
- Facebook?
*/

export type EmbedVideoProps = {
  /* Features that can be defined for allow attribute.
  A value of 'fullscreen; autoplay;' provides the relevant
  capabilities. */
  allow?: string
  /* Used to disable URL parsing and automatic 
  transformation to valid embed URL. Instead will fill
  in iframe src attribute with url. */
  disableURLProcessing?: boolean
  /* Height of iframe such as '1000' */
  height?: number
  /* Adds support for lazy loading of iframe.
  When true, iframe will load only when it comes
  near the visible viewport, the distance being
  defined by the browser. This is an experimental
  attribute and support is limited to newer
  versions. */
  lazy?: boolean
  /* Used for title attribute and can assist with
  accessibility. */
  title?: string
  /* URL of video to embed. Currently recognizes Youtube. */
  url: string
  /* Width of iframe such as '1000' */
  width?: number
}

export const EmbedVideo = (props : EmbedVideoProps) => {
  const [source, setSource] = useState<string | null>(null)
  const {
    allow,
    height,
    lazy,
    disableURLProcessing,
    title,
    url,
    width
  } = props

  const processURL = (url : string) => {
    const embedURL = generateEmbedURL(url)

    if (embedURL) {
      setSource(embedURL)
    }
  }

  useEffect(() => {
    if (disableURLProcessing) {
      setSource(url)
    } else {
      processURL(url)
    }
    
  }, [disableURLProcessing, url])

  return source ? (
    <>
      <iframe
        src={source}
        height={height ? height : DEFAULT_HEIGHT}
        width={width ? width : DEFAULT_WIDTH}
        loading={lazy ? 'lazy' : 'eager'}
        title={title}
        allow={allow}
      />
    </>
  ) : null
}
