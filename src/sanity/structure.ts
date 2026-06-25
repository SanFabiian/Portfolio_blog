import type { StructureResolver } from "sanity/structure";
import { client } from "./lib/client";

const SINGLETONS = ["about", "siteSettings"];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About")
        .id("about")
        .child(async () => {
          const doc = await client.fetch<{ _id: string } | null>(
            '*[_type == "about"][0]{ _id }'
          );
          return S.document()
            .schemaType("about")
            .documentId(doc?._id ?? "about");
        }),

      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(async () => {
          const doc = await client.fetch<{ _id: string } | null>(
            '*[_type == "siteSettings"][0]{ _id }'
          );
          return S.document()
            .schemaType("siteSettings")
            .documentId(doc?._id ?? "siteSettings");
        }),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) => !SINGLETONS.includes(item.getId() ?? "")
      ),
    ]);
