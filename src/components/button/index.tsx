import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
                  cn(
                      "flex justify-center items-center transition-all duration-300 ease-in-out",
                      "rounded-full hover:shadow-[0px_24px_48px_-12px_rgba(56,198,130,0.18)]",
                      "disabled:opacity-50 disabled:cursor-not-allowed"
                  ),
                {
                    variants: {
                        intent: {
                          primary: "btn-primary",
                          secondary: "btn-secondary",
                        },
                        size: {
                            sm: "px-[16px] py-[8px] text-sm",
                            md: "px-[24px] py-[16px] text-base",
                            lg: "px-[32px] py-[20px] text-lg",
                        },
                    },
                    defaultVariants: {
                        intent: "primary",
                        size: "md",
                    }
                });

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> { 
        rightIcon?: React.ReactNode;
        isIcon?: boolean;
        disabled?: boolean;
    }
    
const Button: React.FC<ButtonProps> = ({
    intent,
    size,
    className,
    children,
    isIcon,
    disabled,
    rightIcon,
    ...props
}) => {
  return (
    <button className={button({ intent, size, class: className })} disabled={disabled} {...props}>
      {children}
      {isIcon && <span className={cn("ml-2 inline-flex shrink-0 self-center")}>{rightIcon}</span>}
    </button>
  );
};
export default Button;    