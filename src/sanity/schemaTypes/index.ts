import { type SchemaTypeDefinition } from "sanity";
import { projectSchema } from "./project";
import { postSchema } from "./post";
import { tagSchema } from "./tag";
import { categorySchema } from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categorySchema, tagSchema, projectSchema, postSchema],
};