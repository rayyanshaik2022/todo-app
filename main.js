(()=>{"use strict";var e={d:(t,o)=>{for(var s in o)e.o(o,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:o[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{U:()=>g});const t=class{constructor(e,t,o=null){this._title=e,this._text=t,this._tags=o||[],this._exists=!0}get title(){return this._title}set title(e){this._title=e}get text(){return this._text}set text(e){this._text=e}get tags(){return this._tags}set tags(e){this._tags=e}addTag(e){this._tags.push(e)}get exists(){return this._exists}set exists(e){this._exists=e}},o=class{constructor(e,t="red"){this._text=e,this._color=t}get text(){return this._text}set text(e){this._text=e}get color(){return this._color}set color(e){return this._color}};class s{constructor(e){this._name=e,this._title=e+"'s",this._todos=[],this._type="workspace"}get todos(){return this._todos}addTodo(e){this._todos.push(e)}removeTodo(e){for(let t=0;t<this._todos.length;t++)if(this._todos[t].title==e)return this._todos.pop(t)}get title(){return this._title}set title(e){this._title=e}get name(){return this._name}get type(){return this._type}}function r(e,t){const o=document.createElement("div");o.classList.add("content"),o.innerHTML=`\n        <h1 class="todo-title">${e.title} Todos</h1>\n        <h2 class="todo-desc">\n            You've got <span class="todo-count">${e.todos.length}</span> todos to\n            complete\n        </h2>\n        <div class="add-new-task">\n            <input class="regular-checkbox" type="checkbox" name="add-task" value="del">\n            <input class="add-text-field" type="text" name="add-task-text" placeholder="Add a new task" minlength="3">\n        </div>\n    `,e.todos.forEach((e=>{o.innerHTML+=`\n            <div class="todo-card">\n                <input class="regular-checkbox for-del" type="checkbox" name="add-task" value="del">\n                <div class="card-content">\n                    <h2>${e.title}</h2>\n                    <p>${e.text}</p>\n                    <div class="label-container">\n                    </div>\n                </div>\n            </div>\n        `;let t=o.querySelectorAll(".label-container"),s=t[t.length-1];e.tags.forEach((e=>{let t=document.createElement("div");t.classList.add("label"),t.classList.add(e.color),t.textContent=e.text,s.append(t)}))})),"project"==e.type&&(o.querySelector("h1").style=`\n            background-color: var(--highlight-${e.color});\n            border: 6px solid var(--highlight-${e.color});\n            border-radius: 8px;\n        `);const s=document.querySelector(".pop-up"),c=o.querySelector(".add-text-field");return c.addEventListener("keypress",(e=>{"Enter"===e.key&&(e.preventDefault(),c.value.length>=3&&(s.classList.add("active"),document.querySelector(".h1-input").value=c.value,document.querySelector(".p-input").value=""))})),o.querySelectorAll(".for-del").forEach((t=>{t.addEventListener("change",(o=>{if(o.currentTarget.checked){let s=t.closest(".todo-card"),c=o.currentTarget;setTimeout((()=>{c.checked&&(s.classList.add("dissolve"),setTimeout((()=>{e.removeTodo(s.querySelector("h2").textContent),g(r(e),e)}),1e3))}),1e3)}}))})),o}class c extends s{constructor(e,t){super(e),this._color=t,this._type="project"}get color(){return this._color}set color(e){this._color=e}get title(){return this._name}}const n=new s("Today"),l=new s("Week");l.title="This Week's";const a=new c("Homework","purple"),i=new c("Personal","green");let d,u=[n,l,a,i],h=[new o("js","red"),new o("project","purple"),new o("todo","orange")],p=new t("Practice using JS module","Create a todo-list application to achieve this");p.tags=h,n.addTodo(p),h=[new o("css","green"),new o("html","yellow"),new o("study","blue")],p=new t("Practice CSS Flexbox","Use practice tools such as flexbox froggy"),p.tags=h,n.addTodo(p);let v=document.querySelector(".content");function g(e,t){let o=e;v.replaceWith(o),v=o,d=t}function m(e){document.querySelector(".project-container").append(function(e){const t=document.createElement("div");return t.classList.add("project","btn-group"),t.innerHTML=`\n        <div class="proj-color ${e.color}"></div>\n        <div class="proj-title">${e.name}</div>\n    `,t.dataset.project=e.name,t}(e))}m(a),m(i),g(r(n),n);const y=document.querySelectorAll(".btn-group");y.forEach((e=>{e.addEventListener("click",(t=>{if(!e.classList.contains("selected")){if(e.classList.add("selected"),"group-today"==e.id)g(r(n),n);else if("group-week"==e.id)g(r(l),l);else if(null!=e.dataset.project){let t;u.forEach((o=>{o.name==e.dataset.project&&(t=o)})),g(r(t),t)}y.forEach((t=>{e!==t&&t.classList.remove("selected")}))}}))}));const _=document.querySelector("button.create-todo"),x=document.querySelector(".h1-input"),f=document.querySelector(".p-input");_.addEventListener("click",(e=>{let o=!1;if(x.value.length<3?(o=!0,document.querySelector("#h1-error").classList.add("active")):document.querySelector("#h1-error").classList.remove("active"),f.value.length<3?(o=!0,document.querySelector("#p-error").classList.add("active")):document.querySelector("#p-error").classList.remove("active"),o)return;let s=new t(x.value,f.value);d.addTodo(s),g(r(d),d),document.querySelector(".pop-up").classList.remove("active")})),document.querySelector(".tag-icon").addEventListener("click",(e=>{document.querySelector(".add-tag").classList.toggle("active")})),console.log("test");const S=document.querySelector(".pop-up");window.addEventListener("keydown",(e=>{"Escape"===e.key&&(e.preventDefault(),document.querySelector(".h1-input").value="",document.querySelector(".p-input").value="",S.classList.remove("active"))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxVQUdwREksRUFDQSxPQUdKLElBQUlDLEVBQVUsSUFBSSxFQUFLSCxFQUFRbkMsTUFBT29DLEVBQU9wQyxPQUM3Q2dCLEVBQWlCL0MsUUFBUXFFLEdBRXpCN0IsRUFBV2pDLEVBQWdCd0MsR0FBbUJBLEdBSTlDcEMsU0FBU2EsY0FBYyxXQUFXWCxVQUFVbUQsT0FBTyxTQUFTLElBSS9DckQsU0FBU2EsY0FBYyxhQUMvQkksaUJBQWlCLFNBQVVLLElBQ2hDdEIsU0FBU2EsY0FBYyxZQUFZWCxVQUFVeUQsT0FBTyxTQUFTLElBTWpFQyxRQUFRQyxJQUFJLFFBR1osTUFBTTlDLEVBQVFmLFNBQVNhLGNBQWMsV0FDckNpRCxPQUFPN0MsaUJBQWlCLFdBQVlDLElBQ2QsV0FBZEEsRUFBTWxFLE1BQ05rRSxFQUFNQyxpQkFDTm5CLFNBQVNhLGNBQWMsYUFBYU8sTUFBUSxHQUM1Q3BCLFNBQVNhLGNBQWMsWUFBWU8sTUFBUSxHQUMzQ0wsRUFBTWIsVUFBVW1ELE9BQU8sVUFDM0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbGFiZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvd29ya3NwYWNlLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcclxuXHJcbmNsYXNzIFRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIHRleHQsIHRhZ3M9bnVsbCkge1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRleHQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3RhZ3MgPSB0YWdzID8gdGFncyA6IFtdO1xyXG4gICAgICAgIHRoaXMuX2V4aXN0cyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdGl0bGUobmV3VGl0bGUpIHtcclxuICAgICAgICB0aGlzLl90aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0ZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0ZXh0KG5ld1RleHQpIHtcclxuICAgICAgICB0aGlzLl90ZXh0ID0gbmV3VGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGFncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGFncztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdGFncyhuZXdUYWdzKSB7XHJcbiAgICAgICAgdGhpcy5fdGFncyA9IG5ld1RhZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFnKG5ld1RhZykge1xyXG4gICAgICAgIHRoaXMuX3RhZ3MucHVzaChuZXdUYWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBleGlzdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4aXN0cztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZXhpc3RzKG5ld0V4aXN0cykge1xyXG4gICAgICAgIHRoaXMuX2V4aXN0cyA9IG5ld0V4aXN0cztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiLCJjbGFzcyBMYWJlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCBjb2xvcj1cInJlZFwiKSB7XHJcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXQgdGV4dChuZXdUZXh0KSB7XHJcbiAgICAgICAgdGhpcy5fdGV4dCA9IG5ld1RleHRcclxuICAgIH07XHJcblxyXG4gICAgZ2V0IGNvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY29sb3IobmV3Q29sb3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhYmVsOyIsImltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xyXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcbmltcG9ydCB7IHNldENvbnRlbnQgfSBmcm9tIFwiLlwiO1xyXG5cclxuY2xhc3MgV29ya3NwYWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl90aXRsZSA9IG5hbWUgKyBcIidzXCI7XHJcbiAgICAgICAgdGhpcy5fdG9kb3MgPSBbXTtcclxuICAgICAgICB0aGlzLl90eXBlID0gXCJ3b3Jrc3BhY2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9kb3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9zO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvZG8odG9kbykge1xyXG4gICAgICAgIHRoaXMuX3RvZG9zLnB1c2godG9kbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVG9kbyh0aXRsZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdG9kb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3RvZG9zW2ldLnRpdGxlID09IHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdG9kb3MucG9wKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB0aXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlV29ya3NwYWNlKHdvcmtzcGFjZSwgbWFpbikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoMSBjbGFzcz1cInRvZG8tdGl0bGVcIj4ke3dvcmtzcGFjZS50aXRsZX0gVG9kb3M8L2gxPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cInRvZG8tZGVzY1wiPlxyXG4gICAgICAgICAgICBZb3UndmUgZ290IDxzcGFuIGNsYXNzPVwidG9kby1jb3VudFwiPiR7d29ya3NwYWNlLnRvZG9zLmxlbmd0aH08L3NwYW4+IHRvZG9zIHRvXHJcbiAgICAgICAgICAgIGNvbXBsZXRlXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLW5ldy10YXNrXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ3VsYXItY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYWRkLXRhc2tcIiB2YWx1ZT1cImRlbFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJhZGQtdGV4dC1maWVsZFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZC10YXNrLXRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIG5ldyB0YXNrXCIgbWlubGVuZ3RoPVwiM1wiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICAvLyBDcmVhdGUgdG9kb3NcclxuICAgIHdvcmtzcGFjZS50b2Rvcy5mb3JFYWNoKHRvZCA9PiB7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWd1bGFyLWNoZWNrYm94IGZvci1kZWxcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYWRkLXRhc2tcIiB2YWx1ZT1cImRlbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj4ke3RvZC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7dG9kLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcblxyXG4gICAgICAgIGxldCBsYWJlbENvbnRhaW5lciA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYWJlbC1jb250YWluZXJcIik7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMYWJlbENvbnRhaW5lciA9IGxhYmVsQ29udGFpbmVyW2xhYmVsQ29udGFpbmVyLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICAvLyBBZGQgdGFnc1xyXG4gICAgICAgIHRvZC50YWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG5ld1RhZy5jbGFzc0xpc3QuYWRkKFwibGFiZWxcIilcclxuICAgICAgICAgICAgbmV3VGFnLmNsYXNzTGlzdC5hZGQodGFnLmNvbG9yKTtcclxuICAgICAgICAgICAgbmV3VGFnLnRleHRDb250ZW50ID0gdGFnLnRleHQ7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50TGFiZWxDb250YWluZXIuYXBwZW5kKG5ld1RhZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUHJvamVjdCBzcGVjaWZpY1xyXG4gICAgaWYgKHdvcmtzcGFjZS50eXBlID09IFwicHJvamVjdFwiKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyVGl0bGUgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcclxuICAgICAgICBoZWFkZXJUaXRsZS5zdHlsZSA9IGBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0LSR7d29ya3NwYWNlLmNvbG9yfSk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogNnB4IHNvbGlkIHZhcigtLWhpZ2hsaWdodC0ke3dvcmtzcGFjZS5jb2xvcn0pO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICBBY3Rpb25zXHJcbiAgICAqL1xyXG5cclxuICAgIC8vIE9wZW4gcG9wdXAgZm9yIG5ldyB0YXNrXHJcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwXCIpO1xyXG4gICAgY29uc3QgYWRkVG9kb0ZpZWxkID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10ZXh0LWZpZWxkXCIpO1xyXG4gICAgYWRkVG9kb0ZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGFkZFRvZG9GaWVsZC52YWx1ZS5sZW5ndGggPj0gMykge1xyXG4gICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaDEtaW5wdXRcIikudmFsdWUgPSBhZGRUb2RvRmllbGQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGVsZXRlIFRvZG9cclxuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yLWRlbFwiKTtcclxuICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoY2tieCkgPT4ge1xyXG4gICAgICAgIGNrYnguYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja0NhcmQgPSBja2J4LmNsb3Nlc3QoXCIudG9kby1jYXJkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJkaXNzb2x2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc3BhY2UucmVtb3ZlVG9kbyhjaGVja0NhcmQucXVlcnlTZWxlY3RvcihcImgyXCIpLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnQoY3JlYXRlV29ya3NwYWNlKHdvcmtzcGFjZSksIHdvcmtzcGFjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgeyBXb3Jrc3BhY2UsIGNyZWF0ZVdvcmtzcGFjZSB9O1xyXG4iLCJpbXBvcnQgeyBXb3Jrc3BhY2UgfSBmcm9tIFwiLi93b3Jrc3BhY2VcIjtcclxuXHJcbmNsYXNzIFByb2plY3QgZXh0ZW5kcyBXb3Jrc3BhY2Uge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgY29sb3IpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSBcInByb2plY3RcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjb2xvcihuZXdDb2xvcikge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gbmV3Q29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3QpIHtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiLCBcImJ0bi1ncm91cFwiKTtcclxuXHJcbiAgICBwcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2otY29sb3IgJHtwcm9qZWN0LmNvbG9yfVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qLXRpdGxlXCI+JHtwcm9qZWN0Lm5hbWV9PC9kaXY+XHJcbiAgICBgXHJcblxyXG4gICAgcHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdC5uYW1lO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0RWxlbWVudDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7UHJvamVjdCwgY3JlYXRlUHJvamVjdH07IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcclxuaW1wb3J0IHsgV29ya3NwYWNlLCBjcmVhdGVXb3Jrc3BhY2UgfSBmcm9tIFwiLi93b3Jrc3BhY2VcIjtcclxuaW1wb3J0IHsgUHJvamVjdCwgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuXHJcbi8vIERlZmF1bHQgd29ya3NwYWNlc1xyXG5jb25zdCB0b2RheVdvcmtzcGFjZSA9IG5ldyBXb3Jrc3BhY2UoXCJUb2RheVwiKTtcclxuY29uc3Qgd2Vla1dvcmtzcGFjZSA9IG5ldyBXb3Jrc3BhY2UoXCJXZWVrXCIpO1xyXG53ZWVrV29ya3NwYWNlLnRpdGxlID0gXCJUaGlzIFdlZWsnc1wiO1xyXG5cclxuLy8gRGVmYXVsdCBwcm9qZWN0c1xyXG5jb25zdCBob21ld29ya1Byb2plY3QgPSBuZXcgUHJvamVjdChcIkhvbWV3b3JrXCIsIFwicHVycGxlXCIpO1xyXG5jb25zdCBwZXJzb25hbFByb2plY3QgPSBuZXcgUHJvamVjdChcIlBlcnNvbmFsXCIsIFwiZ3JlZW5cIik7XHJcblxyXG4vLyBTdG9yZSB3b3Jrc3BhY2VzXHJcbmxldCB3b3Jrc3BhY2VzID0gW1xyXG4gICAgdG9kYXlXb3Jrc3BhY2UsXHJcbiAgICB3ZWVrV29ya3NwYWNlLFxyXG4gICAgaG9tZXdvcmtQcm9qZWN0LFxyXG4gICAgcGVyc29uYWxQcm9qZWN0LFxyXG5dO1xyXG5cclxuLy8gQ3VycmVudCB2YXJzXHJcbmxldCBjdXJyZW50V29ya3NwYWNlO1xyXG5cclxuLy8gRGVmYXVsdCB0b2Rvc1xyXG5sZXQgdGFncyA9IFtcclxuICAgIG5ldyBMYWJlbChcImpzXCIsIFwicmVkXCIpLFxyXG4gICAgbmV3IExhYmVsKFwicHJvamVjdFwiLCBcInB1cnBsZVwiKSxcclxuICAgIG5ldyBMYWJlbChcInRvZG9cIiwgXCJvcmFuZ2VcIiksXHJcbl07XHJcbmxldCB0b2RvID0gbmV3IFRvZG8oXHJcbiAgICBcIlByYWN0aWNlIHVzaW5nIEpTIG1vZHVsZVwiLFxyXG4gICAgXCJDcmVhdGUgYSB0b2RvLWxpc3QgYXBwbGljYXRpb24gdG8gYWNoaWV2ZSB0aGlzXCJcclxuKTtcclxudG9kby50YWdzID0gdGFncztcclxudG9kYXlXb3Jrc3BhY2UuYWRkVG9kbyh0b2RvKTtcclxuXHJcbnRhZ3MgPSBbXHJcbiAgICBuZXcgTGFiZWwoXCJjc3NcIiwgXCJncmVlblwiKSxcclxuICAgIG5ldyBMYWJlbChcImh0bWxcIiwgXCJ5ZWxsb3dcIiksXHJcbiAgICBuZXcgTGFiZWwoXCJzdHVkeVwiLCBcImJsdWVcIiksXHJcbl07XHJcbnRvZG8gPSBuZXcgVG9kbyhcclxuICAgIFwiUHJhY3RpY2UgQ1NTIEZsZXhib3hcIixcclxuICAgIFwiVXNlIHByYWN0aWNlIHRvb2xzIHN1Y2ggYXMgZmxleGJveCBmcm9nZ3lcIlxyXG4pO1xyXG50b2RvLnRhZ3MgPSB0YWdzO1xyXG50b2RheVdvcmtzcGFjZS5hZGRUb2RvKHRvZG8pO1xyXG5cclxubGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG5cclxuZnVuY3Rpb24gc2V0Q29udGVudChjb250ZW50LCB3b3Jrc3BhY2UpIHtcclxuICAgIGxldCBuZXdDb250ZW50ID0gY29udGVudDtcclxuICAgIG1haW5Db250ZW50LnJlcGxhY2VXaXRoKG5ld0NvbnRlbnQpO1xyXG4gICAgbWFpbkNvbnRlbnQgPSBuZXdDb250ZW50O1xyXG5cclxuICAgIGN1cnJlbnRXb3Jrc3BhY2UgPSB3b3Jrc3BhY2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XHJcbiAgICBwcm9qQ29udGFpbmVyLmFwcGVuZChjcmVhdGVQcm9qZWN0KHByb2plY3QpKTtcclxufVxyXG5cclxuYWRkUHJvamVjdChob21ld29ya1Byb2plY3QpO1xyXG5hZGRQcm9qZWN0KHBlcnNvbmFsUHJvamVjdCk7XHJcbnNldENvbnRlbnQoY3JlYXRlV29ya3NwYWNlKHRvZGF5V29ya3NwYWNlKSwgdG9kYXlXb3Jrc3BhY2UpO1xyXG5cclxuLypcclxuQnV0dG9uIENsaWNraW5nXHJcbiovXHJcblxyXG4vLyBTaWRlYmFyIGJ1dHRvbiBhY3Rpb25zXHJcbmNvbnN0IGdyb3VwQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWdyb3VwXCIpO1xyXG5ncm91cEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEluZGl2aWR1YWwgYnV0dG9uIGxvZ2ljXHJcbiAgICAgICAgICAgIGlmIChidG4uaWQgPT0gXCJncm91cC10b2RheVwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50KGNyZWF0ZVdvcmtzcGFjZSh0b2RheVdvcmtzcGFjZSksIHRvZGF5V29ya3NwYWNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChidG4uaWQgPT0gXCJncm91cC13ZWVrXCIpIHtcclxuICAgICAgICAgICAgICAgIHNldENvbnRlbnQoY3JlYXRlV29ya3NwYWNlKHdlZWtXb3Jrc3BhY2UpLCB3ZWVrV29ya3NwYWNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChidG4uZGF0YXNldC5wcm9qZWN0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0RGl2O1xyXG4gICAgICAgICAgICAgICAgd29ya3NwYWNlcy5mb3JFYWNoKCh3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHcubmFtZSA9PSBidG4uZGF0YXNldC5wcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXYgPSB3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldENvbnRlbnQoY3JlYXRlV29ya3NwYWNlKHByb2plY3REaXYpLCBwcm9qZWN0RGl2KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gb3RoZXIgYnV0dG9uXHJcbiAgICAgICAgICAgIGdyb3VwQnRucy5mb3JFYWNoKChidG4yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShidG4gPT09IGJ0bjIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuMi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIENyZWF0ZSB0YXNrIGJ1dHRvblxyXG5jb25zdCBuZXdUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5jcmVhdGUtdG9kb1wiKTtcclxuY29uc3QgaDFJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaDEtaW5wdXRcIik7XHJcbmNvbnN0IHBJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucC1pbnB1dFwiKTtcclxubmV3VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSBmYWxzZTtcclxuICAgIGlmIChoMUlucHV0LnZhbHVlLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICBlcnJvcnMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaDEtZXJyb3JcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoMS1lcnJvclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHBJbnB1dC52YWx1ZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgZXJyb3JzID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AtZXJyb3JcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwLWVycm9yXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9ycykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKGgxSW5wdXQudmFsdWUsIHBJbnB1dC52YWx1ZSk7XHJcbiAgICBjdXJyZW50V29ya3NwYWNlLmFkZFRvZG8obmV3VG9kbyk7XHJcblxyXG4gICAgc2V0Q29udGVudChjcmVhdGVXb3Jrc3BhY2UoY3VycmVudFdvcmtzcGFjZSksIGN1cnJlbnRXb3Jrc3BhY2UpO1xyXG5cclxuICAgIC8vIENsb3NlIHBvcHVwXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3AtdXBcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxufSk7XHJcblxyXG4vLyBPcGVuIGxhYmVsIHRleHQgZmllbGQgYnV0dG9uXHJcbmNvbnN0IGFkZExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWctaWNvblwiKTtcclxuYWRkTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YWdcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxufSlcclxuXHJcbi8qXHJcblRleHQgaW5wdXQgYWN0aW9uc1xyXG4qL1xyXG5jb25zb2xlLmxvZyhcInRlc3RcIik7XHJcblxyXG4vLyBDbG9zZSBwb3B1cFxyXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwXCIpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmgxLWlucHV0XCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IHtzZXRDb250ZW50fTsiXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImV4cG9ydHMiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwidGV4dCIsInRhZ3MiLCJ0aGlzIiwiX3RpdGxlIiwiX3RleHQiLCJfdGFncyIsIl9leGlzdHMiLCJuZXdUaXRsZSIsIm5ld1RleHQiLCJuZXdUYWdzIiwiYWRkVGFnIiwibmV3VGFnIiwicHVzaCIsImV4aXN0cyIsIm5ld0V4aXN0cyIsImNvbG9yIiwiX2NvbG9yIiwibmV3Q29sb3IiLCJXb3Jrc3BhY2UiLCJuYW1lIiwiX25hbWUiLCJfdG9kb3MiLCJfdHlwZSIsInRvZG9zIiwiYWRkVG9kbyIsInRvZG8iLCJyZW1vdmVUb2RvIiwiaSIsImxlbmd0aCIsInBvcCIsInR5cGUiLCJjcmVhdGVXb3Jrc3BhY2UiLCJ3b3Jrc3BhY2UiLCJtYWluIiwiY29udGVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImZvckVhY2giLCJ0b2QiLCJsYWJlbENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50TGFiZWxDb250YWluZXIiLCJ0YWciLCJ0ZXh0Q29udGVudCIsImFwcGVuZCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsInBvcHVwIiwiYWRkVG9kb0ZpZWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImNrYngiLCJlIiwiY3VycmVudFRhcmdldCIsImNoZWNrZWQiLCJjaGVja0NhcmQiLCJjbG9zZXN0IiwiY3VyciIsInNldFRpbWVvdXQiLCJzZXRDb250ZW50IiwiUHJvamVjdCIsInN1cGVyIiwidG9kYXlXb3Jrc3BhY2UiLCJ3ZWVrV29ya3NwYWNlIiwiaG9tZXdvcmtQcm9qZWN0IiwicGVyc29uYWxQcm9qZWN0IiwiY3VycmVudFdvcmtzcGFjZSIsIndvcmtzcGFjZXMiLCJtYWluQ29udGVudCIsIm5ld0NvbnRlbnQiLCJyZXBsYWNlV2l0aCIsImFkZFByb2plY3QiLCJwcm9qZWN0IiwicHJvamVjdEVsZW1lbnQiLCJkYXRhc2V0IiwiY3JlYXRlUHJvamVjdCIsImdyb3VwQnRucyIsImJ0biIsImNvbnRhaW5zIiwiaWQiLCJwcm9qZWN0RGl2IiwidyIsImJ0bjIiLCJyZW1vdmUiLCJuZXdUb2RvQnRuIiwiaDFJbnB1dCIsInBJbnB1dCIsImVycm9ycyIsIm5ld1RvZG8iLCJ0b2dnbGUiLCJjb25zb2xlIiwibG9nIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==