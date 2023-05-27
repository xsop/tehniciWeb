window.onload = function () {


    document.getElementById("inp-pret-min").onchange = function () {
        document.getElementById("infoRangeMin").innerHTML = `(${this.value})`;
    }
    document.getElementById("inp-pret-max").onchange = function () {
        document.getElementById("infoRangeMax").innerHTML = `(${this.value})`;
    }

    document.getElementById("filtrare").onclick = function () {

        let val_nume = document.getElementById("inp-nume").value.toUpperCase();
        let radiobuttons = document.getElementsByName("gr_rad");
        let val_ram;
        for (let r of radiobuttons) {
            if (r.checked) {
                val_ram = r.value;
                break;
            }
        }
        if (val_ram != "toate") {
            var ram_a, ram_b;
            [ram_a, ram_b] = val_ram.split(":");
            ram_a = parseInt(ram_a);
            ram_b = parseInt(ram_b);
        }

        let val_gaming = document.getElementById("chk").checked;
        let val_desc = document.getElementById("inp-desc").value.toUpperCase();
        let var_pret = document.getElementById("inp-pret-min").value;
        let val_vent = document.getElementById("inp-categorie").value;
        let val_tehn = [];
        let tehn = document.getElementById("inp-tehn");
        for (let i = 0; i < tehn.length; i++) {
            if (tehn[i].selected) {
                val_tehn.push(tehn[i].value);
                val_tehn[val_tehn.length - 1] = val_tehn[val_tehn.length - 1].toUpperCase();
            }
        }


        var produse = document.getElementsByClassName("produs");



        for (let prod of produse) {
            prod.style.display = "none";
            let nume = prod.getElementsByClassName("val-nume")[0].innerHTML.toUpperCase();
            let cond1 = true;
            if (val_nume.includes("*")) {
                let nume_split = val_nume.split("*");
                if (nume.startsWith(nume_split[0]) && nume.endsWith(nume_split[1])) {
                    cond1 = true;
                }
                else {
                    cond1 = false;
                }
            }
            else {
                cond1 = (nume.startsWith(val_nume));
            }



            let ram = parseInt(prod.getElementsByClassName("val-ram")[0].innerHTML);
            let cond2 = (val_ram == "toate" || ram_a <= ram && ram < ram_b);

            let gaming = prod.getElementsByClassName("val_pt_gaming")[0].innerHTML;
            let cond3 = (!val_gaming || (gaming && val_gaming));

            let brand = prod.getElementsByClassName("val-brand")[0].innerHTML.toUpperCase();
            let selbrand = document.getElementById("brand").value.toUpperCase();
            let vB = document.getElementById("brands");
            vB = vB.getElementsByTagName("option");
            let ok = false;
            for (let i = 0; i < vB.length; i++) {
                if (selbrand == "")
                    ok=true; 
                if (vB[i].value.toUpperCase() == selbrand) {
                    ok = true;
                    break;
                }
            }
            if (!ok) {
                document.getElementById("brand").style.backgroundColor = "red";
            }


            let cond4 = (brand == selbrand || selbrand == "");

            let descriere = prod.getElementsByClassName("val-desc")[0].innerHTML.toUpperCase();
            const regex = /[^a-zA-Z0-9]/;
            if (regex.test(val_desc)) {
                document.getElementById("inp-desc").classList.add("is-invalid");
                break;
            }



            let cond5 = (descriere.includes(val_desc));

            let pret = parseFloat(prod.getElementsByClassName("val_pret")[0].innerHTML);
            let cond6 = (pret >= document.getElementById("inp-pret-min").value);
            let cond7 = (pret <= document.getElementById("inp-pret-max").value);

            let cond8 = (val_vent == "toate" || val_vent == prod.getElementsByClassName("val_nr_vent")[0].innerHTML);


            let vT = prod.getElementsByClassName("val_tehnologii")[0].innerHTML.split(",");
            for (let i = 0; i < vT.length; i++) {
                vT[i] = vT[i].trim().toUpperCase();
            }
            cond9 = true;
            for (let i = 0; i < val_tehn.length; i++) {
                if (!vT.includes(val_tehn[i])) {
                    cond9 = false;
                    break;
                }
            }
            if (ok && cond1 && cond2 && cond3 && cond4 && cond5 && cond6 && cond7 && cond8 && cond9) {
                prod.style.display = "grid";
            }
        }
    }

    document.getElementById("resetare").onclick = function () {

        if (confirm("Sunteti sigur ca doriti sa resetati?")) {
            document.getElementById("brand").style.backgroundColor = "white";
            document.getElementById("inp-desc").classList.remove("is-invalid");
            document.getElementById("inp-nume").value = "";
            document.getElementById("inp-pret-min").value = document.getElementById("inp-pret-min").min;
            document.getElementById("inp-pret-max").value = document.getElementById("inp-pret-max").max;
            document.getElementById("inp-categorie").value = "toate";
            document.getElementById("i_rad4").checked = true;
            document.getElementById("chk").checked = false;
            var produse = document.getElementsByClassName("produs");
            document.getElementById("infoRangeMin").innerHTML = "(0)";
            document.getElementById("infoRangeMax").innerHTML = "(10000)";
            document.getElementById("inp-desc").value = "";
            document.getElementById("brand").value = "";
            document.getElementById("inp-tehn").value = "";
            for (let prod of produse) {
                prod.style.display = "grid";
            }
        }
    }


    function sortare(semn) {
        var produse = document.getElementsByClassName("produs");
        var v_produse = Array.from(produse);
        v_produse.sort(function (a, b) {
            let pret_a = parseFloat(a.getElementsByClassName("val_pret")[0].innerHTML.toLowerCase());
            let pret_b = parseFloat(b.getElementsByClassName("val_pret")[0].innerHTML.toLowerCase());
            if (pret_a == pret_b) {
                let nume_a = a.getElementsByClassName("val-desc")[0].innerHTML.toLowerCase();
                let nume_b = b.getElementsByClassName("val-desc")[0].innerHTML.toLowerCase();
                return semn * nume_a.localeCompare(nume_b);
            }
            return semn * (pret_a - pret_b);
        });

        for (let prod of v_produse) {
            prod.parentElement.appendChild(prod);
        }
    }

    document.getElementById("sortCrescNume").onclick = function () {
        sortare(1);
    }
    document.getElementById("sortDescrescNume").onclick = function () {
        sortare(-1);
    }

    document.getElementById("calcSum").onclick = function () {
        var produse = document.getElementsByClassName("produs");
        var suma = 0;
        for (let prod of produse) {
            let pret = parseFloat(prod.getElementsByClassName("val_pret")[0].innerHTML);
            suma += pret;
        }
        let div = document.createElement("div");
        div.innerHTML = "Suma preturilor este: " + suma;
        div.style.position = "fixed";
        div.style.top = "50%";
        div.style.left = "50%";
        div.style.transform = "translate(-50%, -50%)";
        div.style.backgroundColor = "white";
        div.style.padding = "20px";
        div.style.border = "1px solid black";
        div.style.borderRadius = "10px";
        div.style.zIndex = "1000";
        document.body.appendChild(div);
        setTimeout(function () {
            document.body.removeChild(div);
        }, 2000);
    }



}