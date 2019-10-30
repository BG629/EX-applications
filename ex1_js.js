$(document).ready(function(){
    class profile{

        constructor(id, name, gender, age, height, city, image, premium){
            this.id = id;
            this.name;
            this.gender;
            this.age;
            this.height;
            this.city;
            this.image;
            this.premium;
        }
    
        Render(){
    
            return '<p>ID: '+ this.id +'</p><br> <p>Name: '+this.name+'</p><br> <p>Gender: '+this.gender+'</p><br> <p>Age: '+this.age+'</p><br>'+
             '<p>Height: '+this.height+'</p><br> <p>City: '+this.city+'</p><br> <p>Image: '+this.image+'</p><br> <p>Premium: '+this.premium+'</p><br>'
    
        }
    }
    
    class premium extends profile{
        
        constructor(id, name, gender, age, height, city, image, premium, hobbies){
            super(id, name, gender, age, height, city, image, premium)
            this.hobbies = hobbies;
        }
    
        Render(hobbiesArr){ // CHECK THIS ONE ?????
    
            st = 'Hobbies: '
            for (let i = 0; i < hobbiesArr.length; i++) {
                st +=  hobbiesArr[i]+' ';
            }
    
            return this.Render() + st
        }
    }
    
    class MainApp{
    
        constructor(userArr){
    
            for (let i = 0; i < userArr.length; i++) {
    
                if(this.userArr[i].premium == true){ // Premium user
                    this.userArr[i] = new premium(this.userArr[i].id,this.userArr[i].name,this.userArr[i].gender,this.userArr[i].age,
                    this.userArr[i].height,this.userArr[i].city,this.userArr[i].image,this.userArr[i].premium,this.userArr[i].hobbies)
                    continue;
                }
                // Not Premium
                this.userArr[i] = new profile(this.userArr[i].id,this.userArr[i].name,this.userArr[i].gender,this.userArr[i].age,
                this.userArr[i].height,this.userArr[i].city,this.userArr[i].image,this.userArr[i].premium)
            }
            
        }

        Filter(conditions){
            
        }

        Next(){

        }

        Render(){

        }
    
    } 


    $('#submitbtn').click(function(){
        
        if (GenderSelectbtn == '' ) {
          alert("Click On Male / Female Icon");
          return
        }
        if ( $('#maxAge').val() == '' || $('#minAge').val() == '' ) {
            alert('Enter Min/Max age values')
            return
        }
        if($('#minAge').val() < 18){ alert('Are U A Pedophile??\n'); return;}

        let noMatch_Counter = 0
        for (let i = 0; i < users.length; i++) {
            if (users[i].age <= $('#maxAge').val() && users[i].age >= $('#minAge').val()) { 
                noMatch_Counter = 1
                break;
            }
        }
        if(noMatch_Counter == 0){
            alert('There Is No Match')
            return;
        }


        
        // Switch To new window
        window.open('Users.html','_self');

        
        // mapped_UsersArr = users.filter( function (x){
        //     console.log(x.age + x.gender)
        //     return (x.age <= $('#maxAge').val() && x.age >= $('#minAge').val() && x.gender == GenderSelectbtn);
        // });
    
        // console.log(mapped_UsersArr)
        // console.log(mapped_UsersArr[0].name)
    }); 
});


    var GenderSelectbtn = ''; // 0 == male || 1 == female
    var users = [
        {id : 0, name : "Beyonce knowles", gender: "female", age: 37, height: 167, location: "Los Angeles",
        hobbies: ["Sing", "Dance"],
        image:"https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
        premium : true
        },
        {id : 01, name : "Beyonce knowles22", gender: "female", age: 45, height: 167, location: "Los Angeles",
        hobbies: ["Sing", "Dance"],
        image:"https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
        premium : false
        },
        {id : 01, name : "JayZ", gender: "male", age: 45, height: 167, location: "Los Angeles",
        hobbies: ["Sing", "Dance"],
        image:"https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
        premium : false
        }
    ]

    function GenderSelect(genderImg){
        if(genderImg.src.includes('female')){ 
            GenderSelectbtn = 'female';
            return;
        }
        GenderSelectbtn = 'male';
    }





    
    function UsersLoad(){

        
        console.log('new newn newn enew')
        
  
    }
    
    
    
