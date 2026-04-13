"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  useTransition,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  localeCookieName,
  localeLabels,
  locales,
  type Locale,
} from "../lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

function getNextPathname(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    segments.push(nextLocale);
  } else {
    segments[0] = nextLocale;
  }

  return `/${segments.join("/")}`;
}

export function LanguageSwitcher({
  currentLocale,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const listboxId = useId();
  const activeIndex = locales.indexOf(currentLocale);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      optionRefs.current[activeIndex]?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [activeIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }

      if (!containerRef.current?.contains(target)) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (nextLocale: Locale) => {
    setIsOpen(false);

    if (nextLocale === currentLocale) {
      return;
    }

    const nextPathname = getNextPathname(pathname, nextLocale);
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;

    startTransition(() => {
      router.push(`${nextPathname}${hash}`);
    });
  };

  const handleButtonClick = () => {
    if (isPending) {
      return;
    }

    setIsOpen((open) => !open);
  };

  const focusOption = (index: number) => {
    const safeIndex = (index + locales.length) % locales.length;
    optionRefs.current[safeIndex]?.focus();
  };

  const handleButtonKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(true);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  const handleOptionPointerEnter = (
    event: ReactPointerEvent<HTMLButtonElement>,
  ) => {
    event.currentTarget.focus();
  };

  const handleOptionKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusOption(index + 1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      focusOption(index - 1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusOption(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusOption(locales.length - 1);
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      buttonRef.current?.focus();
      return;
    }

    if (event.key === "Tab") {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`language-switcher${isOpen ? " language-switcher-open" : ""}`}
    >
      <button
        ref={buttonRef}
        type="button"
        className="language-trigger"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-busy={isPending}
        onClick={handleButtonClick}
        onKeyDown={handleButtonKeyDown}
        disabled={isPending}
      >
        <span className="language-trigger-glow" aria-hidden="true" />
        <span className="language-trigger-main">
          <span className="language-icon" aria-hidden="true">
            <span className="language-icon-core" />
          </span>
          <span className="language-trigger-copy">
            <small>{label}</small>
            <strong>{localeLabels[currentLocale]}</strong>
          </span>
        </span>
        <span className="language-trigger-side">
          <span className="language-trigger-code">
            {currentLocale.toUpperCase()}
          </span>
          <span className="language-caret" aria-hidden="true">
            <span />
            <span />
          </span>
        </span>
      </button>

      {isOpen ? (
        <div className="language-panel" role="presentation">
          <div className="language-panel-sheen" aria-hidden="true" />
          <div className="language-panel-grid" aria-hidden="true" />
          <div className="language-panel-head">
            <span>{label}</span>
            <div className="language-panel-current">
              <small>{currentLocale.toUpperCase()}</small>
              <strong>{localeLabels[currentLocale]}</strong>
            </div>
          </div>

          <ul id={listboxId} className="language-options" role="listbox">
            {locales.map((locale, index) => {
              const isActive = locale === currentLocale;

              return (
                <li key={locale} role="presentation">
                  <button
                    ref={(element) => {
                      optionRefs.current[index] = element;
                    }}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    className={`language-option${
                      isActive ? " language-option-active" : ""
                    }`}
                    onClick={() => handleSelect(locale)}
                    onKeyDown={(event) => handleOptionKeyDown(event, index)}
                    onPointerEnter={handleOptionPointerEnter}
                  >
                    <span className="language-option-code">
                      {locale.toUpperCase()}
                    </span>
                    <span className="language-option-copy">
                      <strong>{localeLabels[locale]}</strong>
                      <small>{locale}</small>
                    </span>
                    <span className="language-option-state" aria-hidden="true">
                      <span className="language-option-dot" />
                      {isActive ? <span className="language-option-check" /> : null}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
