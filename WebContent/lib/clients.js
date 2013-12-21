$(document).ready(function() {
				var oTable = $('#example').dataTable( {
					"bProcessing": true,
					"sAjaxSource": "arrays.txt",
					"aLengthMenu": [[25, 50, 100, -1], [25, 50, 100, "Все"]],
					"iDisplayLength": 25,
					
					

 			 *        "oLanguage": {
       "sInfo": "Got a total of _TOTAL_ entries to show (_START_ to _END_)"
        "sInfo": "Всего из _TOTAL_ записей (_START_ to _END_)"
"sNext": "Следующая",
					"sPrevious": "Предыдущая"
					"sInfoEmpty": "Показано 0 к 0 из 0 записей",
					"sInfoFiltered": "(Отфильтровано _MAX_ записей)",
					"sLengthMenu": "Показать _MENU_ записи(ей)",
					"sSearch": "Поиск:",
					"sZeroRecords": "Ничего не найдено"
    }
    } );
   } );
					
				} );
			} );