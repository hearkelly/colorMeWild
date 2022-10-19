
function runThis(someText) { 
    document.getElementById("print1").innerHTML = someText;
}
function runThis2(someText) {
    document.getElementById("print2").innerHTML = someText;
}

window.addEventListener("load", load);

function load() {
    document.getElementById("colorName").addEventListener("click", runThat)
}

function runThat() {
    fName = document.getElementById("name1").value;
    sName = document.getElementById("name2").value;
    const rgbColors = new Array();
    const colors = new Array();
    let nameHTML = "<p>";
    for (let i = 0; i < fName.length; i++) {
        let x = []
        for (let i = 0; i < fName.charCodeAt(i); i++) {
            x.push(randomInt(255));
        }
        let r = randomChoice(x);
        let g = randomChoice(x);
        let b = randomChoice(x);
        let color = ConvertRGBtoHex(r, g, b);
        rgbColors.push([r, g, b]);
        colors.push(color);
        nameHTML += "<span style='color:" + color + "'>" + fName[i] + "</span>";
    }
    nameHTML += " "
    for (let i = 0; i < sName.length; i++) {
        let x = []
        for (let i = 0; i < sName.charCodeAt(i); i++) {
            x.push(randomInt(255));
        }
        let r = randomChoice(x);
        let g = randomChoice(x);
        let b = randomChoice(x);
        let color = ConvertRGBtoHex(r, g, b)
        rgbColors.push([r, g, b]);
        colors.push(color);
        nameHTML += "<span style='color:" + color + "'>" + sName[i] + "</span>";
    }
    console.log(rgbColors);
    console.log(colors);
    let gradient = "linear-gradient(to right, ";
    for (let i = 0; i < colors.length; i++) {
        gradient += colors[i] + ",";
    }
    let gradientCSS = gradient.slice(0, -1);
    gradientCSS += ")";
    nameHTML += "</p>"
    document.getElementById("print").innerHTML = nameHTML;
    console.log(gradientCSS);
    let finalMix = new Array();
    if (rgbColors.length > 1) {
        finalMix = mixer(rgbColors);
    } else finalMix = rgbColors;
    console.log(finalMix);
    let finalColor = ConvertRGBtoHex(finalMix[0], finalMix[1], finalMix[2]);
    document.body.style.backgroundColor = finalColor;
    document.getElementById("colorStack").style.display = "block";
    document.getElementById("colorStack").style.marginLeft = "auto";
    document.getElementById("colorStack").style.marginRight = "0";
}

function mixer(l1) {
    let base = l1[0];
    console.log(base.toString());
    for (let i = 1; i < l1.length; i++) {
        let add = l1[i];
        console.log(add.toString());
        for (let j = 0; j < 3; j++) {
            base[j] = (base[j] + add[j])/2
            console.log(base.toString());
        }
    }
    base[0] = Math.floor(base[0]); base[1] = Math.floor(base[1]); base[2] = Math.floor(base[2]);
    return base;
} 

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomChoice(colorList) {
    return colorList[Math.floor(Math.random() * (colorList.length - 1))];
}

function ColorToHex(color) {
    let hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }
  
function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}