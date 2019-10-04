// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import gallery from './documents/gallery'
import product from './documents/product'
import vendor from './documents/vendor'
import blockContent from './documents/blockContent'
import productVariant from './documents/productVariant'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import youtube from './objects/youtube'
// TODO: I will later need to add my own content types when back at home
    // import gallery,
    // page,
    // product etc

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    blockContent,
    post,
    gallery,
    product,
    productVariant,
    vendor,
    category,
    author,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    youtube

    // TODO: I will later need to add my own content types when back at home
    // gallery,
    // page,
    // product,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
