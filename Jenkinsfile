pipeline {
    agent any
    tools {nodejs "node"}
    triggers {
        cron('H */2 * * *')
    }
    stages {
        stage("build repository"){
            steps{
                echo "building repository"
                bat "npm install"
                echo "build successfull"
            }
        }
        stage("run API tests job"){
            steps{
                build job: "trello_api_test_job", wait: true
            }
        }
        stage("run UI tests job"){
            steps{
                build job: "trello_ui_test_job", wait: true
            }
        }
    }
    post { 
        always { 
            cleanWs()
        }
    }
}