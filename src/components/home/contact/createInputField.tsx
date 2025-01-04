import {FormField, FormControl, FormItem, FormLabel} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";

interface FormStrings extends React.HTMLAttributes<HTMLInputElement> {
    control: any;
    zodProp: string;
    label?: string;
    placeholder?: string
}

export const CreateInputField = React.forwardRef<HTMLInputElement, FormStrings>(
    ({className, control, zodProp, label, placeholder}, ref) => {
        return(<FormField
        control={control}
        name={zodProp}
        render={({field}) => (
            <FormItem>
                <FormControl>
                    <Input placeholder={placeholder} className={className} {...field}/>
                </FormControl>
            </FormItem>
            )
        }
        />)
    }
)

