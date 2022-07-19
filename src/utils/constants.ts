/* eslint-disable no-useless-escape */
import type { ServiceURLs } from './types'

export const DEFAULT_WIDTH = 500
export const DEFAULT_HEIGHT = 300

export const STREAMING_SERVICES_URLS : ServiceURLs = [
    {
        urls: [
            'youtube.com',
            'youtu.be',
            'youtube-nocookie.com'
        ],
        utils: {
            embed: 'https://www.youtube.com/embed/%s',
            regex: '(?:\/|%3D|v=|vi=)([0-9A-z-_]{11})(?:[%#?&]|$)'
        }
    },
]

export enum STREAMING_SERVICES {
    YOUTUBE = 'youtube'
}
