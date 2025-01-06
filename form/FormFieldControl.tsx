'use client'

import React, {ReactNode} from 'react'
import { Controller } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type InputBase = React.HTMLAttributes<HTMLElement>;

interface FormFieldControlProps extends InputBase {
    className?: string;
    name: string;
    placeholder?: string;
    rule?: number | string | any;
    type: "text" | string;
    control?: any;
    children?: ReactNode;
    errors: any;
    onChange?: (e: any) => void
}

export const FormFieldControl: React.FC<FormFieldControlProps> = ({
    className,
    name,
    placeholder,
    rule,
    type,
    control,
    children,
    errors,
    onChange,
    ...props
}) => {
    const renderError = () => {
        return errors[name]?.message !== undefined ? 'border-red-500 focus:border-red-500 focus-visible:ring-offset-2 focus-visible:ring-2' : ''
    }

    return (
    <div>
        <Controller
        control={control}
        name={name}
        rules={rule}
        render={({field}) => (
            <Input placeholder={placeholder} {...field} type={type} className={cn(className, `${renderError()}`)}/>
        )}
        />
         <span className="text-red-500 mt-1.5">
                {errors[name]?.message}
            </span>
    </div>)
}