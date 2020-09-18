window.onload = function () {
    
  let bus = [
    {
      name: "Sataabadi",
      source: "Jhansi",
      destination: "Delhi",
      number:2112,
      capacity: 60,   
    },
    {
        name: "Express",
        source: "Mumbai",
        destination: "Kanpur",
        number:1122,
        capacity: 90,   
      },
];
  
    if (localStorage.getItem("bus") == null) {
      localStorage.setItem("bus", JSON.stringify(bus));
    }
  };
  
  function display(superarray = undefined) {
    let tabledata = "";
    let bus;
    if (superarray == undefined) {
        bus = JSON.parse(localStorage.getItem("bus"));
    } else {
        bus = superarray;
    }
  
    bus.forEach(function (buss, index) {
      let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${buss.name}</td>
        <td>${buss.source}</td>
        <td>${buss.destination}</td>
        <td>${buss.number}</td>
        <td>${buss.capacity}</td>
        <td>
        <button onclick='deletebus(${index})'>delete</button>
        </td>
        </tr>`;
  
      tabledata += currentrow;
    });

      document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display();
  
  function addbus(e) {
    e.preventDefault();
    let buss = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let capacity = document.getElementById("capacity").value;
    buss.name = name;
    buss.source = source;
    buss.destination = destination;
    buss.number = number;
    buss.capacity = capacity;
  
    //   bus.push(buss);
  
    let bus = JSON.parse(localStorage.getItem("bus"));
    bus.push(buss);
    localStorage.setItem("bus", JSON.stringify(bus));
  
    display();
  
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("number").value = "";
    document.getElementById("capacity").value = "";
  }
  
  function searchBysource() {
    let searchValue = document.getElementById("searchsource").value;
    let bus = JSON.parse(localStorage.getItem("bus"));
    let newdata = bus.filter(function (buss) {
      return (
        buss.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  function searchBydestination() {
    let searchValue = document.getElementById("searchdestination").value;
    let bus = JSON.parse(localStorage.getItem("bus"));
    let newdata = bus.filter(function (buss) {
      return (
        buss.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }

  function deletebus(index) {
    let bus = JSON.parse(localStorage.getItem("bus"));
    bus.splice(index, 1);
    localStorage.setItem("bus", JSON.stringify(bus));
    display();
  }
  
  function showModal(index) {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
  
    copybus(index);
  }
  
  function hideModal(event) {
    if (event.target.className == "modal") {
      let modal = document.getElementsByClassName("modal")[0];
      modal.style.display = "none";
    }
  }