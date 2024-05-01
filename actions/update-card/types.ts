import { z } from "zod";
import { Card } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpadateCard } from "./shema";

export type InputType = z.infer<typeof UpadateCard>;
export type ReturnType = ActionState<InputType,Card>;