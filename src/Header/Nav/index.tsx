'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {

  const defaultNavItems = [
    { link: { label: 'Home', url: '#' } },
    { link: { label: 'About', url: '#' } },
    { link: { label: 'Purchase', url: '#' } },
    { link: { label: 'Contact', url: '#' } },
    { link: { label: 'Data', url: '#' } },
  ]
  const navItems = data?.navItems || []

  const itemsToShow = navItems.length > 0 ? navItems : defaultNavItems


  return (
    <nav className="flex gap-8 items-center w-full bg-black text-white px-6 py-4 text-right">

      <div className="flex gap-8 items-center  ml-auto">
        {itemsToShow.map(({ link }, i) => {
          return (
            <CMSLink
              key={i}
              {...link}
              appearance="link"
              className="text-lg font-medium text-white hover:text-gray-300"
            />
          )
        })}
      </div>

    </nav>

  )
}
