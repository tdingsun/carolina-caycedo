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
                name: 'img',
                title: 'Image',
                type: 'image'
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