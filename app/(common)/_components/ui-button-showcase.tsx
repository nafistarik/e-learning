// Demo section: Use all variants of UiButton
import { UiButton } from "@/components/ui/ui-button"
import { HomeIcon, SettingsIcon, LogOutIcon } from "lucide-react"

export function UiButtonShowcase() {
  return (
    <div className="space-y-8 p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">

      {/* Row 1: Variants */}
      <div className="flex flex-wrap gap-4">
        <UiButton variant="default">Default</UiButton>
        <UiButton variant="outline">Outline</UiButton>
        <UiButton variant="ghost">Ghost</UiButton>
        <UiButton variant="secondary">Secondary</UiButton>
        <UiButton variant="destructive">Destructive</UiButton>
        <UiButton variant="link">Link</UiButton>
      </div>

      {/* Row 2: Navbar & footer buttons */}
      <div className="flex flex-wrap gap-4 bg-muted p-4 rounded">
        <UiButton variant="nav"><HomeIcon /> Nav</UiButton>
        <UiButton variant="footer">Footer</UiButton>
        <UiButton variant="mobileNav">Mobile Nav</UiButton>
      </div>

      {/* Row 3: Modal, Card, Toolbar, Social, Media */}
      <div className="flex flex-wrap gap-4">
        <UiButton variant="modal">Modal</UiButton>
        <UiButton variant="card">Card</UiButton>
        <UiButton variant="toolbar">Toolbar</UiButton>
        <UiButton variant="social" size='icon'><SettingsIcon /></UiButton>
      </div>

      {/* Row 4: Tooltip + Icon */}
      <div className="flex flex-wrap gap-4">
        <UiButton tooltip="Home" variant="default"><HomeIcon /> With Tooltip</UiButton>
        <UiButton tooltip="Logout" variant="destructive"><LogOutIcon /> Logout</UiButton>
      </div>

      {/* Row 5: Loading states */}
      <div className="flex flex-wrap gap-4">
        <UiButton isLoading>Loading</UiButton>
        <UiButton isLoading loadingText="Saving...">Save</UiButton>
        <UiButton variant="outline" isLoading loadingText="Loading...">Outline</UiButton>
      </div>

      {/* Row 6: Sizes */}
      <div className="flex flex-wrap gap-4">
        <UiButton size="sm" disabled>Small</UiButton>
        <UiButton size="default">Default</UiButton>
        <UiButton size="lg">Large</UiButton>
        <UiButton size="icon" variant="secondary"><HomeIcon /></UiButton>
        <UiButton size="full">Full Width</UiButton>
      </div>

      {/* Row 7: Width handling + alignments */}
      <div className="flex flex-col gap-4 bg-white dark:bg-zinc-800 p-4 rounded">
        <UiButton className="w-full" align="left"><HomeIcon /> Left aligned</UiButton>
        <UiButton className="w-full" align="center"><HomeIcon /> Center aligned</UiButton>
        <UiButton className="w-full" align="right"><HomeIcon /> Right aligned</UiButton>
        <div className="flex gap-4">
          <UiButton className="flex-1">Flex 1</UiButton>
          <UiButton className="flex-1" variant="outline">Flex 2</UiButton>
        </div>
      </div>

    </div>
  )
}
