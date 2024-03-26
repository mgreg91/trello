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
        stage("run code linter"){
            steps{
                echo "Running eslint"
                bat "npm run lint"
                echo "Linting done"
            }
        }
        stage("run UI tests job"){
            steps{
                echo "Running Cucumber tests"
                bat "npm run test:cucumber:login"
                bat "npm run test:cucumber:logout"
                bat "npm run test:cucumber:create_boards"
                bat "npm run test:cucumber:create_card"
                bat "npm run test:cucumber:search_card_board"
                echo "Cucumber tests done"
            }
        }
    }
    post { 
        always { 
            cleanWs()
        }
    }
}