
let mealplanform = document.forms.mealplanner;



class MealPlanDay {
    constructor(breakfast, snackam, lunch, snackpm, dinner)
    {
        this.breakfast = breakfast;
        this.snackam = snackam;
        this.lunch = lunch;
        this.snackpm = snackpm;
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
let MEALPLAN = new MealPlanWeek
mealplanform.addEventListener('submit', mealplandata)


function mealplandata(){
    
    let breakfast = document.getElementsByClassName("breakfast");
    let snackam = document.getElementById("snackam");
    let lunch = document.getElementById("lunch");
    let snackpm = document.getElementById("snackpm");
    let dinner = document.getElementById("dinner");

    let breakfastdata = breakfast.value;
    let snackamdata = snackam.value;
    let lunchdata = lunch.value;
    let snackpmdata = snackpm.value;
    let dinnerdata = dinner.value;


    let mealplanday = new MealPlanDay(breakfastdata, snackamdata, lunchdata, snackpmdata, dinnerdata);
   
    buildmealplan(mealplanday);
   
}

// function buildmealplan(mealplanday, dayofweek){

    
//     if (dayofweek == "Monday")
//     {
//         MEALPLAN.mon = mealplanday;
//     }
//     else if (dayofweek == "Tuesday")
//     {
//         MEALPLAN.tue = mealplanday;
//     }
//     else if (dayofweek == "Wednesday")
//     {
//         MEALPLAN.wed = mealplanday;
//     }
//     else if (dayofweek == "Thursday")
//     {
//         MEALPLAN.thur = mealplanday;
//     }
//     else if (dayofweek == "Friday")
//     {
//         MEALPLAN.fri = mealplanday;
//     }
//     else if (dayofweek == "Saturday")
//     {
//         MEALPLAN.sat = mealplanday;
//     }
//     else if (dayofweek == "Sunday")
//     {
//         MEALPLAN.sun = mealplanday;
//     }

    

// }


