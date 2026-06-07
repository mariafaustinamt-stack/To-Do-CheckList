const todolist=[];
function adddetails()
{
    let todohtml='';
    for(let i=0;i<todolist.length;i++)
    {
        const todoobj=todolist[i];
        const name=todoobj.name;
        const date=todoobj.date;
        const time=todoobj.time;
        const html=`
        <div class="detail">
                   <div class="div-para-name">
                        <p class="inside-para-name">${name}</p>
                    </div>
                    
                    <div class="div-para-date">
                        <p class="inside-para-date">${date}</p>
                    </div>

                    <div class="div-para-time">
                        <p class="inside-para-time">${time}</p>
                    </div>

                    <div class="div-button">
                        <button 
                            class="inside-button"  
                            onclick="todolist.splice(${i},1)
                            adddetails();">
                                Delete
                        </button>
                    </div>
                    <div class="div-check">
                       <input 
                            type="checkbox" 
                            class="inside-check"
                            ${todoobj.checked ? "checked" : ""}
                            onchange="toggleCheck(${i})"
                        >
                    </div>
        </div>`;
        todohtml+=html;
    }
    console.log(todohtml);
    document.querySelector('.tododiv').innerHTML=todohtml;
}
function addList()
{
    const inputElement=document.querySelector('.To-Do-Box');
    const inputElementDate=document.querySelector('.To-Do-Date');
    const inputElementTime=document.querySelector('.To-Do-Time');
    let name=inputElement.value;
    let date=inputElementDate.value;
    let time=inputElementTime.value;
    console.log(name,date,time);
    todolist.push({name,date,time,checked:false});
    console.log(todolist); 
    inputElement.value='';
    inputElementDate.value='';
    inputElementTime.value=' ';
    adddetails();
}
function callpop(checkbox)
{
    if(checkbox.checked)
    {
        const messages=[
            "Good job! 🎉",
            "Task completed ✅",
            "Well done 😌",
            "Nice work ✨",
            "Keep it up 💪",
            "Great going 🌸",
            "You did it 🚀",
            "Awesome! 🎊",
            "Another task done 👏",
            "Progress made ✨"
        ];

        const popup=document.getElementById("popup");
        let randomnum=Math.floor(Math.random()*messages.length);
        popup.innerHTML=messages[randomnum];
        popup.classList.add("show");
        setTimeout(function(){
            popup.classList.remove("show");
        },2000);
    }
}
function toggleCheck(index)
{
    todolist[index].checked =
        !todolist[index].checked;
    const checkbox =
        document.querySelectorAll('.inside-check')[index];
    if(checkbox.checked)
    {
        callpop(checkbox);
    }
}