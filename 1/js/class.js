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
        return '<p>ID: '+ this.id +'</p> <p>Name: '+this.name+'</p> <p>Gender: '+this.gender+'</p> <p>Age: '+this.age+'</p>'+
         '<p>Height: '+this.height+'</p> <p>location: '+this.location+'</p><p>Premium: '+this.premium+'</p>';
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
            if( i == this.hobbies.length-1){
                st +=  this.hobbies[i];
                continue;
            }
            st +=  this.hobbies[i]+', ';
        }

        return super.Render() + '<p>' + st + '</p>';
    }
}

class MainApp{

    constructor(users){
        
        this.profiles = [];

        for (let i = 0; i < users.length; i++) {
            // Premium user
            if(users[i].premium == true){ 
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
        $('#NamePH').text(this.profiles[i].name)
        $('#imgPH').html('<img src="'+this.profiles[i].image+'" alt="" class="img-fluid img-thumbnail rounded mx-auto">');
        $('#detailsPH').html(this.profiles[i].Render());
    }

    Render(){
        $('#NamePH').text(this.profiles[0].name)
        $('#imgPH').html('<img src="'+this.profiles[0].image+'" alt="" class="img-fluid img-thumbnail rounded mx-auto">');
        $('#detailsPH').html(this.profiles[0].Render());
    }
} 

var GenderSelectbtn = '';
function GenderSelect(genderImg){
    if(genderImg.src.includes('female')){ 
        GenderSelectbtn = 'female';
        return;
    }
    GenderSelectbtn = 'male';
}
