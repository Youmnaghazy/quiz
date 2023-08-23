export class Quiz{
    constructor(result){
        console.log("Quiz",result);
        this.result=result;
        document.getElementById("to").innerText=this.result.length
        this.currentIndex=0;
        this.from=document.getElementById("from")
        this.question=document.getElementById("questionTitle")
        this.questionContent=document.getElementById("questionContent")
        this.showQuestion()
        this.correctAnswer;
        this.score=0;

        //event
        document.getElementById("nextQuestion").addEventListener("click",()=>{
            console.log("next");
            this.nextQuestion()
        })
        document.getElementById("end").addEventListener("click",()=>{
            location.reload();
        })



    }

    showQuestion(){
        this.from.innerText=this.currentIndex + 1;
        const currentQuestion=this.result[this.currentIndex]
        console.log("currentQuestion",currentQuestion);
        this.question.innerText =currentQuestion.question;

        const answer=[...currentQuestion.incorrect_answers]
        this.correctAnswer =currentQuestion.correct_answer
        const randomNumber=Math.ceil(Math.random()*answer.length)
        answer.splice(randomNumber,0,this.correctAnswer)
        console.log(randomNumber);
        console.log(answer);

        let answerbox=``
        for(let i=0;i<answer.length;i++){
            answerbox+=`                        <li class="my-3  animate__animated">
            <div class="pretty p-default p-round p-smooth p-plain">
               <input type="radio" name="answer" value="${answer[i]}" />
               <label>${answer[i]}</label>
             
            </div>`
        }
        this.questionContent.innerHTML=answerbox;
    }
    nextQuestion(){
        const currentAnswer=document.querySelector('[name="answer"]:checked')?.value
        if (currentAnswer != undefined){
        $('#alertAns').fadeOut(300)
        this.currentIndex ++;

        if(this.currentIndex > this.result.length -1){
            $("#finish").addClass("show")
            $("#quiz").removeClass("show")
            document.getElementById("score").innerText=this.score
        }
        else{

            if(currentAnswer===this.correctAnswer){
                $("#correct").fadeIn(0);
                setTimeout(()=>{
                    $("#correct").fadeOut(0);

                },300)
                this.score ++;

            }
            else{
                $("#inCorrect").fadeIn(0)
                setTimeout(()=>{
                    $("#inCorrect").fadeOut(0);

                },300)
            }
            this.showQuestion();
        }

    }
    else{
        $('#alertAns').fadeIn(300)
    }
    }

}