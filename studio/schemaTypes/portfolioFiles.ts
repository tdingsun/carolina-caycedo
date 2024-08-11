import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'portfolioFiles',
    title: 'Portfolio Files',
    type: 'document',
    fields: [
        defineField({
            name: 'portfolioPDF',
            title: 'Portfolio PDF',
            type: 'file',
        }),
        defineField({
            name: 'videoPortfolioPDF',
            title: 'Video Portfolio PDF',
            type: 'file',
        }),
    ],
    preview: {
        select: {
        },
        prepare: () => {
            return {title: "Portfolio Files"}
        }
    }
})