pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Code cloning ho gaya (already done by Jenkins if connected to GitHub)'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
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
