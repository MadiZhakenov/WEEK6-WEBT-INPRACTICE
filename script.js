function test(){
    var num1 = document.getElementById("first_task_first_number").value;
    var num2 = document.getElementById("first_task_second_number").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var result = num1 * num2;
    alert("The result is: " + result);
}

function test1() {
    var num1 = document.getElementById('first_task_first_number').value;
    var num2 = document.getElementById('first_task_second_number').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num2 === 0) {
        alert("Cannot divide by zero!");
    } else {
        var result = num1 / num2;
        alert("The result is: " + result);
    }
}

function test2(){
    var num1 = document.getElementById('second_task_first_number').value;
    var num2 = document.getElementById('second_task_second_number').value;
    var num3 = document.getElementById('second_task_third_number').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    var max = Math.max(num1, num2, num3);
    alert("The maximum number is: " + max);
}

function test3(){
    var num1 = document.getElementById('third_task_first_number').value;
    var num2 = document.getElementById('third_task_second_number').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num1 != num2) {
        alert(num1 + num2);
    } else {
        alert((num1 + num2) * 3);
    }
}

function test4(){
    var num1 = document.getElementById('fourth_task_first_number').value;
    var num2 = document.getElementById('fourth_task_second_number').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(100 - num1 < 100 - num2){
        alert(num1);
    }
    else if(num1 == num2){
        alert("False");
    }
    else{
        alert(num2)
    }
}

function test5(){
    var text = document.getElementById('fifth_task_text').value;

    if(text.length % 2 == 0){
        alert(text.substring(0, text.length / 2));
    }
    else{
        alert(text)
    }
}