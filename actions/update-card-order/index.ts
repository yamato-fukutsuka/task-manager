"use server"

import { auth } from "@clerk/nextjs/server";
import { UpdateCardOrder } from "./shema";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId, orgId} = auth();

    if(!userId || !orgId){
        return {
            error: "Unauthorized",
        };
    }

    const { items,  boardId} = data;

    let updateCards;

    try {
      const transaction = items.map((card) =>
        db.card.update({
            where:{
                id:card.id,
                list:{
                    board:{
                        orgId,
                    },
                }
            },
            data:{
                order:card.order,
                listId:card.listId,
            },
        }),
      );

      updateCards = await db.$transaction(transaction);
    } catch(error) {
        return{
        error: "Failed to reorder."
        }
    }

    revalidatePath(`/board/${boardId}`);
    return { data: updateCards};
};

export const updateCardOrder = createSafeAction(UpdateCardOrder,handler);

