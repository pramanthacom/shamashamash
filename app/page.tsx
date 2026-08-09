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
          <picture>
            <source media="(max-width: 640px)" srcSet="/hero-background-mobile.png" />
            <img
              src="/hero-background.png"
              alt=""
              fetchPriority="high"
            />
          </picture>
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

      <section className="value-screen section-paper" id="practice">
        <div className="value-shell">
          <div className="value-head">
            <div>
              <p className="section-index">01 / Зачем это</p>
              <h2>Искать ответы, дать место чувствам, увидеть жизнь иначе</h2>
            </div>
            <p className="value-lead">
              Ритм, поза тела и направленное внимание помогают войти в изменённое
              состояние сознания и заметить то, что не возникает в обычном ходе размышлений.
            </p>
          </div>

          <ul className="value-list" aria-label="Что может дать трансовое путешествие">
            <li>Расслабиться, отдохнуть и восстановить силы</li>
            <li>Дать место накопившимся чувствам и напряжению</li>
            <li>Посмотреть на важный вопрос с непривычной стороны</li>
            <li>Найти опору в переменах и яснее почувствовать направление</li>
            <li>Соприкоснуться с образами и неосознанными сторонами своего опыта</li>
            <li>Ощутить больше целостности, энергии и связи с собой и жизнью</li>
          </ul>

          <div className="value-return">
            <p>
              Вернуться в повседневную жизнь с новым ощущением, вопросом
              или возможным следующим шагом.
            </p>
            <small>
              Опыт может быть ярким или тихим, понятным сразу или раскрыться позже.
              Практика не гарантирует определённого результата.
            </small>
          </div>
        </div>
      </section>

      <section className="arrival-screen section-light" id="come-with">
        <div className="arrival-shell">
          <div className="arrival-head">
            <div>
              <p className="section-index">02 / С чем можно прийти</p>
              <h2>С тем, что сейчас живо для вас. Или без готового запроса.</h2>
            </div>
            <p>
              Не обязательно иметь большую проблему или заранее знать, что вы хотите получить.
              Поводом может быть вопрос, смутное ощущение, интерес к внутреннему миру
              или простое любопытство.
            </p>
          </div>

          <div className="arrival-grid">
            <article>
              <span>01</span>
              <h3>Важный вопрос или выбор</h3>
              <p>Работа, отношения, творчество или новый этап жизни.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Повторяющийся сюжет</h3>
              <p>Когда объяснение уже есть, но ничего по-настоящему не меняется.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Неясное состояние</h3>
              <p>Напряжение, потеря направления или ощущение перемен.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Интерес и любопытство</h3>
              <p>Знакомство с образным миром и трансовыми состояниями.</p>
            </article>
            <article>
              <span>05</span>
              <h3>Без готового запроса</h3>
              <p>Можно просто прийти, слушать и знакомиться с практикой.</p>
            </article>
          </div>

          <div className="arrival-note">
            <strong>Ваш запрос остаётся вашим.</strong>
            <span>Его не нужно объяснять группе или подгонять под «правильную» тему.</span>
          </div>
        </div>
      </section>

      <section className="roots section-paper" id="roots">
        <p className="section-index">03 / Происхождение метода</p>
        <div className="roots-heading">
          <h2>Способ искать ответы, которому тысячи лет</h2>
          <p>
            Задолго до психотерапии и медитационных приложений люди входили в особые
            состояния сознания с помощью ритма, ритуальных положений тела и намерения.
            В шаманских культурах так искали направление, обращались за поддержкой,
            проходили жизненные переходы и восстанавливали связь с предками, природой и миром.
          </p>
        </div>

        <figure className="roots-visual">
          <img
            src="/ritual-posture.jpg"
            alt="Ритуальная работа с телом и вниманием"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>Ритм · поза · намерение</span>
            <strong>Тело помнит путь, который разум мог забыть.</strong>
          </figcaption>
        </figure>

        <div className="roots-grid">
          <article>
            <span>На протяжении тысячелетий</span>
            <h3>За ответом и направлением</h3>
            <p>
              Культуры по всему миру использовали позу, ритмический звук и сосредоточенное
              намерение, чтобы получать озарения, искать руководство и соприкасаться с тайной жизни.
            </p>
          </article>
          <article>
            <span>Древние артефакты</span>
            <h3>Поза как часть ритуала</h3>
            <p>
              Фелиситас Гудман находила повторяющиеся положения тела в фигурках, наскальном
              искусстве и ритуальных изображениях разных народов. Возраст некоторых источников
              превышает 30&nbsp;000 лет.
            </p>
          </article>
          <article>
            <span>Современная форма</span>
            <h3>Исследование и передача метода</h3>
            <p>
              С 1960-х годов Гудман исследовала экстатический транс и собрала корпус
              ритуальных поз. Сегодня метод продолжают преподавать институты в США,
              Германии и России.
            </p>
          </article>
        </div>

        <div className="trust-formula">
          <p className="method-kicker">Наша позиция</p>
          <p>
            Шаманский по происхождению. Современный по форме. Открытый по способу понимания.
          </p>
        </div>

        <div className="source-links" aria-label="Источники о методе">
          <a href="https://www.cuyamungueinstitute.com/ritual-body-posture-sessions/" target="_blank" rel="noreferrer">Cuyamungue Institute</a>
          <a href="https://felicitas-goodman-institut.de/ritual-body-postures/" target="_blank" rel="noreferrer">Felicitas Goodman Institut</a>
          <a href="https://journals.sagepub.com/doi/10.1177/0022167886263006" target="_blank" rel="noreferrer">Публикация Ф. Гудман, 1986</a>
          <a href="https://itop.moscow/fakultety/shamanskaya-terapiya/" target="_blank" rel="noreferrer">ИТОП: описание метода</a>
        </div>
      </section>

      <section className="meaning section-paper">
        <div className="meaning-copy">
          <p className="section-index">04 / Как это понимать</p>
          <h2>Один опыт — несколько языков</h2>
          <p>
            В шаманском языке это путешествие в иную реальность, встреча с образами,
            силами и помощниками. В психологическом — работа бессознательного,
            памяти, воображения и телесного опыта.
          </p>
          <div className="meaning-lenses">
            <p><span>Духовный взгляд</span>В переживании можно видеть контакт с миром духов, предками и чем-то большим, чем отдельное «я».</p>
            <p><span>Психологический взгляд</span>Можно воспринимать его как язык образов, через который проявляются чувства, конфликты и скрытые связи.</p>
            <p><span>Открытая позиция</span>Не обязательно выбирать одну версию. Значение опыта определяет сам участник.</p>
          </div>
        </div>
        <figure className="meaning-visual">
          <img
            src="/inner-threshold.jpg"
            alt="Переход из внешнего пространства во внутреннее"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Переживание принадлежит вам. Толкование — тоже.</figcaption>
        </figure>
      </section>

      <section className="guide section-light" id="guide">
        <figure className="guide-portrait">
          <img
            src="/guide-portrait.jpg"
            alt="Ведущий практики Шамаш"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Фото: aseev.amp</figcaption>
        </figure>
        <div className="guide-copy">
          <p className="section-index">05 / Ведущий</p>
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
        <p className="section-index">06 / Безопасность</p>
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
            <p className="section-index">07 / Ближайшая встреча</p>
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
        <p className="section-index">08 / Вопросы</p>
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
