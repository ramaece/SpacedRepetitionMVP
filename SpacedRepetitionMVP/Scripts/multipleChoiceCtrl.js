
app.controller('multipleChoiceCtrl', function ($scope, $interval) {
    // Comment added from sugu machine on sugu brnach
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
},
{
    ques: 'From which one of the following regions the earliest evidence of the rice cultivation has come?',
    C1: 'Belan Valley',
    C2: 'Central Ganga Valley',
    C3: 'Gomal  Valley',
    C4: 'Bolan Valley',
    correctAnswer: 'Belan Valley'
},

{
    ques: '"Sohan Culture" is another name of ?',
    C1: 'Paleolithic Culture',
    C2: 'Mesolithic Culture',
    C3: 'Neolithic Culture',
    C4: 'Chalcolithic Culture',
    correctAnswer: 'Paleolithic Culture'
},

{
    ques: 'Which one of the following sites is the largest Mesolithic site in India?',
    C1: 'Bagor',
    C2: 'Tilwara',
    C3: 'Valasana',
    C4: 'Akhaj',
    correctAnswer: 'Bagor'
},

{
    ques: 'Which one of the following Mesolithic sites provides evidence of a battle?',
    C1: 'Bagor',
    C2: 'Sarai Nahar Rai',
    C3: 'Langhanaj',
    C4: 'Mahadaha',
    correctAnswer: 'Sarai Nahar Rai'
},
{
    ques: 'Which one of the following Mesolithic sites has the distinction of being the first site to be discovered in the arid zone?',
    C1: 'Langhanaj',
    C2: 'Bagor',
    C3: 'Sidhpur',
    C4: 'Barasimla',
    correctAnswer: 'Langhanaj'
},
{
    ques: 'Which animal figures most in the cave paintings of Mesolithic age?',
    C1: 'Buffalo',
    C2: 'Deer',
    C3: 'Tiger',
    C4: 'Chinkara',
    correctAnswer: 'Deer'
},

{
    ques: 'From which one of the following Mesolithic sites charred and corbonised grains of wild rice embedded in the burnt clay remains of wattle and daub walls of huts, has been discovered?',
    C1: 'Chopani Mando',
    C2: 'Mahadaha',
    C3: 'Barkaccha',
    C4: 'Langhanaj',
    correctAnswer: 'Chopani Mando'
},

{
    ques: 'Which one of the following statements is not true about the Chalcolithic cultures of India?',
    C1: 'They were primarily communities in the hilly and riverine areas',
    C2: 'They mostly used stone and copper objects and occasionally low grade bronze',
    C3: 'A large number of them appeared after the end of the bronze Harappan Culture',
    C4: 'They were restricted to the Ganga-Yamuna doab and foothills of the Himalayas',
    correctAnswer: 'They were restricted to the Ganga-Yamuna doab and foothills of the Himalayas'
},

{
    ques: 'Which one of the following pairs is/are correctly matched?    ',
    C1: 'Harappan Civilization : Painted Grey Ware',
    C2: 'The Kushans : Gandhara School of Art',
    C3: 'The Mughals : Ajanta Paintings',
    C4: 'The Marathas : Pahari School of Painting',
    correctAnswer: 'The Kushans : Gandhara School of Art'
},

{
    ques: 'At which one of the following Neolithic sites, the evidence of the unique practice of burying the dogs with their masters in the caves has been found?',
    C1: 'Burzahom',
    C2: 'Piklihal',
    C3: 'Gufkral',
    C4: 'Chirand',
    correctAnswer: 'Burzahom'
},

{
    ques: 'Which One of the following cultures is influenced by Harappan culture?',
    C1: 'Malwa Culture',
    C2: 'Jorwe Culture',
    C3: 'Kayatha Culture',
    C4: 'Megalithic Culture',
    correctAnswer: 'Kayatha Culture'
},

{
    ques: 'At which one of the following Mesolithic sites thatched wind screens were constructed?',
    C1: 'Adamgarh',
    C2: 'Langhanaj',
    C3: 'Birbhanpur',
    C4: 'Bagor',
    correctAnswer: 'Bagor'
},

{
    ques: 'Which is one of the most extensively excavated Chalcolithic age rural sitesin the continent?',
    C1: 'Daimabad',
    C2: 'Navdatoli',
    C3: 'kayatha',
    C4: 'Nindowari',
    correctAnswer: 'Navdatoli'
},

{
    ques: 'Which one of the following statements regarding Harappan Civilisation is correct?',
    C1: 'The standard Harappan seals were made of clay',
    C2: 'The inhabitants of Harappa had neither knowledge of copper nor bronze',
    C3: 'The Harappan Civilisation was rural based',
    C4: 'The inhabitants of Harappa grew and used cotton',
    correctAnswer: 'The inhabitants of Harappa grew and used cotton'
},

{
    ques: 'Three most common features of all Indus Valley site were',
    C1: 'climate,  flora-fauna and artifical irrigation',
    C2: 'desert, rivers and zoological features ',
    C3: 'use of baked bricks and pottery, elaborate drainage system and occurrence of marsh or jungle animals',
    C4: 'building, town planning and burial system',
    correctAnswer: 'use of baked bricks and pottery, elaborate drainage system and occurrence of marsh or jungle animals'
},

{
    ques: 'The most important item of import in the Harappan civilisation were',
    C1: 'metals and precious stones',
    C2: 'food grains',
    C3: 'textiles',
    C4: 'pottery',
    correctAnswer: 'metals and precious stones'
},

{
    ques: 'A piece of woven cotton has been recoveredfrom which one of the following Harappan sites?',
    C1: 'Harappa',
    C2: 'Lothal',
    C3: 'Banawali',
    C4: 'Mohenjodaro',
    correctAnswer: 'Mohenjodaro'
},

{
    ques: 'Which animal is engraved on most of the Harappan seals?',
    C1: 'Humpless bull or Unicorn',
    C2: 'Elephant',
    C3: 'Bison',
    C4: 'Tiger',
    correctAnswer: 'Humpless bull or Unicorn'
},

{
    ques: 'Rows of distinctive five altars with the provision of ritual bathing have been found at',
    C1: 'Mohenjodaro',
    C2: 'Harappa',
    C3: 'Kalibangan',
    C4: 'Lothal',
    correctAnswer: 'Kalibangan'
},

{
    ques: 'The Harappan towns and cities were divided in…… large-blocks.',
    C1: 'square',
    C2: 'rectangular',
    C3: 'circular',
    C4: 'semicircular',
    correctAnswer: 'rectangular'
},

{
    ques: 'Which of the following sites excavated recently shows all the three stages of Harappan Occupations (Pre-Harappan, Harappan and Post Harappan)?',
    C1: 'Rojdi',
    C2: 'Surkotda',
    C3: 'Desalpur',
    C4: 'All of these',
    correctAnswer: 'All of these'
},

{
    ques: 'Which one of the following was not cultivated in the Harappan Civilisation?',
    C1: 'Mustard',
    C2: 'Barley',
    C3: 'Sugarcane',
    C4: 'Sesamum',
    correctAnswer: 'Sugarcane'
},

{
    ques: 'Harappan weapons were made of ',
    C1: 'stone',
    C2: 'copper',
    C3: 'bronze',
    C4: 'All of the above',
    correctAnswer: 'All of the above'
},

{
    ques: 'The detification/worship of which of the following was not a part of the religion of Indus Valley People?',
    C1: 'Mother Goddess',
    C2: 'Forces of Nature',
    C3: 'Trees and their spirits',
    C4: 'Certain animal chimeras and their anthropic figures ',
    correctAnswer: 'Forces of Nature'
},

{
    ques: 'Which one among the following is not the characteristic feature of the Harappan settlement?',
    C1: 'Doorways and windows generally faced the side lanes and rarely opened onto the main streets',
    C2: 'Houses generally had separate bathing areas and toilets',
    C3: 'The citadel was walled but the lower town was not walled',
    C4: 'Drains and water chutes from the second storey were often built inside the wall',
    correctAnswer: 'Drains and water chutes from the second storey were often built inside the wall'
}

    ];

    $scope.qNo = 1;
    $scope.totalNoOfQuestionsCount = $scope.quesAndAns.length;
    $scope.testcomplete = false;
    $scope.shuffledArray = [];
    $scope.radioCount = 0;
    $scope.questionCountArray = [];
    $scope.score = 0;
    $scope.choiceRandom = [];
    $scope.choiceRandomData = [];
    //Initiate the Timer object.
    //$scope.Timer = null;
    
    for (i = 1; i <= $scope.totalNoOfQuestionsCount ; i++)
    {
        $scope.shuffledArray[i - 1] = i;
    }

    //Timer start function.
    //$scope.StartTimer = function ()
    //{
    //    $scope.Message = "Duration : ";

    //    //Initialize the Timer to run every 1000 milliseconds i.e. one second.
    //    $scope.Timer = $interval(function ()
    //    {
    //        //Display the current time.
    //        var time = $filter('date')(new Date(), 'HH:mm:ss');
    //        $scope.Message = "Duration :  " + time;
    //    }, 1000);
    //};

    ////Timer stop function.
    //$scope.StopTimer = function () {

    //    //Set the Timer stop message.
    //    $scope.Message = "Total Duration : ";

    //    //Cancel the Timer.
        
    //        $interval.cancel($scope.Timer);
        
    //};

    $scope.bindQuesToUi = function () {
        if ($scope.qNo <= $scope.totalNoOfQuestionsCount)
        {
            var position = $scope.shuffledArray[$scope.qNo - 1] - 1;
            console.log(position);
            $scope.resetRadios();
            $scope.question = $scope.quesAndAns[position].ques;
            $scope.choiceRandomData[0] = $scope.quesAndAns[position].C1;
            $scope.choiceRandomData[1] = $scope.quesAndAns[position].C2;
            $scope.choiceRandomData[2] = $scope.quesAndAns[position].C3;
            $scope.choiceRandomData[3] = $scope.quesAndAns[position].C4;

            $scope.shuffleChoices();
            $scope.bindRandomChoices();

            $scope.corrAns = $scope.quesAndAns[position].correctAnswer;
            $scope.userAnswered = false;
            $scope.radioCount = 0;
            $scope.qNo = $scope.qNo + 1;
            //$scope.StartTimer();
            $scope.startTimerWithInterval();
        }
        else
        {
            $scope.testcomplete = true;
        }
    };

    $scope.resetRadios = function () {
        $scope.valueAns = '';
    }

    $scope.bindRandomChoices = function (value)
    {
        $scope.choice1 = $scope.choiceRandomData[0];
        $scope.choice2 = $scope.choiceRandomData[1];
        $scope.choice3 = $scope.choiceRandomData[2];
        $scope.choice4 = $scope.choiceRandomData[3];
    }

    $scope.evaluateUserAnswer = function (value)
    {
        $scope.radioCount = $scope.radioCount + 1;
        $scope.userAnswered = true;
        if ($scope.radioCount === 1)
        {
            if (value === $scope.corrAns)
            {
                $scope.correct = true;
                $scope.score = $scope.score + 1;
            }
            else
            {
                $scope.correct = false;
            }
            //$scope.StopTimer();
            //$scope.r
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

    $scope.shuffleChoices = function () {
        a = $scope.choiceRandomData;
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
        $scope.choiceRandomData = a;
        //console.log($scope.shuffledArray);
    }

    $scope.timerWithInterval = 0;

    $scope.startTimerWithInterval = function ()
    {
        $scope.timerWithInterval = 0;
        if ($scope.myInterval)
        {
            $interval.cancel($scope.myInterval);
        }

        $scope.onInterval = function ()
        {
            $scope.timerWithInterval++;
        }
        $scope.myInterval = $interval($scope.onInterval, 1000);
    };

    $scope.resetTimerWithInterval = function ()
    {
        $scope.timerWithInterval = 0;
        $interval.cancel($scope.myInterval);
    }


    $scope.shuffle();
    $scope.shuffleChoices();
    $scope.bindQuesToUi();
    //$scope.StartTimer();
    $scope.startTimerWithInterval();
})
app.filter('hhmmss', function () {
    return function (time) {
        var sec_num = parseInt(time, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        var time = hours + ':' + minutes + ':' + seconds;
        return time;
    }
});

