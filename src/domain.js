export const domain = {
    "kind": "cashflow",
    "title": "Micro Cashflow Forecast",
    "purpose": "A purpose-built cashflow interface for a tiny, owner-friendly cashflow model for businesses that do not need a full finance stack.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Weekly forecast",
    "metricLabels": [
        "Runway Weeks",
        "Safety Floor Risk",
        "Scenario Spread"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Eastside Youth Arts Collective",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "owners who understand cash runway scenarios",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "monthly-volume",
            "label": "Monthly volume",
            "type": "number",
            "sample": 120,
            "placeholder": "Enter monthly volume"
        },
        {
            "id": "minutes-per-item",
            "label": "Minutes per item",
            "type": "number",
            "sample": 15,
            "placeholder": "Enter minutes per item"
        },
        {
            "id": "dollar-value-cost",
            "label": "Dollar value / cost",
            "type": "number",
            "sample": 45,
            "placeholder": "Enter dollar value / cost"
        },
        {
            "id": "confidence-percent",
            "label": "Confidence percent",
            "type": "number",
            "sample": 80,
            "placeholder": "Enter confidence percent"
        }
    ],
    "rows": [
        "Starting cash entered",
        "Expected inflows scheduled",
        "Recurring expenses scheduled",
        "One-time costs added",
        "Scenario toggles set",
        "Safety floor defined",
        "Risk flags reviewed",
        "Owner summary exported"
    ],
    "artifacts": [
        "13-week forecast CSV",
        "Owner-friendly summary",
        "Scenario comparison"
    ],
    "checks": [
        "Dates align to weeks",
        "Recurring expenses cannot be blank",
        "Assumptions labeled"
    ],
    "sampleClient": "Eastside Youth Arts Collective"
};
//# sourceMappingURL=domain.js.map