---
title: Create a Reusable Link Component with Tailwind CSS and CVA
description: Learn how to build a versatile link component using Class Variance Authority (CVA) and Tailwind CSS. Increase your productivity and reduce repetitive code.
date: December 8, 2023
---

Links are the preferred way of navigating or redirecting on the web. There are two types of links: internal links for site navigation and external links for redirecting users to different sites. External links should open in new tabs for a better user experience. It can be annoying to check for each external link and then add attributes to open external links in new tabs. Additionally, there are different variants of links, such as underlined or differently colored links. This component aims to solve these problems with one link component.

## ClassName utility function

```ts title="cn.ts"
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
```

This utility function will allow us to add TailwindCSS classes conditionally without causing any style conflicts. This is also one of the most useful utility function which got popular from [shadcn/ui](https://ui.shadcn.com).

## Define Variants

We will use [Class Variance Authority (CVA)](https://cva.style/docs) to define different variants for the link component. These variants will be TailwindCSS classes.

```tsx showLineNumbers title="Anchor.tsx" {4, 7, 10}
import { cva } from "class-variance-authority";

const AnchorStyles = cva(
  "inline-flex items-center gap-2 font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-7",
  {
    variants: {
      intent: {
        highlight: "hover:text-blue-10",
      },
      underline: {
        true: "underline decoration-gray-7 underline-offset-2  hover:decoration-gray-8",
      },
    },
    defaultVariants: {
      intent: "highlight",
    },
  },
);
```

First we need to add some default styles (4) that we need in every variant, these can be styles for focus ring, outline, etc... Then we will pass options, which will include a variants object. We are defining two variants intent (7) and underline (10) you can add as many variants as you want. At last, we are defining default variants. Now we will create a link component that takes all the variants and apply their classes to `a` element.

## Create the Link Component

```tsx showLineNumbers title="Anchor.tsx"
import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "cn";

interface AnchorProps
  extends ComponentPropsWithoutRef<"a">,
    VariantProps<typeof AnchorStyles> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Anchor({
  href,
  children,
  className,
  intent,
  underline,
  ...rest
}: AnchorProps) {
  return (
    <Link
      className={cn(AnchorStyles({ intent, underline }), className)}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}
```

<!-- <Callout emoji="💡">
  With `ComponentProps` type, we can extract the props of any HTML element.
</Callout> -->

We are passing three props to this component, href, children and className. `className` will take all the variants and any other classes. We are using the `cn` utility function to add classes without any CSS conflicts.

We have successfully made a reusable link component. But we still have to add attributes for different behavior for external and internal links. Let's solve that issue now.

## Conditionally adding Attributes for Different Behavior

As we discussed earlier, we want external links to open in new tab for better user experience(UX). We can do that with very little code. We just need to add a boolean type variable and conditionally add `rel` and `target` attributes.

```tsx showLineNumbers title="Anchor.tsx" {9,15,16}
export default function Anchor({
  href,
  children,
  className,
  intent,
  underline,
  ...rest
}: AnchorProps) {
  const isExternalLink = href.startsWith("https") || href.startsWith("mailto");

  return (
    <Link
      className={cn(AnchorStyles({ intent, underline }), className)}
      href={href}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      target={isExternalLink ? "_blank" : undefined}
      {...rest}
    >
      {children}
    </Link>
  );
}
```

We check if `href` is starting with a `https` or `mailto` protocol. This is a simple check, and you can find more robust methods using the hostname, protocol scheme, etc...

You can make many reusable components like this and increase your productivity while reducing repetitive code. If you have any suggestion, you can share it with me on [X (Twitter)](https://twitter.com/SameerJadav_) I am looking for developer friends.
