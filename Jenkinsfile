pipeline {
    agent any
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'ruby ./jenkinsTest/reactWebsiteTestSignInSignUp.rb'
                sh 'bash ./jenkinsTest/test.sh' 
            }
        }
    }
}