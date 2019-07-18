export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                'NOTE1: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce2f0558feb2ebef5b1abff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qj8y3cvu',
                  apiId: '4dcc0683-7560-42bd-be0b-a728ebaeb4fe'
                },
                {
                  buildHookId: '5cd489e47d9014cfbacddc5b',
                  title: 'Blog Website',
                  name: 'nicklewisphoto',
                  apiId: '8823e742-9cdd-43bb-bc14-a2a3ec5c1a1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/nicklewis.photo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p3to5cix.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
