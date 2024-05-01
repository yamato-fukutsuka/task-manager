import { z } from "zod";
import { List } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CopyList } from "./shema";

export type InputType = z.infer<typeof CopyList>;
export type ReturnType = ActionState<InputType,List>;