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
        stage("run code formatter and linter"){
            steps{
                echo "Running prettier"
                bat "npm run format:fix"
                echo "Prettier fix done"
                
                echo "Running eslint"
                bat "npm run lint"
                echo "Linting done"
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