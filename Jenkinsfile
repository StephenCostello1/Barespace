pipeline {
    agent any

    environment {
        // Define any environment variables here if needed
        // Example: PATH="/usr/local/bin:${PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from GitHub
                checkout([$class: 'GitSCM',
                    branches: [[name: '*/main']], // Adjust branch name if needed
                    userRemoteConfigs: [[url: 'https://github.com/StephenCostello1/Barespace.git', credentialsId: 'github-access-token']]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                // Ensure Node.js and npm are available
                sh 'which node'
                sh 'which npm'
                
                // Install dependencies (Node.js and Cypress)
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Ensure Cypress is executable
                sh 'ls -l node_modules/.bin/cypress'
                
                // Run Cypress tests
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            // Actions that should run after the pipeline (e.g., cleanup, notifications)
        }
    }
}
