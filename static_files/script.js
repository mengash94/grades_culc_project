function checkInput() {
    const subject_input = document.getElementById("subject").value;
    const grade_input = document.getElementById("grades").value;
    const units_input = document.getElementById("units").value;
    
    // Validate grade input
    if (grade_input > 100) {
      document.getElementById("grades").value = 100;
    }
    if (grade_input < 0) {
      document.getElementById("grades").value = 0;
    }
    
    // Validate units input
    if (units_input < 1) {
      document.getElementById("units").value = 1;
    } else if (units_input > 15) {
      document.getElementById("units").value = 15;
    }
}