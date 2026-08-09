const journeySteps = [
  {
    number: "01",
    title: "Встречаемся",
    text: "Знакомимся, пьём чай, говорим о теме встречи и договариваемся о бережных правилах группы.",
  },
  {
    number: "02",
    title: "Задаём направление",
    text: "Формулируем вопрос, намерение или просто оставляем пространство открытому исследованию.",
  },
  {
    number: "03",
    title: "Следуем за ритмом",
    text: "Устраиваемся удобно и направляем внимание внутрь под повторяющийся звук бубна.",
  },
  {
    number: "04",
    title: "Возвращаемся",
    text: "Даём телу время отдохнуть, замечаем дыхание и снова чувствуем обычное пространство.",
  },
  {
    number: "05",
    title: "Интегрируем",
    text: "Можно поделиться пережитым, записать его или оставить при себе. Толкование всегда принадлежит участнику.",
  },
];

const questions = [
  {
    question: "Нужно ли верить в духов или эзотерику?",
    answer:
      "Нет. Опыт можно понимать духовно, психологически, символически или просто наблюдать происходящее без готового объяснения.",
  },
  {
    question: "Что, если я ничего не увижу?",
    answer:
      "Это нормально. Переживание не обязательно бывает зрительным: можно замечать ощущения, чувства, мысли, тишину — или просто отдыхать.",
  },
  {
    question: "Я потеряю контроль над собой?",
    answer:
      "Нет. Вы слышите происходящее и в любой момент можете открыть глаза, изменить положение тела, обратиться к ведущему или остановиться.",
  },
  {
    question: "Используются ли психоактивные вещества?",
    answer:
      "Нет. Практика строится на ритме, внимании, намерении и положении тела.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Шамаш — к началу страницы">
          Шамаш
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#practice">О практике</a>
          <a href="#journey">Как проходит</a>
          <a href="#guide">О ведущем</a>
          <a href="#safety">Безопасность</a>
        </nav>
        <a className="button button-small" href="#meeting">
          Ближайшая встреча
        </a>
      </header>

      <section className="hero section-dark" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Групповая практика изменённого внимания</p>
          <h1>Внутреннее путешествие под ритм</h1>
          <p className="hero-lead">
            Трансовое погружение, в котором повторяющийся звук, внимание к телу
            и личное намерение помогают отойти от привычного хода мыслей и
            встретиться со своим внутренним опытом.
          </p>
          <div className="hero-actions">
            <a className="button" href="#meeting">
              Узнать о ближайшей встрече
            </a>
            <a className="text-link" href="#practice">
              Сначала понять, что это
            </a>
          </div>
          <ul className="hero-facts" aria-label="Кратко о формате">
            <li>Раз в неделю</li>
            <li>До 20 человек</li>
            <li>Без психоактивных веществ</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="signal signal-one" />
          <div className="signal signal-two" />
          <div className="signal signal-three" />
          <div className="rhythm-orbit orbit-one" />
          <div className="rhythm-orbit orbit-two" />
          <div className="rhythm-orbit orbit-three" />
          <div className="rhythm-core" />
          <p className="visual-caption">ритм · внимание · намерение</p>
        </div>
      </section>

      <section className="intro section-light">
        <p className="section-index">01 / Зачем</p>
        <div className="intro-grid">
          <h2>Иногда привычного способа думать недостаточно</h2>
          <div className="intro-copy">
            <p>
              Мы можем долго размышлять над важным вопросом и всё равно ходить
              по кругу знакомых объяснений. Погружённое внимание открывает
              другой способ исследования — через образы, ощущения, ассоциации и
              внутренний отклик.
            </p>
            <p className="pull-quote">
              Возможно, ответ уже существует внутри вас — но пока не в форме
              слов.
            </p>
          </div>
        </div>
      </section>

      <section className="practice section-paper" id="practice">
        <div className="practice-visual visual-placeholder">
          <div className="placeholder-orbit" aria-hidden="true" />
          <p>Будущая фотография</p>
          <span>руки · бубен · фактура · живой свет</span>
        </div>
        <div className="practice-copy">
          <p className="section-index">02 / Что происходит</p>
          <h2>Ритм создаёт условия. Направление задаёте вы.</h2>
          <p>
            Повторяющийся звук помогает удерживать внимание и постепенно
            смягчает привычный внутренний комментарий. Участник остаётся в
            сознании, слышит происходящее и сохраняет свободу остановиться.
          </p>
          <div className="two-lists">
            <div>
              <h3>Может появиться</h3>
              <ul>
                <li>образ или воспоминание</li>
                <li>телесное ощущение</li>
                <li>чувство или ассоциация</li>
                <li>тишина и отсутствие ярких событий</li>
              </ul>
            </div>
            <div>
              <h3>Здесь не будет</h3>
              <ul>
                <li>готового толкования</li>
                <li>обещания исцеления</li>
                <li>требования во что-то верить</li>
                <li>давления делиться личным</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="intent section-light">
        <p className="section-index">03 / С чем прийти</p>
        <div className="section-heading-row">
          <h2>С вопросом, любопытством или без готового запроса</h2>
          <p>
            Опыт не обязан быть ярким или давать немедленный ответ. Встреча
            создаёт пространство для исследования — результат у каждого свой.
          </p>
        </div>
        <div className="intent-grid">
          <article>
            <span>01</span>
            <h3>Увидеть иначе</h3>
            <p>Посмотреть на важную ситуацию за пределами привычного сценария.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Прислушаться</h3>
            <p>Замедлиться во время перемен, выбора или внутренней неопределённости.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Исследовать</h3>
            <p>Познакомиться с символами, образами и телесным способом знать.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Попробовать</h3>
            <p>Прийти из интереса, без опыта и без ожидания особого результата.</p>
          </article>
        </div>
      </section>

      <section className="journey section-dark" id="journey">
        <p className="section-index">04 / Встреча</p>
        <div className="section-heading-row">
          <h2>Сначала встречаемся. Затем погружаемся. После — возвращаемся.</h2>
          <p>
            Последовательность заранее понятна. Никакой внезапности и
            необходимости преодолевать себя.
          </p>
        </div>
        <ol className="journey-list">
          {journeySteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="meaning section-paper">
        <div className="meaning-copy">
          <p className="section-index">05 / Как это понимать</p>
          <h2>Не обязательно выбирать правильное объяснение</h2>
          <p>
            Один человек назовёт пережитое духовным путешествием. Другой —
            работой внимания, памяти и воображения. Третий увидит в нём язык
            символов и тела. Ни одна версия не объявляется обязательной.
          </p>
          <blockquote>
            Ваше переживание принадлежит вам. Вы сами решаете, что оно значит.
          </blockquote>
        </div>
        <div className="origin-card">
          <p className="origin-label">Происхождение метода</p>
          <h3>Современная форма с древними корнями</h3>
          <p>
            В основе встречи — элементы практик, связанных с шаманскими
            традициями: намерение, ритмический звук, особое внимание к телу,
            путешествие и возвращение.
          </p>
          <p>
            На сайте мы отдельно расскажем, откуда пришёл метод, что именно
            сохранилось и как традиционная форма переводится в современный
            бережный формат.
          </p>
        </div>
      </section>

      <section className="guide section-light" id="guide">
        <div className="guide-portrait visual-placeholder portrait-placeholder">
          <p>Будущий портрет ведущего</p>
          <span>естественный свет · прямой взгляд · без образа «гуру»</span>
        </div>
        <div className="guide-copy">
          <p className="section-index">06 / Ведущий</p>
          <h2>Кто удерживает пространство встречи</h2>
          <p className="guide-intro">
            Здесь появятся имя, личная история, обучение методу и опыт ведения
            групп.
          </p>
          <p>
            Роль ведущего — не расшифровывать переживание за участника, а ясно
            провести последовательность встречи, следить за состоянием группы и
            помочь людям спокойно вернуться.
          </p>
          <dl className="guide-facts">
            <div>
              <dt>Обучение</dt>
              <dd>[школа, учитель, годы]</dd>
            </div>
            <div>
              <dt>Опыт</dt>
              <dd>[личная практика и группы]</dd>
            </div>
            <div>
              <dt>Город</dt>
              <dd>[место проведения]</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="safety section-dark" id="safety">
        <p className="section-index">07 / Безопасность</p>
        <div className="section-heading-row">
          <h2>Вы сохраняете контроль на всём протяжении встречи</h2>
          <p>
            Это не терапия и не медицинская услуга. Практика не заменяет врача
            или психотерапевта и не обещает определённого результата.
          </p>
        </div>
        <div className="safety-grid">
          <p>Можно открыть глаза, изменить положение или остановиться.</p>
          <p>Можно не отвечать на вопросы и не делиться переживанием.</p>
          <p>Прикосновения возможны только после отдельного согласия.</p>
          <p>Здесь не ставят диагнозов и не используют мистические пугалки.</p>
        </div>
        <details className="safety-details">
          <summary>Когда групповое погружение может не подойти</summary>
          <div>
            <p>
              Не следует участвовать во время острого психического кризиса,
              психотического или маниакального эпизода, тяжёлой дезориентации, а
              также в состоянии опьянения.
            </p>
            <p>
              При серьёзных состояниях здоровья перед записью необходимы
              консультация лечащего специалиста и предварительный разговор с
              ведущим. Окончательный список ограничений ещё будет уточнён.
            </p>
          </div>
        </details>
      </section>

      <section className="meeting section-light" id="meeting">
        <div className="meeting-card">
          <div>
            <p className="section-index">08 / Ближайшая встреча</p>
            <h2>Можно сначала просто узнать подробности</h2>
            <p>
              В Telegram-боте будут дата, место, продолжительность, свободные
              места и короткие вопросы о безопасности.
            </p>
          </div>
          <dl className="meeting-facts">
            <div>
              <dt>Когда</dt>
              <dd>Раз в неделю · дата уточняется</dd>
            </div>
            <div>
              <dt>Группа</dt>
              <dd>До 20 человек</dd>
            </div>
            <div>
              <dt>Участие</dt>
              <dd>Оргвзнос + добровольный вклад по сердцу</dd>
            </div>
          </dl>
          <div className="meeting-action" id="telegram">
            <button className="button button-disabled" type="button" disabled>
              Telegram-бот подключим сюда
            </button>
            <p>Онлайн-оплаты на сайте пока нет.</p>
          </div>
        </div>
      </section>

      <section className="faq section-paper">
        <p className="section-index">09 / Вопросы</p>
        <div className="faq-grid">
          <h2>Перед первой встречей</h2>
          <div>
            {questions.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">
          Шамаш
        </a>
        <p>Пространство внутреннего путешествия под ритм.</p>
        <p>Первая версия каркаса · тексты и фотографии уточняются</p>
      </footer>
    </main>
  );
}
