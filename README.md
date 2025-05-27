# Dashboard Suite

A collection of self-contained, browser-only dashboards designed for real-time task management and personal finance tracking. Open the HTML files directly in any modern web browser—no build steps, servers, or databases are required.

---

## 1. Productivity Tracker

A comprehensive two-column task dashboard featuring interactive analytics and a daily activity heat-map calendar to help you visualize and manage your productivity.

**Key Features:**

*   **Advanced Task Management:**
    *   Set task priorities (Low, Medium, High) and difficulty levels (Easy ↔ Hard).
    *   Budget time effectively by capturing and comparing _time allotted_ versus _time spent_.
    *   Utilize inline controls for quick task additions, one-click completions, in-place editing, and deletions.
    *   Reorder tasks and widgets seamlessly with drag-and-drop functionality (powered by SortableJS).
    *   Persistently store tasks, their completion states, and user settings using Local Storage.

*   **Insightful Interactive Analytics (via Chart.js):**
    *   **Overall Performance:** View stacked bar charts of assigned tasks by priority, alongside a trend line for completed tasks.
    *   **Hours Worked Analysis:** Compare total hours allotted against hours spent, with an indicator showing the delta from the previous period.
    *   **Difficulty Completion Trends:** Track completions of easy versus hard tasks over time.
    *   **Priority × Difficulty Matrix:** A dual-ring doughnut chart summarizing completions by both priority and difficulty, with a live count in the center.
    *   **Unified Timeframe Control:** Dynamically switch all analytical charts between _Year_, _Month_, _Week_, and _Day_ views.

*   **Dynamic Activity Calendar:**
    *   Visualize daily productivity with a GitHub-style heat-map, where squares are colored based on the number of tasks completed.
    *   Toggle between **Year View** and **Month View** for broader or more detailed insights.
    *   Navigate easily using keyboard-style arrows and view task counts with hover tooltips.

*   **Review & Reflection Tools:**
    *   Engage in weekly retrospectives with a dedicated **Weekly Review** modal that appears at the end of each week.
    *   Capture daily thoughts and summaries using the **Daily Notes** modal, accessible for each calendar day, with notes persisted locally.

*   **Polished User Interface & Experience:**
    *   Enjoy a dark, minimalist aesthetic featuring the Poppins font, rounded interface elements, and soft shadows.
    *   **NEW: Dual-Theme Support:** Seamlessly switch between a sophisticated dark mode and a clean light mode.
    *   **NEW: Interactive Gradient Accents:** Buttons and interactive elements feature a subtle gradient effect that follows the mouse cursor, enhancing visual feedback.
    *   Experience a responsive two-column layout that adapts gracefully to smaller screens.
    *   Navigate effortlessly between dashboards using the persistent sidebar.

---

## 2. Personal Finance Tracker

A smart spending and income tracker that leverages AI to extract transaction data from PDF bank statements, presented with interactive charts.

**Key Features:**

*   **AI-Powered PDF Data Import:**
    *   Securely upload single or multiple PDF bank statements using the file picker.
    *   Utilizes the Google Gemini API to intelligently parse PDF documents and extract transaction details (dates, descriptions, amounts).
    *   API key for the Gemini service is managed securely via an untracked `config.js` file.
    *   Automatically attempts to determine the month and year from the PDF filename for better organization.

*   **Automated Financial Aggregation:**
    *   Categorizes transactions: positive amounts as _Charges_ (expenses) and negative amounts as _Payments/Credits_ (income/refunds).
    *   Aggregates financial totals per month, consolidating data from all uploaded statements for that period.
    *   Maintains running grand totals for overall charges and payments.

*   **Interactive Financial Chart (via Chart.js):**
    *   Visualize financial trends with a line chart comparing monthly charges versus payments.
    *   The chart is responsive and color-coded for clarity: red for charges and green for payments.

*   **Reliable Local Storage Persistence:**
    *   All imported financial data, aggregated totals, and file history are saved in Local Storage, surviving browser reloads and new uploads.
    *   The chart and summary totals are automatically restored when the page is loaded.

*   **Sleek User Interface & Experience:**
    *   Features a dark theme consistent with the Productivity Tracker for a unified look and feel.
    *   **NEW: Dual-Theme Support:** Seamlessly switch between a sophisticated dark mode and a clean light mode.
    *   **NEW: Interactive Gradient Accents:** Buttons and interactive elements feature a subtle gradient effect that follows the mouse cursor, enhancing visual feedback.
    *   Includes sidebar navigation for easy switching between different dashboards.
    *   Offers a mobile-friendly layout with a clean, card-based structure.

---

## Getting Started

1.  **Clone or Download:** Obtain the repository files.
2.  **Set Up API Key (for Personal Finance Tracker):**
    *   Locate the `config.js.example` file.
    *   Rename it to `config.js`.
    *   Open `config.js` and replace `'YOUR_GEMINI_API_KEY_HERE'` with your actual Google Gemini API key.
3.  **Open in Browser:** Launch `Landing Page.html` in your web browser to access all dashboards. Alternatively, you can open `Productivity Tracker.html` or `Personal Finance Tracker.html` directly.
4.  **No Extra Steps:** No build process, server setup, or additional dependencies are required for the core functionality (beyond the API key for PDF parsing).

---

## Technologies Used

*   **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+) — no frameworks for core logic.
*   **Charting:** Chart.js — for lightweight, dependency-free interactive charts.
*   **Drag & Drop:** SortableJS — enabling drag-and-drop functionality in the Productivity Tracker.
*   **AI PDF Parsing:** Google Gemini API — for extracting transaction data from PDF bank statements.
*   **Date Handling:** date-fns & chartjs-adapter-date-fns — for advanced time axis formatting in charts.
*   **Persistence:** Local Storage API — for client-side data storage.
*   **Typography:** Google Fonts (Poppins) — for a clean and modern visual style.

---
