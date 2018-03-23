pipeline {
   agent {
       docker {
           image 'maven:3-alpine'
           args '-v /root/.m2:/root/.m2'
       }
   }

   stages {
       stage('Build') {
           steps {
               echo "Build"
 	       sh 'mvn -f PhaseC/PlagiarismDetector/pom.xml clean'
               sh 'mvn -f PhaseC/PlagiarismDetector/pom.xml compile'
               sh 'mvn -f PhaseC/PlagiarismDetector/pom.xml package'
           }
       }
       stage('Test'){
           steps {
               echo "Testing"
	       sh 'mvn -f PhaseC/PlagiarismDetector/pom.xml clean test'
               sh 'mvn -f PhaseC/PlagiarismDetector/pom.xml test'
           }
       }
    stage('SonarQube') {
            steps {
                withSonarQubeEnv('SonarQube') {
                        sh 'mvn -f PhaseC/PlagiarismDetector/pom.xml clean package'
                        sh 'mvn -f PhaseC/PlagiarismDetector/pom.xml sonar:sonar'
                }
            }
        }
    stage('Quality') {
          steps {
            sh 'sleep 30'
            timeout(time: 10, unit: 'SECONDS') {
               retry(5) {
                  script {
                    def qg = waitForQualityGate()
                    if (qg.status != 'OK') {
                  error "Pipeline aborted due to quality gate failure: ${qg.status}"
              }
            }
          }
        }
      }
    }

    }
}