export const config = {
    "number": 18,
    "slug": "micro-cashflow-forecast",
    "title": "Micro Cashflow Forecast",
    "category": "Finance & Grants",
    "tagline": "A tiny, owner-friendly cashflow model for businesses that do not need a full finance stack.",
    "persona": "Finance students helping owners understand next month, not Wall Street.",
    "gap": "Existing finance tools are too complex or too accounting-specific for first advisory conversations.",
    "niche": "Restaurants, salons, and local service businesses.",
    "metric": "owners who understand cash runway scenarios",
    "modules": [
        "Weekly cash model",
        "Scenario toggles",
        "Owner explanation notes",
        "Risk flags"
    ],
    "theme": {
        "accent": "#16a34a",
        "accent2": "#86efac",
        "emoji": "\ud83d\udcb8",
        "metricLabel": "Funding readiness",
        "workflow": [
            "Collect verified facts",
            "Map requirements to evidence",
            "Score readiness",
            "Export funder-ready packet"
        ],
        "privacy": "Financial and grant materials can be sensitive. Keep exports local and label confidential notes."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "weekly-cash-model",
            "label": "Weekly cash model",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify weekly cash model with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "scenario-toggles",
            "label": "Scenario toggles",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify scenario toggles with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "owner-explanation-notes",
            "label": "Owner explanation notes",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify owner explanation notes with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "risk-flags",
            "label": "Risk flags",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify risk flags with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Micro Cashflow Forecast and capture baseline evidence.",
            "Complete the weekly cash model workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Eastside Youth Arts Collective",
        "chapter": "NYC",
        "studentLead": "Volta Student Lead",
        "notes": "Grant and finance readiness project for a small community nonprofit. Micro Cashflow Forecast sample.",
        "evidencePrefix": "Micro Cashflow Forecast",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map