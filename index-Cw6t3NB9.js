(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const r=[{key:"pressure",title:"Вас торопят или пугают последствиями?",help:"Например: «срочно», «аккаунт заблокируют», «деньги пропадут», «никому не говорите».",weight:2},{key:"data",title:"Просят сообщить личные или банковские данные?",help:"Пароль, код из SMS, данные карты, паспорт или доступ к аккаунту.",weight:3},{key:"money",title:"Просят перевести деньги или оплатить необычным способом?",help:"На чужую карту, по QR-коду, криптовалютой, подарочными картами или через «безопасный счёт».",weight:3},{key:"link",title:"Вас просят открыть ссылку или вложение?",help:"Особенно если адрес выглядит незнакомо, сокращён или ведёт на страницу входа.",weight:2},{key:"install",title:"Просят установить приложение или дать удалённый доступ?",help:"Например, программу для помощи, проверки устройства или управления экраном.",weight:3},{key:"identity",title:"Отправитель неожиданно выдаёт себя за знакомого или организацию?",help:"Попросите подтвердить обращение другим способом — по известному вам номеру или в официальном приложении.",weight:2}],u=[{value:"yes",label:"Да"},{value:"unsure",label:"Не уверен(а)"},{value:"no",label:"Нет"}];let e={view:"home",step:0,answers:{}};const c=document.querySelector("#app");function d(t){return String(t).replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}function h(){return`<a class="brand" href="#home" data-action="home" aria-label="Стоп-сигнал — на главную">
    <span class="brand-mark" aria-hidden="true"><i></i><i></i></span>
    <span>стоп-сигнал<span class="brand-period">.</span></span>
  </a>`}function v(){return`<header class="topbar">${h()}
    <nav class="topnav" aria-label="Основная навигация">
      <button class="nav-link ${e.view!=="incident"?"is-current":""}" data-action="home" ${e.view!=="incident"?'aria-current="page"':""}>Проверка</button>
      <button class="nav-link ${e.view==="incident"?"is-current":""}" data-action="incident" ${e.view==="incident"?'aria-current="page"':""}>Если уже случилось</button>
    </nav>
  </header>`}function b(){return'<footer class="footer"><span>Пауза — тоже действие.</span><span>Без ввода сообщения · без аккаунта</span></footer>'}function m(){return`<main class="page page-home">
    <section class="home-copy" aria-labelledby="home-title">
      <div class="eyebrow"><span class="eyebrow-dot"></span>ПОМOЩНИК ПО ЦИФРОВОЙ БЕЗОПАСНОСТИ</div>
      <h1 id="home-title">Не уверены<br />в сообщении?<br /><span>Сделайте паузу.</span></h1>
      <p class="lead">Ответьте на несколько вопросов о том, что вас насторожило. Мы покажем возможные сигналы риска и подскажем безопасный следующий шаг.</p>
      <div class="privacy-note"><span class="privacy-icon" aria-hidden="true">↗</span><p><strong>Не вставляйте сюда сообщение.</strong><br />Мы не просим его текст и не отправляем ваши ответы на сервер.</p></div>
      <button class="button button-primary" data-action="start">Начать проверку <span aria-hidden="true">→</span></button>
      <p class="fine-print">Это ориентир, а не подтверждение мошенничества. Проверка занимает около минуты.</p>
    </section>
    <aside class="home-aside" aria-label="Что поможет заметить проверка">
      <div class="aside-top"><span>КРАТКИЙ МАРШРУТ</span><span class="route-line"></span></div>
      <div class="route-item"><span class="route-number">01</span><div><strong>Заметьте сигналы</strong><p>Срочность, просьбы о деньгах, данных или ссылках.</p></div></div>
      <div class="route-item"><span class="route-number">02</span><div><strong>Проверьте спокойно</strong><p>Ответы остаются в этом окне браузера.</p></div></div>
      <div class="route-item"><span class="route-number">03</span><div><strong>Выберите безопасный шаг</strong><p>Свяжитесь с отправителем только через официальный канал.</p></div></div>
      <div class="aside-bottom"><span class="pause-glyph" aria-hidden="true">Ⅱ</span><span>Не отвечайте, пока не проверили.</span></div>
    </aside>
  </main>`}function g(){const t=(e.step+1)/r.length*100;return`<div class="progress-wrap" aria-label="Ход проверки">
    <div class="progress-caption"><span>ПРОВЕРКА</span><span>ШАГ ${String(e.step+1).padStart(2,"0")} / ${String(r.length).padStart(2,"0")}</span></div>
    <div class="progress-track" role="progressbar" aria-label="Шаг проверки" aria-valuemin="1" aria-valuemax="${r.length}" aria-valuenow="${e.step+1}"><span style="width:${t}%"></span></div>
    <div class="progress-ticks">${r.map((s,a)=>`<span class="${a<=e.step?"is-done":""}"></span>`).join("")}</div>
  </div>`}function f(){const t=r[e.step],s=e.answers[t.key];return`<main class="page page-quiz">
    <section class="quiz-main" aria-labelledby="question-title">
      ${g()}
      <div class="question-block" key="${t.key}">
        <div class="step-index">${String(e.step+1).padStart(2,"0")}<span>—</span>${String(r.length).padStart(2,"0")}</div>
        <h1 id="question-title" tabindex="-1">${t.title}</h1>
        <p class="question-help">${t.help}</p>
        <fieldset class="choice-list">
          <legend class="sr-only">Выберите ответ</legend>
          ${u.map(({value:a,label:l})=>`<label class="choice ${s===a?"is-selected":""}">
            <input type="radio" name="${t.key}" value="${a}" ${s===a?"checked":""} />
            <span class="choice-dot" aria-hidden="true"></span><span>${l}</span>
          </label>`).join("")}
        </fieldset>
        <div class="quiz-actions">
          <button class="button button-quiet" data-action="back" ${e.step===0?"disabled":""}>← Назад</button>
          <button class="button button-primary" data-action="next" ${s?"":"disabled"}>${e.step===r.length-1?"Показать результат":"Дальше"}<span aria-hidden="true">→</span></button>
        </div>
        <p class="privacy-inline"><span aria-hidden="true">◉</span> Ответы не покидают ваш браузер.</p>
      </div>
    </section>
    <aside class="quiz-aside"><div class="note-label">НАПОМИНАНИЕ</div><span class="pause-glyph pause-large" aria-hidden="true">Ⅱ</span><p>Организации не должны просить вас сообщать коды подтверждения или устанавливать программы удалённого доступа через неожиданные сообщения.</p><span class="aside-reference">Если сомневаетесь — проверьте через официальный сайт или приложение.</span></aside>
  </main>`}function y(){let t=0;const s=[],a=[];let l=!1;for(const i of r){const o=e.answers[i.key];o==="yes"?(t+=i.weight,s.push(i.title.replace(/\?$/,"")),["data","money","install"].includes(i.key)&&(l=!0)):o==="unsure"&&(t+=1,a.push(i.title.replace(/\?$/,"")))}return{level:l||t>=6?"high":t>=2?"medium":"low",score:t,signals:s,uncertain:a}}function $(){const{level:t,signals:s,uncertain:a}=y(),l={high:{label:"Высокая осторожность",title:"Остановитесь и проверьте другим способом.",summary:"В ваших ответах есть признаки, которые часто требуют особой осторожности. Это не доказывает, что сообщение мошенническое, но действовать по его инструкциям рискованно.",icon:"!",color:"risk-high"},medium:{label:"Есть повод насторожиться",title:"Не спешите отвечать или нажимать.",summary:"Некоторые детали требуют проверки. Не используйте ссылки и номера из этого сообщения, пока не подтвердите обращение независимо.",icon:"~",color:"risk-medium"},low:{label:"Мало отмеченных сигналов",title:"Это не гарантирует, что сообщение безопасно.",summary:"По вашим ответам заметно мало перечисленных сигналов. Проверка не видит само сообщение, поэтому при сомнении подтвердите его через известный официальный канал.",icon:"✓",color:"risk-low"}}[t],n=s.length||a.length?`${s.length?`<ul class="signal-list">${s.map(i=>`<li>${d(i)}</li>`).join("")}</ul>`:""}${a.length?`<div class="uncertain-note"><p>В этих пунктах вы не уверены — проверьте их отдельно:</p><ul class="signal-list">${a.map(i=>`<li>${d(i)}</li>`).join("")}</ul></div>`:""}`:'<p class="no-signals">В выбранных ответах явных сигналов не отмечено. Отсутствие этих признаков не подтверждает подлинность отправителя.</p>';return`<main class="page page-result" aria-labelledby="result-title">
    <section class="result-main">
      <div class="result-kicker"><span class="result-symbol ${l.color}" aria-hidden="true">${l.icon}</span><span>ВАША ОЦЕНКА</span></div>
      <p class="risk-label ${l.color}">${l.label}</p>
      <h1 id="result-title">${l.title}</h1>
      <p class="lead result-lead">${l.summary}</p>
      <div class="result-columns"><section class="result-column"><h2>Что вас насторожило</h2>${n}</section>
      <section class="result-column"><h2>Что сделать сейчас</h2><ol class="action-list"><li>Не отвечайте и не открывайте ссылки из сообщения.</li><li>Найдите официальный сайт или приложение самостоятельно и проверьте обращение там.</li><li>Если затронуты деньги или аккаунт, свяжитесь с банком или платформой по известному вам номеру.</li></ol></section></div>
      <div class="uncertainty-note"><strong>Важно</strong><span>Эта оценка вероятностная. Мы не анализировали отправителя, ссылку или само сообщение.</span></div>
      <div class="result-actions"><button class="button button-primary" data-action="restart">Проверить другое сообщение <span aria-hidden="true">→</span></button><button class="button button-quiet" data-action="incident">Уже перешли или сообщили данные?</button></div>
    </section>
    <aside class="result-aside"><div class="note-label">ПРОСТОЕ ПРАВИЛО</div><span class="pause-glyph pause-large" aria-hidden="true">Ⅱ</span><h2>Проверьте не по тому же каналу.</h2><p>Если якобы пишет банк, позвоните по номеру на карте. Если коллега — спросите через привычный рабочий канал.</p></aside>
  </main>`}const w=[{title:"Если открыли ссылку",text:"Закройте страницу. Не вводите данные и не скачивайте файлы. Если ввели пароль — смените его через официальный сайт или приложение, начиная с самого важного аккаунта."},{title:"Если сообщили код или данные карты",text:"Сразу позвоните в банк по номеру с карты или из официального приложения. Попросите заблокировать карту или проверить операции. Никому не называйте новые коды — даже тому, кто представляется сотрудником банка."},{title:"Если установили приложение или дали доступ",text:"Отключите устройство от сети, если подозреваете удалённое управление. Свяжитесь с банком с другого безопасного устройства и следуйте официальным инструкциям поддержки по проверке телефона или компьютера."},{title:"Если перевели деньги",text:"Немедленно обратитесь в банк или платёжный сервис через официальный канал и попросите зафиксировать операцию. Сохраните переписку, квитанции и контакты; сообщите о случившемся местной полиции или профильной службе."}];function k(){return`<main class="page page-incident" aria-labelledby="incident-title">
    <section class="incident-intro"><div class="eyebrow"><span class="eyebrow-dot eyebrow-alert"></span>ПАМЯТКА БЕЗ ОБВИНЕНИЙ</div><h1 id="incident-title">Если уже<br /><span>случилось.</span></h1><p class="lead">Действуйте по ситуации. Не вините себя: мошеннические сообщения специально создают давление и спешку.</p><button class="button button-quiet back-to-check" data-action="home">← Вернуться к проверке</button></section>
    <section class="incident-list" aria-label="Действия по ситуации">${w.map((t,s)=>`<article class="incident-item"><div class="incident-number">0${s+1}</div><div><h2>${t.title}</h2><p>${t.text}</p></div></article>`).join("")}
      <div class="incident-bottom"><span class="pause-glyph" aria-hidden="true">Ⅱ</span><p>Пользуйтесь только контактами с официального сайта, банковской карты или установленного ранее приложения. Не звоните по номеру из подозрительного сообщения.</p></div>
    </section>
  </main>`}function p({focus:t=!1}={}){const s=e.view==="quiz"?f():e.view==="result"?$():e.view==="incident"?k():m();c.innerHTML=`<div class="shell">${v()}${s}${b()}</div>`,t&&(c.querySelector("#question-title")||c.querySelector("#result-title")||c.querySelector("#incident-title")||c.querySelector("#home-title"))?.focus({preventScroll:!0})}c.addEventListener("change",t=>{t.target.matches('input[type="radio"]')&&(e.answers[r[e.step].key]=t.target.value,p(),c.querySelector('input[type="radio"]:checked')?.focus({preventScroll:!0}))});c.addEventListener("click",t=>{const s=t.target.closest("[data-action]");if(!s||s.disabled)return;const a=s.dataset.action;if(a==="home")e.view="home";else if(a==="incident")e.view="incident";else if(a==="start")e={view:"quiz",step:0,answers:{}};else if(a==="back")e.step=Math.max(0,e.step-1);else if(a==="next"){if(!e.answers[r[e.step].key])return;e.step<r.length-1?e.step+=1:e.view="result"}else a==="restart"&&(e={view:"quiz",step:0,answers:{}});p({focus:["next","back","start","restart"].includes(a)})});p();
