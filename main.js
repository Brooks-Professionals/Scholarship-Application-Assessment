// Assign Variables to html tags
let fname = document.getElementById("fname"),
    fnameError = document.getElementById("fnameError"),
    surName = document.getElementById("surName"),
    surNameError = document.getElementById("surNameError"),
    birthDate = document.getElementById("birthDate"),
    birthDateError = document.getElementById("birthDateError"),
    selectGender = document.getElementById("selectGender"),
    selectGenderError = document.getElementById("selectGenderError"),
    phone = document.getElementById("phone"),
    phoneError = document.getElementById("phoneError"),
    schoolName = document.getElementById("schoolName"),
    schoolNameError = document.getElementById("schoolNameError"),
    selectContinent = document.getElementById("selectContinent"),
    selectContinentError = document.getElementById("selectContinentError"),
    continentAfrica = document.getElementById("continentAfrica"),
    continentAntarctica = document.getElementById("continentAntarctica"),
    continentAsia = document.getElementById("continentAsia"),
    continentAustralia = document.getElementById("continentAustralia"),
    continentEurope = document.getElementById("continentEurope"),
    continentSouthamerica = document.getElementById("continentSouthamerica"),
    continentNorthamerica = document.getElementById("continentNorthamerica"),
    math = document.getElementById("math"),
    mathError = document.getElementById("mathError"),
    eng = document.getElementById("eng"),
    engError = document.getElementById("engError"),
    s = document.getElementById("s"),
    sError = document.getElementById("sError"),
    se = document.getElementById("se"),
    seError = document.getElementById("seError"),
    sel = document.getElementById("sel"),
    selError = document.getElementById("selError"),
    sele = document.getElementById("sele"),
    seleError = document.getElementById("seleError"),
    selec = document.getElementById("selec"),
    selecError = document.getElementById("selecError"),
    select = document.getElementById("select"),
    selectError = document.getElementById("selectError"),
    c = document.getElementById("c"),
    cError = document.getElementById("cError"),
    co = document.getElementById("co"),
    coError = document.getElementById("coError"),
    con = document.getElementById("con"),
    conError = document.getElementById("conError"),
    conf = document.getElementById("conf"),
    confError = document.getElementById("confError"),
    confu = document.getElementById("confu"),
    confuError = document.getElementById("confuError"),
    confus = document.getElementById("confus"),
    confusError = document.getElementById("confusError"),
    confuse = document.getElementById("confuse"),
    confuseError = document.getElementById("confuseError"),
    confused = document.getElementById("confused"),
    confusedError = document.getElementById("confusedError"),
    ctx = document.getElementById('myChart').getContext('2d');



// Declare Variables for values not yet known
let age;
let birthDatePoint = "";
let countryPoint = "";
let cScore = "";
let coScore = "";
let conScore = "";
let confScore = "";
let confuScore = "";
let confusScore = ""
let confuseScore = ""
let confusedScore = ""
let examTotal = "";
let Avg = "";
let gradePoint = "";
let overAllPoint = "";


// Start Assigning Event to Button
btnSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    submitForm();
    pointsChart();

    // Reset Form Inputs
    fname.value = "";
    surName.value = "";
    birthDate.value = "";
    selectGender.value = "";
    phone.value = "";
    schoolName.value = "";
    selectContinent.value = "";
    continentAfrica.value = "";
    math.value = "";
    eng.value = "";
    s.value = "";
    se.value = "";
    sel.value = "";
    sele.value = "";
    selec.value = "";
    select.value = "";
    c.value = "";
    co.value = ""
    con.value = "";
    conf.value = "";
    confu.value = ""
    confus.value = "";
    confuse.value = "";
    confused.value = "";
});

// Declare a function to validate and Submit the form
function submitForm() {
    if (fname.value == "" || fname.value == null) {
        fname.nextElementSibling.innerHTML = "First Name Required";
    } else {
        fname.nextElementSibling.innerHTML = "";
        document.getElementById("txtfname").innerHTML = fname.value;
    }

    if (surName.value == "" || surName.value == null) {
        surName.nextElementSibling.innerHTML = " Surname Required";
    } else {
        surName.nextElementSibling.innerHTML = "";
        document.getElementById("txtsurName").innerHTML = surName.value;
    }


    // Validation / Age and Points Allocation for Date of Birth
    if (birthDate.value == "" || birthDate.value == null) {
        birthDate.nextElementSibling.innerHTML = "Date of Birth Required";
    } else {
        birthDate.nextElementSibling.innerHTML = "";
        document.getElementById("txtbirthDate").innerHTML = birthDate.value;

        // Age Definition & Calculation
        let Year = new Date().getFullYear();
        let birthYear = new Date(birthDate.value).getFullYear();
        let age = (Year - birthYear);
        console.log("You are  " + age + " Years old")
        document.getElementById("txtbirthDate").innerHTML = age + " Years Old";

        // Points Allocation for Age
        if (age >= 18 && age < 25) {
            birthDatePoint = 100;
        } else if (age >= 25 && age < 31) {
            birthDatePoint = 80;
        } else if (age >= 31 && age < 36) {
            birthDatePoint = 50;
        } else if (age >= 36 && age < 41) {
            birthDatePoint = 30;
        } else {
            birthDatePoint = 10;
        }
        console.log("Your Date of Birth Points is: " + birthDatePoint)
    }


    if (selectGender.value == "" || selectGender.value == null) {
        selectGender.nextElementSibling.innerHTML = "Gender Required";
    } else {
        selectGender.nextElementSibling.innerHTML = "";
        document.getElementById("txtselectGender").innerHTML = selectGender.value;
    }

    if (phone.value == "" || phone.value == null) {
        phone.nextElementSibling.innerHTML = "Phone Number Required";
    } else {
        phone.nextElementSibling.innerHTML = "";
        document.getElementById("txtphone").innerHTML = phone.value;
    }

    if (schoolName.value == "" || schoolName.value == null) {
        schoolName.nextElementSibling.innerHTML = "School Name Required";
    } else {
        schoolName.nextElementSibling.innerHTML = "";
        document.getElementById("txtschoolName").innerHTML = schoolName.value;
    }


    // Continent Validation to be continued, e don tire me
    if (selectContinent.value == "" || selectContinent.value == null) {
        selectContinent.nextElementSibling.innerHTML = "Please Choose a Continent";
    } else {
        selectContinent.nextElementSibling.innerHTML = "";
        document.getElementById("txtselectContinent").innerHTML = selectContinent.value;
    }

    if (continentAfrica.value == "" || continentAfrica.value == null) {
        continentAfrica.nextElementSibling.innerHTML = "";
    } else {
        continentAfrica.nextElementSibling.innerHTML = "";
        document.getElementById("txtcName").innerHTML = continentAfrica.value;
    }

    if (continentAntarctica.value == "" || continentAntarctica.value == null) {
        continentAntarctica.nextElementSibling.innerHTML = "";
    } else {
        continentAntarctica.nextElementSibling.innerHTML = "";
        document.getElementById("txtcName").innerHTML = continentAntarctica.value;
    }

    if (continentAsia.value == "" || continentAsia.value == null) {
        continentAsia.nextElementSibling.innerHTML = "";
    } else {
        continentAsia.nextElementSibling.innerHTML = "";
        document.getElementById("txtcName").innerHTML = continentAsia.value;
    }

    if (continentAustralia.value == "" || continentAustralia.value == null) {
        continentAustralia.nextElementSibling.innerHTML = "";
    } else {
        continentAustralia.nextElementSibling.innerHTML = "";
        document.getElementById("txtcName").innerHTML = continentAustralia.value;
    }

    if (continentEurope.value == "" || continentEurope.value == null) {
        continentEurope.nextElementSibling.innerHTML = "";
    } else {
        continentEurope.nextElementSibling.innerHTML = "";
        document.getElementById("txtcName").innerHTML = continentEurope.value;
    }

    if (continentSouthamerica.value == "" || continentSouthamerica.value == null) {
        continentSouthamerica.nextElementSibling.innerHTML = "";
    } else {
        continentSouthamerica.nextElementSibling.innerHTML = "";
        document.getElementById("txtcName").innerHTML = continentSouthamerica.value;
    }

    if (continentNorthamerica.value == "" || continentNorthamerica.value == null) {
        continentNorthamerica.nextElementSibling.innerHTML = "";
    } else {
        continentNorthamerica.nextElementSibling.innerHTML = "";
        document.getElementById("txtcName").innerHTML = continentNorthamerica.value;
    }


    // Country's Points Allocation
    if (continent.value == "" || continent.value == null) {
        countryPoint = "You Have " + 0 + " Points, Please Select Your Continent & Country";
    } else if (continent.value == "Africa") {
        countryPoint = 50;
    } else if (continent.value == "Asia") {
        countryPoint = 40;
    } else if (continent.value == "South-America") {
        countryPoint = 30;
    } else if (continent.value == "North-America") {
        countryPoint = 20;
    } else {
        countryPoint = 10;
    }
    console.log("Your Country Points is: " + countryPoint)


    // Subjects Selection Validation
    if (math.value == "" || math.value == null) {
        math.nextElementSibling.innerHTML = "Subject Required";
    } else {
        math.nextElementSibling.innerHTML = "";
        document.getElementById("txts").innerHTML = math.value;
    }

    if (eng.value == "" || eng.value == null) {
        eng.nextElementSibling.innerHTML = "Subject Required";
    } else {
        eng.nextElementSibling.innerHTML = "";
        document.getElementById("txtsu").innerHTML = eng.value
    }

    if (s.value == "" || s.value == null) {
        s.nextElementSibling.innerHTML = "Subject Required";
    } else {
        s.nextElementSibling.innerHTML = "";
        document.getElementById("txtsub").innerHTML = s.value
    }

    if (se.value == "" || se.value == null) {
        se.nextElementSibling.innerHTML = "Subject Required";
    } else {
        se.nextElementSibling.innerHTML = "";
        document.getElementById("txtsubj").innerHTML = se.value
    }

    if (sel.value == "" || sel.value == null) {
        sel.nextElementSibling.innerHTML = "Subject Required";
    } else {
        sel.nextElementSibling.innerHTML = "";
        document.getElementById("txtsubje").innerHTML = sel.value
    }

    if (sele.value == "" || sele.value == null) {
        sele.nextElementSibling.innerHTML = "Subject Required";
    } else {
        sele.nextElementSibling.innerHTML = "";
        document.getElementById("txtsubjec").innerHTML = sele.value
    }

    if (selec.value == "" || selec.value == null) {
        selec.nextElementSibling.innerHTML = "Subject Required";
    } else {
        selec.nextElementSibling.innerHTML = "";
        document.getElementById("txtsubject").innerHTML = selec.value
    }

    if (select.value == "" || select.value == null) {
        select.nextElementSibling.innerHTML = "Subject Required";
    } else {
        select.nextElementSibling.innerHTML = "";
        document.getElementById("txtsubjects").innerHTML = select.value;
    }


    // Score Input Validation
    if (c.value == "" || c.value == null) {
        c.nextElementSibling.innerHTML = "Enter Score";
    } else {
        c.nextElementSibling.innerHTML = "";
        document.getElementById("txtt").innerHTML = c.value;
    }

    if (co.value == "" || co.value == null) {
        co.nextElementSibling.innerHTML = "Enter Score";
    } else {
        co.nextElementSibling.innerHTML = "";
        document.getElementById("txtth").innerHTML = co.value
    }

    if (con.value == "" || con.value == null) {
        con.nextElementSibling.innerHTML = "Enter Score";
    } else {
        con.nextElementSibling.innerHTML = "";
        document.getElementById("txtthe").innerHTML = con.value
    }

    if (conf.value == "" || conf.value == null) {
        conf.nextElementSibling.innerHTML = "Enter Score";
    } else {
        conf.nextElementSibling.innerHTML = "";
        document.getElementById("txtthem").innerHTML = conf.value
    }

    if (confu.value == "" || confu.value == null) {
        confu.nextElementSibling.innerHTML = "Enter Score";
    } else {
        confu.nextElementSibling.innerHTML = "";
        document.getElementById("txtthemo").innerHTML = confu.value
    }

    if (confus.value == "" || confus.value == null) {
        confus.nextElementSibling.innerHTML = "Enter Score";
    } else {
        confus.nextElementSibling.innerHTML = "";
        document.getElementById("txtthemom").innerHTML = confus.value
    }

    if (confuse.value == "" || confuse.value == null) {
        confuse.nextElementSibling.innerHTML = "Enter Score";
    } else {
        confuse.nextElementSibling.innerHTML = "";
        document.getElementById("txtthemome").innerHTML = confuse.value
    }

    if (confused.value == "" || confused.value == null) {
        confused.nextElementSibling.innerHTML = "Enter Score";
    } else {
        confused.nextElementSibling.innerHTML = "";
        document.getElementById("txtthemomet").innerHTML = confused.value
    }


    // Score Calculation
    let cScore = (parseInt(c.value));
    let coScore = (parseInt(co.value));
    let conScore = (parseInt(con.value));
    let confScore = (parseInt(conf.value));
    let confuScore = (parseInt(confu.value));
    let confusScore = (parseInt(confus.value));
    let confuseScore = (parseInt(confuse.value));
    let confusedScore = (parseInt(confused.value));

    let examTotal = (cScore + coScore + conScore + confScore + confuScore + confusScore + confuseScore + confusedScore);
    console.log("Your Total Exam Score is: " + examTotal + " out of 800");


    // Average Allocation
    let Avg = (examTotal / 8);
    console.log("Your Average Score is: " + Avg);


    // Grades Allocation
    if (Avg >= 90 && Avg < 101) {
        gradePoint = 150;
    } else if (Avg >= 85 && Avg < 90) {
        gradePoint = 140;
    } else if (Avg >= 75 && Avg < 85) {
        gradePoint = 120;
    } else
    if (Avg >= 65 && Avg < 75) {
        gradePoint = 100;
    } else if (Avg >= 60 && Avg < 65) {
        gradePoint = 80;
    } else if (Avg >= 50 && Avg < 60) {
        gradePoint = 50;
    } else if (Avg >= 40 && Avg < 50) {
        gradePoint = 20;
    } else {
        gradePoint = 0;
    }
    console.log("Your Grade Points is: " + gradePoint);


    let overAllPoint = (parseInt(birthDatePoint + countryPoint + gradePoint));
    console.log("Your Grand Total Point is: " + overAllPoint);

    if (overAllPoint >= 180) {
        statusText.innerHTML = "CONGRATULATION, You are QUALIFIED for INTI the Scholarship"
    } else {
        statusText.innerHTML = "SORRY, You are NOT QUALIFIED for INTI Scholarship at this Time"
    }
}


function pointsChart() {
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Date of Birth Points', 'Country Points', 'Grade Points'],
            datasets: [{
                label: 'STUDENT SCHOLARSHIP POINTS',
                data: [birthDatePoint, countryPoint, gradePoint],
                backgroundColor: [
                    'red(255, 99, 132, 0.2)',
                    'green(54, 162, 235, 0.2)',
                    'purple(255, 206, 86, 0.2)',
                ],


                hoverBorderColor: [
                    'yellow(255, 99, 132, 0.2)',
                    'red(54, 162, 235, 0.2)',
                    'pink(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',

                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
}




let continent = document.getElementById("selectContinent");
let africa = document.getElementById("continentAfrica");
let antarctica = document.getElementById("continentAntarctica");
let asia = document.getElementById("continentAsia");
let australia = document.getElementById("continentAustralia");
let europe = document.getElementById("continentEurope");
let southAmerica = document.getElementById("continentSouthamerica");
let northAmerica = document.getElementById("continentNorthamerica");

continent.addEventListener("change", function() {
    if (continent.value == "Africa") {
        africa.style.display = "block";
        antarctica.style.display = "none";
        asia.style.display = "none";
        australia.style.display = "none";
        europe.style.display = "none";
        southAmerica.style.display = "none";
        northAmerica.style.display = "none";

    } else if (continent.value == "Antarctica") {
        africa.style.display = "none";
        antarctica.style.display = "block";
        asia.style.display = "none";
        australia.style.display = "none";
        europe.style.display = "none";
        southAmerica.style.display = "none";
        northAmerica.style.display = "none";

    } else if (continent.value == "Asia") {
        africa.style.display = "none";
        antarctica.style.display = "none";
        asia.style.display = "block";
        australia.style.display = "none";
        europe.style.display = "none";
        southAmerica.style.display = "none";
        northAmerica.style.display = "none";

    } else if (continent.value == "Australia") {
        africa.style.display = "none";
        antarctica.style.display = "none";
        asia.style.display = "none";
        australia.style.display = "block";
        europe.style.display = "none";
        southAmerica.style.display = "none";
        northAmerica.style.display = "none";

    } else if (continent.value == "Europe") {
        africa.style.display = "none";
        antarctica.style.display = "none";
        asia.style.display = "none";
        australia.style.display = "none";
        europe.style.display = "block";
        southAmerica.style.display = "none";
        northAmerica.style.display = "none";

    } else if (continent.value == "South-America") {
        africa.style.display = "none";
        antarctica.style.display = "none";
        asia.style.display = "none";
        australia.style.display = "none";
        europe.style.display = "none";
        southAmerica.style.display = "block";
        northAmerica.style.display = "none";

    } else {
        africa.style.display = "none";
        antarctica.style.display = "none";
        asia.style.display = "none";
        australia.style.display = "none";
        europe.style.display = "none";
        southAmerica.style.display = "none";
        northAmerica.style.display = "block";
    }

});