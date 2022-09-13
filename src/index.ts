import { v4 as uuidv4 } from "uuid"

type Task = {
  id: string
  title: string
  completed: boolean
  date: Date
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector<HTMLFormElement>("#new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-title")

form?.addEventListener("submit", (e) => {
  e.preventDefault()

  if (input?.value == "" || input?.value == null) return

  const newTask = {
    id: uuidv4(),
    title: input.value,
    completed: false,
    date: new Date(),
  }

  addListItem(newTask)
  input.value = ""
})

function addListItem(task: Task) {
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.addEventListener("change", (e) => {
    task.completed = checkbox.checked
  })
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}
