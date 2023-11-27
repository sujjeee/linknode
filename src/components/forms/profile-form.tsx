'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useData } from '@/lib/context/link-context';

type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export default function ProfileForm() {
  const { data, updateProfileInfo } = useData();

  const handleInputChange = (event: InputChangeEvent) => {
    const { name, value } = event.target;
    updateProfileInfo(name, value);
  };

  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Profile Information</CardTitle>
        <CardDescription>
          Enter your profile or title information here.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2 md:grid-cols-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="n"
              type="text"
              placeholder="John Doe"
              value={data.n}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="Profile-url">Profile Url</Label>
            <Input
              id="Profile-url"
              name="i"
              type="url"
              placeholder="https://example.com"
              value={data.i}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">About yourself</Label>
          <Textarea
            id="description"
            name="d"
            placeholder="type something here..."
            value={data.d}
            onChange={handleInputChange}
          />
        </div>
      </CardContent>
    </Card>
  );
}
