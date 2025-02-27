"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useUploadThing } from "@/lib/uploadthing";
import { isBase64Image } from "@/lib/utils";

import { UserValidation } from "@/lib/validations/user";
import { updateUser } from "@/lib/actions/user.actions";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { startUpload } = useUploadThing("media");

  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image ? user.image : "",
      name: user?.name ? user.name : "",
      username: user?.username ? user.username : "",
      bio: user?.bio ? user.bio : "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    toast.loading("Uploading your profile details...", {
      toastId: "uploading-profile",
      autoClose: false,
    });
    const blob = values.profile_photo;

    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      const imgRes = await startUpload(files);
if (imgRes && imgRes[0] && 'fileUrl' in imgRes[0]) {
  values.profile_photo = imgRes[0].fileUrl as string;
}
  }

    await updateUser({
      name: values.name,
path: pathname ?? "",
      username: values.username,
      userId: user.id,
      bio: values.bio,
      image: values.profile_photo,
    });

    if (pathname === "/profile/edit") {
      router.back();
      toast.dismiss("uploading-profile");
      toast.success('Profile updated successfully');
    } else {
      router.push("/feed");
      toast.dismiss("uploading-profile");
      toast.error('Error updating profile');
    }
  };

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };
      
    return (
        <Form {...form}>
        <form
          className='flex flex-col justify-start gap-10'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='profile_photo'
            render={({ field }) => (
              <FormItem className='flex items-center gap-4 text-green-600'>
                <FormLabel className='account-form_image-label'>
                  {field.value ? (
                    <Image
                      src={field.value}
                      alt='profile_icon'
                      width={96}
                      height={96}
                      priority
                      className='object-contain rounded-full'
                    />
                  ) : (
                    <Image
                      src='/assets/profile.svg'
                      alt='profile_icon'
                      width={24}
                      height={24}
                      className='object-contain'
                    />
                  )}
                </FormLabel>
                <FormControl className='flex-1 text-green-600 text-base-semibold'>
                  <Input
                    type='file'
                    accept='image/*'
                    placeholder='Add profile photo'
                    className='account-form_image-input'
                    onChange={(e) => handleImage(e, field.onChange)}
                  />
                </FormControl> 
                <FormMessage/>
              </FormItem>
            )}
          />
          
          <FormField 
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='flex flex-col w-full gap-3 text-green-600'>
                <FormLabel className='text-green-600 text-base-semibold'>
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    className='account-form_input no-focus'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className='flex flex-col w-full gap-3 text-green-600'>
                <FormLabel className='text-green-600 text-base-semibold'>
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    className='account-form_input no-focus'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name='bio'
            render={({ field }) => (
              <FormItem className='flex flex-col w-full gap-3 text-green-600'>
                <FormLabel className='text-green-600 text-base-semibold'>
                  Bio
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={10}
                    className='account-form_input no-focus'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <Button type='submit' className='bg-green-600'>
            {btnTitle}
          </Button>
          <ToastContainer theme="dark" />
        </form>
      </Form>
  );
};

export default AccountProfile;