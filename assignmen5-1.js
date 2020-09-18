let employee = [
    {
      name: "Rohit",
      age: 21,
      City: "Jhansi",
      Salary: 35000,
    },
    {
      name: "Sandeep",
      age: 22,
      City: "Digara",
      Salary: 30000,
    },
    {
      name: "Adarsh",
      age: 24,
      City: "Mauranipur",
      Salary: 29900,
    },
    {
      name: "Shivam",
      age: 23,
      City: "Babina",
      Salary: 22900,
    },
    {
      name: "Raja",
      age: 26,
      City: "Orai",
      Salary: 22000,
    }
  ];
  
  function display(superarray) {
    let tabledata = "";
  
    superarray.forEach(function (employe, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${employe.name}</td>
      <td>${employe.age}</td>
      <td>${employe.City}</td>
      <td>${employe.Salary}</td>
      <td>
      <button onclick='deleteSuperhero(${index})'>delete</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });

      document.getElementById("tdata").innerHTML = tabledata;
  }


  display(employee);
  
  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = employee.filter(function (employe) {
      return (
        employe.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }


function searchByCity() {
    let searchValue = document.getElementById("searchCity").value;
  
    let newdataa = employee.filter(function (employe) {
      return (
        employe.City.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdataa);
}


  function deleteSuperhero(index) {
    employee.splice(index, 1);
    display(employee);
  }



  function hideModal(event) {
    if (event.target.className == "modal") {
      let modal = document.getElementsByClassName("modal")[0];
      modal.style.display = "none";
    }
  }