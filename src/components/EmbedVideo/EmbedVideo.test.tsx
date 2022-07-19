import React from 'react'
import { render, screen } from '@testing-library/react'
import { EmbedVideo, EmbedVideoProps } from './EmbedVideo'
import { 
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH
} from '../../utils'

describe('<EmbedVideo />', () => {
  let props : EmbedVideoProps

  beforeEach(() => {
    props = {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'Embedded Video'
    }
  })

  it('should render EmbedVideo when a valid URL is provided', async () => {
    render(<EmbedVideo {...props} />)
    
    const embed = await screen.findByTitle(`${props.title}`)
    expect(embed).toBeInTheDocument()
  })

  it('should render EmbedVideo with url prop as source when disableURLProcessing is true', async () => {
    props.disableURLProcessing = true
    render(<EmbedVideo {...props} />)

    const embed = await screen.findByTitle(`${props.title}`)
    expect(embed).toHaveAttribute('src', props.url)
  })

  it('should render EmbedVideo lazily when lazy is true', async () => {
    props.lazy = true
    render(<EmbedVideo {...props} />)

    const embed = await screen.findByTitle(`${props.title}`)
    expect(embed).toHaveAttribute('loading', 'lazy')
  })

  it('should render EmbedVideo with default height and width when not provided', async () => {
    render(<EmbedVideo {...props} />)

    const embed = await screen.findByTitle(`${props.title}`)
    expect(embed).toHaveAttribute('height', `${DEFAULT_HEIGHT}`)
    expect(embed).toHaveAttribute('width', `${DEFAULT_WIDTH}`)
  })

  it('should not render EmbedVideo when a invalid URL is provided', () => {
    props.url = 'https://www.youtube.com/watch?v=NotValid_dQw4w9WgXcQ'
    render(<EmbedVideo {...props} />)

    const embed = screen.queryByTitle(`${props.title}`)
    expect(embed).not.toBeInTheDocument()
  })

  it('should not render EmbedVideo when an unsupported service\'s URL is provided', () => {
    props.url = 'https://www.NotAService.com/watch?v=dQw4w9WgXcQ'
    render(<EmbedVideo {...props} />)

    const embed = screen.queryByTitle(`${props.title}`)
    expect(embed).not.toBeInTheDocument()
  })
})
