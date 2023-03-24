window.onload = init;
    
function init()
{
    var elemToBind = document.getElementById ( "cmb1" );
    elemToBind.onchange = function () { SetSel ( this ); }
    var button = document.getElementById("sumButton")
    button.onclick = handleButtonClick;
}
function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 1; i--) {
        selectElement.remove(i);
    }
}

function SetSel(elem)
{
    var secondCombo = document.getElementById ( "cmb2" );
    removeOptions(secondCombo);
    switch (elem.value) {
        case "1":
            var first = document.createElement('option');
            first.text = '6 месяцев';
            first.value = '1';
            secondCombo.options.add(first);

            var second = document.createElement('option');
            second.text = '1 год';
            second.value = '2';
            secondCombo.options.add(second);

            var third = document.createElement('option');
            third.text = '1,5 года';
            third.value = '3';
            secondCombo.options.add(third);

            var fourth = document.createElement('option');
            fourth.text = '2 года';
            fourth.value = '4';
            secondCombo.options.add(fourth);
            break;
        case "2":
            var first = document.createElement('option');
            first.text = '3 месяца';
            first.value = '1';
            secondCombo.options.add(first);

            var second = document.createElement('option');
            second.text = '6 месяцев';
            second.value = '2';
            secondCombo.options.add(second);

            var third = document.createElement('option');
            third.text = '9 месяцев';
            third.value = '3';
            secondCombo.options.add(third);

            var fourth = document.createElement('option');
            fourth.text = '1 год';
            fourth.value = '4';
            secondCombo.options.add(fourth);

            var fifth = document.createElement('option');
            fifth.text = '1,5 года';
            fifth.value = '5';
            secondCombo.options.add(fifth);

            var sixth = document.createElement('option');
            sixth.text = '2 года';
            sixth.value = '6';
            secondCombo.options.add(sixth);
            break;
        default:
            break;
    }
}

function handleButtonClick() {
    var sumInput = document.getElementById("sumInput");
    var cmb1 = document.getElementById("cmb1");
    var cmb2 = document.getElementById("cmb2");
    var textInfo = document.getElementById("textInfo");
    if(cmb1.value == "" || cmb2.value == "" || sumInput.value == "")
    {
        alert("Введите данные!");
    }
    else
    {
        var percent = 0;
        var sum = sumInput.value;
        var vlkad = "";
        var months = 0;
        switch (cmb1.value) {
            case "1":
                vklad = "Пополняемый";
                switch (cmb2.value) {
                    case "1":
                        percent = 20;
                        months = 6;
                        break;
                    case "2":
                        percent = 22;
                        months = 12;
                        break;
                    case "3":
                        percent = 15;
                        months = 18;
                        break;
                    case "4":
                        percent = 10;
                        months = 24;
                        break;
                    default:
                        break;
                }
                break;
            case "2":
                vklad = "Срочный";
                switch (cmb2.value) {
                    case "1":
                        percent = 20;
                        months = 3;
                        break;
                    case "2":
                        percent = 22;
                        months = 6;
                        break;
                    case "3":
                        percent = 23;
                        months = 9;
                        break;
                    case "4":
                        percent = 24;
                        months = 12;
                        break;
                    case "5":
                        percent = 18;
                        months = 18;
                        break;
                    case "6":
                        percent = 15;
                        months = 24;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        var x = sum*(1+(percent/100)*months/12);
        textInfo.innerHTML = "Вклад '" + vklad + "' на срок " + months + " месяцев на сумму " + sum + ". В конце срока получите " + x.toFixed(2) + " рублей";
    }

}