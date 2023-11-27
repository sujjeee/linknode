export interface DataProps {
  i: string;
  n: string;
  d: string;
  f: string;
  t: string;
  ig: string;
  tg: string;
  e: string;
  y: string;
  gh: string;
  l: string;
  w: string;
  bg: string;
  ls: ExtraLinkProps[];
}

export interface ExtraLinkProps {
  id: number;
  i: string;
  l: string;
  u: string;
}

export interface DisplayDataProps {
  acc: DataProps;
}

const socialLinksData = {
  f: 'facebook',
  t: 'twitter',
  ig: 'instagram',
  gh: 'github',
  tg: 'telegram',
  l: 'linkedin',
  e: 'email',
  w: 'whatsapp',
  y: 'youtube',
};

export interface SocialLinkProviderProps {
  name: string;
  icon: string;
  id: keyof typeof socialLinksData;
}

export interface ShortLinkProps {
  url: string;
  shortLink?: string;
  password?: string;
  authorization?: string;
  projectSlug?: string;
  domain?: string;
  rewrite?: boolean;
}

export interface APIResponse {
  id: string;
  domain: string;
  key: string;
  url: string;
  archived: boolean;
  expiresAt: string;
  password: string;
  proxy: boolean;
  title: string;
  description: string;
  image: string;
  rewrite: boolean;
  ios: string;
  android: string;
  geo: Record<string, unknown>;
  publicStats: boolean;
  tagId: string;
  comments: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  userId: string;
  projectId: string;
  clicks: number;
  lastClicked: string;
  createdAt: string;
  updatedAt: string;
}
