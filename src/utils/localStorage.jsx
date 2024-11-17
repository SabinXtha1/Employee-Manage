
const employee = [
    {
        "id": 1,
        "email": "s@g.c",
        "password": "123",
        "firstName": "Sabin",
        "taskCounts": {
            "active": 3,
            "complete": 5,
            "failed": 1,
            "new_task": 2
        },
        "task": [
            { "active": true, "new_task": false, "complete": false, "failed": false, "task_title": "Prepare Report", "task_description": "Prepare the monthly financial report.", "task_date": "2024-10-25", "task_category": "Finance" },
            { "active": true, "new_task": false, "complete": false, "failed": false, "task_title": "Market Analysis", "task_description": "Analyze market trends.", "task_date": "2024-10-30", "task_category": "Finance" },
            { "active": true, "new_task": false, "complete": false, "failed": false, "task_title": "Budget Review", "task_description": "Review budget allocations.", "task_date": "2024-11-02", "task_category": "Finance" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Tax Filing", "task_description": "File taxes for Q3.", "task_date": "2024-09-20", "task_category": "Finance" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Audit", "task_description": "Prepare audit documents.", "task_date": "2024-09-25", "task_category": "Finance" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Financial Summary", "task_description": "Summarize yearly finances.", "task_date": "2024-08-15", "task_category": "Finance" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Budget Proposal", "task_description": "Draft next year's budget.", "task_date": "2024-08-20", "task_category": "Finance" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Investment Review", "task_description": "Review investment portfolio.", "task_date": "2024-07-30", "task_category": "Finance" },
            { "active": false, "new_task": false, "complete": false, "failed": true, "task_title": "Expense Audit", "task_description": "Audit team expenses.", "task_date": "2024-06-10", "task_category": "Finance" },
            { "active": false, "new_task": true, "complete": false, "failed": false, "task_title": "New Financial Model", "task_description": "Develop a new model for financial forecasting.", "task_date": "2024-11-10", "task_category": "Finance" },
            { "active": false, "new_task": true, "complete": false, "failed": false, "task_title": "Policy Update", "task_description": "Update policies for compliance.", "task_date": "2024-11-15", "task_category": "Finance" }
        ]
    },
    {
        "id": 2,
        "email": "jane.smith@example.com",
        "password": "password123",
        "firstName": "Jane",
        "taskCounts": {
            "active": 4,
            "complete": 3,
            "failed": 2,
            "new_task": 1
        },
        "task": [
            { "active": true, "new_task": true, "complete": false, "failed": false, "task_title": "Update Website", "task_description": "Redesign the homepage.", "task_date": "2024-10-26", "task_category": "Development" },
            { "active": true, "new_task": false, "complete": false, "failed": false, "task_title": "Fix Bugs", "task_description": "Resolve reported bugs.", "task_date": "2024-10-29", "task_category": "Development" },
            { "active": true, "new_task": false, "complete": false, "failed": false, "task_title": "Feature Implementation", "task_description": "Implement requested feature.", "task_date": "2024-11-02", "task_category": "Development" },
            { "active": true, "new_task": false, "complete": false, "failed": false, "task_title": "UI Testing", "task_description": "Test new UI features.", "task_date": "2024-11-05", "task_category": "Development" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Documentation", "task_description": "Update project docs.", "task_date": "2024-10-20", "task_category": "Development" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Code Refactoring", "task_description": "Refactor old code.", "task_date": "2024-10-22", "task_category": "Development" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Test Coverage", "task_description": "Increase test coverage.", "task_date": "2024-10-25", "task_category": "Development" },
            { "active": false, "new_task": false, "complete": false, "failed": true, "task_title": "Security Audit", "task_description": "Conduct security review.", "task_date": "2024-09-15", "task_category": "Development" },
            { "active": false, "new_task": false, "complete": false, "failed": true, "task_title": "Backend Optimization", "task_description": "Optimize backend.", "task_date": "2024-09-20", "task_category": "Development" }
        ]
    },
    {
        "id": 3,
        "email": "michael.jones@example.com",
        "password": "password123",
        "firstName": "Michael",
        "taskCounts": {
            "active": 2,
            "complete": 7,
            "failed": 0,
            "new_task": 0
        },
        "task": [
            { "active": true, "new_task": false, "complete": false, "failed": false, "task_title": "Client Presentation", "task_description": "Deliver the presentation for the new project.", "task_date": "2024-10-20", "task_category": "Sales" },
            { "active": true, "new_task": false, "complete": false, "failed": false, "task_title": "Customer Outreach", "task_description": "Reach out to potential clients.", "task_date": "2024-10-23", "task_category": "Sales" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Lead Generation", "task_description": "Generate leads for Q4.", "task_date": "2024-10-10", "task_category": "Sales" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Sales Analysis", "task_description": "Analyze last quarter's sales.", "task_date": "2024-09-10", "task_category": "Sales" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Contract Signing", "task_description": "Finalize client contracts.", "task_date": "2024-09-15", "task_category": "Sales" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Monthly Review", "task_description": "Monthly performance review.", "task_date": "2024-08-05", "task_category": "Sales" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Annual Strategy", "task_description": "Define sales strategy.", "task_date": "2024-07-30", "task_category": "Sales" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Customer Feedback", "task_description": "Collect and analyze feedback.", "task_date": "2024-07-25", "task_category": "Sales" }
        ]
    }, {
        "id": 4,
        "email": "emily.davis@example.com",
        "password": "password123",
        "firstName": "Emily",
        "taskCounts": {
            "active": 1,
            "complete": 3,
            "failed": 4,
            "new_task": 1
        },
        "task": [
            { "active": true, "new_task": false, "complete": false, "failed": false, "task_title": "Inventory Check", "task_description": "Complete quarterly inventory check.", "task_date": "2024-10-19", "task_category": "Logistics" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Supply Ordering", "task_description": "Order supplies for next quarter.", "task_date": "2024-10-05", "task_category": "Logistics" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Logistics Planning", "task_description": "Plan logistics for upcoming event.", "task_date": "2024-10-01", "task_category": "Logistics" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Transport Arrangement", "task_description": "Arrange transport for goods.", "task_date": "2024-09-28", "task_category": "Logistics" },
            { "active": false, "new_task": false, "complete": false, "failed": true, "task_title": "Warehouse Inspection", "task_description": "Inspect warehouse conditions.", "task_date": "2024-09-25", "task_category": "Logistics" },
            { "active": false, "new_task": false, "complete": false, "failed": true, "task_title": "Damage Report", "task_description": "Prepare report on damaged goods.", "task_date": "2024-09-15", "task_category": "Logistics" },
            { "active": false, "new_task": false, "complete": false, "failed": true, "task_title": "Supplier Meeting", "task_description": "Meet with suppliers for contract review.", "task_date": "2024-09-10", "task_category": "Logistics" },
            { "active": false, "new_task": false, "complete": false, "failed": true, "task_title": "Stock Take", "task_description": "Conduct full stock take.", "task_date": "2024-08-30", "task_category": "Logistics" },
            { "active": false, "new_task": true, "complete": false, "failed": false, "task_title": "Safety Training", "task_description": "Complete safety training for team.", "task_date": "2024-11-05", "task_category": "Logistics" }
        ]
    },
    {
        "id": 5,
        "email": "william.brown@example.com",
        "password": "password123",
        "firstName": "William",
        "taskCounts": {
            "active": 5,
            "complete": 6,
            "failed": 1,
            "new_task": 3
        },
        "task": [
            { "active": true, "new_task": true, "complete": false, "failed": false, "task_title": "Team Meeting", "task_description": "Schedule and lead the weekly team meeting.", "task_date": "2024-10-27", "task_category": "Management" },
            { "active": true, "new_task": true, "complete": false, "failed": false, "task_title": "Performance Review", "task_description": "Conduct team performance reviews.", "task_date": "2024-11-02", "task_category": "Management" },
            { "active": true, "new_task": false, "complete": false, "failed": false, "task_title": "Resource Allocation", "task_description": "Allocate resources for new project.", "task_date": "2024-11-03", "task_category": "Management" },
            { "active": true, "new_task": false, "complete": false, "failed": false, "task_title": "Budget Review", "task_description": "Review department budget.", "task_date": "2024-11-05", "task_category": "Management" },
            { "active": true, "new_task": false, "complete": false, "failed": false, "task_title": "Training Program", "task_description": "Set up training program for new hires.", "task_date": "2024-11-08", "task_category": "Management" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Policy Review", "task_description": "Review and update team policies.", "task_date": "2024-10-15", "task_category": "Management" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Annual Report", "task_description": "Prepare the annual report.", "task_date": "2024-09-30", "task_category": "Management" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Team Building", "task_description": "Organize team-building activities.", "task_date": "2024-09-20", "task_category": "Management" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Project Planning", "task_description": "Plan next quarter's projects.", "task_date": "2024-08-25", "task_category": "Management" },
            { "active": false, "new_task": false, "complete": true, "failed": false, "task_title": "Hiring Process", "task_description": "Coordinate hiring process for new position.", "task_date": "2024-08-05", "task_category": "Management" },
            { "active": false, "new_task": false, "complete": false, "failed": true, "task_title": "Budget Overhaul", "task_description": "Revise budget due to unexpected expenses.", "task_date": "2024-08-15", "task_category": "Management" },
            { "active": false, "new_task": true, "complete": false, "failed": false, "task_title": "Risk Assessment", "task_description": "Conduct risk assessment for Q1.", "task_date": "2024-11-15", "task_category": "Management" },
            { "active": false, "new_task": true, "complete": false, "failed": false, "task_title": "Team Survey", "task_description": "Gather feedback from team on workflow.", "task_date": "2024-11-20", "task_category": "Management" }
        ]
    }

];



const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "password123"
}];

export const setLocalStorage = () => {

    localStorage.setItem('employee', JSON.stringify(employee));
    localStorage.setItem('admin', JSON.stringify(admin));

}
export const getLocalStorage = () => {
    const employee = JSON.parse(

        localStorage.getItem('employee')
    )

    const admin = JSON.parse(

        localStorage.getItem('admin')
    )
    return { admin, employee }



}


