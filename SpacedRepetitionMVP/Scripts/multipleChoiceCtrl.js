
app.controller('multipleChoiceCtrl', function ($scope) {
    $scope.quesAndAns = [
{
    ques: 'Which one of the following animals was not represented on the seals and terracotta art of the Harappan Culture?',
    C1: 'Cow',
    C2: 'Elephant',
    C3: 'Rhinoceros',
    C4: 'Tiger',
    correctAnswer: 'Cow'
},
{
    ques: 'The site of Harappa is located on the bank of river?',
    C1: 'Saraswati',
    C2: 'Indus',
    C3: 'Beas',
    C4: 'Ravi',
    correctAnswer: 'Ravi'
},
{
    ques: 'Which one among the following Indus cities was known for water management?',
    C1: 'Lothal',
    C2: 'Mohenjodaro',
    C3: 'Harappa',
    C4: 'Dholavira',
    correctAnswer: 'Dholavira'
},
    {
        ques: 'At which of the following sites the first evidence of the cultivation of cotton has been found?',
        C1: 'Mohenjadaro',
        C2: 'Kili-Gul-Muhammad',
        C3: 'Mehgarh',
        C4: 'Nal',
        correctAnswer: 'Nal'
    },
{
    ques: 'Megaliths?',
    C1: 'are a certain group of Paleolithic caves ',
    C2: 'is the technical term for pre-historic rock-cut caves',
    C3: 'are pre-historic burial monuments',
    C4: 'are monoliths belonging to the Neolithic period',
    correctAnswer: 'are monoliths belonging to the Neolithic period'
}

    ];
    $scope.qNo = 1;
    $scope.totalNoOfQuestionsCount = $scope.quesAndAns.length;
    $scope.testcomplete = false;
    $scope.shuffledArray = [];
    $scope.radioCount = 0;
    $scope.questionCountArray = [];
    $scope.score = 0;
    for (i = 1; i <= $scope.totalNoOfQuestionsCount ; i++) {
        $scope.shuffledArray[i - 1] = i;
    }

    $scope.bindQuesToUi = function () {

        if ($scope.qNo <= $scope.totalNoOfQuestionsCount) {

            $scope.resetRadios();
            $scope.question = $scope.quesAndAns[$scope.qNo - 1].ques;
            $scope.choice1 = $scope.quesAndAns[$scope.qNo - 1].C1;
            $scope.choice2 = $scope.quesAndAns[$scope.qNo - 1].C2;
            $scope.choice3 = $scope.quesAndAns[$scope.qNo - 1].C3;
            $scope.choice4 = $scope.quesAndAns[$scope.qNo - 1].C4;

            $scope.corrAns = $scope.quesAndAns[$scope.qNo - 1].correctAnswer;
            $scope.userAnswered = false;
            $scope.radioCount = 0;
            $scope.qNo = $scope.qNo + 1;


        } else {
            $scope.testcomplete = true;
        }

    };

    $scope.resetRadios = function () {
        $scope.valueAns = '';

    }
    $scope.evaluateUserAnswer = function (value) {
        $scope.radioCount = $scope.radioCount + 1;
        $scope.userAnswered = true;
        if ($scope.radioCount === 1) {
            if (value === $scope.corrAns) {
                $scope.correct = true;
                $scope.score = $scope.score + 1;
               
            }
            else {
                $scope.correct = false;
               
            }
        }
    };

  
    
    $scope.bindQuesToUi();



});

