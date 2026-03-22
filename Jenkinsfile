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

        stage('Generate PDF Report') {
            steps {
                sh '''
                echo "<html><body><h1>Test Report</h1><pre>" > report.html
                cat x64/Debug/test_report.xml >> report.html
                echo "</pre></body></html>" >> report.html
                '''

                sh 'wkhtmltopdf report.html report.pdf'
            }
        }

        stage('Archive PDF') {
            steps {
                archiveArtifacts artifacts: 'report.pdf', allowEmptyArchive: false
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}