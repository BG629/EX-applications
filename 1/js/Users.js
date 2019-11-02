function UsersLoad(){

    var conditions_arr = JSON.parse(sessionStorage.getItem("conditions_arr"));
    app = new MainApp(users);
    console.log(app)

    app.Filter(conditions_arr.minAge,conditions_arr.maxAge,conditions_arr.gender)
    console.log('this is the filterd app: ', app);


    $(document).ready(function(){

        let i=0;
        app.Render();

        $('#next, #like').click(function(){
            
            i++;

            if (i >= app.profiles.length) { // No more profiles to show
                alert('No more profiles to show');
                window.open('index.html','_parent');
                return;
            }

            app.Next(i)
        });
    });
}