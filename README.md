# Productivity Tracker Dashboard

A self‑contained, browser‑only dashboard for planning work and visualising your output in real time.  
Open the HTML file in any modern browser—no build step, server, or database required.

## Key Features

### 1  Task Manager  
* **Priority & difficulty** – low / medium / high flags and an easy ↔ hard toggle.  
* **Time budgeting** – capture both _time allotted_ and _time spent_; edit in‑place at any time.  
* **Inline controls** – quick add, one‑click completion, tooltip with time stats, and unobtrusive edit / delete buttons.  
* **Local Storage persistence** – your list, completion state, and analytics survive reloads without a backend.

### 2  Interactive Analytics (Chart.js)  
* **Overall Performance** – stacked bars for tasks assigned by priority plus a trend line for tasks completed.  
* **Hours Worked** – compare hours allotted vs. hours actually logged, with an automatic delta indicator versus the previous period.  
* **Difficulty Completion** – easy‑vs‑hard completions plotted over time.  
* **Priority × Difficulty Doughnut** – dual‑ring chart summarising completions; live centre count updates as data change.  
* **Unified timeframe toggle** – switch all charts between _year_, _month_, _week_, and _day_ synchronously.

### 3  Activity Calendar  
* GitHub‑style heat‑map squares for an at‑a‑glance view of daily task throughput.  
* Toggle between **year view** and **month view**, with keyboard‑like arrow navigation and colour‑coded legend.  
* Hover tooltips reveal exact counts.

### 4  Weekly Review Modal  
* Prompt appears at week‑end to capture retrospectives; stores notes locally for future reference.

### 5  Polished UI / UX  
* Dark, minimal aesthetic (Poppins font, rounded cards, soft shadows).  
* Fully responsive two‑column layout that collapses gracefully on small screens.  
* Re‑usable “💲” nav button (top‑left) shows how the tracker can link into a broader personal‑finance suite.

## Tech Stack

* **HTML5 / CSS3 / Vanilla JS (ES6+)** – no frameworks.  
* **Chart.js** – lightweight, dependency‑free graphs.  
* **Google Fonts – Poppins** – clean typography.  
* **Local Storage API** – persistence without external services.
