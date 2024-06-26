import {Medal} from "lucide-react"
import {Jersey_25, Poppins} from "next/font/google";
import {Button} from "@/components/ui/button"
import Link from "next/link";

import {cn} from "@/lib/utils";

const headingFont = Jersey_25({
    subsets: ['latin'],
    weight: ['400'],
  });

const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
        <div className={cn(
            "flex items-center justify-center flex-col",
            headingFont.className,
            )}>
            <div className="mb-4 flex items-center border shadow-sm p-4
            bg-amber-100 text-amber-700 rounded-full uppercase">
                <Medal className="h-6 w-6 mr-2"/>
                Trelloのようなアプリです。
            </div>
            <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                タスクマネジメントツールです！
            </h1>
            <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
                by Yamato Fukutsuka
            </div>
        </div>
        <div className={cn(
            "text-sm md:text-xl text text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
            textFont.className,
            )}>
            このアプリには、ログイン機能や決済機能が実装してあります。Googleアカウントでのログインが必要ですが、
            詳しくアプリを見たい方は使用してみてください。
            なお、デザインスキルはないためデザインの問題については御容赦ください。
        </div>
        <Button className="mt-6" size="lg" asChild>
            <Link href="/sign-up">
                無料で使う
            </Link>
        </Button>
    </div>
  )
}

export default MarketingPage