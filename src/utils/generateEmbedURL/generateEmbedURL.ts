import { getDomainFromURL } from '..'
import { STREAMING_SERVICES_URLS } from '../constants'
import type { ServiceUtils } from '../types'

/** getUtilsFromDomain
 * Checks the root domain against a list of supported
 * services, where the relevant service data is returned.
 * @param rootDomain Root domain of URL
 * @returns Relevant Service Utils of the matched service
 */
const getUtilsFromDomain = (rootDomain: string) : ServiceUtils | null  => {
    let serviceUtils = null
    STREAMING_SERVICES_URLS.forEach(service => {
        if (service.urls.includes(rootDomain)) {
            serviceUtils = service.utils
        }
    })

    return serviceUtils
}

/** generateEmbedURL
 * Validates a URL can be transformed into an embed URL,
 * based on supported services. To accomplish this a videoID 
 * is extracted from a recognized service URL and the
 * embed URL is generated.
 * @param url A URL to transform into an embed URL
 * @returns An embed URL, or null if the URL is not supported
 */
export const generateEmbedURL = (url: string): string | null => {
    const rootDomain = getDomainFromURL(url)
    const utils = getUtilsFromDomain(rootDomain)
    const videoID = utils ? url.match(utils.regex) : null

    if (videoID && utils) {
        return utils.embed.replace('%s', videoID[1])
    }

    return null
}