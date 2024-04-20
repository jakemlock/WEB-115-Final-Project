
let mealplanform = document.forms.mealplanner;

let dayofweek = document.getElementById("dayofweek")

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
let mealplan = new MealPlanWeek;
mealplanform.addEventListener('submit', mealplandata);


function mealplandata(event){
    event.preventDefault();
    
    let breakfast = document.getElementById("breakfast");
    let snackam = document.getElementById("snackam");
    let lunch = document.getElementById("lunch");
    let snackpm = document.getElementById("snackpm");
    let dinner = document.getElementById("dinner");

    let breakfastdata = breakfast.value;
    let snackamdata = snackam.value;
    let lunchdata = lunch.value;
    let snackpmdata = snackpm.value;
    let dinnerdata = dinner.value;


    let mealplan = new MealPlanDay(breakfastdata, snackamdata, lunchdata, snackpmdata, dinnerdata);
    let dayofweekdata = dayofweek.value
    buildmealplan(mealplan, dayofweekdata);
   
}

function buildmealplan(mealplanday, dayofweek){

   
    if (dayofweek == "Monday")
    {
        mealplan.mon = mealplanday;
    }
    else if (dayofweek == "Tuesday")
    {
        mealplan.tue = mealplanday;
    }
    else if (dayofweek == "Wednesday")
    {
        mealplan.wed = mealplanday;
    }
    else if (dayofweek == "Thursday")
    {
        mealplan.thur = mealplanday;
    }
    else if (dayofweek == "Friday")
    {
        mealplan.fri = mealplanday;
    }
    else if (dayofweek == "Saturday")
    {
        mealplan.sat = mealplanday;
    }
    else if (dayofweek == "Sunday")
    {
        mealplan.sun = mealplanday;
    }

    console.log(mealplan)
    return mealplan

}
