let form = document.querySelector("form");

form.addEventListener("submit", event =>{
    event.preventDefault();
    submit_event();
}
 );

function submit_event(event) {
 
    let name = document.querySelector("#name");
    let Email = document.querySelector("#email");
    let comments = document.querySelector("#comments")
    if(name.value ==" "){
        console.warn("You must enter some data to submit this form");
        return;
    }
    

    console.log("========= Form Submission =========");
    console.log("name:", name.value );
    console.log("Email:", Email.value );
    console.log("Comments: ", comments.value)


}