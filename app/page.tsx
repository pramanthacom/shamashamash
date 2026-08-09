import { CookieNotice } from "./components/CookieNotice";
import { ScheduleButton } from "./components/ScheduleButton";

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
        <a className="brand-lockup" href="#top" aria-label="Шамаш — к началу страницы">
          <span className="brand-symbol" aria-hidden="true">
            <img src="/shamash-symbol.png" alt="" />
          </span>
          <span className="wordmark">Шамаш</span>
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#practice">О практике</a>
          <a href="#roots">Основа метода</a>
          <a href="#guide">О ведущем</a>
          <a href="#safety">Безопасность</a>
        </nav>
        <ScheduleButton compact label="Ближайшая встреча" />
      </header>

      <section className="hero section-dark" id="top">
        <div className="hero-art" aria-hidden="true">
          <img
            src="/hero-background.png"
            alt=""
            fetchPriority="high"
          />
        </div>

        <div className="hero-content">
          <p className="eyebrow">Групповая практика экстатического транса</p>
          <h1>Внутреннее путешествие под ритм бубна</h1>
          <p className="hero-lead">
            Трансовое погружение, в котором ритм бубна, особые позы тела и
            личное намерение помогают выйти из привычного хода мыслей,
            погрузиться во внутренний мир и открыть в себе больше, чем доступно
            в обычном состоянии сознания.
          </p>
          <div className="hero-actions">
            <ScheduleButton label="Ближайшие встречи" />
            <a className="text-link" href="#practice">
              Зачем мне это
            </a>
          </div>
          <ul className="hero-facts" aria-label="Кратко о формате">
            <li>Раз в неделю</li>
            <li>Длительность 3 часа</li>
            <li>До 20 человек</li>
            <li>Без психоактивных веществ</li>
          </ul>
        </div>
      </section>

      <section className="purpose section-light" id="practice">
        <p className="section-index">01 / Зачем это</p>
        <div className="purpose-intro">
          <h2>Для вопросов, на которые трудно ответить только размышлениями</h2>
          <p>
            На наши решения влияют не только доводы, но и желания, страхи, прошлый опыт,
            телесные реакции и внутренние конфликты. В обычном состоянии не всё это удаётся
            заметить. Трансовое погружение помогает увидеть собственную ситуацию шире — через
            образы, чувства и неожиданные связи.
          </p>
        </div>

        <p className="purpose-label">С чем сюда приходят</p>
        <div className="purpose-grid">
          <article>
            <span>Важное решение</span>
            <h3>Чего я действительно хочу?</h3>
            <p>Остаться или уйти? Согласиться или отказаться? Как отличить своё желание от страха, привычки и чужих ожиданий?</p>
          </article>
          <article>
            <span>Повторяющаяся ситуация</span>
            <h3>Почему я снова оказываюсь здесь?</h3>
            <p>Что удерживает знакомый сценарий в отношениях, работе или семье — и чего я пока не замечаю в собственной реакции?</p>
          </article>
          <article>
            <span>Внутренний конфликт</span>
            <h3>Почему одна часть меня хочет, а другая останавливает?</h3>
            <p>Что стоит за сомнением, сопротивлением или невозможностью сделать шаг, который разумом кажется правильным?</p>
          </article>
          <article>
            <span>Перемены и поиск направления</span>
            <h3>На что мне сейчас опереться?</h3>
            <p>Куда двигаться дальше, когда прежний этап закончился, готового ответа нет, а новое направление ещё не стало ясным?</p>
          </article>
        </div>

        <div className="purpose-outcome">
          <div>
            <p className="method-kicker">Возможный результат</p>
            <h3>Больше ясности для собственного решения</h3>
          </div>
          <div>
            <p>
              Это может быть новый взгляд на ситуацию, замеченное чувство или потребность,
              образ внутреннего конфликта, более точный вопрос, ясное «да» или «нет» — либо
              конкретный следующий шаг.
            </p>
            <p className="purpose-note">
              Практика не решает за человека и не гарантирует ответ. Её задача — сделать
              доступным то, что уже влияет на выбор, но пока не было замечено.
            </p>
          </div>
        </div>
      </section>

      <section className="roots section-paper" id="roots">
        <p className="section-index">02 / Происхождение метода</p>
        <div className="roots-heading">
          <h2>Древняя основа. Современный метод.</h2>
          <p>
            Это не авторская медитация под бубен. Практика опирается на метод ритуальных поз
            и экстатического транса Фелиситас Гудман, в котором намерение, положение тела и
            ритмический звук рассматриваются как части единой системы.
          </p>
        </div>

        <div className="roots-grid">
          <article>
            <span>Древние изображения</span>
            <h3>Позы из разных культур</h3>
            <p>
              Положения тела восстанавливались по древним фигуркам, наскальным изображениям и
              ритуальному искусству народов из разных частей мира.
            </p>
          </article>
          <article>
            <span>С 1960-х годов</span>
            <h3>Работа Фелиситас Гудман</h3>
            <p>
              Антрополог исследовала религиозный транс, ритмическое воздействие и роль позы.
              Созданный ею корпус включает около 80 ритуальных положений тела.
            </p>
          </article>
          <article>
            <span>Метод жив сегодня</span>
            <h3>Институты и обучение</h3>
            <p>
              Практику продолжают изучать и преподавать Cuyamungue Institute в США,
              Felicitas-Goodman-Institut в Германии и ИТОП в России.
            </p>
          </article>
        </div>

        <div className="trust-formula">
          <p className="method-kicker">Основа практики</p>
          <p>
            Намерение задаёт вопрос. Ритуальная поза подключает тело. Ритм бубна
            поддерживает трансовое состояние. Ни один из этих элементов не сводится к декорации.
          </p>
        </div>

        <div className="source-links" aria-label="Источники о методе">
          <a href="https://www.cuyamungueinstitute.com/" target="_blank" rel="noreferrer">Cuyamungue Institute</a>
          <a href="https://felicitas-goodman-institut.de/ritual-body-postures/" target="_blank" rel="noreferrer">Felicitas Goodman Institut</a>
          <a href="https://journals.sagepub.com/doi/10.1177/0022167886263006" target="_blank" rel="noreferrer">Публикация Ф. Гудман, 1986</a>
          <a href="https://itop.moscow/fakultety/shamanskaya-terapiya/" target="_blank" rel="noreferrer">ИТОП: описание метода</a>
        </div>
      </section>

      <section className="meaning section-paper">
        <div className="meaning-copy">
          <p className="section-index">03 / Как это понимать</p>
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
          <p className="origin-label">После погружения</p>
          <h3>Образ не требует чужой расшифровки</h3>
          <p>
            Один и тот же символ у разных людей означает разное. Его смысл
            возникает во встрече образа, вашего вопроса, личной истории и
            телесного отклика — готового универсального словаря здесь нет.
          </p>
          <p>
            Ведущий может помочь вопросами и фиксацией опыта, но не сообщает,
            «что вам показали». Иногда понимание приходит сразу, иногда позже,
            а иногда переживание остаётся без объяснения — это не считается
            неудачей.
          </p>
        </div>
      </section>

      <section className="guide section-light" id="guide">
        <div className="guide-portrait visual-placeholder portrait-placeholder">
          <p>Будущий портрет ведущего</p>
          <span>естественный свет · прямой взгляд · без образа «гуру»</span>
        </div>
        <div className="guide-copy">
          <p className="section-index">04 / Ведущий</p>
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
        <p className="section-index">05 / Безопасность</p>
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
            <p className="section-index">06 / Ближайшая встреча</p>
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
            <ScheduleButton label="Показать ближайшие встречи" />
            <p>Запись и вопросы перенесём в Telegram. Онлайн-оплаты на сайте пока нет.</p>
          </div>
        </div>
      </section>

      <section className="faq section-paper">
        <p className="section-index">07 / Вопросы</p>
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

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand-lockup" href="#top">
              <span className="brand-symbol" aria-hidden="true"><img src="/shamash-symbol.png" alt="" loading="lazy" /></span>
              <span className="wordmark">Шамаш</span>
            </a>
            <p>Пространство внутреннего путешествия под ритм.</p>
            <p className="footer-note">Без готовых толкований. С вниманием к человеку и его границам.</p>
          </div>

          <div className="footer-column">
            <p className="footer-label">Исследовать</p>
            <a href="#practice">О практике</a>
            <a href="#roots">Основа метода</a>
            <a href="#guide">О ведущем</a>
            <a href="#safety">Безопасность</a>
          </div>

          <div className="footer-column">
            <p className="footer-label">Быть на связи</p>
            <span>Telegram-сообщество — скоро</span>
            <span>Контакт для вопросов — скоро</span>
            <ScheduleButton compact label="Ближайшие встречи" />
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Шамаш</p>
          <div>
            <a href="/privacy">Конфиденциальность и cookies</a>
            <a href="/admin">Управление расписанием</a>
          </div>
        </div>
      </footer>
      <CookieNotice />
    </main>
  );
}
