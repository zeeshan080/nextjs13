// export default {
//     name: 'products',
//     type: 'document',
//     title: 'Products',
//     fields: [
//         {
//             name: 'name',
//             type: 'string',
//             title: 'Name'
//         },
//         {
//             name: 'catagory',
//             type: 'string',
//             title: 'Category'
//         },
//         {
//             name: 'price',
//             type: 'number',
//             title: 'Price'
//         },
//         {
//             name: 'image',
//             type: 'image',
//             title: 'Image'
//         },
//         {
//             name: 'sizes',
//             type: 'string',
//             title: 'Sizes'
//         },
//     ]
// }


// /schemas/product.js (.ts)

import { defineType, defineField, defineArrayMember } from "sanity";

const product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "productName",
      type: "string",
      title: "Product Name",
    }),
    defineField({
        name: "productCategory",
        type: "string",
        title: "Category Name",
      }),
      defineField({
        name: "productPrice",
        type: "number",
        title: "Product Price",
      }),
      defineField({
        name: "productImage",
        type: "image",
        title: "Product Image",
      }),
    defineField({
      name: "sizes",
      type: "array",
      title: "Sizes for Product",
      of: [
        defineArrayMember({
          type: 'object',
          name: 'quantity',
          fields: [
            {type: 'number', name: 'size',title: "Size"},           
          ]
        })
      ]
    }),
  ],
})
export default product