
## 1  Productivity Tracker

A two-column task dashboard with interactive analytics and daily heat-map calendar.

**Key Features:**

• **Task Manager**
  - Priority flags (Low / Med / High) and Easy ↔ Hard difficulty toggle
  - Time budgeting: capture and edit _time allotted_ vs. _time spent_
  - Inline controls: quick-add, one-click completion, edit-in-place, and delete
  - Drag-and-drop reordering of cards and widgets via SortableJS
  - Local Storage persistence of tasks, completion state, and settings

• **Interactive Analytics (Chart.js)**
  - **Overall Performance**: stacked bars for assigned tasks by priority + trend line for completed
  - **Hours Worked**: compare hours allotted vs. hours spent; delta indicator vs. previous period
  - **Difficulty Completion**: easy vs. hard completions plotted over time
  - **Priority × Difficulty**: dual-ring doughnut summarising completions; live center count
  - **Unified timeframe toggle**: switch all charts between _Year_, _Month_, _Week_, and _Day_

• **Activity Calendar**
  - GitHub-style heat-map: daily squares coloured by tasks completed
  - Toggle between **Year View** and **Month View**
  - Keyboard-style arrows and hover tooltips for counts

• **Weekly & Daily Reviews**
  - Weekly Review modal at week’s end to capture retrospectives
  - Daily Notes modal per calendar day; persists locally for future reference

• **Polished UI/UX**
  - Dark, minimal aesthetic with Poppins font, rounded cards, and soft shadows
  - Responsive two-column layout that collapses seamlessly on small screens
  - Persistent sidebar navigation linking between dashboards

---

## 2  Personal Finance Tracker

A lightweight CSV-based spending and income tracker with interactive charting.

**Key Features:**

• **Easy Data Import**
  - Drag-and-drop or file picker for CSV uploads (supports multiple files)
  - Intelligent filename parsing to assign statements to specific month/year
  - PDF upload placeholder for future backend conversion

• **Automatic Aggregation**
  - Separates positive amounts as _Charges_ and negative as _Payments_
  - Aggregates totals per month across all uploaded files
  - Keeps running grand totals for charges and payments

• **Interactive Chart (Chart.js)**
  - Line chart comparing monthly charges vs. payments
  - Responsive and color-coded: red for charges, green for payments

• **Local Storage Persistence**
  - Saved data survives reloads and new uploads
  - Chart and totals restore on page load

• **Polished UI/UX**
  - Dark theme consistent with Productivity Tracker
  - Sidebar navigation for easy switching between dashboards
  - Mobile-friendly layout and card-based structure

---

## Getting Started

1. Clone or download the repository.
2. Open `Landing Page.html` in your browser to navigate between dashboards.
3. Click the links or open `Productivity Tracker.html` and `Personal Finance Tracker.html` directly.
4. No additional setup or dependencies required.

---
