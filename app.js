const STORAGE_KEY = "cleanspace15-weekly-planner-v3";
const LEGACY_STORAGE_KEY = "cleanspace15-state-v1";
const FOCUS_DURATION = 15 * 60;

const dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const roomNames = {
  cozinha: "Cozinha",
  quarto: "Quarto",
  banheiro: "Banheiro",
  sala: "Sala",
  roupas: "Roupas e armários",
  externo: "Varanda e quintal",
  casa: "Casa toda",
};

const starterTasks = [
  { id: "daily-dishes", name: "Lavar a louça que ficou suja", room: "cozinha", frequency: "daily" },
  { id: "daily-store-dishes", name: "Guardar a louça limpa", room: "cozinha", frequency: "daily" },
  { id: "daily-stove-top", name: "Limpar a superfície do fogão após usar", room: "cozinha", frequency: "daily" },
  { id: "daily-bed", name: "Arrumar a cama, se isso ajudar no seu dia", room: "quarto", frequency: "daily" },
  { id: "daily-laundry", name: "Colocar roupa suja no cesto", room: "roupas", frequency: "daily" },
  { id: "daily-put-away", name: "Guardar uma coisa que ficou fora do lugar", room: "casa", frequency: "daily" },
  { id: "mon-bedroom-surfaces", name: "Tirar o pó da escrivaninha e da cômoda", room: "quarto", frequency: "weekly", day: 1 },
  { id: "mon-bedroom-floor", name: "Varrer ou passar pano no chão", room: "quarto", frequency: "monthly", day: 1, monthWeek: 3 },
  { id: "mon-under-bed", name: "Limpar embaixo da cama", room: "quarto", frequency: "monthly", day: 1, monthWeek: 2 },
  { id: "mon-fan", name: "Tirar o pó do ventilador", room: "quarto", frequency: "monthly", day: 1, monthWeek: 4 },
  { id: "tue-kitchen-surfaces", name: "Limpar pia, bancada e escorredor", room: "cozinha", frequency: "weekly", day: 2 },
  { id: "tue-fridge-outside", name: "Limpar a parte externa da geladeira", room: "cozinha", frequency: "monthly", day: 2, monthWeek: 1 },
  { id: "tue-kitchen-floor", name: "Varrer ou passar pano no chão", room: "cozinha", frequency: "monthly", day: 2, monthWeek: 3 },
  { id: "tue-stove-details", name: "Limpar botões e laterais do fogão", room: "cozinha", frequency: "monthly", day: 2, monthWeek: 2 },
  { id: "tue-pantry", name: "Conferir alimentos e uma prateleira da despensa", room: "cozinha", frequency: "monthly", day: 2, monthWeek: 4 },
  { id: "wed-bath-sink", name: "Limpar a pia e o espelho", room: "banheiro", frequency: "weekly", day: 3 },
  { id: "wed-bath-toilet", name: "Limpar o vaso sanitário", room: "banheiro", frequency: "monthly", day: 3, monthWeek: 1 },
  { id: "wed-bath-floor", name: "Limpar o chão do banheiro", room: "banheiro", frequency: "monthly", day: 3, monthWeek: 2 },
  { id: "wed-change-bedding", name: "Trocar lençol e fronhas", room: "quarto", frequency: "weekly", day: 3 },
  { id: "wed-shower-details", name: "Limpar uma parte do box ou da área molhada", room: "banheiro", frequency: "monthly", day: 3, monthWeek: 3 },
  { id: "thu-living-surfaces", name: "Limpar mesas e superfícies da sala", room: "sala", frequency: "monthly", day: 4, monthWeek: 1 },
  { id: "thu-living-tidy", name: "Guardar livros, cadernos ou objetos usados", room: "sala", frequency: "weekly", day: 4 },
  { id: "thu-living-floor", name: "Varrer ou aspirar o chão da sala", room: "sala", frequency: "monthly", day: 4, monthWeek: 2 },
  { id: "thu-sofa", name: "Tirar migalhas ou pelos do sofá", room: "sala", frequency: "monthly", day: 4, monthWeek: 3 },
  { id: "fri-fold-laundry", name: "Dobrar e guardar algumas roupas limpas", room: "roupas", frequency: "weekly", day: 5 },
  { id: "fri-wardrobe-air", name: "Arejar o armário por alguns minutos", room: "roupas", frequency: "monthly", day: 5, monthWeek: 2 },
  { id: "fri-wardrobe-drawer", name: "Limpar uma gaveta ou prateleira do armário", room: "roupas", frequency: "monthly", day: 5, monthWeek: 3 },
  { id: "fri-check-shoes", name: "Verificar uma caixa ou prateleira de sapatos", room: "roupas", frequency: "monthly", day: 5, monthWeek: 4 },
  { id: "sat-door-handles", name: "Limpar algumas maçanetas e interruptores", room: "casa", frequency: "weekly", day: 6 },
  { id: "sat-entry-floor", name: "Varrer a entrada ou a varanda, se tiver", room: "externo", frequency: "monthly", day: 6, monthWeek: 1 },
  { id: "sat-balcony-details", name: "Recolher folhas ou objetos da área externa, se houver", room: "externo", frequency: "monthly", day: 6, monthWeek: 3 },
  { id: "sat-clothesline-bucket", name: "Limpar o varal ou um balde usado", room: "externo", frequency: "monthly", day: 6, monthWeek: 4 },
  { id: "mon-window", name: "Limpar uma janela ou o trilho", room: "quarto", frequency: "monthly", day: 1, monthWeek: 1 },
  { id: "mon-product-basket", name: "Organizar o cesto de produtos de uso diário", room: "banheiro", frequency: "monthly", day: 3, monthWeek: 4 },
  { id: "tue-pantry-cabinet", name: "Limpar uma prateleira do armário de mantimentos", room: "cozinha", frequency: "monthly", day: 2, monthWeek: 1 },
  { id: "thu-books", name: "Organizar cadernos ou papéis em uma caixa", room: "sala", frequency: "monthly", day: 4, monthWeek: 4 },
];

const quickCategoryLabels = {
  daily: "Rotina diária",
  focus: "15 min",
  occasional: "Quando der",
};

const starterQuickTasks = [
  { id: "starter-1", name: "Lavar a louça que ficou suja", category: "daily", done: false },
  { id: "starter-2", name: "Guardar a louça limpa", category: "daily", done: false },
  { id: "starter-3", name: "Limpar a superfície do fogão", category: "focus", done: false },
  { id: "starter-4", name: "Limpar a superfície da pia", category: "focus", done: false },
  { id: "starter-5", name: "Guardar uma coisa que ficou fora do lugar", category: "occasional", done: false },
];

const elements = {
  weekSummary: document.querySelector("#week-summary"),
  weekProgress: document.querySelector("#week-progress"),
  timerDisplay: document.querySelector("#timer-display"),
  timerCaption: document.querySelector("#timer-caption"),
  timerStatus: document.querySelector("#timer-status"),
  timerToggle: document.querySelector("#timer-toggle"),
  timerButtonLabel: document.querySelector("#timer-button-label"),
  timerReset: document.querySelector("#timer-reset"),
  quickClock: document.querySelector(".quick-clock"),
  welcomeNote: document.querySelector(".welcome-note"),
  welcomeMood: document.querySelector("#welcome-mood"),
  welcomeSubtitle: document.querySelector("#welcome-subtitle"),
  quickTaskList: document.querySelector("#quick-task-list"),
  quickEmpty: document.querySelector("#quick-empty"),
  quickCompleted: document.querySelector("#quick-completed"),
  quickTotal: document.querySelector("#quick-total"),
  quickForm: document.querySelector("#quick-add-form"),
  quickTaskName: document.querySelector("#quick-task-name"),
  quickTaskCategory: document.querySelector("#quick-task-category"),
  clearQuickDone: document.querySelector("#clear-quick-done"),
  selectedDateLabel: document.querySelector("#selected-date-label"),
  dailyList: document.querySelector("#daily-list"),
  calendarGrid: document.querySelector("#calendar-grid"),
  emptyCalendar: document.querySelector("#empty-calendar"),
  taskForm: document.querySelector("#task-form"),
  taskName: document.querySelector("#task-name"),
  taskRoom: document.querySelector("#task-room"),
  taskFrequency: document.querySelector("#task-frequency"),
  taskDay: document.querySelector("#task-day"),
  taskDayField: document.querySelector("#task-day-field"),
  taskMonthWeekField: document.querySelector("#task-month-week-field"),
  taskMonthWeek: document.querySelector("#task-month-week"),
};

function localDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getMonday(date) {
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const offset = (monday.getDay() + 6) % 7;
  monday.setDate(monday.getDate() - offset);
  return monday;
}

function isValidTask(task) {
  return (
    task &&
    typeof task.id === "string" &&
    typeof task.name === "string" &&
    Object.hasOwn(roomNames, task.room) &&
    ["daily", "weekly", "monthly"].includes(task.frequency) &&
    (task.frequency === "daily" ||
      (Number.isInteger(task.day) && task.day >= 0 && task.day <= 6)) &&
    (task.frequency !== "monthly" ||
      (Number.isInteger(task.monthWeek) && task.monthWeek >= 1 && task.monthWeek <= 4)) &&
    Array.isArray(task.doneDates)
  );
}

function loadQuickTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY));
    if (Array.isArray(saved?.tasks)) {
      return saved.tasks
        .filter(
          (task) =>
            task &&
            typeof task.id === "string" &&
            typeof task.name === "string" &&
            Object.hasOwn(quickCategoryLabels, task.category) &&
            typeof task.done === "boolean",
        )
        .map((task) => ({
          ...task,
          doneDate: task.doneDate ?? (task.done ? localDateKey(new Date()) : null),
        }));
    }
  } catch (error) {
    console.warn("Não foi possível carregar sua lista de 15 minutos.", error);
  }

  return starterQuickTasks.map((task) => ({ ...task }));
}

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved?.tasks)) {
      return saved.tasks.filter(isValidTask);
    }
  } catch (error) {
    console.warn("Não foi possível carregar o calendário salvo.", error);
  }

  return [
    ...starterTasks.map((task) => ({ ...task, doneDates: [] })),
  ];
}

const quickState = {
  tasks: loadQuickTasks(),
  filter: "all",
  timerSeconds: FOCUS_DURATION,
  timerId: null,
};

const state = {
  tasks: loadTasks(),
  weekStart: getMonday(new Date()),
  selectedDate: new Date(),
  roomFilter: "all",
  activeMode: "quick",
};

state.selectedDate = new Date(
  state.weekStart.getFullYear(),
  state.weekStart.getMonth(),
  state.weekStart.getDate() + ((new Date().getDay() + 6) % 7),
);

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ tasks: state.tasks }));
  } catch (error) {
    console.warn("Não foi possível salvar as alterações do calendário.", error);
  }
}

function isTaskDone(task, date) {
  return task.doneDates.includes(localDateKey(date));
}

function isTaskDue(task, date) {
  if (task.day !== date.getDay()) return false;
  if (task.frequency === "weekly") return true;
  if (task.frequency !== "monthly") return false;
  const monthWeek = Math.min(4, Math.floor((date.getDate() - 1) / 7) + 1);
  return monthWeek === task.monthWeek;
}

function getWeekDates() {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(state.weekStart);
    date.setDate(state.weekStart.getDate() + index);
    return date;
  });
}

function formatDateRange(start, end) {
  const sameMonth = start.getMonth() === end.getMonth();
  const startLabel = start.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: sameMonth ? undefined : "short",
  });
  const endLabel = end.toLocaleDateString("pt-BR", { day: "numeric", month: "short" });
  return `${startLabel} – ${endLabel}`;
}

function getRoomTasks(tasks) {
  if (state.roomFilter === "all") return tasks;
  return tasks.filter((task) => task.room === state.roomFilter);
}

function makeTaskRow(task, date, compact = false) {
  const item = document.createElement("li");
  item.className = `task-row${isTaskDone(task, date) ? " is-done" : ""}`;

  const checkbox = document.createElement("input");
  checkbox.className = "task-checkbox";
  checkbox.type = "checkbox";
  checkbox.checked = isTaskDone(task, date);
  checkbox.setAttribute("aria-label", `${checkbox.checked ? "Desmarcar" : "Concluir"}: ${task.name}`);
  checkbox.addEventListener("change", () => {
    const key = localDateKey(date);
    if (checkbox.checked && !task.doneDates.includes(key)) {
      task.doneDates.push(key);
    } else {
      task.doneDates = task.doneDates.filter((doneDate) => doneDate !== key);
    }
    saveTasks();
    render();
  });

  const content = document.createElement("span");
  content.className = "task-content";
  const name = document.createElement("span");
  name.className = "task-name";
  name.textContent = task.name;
  const room = document.createElement("span");
  room.className = "task-room";
  room.textContent = roomNames[task.room];
  content.append(name, room);

  const remove = document.createElement("button");
  remove.className = "remove-task";
  remove.type = "button";
  remove.textContent = "×";
  remove.setAttribute("aria-label", `Remover tarefa: ${task.name}`);
  remove.addEventListener("click", () => {
    state.tasks = state.tasks.filter((current) => current.id !== task.id);
    saveTasks();
    render();
  });

  item.append(checkbox, content, remove);
  if (compact) item.classList.add("task-row-compact");
  return item;
}

function renderDailyTasks() {
  const dailyTasks = getRoomTasks(state.tasks.filter((task) => task.frequency === "daily"));
  const dateKey = localDateKey(state.selectedDate);

  elements.dailyList.replaceChildren(...dailyTasks.map((task) => makeTaskRow(task, state.selectedDate, true)));
  elements.selectedDateLabel.textContent = state.selectedDate.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  if (dailyTasks.length === 0) {
    const empty = document.createElement("li");
    empty.className = "daily-empty";
    empty.textContent = "Sem tarefas diárias neste cômodo.";
    elements.dailyList.append(empty);
  }

  const completed = dailyTasks.filter((task) => isTaskDone(task, state.selectedDate)).length;
  elements.dailyList.setAttribute(
    "aria-label",
    `${completed} de ${dailyTasks.length} sugestões diárias concluídas em ${dateKey}`,
  );
}

function renderCalendar() {
  const dates = getWeekDates();
  const weeklyTasks = state.tasks.filter((task) => task.frequency !== "daily");
  let visibleTaskCount = 0;
  let completedCount = 0;

  elements.calendarGrid.replaceChildren(
    ...dates.map((date) => {
      const dateTasks = getRoomTasks(weeklyTasks.filter((task) => isTaskDue(task, date)));
      visibleTaskCount += dateTasks.length;
      completedCount += dateTasks.filter((task) => isTaskDone(task, date)).length;

      const day = document.createElement("article");
      day.className = "day-column";
      if (localDateKey(date) === localDateKey(state.selectedDate)) day.classList.add("is-selected");
      if (localDateKey(date) === localDateKey(new Date())) day.classList.add("is-today");

      const header = document.createElement("button");
      header.className = "day-header";
      header.type = "button";
      header.setAttribute("aria-pressed", String(localDateKey(date) === localDateKey(state.selectedDate)));
      header.addEventListener("click", () => {
        state.selectedDate = new Date(date);
        render();
      });

      const dayName = document.createElement("span");
      dayName.className = "day-name";
      dayName.textContent = dayNames[date.getDay()];
      const dayNumber = document.createElement("strong");
      dayNumber.className = "day-number";
      dayNumber.textContent = String(date.getDate());
      const month = document.createElement("span");
      month.className = "day-month";
      month.textContent = date.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");
      header.append(dayName, dayNumber, month);

      const list = document.createElement("ul");
      list.className = "day-task-list";
      if (dateTasks.length === 0) {
        const freeDay = document.createElement("li");
        freeDay.className = "free-day";
        freeDay.textContent = "Sem tarefas";
        list.append(freeDay);
      } else {
        list.replaceChildren(...dateTasks.map((task) => makeTaskRow(task, date)));
      }

      day.append(header, list);
      return day;
    }),
  );

  elements.emptyCalendar.hidden = visibleTaskCount > 0;
  const weekEnd = dates[dates.length - 1];
  elements.weekSummary.textContent = formatDateRange(dates[0], weekEnd);
  elements.weekProgress.textContent = `${completedCount} ${
    completedCount === 1 ? "tarefa concluída" : "tarefas concluídas"
  }`;
}

function renderRoomFilter() {
  for (const button of document.querySelectorAll(".room-chip")) {
    const active = button.dataset.room === state.roomFilter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  }
}

function saveQuickTaskList() {
  try {
    const tasks = quickState.tasks.map((task) => ({
      ...task,
      done: isQuickTaskDone(task),
    }));
    localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify({ tasks }));
  } catch (error) {
    console.warn("Não foi possível salvar sua lista de 15 minutos.", error);
  }
}

function isQuickTaskDone(task) {
  return task.doneDate === localDateKey(new Date());
}

function getVisibleQuickTasks() {
  if (quickState.filter === "all") return quickState.tasks;
  return quickState.tasks.filter((task) => task.category === quickState.filter);
}

function makeQuickTaskRow(task) {
  const item = document.createElement("li");
  item.className = `task-row${isQuickTaskDone(task) ? " is-done" : ""}`;

  const checkbox = document.createElement("input");
  checkbox.className = "task-checkbox";
  checkbox.type = "checkbox";
  checkbox.checked = isQuickTaskDone(task);
  checkbox.setAttribute("aria-label", `${task.done ? "Reabrir" : "Concluir"}: ${task.name}`);
  checkbox.addEventListener("change", () => {
    task.doneDate = checkbox.checked ? localDateKey(new Date()) : null;
    saveQuickTaskList();
    renderQuick();
  });

  const name = document.createElement("span");
  name.className = "task-name";
  name.textContent = task.name;

  const category = document.createElement("span");
  category.className = "quick-category";
  category.dataset.category = task.category;
  category.textContent = quickCategoryLabels[task.category];

  const remove = document.createElement("button");
  remove.className = "remove-task";
  remove.type = "button";
  remove.textContent = "×";
  remove.setAttribute("aria-label", `Remover tarefa: ${task.name}`);
  remove.addEventListener("click", () => {
    quickState.tasks = quickState.tasks.filter((current) => current.id !== task.id);
    saveQuickTaskList();
    renderQuick();
  });

  item.append(checkbox, name, category, remove);
  return item;
}

function renderQuickTasks() {
  const visibleTasks = getVisibleQuickTasks();
  elements.quickTaskList.replaceChildren(...visibleTasks.map(makeQuickTaskRow));
  elements.quickEmpty.hidden = visibleTasks.length > 0;

  const completed = quickState.tasks.filter(isQuickTaskDone).length;
  elements.quickCompleted.textContent = String(completed);
  elements.quickTotal.textContent = String(quickState.tasks.length);
  document.querySelector("#quick-count-all").textContent = String(quickState.tasks.length);

  for (const category of Object.keys(quickCategoryLabels)) {
    const count = quickState.tasks.filter((task) => task.category === category).length;
    document.querySelector(`#quick-count-${category}`).textContent = String(count);
  }

  for (const tab of document.querySelectorAll(".category-tab")) {
    const active = tab.dataset.filter === quickState.filter;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  }

  // Atualização do estado de humor e progresso (Coerência com a Proposta DSW)
  const allDone = quickState.tasks.length > 0 && completed === quickState.tasks.length;
  if (elements.welcomeNote && elements.welcomeMood && elements.welcomeSubtitle) {
    if (allDone) {
      elements.welcomeNote.classList.add("mood-happy");
      elements.welcomeNote.classList.remove("mood-pending", "mood-progress");
      elements.welcomeMood.textContent = "Você fez o suficiente por hoje. 🌿";
      elements.welcomeSubtitle.textContent = "Agora é hora de descansar. Você merece.";
    } else if (completed > 0) {
      elements.welcomeNote.classList.add("mood-progress");
      elements.welcomeNote.classList.remove("mood-happy", "mood-pending");
      elements.welcomeMood.textContent = "Que bom que você veio.";
      elements.welcomeSubtitle.textContent = "Cada cantinho cuidado deixa a casa mais leve.";
    } else {
      elements.welcomeNote.classList.add("mood-pending");
      elements.welcomeNote.classList.remove("mood-happy", "mood-progress");
      elements.welcomeMood.textContent = "Por onde quiser começar";
      elements.welcomeSubtitle.textContent = "Respire. Uma pequena tarefa já vale — e descansar também.";
    }
  }
}

function stopQuickTimer() {
  if (quickState.timerId !== null) {
    window.clearInterval(quickState.timerId);
    quickState.timerId = null;
  }
}

function renderQuickTimer() {
  const minutes = Math.floor(quickState.timerSeconds / 60);
  const seconds = quickState.timerSeconds % 60;
  const running = quickState.timerId !== null;
  const hasPendingTasks = quickState.tasks.some((task) => !isQuickTaskDone(task));

  elements.timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  elements.quickClock.classList.toggle("is-running", running);
  elements.timerToggle.disabled = !hasPendingTasks && !running;
  elements.timerReset.hidden = quickState.timerSeconds === FOCUS_DURATION && !running;
  elements.timerCaption.textContent = "TEMPO RESTANTE";
  elements.timerStatus.textContent = quickState.timerSeconds === 0
    ? "Tempo concluído."
    : running
      ? "Em andamento."
      : "Pronto para começar.";
  elements.timerButtonLabel.textContent = running
    ? "Pausar"
    : quickState.timerSeconds < FOCUS_DURATION
      ? "Continuar"
      : hasPendingTasks
        ? "Iniciar 15 minutos"
        : "Adicione uma tarefa";
}

function renderQuick() {
  renderQuickTasks();
  renderQuickTimer();
}

function renderModeTabs() {
  for (const tab of document.querySelectorAll(".mode-tab")) {
    const active = tab.dataset.mode === state.activeMode;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    document.querySelector(`#${tab.dataset.mode}-panel`).hidden = !active;
  }
}

function render() {
  renderQuick();
  renderDailyTasks();
  renderCalendar();
  renderRoomFilter();
  renderModeTabs();
}

function updateFrequencyFields() {
  const frequency = elements.taskFrequency.value;
  const needsDay = frequency !== "daily";
  elements.taskDayField.hidden = !needsDay;
  elements.taskMonthWeekField.hidden = frequency !== "monthly";
  elements.taskDay.required = needsDay;
  elements.taskMonthWeek.required = frequency === "monthly";
}

elements.quickTaskName.addEventListener("input", () => {
  elements.quickTaskName.setCustomValidity("");
});

elements.quickForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = elements.quickTaskName.value.trim();
  if (!name) {
    elements.quickTaskName.setCustomValidity("Por favor, digite o que você gostaria de cuidar.");
    elements.quickTaskName.reportValidity();
    elements.quickTaskName.focus();
    return;
  }

  quickState.tasks.unshift({
    id: window.crypto?.randomUUID?.() ?? `quick-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    category: elements.quickTaskCategory.value,
    done: false,
  });
  quickState.filter = "all";
  saveQuickTaskList();
  elements.quickForm.reset();
  renderQuick();
  elements.quickTaskName.focus();
});

for (const tab of document.querySelectorAll(".category-tab")) {
  tab.addEventListener("click", () => {
    quickState.filter = tab.dataset.filter;
    renderQuickTasks();
  });
}

elements.clearQuickDone.addEventListener("click", () => {
  quickState.tasks = quickState.tasks.filter((task) => !isQuickTaskDone(task));
  saveQuickTaskList();
  renderQuick();
});

for (const tab of document.querySelectorAll(".mode-tab")) {
  tab.addEventListener("click", () => {
    state.activeMode = tab.dataset.mode;
    renderModeTabs();
  });
}

elements.timerToggle.addEventListener("click", () => {
  if (quickState.timerId !== null) {
    stopQuickTimer();
    renderQuickTimer();
    return;
  }

  if (!quickState.tasks.some((task) => !isQuickTaskDone(task))) return;
  if (quickState.timerSeconds === 0) quickState.timerSeconds = FOCUS_DURATION;
  quickState.timerId = window.setInterval(() => {
    quickState.timerSeconds = Math.max(0, quickState.timerSeconds - 1);
    if (quickState.timerSeconds === 0) stopQuickTimer();
    renderQuickTimer();
  }, 1000);
  renderQuickTimer();
});

elements.timerReset.addEventListener("click", () => {
  stopQuickTimer();
  quickState.timerSeconds = FOCUS_DURATION;
  renderQuickTimer();
});

document.querySelector("#previous-week").addEventListener("click", () => {
  state.weekStart.setDate(state.weekStart.getDate() - 7);
  state.selectedDate.setDate(state.selectedDate.getDate() - 7);
  render();
});

document.querySelector("#next-week").addEventListener("click", () => {
  state.weekStart.setDate(state.weekStart.getDate() + 7);
  state.selectedDate.setDate(state.selectedDate.getDate() + 7);
  render();
});

document.querySelector("#today-week").addEventListener("click", () => {
  state.weekStart = getMonday(new Date());
  state.selectedDate = new Date();
  render();
});

for (const button of document.querySelectorAll(".room-chip")) {
  button.addEventListener("click", () => {
    state.roomFilter = button.dataset.room;
    render();
  });
}

elements.taskFrequency.addEventListener("change", updateFrequencyFields);

elements.taskName.addEventListener("input", () => {
  elements.taskName.setCustomValidity("");
});

elements.taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = elements.taskName.value.trim();
  if (!name) {
    elements.taskName.setCustomValidity("Por favor, digite o nome da tarefa antes de adicionar.");
    elements.taskName.reportValidity();
    elements.taskName.focus();
    return;
  }

  const frequency = elements.taskFrequency.value;
  const task = {
    id: window.crypto?.randomUUID?.() ?? `task-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    room: elements.taskRoom.value,
    frequency,
    doneDates: [],
  };

  if (frequency !== "daily") task.day = Number(elements.taskDay.value);
  if (frequency === "monthly") task.monthWeek = Number(elements.taskMonthWeek.value);

  state.tasks.push(task);
  saveTasks();
  elements.taskForm.reset();
  updateFrequencyFields();
  render();
  elements.taskName.focus();
});

updateFrequencyFields();
render();

/* ---- Tipografia interativa e detalhes editoriais ---- */
function splitKineticText(root) {
  let index = 0;
  const walk = (node) => {
    for (const child of [...node.childNodes]) {
      if (child.nodeType === Node.TEXT_NODE) {
        const fragment = document.createDocumentFragment();
        for (const char of child.textContent) {
          if (char.trim() === "") {
            fragment.append(char);
            continue;
          }
          const span = document.createElement("span");
          span.className = "char";
          span.setAttribute("aria-hidden", "true");
          span.style.setProperty("--i", index++);
          span.textContent = char;
          fragment.append(span);
        }
        child.replaceWith(fragment);
      } else {
        walk(child);
      }
    }
  };
  root.setAttribute("aria-label", root.textContent.replace(/\s+/g, " ").trim());
  walk(root);
}

const kineticTitle = document.querySelector(".kinetic");
if (kineticTitle) splitKineticText(kineticTitle);

const heroDate = document.querySelector("#hero-date");
if (heroDate) {
  heroDate.textContent = new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
}

const heroPhoto = document.querySelector(".hero-photo");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (heroPhoto && !reduceMotion) {
  heroPhoto.addEventListener("pointermove", (event) => {
    const rect = heroPhoto.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroPhoto.style.setProperty("--rx", `${(-y * 4).toFixed(2)}deg`);
    heroPhoto.style.setProperty("--ry", `${(x * 5).toFixed(2)}deg`);
  });
  heroPhoto.addEventListener("pointerleave", () => {
    heroPhoto.style.setProperty("--rx", "0deg");
    heroPhoto.style.setProperty("--ry", "0deg");
  });
}
