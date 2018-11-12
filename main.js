var allText
var results = [];
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
                lines = allText.split("\n");
                for(i = 0; i < lines.length; i++){
                	   res = lines[i].split(" ");
                	   results[res[0]] = res.slice(1);
        		}
            }
        }
    }
    rawFile.send(null);
}
readTextFile("https://github.com/nitesh237/nitesh237.github.io/top_five_till_14L.txt")

var allText1
var names_to_id = [];
var id_to_names = [];
var names = [];
function readTextFile1(file)
{
    var rawFile1 = new XMLHttpRequest();
    rawFile1.open("GET", file, false);
    rawFile1.onreadystatechange = function ()
    {
        if(rawFile1.readyState === 4)
        {
            if(rawFile1.status === 200 || rawFile1.status == 0)
            {
                allText1 = rawFile1.responseText;
                lines1 = allText1.split("\n");
                for(i = 0; i < lines1.length; i++){
                	res1 = lines1[i].split(" ");
                	names_to_id[res1[1]] = res1[0];
                	id_to_names[res1[0]] = res1[1];
                	if(Number(res1[0]) < 1400000){
                		names.push(res1[1]);
                	}
                	//console.log(names[i+1])
        		}
            }
        }
    }
    rawFile1.send(null);
}
//readTextFile1("file:///home/jaiswalkautish/Sem 7/Project/UI/name.txt")

function getName(item) {
	return id_to_names[item];
}

/*var input = document.getElementById("myInput");
var x = document.getElementById("myInput").value;
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        getRecom();
    }
});*/

function getRecom() {
    	var x = document.getElementById("myInput").value;
    	var xid = names_to_id[x];
    	//console.log(x);
    	//console.log(xid);
    	//var x = document.getElementById("selector").value
    	document.getElementById("input").innerHTML = "<p><a href=\"https://en.wikipedia.org/wiki/"+x+"\""+">"+x.replace(/_/g, " ")+"</a></p>";
    	req = "https://en.wikipedia.org/api/rest_v1/page/summary/" + x;
        var res = new XMLHttpRequest();
        res.open("GET", req, false);
        res.send(null);
        var obj = JSON.parse(res.responseText);
        var img = "";
        if(typeof(obj.thumbnail) !== "undefined") {
            img += obj.thumbnail.source;
        }
        var str = "<h3><b>" +x.replace(/_/g, " ")+ "</b></h3>";
        str += obj.extract;
        $("#input").hovercard({
            detailsHTML: str,
            width: 400,
            cardImgSrc: img,
            //openOnLeft: true,
            openOnTop: true
        });
        document.getElementById("articleR").innerHTML = "Requested Article";
        result = results[xid].map(getName);
        //console.log(result);
        var res2 = "";
        for(i=0;i<result.length;i++){
            //res2 += "<p><a href=\"https://en.wikipedia.org/wiki/"+result[i]+"\""+">"+result[i].replace(/_/g, " ")+"</a></p>";
            res2 += "<div id=\"hover-element-"+i+"\"><p><a href=\"https://en.wikipedia.org/wiki/"+result[i]+"\""+">"+result[i].replace(/_/g, " ")+"</a></p></div>";
        }
    	document.getElementById("results").innerHTML = res2;
        document.getElementById("articleRecom").innerHTML = "Recommended Articles";
	}

	function hover() {
    var x = document.getElementById("myInput").value;
    var xid = names_to_id[x];
    //result = results[x].map(getName);
    result = results[xid].map(getName);
    for(i = 0; i < result.length; i++) {
        req = "https://en.wikipedia.org/api/rest_v1/page/summary/" + result[i];
        console.log(req);
        var res = new XMLHttpRequest();
        res.open("GET", req, false);
        res.send(null);
        var obj = JSON.parse(res.responseText);
        var img = "";
        if(typeof(obj.thumbnail) !== "undefined") {
            img += obj.thumbnail.source;
        }
        var str = "<h3><b>" +result[i].replace(/_/g, " ")+ "</b></h3>";
        str += obj.extract;
        $("#hover-element-"+i+"").hovercard({
            detailsHTML: str,
            width: 400,
            cardImgSrc: img,
            openOnLeft: true,
            openOnTop: true
        });
    }
}


 var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

 function autocomplete(inp, arr, fname, callback) {
 	
 	callback(fname);
 	console.log(arr);
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      var ctr = 0;
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if(ctr == 5){
        	break;
        }
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          ctr += 1;
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("myInput"), names, "https://github.com/nitesh237/nitesh237.github.io/filtered_id_title.txt", readTextFile1);

