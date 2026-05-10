pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Отримання коду з репозиторію...'
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo 'Збірка проєкту (наприклад, npm run build для React або підготовка Python середовища)...'
                // Тут зазвичай виконуються команди компіляції
            }
        }
        stage('Test') {
            steps {
                echo 'Запуск автоматичних тестів...'
            }
        }
        stage('Deploy to Minikube') {
            steps {
                echo 'Розгортання контейнера у кластері...'
            }
        }
    }
}
