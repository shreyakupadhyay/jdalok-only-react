pipeline {
    stages {
        stage('Test') { 
            steps {
                sh 'ruby ./jenkinsTest/reactWebsiteTestSignInSignUp.rb'
                sh 'bash ./jenkinsTest/test.sh' 
            }
        }
    }
}