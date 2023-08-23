/// <reference types="../@types/jquery" />
import { Quiz } from "./quiz.module.js";
export class Setting{
    constructor(){
        document.getElementById('start').addEventListener("click",()=>{
        
            this.startQuestion()
        })

}
async startQuestion(){
    const category=document.getElementById('category').value;
    console.log(category);

    const difficulty = document.querySelector('[name="difficulty"]:checked').value
    console.log(difficulty);
    
    const amount=document.getElementById("amount").value;
    console.log("amount");
    if(amount>0){
        const result=await this.getQuestion(amount,category,difficulty)
        console.log(result);
        $('#setting').removeClass("show")
        $('#quiz').addClass("show")
        const quiz=new Quiz(result)
    }
    else{
        $("#alertNumber").fadeIn(1000)
    }



}
async getQuestion(amount,category,difficulty){
    const apiResponse=await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`)
    const response=await apiResponse.json();
    return response.results;
}
}