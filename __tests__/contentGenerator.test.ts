import { describe, expect, it } from "vitest";
import { generateContentIdeas, scoreContentIdea } from "@/lib/contentGenerator";

describe("content generator", () => {
  it("creates deterministic structure for ideas", () => {
    const idea = generateContentIdeas({
      platform: "LinkedIn",
      persona: "Marketing Ops Lead",
      objective: "increase pipeline",
      differentiateBy: "manual reporting"
    });

    expect(idea.platform).toBe("LinkedIn");
    expect(idea.hook.length).toBeGreaterThan(10);
    expect(idea.narrative.length).toBeGreaterThan(30);
    expect(Array.isArray(idea.recommendedTags)).toBe(true);
    expect(idea.recommendedTags.length).toBeGreaterThan(0);
    expect(new Set(idea.recommendedTags).size).toBe(idea.recommendedTags.length);
  });

  it("produces score within reasonable bounds", () => {
    const idea = generateContentIdeas({
      platform: "Instagram",
      persona: "Creator Program Manager",
      objective: "drive signups",
      differentiateBy: "creative fatigue"
    });

    const score = scoreContentIdea(idea);
    expect(score).toBeGreaterThanOrEqual(50);
    expect(score).toBeLessThanOrEqual(92);
  });
});
