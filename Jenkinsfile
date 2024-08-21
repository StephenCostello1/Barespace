pipeline {
    agent any

    environment {
        // Define any environment variables here
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
                // Install dependencies (Node.js and Cypress)
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
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
