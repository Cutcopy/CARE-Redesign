//Course tab functions
$(document).ready(fuction(){
    $('#salesperson-tab a:first').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
    $('#reciprocal-tab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
    $('#post-tab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
    $('#continuing-tab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
    $('#salesperson-tab a[href="#Salesperson"]').tab('show')
});
