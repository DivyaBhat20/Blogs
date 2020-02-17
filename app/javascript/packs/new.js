$(document).ready(function() {

    function buildSelect(table) {
        table.columns([1]).every(function() {
            var column = table.column(this, {search: 'applied'});
            var select = $('<select><option value=""></option></select>')
            .appendTo($(column.footer()).empty())
            //.appendTo('#demo')
            .on('change', function() {
                var val = $.fn.dataTable.util.escapeRegex(
                $(this).val()
                );
                column
                .search(val ? '^' + val + '$' : '', true, false)
                .draw();
                });
            column.data().unique().sort().each(function(d, j) {
            select.append('<option value="' + d + '">' + d + '</option>');
            });
        });
    }

    var table = $('#blogs-datatable').DataTable({
        "ajax": {"url": $('#blogs-datatable').data('source')},
        columns: [{"data": "title"},{"data": "published"}],
        initComplete: function() {
            buildSelect(table);
        }
    });
});