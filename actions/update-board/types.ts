import { z } from "zod";
import { Board } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpadateBoard } from "./shema";

export type InputType = z.infer<typeof UpadateBoard>;
export type ReturnType = ActionState<InputType,Board>;