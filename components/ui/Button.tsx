import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, Ref } from "react";
import type { Route } from "next";
import Link from "next/link";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "ghost" | "outline" | "gradient";
type ButtonSize = "xs" | "sm" | "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
  className?: string;
};

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: Route;
  };

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseStyles =
  "inline-flex items-center justify-center rounded-xl font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60";

const sizeStyles: Record<ButtonSize, string> = {
  xs: "px-3 py-1 text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base"
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-gradient-to-r from-sky-500 via-fuchsia-500 to-violet-500 text-white shadow-glow hover:brightness-110",
  ghost: "bg-white/5 text-white hover:bg-white/10",
  outline: "border border-white/20 bg-transparent text-white hover:border-white/40",
  gradient: "bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white shadow-lg shadow-fuchsia-500/30 hover:opacity-95"
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, forwardedRef) => {
  const { variant = "primary", size = "md", className, children } = props;
    const combinedClassName = clsx(baseStyles, sizeStyles[size], variantStyles[variant], className);

    if ("href" in props && props.href) {
      const { href, ...rest } = props;
      return (
        <Link ref={forwardedRef as Ref<HTMLAnchorElement>} href={href} className={combinedClassName} {...rest}>
          {children}
        </Link>
      );
    }

    const { type = "button", ...rest } = props;
    return (
      <button ref={forwardedRef as Ref<HTMLButtonElement>} className={combinedClassName} type={type} {...rest}>
        {children}
      </button>
    );
  });

Button.displayName = "Button";
