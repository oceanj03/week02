var color = ["rgba(140,80,75,1)","rgba(242,140,199,0.78)","rgba(182,140,242,0.78)","rgba(242,140,148,0.78)","rgba(242,233,140,0.78)","rgba(229,153,197,0.78)"];
                var i = 0;
                document.querySelector(".bt").addEventListener("click", function(){
                    i = i < color.length ? ++i : 0;
                document.querySelector(".about").style.background = color[i]
                })



