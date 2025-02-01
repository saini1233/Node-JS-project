pipeline {
    agent any
    
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/saini1233/Node-JS-project.git'
            }
        }
        stage('Check for Changes') {
            steps {
                script {
                    // Check if package.json has changed
                    def changedFiles = sh(script: 'git diff --name-only HEAD^ HEAD', returnStdout: true).trim()
                    if (changedFiles.contains('package.json')) {
                        sh 'npm install' // Only run if package.json has changed
                    } else {
                        echo 'No changes in package.json, skipping npm install.'
                    }
                }
            }
        }
        stage('Build Docker Compose File') {
            steps {
                dir('multi-container-app') {
                    sh 'docker-compose up --build -d'
                    sh 'sleep 10'
                    sh 'curl localhost:3000'
                }
            }
        }
    }
}
