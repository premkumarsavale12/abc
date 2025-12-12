import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const Slider: Block = {

    slug: 'slider',
    interfaceName: 'slider',

    labels: {
        singular: 'slider',
        plural: 'sliders'
    },


    fields: [
        {
            name: 'sliders',
            type: 'array',
            label: 'Slider',
            minRows: 2,
            fields: [
                {
                    name: 'media',
                    type: 'upload',
                    relationTo: 'media',
                    required: true
                }
            ]

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