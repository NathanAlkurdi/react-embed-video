/* eslint-disable no-useless-escape */
import type { ServiceURL } from './types'

export const DEFAULT_WIDTH = 500
export const DEFAULT_HEIGHT = 300

export enum STREAMING_SERVICES {
    YOUTUBE = 'youtube',
    VIMEO = 'vimeo'
}

export const STREAMING_SERVICES_URLS : Array<ServiceURL> = [
    {
        urls: [
            'youtube.com',
            'youtu.be',
            'youtube-nocookie.com'
        ],
        utils: {
            embed: 'https://www.youtube.com/embed/%s',
            regex: new RegExp(/(?:\/|%3D|v=|vi=)([0-9A-z-_]{11})(?:[%#?&]|$)/),
            type: STREAMING_SERVICES.YOUTUBE
        }
    },
    {
        urls: [
            'vimeo.com'
        ],
        utils: {
            embed: 'https://player.vimeo.com/video/%s',
            regex: new RegExp(/(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/),
            type: STREAMING_SERVICES.VIMEO,
        }
    }
]