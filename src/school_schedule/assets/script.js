const backend = actor; // Aquí debes asignar la referencia al actor del backend de Motoko.

async function createSchedule() {
    const className = document.getElementById('className').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const dayOfWeek = document.getElementById('dayOfWeek').value;

    const schedule = {
        id: Date.now(),
        className,
        startTime,
        endTime,
        dayOfWeek,
    };

    await backend.createSchedule(schedule);
    await loadSchedules();
}

async function loadSchedules() {
    const schedules = await backend.readSchedules();
    const scheduleList = document.getElementById('schedule-list');
    scheduleList.innerHTML = '';

    schedules.forEach((schedule) => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        scheduleItem.innerHTML = `
            <div>${schedule.className} (${schedule.dayOfWeek})</div>
            <div>${schedule.startTime} - ${schedule.endTime}</div>
            <button onclick="deleteSchedule(${schedule.id})">Delete</button>
        `;
        scheduleList.appendChild(scheduleItem);
    });
}

async function deleteSchedule(id) {
    await backend.deleteSchedule(id);
    await loadSchedules();
}

window.onload = loadSchedules;
