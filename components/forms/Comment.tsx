'use client'; //whenever u are working with form u will need useclient 
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage } from 
"@/components/ui/form"
import { Input } from "@/components/ui/input"
import {zodResolver} from '@hookform/resolvers/zod';
import {usePathname, useRouter} from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { updateUser } from '@/lib/actions/user.action';
import {CommentValidation} from '@/lib/validations/thread';
import Image from 'next/image';
import { addCommentToThread } from '@/lib/actions/thread.actions';

interface Props{
    threadId: string;
    currentUserImg: string;
    currentUserId: string;
    currentUserName: string;
}

const Comment = ({ threadId, currentUserImg, currentUserId, currentUserName}: Props) => {
    
        const router = useRouter();
        const pathname = usePathname();
        
          const form = useForm({
                resolver: zodResolver(CommentValidation),
                defaultValues: {
                  thread: ''
              }
          })
          const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
            if (pathname) {
              await addCommentToThread(threadId, values.thread, JSON.parse(currentUserId), pathname);
              form.reset();
              toast.success("Comment added successfully!");
            } else {
              console.error('pathname is null');
             
              // Handle the case where pathname is null
            }
          }
    
    return (
        <Form {...form}>
        <form
          className='comment-form'
          onSubmit={form.handleSubmit(onSubmit)}
        >      
         <FormField 
            control={form.control}
            name='thread'
            render={({ field }) => (
              <FormItem className='flex items-center w-full gap-3'>
                <FormLabel>
                  <Image
                  src={currentUserImg}
                  alt='profile image'
                  width={48}
                  height={48}
                  className='object-cover rounded-full'
                  />
                </FormLabel>
                <FormControl className='bg-transparent border-none'>
                <Input
                  type='text'
                  placeholder={`Comment as ${currentUserName}`}
                  className='outline-none no-focus text-light-1'
                  {...field}
                />
                  
                </FormControl>
              </FormItem>
            )}
          />
                
          <Button type='submit' className='comment-form_btn'>
            Comment
          </Button>
          <ToastContainer theme="dark" />
        </form>
        </Form>
    )
}

export default Comment;


