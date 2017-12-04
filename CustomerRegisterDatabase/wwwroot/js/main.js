$(document).ready(function () {
    UpdateTable();
    $("#addForm button").click(function () {

        $.ajax({
            url: '/api/customer/',
            method: 'POST',
            data: {
                "FirstName": $("#addForm [name=FirstName]").val(),
            }

        })
            .done(function (result) {

                console.log("Success!", result);
                UpdateTable();

            })

            .fail(function (xhr, status, error) {

                alert(`Fail!`)
                console.log("Error", xhr, status, error);

            })
    });
    function UpdateTable() {
        $('#customerTable').empty();
        $.ajax({
            url: '/api/customer/',
            method: 'Get',

        })
            .done(function (result) {
                console.log("Success!", result)
                $.each(result, function (i, item) {
                    var $tr = $('<tr>').append(
                        $('<th scope="row">').text(i + 1),
                        $('<td>').text(item.firstName),
                        $('<td>').append('<button class="btn btn-danger remove" data-removeId="' + item.id + '"> Ta bort </button> <button class="btn btn-success uppgrade" data-uppgradeId="' + item.id + '" data-firstName="' + item.firstName + '"> Uppgradera </button>')
                    ).appendTo('#customerTable');
                });

            })

            .fail(function (xhr, status, error) {

                alert(`Fail!`)
                console.log("Error", xhr, status, error);

            })
    }

    $(document).on('click', '.remove', function () {
        var id = $(this).attr('data-removeId');
        console.log(id);
        $.ajax({
            url: "/api/customer/remove",
            type: 'POST',
            data: { 'id': id },
        })
            .done(function (result) {
                alert(id + " deleted");
                UpdateTable();
            })
    });
    $(document).on('click', '.uppgrade', function () {
        $("#upgradeCustomerDiv").css('display', 'inline-block');
        var id = $(this).attr('data-uppgradeId');
        var firstName = $(this).attr('data-firstName');
        $('#firstName').val(firstName);
        $("#uppgradeDB").click(function () {
        var firstName = $('#firstName').val();
        console.log(firstName);
        console.log(id);
        $.ajax({
            url: "/api/customer/uppgrade",
            type: 'POST',
            data: { 'id': id, 'firstName': firstName},
        })
            .done(function (result) {
                $('#firstName').empty();
                $("#upgradeCustomerDiv").css('display', 'none');
                alert(id + " uppgraded");
                UpdateTable();
            })
        })

    });
});



