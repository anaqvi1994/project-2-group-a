
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script type="text/javascript">
     $(document).ready($(function() {
    $("#datepicker").datepicker({
        onSelect:function(date) {
                                $.ajax({
                                    type: "POST",
                                    url: "/echo/json/",
                                    dataType: 'json',
                                    data: { json: JSON.stringify(date) },
                                    success: function(data){    
                                        console.log(data);                  
            }   
                                });
                            }
    });
}));
</script>