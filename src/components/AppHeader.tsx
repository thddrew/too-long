import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const ListItem = forwardRef<
  HTMLLIElement,
  {
    title: string;
    description: string;
    href: string;
  }
>(({ title, description, href }, ref) => (
  <li ref={ref}>
    <NavigationMenuLink
      className={cn(
        navigationMenuTriggerStyle(),
        "block h-auto text-left space-y-1"
      )}
      asChild
    >
      <Link to={href}>
        <p className="font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-snug">
          {description}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
));

ListItem.displayName = "ListItem";

export const AppHeader = () => {
  return (
    <NavigationMenu className="sticky top-0 left-1/2 py-4 -translate-x-1/2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            asChild
          >
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent className="p-4 min-w-[75px] text-center">
            <ul>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "block h-auto text-left space-y-1"
                )}
                asChild
              >
                <ListItem
                  title="Link Shortener"
                  description="A simple link shortener."
                  href="/link-shortener"
                />
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
