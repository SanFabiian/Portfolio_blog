import { type SchemaTypeDefinition } from "sanity";
import { projectSchema } from "./project";
import { postSchema } from "./post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema, postSchema],
};
