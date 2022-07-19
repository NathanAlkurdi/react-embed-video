import { getDomainFromURL } from './getDomainFromURL'

// Test Urls also pulled from: https://stackoverflow.com/a/23945027
const ORIGIN_URLS = [
    ['http://www.blog.classroom.me.uk/index.php', 'classroom.me.uk'],
    ['http://www.youtube.com/watch?v=ClkQA2Lb_iE', 'youtube.com'],
    ['https://www.youtube.com/watch?v=ClkQA2Lb_iE', 'youtube.com'],
    ['www.youtube.com/watch?v=ClkQA2Lb_iE', 'youtube.com'],
    ['ftps://ftp.websitename.com/dir/file.txt', 'websitename.com'],
    ['websitename.com:1234/dir/file.txt', 'websitename.com'],
    ['ftps://websitename.com:1234/dir/file.txt', 'websitename.com'],
    ['example.com?param=value', 'example.com'],
    ['https://facebook.github.io/jest/', 'github.io'],
    ['//youtube.com/watch?v=ClkQA2Lb_iE', 'youtube.com'],
    ['www.食狮.公司.cn', '食狮.公司.cn'],
    ['b.c.kobe.jp', 'kobe.jp'],
    ['a.d.kyoto.or.jp', 'kyoto.or.jp'],
    ['http://localhost:4200/watch?v=ClkQA2Lb_iE', 'localhost'],
    ['www.youtu.be', 'youtu.be'],
]

describe('getDomainFromURL', () => {
    it.each(ORIGIN_URLS)('For %s URL should return %s as root', (url, rootDomain) => {
        expect(getDomainFromURL(url)).toBe(rootDomain)
    })
})