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

    describe('Vimeo', () => {
        it('should return a valid embed URL for a Vimeo URL', () => {
            const url = 'https://www.vimeo.com/731378604'
            const embedURL = generateEmbedURL(url)
            expect(embedURL).toBe('https://player.vimeo.com/video/731378604')
        })

        it('should return a valid embed URL for a Vimeo URL with a query string', () => {
            const url = 'https://www.vimeo.com/731378604?autoplay=1'
            const embedURL = generateEmbedURL(url)
            expect(embedURL).toBe('https://player.vimeo.com/video/731378604')
        })

        it('should return null for a Vimeo URL with an invalid ID', () => {
            const url = 'https://www.vimeo.com/Invalid-731378604'
            const embedURL = generateEmbedURL(url)
            expect(embedURL).toBeNull()
        })
    })
})