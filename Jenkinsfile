pipeline {
    agent any

    stages {
        stage('Install Backend Dependencies') {
            steps {
                    sh 'npm install'
                
            }
        }

        stage('Build Frontend') {
            steps {
                    sh 'npm run dev'
            }
        }

    }
}
