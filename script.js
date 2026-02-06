'use strict';

const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

function addTask(name) {
  const li = document.createElement('li');
  li.className = 'item';

  const span = document.createElement('span');
  span.textContent = name;

  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.className = 'del';
  delBtn.textContent = '削除';
  delBtn.addEventListener('click', () => li.remove());

  li.append(span, delBtn);
  list.appendChild(li);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = input.value.trim();
  if (!taskName) return;   // 空入力ガード
  addTask(taskName);
  input.value = '';
  input.focus();
});
