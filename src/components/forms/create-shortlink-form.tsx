'use client';

import React from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { env } from '@/env.mjs';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useData } from '@/lib/context/link-context';
import { zodResolver } from '@hookform/resolvers/zod';
import { useShortener } from '@/lib/context/shortlink-context';
import createShortLink from '@/app/_actions/shortlink/create';
import { PasswordInput } from '@/components/ui/password-input';
import { ShortLinkInput } from '@/components/ui/shortlink-input';
import { useAPIResponse } from '@/lib/context/api-response-context';
import { AuthorizationInput } from '@/components/ui/authorization-input';
import {
  catchError,
  checkCustomCredentials,
  cn,
  encodeData,
} from '@/lib/utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CreateShortlinkForm = ({}) => {
  const { data } = useData();
  const { shortUrlInfo, setShortUrlInfo } = useShortener();
  const isValid = checkCustomCredentials(shortUrlInfo);
  const [isLoading, setIsLoading] = React.useState(false);
  const { setSomeResponseInfo, setAuthKey, setProjectSlug, setShortedLink } =
    useAPIResponse();

  const domainRegex =
    /^(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+)([a-zA-Z0-9]{2,63}|[a-zA-Z0-9-]{2,63}[a-zA-Z0-9])$/;

  const shortlinkSchema = z.object({
    authorization: z
      .string()
      .optional()
      .refine(
        (value) => {
          if (!isValid) {
            return value !== undefined && value !== '';
          } else {
            return true;
          }
        },
        {
          message: 'Authorization key is required',
        },
      ),
    projectSlug: z
      .string()
      .optional()
      .refine(
        (value) => {
          if (!isValid) {
            return value !== undefined && value !== '';
          } else {
            return true;
          }
        },
        {
          message: 'Project slug is required',
        },
      ),
    domain: z
      .string()
      .optional()
      .refine(
        (value) => {
          if (!isValid) {
            return (
              value !== undefined && value !== '' && domainRegex.test(value)
            );
          }
          return true;
        },
        {
          message: 'Domain is required',
        },
      ),
    url: z.string().min(10, {
      message: 'Invalid destination url',
    }),
    shortLink: z.string().optional(),
    password: z.string().optional(),
    rewrite: z.boolean().default(false),
  });

  const form = useForm<Inputs>({
    resolver: zodResolver(shortlinkSchema),
    defaultValues: {
      authorization: shortUrlInfo.authorization,
      projectSlug: shortUrlInfo.projectSlug,
      domain: shortUrlInfo.domain,
      url: shortUrlInfo.url,
      shortLink: shortUrlInfo.shortLink,
      password: shortUrlInfo.password,
      rewrite: shortUrlInfo.rewrite,
    },
  });

  type Inputs = z.infer<typeof shortlinkSchema>;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    form.setValue(name as keyof typeof shortUrlInfo, value);
    setShortUrlInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = `${window.location.origin}/1?data=${encodeData(data)}`;
    form.setValue('url', url);
    setShortUrlInfo((prevInfo) => ({
      ...prevInfo,
      url: url,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function handleGlobalState(name: string, value: string | undefined) {
    if (value !== '') {
      form.setValue(name as keyof typeof shortUrlInfo, value);
      return;
    }
    form.resetField(name as keyof typeof shortUrlInfo, { defaultValue: '' });
  }

  async function onSubmit(data: Inputs) {
    try {
      setIsLoading(true);
      const response = await createShortLink(data);

      if (!response) {
        toast.error('No response received');
        return;
      }

      if (response.error) {
        toast.error(response.error);
        return;
      }

      toast.success('Link created successfully!');

      setShortedLink(`https://${response.data?.domain}/${response.data?.key}`);
      setSomeResponseInfo(response.data);
      setAuthKey(data.authorization ?? env.DUB_DOT_CO_TOKEN);
      setProjectSlug(data.projectSlug ?? env.DUB_DOT_CO_TOKEN);
    } catch (error) {
      catchError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        className="grid gap-2"
      >
        <FormField
          control={form.control}
          name="authorization"
          render={({ field, formState }) => {
            const error = formState.errors.authorization;
            return (
              <FormItem className="space-y-0.5">
                <FormLabel>
                  Authorization key
                  {!isValid && <span className="text-destructive">*</span>}
                </FormLabel>
                <FormControl>
                  <AuthorizationInput
                    minLength={10}
                    className={cn('select-none', {
                      'border-destructive focus-visible:ring-destructive ':
                        error,
                    })}
                    placeholder={
                      error
                        ? (error.message as string)
                        : '9dY7sFgT2Rb4EaZpL1oQxUwC'
                    }
                    onGlobalChange={handleGlobalState}
                    {...{
                      ...field,
                      onChange: handleChange,
                    }}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="projectSlug"
          render={({ field, formState }) => {
            const error = formState.errors.projectSlug;
            return (
              <FormItem className="space-y-0.5">
                <FormLabel>
                  Project slug
                  {!isValid && <span className="text-destructive">*</span>}
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn('select-none', {
                      'border-destructive focus-visible:ring-destructive ':
                        error,
                    })}
                    placeholder={error ? (error.message as string) : 'biolinks'}
                    {...{
                      ...field,
                      value: shortUrlInfo.projectSlug,
                      onChange: handleChange,
                    }}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="domain"
          render={({ field, formState }) => {
            const error = formState.errors.domain;
            return (
              <FormItem className="space-y-0.5">
                <FormLabel>
                  Domain
                  {!isValid && <span className="text-destructive">*</span>}
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn('select-none', {
                      'border-destructive focus-visible:ring-destructive ':
                        error,
                    })}
                    placeholder={
                      error ? (error.message as string) : 'example.com'
                    }
                    {...{
                      ...field,
                      value: shortUrlInfo.domain,
                      onChange: handleChange,
                    }}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field, formState }) => {
            const error = formState.errors.url;
            return (
              <FormItem className="space-y-0.5">
                <FormLabel>
                  Destination URL
                  <span className=" text-destructive ">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn('select-none', {
                      'border-destructive focus-visible:ring-destructive':
                        error,
                    })}
                    placeholder={
                      error
                        ? (error.message as string)
                        : 'https://linknode.vercel.app/1?data=eylaikaksps...'
                    }
                    {...{
                      ...field,
                      value: shortUrlInfo.url,
                    }}
                    readOnly
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="shortLink"
          render={({ field, formState }) => {
            const error = formState.errors.shortLink;
            return (
              <FormItem className="space-y-0.5">
                <FormLabel>Short link</FormLabel>
                <FormControl>
                  <ShortLinkInput
                    className={cn('select-none', {
                      'border-destructive focus-visible:ring-destructive ':
                        error,
                    })}
                    placeholder={error ? (error.message as string) : 'mylinks'}
                    {...{
                      ...field,
                      value: shortUrlInfo.shortLink,
                      onChange: handleChange,
                    }}
                    onGlobalChange={handleGlobalState}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field, formState }) => {
            const error = formState.errors.password;
            return (
              <FormItem className="space-y-0.5">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    className={cn('select-none', {
                      'border-destructive focus-visible:ring-destructive ':
                        error,
                    })}
                    placeholder={error ? (error.message as string) : '*******'}
                    {...{
                      ...field,
                      value: shortUrlInfo.password,
                      onChange: handleChange,
                    }}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="rewrite"
          render={({ field, formState }) => {
            const error = formState.errors.rewrite;
            return (
              <FormItem className="space-y-0.5">
                <FormLabel>Link cloaking</FormLabel>
                <FormControl>
                  <Select
                    defaultValue={error ? error.message : 'false'}
                    onValueChange={(value) => field.onChange(value === 'true')}
                  >
                    <SelectTrigger id="link_cloaking">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="false">False</SelectItem>
                      <SelectItem value="true">True</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            );
          }}
        />
        <Button type="submit" disabled={isLoading} className="mt-2 w-full">
          {isLoading ? (
            <>
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
              Creating
            </>
          ) : (
            'Create short link'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CreateShortlinkForm;
