import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { buttonVariants as animationVariants } from "@/lib/animations"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 overflow-hidden",
  {
    variants: {
      variant: {
        default: `
          bg-primary text-primary-foreground font-bold
          shadow-[0_2px_8px_hsl(var(--primary)/0.2)] 
          hover:shadow-[0_4px_16px_hsl(var(--primary)/0.3)] 
          hover:bg-primary/90 hover:-translate-y-0.5
          active:scale-98 active:translate-y-0
          border border-primary/20 hover:border-primary/30
        `,
        destructive: `
          bg-destructive text-destructive-foreground font-bold
          shadow-[0_2px_8px_hsl(var(--destructive)/0.2)] 
          hover:shadow-[0_4px_16px_hsl(var(--destructive)/0.3)] 
          hover:bg-destructive/90 hover:-translate-y-0.5
          active:scale-98 active:translate-y-0
          border border-destructive/20 hover:border-destructive/30
        `,
        outline: `
          border border-input bg-background text-foreground 
          shadow-[0_1px_4px_hsl(var(--primary)/0.1)] 
          hover:border-primary/40 hover:bg-primary/5 
          hover:shadow-[0_2px_8px_hsl(var(--primary)/0.15)] 
          hover:-translate-y-0.5
          active:scale-98 active:translate-y-0
          [&_svg]:text-primary
        `,
        secondary: `
          bg-secondary text-secondary-foreground font-bold
          shadow-[0_1px_4px_hsl(var(--secondary)/0.3)] 
          hover:shadow-[0_2px_8px_hsl(var(--secondary)/0.4)] 
          hover:bg-secondary/80 hover:-translate-y-0.5
          active:scale-98 active:translate-y-0
          border border-secondary/40 hover:border-secondary/60
        `,
        ghost: `
          text-foreground font-medium
          hover:bg-muted/40
          hover:-translate-y-0.5
          active:scale-98 active:translate-y-0
        `,
        link: `
          text-primary underline-offset-4 font-medium
          hover:underline hover:text-primary/80
        `,
      },
      size: {
        default: "h-11 px-4 py-2 text-base",
        sm: "h-9 px-3 py-1 text-sm rounded-lg",
        lg: "h-14 px-6 py-3 text-lg rounded-2xl",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  animated?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, animated = true, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }
    
    if (animated) {
      return (
        <motion.button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          variants={animationVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          {...(props as React.ComponentProps<typeof motion.button>)}
        />
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 