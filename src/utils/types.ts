export type ServiceUtils = {
    embed: string,
    regex: string
}
export type ServiceURL = {
    urls: string[],
    utils: ServiceUtils
}

export type ServiceURLs = [ServiceURL]