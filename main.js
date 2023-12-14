function setIframeSrc() {
    var iframe = document.querySelector('#iframe');
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // var mobileLink = 'https://app.powerbi.com/view?r=eyJrIjoiYmNiZDViOTUtMzRhZC00ZTNlLTgwNjMtY2QyYjZmMDI5YmVhIiwidCI6ImVhYjIyMDQ5LTY0YWUtNDcwOC04YmFlLWRhOTA0NTkwZThkZSJ9&pageName=ReportSection5fc548ad805310641ada';
  var mobileLink = "https://www.google.com/"  
  var desktopLink = 'https://app.powerbi.com/view?r=eyJrIjoiYmNiZDViOTUtMzRhZC00ZTNlLTgwNjMtY2QyYjZmMDI5YmVhIiwidCI6ImVhYjIyMDQ5LTY0YWUtNDcwOC04YmFlLWRhOTA0NTkwZThkZSJ9&pageName=ReportSection5fc548ad805310641ada';

    if (isMobile) {
        iframe.src = mobileLink;
    } else {
        iframe.src = desktopLink;
    }
}

// Call the function when the document is ready
$(document).ready(function () {
    setIframeSrc();
});


