import { CookieNotice } from "./components/CookieNotice";
import { BackToTop } from "./components/BackToTop";
import { MobileMenu } from "./components/MobileMenu";
import { ScheduleButton } from "./components/ScheduleButton";
import { ScrollReveal } from "./components/ScrollReveal";

const questions = [
  {
    question: "Нужно ли верить в духов или эзотерику?",
    answer:
      "Нет. Опыт можно понимать духовно, психологически, символически или просто наблюдать происходящее без готового объяснения.",
  },
  {
    question: "Нужно ли что-то знать о трансе или шаманских практиках до встречи?",
    answer:
      "Нет. Для участия не нужны специальные знания или опыт. Перед началом ведущий расскажет, как проходит практика, объяснит ключевые моменты и ответит на вопросы. Если после этого у вас останутся сомнения, вы сможете принять решение не участвовать.",
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
  {
    question: "Кому лучше не участвовать в групповой практике?",
    answer:
      "Лучше воздержаться от посещения практики в состоянии алкогольного или наркотического опьянения, острого психического кризиса, психотического или маниакального эпизода либо выраженной дезориентации. При психиатрическом диагнозе, эпилепсии, судорожных состояниях, неврологическом заболевании, во время психотерапии или при сомнениях в своём состоянии сначала обсудите участие с лечащим специалистом и ведущим. При беременности также стоит предварительно обсудить участие с врачом и ведущим. О физических ограничениях лучше сообщить заранее — для некоторых поз можно подобрать более комфортный вариант.",
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
          <a href="#contacts">Контакты</a>
        </nav>
        <MobileMenu />
        <ScheduleButton compact label="Ближайшие встречи" />
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
          <span className="hero-star" aria-hidden="true" />
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
            <li>Москва</li>
            <li>Около 3 часов</li>
            <li>До 15 человек</li>
            <li>Без психоактивных веществ</li>
          </ul>
        </div>
      </section>

      <section className="value-screen section-paper" id="practice" data-reveal>
        <div className="value-shell">
          <div className="value-head">
            <div>
              <p className="section-index">01 / Зачем это</p>
              <h2>Искать ответы, дать место чувствам, увидеть жизнь иначе</h2>
            </div>
            <p className="value-lead">
              Опыт у каждого будет своим: ярким или тихим, понятным сразу или
              раскрывающимся позже. Здесь нет «правильного» путешествия — важным
              может оказаться образ, ощущение, вопрос или то, как вы почувствуете
              себя после встречи.
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
            <span>Возможный результат</span>
            <p>
              Вернуться в повседневную жизнь с новым ощущением, ответом
              или возможным следующим шагом.
            </p>
          </div>
        </div>
      </section>

      <section className="arrival-screen section-light" id="come-with" data-reveal>
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

        </div>
      </section>

      <section className="roots section-paper" id="roots" data-reveal>
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
            src="/method-origin.png"
            alt="Человек с закрытыми глазами в позе для трансовой практики"
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
              С 1960-х годов Фелиситас Гудман исследовала воздействие ритма и
              ритуальных поз на изменённые состояния сознания и собрала корпус поз,
              ставший основой современной формы практики.
            </p>
          </article>
        </div>

        <div className="roots-research-context">
          <div>
            <span>Современный исследовательский контекст</span>
            <h3>Экстатический транс изучают и преподают сегодня</h3>
          </div>
          <div>
            <p>
              Это уже не только язык древней шаманской традиции. Современная форма
              метода описывается, исследуется и преподаётся профильными институтами
              в США и Германии; в России она входит в обучающие программы ИТОП.
            </p>
            <p className="roots-lab-note">
              <strong>Лабораторное наблюдение · 1983</strong>
              У четырёх добровольцев во время 15-минутного погружения уровни гормонов
              стресса после начального подъёма снижались, а уровень бета-эндорфина
              повышался. Это небольшой ранний опыт, не доказательство лечебного эффекта.
            </p>
          </div>
        </div>

      </section>

      <section className="meaning section-light" data-reveal>
        <div className="meaning-copy">
          <p className="section-index">04 / Один опыт — разные слои</p>
          <h2>Не нужно заранее выбирать, во что верить</h2>
          <div className="meaning-lenses">
            <p><span>Телесный</span>Ритм, поза и внимание меняют привычный способ воспринимать себя и происходящее.</p>
            <p><span>Психологический</span>Образы могут быть языком памяти, ассоциаций и процессов, которые обычно остаются вне внимания.</p>
            <p><span>Символический</span>Переживание может раскрываться как личная история, метафора или новый взгляд на жизненную ситуацию.</p>
            <p><span>Духовный</span>Если вам близок этот язык, опыт можно воспринимать как путешествие, встречу с предками, силами или духами-помощниками.</p>
          </div>
        </div>
        <figure className="meaning-visual">
          <img
            src="/meaning-layers-277.jpg"
            alt="Человек сидит с закрытыми глазами в сосредоточенном состоянии"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Один опыт. Разные объяснения.</figcaption>
        </figure>
      </section>

      <section className="journey-flow section-dark" id="how-it-goes" data-reveal>
        <div className="flow-heading">
          <div>
            <p className="section-index">05 / Как проходит встреча</p>
            <h2>От разговора — к путешествию и обратно</h2>
          </div>
          <p>
            Встреча идёт по понятной последовательности. Личный запрос можно
            оставить при себе, а делиться пережитым после погружения — только по желанию.
          </p>
        </div>

        <ol className="flow-steps">
          <li>
            <span>01</span>
            <h3>Собираемся</h3>
            <p>Знакомимся и начинаем с общего разговора по теме встречи.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Готовимся</h3>
            <p>Ведущий объясняет все этапы практики, показывает позу, рассказывает о правилах и отвечает на вопросы.</p>
          </li>
          <li>
            <span>03</span>
            <h3>Погружаемся</h3>
            <p>Принимаем позу, слушаем ритмический звук бубна, направляем внимание внутрь и погружаемся в практику.</p>
          </li>
          <li>
            <span>04</span>
            <h3>Завершаем</h3>
            <p>Отдыхаем, приходим в себя и даём полученному опыту уложиться. Затем пьём чай, общаемся, по желанию делимся впечатлениями и задаём вопросы.</p>
          </li>
        </ol>
      </section>

      <section className="guide section-paper" id="guide" data-reveal>
        <figure className="guide-portrait">
          <img
            src="/guide-portrait-new.png"
            alt="Ведущий практики Шамаш с деревянным посохом"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Фото: aseev.amp</figcaption>
        </figure>
        <div className="guide-copy">
          <p className="section-index">06 / Ведущий</p>
          <h2>Меня зовут Amash</h2>
          <p className="guide-intro">
            Последние восемь лет я глубоко исследую психологию, внутреннюю
            трансформацию, духовные традиции и метафизические представления о
            человеке и мире.
          </p>
          <div className="guide-story">
            <div className="guide-narrative">
              <p>
                За это время я познакомился с древними и современными подходами —
                психологическими, телесными, дыхательными, символическими и
                духовными. Изучал их, проверял на собственном опыте и наблюдал, как
                они раскрываются в жизни людей. Частью этого пути стали экспедиции
                по сакральным местам планеты.
              </p>
              <p>
                Экстатический транс стал одной из моих любимых и самых практичных
                практик. Он даёт непосредственный личный опыт и не требует заранее
                принимать определённую систему верований. Переживание можно понимать
                психологически, символически, духовно — или не давать ему
                окончательного объяснения.
              </p>
            </div>

            <div className="guide-trust-grid">
              <section className="guide-story-section">
                <h3>Опыт</h3>
                <p>
                  Около двадцати лет я работал в сфере предотвращения кризисов и
                  управления рисками. Этот опыт научил меня сохранять спокойствие,
                  внимательно относиться к состоянию людей, уважать границы и
                  заранее думать о безопасности.
                </p>
              </section>
              <section className="guide-story-section">
                <h3>Обучение</h3>
                <p>
                  Сейчас я продолжаю обучение в Институте ценностно-ориентированной
                  психологии Олега Гадецкого и изучаю метод экстатического транса в
                  ИТОП имени Фелиситас Гудман.
                </p>
              </section>
            </div>

            <p className="guide-role">
              На встрече моя задача — понятно провести вас через все этапы практики
              и создать условия для собственного опыта без давления и навязанных
              трактовок.
            </p>
          </div>
        </div>
      </section>

      <section className="safety section-light safety-cool" id="safety" data-reveal>
        <p className="section-index">07 / Безопасность</p>
        <div className="safety-heading">
          <h2>Транс — естественная способность человека</h2>
          <div>
            <p>
              В течение дня мы часто оказываемся в состояниях, близких к трансу,
              и не замечаем этого: погружаемся в музыку, дорогу, работу или свои мысли.
              Это естественное переключение внимания может давать передышку от
              постоянного анализа, помогать сосредоточиться и интегрировать опыт.
            </p>
            <p className="safety-intro-note">
              На встрече мы входим в такое состояние намеренно — через ритм, позу
              и направленное внимание.
            </p>
          </div>
        </div>

        <div className="safety-principles">
          <article>
            <span>01</span>
            <h3>Без гипноза и веществ</h3>
            <p>
              Психоактивные вещества и гипнотическое внушение не используются.
              Состояние создаётся ритмом, позой и вниманием.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Контроль остаётся у вас</h3>
            <p>
              Вы слышите происходящее и в любой момент можете открыть глаза,
              изменить позу или остановиться.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Понятное сопровождение</h3>
            <p>
              Ведущий заранее объясняет все этапы, остаётся рядом во время
              погружения и помогает спокойно завершить практику.
            </p>
          </article>
        </div>

        <div className="safety-medical-note">
          <strong>Важно</strong>
          <p>
            Это не психотерапия и не медицинская услуга. Практика не ставит
            диагнозов, не лечит заболевания и не заменяет врача или психотерапевта.
          </p>
        </div>

        <details className="safety-cautions">
          <summary>Противопоказания и состояния, требующие осторожности</summary>
          <div className="safety-cautions-content">
            <p>
              Лучше воздержаться от посещения практики в состоянии алкогольного
              или наркотического опьянения, острого психического кризиса,
              психотического или маниакального эпизода либо выраженной дезориентации.
            </p>
            <p>
              При психиатрическом диагнозе, эпилепсии, судорожных состояниях,
              неврологическом заболевании, во время психотерапии или при сомнениях
              в своём состоянии сначала обсудите участие с лечащим специалистом
              и ведущим.
            </p>
            <p>
              При беременности также стоит предварительно обсудить участие с врачом
              и ведущим. О физических ограничениях лучше сообщить заранее — для
              некоторых поз можно подобрать более комфортный вариант.
            </p>
          </div>
        </details>
      </section>

      <section className="meeting" id="meeting" data-reveal>
        <div className="meeting-card">
          <div className="meeting-copy">
            <p className="section-index">08 / Встречи</p>
            <h2>Узнайте о ближайшей встрече</h2>
            <p>
              В Telegram-боте можно узнать актуальные даты, стоимость и адрес,
              задать вопрос ведущему и записаться на встречу. В группе будут
              появляться новости и дополнительные материалы.
            </p>
          </div>
          <div className="meeting-visual" aria-hidden="true">
            <img src="/meeting-ritual-v1.png" alt="" loading="lazy" />
          </div>
          <div className="meeting-action" id="telegram">
            <ScheduleButton label="Записаться" />
            <ScheduleButton kind="group" label="Группа в ТГ" variant="secondary" />
          </div>
          <div className="meeting-meta" aria-label="Кратко об участии">
            <span>Москва</span>
            <span>До 15 человек</span>
            <span>Небольшой организационный взнос</span>
          </div>
        </div>
      </section>

      <section className="faq section-paper" data-reveal>
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
        <div className="faq-contact">
          <div>
            <h3>Остался вопрос?</h3>
            <p>
              Если вы сомневаетесь, подходит ли вам практика, хотите уточнить
              детали встречи или рассказать об ограничениях — напишите ведущему.
            </p>
          </div>
          <ScheduleButton compact label="Задать вопрос" />
        </div>
      </section>

      <footer className="site-footer" id="contacts" data-reveal>
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand-lockup" href="#top">
              <span className="brand-symbol" aria-hidden="true"><img src="/shamash-symbol.png" alt="" loading="lazy" /></span>
              <span className="wordmark">Шамаш</span>
            </a>
            <p>Пространство экстатического транса.</p>
            <p className="footer-note">Путешествие вглубь за ответами и поиском себя.</p>
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
            <div className="footer-actions">
              <ScheduleButton compact label="Связаться" />
              <ScheduleButton compact kind="group" label="Группа в ТГ" variant="secondary" />
            </div>
          </div>
        </div>

        <div className="footer-art" aria-hidden="true">
          <img src="/footer-symbols-mobile.png" alt="" loading="lazy" />
        </div>

        <div className="footer-bottom">
          <p>© 2026 Шамаш</p>
          <div>
            <a href="/privacy">Конфиденциальность и cookies</a>
          </div>
        </div>
      </footer>
      <BackToTop />
      <CookieNotice />
      <ScrollReveal />
    </main>
  );
}
