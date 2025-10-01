import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    // add more routes here
];

const stream = new SitemapStream({ hostname: 'https://www.mycoolsite.com' });

streamToPromise(
    stream.pipe(createWriteStream('./public/sitemap.xml'))
).then(() => console.log('✅ Sitemap generated!'));

links.forEach(link => stream.write(link));
stream.end();