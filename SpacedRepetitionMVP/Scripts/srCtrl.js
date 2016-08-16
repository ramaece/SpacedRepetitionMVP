
app.controller('srCtrl', function ($scope) {
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
    $scope.incorrectMaxNoOfQuestionsToAdd = 3;
    $scope.correctMaxNoOfQuestionsToAdd = 2;
    $scope.shuffledArray = [];
    $scope.radioCount = 0;
    $scope.dummyCorrect = false;
    $scope.attemptsArray = [];
    $scope.questionCountArray = [];
    for (i = 1; i <= $scope.totalNoOfQuestionsCount ; i++) {
        $scope.shuffledArray[i - 1] = i;
        $scope.attemptsArray[i - 1] = 0;
       
    }
    
    for (i = 1; i <= $scope.incorrectMaxNoOfQuestionsToAdd ; i++) {
       
       
        $scope.questionCountArray[i - 1] = i;
    }

    
    

    $scope.bindQuesToUi = function () {

        if ($scope.shuffledArray.length) {
            
            $scope.resetRadios();
            $scope.question = $scope.quesAndAns[$scope.shuffledArray[0] - 1].ques;
            $scope.choice1 = $scope.quesAndAns[$scope.shuffledArray[0] - 1].C1;
            $scope.choice2 = $scope.quesAndAns[$scope.shuffledArray[0] - 1].C2;
            $scope.choice3 = $scope.quesAndAns[$scope.shuffledArray[0] - 1].C3;
            $scope.choice4 = $scope.quesAndAns[$scope.shuffledArray[0] - 1].C4;

            $scope.corrAns = $scope.quesAndAns[$scope.shuffledArray[0] - 1].correctAnswer;
            $scope.userAnswered = false;
            $scope.radioCount = 0;
           // $scope.qNo = $scope.qNo + 1;
            
            
        }

    };

    $scope.resetRadios = function () {
        $scope.valueAns = '';

    }
    $scope.evaluateUserAnswer = function (value) {
        $scope.radioCount = $scope.radioCount + 1;

        $scope.userAnswered = true;
        
        //Specifically for UI Start
        if (value === $scope.corrAns) {
            $scope.uiDummyCorrect = true;

            
           
        }
        else {
            $scope.uiDummyCorrect = false;
            
            

        }
        //Specifically for UI END

        // First HIT Start
        if ($scope.radioCount === 1) {
            if (value === $scope.corrAns) {
                $scope.correct = true;
                $scope.updateAttemptsArray();
                console.log('Attempts Array : ' + $scope.attemptsArray);
                $scope.correctAnswerFormalities();
                $scope.shuffle();
                console.log('Array Shuffled : ' + $scope.shuffledArray);
               
                
                //console.log('Correct');
                //console.log('$scope.shuffledArray : ' + $scope.shuffledArray);
                //console.log('$scope.attemptsArray : ' + $scope.attemptsArray);
            }
            else {
                $scope.correct = false;
                $scope.updateAttemptsArray();
                console.log('Attempts Array : ' + $scope.attemptsArray);
                $scope.incorrectAnswerFormalities();
                $scope.shuffle();
                console.log('Array Shuffled : ' + $scope.shuffledArray);
                
                      
                //console.log('InCorrect');        
            }
            // First HIT End
        }
        
    };

    $scope.shuffle = function () {
        a = $scope.shuffledArray;
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
        $scope.shuffledArray = a;
        //console.log($scope.shuffledArray);
    }

    $scope.updateAttemptsArray = function () {
        ($scope.attemptsArray[(($scope.shuffledArray[0]) - 1)]) = ($scope.attemptsArray[(($scope.shuffledArray[0]) - 1)]) + 1;
    }

    $scope.correctAnswerFormalities = function () {
        var Qno = $scope.shuffledArray[0];
        var attemparrayposition = Qno - 1;

        var temp = $scope.attemptsArray[attemparrayposition];

        if (temp !=  1) {
            $scope.shuffledArray.splice(0, 1);
        }
        
    }

    $scope.incorrectAnswerFormalities = function () {
        var Qno = $scope.shuffledArray[0];
        var attemparrayposition = Qno - 1;
        
        var temp = $scope.attemptsArray[attemparrayposition];
        var shuffledArrayLength = $scope.shuffledArray.length;
        var questionCount = 0;
        for (i = 0; i < shuffledArrayLength; i++) {
            if (Qno == $scope.shuffledArray[i]) {
                questionCount = questionCount + 1;
            }
        }
        var questionCountArrayValue = 0
        for (i = 0; i < $scope.questionCountArray.length; i++) {
            questionCountArrayValue = $scope.questionCountArray[i];
            if ((temp >= 1) && (questionCount === questionCountArrayValue)) {

                for (j = $scope.questionCountArray.length; j > questionCountArrayValue; j--) {
                    $scope.shuffledArray.push($scope.shuffledArray[0]);
                    
                }

                
            }
            
        }
        
    }

    $scope.shuffle();
    $scope.bindQuesToUi();



});

