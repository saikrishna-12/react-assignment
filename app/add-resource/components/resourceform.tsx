'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";

const resourceSchema = z.object({
  name: z.string().min(1, {message:'Name is required'}),
  link: z.string().url('Invalid URL'),
  description: z.string().min(1, 'Description is required'),
  image: z.instanceof(File).optional(),
});

type ResourceFormData = z.infer<typeof resourceSchema>;

export default function Resourceform() {
  const { register, handleSubmit, formState: { errors } } = useForm<ResourceFormData>({
    resolver: zodResolver(resourceSchema),
  });
  const form = useForm<z.infer<typeof resourceSchema>>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
        name: "",
        link: "",
        description: "",
        
    },
  })

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  function onSubmit(values: z.infer<typeof resourceSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert("submited")
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="container max-w-[320px] flex flex-col">
      <h2 className="text-center font-rubik text-[32px] text-[#171F46]">Add a Resource</h2>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
        name="name"
        control={form.control}
        render={({ field }) => (
            <FormItem className="py-4">
                 <FormLabel className="block text-[12px] font-semibold font-sans text-[#7E858E]">NAME</FormLabel>
                <FormControl className="m-0 px-2 h-auto">
                    <Input className="border outline-none"
                        placeholder="Name"
                        {...field}
                    />
                </FormControl>
            </FormItem>
        )}
    />
         
        <FormField
        name="link"
        control={form.control}
        render={({ field }) => (
            <FormItem className="my-6">
                 <FormLabel className="block text-[12px] font-semibold font-sans text-[#7E858E]">LINK</FormLabel>
                <FormControl className="m-0 px-2 h-auto">
                    <Input className="border outline-none"
                        type='url'
                        {...field}
                    />
                </FormControl>
            </FormItem>
        )}
    />
          
          {errors.link && <p className="text-red-500 text-sm">{errors.link.message}</p>}
        

        
        <FormField
        name="description"
        
        render={({ field }) => (
            <FormItem className="py-4">
                 <FormLabel className="block text-[12px] font-semibold font-sans text-[#7E858E]">DESCRIPTION</FormLabel>
                <FormControl className="m-0 px-2 h-auto">
                <textarea
            placeholder="Ex. Building a new connectivity platform for the team"
            {...field}
            className="mt-1 block w-full text-[14px] p-2 font-sans border border-gray-300 rounded-sm shadow-sm"
          />
                </FormControl>
            </FormItem>
        )}
    />
         
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        

        <div className="py-4 flex items-center">
          {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 w-12 h-12 bg-white rounded-sm border-2 object-cover" />}
          {/* <FormField
        name="image"
        control={form.control}
        render={({ field }) => (
            <FormItem className="">
                 <FormLabel htmlFor="imageupload" className="flex items-center px-2 font-sans cursor-pointer h-auto text-[14px] text-[#7E858E]">
                 <Image alt="upload" height={14} width={16} src="/upload.png" />
            <p className="px-2 text-nowrap">Change photo</p>
                 </FormLabel>
                <FormControl className="m-0 px-2 h-auto">
                    <Input className="mt-1 w-full hidden z-[-1] p-2"
                        type='file'
                        id="imageupload"
                        {...field}
                    />
                </FormControl>
            </FormItem>
        )}
    /> */}
          <label htmlFor="imageupload" className="flex items-center px-2 font-sans cursor-pointer h-auto text-[14px] text-[#7E858E]">
            <Image alt="upload" height={14} width={16} src="/upload.png" />
            <p className="px-2 text-nowrap">Change photo</p>
          </label>
          <input
            {...register('image')}
            type="file"
            id="imageupload"
            accept="image/*"
            className="mt-1 w-full z-[-1] p-2"
            onChange={handleImageChange}
          />
        </div>

        
          <Button className="mt-2 px-4 py-2 bg-[#0B69FF] hover:bg-primary text-[14px] text-white font-sans rounded-md shadow-sm">
            CREATE
          </Button>
        
      </form>
      </Form>
    </div>
  );
}
