$(document).ready(function(){
    class profile{

        constructor(id, name, gender, age, height, city, iamge, premium){
            this.id = id;
            this.name;
            this.gender;
            this.age;
            this.height;
            this.city;
            this.iamge;
            this.premium;
        }
    
        Render(){
    
            return '<p>ID: '+ this.id +'</p><br> <p>Name: '+this.name+'</p><br> <p>Gender: '+this.gender+'</p><br> <p>Age: '+this.age+'</p><br>'+
             '<p>Height: '+this.height+'</p><br> <p>City: '+this.city+'</p><br> <p>Image: '+this.iamge+'</p><br> <p>Premium: '+this.premium+'</p><br>'
    
        }
    }
    
    class premium extends profile{
        
        constructor(id, name, gender, age, height, city, iamge, premium, hobbies){
            super(id, name, gender, age, height, city, iamge, premium)
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
                }
                // Not Premium
                this.userArr[i] = new premium(this.userArr[i].id,this.userArr[i].name,this.userArr[i].gender,this.userArr[i].age,
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
    
    

    users = [
        {id : 0, name : "Beyonce knowles", gender: "female", age: 37, height: 167, location: "Los Angeles",
    hobbies: ["Sing", "Dance"],
    image:"https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
    premium : true
        }
    ]


    $('#submitbtn').click(function(){
        
        if (GenderSelectbtn == -1 ) {
          alert("Click On Male / Female Icon");
          return
        }
        if ( $('#maxAge').val() == '' || $('#minAge').val() == '' ) {
            alert('Enter Min/Max age values')
            return
        }
  
      
    }); 

  });
  var GenderSelectbtn = -1 // 0 == male || 1 == female

  function GenderSelect(genderImg){
    if(genderImg.src.includes('female')){ //.attr('src')
        GenderSelectbtn = 1 
        alert('Woman')
        return
    }
    GenderSelectbtn = 0
    alert('Man')
  }

  
