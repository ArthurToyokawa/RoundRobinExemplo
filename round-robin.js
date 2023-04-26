function roundRobin(processes, quantum) {
  let currentTime = 0;
  let queue = [];
  let running = true;
  
  while (running) {
    processes = processes.filter(process => {
      if(process.arrivalTime <= currentTime){
        queue.push(process) 
        console.log(`Processo ${process.index} adicionado na fila`);
      } else {
        return process;
      }
    });
    const currentProcess = queue.shift();
    const executeTime = Math.min(quantum, currentProcess.executionTime);
    currentProcess.executionTime -= executeTime;
    currentTime += executeTime;
    console.log(`Processo ${currentProcess.index} executado por ${executeTime} unidades de tempo`);

    if (currentProcess.executionTime === 0) {
      console.log(`Processo ${currentProcess.index} finalizado`);
    } else {
      queue.push(currentProcess);
      console.log(`Processo ${currentProcess.index} adicionado no fim da fila`);
    }

    if (queue.length === 0 && processes.length === 0) {
      running = false;
    }
  }
}

// Exemplo de uso
const processes = [
  { index: 0, arrivalTime: 0, executionTime: 8 },
  { index: 1, arrivalTime: 1, executionTime: 6 },
  { index: 2, arrivalTime: 4, executionTime: 4 },
  { index: 3, arrivalTime: 6, executionTime: 2 }
];
const quantum = 3;

roundRobin(processes, quantum);
