"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const uiButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive-hover",
        outline: "border border-input bg-background shadow-sm hover:bg-muted hover:text-accent-foreground",
        secondary: "bg-secondary text-primary shadow-sm hover:bg-primary hover:text-white",
        ghost: "hover:bg-muted hover:text-accent-foreground",
        link: "text-primary hover:underline underline-offset-4 decoration-[1.5px]",
        nav: "bg-transparent text-foreground hover:text-primary font-bold",
        modal: "bg-muted text-muted-foreground hover:bg-accent",
        card: "bg-card text-card-foreground hover:bg-muted",
        toolbar: "bg-background text-foreground hover:bg-accent",
        social: "bg-transparent border text-primary hover:bg-muted rounded-full",
        mobileNav: "bg-transparent text-foreground hover:text-primary font-bold hover:underline underline-offset-4 decoration-[1.5px]",
        footer: "text-muted-foreground hover:text-primary"
      },
      size: {
        default: "h-9 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9 p-0",
        full: "w-full",
      },
      loading: {
        true: "cursor-wait opacity-70",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      loading: false,
    },
  }
)

export interface UiButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof uiButtonVariants> {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
  disabled?: boolean
  tooltip?: string
  align?: "left" | "center" | "right"
}

const UiButton = React.forwardRef<HTMLButtonElement, UiButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      loadingText,
      children,
      disabled,
      tooltip,
      align = "center",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    const justifyClass =
      align === "left"
        ? "justify-start"
        : align === "right"
        ? "justify-end"
        : "justify-center"

    const content = (
      <div className={cn("flex items-center gap-2 w-full", justifyClass)}>
        {isLoading && <Loader2 className="animate-spin" />}
        {isLoading ? (
          loadingText ? <span>{loadingText}</span> : null
        ) : (
          <span className="flex items-center gap-2">{children}</span>
        )}
      </div>
    )

    const buttonElement = (
      <Comp
        className={cn(uiButtonVariants({ variant, size, loading: isLoading }), className)}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {content}
      </Comp>
    )

    if (tooltip) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {buttonElement}
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              {tooltip}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    }

    return buttonElement
  }
)

UiButton.displayName = "UiButton"

export { UiButton, uiButtonVariants }
