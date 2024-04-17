import * as z from "zod";

export const loginValidation = z.object({
    username:z.string({require:true,})
});
