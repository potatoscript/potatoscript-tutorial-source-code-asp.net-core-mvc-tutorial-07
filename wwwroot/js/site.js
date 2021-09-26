// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//window onload
jQuery(document).ready(function() {

    jQuery("#table_data td").click(function () {
        var ri = jQuery(this).parent().parent().children().index(this.parentNode);
        var table = document.getElementById("table_data");
        document.getElementById("ProjectId").value = table.rows[ri].cells[0].innerText;
        document.getElementById("title").value = table.rows[ri].cells[1].innerText;
        document.getElementById("owner").value = table.rows[ri].cells[2].innerText;
        document.getElementById("duedate").value = table.rows[ri].cells[3].innerText;

    });

    jQuery("#thisgroup").change(function () {
        var obj = document.getElementById("thisgroup");
        document.getElementById("title").value = obj.options[obj.selectedIndex].text;
        document.getElementById("owner").value = obj.options[obj.selectedIndex].value;

    });


});