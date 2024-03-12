import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getAllUsers = query({
  handler: async (ctx, _) => {
    const results = await ctx.db.query("user").collect();
    return results;
  },
});

export const getUser = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const results = await ctx.db
      .query("user")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();
    return results;
  },
});

export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    image: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("user", args);
  },
});
