const PROJECT_DATA = [
    {
        name: "Distributed Queue Engine",
        category: "Systems",
        type: "Job Queue Engine",
        tier: "showcase",
        difficulty: "Expert",
        isHero: true,
        actionText: "View System Architecture",
        actionUrl: "https://sudhanshu1402.github.io/system-design-portal/queue-engine",
        path: "distributed-queue-engine"
    },
    {
        name: "OpenTelemetry Node SDK",
        category: "Systems",
        type: "OpenTelemetry Wrapper",
        tier: "secondary",
        difficulty: "Expert",
        isHero: true,
        actionText: "View System Architecture",
        actionUrl: "https://sudhanshu1402.github.io/system-design-portal/tracing-sdk",
        path: "otel-sdk-node"
    },
    {
        name: "LLM Assessment Pipeline",
        category: "ML/AI",
        type: "LLM Pipeline",
        tier: "showcase",
        difficulty: "Expert",
        isHero: true,
        actionText: "View System Architecture",
        actionUrl: "https://sudhanshu1402.github.io/system-design-portal/llm-pipeline",
        path: "llm-assessment-pipeline"
    },
    {
        name: "Enterprise Auth Stack",
        category: "Systems",
        type: "SSO / SCIM Gateway",
        tier: "showcase",
        difficulty: "Expert",
        isHero: true,
        actionText: "View System Architecture",
        actionUrl: "https://sudhanshu1402.github.io/system-design-portal/auth-stack",
        path: "enterprise-auth-stack"
    },
    {
        name: "Multi-Region Mongo Patterns",
        category: "Databases",
        type: "Sharding Patterns",
        tier: "secondary",
        difficulty: "Expert",
        isHero: true,
        actionText: "View System Architecture",
        actionUrl: "https://sudhanshu1402.github.io/system-design-portal/mongo-sharding",
        path: "multi-region-mongo-patterns"
    },
    {
        name: "System Design Portal",
        category: "Web",
        type: "Architectural Hub",
        tier: "showcase",
        difficulty: "Expert",
        isHero: true,
        actionText: "Enter Portal",
        actionUrl: "https://sudhanshu1402.github.io/system-design-portal/",
        path: "system-design-portal"
    },
    {
        "name": "Subconscious Robotics",
        "category": "ML/AI",
        "isHero": true,
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "machine-learning/subconscious-robotics",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/machine-learning/subconscious-robotics",
        "actionText": "View Source Code"
    },
    {
        "name": "BMI Calculator",
        "category": "Python",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "python/easy/bmi-calculator",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/easy/bmi-calculator",
        "actionText": "View Source Code"
    },
    {
        "name": "Count Down Timer",
        "category": "Python",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "python/easy/count-down-timer",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/easy/count-down-timer",
        "actionText": "View Source Code"
    },
    {
        "name": "Currency",
        "category": "Python",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "python/easy/currency",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/easy/currency",
        "actionText": "View Source Code"
    },
    {
        "name": "Tic Tac Toe",
        "category": "Python",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "python/easy/tic-tac-toe",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/easy/tic-tac-toe",
        "actionText": "View Source Code"
    },
    {
        "name": "Color Detection",
        "category": "Python",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "python/expert/color-detection",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/expert/color-detection",
        "actionText": "View Source Code"
    },
    {
        "name": "Gender & Age Detection",
        "category": "Python",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "python/expert/gender-&-age-detection",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/expert/gender-&-age-detection",
        "actionText": "View Source Code"
    },
    {
        "name": "Keyboard Jump Game",
        "category": "Python",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "python/expert/keyboard-jump-game",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/expert/keyboard-jump-game",
        "actionText": "View Source Code"
    },
    {
        "name": "Fruit Ninja Game",
        "category": "Python",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "python/hard/fruit-ninja-game",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/hard/fruit-ninja-game",
        "actionText": "View Source Code"
    },
    {
        "name": "UNO",
        "category": "Python",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "python/hard/uno",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/hard/uno",
        "actionText": "View Source Code"
    },
    {
        "name": "2048",
        "category": "Python",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "python/medium/2048",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/medium/2048",
        "actionText": "View Source Code"
    },
    {
        "name": "Circo",
        "category": "Python",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "python/medium/circo",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/medium/circo",
        "actionText": "View Source Code"
    },
    {
        "name": "Dev Hiring Test",
        "category": "Python",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "python/medium/library-management-system/dev-hiring-test",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/medium/library-management-system/dev-hiring-test",
        "actionText": "View Source Code"
    },
    {
        "name": "Ping Pong Game",
        "category": "Python",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "python/medium/ping-pong-game",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/medium/ping-pong-game",
        "actionText": "View Source Code"
    },
    {
        "name": "Speed Typing Test",
        "category": "Python",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "python/medium/speed-typing-test",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/medium/speed-typing-test",
        "actionText": "View Source Code"
    },
    {
        "name": "Sudoku",
        "category": "Python",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "python/medium/sudoku",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/python/medium/sudoku",
        "actionText": "View Source Code"
    },
    {
        "name": "Temperature Converter",
        "category": "Java",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "java/easy/temperature-converter",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/java/easy/temperature-converter",
        "actionText": "View Source Code"
    },
    {
        "name": "Stock Trading Engine",
        "category": "Java",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "java/expert/stock-trading-engine",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/java/expert/stock-trading-engine",
        "actionText": "View Source Code"
    },
    {
        "name": "Mall Management System",
        "category": "Java",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "java/hard/mall-management-system",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/java/hard/mall-management-system",
        "actionText": "View Source Code"
    },
    {
        "name": "manageit",
        "category": "Java",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "java/hard/photo-manager/app/src/android-test/java/com/example/sudhanshusingh/manageit",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/java/hard/photo-manager/app/src/android-test/java/com/example/sudhanshusingh/manageit",
        "actionText": "View Source Code"
    },
    {
        "name": "Photo Manager",
        "category": "Java",
        "isHero": true,
        "difficulty": "Hard",
        "type": "Android App",
        "path": "java/hard/photo-manager/app/src/main/java/com/example/sudhanshusingh/manageit",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/java/hard/photo-manager/app/src/main/java/com/example/sudhanshusingh/manageit",
        "actionText": "View Source Code"
    },
    {
        "name": "manageit",
        "category": "Java",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "java/hard/photo-manager/app/src/test/java/com/example/sudhanshusingh/manageit",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/java/hard/photo-manager/app/src/test/java/com/example/sudhanshusingh/manageit",
        "actionText": "View Source Code"
    },
    {
        "name": "scientificcalc",
        "category": "Java",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "java/medium/scientific-calculator/app/src/android-test/java/com/sudhanshusingh/scientificcalc",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/java/medium/scientific-calculator/app/src/android-test/java/com/sudhanshusingh/scientificcalc",
        "actionText": "View Source Code"
    },
    {
        "name": "sudhanshusinghCalculator",
        "category": "Java",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "java/medium/scientific-calculator/app/src/main/java/com/sudhanshusingh/sudhanshusingh-calculator",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/java/medium/scientific-calculator/app/src/main/java/com/sudhanshusingh/sudhanshusingh-calculator",
        "actionText": "View Source Code"
    },
    {
        "name": "scientificcalc",
        "category": "Java",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "java/medium/scientific-calculator/app/src/test/java/com/dataflair/scientificcalc",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/java/medium/scientific-calculator/app/src/test/java/com/dataflair/scientificcalc",
        "actionText": "View Source Code"
    },
    {
        "name": "Calendar",
        "category": "C",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "c/easy/calendar",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/c/easy/calendar",
        "actionText": "View Source Code"
    },
    {
        "name": "Number Guessing Game",
        "category": "C",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "c/easy/number-guessing-game",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/c/easy/number-guessing-game",
        "actionText": "View Source Code"
    },
    {
        "name": "Simple Shell",
        "category": "C",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "c/expert/simple-shell",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/c/expert/simple-shell",
        "actionText": "View Source Code"
    },
    {
        "name": "Web Server",
        "category": "C",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "c/expert/web-server",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/c/expert/web-server",
        "actionText": "View Source Code"
    },
    {
        "name": "Bank System",
        "category": "C",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "c/hard/bank-system",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/c/hard/bank-system",
        "actionText": "View Source Code"
    },
    {
        "name": "Hospital Management",
        "category": "C",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "c/hard/hospital-management",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/c/hard/hospital-management",
        "actionText": "View Source Code"
    },
    {
        "name": "Phonebook System",
        "category": "C",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "c/medium/phonebook-system",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/c/medium/phonebook-system",
        "actionText": "View Source Code"
    },
    {
        "name": "Voting System",
        "category": "C",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "c/medium/voting-system",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/c/medium/voting-system",
        "actionText": "View Source Code"
    },
    {
        "name": "Simple Calculator",
        "category": "Cpp",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "cpp/easy/simple-calculator",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/cpp/easy/simple-calculator",
        "actionText": "View Source Code"
    },
    {
        "name": "Stopwatch",
        "category": "Cpp",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "cpp/easy/stopwatch",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/cpp/easy/stopwatch",
        "actionText": "View Source Code"
    },
    {
        "name": "Unit Converter",
        "category": "Cpp",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "cpp/easy/unit-converter",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/cpp/easy/unit-converter",
        "actionText": "View Source Code"
    },
    {
        "name": "Memory Allocator",
        "category": "Cpp",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "cpp/expert/memory-allocator",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/cpp/expert/memory-allocator",
        "actionText": "View Source Code"
    },
    {
        "name": "Trading Simulator",
        "category": "Cpp",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "cpp/expert/trading-simulator",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/cpp/expert/trading-simulator",
        "actionText": "View Source Code"
    },
    {
        "name": "Bank Management",
        "category": "Cpp",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "cpp/hard/bank-management",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/cpp/hard/bank-management",
        "actionText": "View Source Code"
    },
    {
        "name": "College Management System",
        "category": "Cpp",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "cpp/hard/college-management-system",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/cpp/hard/college-management-system",
        "actionText": "View Source Code"
    },
    {
        "name": "Scientific Calculator",
        "category": "Cpp",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "cpp/medium/scientific-calculator",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/cpp/medium/scientific-calculator",
        "actionText": "View Source Code"
    },
    {
        "name": "Student Grade System",
        "category": "Cpp",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "cpp/medium/student-grade-system",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/cpp/medium/student-grade-system",
        "actionText": "View Source Code"
    },
    {
        "name": "Celsius-Fahrenheit",
        "category": "Rust",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "rust/easy/celsius-fahrenheit",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/rust/easy/celsius-fahrenheit",
        "actionText": "View Source Code"
    },
    {
        "name": "Guessing-Game",
        "category": "Rust",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "rust/easy/guessing-game",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/rust/easy/guessing-game",
        "actionText": "View Source Code"
    },
    {
        "name": "Async-Executor",
        "category": "Rust",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "rust/expert/async-executor",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/rust/expert/async-executor",
        "actionText": "View Source Code"
    },
    {
        "name": "Blockchain-Rust",
        "category": "Rust",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "rust/expert/blockchain-rust",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/rust/expert/blockchain-rust",
        "actionText": "View Source Code"
    },
    {
        "name": "Chat-Server",
        "category": "Rust",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "rust/hard/chat-server",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/rust/hard/chat-server",
        "actionText": "View Source Code"
    },
    {
        "name": "File-Compressor",
        "category": "Rust",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "rust/hard/file-compressor",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/rust/hard/file-compressor",
        "actionText": "View Source Code"
    },
    {
        "name": "Calculator",
        "category": "Rust",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "rust/medium/calculator",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/rust/medium/calculator",
        "actionText": "View Source Code"
    },
    {
        "name": "ToDo-CLI",
        "category": "Rust",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "rust/medium/to-do-cli",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/rust/medium/to-do-cli",
        "actionText": "View Source Code"
    },
    {
        "name": "Hello Server",
        "category": "Go",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "go/easy/hello-server",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/go/easy/hello-server",
        "actionText": "View Source Code"
    },
    {
        "name": "Number Guess",
        "category": "Go",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "go/easy/number-guess",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/go/easy/number-guess",
        "actionText": "View Source Code"
    },
    {
        "name": "K8s Controller",
        "category": "Go",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "go/expert/k8s-controller",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/go/expert/k8s-controller",
        "actionText": "View Source Code"
    },
    {
        "name": "Microservice Mesh",
        "category": "Go",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "go/expert/microservice-mesh",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/go/expert/microservice-mesh",
        "actionText": "View Source Code"
    },
    {
        "name": "Distributed Cache",
        "category": "Go",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "go/hard/distributed-cache",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/go/hard/distributed-cache",
        "actionText": "View Source Code"
    },
    {
        "name": "Load Balancer",
        "category": "Go",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "go/hard/load-balancer",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/go/hard/load-balancer",
        "actionText": "View Source Code"
    },
    {
        "name": "CRUD API",
        "category": "Go",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "go/medium/crud-api",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/go/medium/crud-api",
        "actionText": "View Source Code"
    },
    {
        "name": "Slack Bot",
        "category": "Go",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "go/medium/slack-bot",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/go/medium/slack-bot",
        "actionText": "View Source Code"
    },
    {
        "name": "Console Calculator",
        "category": "CSharp",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "csharp/easy/console-calculator",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/csharp/easy/console-calculator",
        "actionText": "View Source Code"
    },
    {
        "name": "Number Guess",
        "category": "CSharp",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "csharp/easy/number-guess",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/csharp/easy/number-guess",
        "actionText": "View Source Code"
    },
    {
        "name": "Ecommerce Backend",
        "category": "CSharp",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "csharp/expert/ecommerce-backend",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/csharp/expert/ecommerce-backend",
        "actionText": "View Source Code"
    },
    {
        "name": "Stock Simulator",
        "category": "CSharp",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "csharp/expert/stock-simulator",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/csharp/expert/stock-simulator",
        "actionText": "View Source Code"
    },
    {
        "name": "Chat App",
        "category": "CSharp",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "csharp/hard/chat-app",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/csharp/hard/chat-app",
        "actionText": "View Source Code"
    },
    {
        "name": "Inventory System",
        "category": "CSharp",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "csharp/hard/inventory-system",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/csharp/hard/inventory-system",
        "actionText": "View Source Code"
    },
    {
        "name": "Expense Tracker",
        "category": "CSharp",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "csharp/medium/expense-tracker",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/csharp/medium/expense-tracker",
        "actionText": "View Source Code"
    },
    {
        "name": "TS Calculator",
        "category": "Typescript",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "typescript/easy/ts-calculator",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/typescript/easy/ts-calculator",
        "actionText": "View Source Code"
    },
    {
        "name": "TS ToDo CLI",
        "category": "Typescript",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "typescript/easy/ts-to-do-cli",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/typescript/easy/ts-to-do-cli",
        "actionText": "View Source Code"
    },
    {
        "name": "Compiler Transpiler",
        "category": "Typescript",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "typescript/expert/compiler-transpiler",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/typescript/expert/compiler-transpiler",
        "actionText": "View Source Code"
    },
    {
        "name": "GraphQL Federation",
        "category": "Typescript",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "typescript/expert/graph-ql-federation",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/typescript/expert/graph-ql-federation",
        "actionText": "View Source Code"
    },
    {
        "name": "NestJS Blog",
        "category": "Typescript",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "typescript/hard/nest-js-blog",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/typescript/hard/nest-js-blog",
        "actionText": "View Source Code"
    },
    {
        "name": "Express TS API",
        "category": "Typescript",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "typescript/medium/express-ts-api",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/typescript/medium/express-ts-api",
        "actionText": "View Source Code"
    },
    {
        "name": "File Metadata",
        "category": "Nodejs",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "nodejs/easy/file-metadata",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/nodejs/easy/file-metadata",
        "actionText": "View Source Code"
    },
    {
        "name": "Timestamp API",
        "category": "Nodejs",
        "difficulty": "Easy",
        "type": "Backend / CLI",
        "path": "nodejs/easy/timestamp-api",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/nodejs/easy/timestamp-api",
        "actionText": "View Source Code"
    },
    {
        "name": "Real Time Chat",
        "category": "Nodejs",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "nodejs/expert/real-time-chat",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/nodejs/expert/real-time-chat",
        "actionText": "View Source Code"
    },
    {
        "name": "Video Streaming Server",
        "category": "Nodejs",
        "difficulty": "Expert",
        "type": "Backend / CLI",
        "path": "nodejs/expert/video-streaming-server",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/nodejs/expert/video-streaming-server",
        "actionText": "View Source Code"
    },
    {
        "name": "Blog API",
        "category": "Nodejs",
        "difficulty": "Hard",
        "type": "Backend / CLI",
        "path": "nodejs/hard/blog-api",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/nodejs/hard/blog-api",
        "actionText": "View Source Code"
    },
    {
        "name": "URL Shortener",
        "category": "Nodejs",
        "difficulty": "Medium",
        "type": "Backend / CLI",
        "path": "nodejs/medium/url-shortener",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/nodejs/medium/url-shortener",
        "actionText": "View Source Code"
    },
    {
        "name": "Personal Portfolio",
        "category": "Javascript",
        "isHero": true,
        "difficulty": "Easy",
        "type": "Frontend UI",
        "path": "javascript/easy/personal-portfolio",
        "actionUrl": "https://sudhanshu1402.github.io/personal-projects/javascript/easy/personal-portfolio/index.html",
        "actionText": "Open Live Preview"
    },
    {
        "name": "Quiz Page",
        "category": "Javascript",
        "difficulty": "Easy",
        "type": "Frontend UI",
        "path": "javascript/easy/quiz-page",
        "actionUrl": "https://sudhanshu1402.github.io/personal-projects/javascript/easy/quiz-page/index.html",
        "actionText": "Open Live Preview"
    },
    {
        "name": "Kanban Board",
        "category": "Javascript",
        "isHero": true,
        "difficulty": "Expert",
        "type": "Frontend UI",
        "path": "javascript/expert/kanban-board",
        "actionUrl": "https://sudhanshu1402.github.io/personal-projects/javascript/expert/kanban-board/index.html",
        "actionText": "Open Live Preview"
    },
    {
        "name": "Furnicto",
        "category": "Javascript",
        "difficulty": "Hard",
        "type": "Frontend UI",
        "path": "javascript/hard/furnicto",
        "actionUrl": "https://sudhanshu1402.github.io/personal-projects/javascript/hard/furnicto/index.html",
        "actionText": "Open Live Preview"
    },
    {
        "name": "Weather Dashboard",
        "category": "Javascript",
        "difficulty": "Hard",
        "type": "Frontend UI",
        "path": "javascript/hard/weather-dashboard",
        "actionUrl": "https://sudhanshu1402.github.io/personal-projects/javascript/hard/weather-dashboard/index.html",
        "actionText": "Open Live Preview"
    },
    {
        "name": "Decibell",
        "category": "Javascript",
        "difficulty": "Medium",
        "type": "Frontend UI",
        "path": "javascript/medium/decibell",
        "actionUrl": "https://github.com/sudhanshu1402/engineering-projects/tree/main/javascript/medium/decibell",
        "actionText": "View Source Code"
    },
    {
        "name": "Task Manager",
        "category": "Javascript",
        "difficulty": "Medium",
        "type": "Frontend UI",
        "path": "javascript/medium/task-manager",
        "actionUrl": "https://sudhanshu1402.github.io/personal-projects/javascript/medium/task-manager/index.html",
        "actionText": "Open Live Preview"
    }
];
