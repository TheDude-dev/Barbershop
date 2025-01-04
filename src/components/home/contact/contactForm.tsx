"use client"

import {Schema, z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { FormControl, FormField, FormItem, FormLabel, Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { bookFormData, bookFormSchema } from '../../../../lib/validations/book.schema'
import { CreateInputField } from './createInputField'

interface IProps {
    submitButtonLabel: string;
    defaultValues?: bookFormData;
    onSuccessFullValidation: (data: bookFormData) => void
}

export const ContactForm = ({submitButtonLabel, defaultValues, onSuccessFullValidation} : IProps) => {
   
    const form = useForm<bookFormData>({
        resolver: zodResolver(bookFormSchema),
        defaultValues
    })

    const onSubmit = (data: z.infer<typeof bookFormSchema>) => {
        onSuccessFullValidation(data)
    }

    return(<div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
               <div className='mb-10'>
                <CreateInputField
                control={form.control}
                zodProp={"name"}
                placeholder={"name"}
                className='broder-2 border-golden'
                />
               </div>
               <div className='mb-10'>
                <CreateInputField
                control={form.control}
                zodProp={"number"}
                placeholder={"number"}
                className='broder-2 border-golden'
                />
               </div>
               <div className="border-2 border-golden mt-10">
                        <Button type="submit" className='bg-popular hover:bg-golden'>{submitButtonLabel}</Button>
                    </div>
            </form>
        </Form>
    </div>)
}

