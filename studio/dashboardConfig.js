export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9def4438ac7001827cfd41',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-s4spiws1',
                  apiId: 'aeed622f-4c87-47a6-89db-f7ef5e477632'
                },
                {
                  buildHookId: '5e9def44b9f99201a39f4162',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bj7yz394',
                  apiId: '748d925f-a7cb-4f4c-bb6a-aa3ec96ef5af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/antonistsag/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bj7yz394.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
