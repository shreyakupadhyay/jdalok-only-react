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
            }
        }
        stage('Test') { 
            steps {
                sh '/home/shreyakupadhyay/Desktop/CollegeCourses/SEM8/PE/jenkinsTest/test.sh' 
            }
        }
    }
}