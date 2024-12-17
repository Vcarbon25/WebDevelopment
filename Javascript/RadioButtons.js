const CJt = document.getElementById("options")
            function Verif(){
                var form = document.getElementById("options")
                var SelecOption = new FormData(form)
                var selection = SelecOption.get("opc")
                console.log(selection)

                switch(selection){
                    case "Opc 1":
                        console.log("switch 1");
                        break;
                    case "Opc 2":
                        console.log("switch 2");
                        break;
                    case "Opc 3":
                        console.log("switch 3");
                        break;
                        case "Opc 4":
                            console.log("switch 4");
                            break;
                        case "Opc 5":
                            console.log("switch 5");
                            break;
                        case "Opc 6":
                            console.log("switch 6");
                            break;
                    default:
                        console.log("switch null");
                }
            }