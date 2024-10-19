// Inicializando arrays para armazenar os dados
let studentNames = [];
let studentGrades = [];

// Função para validar a nota
function isValidGrade(grade) {
  // Verifica se está no range de 0 a 10 e tem até uma casa decimal
  const gradeValue = parseFloat(grade);
  return gradeValue >= 0 && gradeValue <= 10 && /^(\d+(\.\d{1})?)$/.test(grade);
}

// Função para adicionar um aluno e suas notas
function addStudent() {
  const nameInput = document.getElementById('studentName').value;
  const gradeInput = document.getElementById('studentGrade').value;

  // Verifica se o nome não está vazio e a nota é válida
  if (nameInput !== '' && isValidGrade(gradeInput)) {
    // Adiciona o nome e a nota às listas
    studentNames.push(nameInput);
    studentGrades.push(parseFloat(gradeInput));

    // Limpa os campos de entrada
    document.getElementById('studentName').value = '';
    document.getElementById('studentGrade').value = '';

    // Atualiza o gráfico
    updateChart();
  } else {
    alert("Por favor, insira um nome válido e uma nota entre 0 e 10, com até uma casa decimal (ex: 8.5).");
  }
}

// Configuração inicial do gráfico de barras
const ctx = document.getElementById('gradeChart').getContext('2d');
let gradeChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: studentNames, // Nomes dos alunos
    datasets: [{
      label: 'Notas dos Alunos',
      data: studentGrades, // Notas dos alunos
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 10 // Limite do eixo Y para a nota máxima
      }
    }
  }
});

// Função para atualizar o gráfico com os novos dados
function updateChart() {
  gradeChart.data.labels = studentNames;
  gradeChart.data.datasets[0].data = studentGrades;
  gradeChart.update();
}
