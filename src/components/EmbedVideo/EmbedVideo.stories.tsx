import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { EmbedVideo, EmbedVideoProps } from './EmbedVideo'

export default {
    title: 'EmbedVideo',
    component: EmbedVideo,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'black', value: '#000000' },
                { name: 'dark', value: '#333' },
                { name: 'white', value: '#ffffff' }
            ]
        },
        layout: 'centered'
    },
    argTypes: {
        allow: {
            description: 'Features that can be defined for allow attribute. A value of "fullscreen; autoplay;" provides the relevant capabilities.',
        },
        disableURLProcessing: {
            description: 'Used to disable URL parsing and automatic transformation to valid embed URL. Instead will fill in iframe src attribute with url.',
        },
        height: {
            description: 'Height of iframe such as "1000" or "50%"',
        },
        lazy: {
            description: 'Adds support for lazy loading of iframe. When true, iframe will load only when it comes near the visible viewport, the distance being defined by the browser. This is an experimental attribute and support is limited to newer browsers.',
        },
        title: {
            description: 'Used for title attribute and can assist with accessibility.',
        },
        url: {
            description: 'URL of video to embed. Currently recognizes Youtube.',
        },
        width: {
            description: 'Width of iframe such as "1000" or "50%"',
        }
    }
} as ComponentMeta<typeof EmbedVideo>

export const Preview : ComponentStory<typeof EmbedVideo> = (props : EmbedVideoProps) => {
    return (
        <EmbedVideo {...props} />
    )
}

Preview.args = {
    allow: 'autoplay; fullscreen; picture-in-picture',
    disableURLProcessing: false,
    height: 480,
    lazy: false,
    title: 'Video Embed',
    url: 'https://www.vimeo.com/731378604',
    width: 720
}