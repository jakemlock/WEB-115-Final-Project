
let mealplanform = document.forms.mealplanner;
const DAYSOFWEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const daysuffixes =  ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
const MEALS = ["breakfast", "snackam", "lunch", "snackpm", "dinner"];

let dayofweek = document.getElementById("dayofweek");
let createmealplan = document.getElementById('createmealplan');

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
let mealplan = new MealPlanWeek("","","","","","","");
mealplanform.addEventListener('submit', mealplandata);
let creatmealplan = document.getElementById('createmealplan')
creatmealplan.addEventListener('click',mealplanwindow)







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
    let dayofweekdata = dayofweek.value;
    buildmealplan(mealplan, dayofweekdata);
    
   
}

function buildmealplan(mealplanday, dayofweek){

   switch(dayofweek)
   {
    case "Monday": mealplan.mon = mealplanday; break;
    case "Tuesday": mealplan.tue = mealplanday; break;
    case "Wednesday": mealplan.wed = mealplanday; break;
    case "Thursday": mealplan.thur = mealplanday; break;
    case "Friday":  mealplan.fri = mealplanday; break;
    case "Saturday": mealplan.sat = mealplanday; break;
    case "Sunday": mealplan.sun = mealplanday; break;

   }
    console.log(mealplan)
    
}


function mealplanwindow()
{
    mealplantext = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n<table><td>");
    for (let meal of MEALS)
    {
        mealplantext += "<tr>" 
        for (let day of daysuffixes)
        {

            mealplantext += "<td>\n";
            mealplantext += "meal go here - " + day
            mealplantext += "</td>\n";
        } 
        mealplantext += "</tr>\n"
    }
    mealplantext += ("</td>\n</table>\n</body>\n</html>");

    mealplanwindow = window.open('about:blank','','width=1000,height=600,left=800,top=800');
    mealplanwindow.document.write(mealplantext);
}