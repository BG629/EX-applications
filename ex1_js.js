class profile{

    constructor(id, name, gender, age, height, location, image, premium){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.location = location;
        this.image = image;
        this.premium = premium;
    }

    Render(){

        return '<p>ID: '+ this.id +'</p><br> <p>Name: '+this.name+'</p><br> <p>Gender: '+this.gender+'</p><br> <p>Age: '+this.age+'</p><br>'+
         '<p>Height: '+this.height+'</p><br> <p>location: '+this.location+'</p><br> <p>Image: '+this.image+'</p><br> <p>Premium: '+this.premium+'</p><br>'

    }
}

class premium extends profile{
    
    constructor(id, name, gender, age, height, location, image, premium, hobbies){
        super(id, name, gender, age, height, location, image, premium);
        this.hobbies = hobbies;
    }

    Render(){ // CHECK THIS ONE ?????

        let st = 'Hobbies: '
        for (let i = 0; i < this.hobbies.length; i++) {
            st +=  this.hobbies[i]+' ';
        }

        return super.Render() + st;
    }
}

class MainApp{

    constructor(users){
        
        this.profiles = [];
        this.premiums = [];

        for (let i = 0; i < users.length; i++) {

            if(users[i].premium == true){ // Premium user
                this.premiums.push(new premium(users[i].id,users[i].name,users[i].gender,users[i].age,
                    users[i].height,users[i].location,users[i].image,users[i].premium,users[i].hobbies));
                continue;
            }
            // Not Premium
            // users[i] = new profile(users[i].id,users[i].name,users[i].gender,users[i].age,
            // users[i].height,users[i].location,users[i].image,users[i].premium);
            this.profiles.push(new profile(users[i].id,users[i].name,users[i].gender,users[i].age,
                users[i].height,users[i].location,users[i].image,users[i].premium));
        }

        console.log(this.profiles, this.premiums)
    }

    Filter(minAge, maxAge, gender){  // returns filtered array of premium/profile objects

        let mapped_profiles = this.profiles.filter( function (x){
            return (x.age <= maxAge && x.age >= minAge && x.gender == gender);
        });
        let mapped_premiums = this.premiums.filter( function (x){
            return (x.age <= maxAge && x.age >= minAge && x.gender == gender);
        });

        mapped_profiles.forEach( user => {
            mapped_premiums.push(user);
          });

        return mapped_premiums;
    }

    Next(){

    }

    Render(){

    }

} 

$(document).ready(function(){
    
    $('#submitbtn').click(function(){
        
        if (GenderSelectbtn == '' ) {
          alert("Click On Male / Female Icon");
          return;
        }
        if ( $('#maxAge').val() == '' || $('#minAge').val() == '' ) {
            alert('Enter Min/Max age values')
            return;
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

        conditions_arr = {"minAge":$('#minAge').val(),"maxAge":$('#maxAge').val(),"gender":GenderSelectbtn}
        
        localStorage.clear();
        localStorage.setItem("conditions_arr", JSON.stringify(conditions_arr));

        // Switch To new window
        window.open('Users.html','_self');
    }); 
});

    var mapped_arr = [];
    var GenderSelectbtn = '';
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

        var conditions_arr = JSON.parse(localStorage.getItem("conditions_arr"));

        app = new MainApp(users);
        mapped_arr = app.Filter(conditions_arr.minAge,conditions_arr.maxAge,conditions_arr.gender)

        console.log(mapped_arr)

        $(document).ready(function(){

            let i=0;

            $('#NamePH').html('<h2 class="text-nowrap">'+mapped_arr[0].name+'</h2>');

            $('#imgPH').html('<img src="'+mapped_arr[0].image+'" alt="" class="img-fluid img-thumbnail rounded mx-auto">');

            $('#detailsPH').html(mapped_arr[0].Render());

            $('#next').click(function(){
                
                i++;
                if (i >= mapped_arr.length) {
                    alert('end of array')
                    return;
                }
                
                $('#NamePH').html('<h2 class="text-nowrap">'+mapped_arr[i].name+'</h2>');
                $('#imgPH').html('<img src="'+mapped_arr[i].image+'" alt="" class="img-fluid img-thumbnail rounded mx-auto">');
                $('#detailsPH').html(mapped_arr[i].Render());
            });
        });
  
    }
    
    
    
