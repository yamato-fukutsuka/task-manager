"use client";

import { Dialog , DialogContent} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import Image  from "next/image";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { toast } from "sonner";

export const ProModal = () => {

    const proModal = useProModal();

    const { execute , isLoading } = useAction(stripeRedirect,{
        onSuccess:(data) => {
            window.location.href = data;
        },
        onError: (error) => {
            toast.error(error);
        }
    });

    const onClick = () => {
        execute({});
    }

    return(
        <Dialog
            open={proModal.isOpen}
            onOpenChange={proModal.onClose}
        >
        <DialogContent className="max-w-md p-0 overflow-hidden">
            <div className="aspect-video relative flex items-center justify-center">
                <Image
                    src="/yamato.svg"
                    alt="Hero"
                    className="object-cover"
                    fill
                />
            </div>
            <div className="text-neutral-700 mx-auto space-y-6 p-6">
                <h2 className="font-semibold text-xl">
                  有料版にアップデートする  
                </h2>
                <p className="text-xs font-semibold text-neutral-600">
                    一番良いやプランを選ぶ
                </p>
                <div className="pl-3">
                    <ul className="text-sm list-desc">
                        <li>無制限のボード</li>
                        <li>先進的なクリックリスト</li>
                        <li>認証とセキュリティ</li>
                        <li>And more!</li>
                    </ul>
                </div>
                <Button
                    disabled={isLoading}
                    onClick={onClick}
                    className="w-full"
                    variant="primary"
                >
                    Upgrade
                </Button>
            </div>
        </DialogContent>
        </Dialog>
    );
}