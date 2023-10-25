import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "./ui/use-toast";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useShortenLink, useShortenLinkSchema } from "@/lib/useShortenLink";

const FormSchema = z.object({
  link: useShortenLinkSchema,
});

type FormSchemaType = z.infer<typeof FormSchema>;

export const LinkShortener = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      link: "",
    },
  });
  const { data, isFetching, refetch } = useShortenLink(form.watch("link"));

  const onSubmit = async () => {
    const parseResult = useShortenLinkSchema.safeParse(form.getValues("link"));

    if (!parseResult.success) {
      throw parseResult.error.message;
    }

    await refetch();

    if (data?.ok) {
      toast({
        title: "Success",
        description: (
          <span>
            Link shortened:{" "}
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
              href={data.result.full_short_link}
            >
              {data.result.short_link}
            </a>
          </span>
        ),
      });
    } else {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    }
  };

  return (
    <>
      <div className="max-w-2xl py-4 text-center m-auto flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Link Shortener</h1>
      </div>
      <div className="max-w-md m-auto">
        <Form {...form}>
          {/* Possible workaround; this is a lib bug https://github.com/orgs/react-hook-form/discussions/8020 */}
          {/* <form onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}> */}
          <form
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2"
          >
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Link"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is the link to shorten.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isFetching}
            >
              Shorten
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};
