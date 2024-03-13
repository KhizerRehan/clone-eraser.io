import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTeams = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const results = await ctx.db
      .query("teams")
      .filter((q) => q.eq(q.field("createdBy"), args.email))
      .collect();
    return results;
  },
});

export const createTeam = mutation({
  args: {
    createdBy: v.string(),
    teamName: v.string(),
  },
  handler: async (ctx, args) => {
    console.log(args);
    const result = await ctx.db.insert("teams", args);
    return result;
  },
});
