pipeline {
    agent any
    
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/saini1233/Node-JS-project.git'
            }
        }
        stage('Initialize Node.js Project') {
            steps {
                dir('multi-container-app/backend') {
                    sh 'npm init -y' // Generates package.json
                    sh 'npm install express mongoose' // Installs required packages
                }
            }
        }
        stage('List Directory Contents') {
            steps {
                dir('multi-container-app') {
                    sh 'ls -la' // List all files to verify presence of docker-compose.yml
                }
            }
        }
        stage('Build Docker Compose File') {
            steps {
                dir('multi-container-app') {
                    sh 'docker-compose up --build -d' // Build and run in detached mode
                    sh 'sleep 10' // Wait for the services to start
                    sh 'curl localhost:3000' // Test the application endpoint
                }
            }
        }
    }
}
