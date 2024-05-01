import { z } from "zod";

export const UpdateCardOrder = z.object({
    items: z.array(
        z.object({
            id: z.string(),
            title: z.string(),
            order: z.number(),
            listId: z.string(), // listIdプロパティを追加
            createdAt: z.date(),
            updatedAt: z.date(),
        }),
    ),
    boardId: z.string(),
});