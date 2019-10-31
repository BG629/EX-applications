$(document).ready(function(){
    class profile{

        constructor(id, name, gender, age, height, city, image, premium){
            this.id = id;
            this.name = name;
            this.gender = gender;
            this.age = age;
            this.height = height;
            this.city = city;
            this.image = image;
            this.premium = premium;
        }
    
        Render(){
    
            return '<p>ID: '+ this.id +'</p><br> <p>Name: '+this.name+'</p><br> <p>Gender: '+this.gender+'</p><br> <p>Age: '+this.age+'</p><br>'+
             '<p>Height: '+this.height+'</p><br> <p>City: '+this.city+'</p><br> <p>Image: '+this.image+'</p><br> <p>Premium: '+this.premium+'</p><br>'
    
        }
    }
    
    class premium extends profile{
        
        constructor(id, name, gender, age, height, city, image, premium, hobbies){
            super(id, name, gender, age, height, city, image, premium);
            this.hobbies = hobbies;
        }
    
        Render(hobbiesArr){ // CHECK THIS ONE ?????
    
            st = 'Hobbies: '
            for (let i = 0; i < hobbiesArr.length; i++) {
                st +=  hobbiesArr[i]+' ';
            }
    
            return this.Render() + st;
        }
    }
    
    class MainApp{
    
        constructor(userArr){
    
            for (let i = 0; i < userArr.length; i++) {
    
                if(userArr[i].premium == true){ // Premium user
                    userArr[i] = new premium(userArr[i].id,userArr[i].name,userArr[i].gender,userArr[i].age,
                    userArr[i].height,userArr[i].city,userArr[i].image,userArr[i].premium,userArr[i].hobbies)
                    continue;
                }
                // Not Premium
                userArr[i] = new profile(userArr[i].id,userArr[i].name,userArr[i].gender,userArr[i].age,
                userArr[i].height,userArr[i].city,userArr[i].image,userArr[i].premium);
            }

            // userArr.forEach(element => {
            //     if (element.premium == true) {
            //         element = new premium(element.id,element.name,element.gender,element.age,
            //              element.height,element.city,element.image,element.premium,element.hobbies);
            //              continue;
            //     }
            //     element = new profile(element.id,element.name,element.gender,element.age,
            //         element.height,element.city,element.image,element.premium);
            // });
            
        }

        Filter(){
            var mapped_UsersArr = users.filter( function (x){
                return (x.age <= $('#maxAge').val() && x.age >= $('#minAge').val() && x.gender == GenderSelectbtn);
            });
            return mapped_UsersArr;
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
        mainapp1 = new MainApp(users);
        mapped_arr = mainapp1.Filter();
        console.log(mainapp1)
        console.log(mapped_arr)

        localStorage.setItem("mapped_arr", JSON.stringify(mapped_arr));

        // Switch To new window
        window.open('Users.html','_self');

        
        
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
        image:"https://cpb-us-w2.wpmucdn.com/blogs.umb.edu/dist/4/3649/files/2018/02/margot-robbie-1r381kt.jpg",
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

        var mapped_arr = JSON.parse(localStorage.getItem("mapped_arr"));

        $(document).ready(function(){

            let i=0;

            $('#NamePH').html('<h2 class="text-nowrap">'+mapped_arr[0].name+'</h2>');

            $('#imgPH').html('<img src="'+mapped_arr[0].image+'" alt="" class="img-responsive img-thumbnail rounded mx-auto d-block">');

            $('#detailsPH').html();

            $('#next').click(function(){
                
                i++;
                if (i >= mapped_arr.length) {
                    alert('end of array')
                    return;
                }
                
                $('#NamePH').html('<h2 class="text-nowrap">'+mapped_arr[i].name+'</h2>');
                $('#imgPH').html('<img src="'+mapped_arr[i].image+'" alt="" class="img-responsive img-thumbnail rounded mx-auto d-block">');
            });
        });
  
    }
    
    
    
