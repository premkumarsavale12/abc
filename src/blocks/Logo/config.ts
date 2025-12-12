import { Block } from "payload";

export const Logo: Block = {
    slug: 'logo',
    interfaceName: 'logo',
    labels: {
        singular: 'logo',
        plural: 'logos'
    },
    fields: [
        {
            name: 'logos',
            type: 'array',
            label: 'Logos',
            minRows: 1,
            fields: [
                {
                    name: 'logo',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
    ]
}