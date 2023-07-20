'use client'

import { FC } from 'react'
import React from 'react'
import * as TabsComponent from '@radix-ui/react-tabs'
import { TabsListItems } from './TabsListItems'
import { Partner } from '@/config/partners/types'
import { TabsDropCard } from './TabsDropCard'

export interface TabsComponentProps {
  upcomingDrops: Partner[]
  pastDrops: Partner[]
}

export const Tabs: FC<TabsComponentProps> = ({ upcomingDrops, pastDrops }) => {
  return (
    <section className="p-4 bg-gray-200/80 rounded-3xl">
      <TabsComponent.Root defaultValue="tab1">
        <TabsComponent.List className="" aria-label="Manage your account">
          <TabsListItems
            upcomingLength={upcomingDrops.length}
            pastLength={pastDrops.length}
          />
        </TabsComponent.List>
        <TabsComponent.Content value="tab1">
          {upcomingDrops.map(({ name, drops, icon, description, slug }) => (
            <div key={name} className="my-8 first:mt-6 last:mb-0">
              <TabsDropCard
                slug={slug}
                address={drops[0].address}
                name={name}
                startDate={drops[0].startDate}
                endDate={drops[0].endDate}
                image={icon}
                description={description}
              />
            </div>
          ))}
        </TabsComponent.Content>
        <TabsComponent.Content className="" value="tab2">
          {pastDrops.map(({ name, drops, icon, description, slug }) => (
            <div key={name} className="my-8 first:mt-6 last:mb-0">
              <TabsDropCard
                link
                slug={slug}
                address={drops[0].address}
                name={name}
                startDate={drops[0].startDate}
                endDate={drops[0].endDate}
                image={icon}
                description={description}
              />
            </div>
          ))}
        </TabsComponent.Content>
      </TabsComponent.Root>
    </section>
  )
}
