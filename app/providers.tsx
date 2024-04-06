// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Separator } from '@/components/ui/separator'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ContextMenu>
        <ContextMenuTrigger>
    <NextUIProvider>
      {children}
    </NextUIProvider>
    </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel inset>Join SaasHustlers Community</ContextMenuLabel>
          </ContextMenuRadioGroup>
          {/* <ContextMenuSeparator /> */}
          <Separator className='bg-gray-500' />
          <ContextMenuItem>Events</ContextMenuItem>
          <ContextMenuItem>Tools</ContextMenuItem>
          <ContextMenuItem>Resources</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    
  )
}