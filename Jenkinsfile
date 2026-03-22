pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/твій-публічний-репо.git'
            }
        }

        stage('Build') {
            steps {
                sh 'gcc -o main main.c'
            }
        }

        stage('Test') {
            steps {
                sh './main < input.txt > output.txt'
                sh 'diff -u expected_output.txt output.txt || echo "Tests failed"'
            }
        }

        stage('Generate Report') {
            steps {
                sh '''
                echo "<html><body><h1>Test Report</h1><pre>" > report.html
                cat output.txt >> report.html
                echo "</pre></body></html>" >> report.html
                '''

                sh 'wkhtmltopdf report.html report.pdf'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'report.pdf', allowEmptyArchive: false
        }
    }
}