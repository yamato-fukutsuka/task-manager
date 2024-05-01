import Image from "next/image"
import Link from "next/link"
import { Open_Sans } from "next/font/google"

import {cn} from "@/lib/utils"

const headingFont = Open_Sans({
    subsets: ['latin'],
    weight: ['300','400','500','600','700','800'],
  });

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition
            items-center gap-x-2 hidden md:flex">
                <Image
                    src = "/logo.svg"
                    alt="Logo"
                    height={30}
                    width={30}
                />
                <p className={cn(
                    "text-lg text-neutral-700 pb-1",
                    headingFont.className
                )}>
                    Taskify
                </p>
            </div>
        </Link>
    )
}