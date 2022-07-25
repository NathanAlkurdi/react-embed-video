import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { EmbedVideo } from 'react-embed-video'
import './index.css'

const App = () => {
  const [height, setHeight] = useState(720)
  const [width, setWidth] = useState(1280)
  const [url, setUrl] = useState('https://www.vimeo.com/731378604')
  const [title, setTitle] = useState('Video Embed')
  const [allow, setAllow] = useState('autoplay; fullscreen; picture-in-picture')
  const [isLazy, setIsLazy] = useState(false)
  const [disableURLProcessing, setDisableURLProcessing] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    switch(name) {
      case 'height':
        setHeight(parseInt(value))
        break
      case 'width':
        setWidth(parseInt(value))
        break
      case 'url':
        setUrl(value)
        break
      case 'title':
        setTitle(value)
        break
      case 'allow':
        setAllow(value)
        break
      case 'Lazy':
        setIsLazy(!isLazy)
        break
      case 'disableURLProcessing':
        setDisableURLProcessing(!disableURLProcessing)
        break
      default:
        break
    }
  }

  return (
    <div className="flex">
      <div className="toolbar mb-25">
        <div className="toolbar-inputs">
        <input className="toolbar-item" type="text" placeholder="URL" name="url" onChange={(e) => handleInputChange(e)} value={url} />
          <input className="toolbar-item" type="text" placeholder="Height" name="height" onChange={(e) => handleInputChange(e)} value={height} />
          <input className="toolbar-item" type="text" placeholder="Width" name="width" onChange={(e) => handleInputChange(e)} value={width} />
          <input className="toolbar-item" type="text" placeholder="Title" name="title" onChange={(e) => handleInputChange(e)} value={title} />
          <input className="toolbar-item" type="text" placeholder="Allow" name="allow" onChange={(e) => handleInputChange(e)} value={allow} />
        </div>
        <div className="toolbar-checks">
          <div className="toolbar-item">
            <input type="checkbox" name="Lazy" onChange={(e) => handleInputChange(e)} checked={isLazy} />
            <label htmlFor="Lazy">Lazy</label>
          </div>
          <div className="toolbar-item">
            <input type="checkbox" name="disableURLProcessing" onChange={(e) => handleInputChange(e)} checked={disableURLProcessing} />
            <label htmlFor="disableURLProcessing">Disable URL Processing</label>
          </div>
        </div>
      </div>
      <EmbedVideo
        url={url}
        height={height}
        width={width}
        lazy={isLazy}
        title={title}
        disableURLProcessing={disableURLProcessing}
        allow={allow}
      />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
