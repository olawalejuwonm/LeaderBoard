//const baseUrl = 'http://localhost:3000/'
const baseUrl = 'https://raw.githubusercontent.com/olawalejuwonm/LeaderBoard/master/'


fetch(baseUrl + 'leaders.json')
.then((leaders) => {
   return leaders.json()
},(err) => console.log(err))
.then((resp) => {
    let leaders = resp
    leaders.map((lead, index) => {
        lead.id = index
    })

    let points = [];

    leaders.map((lead) => {
        points.push(Number(lead.Point))
    })

    console.log(points)

    
    
    function myFunction() {
        points.sort(function(a, b){return b-a});
        return points;
      }

    let OrderedPoints = myFunction()

    console.log(OrderedPoints)
    // console.log(leaders[1].name)
    leaders.map((lead) => {


        // const attName = document.createAttribute("style");
        // attName.value = "float: left;width: 25%;";
        const NameId = document.getElementById("name");
        const userName = document.getElementById("username");
        const eMail = document.getElementById("email");
        const points = document.getElementById("points");
        const share = document.getElementById("share");
        const rank = document.getElementById("rank");



        const top1N = document.getElementById("top1N");
        const top1U = document.getElementById("top1U");
        const top1E = document.getElementById("top1E");

        const top2N = document.getElementById("top2N");
        const top2U = document.getElementById("top2U");
        const top2E = document.getElementById("top2E");

        const top3N = document.getElementById("top1N");
        const top3U = document.getElementById("top1U");
        const top3E = document.getElementById("top1E");



        if (((OrderedPoints.indexOf(Number(lead.Point))) + 1) === 1) {
            top1N
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.name))
    
            top1U
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.Username))
    
            top1E
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.Email))
    
            points
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.Point))
    
            share
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode("fac, tel"))
    
            rank
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode((OrderedPoints.indexOf(Number(lead.Point))) + 1))
        }
        if (((OrderedPoints.indexOf(Number(lead.Point))) + 1) === 2) {
            top2N
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.name))
    
            top2U
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.Username))
    
            top2E
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.Email))
    
            points
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.Point))
    
            share
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode("fac, tel"))
    
            rank
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode((OrderedPoints.indexOf(Number(lead.Point))) + 1))
        }
        if (((OrderedPoints.indexOf(Number(lead.Point))) + 1) === 3) {
            top3N
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.name))
    
            top3U
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.Username))
    
            top3E
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.Email))
    
            points
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.Point))
    
            share
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode("fac, tel"))
    
            rank
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode((OrderedPoints.indexOf(Number(lead.Point))) + 1))
        }
        
        else {
            NameId
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.name))
    
            userName
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.Username))
    
            eMail
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.Email))
    
            points
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode(lead.Point))
    
            share
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode("fac, tel"))
    
            rank
            .appendChild(document.createElement('div'))
            .appendChild(document.createTextNode((OrderedPoints.indexOf(Number(lead.Point))) + 1))
        }
        

        // <div style="float: left;width: 25%;">
        //     <div>Olawale Juwon</div>
        //     <div>Olawale Juwon</div>
        //     <div>Olawale Juwon</div></div>
        // <div style="float: left;width: 20%;"><div>@OlawaleJuwonM</div>
        //     <div>@OlawaleJuwonM</div>
        //     <div>@OlawaleJuwonM</div></div>
        // <div style="float: left;width: 30%;">
        //     <div>olawalejuwon@gmail.com</div>
        //     <div>olawalejuwon@gmail.com</div>
        //     <div>olawalejuwon@gmail.com</div>
        // </div>
        // <div style="float: left;width: 7%;">
        //     <div>2</div>
        //     <div>2</div>
        //     <div>2</div>
        // </div>
        // <div style="float: left;width: 12%">
        //     <div>fac, tel </div>
        //     <div>fac, tel </div>
        //     <div>fac, tel </div>
        // </div>
        // <div class="float: left;width: 5%">
        //      <div>1</div>
        //      <div>1</div>
        //      <div>1</div>
        // </div>
        // <hr>
    })
},(err) => console.log(err))
.catch((err) => {
    console.log(err)
})
