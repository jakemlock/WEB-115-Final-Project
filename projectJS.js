
let mealplanform = document.forms.mealplanner;
let userinfoform = document.forms.userinfoform;
const DAYSOFWEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MEALS = ["Breakfast", "SnackAM", "Lunch", "SnackPM", "Dinner"];




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


let dayofweek = document.getElementById("dayofweek");
let createmealplan = document.getElementById('createmealplan');
let clearbutton = document.getElementById("clearmealplan");

let mealplan = new MealPlanWeek("","","","","","","");

mealplanform.addEventListener('submit', mealplandata);
createmealplan.addEventListener('click',validateEmail);
clearbutton.addEventListener('click', clearmealplan);
let Index = dayofweek.selectedIndex = 0;


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

    Index += 1;
    if (Index >= 7)
    {
        Index = 0;
    }

    dayofweek.selectedIndex = Index;
    
    
   
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
    let emaildata = document.getElementById('email').value;
        

    let namedata = document.getElementById('name').value;
   

    let goaldata = document.getElementById('goal').value;

    let mealplantext = ("<html>\n<head>\n<title>Meal Plan</title>\n <script>function printmealplan(){window.print();}</script><link rel='stylesheet' href='projectJS.css'></head>\n<body>\n<table id = 'mealplantable'><h1 id = 'mealplanheading' >Your Meal Plan</h1>");
    for (let meal of MEALS)
    {
        mealplantext += "<tr>" 
        for (let day of DAYSOFWEEK)
        {
            if (mealplan[day][meal] != undefined)
            {
                if (meal == 'Breakfast')
                {
                    mealplantext += " <th> </th>" + "<th><u>" + day + "</u></th>";
                }
            
            }
        } 
        mealplantext += "</tr>\n"
    }
    for (let meal of MEALS)
    {
       

        mealplantext += "<tr>" 
        for (let day of DAYSOFWEEK)
        {
            if (mealplan[day][meal] != undefined)
            {
                if (day == 'Monday')
                {
                    mealplantext += "<th> "+  meal + ": </th>";
                    mealplantext += "<td>\n";
                    mealplantext +=  mealplan[day][meal];
                    mealplantext += "</td>\n <td id = 'fill'> </td>\n";
                }
                else
                {
                    mealplantext += "<td>\n";
                    mealplantext +=  mealplan[day][meal];
                    mealplantext += "</td>\n<td id = 'fill'> </td>\n";
                }
            }
        } 
        mealplantext += "</tr>\n"
    }
    mealplantext += "</table><br>\n"
    mealplantext += "<p id = 'userinfo'>" + "<b>Name:</b> "+ namedata + "<br>" + "<b>Email:</b> "+ emaildata + "<br>"+"<b>Your goal for the week:</b> "+ goaldata +"<br> <button id ='print' onclick ='printmealplan()'>Print Meal Plan </button> "+"</p>\n"
    mealplantext += ("</body>\n</html>");

    mealplanwindow = window.open('about:blank','','width=1450,height=800');
    mealplanwindow.document.write(mealplantext);
    
}


function validateEmail(event)
{
    let email = document.getElementById('email');
    let emailpattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let emailvalue = email.value;

    if (!emailpattern.test(emailvalue))
    {
        window.alert("Please submit a valid email.");
        event.preventDefault();
    }
    else
    {
        mealplanwindow();
    }


}


function clearmealplan(event)
{
    event.preventDefault();
    mealplan = new MealPlanWeek("","","","","","","");
    mealplanform.reset();
    userinfoform.reset();
    window.alert('Your Meal Plan has been cleared!')
}