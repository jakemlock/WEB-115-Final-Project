
let mealplanform = document.forms.mealplanner;
const DAYSOFWEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MEALS = ["Breakfast", "SnackAM", "Lunch", "SnackPM", "Dinner"];

let dayofweek = document.getElementById("dayofweek");
let createmealplan = document.getElementById('createmealplan');

class MealPlanDay {
    constructor(Breakfast, SnackAM, Lunch, SnackPM, Dinner)
    {
        this.Breakfast = Breakfast;
        this.SnackAM = SnackAM;
        this.Lunch = Lunch;
        this.SnackPM = SnackPM;
        this.Dinner = Dinner
    }
}

class MealPlanWeek {
    constructor(mon, tue, wed, thur, fri, sat, sun)
    {
        this.Monday = mon;
        this.Tuesday = tue;
        this.Wednesday = wed;
        this.Thursday = thur;
        this.Friday = fri;
        this.Saturday = sat;
        this.Sunday = sun;
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

    mealplanform.reset();
    
   
}

function buildmealplan(mealplanday, dayofweek){

   switch(dayofweek)
   {
    case "Monday": mealplan.Monday = mealplanday; break;
    case "Tuesday": mealplan.Tuesday = mealplanday; break;
    case "Wednesday": mealplan.Wednesday = mealplanday; break;
    case "Thursday": mealplan.Thursday = mealplanday; break;
    case "Friday":  mealplan.Friday = mealplanday; break;
    case "Saturday": mealplan.Saturday = mealplanday; break;
    case "Sunday": mealplan.Sunday= mealplanday; break;

   }
    console.log(mealplan)
    
}


function mealplanwindow()
{
    mealplantext = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n<table><td>");
    for (let meal of MEALS)
    {
        mealplantext += "<tr>" 
        for (let day of DAYSOFWEEK)
        {
            if (mealplan[day][meal] != undefined)
            {
                mealplantext += "<th>" + day + " " +  meal + "</th>";
                mealplantext += "<td>\n";
                mealplantext +=  mealplan[day][meal];
                mealplantext += "</td>\n";
            }
        } 
        mealplantext += "</tr>\n"
    }
    mealplantext += ("</td>\n</table>\n</body>\n</html>");

    mealplanwindow = window.open('about:blank','','width=1000,height=500,left=1000,top=800');
    mealplanwindow.document.write(mealplantext);
}