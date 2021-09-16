$.fn.dataTable.ext.errMode = 'none';
$('#dataTable').dataTable({
    "aLengthMenu": [[10, 100, 500, -1], [10, 100, 500, "All"]],
    paging: true,
    "serverSide": true,
    "ajax": function (data, callback, settings) {
        $.ajax({
            url: '/getDataA',
            type: 'POST',
            data: {
                test: 'test',
                RecordsStart: data.start,
                PageSize: data.length
            },
            success: function (data) {
                console.log(data);
                callback({
                    data: data.Data,
                    recordsTotal: data.TotalRecords,
                    recordsFiltered: data.RecordsFiltered
                });
            }
        });
    },
    columns: [
        {
            data: '_id',
            render: function (data, type, row, meta) {
                return '<input type="checkbox" class="excludeThisClass"value = "' + data + '" >';
            }
        },
        
         {
            data: 'image',
            render: function (data, type, row, meta) {
                return '<img src="https://mr-promotion.s3.ap-south-1.amazonaws.com/company-video/' + data + '" alt="image" height="100px" width="100px" />';
            }
        },

        { data: 'division' },
        { data: 'rbm_name' },
        { data: 'abm_name' },
        { data: 'bo_name' },
        { data: 'hq_name' },

        { data: 'doctor_name' },
        // { data: 'image' },

       

        { data: 'createdAt' },


        // { data: 'hospital_name' },
        // { data: 'image' },
    ]
});
