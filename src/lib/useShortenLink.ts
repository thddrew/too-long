import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

export const useShortenLinkSchema = z
  .string()
  .url("Please enter a valid URL")
  .optional();

type UseLinkShortenerProps = z.infer<typeof useShortenLinkSchema>;

interface ShortenLinkResponse {
  ok: boolean;
  result: {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
  };
}

const getShortLink = async (link: UseLinkShortenerProps) => {
  const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
  const res = await fetch(url);
  return res.json() as Promise<ShortenLinkResponse>;
};

export const useShortenLink = (link: UseLinkShortenerProps) =>
  useQuery({
    queryKey: ["link", link],
    queryFn: () => getShortLink(link),
    enabled: false,
  });
