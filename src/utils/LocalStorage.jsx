const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design login UI",
        description: "Create wireframes for login and registration.",
        date: "2025-05-12",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Resolve the issue with user session timeout.",
        date: "2025-05-11",
        category: "Bugfix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client meeting prep",
        description: "Prepare a demo of the dashboard for client review.",
        date: "2025-05-13",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "API integration",
        description: "Integrate payment gateway with backend.",
        date: "2025-05-10",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review pull requests from teammates.",
        date: "2025-05-09",
        category: "Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write test cases",
        description: "Add unit tests for new API routes.",
        date: "2025-05-11",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Deploy updates",
        description: "Push latest changes to staging environment.",
        date: "2025-05-12",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Database backup",
        description: "Backup production database before patching.",
        date: "2025-05-08",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize queries",
        description: "Reduce query time for product listing page.",
        date: "2025-05-09",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update ER diagrams",
        description: "Reflect changes made in DB schema in the diagrams.",
        date: "2025-05-10",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Performance profiling",
        description: "Profile backend API response times.",
        date: "2025-05-12",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Schema migration",
        description: "Migrate user table to new schema.",
        date: "2025-05-13",
        category: "Migration",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Setup CI/CD",
        description: "Implement automated deployments with GitHub Actions.",
        date: "2025-05-07",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Security audit",
        description: "Check for vulnerabilities in dependency tree.",
        date: "2025-05-09",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "User role permissions",
        description: "Implement fine-grained access control.",
        date: "2025-05-10",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Frontend theme redesign",
        description: "Apply new styles based on branding update.",
        date: "2025-05-08",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Animation optimization",
        description: "Improve performance of interactive elements.",
        date: "2025-05-11",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Cross-browser testing",
        description: "Ensure site works on all major browsers.",
        date: "2025-05-12",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "UI bug fixes",
        description: "Fix alignment issues on the dashboard.",
        date: "2025-05-13",
        category: "Bugfix",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [{
  id: 1,
  email: "admin@example.com",
  password: "123"
}];

export const setLocalStorage = ()=>{

  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));

}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return{employees, admin };

  
}