import { z } from "zod";
import { List } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpdateListOrder } from "./shema";

export type InputType = z.infer<typeof UpdateListOrder>;
export type ReturnType = ActionState<InputType,List[]>;