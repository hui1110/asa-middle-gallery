module.exports = {
    title: "Azure Spring Apps button Documentation",
    description: "From code to deployment in minutes",
    base: "/asa-middle-gallery/",
    themeConfig: {
        logo: '/assets/Microsoft_Azure.svg',
        repo: 'Azure/asa-middle-gallery',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        lastUpdated: 'Last Updated',
        sidebarDepth: 1,
        smoothScroll: true,
        nav: [
         { text: "Home", link: '/' },
         // { text: "Back to NubesGen.com", link: 'https://nubesgen.com' }
        ],
      displayAllHeaders: true,
      sidebar: [
          {
              title: '🔹 Azure Spring Apps button',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                  {
                      title: 'Overview',
                      path: '/asa-button/overview',
                  },
                  {
                      title: 'Quick start',
                      path: '/asa-button/quick-start',
                  },
              ],
          }
      ]
    },
    plugins: [
      [
        'vuepress-plugin-clean-urls',
        {
          normalSuffix: '/',
          indexSuffix: '/',
          notFoundPath: '/404.html',
        },
      ],
    ],
    head: [
      ['script', { async: '', defer: '' , src: 'https://buttons.github.io/buttons.js' }],
      ['script', {}, `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "4zmkonp2tw");` ]
    ]
  };