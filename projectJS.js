
let mealplanform = document.forms.mealplanner;
const DAYSOFWEEK = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
const MEALS = ["breakfast", "snack1", "lunch", "snack2", "dinner"];



class MealPlanDay {
    constructor(breakfast, snack1, lunch, snack2, dinner )
    {
        this.breakfast = breakfast;
        this.snack1 = snack1;
        this.lunch = lunch;
        this.snack2 = snack2;
        this.dinner = dinner
    }
}

class MealPlanWeek {
    constructor(mon, tue, wed, thur, fri, sat, sun)
    {
        this.mon = mon;
        this.tue = tue;
        this.wed = wed;
        this.thur = thur;
        this.fri = fri;
        this.sat = sat;
        this.sun = sun;
    }
}

window.addEventListener("load", function()
{
    for (let day of DAYSOFWEEK)
  {
        for (let meal of MEALS){

            let newelem = document.createElement("input");
            let newlabel = document.createElement("label");

            newelem.setAttribute("type", "text");
            newelem.setAttribute("name", meal + day)

            newelem.setAttribute("id", meal + day)
            newlabel.setAttribute("for",meal + day )

            newlabel.innerText = meal + day;

            mealplanform.appendChild(newelem);
            mealplanform.appendChild(newlabel);
        }
  }

    let button = document.createElement("button");
    button.setAttribute("type", "text");
    button.setAttribute("id", "mealday");
    button.textContent = "Submit Meals";
    mealplanform.appendChild(button);

})


let MEALPLAN = new MealPlanWeek
mealplanform.addEventListener('submit', mealplandata)


function mealplandata()
{
    for (let day of DAYSOFWEEK)
    {
        let mealPlanDay = new MealPlanDay();
        for (let meal of MEALS)
        {
            let mealelem = document.getElementById(meal + day);
            mealPlanDay[meal] = mealelem.value;
        
        MEALPLAN[day] = mealPlanDay;
    }    

}



}
