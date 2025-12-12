import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const Main: Block = {
    slug: 'main',
    interfaceName: 'main',
    labels: {
        singular: 'main',
        plural: 'mains'
    },

    fields: [
        {
            name: 'media',
            type: 'upload',
            label: 'media',
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
    ]
}