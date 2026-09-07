# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a personal coursework workspace for ACA's "AI for PMs" course. The owner is a product
manager, not a software engineer — favor plain-language explanations over engineering jargon, and
don't assume familiarity with dev tooling (git, terminals, build systems) unless it's been
established in the conversation.

There is no build/lint/test tooling because this isn't a software project — it's a collection of
course exercises, skills, and product artifacts.

## Structure

- `projects/` — hands-on exercises and build projects from course modules, one subfolder per
  project.
- `skills/` — reusable Claude skills built during the course.
- `products/` — more polished, product-shaped outputs (prototypes, specs, demos).

Each subfolder should have its own README describing what it is and its status. Update this file
as the workspace grows — e.g. once real tooling (a specific framework, a build step) is
introduced for a given project.
