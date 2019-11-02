$(document).ready(function(){
    
    $('#submitbtn').click(function(){
        
        if (GenderSelectbtn == '' ) {
          alert("Click On Male / Female Icon");
          return;
        }
        if ( $('#maxAge').val() == '' || $('#minAge').val() == '' ) {
            alert('Enter Min/Max age values');
            return;
        }

        let noMatch_Counter = 0;

        for (let i = 0; i < users.length; i++) {
            if (users[i].age <= $('#maxAge').val() && users[i].age >= $('#minAge').val()) { 
                noMatch_Counter = 1;
                break;
            }
        }
        if(noMatch_Counter == 0){
            alert('There Is No Match');
            return;
        }

        conditions_arr = {"minAge":$('#minAge').val(),"maxAge":$('#maxAge').val(),"gender":GenderSelectbtn}
        
        sessionStorage.clear();
        sessionStorage.setItem('conditions_arr', JSON.stringify(conditions_arr));
        
        // Switch To new window
        window.open('Users.html','_self');

        
    }); 
});

    

    
    
    
    
    
