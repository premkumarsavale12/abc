import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";



export const Right: Block = {

    slug: 'right',
    interfaceName: 'right',
    labels: {
        singular: 'right',
        plural: 'rights'
    },
    fields: [
        {
            name: 'items',
            type: 'array',
            label: 'right',
            minRows: 1,

            fields: [
                {

                    name: 'media',
                    type: 'upload',
                    relationTo: 'media',
                    required: true
                },


                {
                    name: 'richText',
                    type: 'richText',
                    editor: lexicalEditor({
                        features: ({ rootFeatures }) => {
                            return [
                                ...rootFeatures,
                                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                                FixedToolbarFeature(),
                                InlineToolbarFeature(),
                            ]
                        },
                    }),
                    label: false,
                },


                {
                    name: 'label',
                    type: 'text',
                    label: 'Button Label',
                    required: true
                }



            ]

        }
    ]
}