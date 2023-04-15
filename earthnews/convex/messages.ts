import { query, mutation } from "./_generated/server";

export const list = query(async ({ db }) => {
  return await db.query("messages").take(100);
});

export const send = mutation(async ({ db }, body) => {
  await db.insert("messages", {
    body,
    author: "user",
  });
  const botMessageId = await db.insert("messages", {
    author: "assistant",
  });
});