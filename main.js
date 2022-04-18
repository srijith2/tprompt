let section = document.querySelector('#list');
let input = prompt("Enter the number between 1-3");
var text1="input-1(Unorder List)";
let text2="input-2(Ordered List)";
let text3="input-3(Descriptive List)";
switch(Number(input))
{
    case 1:
        let ul=document.createElement("ul");
        let ul_li1=document.createElement("li");
        ul_li1.id=ul_li1;
        let ul_li2=document.createElement("li");
        ul_li2.id=ul_li2;
        let ul_li3=document.createElement("li");
        ul_li3.id=ul_li3;1
        ul_li1.innerHTML='<b>input-1(Unorder List)</b>';
        ul_li2.innerHTML=text2;
        ul_li3.innerHTML=text3;
        ul.appendChild(ul_li1);
        ul.appendChild(ul_li2);
        ul.appendChild(ul_li3);
        section.appendChild(ul);
        break;
    
    case 2:
        let ol=document.createElement("ol");
        let ol_li1=document.createElement("li");
        ol_li1.id=ol_li1;
        let ol_li2=document.createElement("li");
        ol_li1.id=ol_li2;
        let ol_li3=document.createElement("li");
        ol_li1.id=ol_li3;
        ol_li1.innerHTML= text1;
        ol_li2.innerHTML='<b>input-2(Ordered List)</b>';
        ol_li3.innerHTML=text3;
        ol.appendChild(ol_li1);
        ol.appendChild(ol_li2);
        ol.appendChild(ol_li3);
        section.appendChild(ol);
        break;

    case 3:
        let dt1=document.createElement("dt");
        dt1.id=dt1;
        let dd1=document.createElement("dd");
        dt1.id=dd1;

        let dt2=document.createElement("dt");
        dt2.id=dt2;
        let dd2=document.createElement("dd");
        dt2.id=dd2;
        let dt3=document.createElement("dt");
        dt3.id=dt3;
        let dd3=document.createElement("dd");
        dt3.id=dd3;

        dt1.innerHTML="input-1:";
        dt2.innerHTML="input-2:";
        dt3.innerHTML="<b>input-3</b>:";

        dd1.innerHTML="Unorder List";
        dd2.innerHTML="order List";
        dd3.innerHTML="<b>Descriptive List</>";
        section.appendChild(dt1);
        section.appendChild(dt2);
        section.appendChild(dt3);

        dt1.append(dd1);
        dt2.append(dd2);
        dt3.append(dd3);
        break;
    
    default: 
    alert("Invalid input!");
    window.location.reload(true);

}
