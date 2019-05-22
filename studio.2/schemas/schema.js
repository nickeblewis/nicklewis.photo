// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import product from "./product";
import gallery from "./gallery";
import page from "./page";
import post from "./post";
import vendor from "./vendor";
import productVariant from "./productVariant";


// document schemas
import author from './documents/author'
//import category from './documents/category'
//import post from './documents/post'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'

//import localeString from "./locale/String";
//import localeText from "./locale/Text";
//import localeBlockContent from "./locale/BlockContent";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    product,
    gallery,
    page,
    post,
    vendor,
    author,
    mainImage,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    //localeText,
    //localeBlockContent,
    //localeString,
    authorReference,
    productVariant,
    bodyPortableText,
    bioPortableText,
    excerptPortableText
  ])
});
