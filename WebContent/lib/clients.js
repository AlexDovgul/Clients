$(document).ready(function() {
				var oTable = $('#example').dataTable( {
					"bProcessing": true,
					"sAjaxSource": "arrays.txt",
					"aLengthMenu": [[25, 50, 100, -1], [25, 50, 100, "���"]],
					"iDisplayLength": 25,
					
					

 			 *        "oLanguage": {
       "sInfo": "Got a total of _TOTAL_ entries to show (_START_ to _END_)"
        "sInfo": "����� �� _TOTAL_ ������� (_START_ to _END_)"
"sNext": "���������",
					"sPrevious": "����������"
					"sInfoEmpty": "�������� 0 � 0 �� 0 �������",
					"sInfoFiltered": "(������������� _MAX_ �������)",
					"sLengthMenu": "�������� _MENU_ ������(��)",
					"sSearch": "�����:",
					"sZeroRecords": "������ �� �������"
    }
    } );
   } );
					
				} );
			} );