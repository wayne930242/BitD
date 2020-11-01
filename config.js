const config = {
  gatsby: {
    pathPrefix: '/BitD',
    siteUrl: 'https://wayneh.tw/BitD',
    gaTrackingId: 'G-9X9YXXL8X6',
    trailingSlash: false,
  },
  header: {
    logo: 'https://i.imgur.com/OvpWSmY.png',
    logoLink: '/',
    title:
      '',
    githubUrl: 'https://github.com/wayne930242/BitD/',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://www.plurk.com/wayne930242" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://i.imgur.com/iGLquF1.png' alt={'Plurk'}/>
		      </div>
		    </a>
      </li>
      <li>
		    <a href="https://wayneh.tw" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://i.imgur.com/HxsSfah.png' alt={'Blog'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '贊助我', link: 'https://www.patreon.com/weihung'}],
    search: {
      enabled: false,
      indexName: 'blades-in-the-dark',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/1-basic',
      '/2-characters',
      '/3-crew',
      '/4-score',
      '/5-downtime',
    ],
    collapsedNav: [
      '/1-basic',
      '/2-characters',
      '/3-crew',
      '/4-score',
      '/5-downtime',
    ],
    links: [
      { text: '原文', link: 'http://bladesinthedark.com' },
    ],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://wayneh.tw/BitD'>暗夜冷鋒 SRD</a>",
  },
  siteMetadata: {
    title: '暗夜冷鋒 SRD',
    description: '由洪偉所翻譯的暗夜冷鋒（Blades in the Dark）SRD。',
    ogImage: 'https://i.imgur.com/kWXFA73.png',
    docsLocation: 'https://github.com/wayne930242/BitD/tree/master/content',
    favicon: 'https://i.imgur.com/QZNWWVw.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/sword.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
