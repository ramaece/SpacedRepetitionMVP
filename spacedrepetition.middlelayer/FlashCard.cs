using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace spacedrepetition.middlelayer
{
    public class FlashCardsList
    {
        List<FlashCard> FlashCardList;

    }
    public class FlashCard
    {
        public int FlashCardId;
        public string Question;
        public string Answer;
        public List<string> Choices;
        public string UserAnswer;
        public string CorrectAnswer;

    }
    public class SRAlgo
    {

    }
}
