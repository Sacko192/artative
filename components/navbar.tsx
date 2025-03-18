"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Notre Mission",
    href: "/",
    description:
      "Œuvrer pour la promotion de l’art et soutenir les artistes tout en contribuant à des causes solidaires.",
  },
  {
    title: "Nos Valeurs",
    href: "/",
    description:
      "Engagement, authenticité et impact social au cœur de notre démarche artistique.",
  },
  {
    title: "Notre Histoire ",
    href: "/",
    description:
      "De notre création à aujourd’hui, découvrez notre parcours et notre vision pour l’avenir.",
  },
  {
    title: "Nos Artistes",
    href: "/",
    description: "Une communauté de talents divers, partageant leur passion et leur créativité à travers notre plateforme.",
  },
  {
    title: "Engagement Solidaire ",
    href: "/",
    description:
      "Chaque vente soutient des associations caritatives, transformant l’art en vecteur de changement.",
  },
]

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Accueil</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-cyan-700 text-white">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium hover:text-cyan-200">
                      <span className="text-xl ">Art</span>ative
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Nous reversons intégralement les recettes de chaque œuvre vendue à des associations caritatives, soutenant ainsi les plus vulnérables et favorisant un changement social positif.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem className="hover:text-cyan-200" href="/" title="Galerie">
              Découvrez notre galerie, un espace dédié à l&apos;expression artistique où chaque œuvre raconte une histoire unique et inspire l&apos;émotion.
              </ListItem>
              <ListItem className="hover:text-cyan-200"  href="/" title="Artistes">
                Découvrez nos artistes, des talents passionnés qui donnent vie à des œuvres uniques et inspirantes.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>A propos</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-cyan-700 text-white">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
