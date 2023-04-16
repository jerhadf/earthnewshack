// schema for search index

import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
  messages: defineTable({
    author: s.string(),
    body: s.string(),
  }).searchIndex("search_body", {
    searchField: "body",
  }),
});