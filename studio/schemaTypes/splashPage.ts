import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'splashPage',
    title: 'Splash Page',
    type: 'document',
    fields: [
        defineField({
            name: 'splashImgs',
            title: 'Splash Page Images',
            type: 'array',
            of: [{
                name: 'imgObj',
                title: 'Image',
                type: 'object',
                fields: [
                    {
                        name: 'img',
                        title: 'Image',
                        type: 'image',
                    },
                    {
                        name: 'caption',
                        title: 'Caption',
                        type: 'blockContent',
                    },
                    {
                        name: 'alt',
                        title: 'Alt Text',
                        type: 'string',
                    }
                ],
            }]
        }),
        defineField({
            name: 'splashVids',
            title: 'Splash Page Videos',
            type: 'array',
            of: [{
                name: 'video',
                title: 'Video',
                type: 'file'
            }]
        })
    ],
    preview: {
        select: {
        },
        prepare: () => {
            return {title: "Splash Page"}
        }
    }
})