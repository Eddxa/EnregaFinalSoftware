const tickets = [
  { cliente: 'Edgar', apellido: 'Cortez', activo: true, id: 'Acción 3', fecha: '2023-06-28', nombreTicket: 'Ticket 1', responsable: 'Juan' },
  { cliente: 'Edgar', apellido: 'Cortez', activo: false, id: 'Acción 1', fecha: '2023-06-29', nombreTicket: 'Ticket 2', responsable: 'María' },
  { cliente: 'Edgar', apellido: 'Cortez', activo: true, id: 'Acción 6', fecha: '2023-06-30', nombreTicket: 'Ticket 3', responsable: 'Pedro' },
  { cliente: 'Edgar', apellido: 'Cortez', activo: false, id: 'Acción 2', fecha: '2023-07-01', nombreTicket: 'Ticket 4', responsable: 'Ana' },
  
];

// Obtener el elemento de la lista de tickets
const ticketList = document.getElementById('ticketList');

// Generar elementos de lista para cada ticket y agregarlos a la lista
tickets.forEach(ticket => {
  const ticketItem = document.createElement('div');
  ticketItem.classList.add('ticket-item');
  ticketItem.innerHTML = `
    <div class="ticket-details">
      <strong>ID:</strong> ${ticket.id}<br>
      <strong>Nombre del Ticket:</strong> ${ticket.nombreTicket}<br>
      <strong>Fecha:</strong> ${ticket.fecha}<br>
      <strong>Cliente:</strong> ${ticket.cliente} ${ticket.apellido}<br>
      <strong>Responsable:</strong> ${ticket.responsable}<br>
      <strong>Estado:</strong> ${ticket.activo ? 'Activo' : 'Resuelto'}<br>
    </div>
    <div class="ticket-button">
        <button type="button" class="btn btn-primary btn-lg">Ir a ticket</button>
    </div>
    <br>
  `;
  ticketList.appendChild(ticketItem);
});
