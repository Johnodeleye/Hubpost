'use client';
import React, { ChangeEvent, useState } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage } from 
"@/components/ui/form"
import { Textarea } from '../ui/textarea';
import {zodResolver} from '@hookform/resolvers/zod';
import {usePathname, useRouter} from 'next/navigation';
// import { updateUser } from '@/lib/actions/user.action';
import {ThreadValidation} from '@/lib/validations/thread';
import { createThread } from '@/lib/actions/thread.actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string
    };
    btnTitle: string;
}

function PostThread({ userId }: { userId: string }) {
    const router = useRouter();
    const pathname = usePathname();
    
      const form = useForm({
            resolver: zodResolver(ThreadValidation),
            defaultValues: {
              thread: '',
              accountId: userId,
          }
      })
  const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
    try {
      await createThread({
        text: values.thread,
        author: userId,
        communityId: null,
        path: pathname ?? '',
      });
      router.push('/feed');
      toast.success("Post uploaded successfully!"); // Display success toast
    } catch (error) {
      toast.error("Error uploading post!"); // Display error toast
    }
  };

    return (
        <Form {...form}>
        <form
          className='flex flex-col justify-start gap-10 mt-10'
          onSubmit={form.handleSubmit(onSubmit)}
        >      
            <FormField 
            control={form.control}
            name='thread'
            render={({ field }) => (
              <FormItem className='flex flex-col w-full gap-3 text-green-600'>
                <FormLabel className='text-green-600 text-base-semibold'>
                  Content
                </FormLabel>
                <FormControl className='border border-dark-4 no-focus bg-dark-3 text-light-1'>
                  <Textarea
                    rows={15}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
                
          <Button type='submit' className='bg-green-600'>
            Post
          </Button>
          <ToastContainer theme="dark" />
        </form>
        </Form>
    );
}

export default PostThread;