import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { Right } from '@/blocks/Right/Component'
import { MainBlock } from '@/blocks/Main/Component'
import { Slider } from '@/blocks/Slider/Component'
import { ImportIcon } from 'lucide-react'
import { FAQBlock } from '@/blocks/FAQ/Component'
import { Logo } from '@/blocks/Logo/Components'
import { ConteComponent } from '@/blocks/Conten/Component'
import { OemBlock } from '@/blocks/Oem/Component'
import { DownComponent } from '@/blocks/Down/Component'



 type BlockWithExtraProps = Page['layout'][0] & {
  disableInnerContainer?: boolean;
};


const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  right: Right,
  main: MainBlock,
  slider: Slider,
  faq: FAQBlock,
  logo: Logo,
  conten: ConteComponent,
  oem: OemBlock,
  down: DownComponent

}
export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = ({ blocks }) => {

  if (!blocks?.length) return null;

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType } = block;

        if (blockType && blockType in blockComponents) {
     const Block = blockComponents[blockType as keyof typeof blockComponents] as React.ComponentType<any>;

          return (
            <div className="my-16" key={index}>
                <Block {...(block as any)} disableInnerContainer={true} />
            </div>
          );
        }

        return null;
      })}
    </Fragment>
  );
}
