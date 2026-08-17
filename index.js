//Counter Programm by Javascript as place of react

let countLable= document.querySelector("#countlable");
let addBtn= document.querySelector('#add-btn');
let subBtn= document.querySelector('#sub-btn');

let count=0;
addBtn.addEventListener("click", function(){
  count+=1;
  countLable.innerHTML = `Count is : ${count}`;
});

subBtn.addEventListener("click",function(){
  count-=1;
  countLable.innerHTML = `Count is : ${count}`;
});


// ============================================================
//  facebook user message notification -- Manual Update Issue
// ============================================================
let users = [5, 3, 2];  // suppose Ye API se fetch hua, DB se aaya

// Calculate total
function getTotal() {
    return users[0] + users[1] + users[2];
}

// ============================================
// INITIAL RENDER (Dynamic data show karo)
// ============================================
document.getElementById('total').textContent = getTotal();  // 10
document.getElementById('u1').textContent = users[0];       // 5
document.getElementById('u2').textContent = users[1];       // 3
document.getElementById('u3').textContent = users[2];       // 2

// ============================================
// Read All Clicked
// ============================================
document.getElementById('btn').onclick = function() {
    // Step 1: Data change (state update)
    users = [0, 0, 0];  // Data changed becasue user read all messages
    
    // Step 2: UI update--> Manually need to update
    document.getElementById('total').textContent = '0';
    document.getElementById('u1').textContent = '0';    
    document.getElementById('u2').textContent = '0';     
    document.getElementById('u3').textContent = '0';
    
    // ============================================
    // GHOST MESSAGE!--> Fixed
    // Data: users = [0, 0, 0]
    // UI shows: User1=0, User2=0, User3=0
    // ============================================
    
    console.log('Data (State):', users);        // [0, 0, 0]
    console.log('UI shows User3:', document.getElementById('u3').textContent);  // 2
    console.log('GHOST MESSAGE! Fixed.. Data says 0, now UI also shows 0!');
};

