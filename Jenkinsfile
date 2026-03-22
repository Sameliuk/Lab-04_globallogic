pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Sameliuk/Lab-04_globallogic.git', branch: 'master'
            }
        }
        stage('Prepare Folder') {
            steps {
                sh 'mkdir -p x64/Debug || echo Folder exists'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Publish Test Results') {
            steps {
                junit 'x64/Debug/test_report.xml'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
