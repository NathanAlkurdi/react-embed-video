import { generateEmbedURL } from './generateEmbedURL'

describe('generateEmbedURL', () => {

    it('should return null for url from unsupported service', () => {
        const embedURL = generateEmbedURL('https://www.NotAService.com/watch?v=ClkQA2Lb_iE')
        expect(embedURL).toBeNull()
    })

    describe('YouTube', () => {
        it('should return a valid embed URL for a YouTube URL', () => {
            const url = 'https://www.youtube.com/watch?v=ClkQA2Lb_iE'
            const embedURL = generateEmbedURL(url)
            expect(embedURL).toBe('https://www.youtube.com/embed/ClkQA2Lb_iE')
        })
    
        it('should return a valid embed URL for a YouTube URL with a query string', () => {
            const url = 'https://www.youtube.com/watch?v=ClkQA2Lb_iE&feature=youtu.be'
            const embedURL = generateEmbedURL(url)
            expect(embedURL).toBe('https://www.youtube.com/embed/ClkQA2Lb_iE')
        })

        it('should return null for a YouTube URL with an invalid ID', () => {
            const url = 'https://www.youtube.com/watch?v=Invalid-ClkQA2Lb_iE'
            const embedURL = generateEmbedURL(url)
            expect(embedURL).toBeNull()
        })
    })

})