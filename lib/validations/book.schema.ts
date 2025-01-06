import {z} from "zod"
import {enErrorMessage} from "../validations/message"
export const bookSchemaValidation = z.object({
    name: z.string({ required_error: enErrorMessage.REQUIRED}),
    number: z.number({required_error: enErrorMessage.REQUIRED})
})

export type bookSchema = z.infer<typeof bookSchemaValidation>