pipeline {
    agent {
        docker {
            image 'node:latest' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm start'
            }
        }
        stage('Test') { 
            steps {
                sh 'ruby reactWebsiteTestSignInSignUp.rb'
                sh 'bash ./jenkinsTest/test.sh' 
            }
        }
    }
}