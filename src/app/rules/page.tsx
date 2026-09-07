import type { Metadata } from 'next';
import { Suspense } from 'react';
import RegisterConsentPanel from './RegisterConsentPanel';

export const metadata: Metadata = {
  title: 'Правила площадки — Далиль',
  description: 'Правила площадки «Далиль»: уважение, аргумент вместо спора, ссылки на источники.',
};

export default function RulesPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <p className="font-sans text-sm uppercase tracking-wide text-ink-soft">Правила площадки</p>

      <h1 className="mt-2 font-serif text-4xl text-ink">Правила площадки «Далиль»</h1>

      <blockquote className="mt-6 border-l-2 border-rubric pl-4 font-serif text-lg italic text-ink-soft">
        «Нет принуждения в религии. Прямой путь уже отличился от заблуждения» — Коран, 2:256
        (перевод Э. Кулиева)
      </blockquote>

      <p className="mt-6 font-serif text-lg leading-relaxed text-ink">
        Далиль — довод, доказательство. Мы разговариваем аргументами, а не тоном — и ждём того же от
        каждого, кто здесь пишет.
      </p>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-ink">1. Никаких оскорблений и агрессии</h2>
        <p className="mt-3 font-serif text-lg leading-relaxed text-ink">
          Оскорбления, агрессивные выпады и нецензурная лексика — в любой форме — недопустимы, к
          кому бы они ни были обращены: к автору статьи, к другому читателю или к оппоненту в
          дискуссии.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">2. Аргумент, а не победа в споре</h2>
        <p className="mt-3 font-serif text-lg leading-relaxed text-ink">
          «Далиль» — не место для того, чтобы побеждать в споре, а место для обмена доводами и
          знанием. Не переходите на личности, не заменяйте аргумент иронией, не стремитесь оставить
          за собой последнее слово любой ценой. Наставление на прямой путь — не в человеческой
          власти: «Тот, кого Аллах ведёт прямым путём, следует прямым путём. Тому же, кого Он вводит
          в заблуждение, ты не найдёшь ни покровителя, ни наставника» (Коран, 18:17, перевод Э.
          Кулиева). Наша роль — дать довод, а дальше решает сам человек.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">3. Уважайте другие религии</h2>
        <p className="mt-3 font-serif text-lg leading-relaxed text-ink">
          Мы отвечаем на мифы и заблуждения — в том числе прозвучавшие со стороны других религий, —
          но без неуважительных высказываний в адрес этих религий, их текстов или их последователей.
          Возражение по существу — да; оскорбление — нет.
        </p>
        <p className="mt-3 font-serif text-lg leading-relaxed text-ink">
          Это не только этика площадки, но и требование закона. Конституция РФ (ст. 28) гарантирует
          каждому свободу совести и вероисповедания, включая право исповедовать любую религию или не
          исповедовать никакой. УК РФ (ст. 148) устанавливает ответственность за публичные действия,
          выражающие явное неуважение к обществу и совершённые в целях оскорбления религиозных
          чувств верующих, — вплоть до лишения свободы.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">4. Каждый довод — со ссылкой на источник</h2>
        <p className="mt-3 font-serif text-lg leading-relaxed text-ink">
          Любое серьёзное утверждение — в статье, комментарии или обсуждении — должно опираться на
          источник: аят, хадис, работу учёного или иной проверяемый первоисточник. Мнение без
          источника — не довод.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">5. Вы отвечаете за то, что публикуете</h2>
        <p className="mt-3 font-serif text-lg leading-relaxed text-ink">
          Автор статьи или комментария несёт полную ответственность за то, что публикует: за
          достоверность фактов, точность цитат и соответствие законодательству РФ. Модерация
          проверяет соответствие этим правилам, но не снимает с автора личной ответственности за
          содержание.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">6. Не ссылайтесь на запрещённые материалы</h2>
        <p className="mt-3 font-serif text-lg leading-relaxed text-ink">
          Цитирование и ссылки на материалы из федерального списка экстремистских материалов
          запрещены без исключений — независимо от контекста и цели, с которой на них хотят
          сослаться.
        </p>
      </section>
      <Suspense fallback={null}>
        <RegisterConsentPanel />
      </Suspense>
    </main>
  );
}
