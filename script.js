
function add()
{
    var one=parseInt(document.getElementById("one").value);
    var two=parseInt(document.getElementById("two").value);

    var tot=one+two;

    document.getElementById("three").value=tot;

}

function sub()
{
    var one=parseInt(document.getElementById("one").value);
    var two=parseInt(document.getElementById("two").value);

    var tot=one-two;

    document.getElementById("three").value=tot;

}

function mul()
{
    var one=parseInt(document.getElementById("one").value);
    var two=parseInt(document.getElementById("two").value);

    var tot=one*two;

    document.getElementById("three").value=tot;

}

function div()
{
    var one=parseInt(document.getElementById("one").value);
    var two=parseInt(document.getElementById("two").value);

    var tot=one/two;

    document.getElementById("three").value=tot;

}




