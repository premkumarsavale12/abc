import { Block } from "payload";

export const Conten: Block = {
    slug: 'conten',
    interfaceName: 'conten',
    fields: [
        {
            name: 'cards',
            type: 'array',
            label: 'Cards',
            minRows: 1,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: 'Title',
                    required: true
                },
                {
                    name: 'Paragraph',
                    type: 'textarea',
                    label: 'Paragraph',
                    required: true
                },
                {
                    name: 'authorName',
                    type: 'text',
                    label: 'Author Name',
                },
                {
                    name: 'logo',
                    type: 'upload',
                    relationTo: 'media',
                    label: 'Author Image',
                }
            ]
        }
    ]
}