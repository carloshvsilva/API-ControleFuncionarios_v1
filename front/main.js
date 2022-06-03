const url="https://localhost:7083/api/Funcionarios"
//const urlParam=

var myArray = []

const updateFuncionario = {
    id: 4,
    nome: "Climar"}


function getFuncionario(){
    axios.get(url)
    .then(response => {
        //const data = response.data
        //renderResults.textContent = JSON.stringify(data)
        myArray = response.data
        buildTable(myArray)

	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i].id}</td>
							<td>${data[i].nome}</td>
                            <td>${data[i].sobrenome}</td>
                            <td>${data[i].email}</td>
                            <td>${data[i].telefone}</td>
                            <td>${data[i].lider}</td>
                            <td>${data[i].nome_lider}</td>
					  </tr>`
			table.innerHTML += row
        }
    }
    })
    .catch(error => console.log(error))
}
getFuncionario()

function getUmFuncionario(){
    axios.get(`${url}/3`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))

}
//getUmFuncionario()

function novoFuncionario() {
    //var nome = documento
    const newFuncionario = {nome: "Jonas"}
    alert(JSON.stringify(newFuncionario))
    axios.post(url, newFuncionario)
    .then(response => {
        console.log(response.data)
        //alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(erro))
}
//novoFuncionario()

function atualizaFuncionario(){
    axios.put(`${url}/4`, updateFuncionario)
    .then(response => {
        console.log(response.data)
        //alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))

}
//atualizaFuncionario()

function deletaFuncionario(){
    axios.delete(`${url}/14`)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
}
//deletaFuncionario();