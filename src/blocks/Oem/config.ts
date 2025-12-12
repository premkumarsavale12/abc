import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const Oem: Block = {
    slug: 'oem',
    interfaceName: 'oem',
    labels: {
        singular: 'oem',
        plural: 'oems'
    },

    fields: [

        {
            name: "richText",
            type: "richText",
            editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                ],
            }),
        },

        {
            name: 'Paragraph',
            type: 'text',
            label: 'Paragraph'
        },


        {
            name: "logos",
            type: "array",
            label: "Logos",
            minRows: 1,
            fields: [
                {
                    name: "logo",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },

                {
                    name: "richText",
                    type: "richText",
                    editor: lexicalEditor({
                        features: ({ rootFeatures }) => [
                            ...rootFeatures,
                            HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
                            FixedToolbarFeature(),
                            InlineToolbarFeature(),
                        ],
                    }),
                },

                {
                    name: "para",
                    type: "text",
                    label: "Para",
                },
            ],
        },
    ]

}