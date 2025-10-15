"use client";

import { useEffect, useMemo, useState } from "react";
import { Sparkles, Wand2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { generateContentIdeas, scoreContentIdea } from "@/lib/contentGenerator";

const platforms = ["LinkedIn", "Instagram", "TikTok", "YouTube", "X", "Pinterest"];
const personas = ["Marketing Ops Lead", "Creator Program Manager", "Demand Gen Director", "Customer Success Lead"];
const objectives = ["scale product adoption", "unlock pipeline sourced", "activate community", "launch new product"];
const differentiators = ["manual reporting", "slow approvals", "creative fatigue", "unclear attribution"];

export function IdeaGenerator() {
  const [platform, setPlatform] = useState(platforms[0]);
  const [persona, setPersona] = useState(personas[0]);
  const [objective, setObjective] = useState(objectives[0]);
  const [differentiator, setDifferentiator] = useState(differentiators[0]);
  const [refreshIndex, setRefreshIndex] = useState(0);
  const [idea, setIdea] = useState(() =>
    generateContentIdeas({
      platform,
      persona,
      objective,
      differentiateBy: differentiator
    })
  );

  useEffect(() => {
    setIdea(
      generateContentIdeas({
        platform,
        persona,
        objective,
        differentiateBy: differentiator
      })
    );
  }, [platform, persona, objective, differentiator, refreshIndex]);

  const score = useMemo(() => scoreContentIdea(idea), [idea]);

  return (
    <Card accent="none" className="border-white/10">
      <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-fuchsia-300" />
            <div>
              <h3 className="text-lg font-semibold text-white">Content Idea Generator</h3>
              <p className="text-xs text-slate-400">
                Blend strategic inputs to produce platform-native narratives in seconds.
              </p>
            </div>
          </div>

          <div className="grid gap-4 text-sm text-slate-200 md:grid-cols-2">
            <InputGroup label="Platform">
              <select
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
                value={platform}
                onChange={(event) => setPlatform(event.target.value)}
              >
                {platforms.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </InputGroup>
            <InputGroup label="Persona">
              <select
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
                value={persona}
                onChange={(event) => setPersona(event.target.value)}
              >
                {personas.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </InputGroup>
            <InputGroup label="Objective">
              <select
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
                value={objective}
                onChange={(event) => setObjective(event.target.value)}
              >
                {objectives.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </InputGroup>
            <InputGroup label="Differentiator">
              <select
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
                value={differentiator}
                onChange={(event) => setDifferentiator(event.target.value)}
              >
                {differentiators.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </InputGroup>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="gradient"
              size="sm"
              onClick={() => setRefreshIndex((value) => value + 1)}
            >
              Spin new concept
              <Wand2 className="ml-2 h-4 w-4" />
            </Button>
            <Badge tone="success">Resonance score: {score}/100</Badge>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/0 p-6 text-sm text-slate-200">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Hook</p>
            <p className="mt-2 text-base font-semibold text-white">{idea.hook}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Narrative</p>
            <p className="mt-2 text-sm">{idea.narrative}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Call to Action</p>
            <p className="mt-2 text-sm">{idea.cta}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <Badge tone="info">Tone: {idea.tone}</Badge>
            {idea.recommendedTags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-slate-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function InputGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-xs text-slate-400">
      {label}
      {children}
    </label>
  );
}
