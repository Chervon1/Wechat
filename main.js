const $ = document.querySelector.bind(document)

function createComment( commentDoc ){
    var div = document.createElement('div');
    div.innerText = commentDoc.comment;
    $('#comments').appendChild(div);
    div.className = 'comment';
}


window.onload = function(){
    
    // check if user is logged in
    onLogin( user => {
        if(user){
            //user just logged in
            $('#comments').style.display = 'block';
            $('#addCommentDiv').style.display = 'block';
            $('#loginDiv').style.display = 'none';
            $('#signupDiv').style.display = 'none';
            // todo register new users using on snaphot
            /*db.collection('comments').onSnapshot(snapshot =>{
                createComment(snapshot.document);
            });*/
            
        }else{
            //user just logged out
            $('#comments').style.display = 'none';
            $('#loginDiv').style.display = 'block';
            $('#addCommentDiv').style.display = 'none';
        }
    });

    //show comments
    

    ////////////////////////////////
    // button and link functionality

    $('#loginLink').onclick = function(){
        $('#loginDiv').style.display = 'block';
        $('#signupDiv').style.display = 'none';
    }

    $('#signupLink').onclick = function(){
        $('#loginDiv').style.display = 'none';
        $('#signupDiv').style.display = 'block';
    }

    $('#slattbratha').onclick = function(){
        $('#comments').style.display = 'none';
        comments.innerHTML = '';
        logout();
    }

    $('#trash').onclick = function(){
        deleteMessage( $('#newComment').value)
        .catch( err => $('.error').innerText = err.message );
    }

    $('#loginBtn').onclick = function(){
        login( $('#email').value, $('#password').value )
        .catch( err => $('.error').innerText = err.message );
    }

    $('#registerBtn').onclick = function(){
        signup( $('#emailReg').value, $('#passwordReg').value )
        .catch( err => $('.error').innerText = err.message );
    }

    $('#addCommentBtn').onclick = function(){

        addComment( $('#newComment').value )
        .then( () => {
            createComment({comment: $('#newComment').value});
            $('#newComment').value = '';
        })
        .catch( err => $('.error').innerText = err.message )
    }

}