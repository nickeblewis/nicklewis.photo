import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts by Category')
        .child(
          S.documentList()
            .title('Categories')
            .menuItems(S.documentTypeList('category').getMenuItems())
            .filter('_type == $type && !defined(parents)')
            .params({ type: 'category' })
            .child(categoryId =>
              S.documentList()
                .title('Child categories')
                .menuItems(S.documentTypeList('category').getMenuItems())
                .filter('_type == $type && $categoryId in parents[]._ref')
                .params({ type: 'category', categoryId })
                .child(categoryId =>
                  S.documentList()
                    .title('Posts')
                    .menuItems(S.documentTypeList('post').getMenuItems())
                    .filter('_type == $type && $categoryId in categories[]._ref')
                    .params({ type: 'post', categoryId })
                )
            )
        ),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
