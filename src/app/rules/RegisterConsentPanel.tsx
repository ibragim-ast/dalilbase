'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function RegisterConsentPanel() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  if (searchParams.get('intent') !== 'register') {
    return null;
  }

  return (
    <div className="sticky bottom-0 mt-10 border-t border-line bg-paper px-6 py-4">
      <label className="flex items-center gap-2 font-sans text-sm text-ink">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(event) => setAccepted(event.target.checked)}
        />
        Я прочитал(а) и принимаю правила площадки
      </label>
      <button
        type="button"
        disabled={!accepted}
        onClick={() => router.push('/register')}
        className="mt-3 rounded bg-rubric px-4 py-2 font-sans text-sm text-paper disabled:opacity-40"
      >
        Продолжить регистрацию
      </button>
    </div>
  );
}
