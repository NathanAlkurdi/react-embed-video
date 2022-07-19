/** extractHostname
 * Returns hostname of URL passed based on its composition.
 * @param url URL to extract hostname from
 * @returns Hostname of URL
 */
const extractHostname = (url : string) : string => {
    const hostname = url.includes('//') ? url.split('/')[2] : url.split('/')[0]
    return hostname.split(':')[0].split('?')[0]
}

/** getDomainFromURL
 * Utilizes expected string composition of a URL to fetch
 * the root domain. Work is primarily pulled from below,
 * with some additional cleanup done in this implementation.
 * Source: https://stackoverflow.com/a/23945027
 * @param url URL to extract root domain from
 * @returns Root domain of URL
 */
export const getDomainFromURL = (url: string): string => {
    let domain = extractHostname(url)
    const domainElements = domain.split('.')

    if (domainElements.length > 2) {
        domain = domainElements[domainElements.length - 2] + '.' + domainElements[domainElements.length - 1]
        if (domainElements[domainElements.length - 2].length == 2 && domainElements[domainElements.length - 1].length == 2) {
            domain = domainElements[domainElements.length - 3] + '.' + domain
        }
    }

    return domain
}