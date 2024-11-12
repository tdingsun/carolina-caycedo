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
            name: 'coverVideo',
            title: 'About Page Video',
            type: 'file'
        }),
        defineField({
            name: 'coverImage',
            title: 'About Page Background Image',
            type: 'image'
        }),
        defineField({
            name: 'useImage',
            title: 'Use Image for background?',
            type: 'boolean',
            description: 'Set to Use Image to override the video with a background image.',
            initialValue: false,
            hidden: ({document}) => !document?.coverImage
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