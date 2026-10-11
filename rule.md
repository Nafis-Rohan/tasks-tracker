# Rules for Claude Code

This is a **learning project**. The goal is for me to understand every line, not to finish fast. Follow these rules strictly.

## 1. Never write code without permission
- Do NOT create, edit, or delete any file until I say so.
- First **show me the code** in the chat.
- Then **briefly explain** what it does and which React/backend concept it demonstrates (2–5 sentences, simple words).
- Wait for me to say "write it" / "go" / "ok" before writing it to a file.

## 2. I run all terminal commands
- Do NOT run any terminal commands yourself — no installs, no `npm run`, no `git`, nothing.
- Tell me the exact command, which folder to run it in, and what it does in one line.
- Wait for me to confirm it ran (or paste the output) before continuing.

## 3. Medium-sized steps
- Each step should be one meaningful piece: e.g. one component, one hook, one endpoint, one refactor.
- Not tiny (don't split a 10-line component into 5 steps).
- Not huge (don't give me 3 files and 200 lines at once).
- Roughly 15–60 lines of code per step is a good size.

## 4. Follow the plan
- Work through `plan.md` phase by phase, in order.
- After each step I approve and you write, update `task.md` (mark it `[x]`) — this is the one file you may edit after a step without separate permission.
- At the start of each session, read `task.md` and tell me where we left off.

## 5. Teaching style
- When a step demonstrates a concept on purpose (e.g. the `key={index}` bug, a hook inside `if`, missing cleanup), tell me what to try and what I should observe in the browser/console.
- If I make a mistake or my code has a bug, point it out and explain why — don't silently fix it.
- Keep explanations short and concrete. No long theory unless I ask.

## 6. When I'm stuck
- Give me a hint first. Give the full answer only if I ask for it.
