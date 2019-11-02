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
         '<p>Height: '+this.height+'</p><br> <p>location: '+this.location+'</p><br> <p>Image: '+this.image+'</p><br> <p>Premium: '+this.premium+'</p><br>';
    }
}

class premium extends profile{
    
    constructor(id, name, gender, age, height, location, image, premium, hobbies){
        super(id, name, gender, age, height, location, image, premium);
        this.hobbies = hobbies;
    }

    Render(){

        let st = 'Hobbies: '
        for (let i = 0; i < this.hobbies.length; i++) {
            st +=  this.hobbies[i]+' ';
        }

        return super.Render() + '<p>' + st + '</p>';
    }
}

class MainApp{

    constructor(users){
        
        this.profiles = [];
        // this.premiums = [];

        for (let i = 0; i < users.length; i++) {

            if(users[i].premium == true){ // Premium user
                this.profiles.push(new premium(users[i].id,users[i].name,users[i].gender,users[i].age,
                    users[i].height,users[i].location,users[i].image,users[i].premium,users[i].hobbies));
                continue;
            }
            // Not Premium
            this.profiles.push(new profile(users[i].id,users[i].name,users[i].gender,users[i].age,
                users[i].height,users[i].location,users[i].image,users[i].premium));
        }
        console.log(this.profiles);
    }

    Filter(minAge, maxAge, gender){  // returns filtered array of premium & profile objects

        let mapped_profiles = this.profiles.filter( function (x){
            return (x.age <= maxAge && x.age >= minAge && x.gender == gender);
        });
       
        this.profiles = mapped_profiles;
    }

    Next(i){
        $('#NamePH').html('<h2 class="text-nowrap">'+this.profiles[i].name+'</h2>');
        $('#imgPH').html('<img src="'+this.profiles[i].image+'" alt="" class="img-fluid img-thumbnail rounded mx-auto">');
        $('#detailsPH').html(this.profiles[i].Render());
    }

    Render(){
        $('#NamePH').html('<h2 class="text-nowrap">'+this.profiles[0].name+'</h2>');
        $('#imgPH').html('<img src="'+this.profiles[0].image+'" alt="" class="img-fluid img-thumbnail rounded mx-auto">');
        $('#detailsPH').html(this.profiles[0].Render());
    }

} 


// var users = [
//     {id : 0, name : "Beyonce knowles", gender: "female", age: 37, height: 167, location: "Los Angeles",
//     hobbies: ["Sing", "Dance"],
//     image:"https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
//     premium : true
//     },
//     {id : 01, name : "Beyonce knowles22", gender: "female", age: 45, height: 167, location: "Los Angeles",
//     hobbies: ["Sing", "Dance"],
//     image:"https://cpb-us-w2.wpmucdn.com/blogs.umb.edu/dist/4/3649/files/2018/02/margot-robbie-1r381kt.jpg",
//     premium : false
//     },
//     {id : 01, name : "JayZ", gender: "male", age: 45, height: 167, location: "Los Angeles",
//     hobbies: ["Sing", "Dance"],
//     image:"https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
//     premium : false
//     }
// ]
var GenderSelectbtn = '';
function GenderSelect(genderImg){
    if(genderImg.src.includes('female')){ 
        GenderSelectbtn = 'female';
        return;
    }
    GenderSelectbtn = 'male';
}