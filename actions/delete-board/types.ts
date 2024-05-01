import { z } from "zod";
import { Board } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { DeleteBoard } from "./shema";

export type InputType = z.infer<typeof DeleteBoard>;
export type ReturnType = ActionState<InputType,Board>;