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

      <section className="value-screen section-dark" id="why">
        <p className="section-index">01 / Зачем это</p>
        <div className="value-heading">
          <h2>Увидеть больше, чем позволяет привычный ход мыслей</h2>
          <div className="value-intro">
            <p>
              Мы не всегда понимаем ситуацию только потому, что долго о ней думаем.
              Часть нашего опыта проявляется иначе — через ощущения, чувства, образы,
              воспоминания и связи, которые не возникают по прямой логике.
            </p>
            <p>
              Трансовое погружение создаёт условия, в которых этот внутренний материал
              может стать заметнее и показать знакомую жизнь с непривычной стороны.
            </p>
          </div>
        </div>

        <div className="value-paths" aria-label="Что может дать погружение">
          <article>
            <span>01</span>
            <h3>Заметить неочевидное</h3>
            <p>
              Увидеть чувство, потребность, внутреннее противоречие или связь,
              которые прежде оставались за пределами внимания.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Сменить точку зрения</h3>
            <p>
              Выйти из привычного сценария размышлений и обнаружить другой вопрос,
              новое отношение к ситуации или возможное направление движения.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Позволить опыту продолжиться</h3>
            <p>
              Не каждое переживание сразу складывается в объяснение. Иногда его смысл
              проявляется позже — в выборе, разговоре, решении или изменившемся ощущении себя.
            </p>
          </article>
        </div>

        <div className="value-statement">
          <p>Ценность не в необычном переживании самом по себе.</p>
          <blockquote>
            Она в возможности по-другому увидеть свою жизнь — и действовать в ней чуть свободнее.
          </blockquote>
          <small>
            Это исследовательская практика, а не способ получить гарантированный ответ или результат.
          </small>
        </div>
      </section>

      <section className="arrival-screen section-paper" id="come-with">
        <p className="section-index">02 / С чем можно прийти</p>
        <div className="arrival-heading">
          <h2>С тем, что сейчас живо для вас. Или без готового запроса.</h2>
          <div>
            <p>
              Не обязательно иметь большую проблему, уметь точно сформулировать намерение
              или заранее знать, что вы хотите получить. Поводом может быть конкретный вопрос,
              смутное ощущение, интерес к внутреннему миру — или простое любопытство.
            </p>
            <p className="arrival-emphasis">
              Сюда можно прийти не только что-то решать. Можно исследовать, слушать
              и знакомиться с новым способом переживания себя.
            </p>
          </div>
        </div>

        <div className="arrival-grid">
          <article>
            <span>Вопрос или выбор</span>
            <h3>«Мне важно понять, куда двигаться дальше»</h3>
            <p>Работа, отношения, творчество, решение или новый этап жизни.</p>
          </article>
          <article>
            <span>Повторяющийся сюжет</span>
            <h3>«Я снова оказываюсь в похожей ситуации»</h3>
            <p>Когда привычное объяснение уже есть, но ничего по-настоящему не меняется.</p>
          </article>
          <article>
            <span>Состояние</span>
            <h3>«Со мной что-то происходит, но я пока не могу это назвать»</h3>
            <p>Неопределённость, внутреннее напряжение, потеря направления или ощущение перемен.</p>
          </article>
          <article>
            <span>Интерес</span>
            <h3>«Мне любопытно, что откроется в этом опыте»</h3>
            <p>Знакомство с образным миром, трансовыми состояниями или духовным измерением опыта.</p>
          </article>
          <article className="arrival-open">
            <span>Без запроса</span>
            <h3>«Я ничего специально не ищу»</h3>
            <p>
              Можно прийти без темы и без ожиданий. Перед погружением достаточно выбрать
              простое открытое намерение: заметить то, что сейчас важно именно для вас.
            </p>
          </article>
        </div>

        <div className="arrival-boundary">
          <p>Ваш запрос остаётся вашим.</p>
          <p>
            Его не нужно доказывать, объяснять группе или подгонять под «правильную» тему.
          </p>
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
          <p className="section-index">03 / Как это понимать</p>
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
