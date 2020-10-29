const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://wayneh.tw/blades-in-the-dark-srd',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://i.imgur.com/OvpWSmY.png',
    logoLink: '/',
    title:
      "",
    githubUrl: 'https://github.com/wayne930242/blades-in-the-dark-srd/',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: '',
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
    frontline: true,
    ignoreIndex: true,
    title:
      "<a href='/'>暗夜冷鋒 SRD</a>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/wayne930242/blades-in-the-dark-srd/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
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
