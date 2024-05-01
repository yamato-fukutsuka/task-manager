import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button"

export const Footer = () => {
    return (
        <div className="fixed button-0 w-full h-14 p-4 border-t bg-slate-100">
            <div className="md:max-w-screen-2xl mx-auto flex
            items-center w-full justify-between">
            <Logo/>
            <div className="space-x-4 md:block md:w-auto flex items-center 
            justify-between w-full">
                <Button size="sm" variant="ghost">
                    Pricacy Policy
                </Button>
                <Button size="sm" variant="ghost">
                        Terms of Service
                </Button>
            </div>
            </div>
        </div>
    );
};