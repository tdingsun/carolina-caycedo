import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'aboutPageBlurb',
            title: 'About Page Blurb',
            type: 'blockContent',
        }),
        defineField({
            name: 'coverImage',
            title: 'About Page Image',
            type: 'image',
        }),
        defineField({
            name: 'contactLinks',
            title: 'Contact Links',
            type: 'array',
            of: [{
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                    defineField({
                        name: 'label',
                        title: 'Label',
                        type: 'string'
                    }),
                    defineField({
                        name: 'url',
                        title: 'URL',
                        type: 'string'
                    })
                ]
            }]
        }),
    ],
    preview: {
        select: {
        },
        prepare: () => {
            return {title: "About Page"}
        }
    }
})