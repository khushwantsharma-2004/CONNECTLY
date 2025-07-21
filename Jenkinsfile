pipeline {
    agent any

    stages {
        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    checkout scm
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Start Backend Server') {
            steps {
                dir('backend') {
                    sh 'npm start &'
                }
            }
        }
    }
}
